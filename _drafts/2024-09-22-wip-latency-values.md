---
title: Latency Values for programmers
header:
  image: /assets/images/2024/ales-krivec-time-1920.jpg
  og_image: /assets/images/2024/ales-krivec-time-640.jpg
  teaser: /assets/images/2024/ales-krivec-time-640.jpg
  caption: Photo by [Ales Krivec]https://unsplash.com/photos/turned-on-gray-alarm-clock-displaying-1011-ZMZHcvIVgbg).
tags:
  - Latency

---

Latency values are important for modern software. A program usually waits for IO, another thread to complete a task, a network request has completed. For a system, a database lock will create contention of other database connections. A Global Interpreter Lock will force other threads to wait. These are important and common problems to consider. But hardware are certainly becoming faster over decades. Here is what I learnt in 2024.

## Storage

Storage device and compute device innovation is certainly most relevant for any kinds of software applications. I am also curious if there are ambitious people dare to challenge computer architecture.

DDR5 can have 6000 MT/s so this is 48k MB/s (random access). SSD is surprisingly close in terms of sequential read/write nowadays even random read by spec. Although performance would not be great without memory, it looks to me it's viable to build computer with only SoC and SSD without having volitie memory. Of course, there is no operating system and cache pipeline built for this. So this is something to program for. But for low-end device, this is physically possible.

Computer history usually presents a story that you simply build general-purpose computer. But now, I guess CUDA and NVIDIA's success is also mocking the idea that "innovation is mission impossible". I am not hardware expert but interesting to hear more about hardware people.