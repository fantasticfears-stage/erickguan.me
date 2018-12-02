---
title: How PyTorch implements DataParallel?
header:
  image: /assets/images/2018/joshua-coleman-652348-unsplash-1400.jpg
  og_image: /assets/images/2018/joshua-coleman-652348-unsplash-200.jpg
  teaser: /assets/images/2018/joshua-coleman-652348-unsplash-200.jpg
  caption: Photo by [JOSHUA COLEMAN](https://unsplash.com/photos/ya-SNqL9Q-g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/split?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
tags:
  - PyTorch
  - Python
  - Programming
---

PyTorch can send batches and models to different GPUs automatically with `DataParallel(model)`. How is it possible? I assume you know PyTorch uses dynamic computational graph. 

This is a complicated question and I asked on the PyTorch forum. I got [a reply](https://discuss.pytorch.org/t/how-pytorchs-parallel-method-and-distributed-method-works/30349/2?u=fantasticfears) from [Sebastian Raschka](https://discuss.pytorch.org/u/rasbt).

![Data parallel’s process in a high level](/assets/images/2018/dataparallel.png)

# `DataParallel` interface

`Module` defines its constructor and `forward` function. And `DataParallel` does the same. Let’s focus on `forward`.

```python
def forward(self, *inputs, **kwargs):
    if not self.device_ids:
        return self.module(*inputs, **kwargs)
    inputs, kwargs = self.scatter(inputs, kwargs, self.device_ids)
    if len(self.device_ids) == 1:
        return self.module(*inputs[0], **kwargs[0])
    replicas = self.replicate(self.module, self.device_ids[:len(inputs)])
    outputs = self.parallel_apply(replicas, inputs, kwargs)
    return self.gather(outputs, self.output_device)
```

There are 4 methods extracted and defined as instance methods which are `scatter`, `replicate`, `gather` and `parallel_apply`.

Firstly, we have to recognize PyTorch utilize dynamic computational graph. It builds the graph, parameters, grads and buffers until the first node is created in the `forward`.

## Step 1: splitting minibatch on GPU:0

`scatter` scatters the input argugments and returns a tuple of `inputs` and `kwargs`. The actual definiton is here:

```python
def scatter_kwargs(inputs, kwargs, target_gpus, dim=0):
    r"""Scatter with support for kwargs dictionary"""
    inputs = scatter(inputs, target_gpus, dim) if inputs else []
    kwargs = scatter(kwargs, target_gpus, dim) if kwargs else []
    if len(inputs) < len(kwargs):
        inputs.extend([() for _ in range(len(kwargs) - len(inputs))])
    elif len(kwargs) < len(inputs):
        kwargs.extend([{} for _ in range(len(inputs) - len(kwargs))])
    inputs = tuple(inputs)
    kwargs = tuple(kwargs)
    return inputs, kwargs
```

`scatter` function inside is a beautiful recursive closure. But the core is `Scatter` class. This is a [`Function` class](https://pytorch.org/tutorials/beginner/examples_autograd/two_layer_net_custom_function.html) which will operate differently in `forward` and `backward`.

```python
class Scatter(Function):
    @staticmethod
    def forward(ctx, target_gpus, chunk_sizes, dim, input):
    # ...
        streams = None
        if ctx.input_device == -1:
            # Perform CPU to GPU copies in a background stream
            streams = [_get_stream(device) for device in target_gpus]
        outputs = comm.scatter(input, target_gpus, chunk_sizes, ctx.dim, streams)
        # Synchronize with the copy stream
        # ...
        return outputs
```

I really have no idea what will happen if you call `cuda()` on your input tensor.