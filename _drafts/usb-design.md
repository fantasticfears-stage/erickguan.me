---
title: USB
header:
tags:
---

From system design perspective, USB does not change much. A USB system consists of a host with one or more ports, peripherals, up to 5 tiered hubs. They follow a tiered-star topology to connect together. A host might have muliple host controllers which support 127 devices by one or more ports. USB devices are linked through hubs. The host controller embeds a root hub. A USB device can be a simple device or a composite device which consists of several logical sub-devices. Or a USB device can be a so called compound device. The host assigns distinct address and all logical devices to a built-in hub that connects to a physical cable.

Because of star toplogy, a connection must be established between a logical USB device and host controller. The logical connection is called a pipe. Each USB device can have up to 32 endpoints (16 in and 16 out).
There are stream pipe and message pipe. A message pipe is bi-directional and is used for control. A stream pipe is uni-directional and supports isochronous, interrupt, or bulk transfer. Starting from USB 3.0, its SuperSpeed mode provides a full-duplex connection with dual-bus architecture.
## HDMI
Starting from the beginning, HDMI is backward compatible to DVI. HDMI has 3 communication channel which is different than USB's modes of operation.

## SATA
Advanced Host Controller Interface (AHCI) works as a host controller which supports hot-plug for SATA devices. 