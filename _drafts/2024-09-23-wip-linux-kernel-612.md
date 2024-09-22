---
title: Linux Kernel 6.12
header:
  image: /assets/images/2024/nathan-anderson-hardware-1920.jpg
  og_image: /assets/images/2024/nathan-anderson-hardware-640.jpg
  teaser: /assets/images/2024/nathan-anderson-hardware-640.jpg
  caption: Photo by <a href="https://unsplash.com/@nathananderson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Anderson</a> on <a href="https://unsplash.com/photos/black-and-brown-computer-tower-xV3CHzfhkjE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
tags:
  - Latency
---

Linux has optimized performance in multiple systems. I have read many about IO_uring and BPF.

Linux 6.12 Scheduler Code Adds SCHED_DEADLINE Servers & Complete EEVDF

What is EEVDF https://lwn.net/Articles/925371/

Real-Time "PREEMPT_RT" Support Merged For Linux 6.12 Linus Torvalds went ahead and merged the PREEMPT_RT support for Linux 6.12. This real-time kernel support is initially available for ARM64, RISC-V, and x86 / x86_64. This real-time kernel support has been twenty years in the making and to this point maintained via a frequently updates set of out-of-tree patches.

VFS+XFS Changes Land In Linux 6.12 To Support Block Sizes Larger Than Page Size

Linus Torvalds has merged VFS block size code changes for enabling block sizes larger than the system page size. This work has been ongoing over the past 16 years and with Linux 6.12 is finally being mainlined to make this next kernel all the more exciting.

With this code for Linux 6.12, the VFS infrastructure for allowing a block size larger than the page size is merged as well as enabling that support for the XFS file-system.

Microsoft engineer Christian Brauner explained in the pull request:

> "This contains the vfs infrastructure as well as the xfs bits to enable support for block sizes (bs) larger than page sizes (ps) plus a few fixes to related infrastructure.
>
> There has been efforts over the last 16 years to enable enable Large Block Sizes (LBS), that is block sizes in filesystems where bs > page size. Through these efforts we have learned that one of the main blockers to supporting bs > ps in filesystems has been a way to allocate pages that are at least the filesystem block size on the page cache where bs > ps.
>
> Thanks to various previous efforts it is possible to support bs > ps in XFS with only a few changes in XFS itself. Most changes are to the page cache to support minimum order folio support for the target block size on the filesystem.
>
> A motivation for Large Block Sizes today is to support high-capacity (large amount of Terabytes) QLC SSDs where the internal Indirection Unit (IU) are typically greater than 4k to help reduce DRAM and so in turn cost and space. In practice this then allows different architectures to use a base page size of 4k while still enabling support for block sizes aligned to the larger IUs by relying on high order folios on the page cache when needed.
>
> It also allows to take advantage of the drive's support for atomics larger than 4k with buffered IO support in Linux. As described this year at LSFMM, supporting large atomics greater than 4k enables databases to remove the need to rely on their own journaling, so they can disable double buffered writes, which is a feature different cloud providers are already enabling through custom storage solutions"