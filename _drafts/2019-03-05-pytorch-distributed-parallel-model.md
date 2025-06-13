---
title: How PyTorch implements DistributedDataParallel?
header:
  image: /assets/images/2019/Pytorch_logo-1400.png
  og_image: /assets/images/2019/Pytorch_logo-200.png
  teaser: /assets/images/2019/Pytorch_logo-200.png
  caption: Photo from [WikiCommons](https://commons.wikimedia.org/wiki/File:Pytorch_logo.png)
tags:
  - PyTorch
  - Python
  - Programmin
classes: wide
toc: true
---

See [how PyTorch implements DataParallel](https://erickguan.me/2019/pytorch-parallel-model).

`torch.nn.parallel.DistributedDataParallel()` claims to be better than `torch.nn.DataParallel()`. Though `DistributedDataParallel` looks much more complicated.

We will evaluate this claim, explain what the wrapper does, and how the wrapper is implemented. I assume you know PyTorch’s dynamic computational graph as well as Python GIL. And PyTorch version is v1.0.1.

# Initialization

Because of multi-process nature of the package, we need to initialize the package.

## 

# `DistributedDataParallel` Interface

`DistributedDataParallel` can be seen as a multi-node enhancement on top of the `DataParallel`. Indeed, its implementation reuses the same methods in `DataParallel`.

## Building 