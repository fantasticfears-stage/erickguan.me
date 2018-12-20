---
title: Digging in Python iterator and enumerate
header:
  image: /assets/images/2018/erik-eastman-256489-unsplash-1400.jpg
  og_image: /assets/images/2018/erik-eastman-256489-unsplash-200.jpg
  teaser: /assets/images/2018/erik-eastman-256489-unsplash-200.jpg
  caption: Photo by [Erik Eastman](https://unsplash.com/photos/yiptq3TFiX8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/iterable?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
tags:
  - Python
  - Programing language
---

When a PyTorch DataLoader repeat its data? Why it's so magical and impossible to see in its code. It is implemented as an iterator in Python. Pythonic but implicit.

# Use case

```python
for i_batch, sample_batched in enumerate(data_loader):
    print(i_batch, sample_batched)
```

The `enumerate` is not hard to understand which only [returns the sequence and iterator's content.](https://docs.python.org/3/library/functions.html#enumerate)
So what iterator does is the key to the puzzle.

# Iterator

We can find Python’s [document](https://docs.python.org/3/glossary.html#term-iterator) about the iterator:
> An object representing a stream of data. Repeated calls to the iterator’s `__next__()` method (or passing it to the built-in function `next()`) return successive items in the stream. When no more data are available a StopIteration exception is raised instead. At this point, the iterator object is exhausted and any further calls to its `__next__()` method just raise StopIteration again. Iterators are required to have an `__iter__() `method that returns the iterator object itself so every iterator is also iterable and may be used in most places where other iterables are accepted. One notable exception is code which attempts multiple iteration passes. A container object (such as a list) produces a fresh new iterator each time you pass it to the iter() function or use it in a for loop. Attempting this with an iterator will just return the same exhausted iterator object used in the previous iteration pass, making it appear like an empty container.

The document says a lot. When you use `next(data_loader)`, it gives you a new item.
And `StopIteration` will be raised when it's exhausted. When we use `iter()` and `for` loop with the iterator, a container object is built and as a fresh new iterator.

That sounds complicated. How does it allocate? Who manages the resources? What about processes? GIL?

And more puzzles come. The document points to [itertor types](https://docs.python.org/3/library/stdtypes.html#typeiter). It didn't explain the puzzles but introduced a new concept. A container can be used as an iterator if it supports `__iter__()`. Plus `__next__()`, it'll form the iterator protocol.

But okay, it doesn't explain anything. From my experience from Ruby (MRI),
the implementation of Python should be similar to Ruby. Let's dig in  CPython.

# CPython's iterator support

CPython supports `tp_iter` as API. That's a good start. If you need to support an API, you have to implement it. The search comes to [Type Objects](https://docs.python.org/3/c-api/typeobj.html).

CPython seems to have a regular type object for every type. That's good to find stuff. Maybe it's also scary to have that long type definition if you have to define a new custom object. Loot at Asian's work, Ruby (MRI) has a surprisingly [clean interface](https://silverhammermba.github.io/emberb/c/#data) since it's managed in the object inheritance. We are too responsible for doing other's work.
Though, the document doesn't explain how `tp_iter` and `tp_iternext` were expected to use.

They are two places defined them. One is included in `typeobject.h` and the other one is `object.h`. Everything is objected in Python, so this is more relevant for now.

```c
typedef struct _typeobject {
    /* Iterators */
    getiterfunc tp_iter;
    iternextfunc tp_iternext;
} PyTypeObject;
```

But it doesn't explain how different type implements it. A list is a common sense for Python programmer so let's look at `listobject.c`. CPython uses reference counting GC. So heap
space is used for object allocation. The other pairs of functions are reference counting.

## List iterator object

```c
typedef struct {
    PyObject_HEAD
    Py_ssize_t it_index;
    PyListObject *it_seq; /* Set to NULL when iterator is exhausted */
} listiterobject;

static PyObject *
list_iter(PyObject *seq)
{
    listiterobject *it;

    if (!PyList_Check(seq)) {
        PyErr_BadInternalCall();
        return NULL;
    }
    it = PyObject_GC_New(listiterobject, &PyListIter_Type);
    if (it == NULL)
        return NULL;
    it->it_index = 0;
    Py_INCREF(seq);
    it->it_seq = (PyListObject *)seq;
    _PyObject_GC_TRACK(it);
    return (PyObject *)it;
}
```

This finally explains how container objects get its allocator. A new struct and new object are used to get iterator in Python. Then we can come to an iterator object.

## Iterator object

The funny thing is that you can't construct an iterator in Python (`iterator()`). According to another document says:

> An iterable object is an object that implements `__iter__`, which is expected to return an iterator object.

In the source code, you find similarity.

```python
typedef struct {
    PyObject_HEAD
    Py_ssize_t it_index;
    PyObject *it_seq; /* Set to NULL when iterator is exhausted */
} seqiterobject;

PyObject *
PySeqIter_New(PyObject *seq)
{
    seqiterobject *it;

    if (!PySequence_Check(seq)) {
        PyErr_BadInternalCall();
        return NULL;
    }
    it = PyObject_GC_New(seqiterobject, &PySeqIter_Type);
    if (it == NULL)
        return NULL;
    it->it_index = 0;
    Py_INCREF(seq);
    it->it_seq = seq;
    _PyObject_GC_TRACK(it);
    return (PyObject *)it;
}


static PyObject *
iter_iternext(PyObject *iterator)
{
    ...

    result = PySequence_GetItem(seq, it->it_index);

    ...
}
```

It's not much different except here it expects an iterable object. It also
builds the iterator object. So the last thing would be where `for` allocates
iterator.

## How `for` allocates the iterator?

Let's go back to the example `for i_batch, sample_batched in enumerate(data_loader):`.
When `for` statements get evaluated, the `testlist` which is `data_loader` object if not consider `enumerate` will be evaluated. It's evaluated by executing `__iter__()`
and `__next__()`. And an implicit generator will get allocated!

Until now, we know how CPython allocates the iterator as well as who manages the resource.

# Process management and GIL?

It's a wrong question as of now. If CPython manages the resource, it's
always going to be local and constrained by GIL.
