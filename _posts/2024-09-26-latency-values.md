---
title: Latency values for programmers in 2024
header:
  # image: /assets/images/2024/ales-krivec-time-1920.jpg
  # og_image: /assets/images/2024/ales-krivec-time-640.jpg
  # teaser: /assets/images/2024/ales-krivec-time-640.jpg
  # caption: Photo by [Ales Krivec](https://unsplash.com/photos/turned-on-gray-alarm-clock-displaying-1011-ZMZHcvIVgbg).
tags:
  - Latency

---

Latency matters in software. As hardware evolves, the assumptions we make about computer systems must evolve with it. Programs often spend time waiting—on disk or network I/O, on another thread to finish work, or on a remote service to respond. Within a system, a database lock can stall other connections, and a global interpreter lock (GIL) can block parallel threads. These forms of contention are common and important to address. Although hardware has grown dramatically faster over the decades, the fundamental latency challenges remain. Below is what I learned in 2024.

| Operation                          | Time in nanosecond | Time in microsecond | Time in millisecond | Comparison        | Reference                                                    |
| ---------------------------------- | ------------------ | ------------------- | ------------------- | ------------------ | ------------------------------------------------------------ |
| L1 cache reference                 | 0.7                |                     |                     |                    | Zen 5 numbers                                                |
| L2 cache reference                 | 2.5                |                     |                     |                    |                                                              |
| Branch mispredict                  | 8                  |                     |                     |                    |                                                              |
| L3 cache reference                 | 8                  |                     |                     |                    |                                                              |
| Mutex lock/unlock                  | 25                 |                     |                     |                    |                                                              |
| Main memory reference              | 70                 |                     |                     | 100x L1            |                                                              |
| Send 2 kB over 10 Gbps network     | 1600               | 1.6                 |                     |                    |                                                              |
| Compress 1K bytes with Snappy      | 2000               | 2                   |                     |                    |                                                              |
| Read 1 MB sequentially from memory | 10000              | 10                  |                     |                    | ~50 GB/s DDR5                                                |
| Read 4K randomly from SSD          | 20000              | 20                  |                     |                    | ~10 GB/s NVMe                                                |
| Read 1 MB sequentially from NVMe   | 100000             | 100                 |                     |                    |                                                              |
| Round trip within same datacenter  | 100000             | 100                 |                     |                    | ~0.5GB/sec SSD, 100x memory, 20x NVMe                        |
| SSD seek time                      | 160,000            | 160                 |                     | 2,000x main memory | ~150MB/sec                                                   |
| Read 1 MB sequentially from SSD    | 2,000,000          | 2000                | 2                   |                    |                                                              |
| AWS region round trip              | 2,000,000          | 2000                | 2                   |                    |                                                              |
| Read 1 MB sequentially from HDD    | 6,000,000          | 6000                | 6                   |                    |                                                              |
| Send 1 MB over 1 Gbps network      | 10,000,000         | 10000               | 10                  |                    |                                                              |
| HDD random seek time               | 10,000,000         | 10000               | 10                  |                    | Often times, data are located close by. The typical seek time should be lower. |
| Send packet CA->Netherlands->CA    | 150,000,000        | 150000              | 150                 |                    |                                                              |

Storage device and compute device innovations are most relevant to software applications. Apart from latency numbers, DDR5 runs at 6,000 MT/s, so this is 48,000 MB/s (random access). SSDs perform surprisingly well in terms of sequential read/write nowadays.

| Sources                                                      |
| ------------------------------------------------------------ |
| [https://static.googleusercontent.com/media/sre.google/en//static/pdf/rule-of-thumb-latency-numbers-letter.pdf](https://static.googleusercontent.com/media/sre.google/en/static/pdf/rule-of-thumb-latency-numbers-letter.pdf) |
| [https://gist.github.com/BlackHC/2d0a3a21542b524a7cf2f8eac977481e](http://web.archive.org/web/20240815121029/https:/gist.github.com/BlackHC/2d0a3a21542b524a7cf2f8eac977481e) |
| [https://colin-scott.github.io/personal_website/research/interactive_latency.html](https://colin-scott.github.io/personal_website/research/interactive_latency.html) |
| [https://cloud.ibm.com/docs/vpc?topic=vpc-network-latency-dashboard](https://cloud.ibm.com/docs/vpc?topic=vpc-network-latency-dashboard) |
| [https://en.wikipedia.org/wiki/Hard_disk_drive_performance_characteristics](https://en.wikipedia.org/w/index.php?title=Hard_disk_drive_performance_characteristics&oldid=1221433550) |
