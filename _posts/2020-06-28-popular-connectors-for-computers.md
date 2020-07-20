---
title: Popular connectors for computers
header:
  image: /assets/images/2020/taylor-vick-M5tzZtFCOfs-unsplash-1400.jpg
  og_image: /assets/images/2020/taylor-vick-M5tzZtFCOfs-unsplash-200.jpg
  teaser: /assets/images/2020/taylor-vick-M5tzZtFCOfs-unsplash-200.jpg
  caption: Photo by [Taylor Vick](https://unsplash.com/@tvick?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/server?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
tags:
  - Computers
---

<sup>Pin out tables, some photos and parts of data come from Wikipedia.</sup>

Computers have various of connectors for their diverse use case. Overtime, old standard become obselete and new connector emerges. Some of them established their ground and dominates in their domains. It's interesting to note their capability and how they got where they are. I am going to list some of them in this post and summarize key features. If you know a little bit about past standards, you might be amazed how technology eveolves step by step. Had if you know nothing about past standards, these connectors and standards would become old in the next decade or further in the future.

## USB

Starting from a golden standard of physical peripheral, this connector is _Universal Serial Bus_ (_USB_). USB is everywhere. You can find them in laptops, cameras, drones, headsets, gaming consoles, and even industry machines. For example, latest Macbook Pro (2020) has 4 USB-C while their old predecessors have Thunderbolt connectors. Nowadays, most Android phones come with a USB-C connector.

USB has become complicated and confusing industry standard. The confusing part comes with multiple physical connector types and its different versions. Motherboards usually have different types of USB 3.x receptacles or jump wires. Despite its historical burden, the latest version, USB-C aims to move forward with all advantages and drawbacks from its past versions and receptacles. In the past, USB's standard series are widely used. It has a larger connector than other series which is called Type-A. Type-A usually presents on a PC. Type-B has a more or less square shape. It is usually used in a display. Apart from those large receptacles, the mini series can be generally found in mobile phones. You can find a table on [Wikipedia](https://en.wikipedia.org/wiki/USB#Receptacle_(socket)_identification) about different versions and receptacles. The interesting part of the chart is USB-C and USB4 as they are the only combination that are not deprecated after 2019.

USB offers comfort to users. Devices can be hot-plugged. Devices can configure themselves with operating systems and take power from USB cables. USB also provides great abstraction for manufacturers and developers. They can focus on device functions instead of physical connectors and protocol designs.

USB4 is the current standard which has only 1 receptacle (Type-C) with many technologies packed together. Considering USB 3.x series, USB 3.0, 3.1, 3.2 specification support a transfer mode of 5, 10, 20 Gbit/s.
By the way, they were rebranded with a new set of confusing names, USB 3.2 Gen 1, USB 3.2 Gen 2, USB 3.2 Gen 2x2. Speaking of USB's simplicity, the user shall be able to connect to a receptacle and expect a device to set up itself. You are not suppose to connect a cable to a USB recepatacle and wonder why things were wrong. With past standards, you wouldn't be able to connect a cable that does not fit the receptacles. But their speed difference can be huge. For instance, USB disks can be extremly slow with USB 2 receptacle and USB 3 cable. That won't be the problem for USB 4 (Type-C).

Type-C has 24 pins other than USB3's 9 pins. Physically, USB Type-C receptacle looks smaller than its predecessor. It's thin and packed.

![Different Connectors](/assets/images/2020/connectors.jpeg)

![USB Type-C pinouts](/assets/images/2020/USB_Type-C_Receptacle_Pinout.svg)

<table class="wikitable" style="display: inline-table;">
<caption>USB-C receptacle A pin layout
</caption>
<tbody><tr>
<th scope="col">Pin
</th>
<th scope="col">Name
</th>
<th scope="col">Description
</th></tr>
<tr>
<th scope="row">A1
</th>
<td>GND
</td>
<td>Ground return
</td></tr>
<tr>
<th scope="row">A2
</th>
<td>SSTXp1
</td>
<td>SuperSpeed differential pair #1, TX, positive
</td></tr>
<tr>
<th scope="row">A3
</th>
<td>SSTXn1
</td>
<td>SuperSpeed differential pair #1, TX, negative
</td></tr>
<tr>
<th scope="row">A4
</th>
<td>V<sub>BUS</sub>
</td>
<td>Bus power
</td></tr>
<tr>
<th scope="row">A5
</th>
<td>CC1
</td>
<td>Configuration channel
</td></tr>
<tr>
<th scope="row">A6
</th>
<td>Dp1
</td>
<td>USB 2.0 differential pair, position 1, positive
</td></tr>
<tr>
<th scope="row">A7
</th>
<td>Dn1
</td>
<td>USB 2.0 differential pair, position 1, negative
</td></tr>
<tr>
<th scope="row">A8
</th>
<td>SBU1
</td>
<td>Sideband use (SBU)
</td></tr>
<tr>
<th scope="row">A9
</th>
<td>V<sub>BUS</sub>
</td>
<td>Bus power
</td></tr>
<tr>
<th scope="row">A10
</th>
<td>SSRXn2
</td>
<td>SuperSpeed differential pair #4, RX, negative
</td></tr>
<tr>
<th scope="row">A11
</th>
<td>SSRXp2
</td>
<td>SuperSpeed differential pair #4, RX, positive
</td></tr>
<tr>
<th scope="row">A12
</th>
<td>GND
</td>
<td>Ground return
</td></tr></tbody></table>
<table class="wikitable" style="display: inline-table;">
<caption>USB-C receptacle B pin layout
</caption>
<tbody><tr>
<th scope="col">Pin
</th>
<th scope="col">Name
</th>
<th scope="col">Description
</th></tr>
<tr>
<th scope="row">B12
</th>
<td>GND
</td>
<td>Ground return
</td></tr>
<tr>
<th scope="row">B11
</th>
<td>SSRXp1
</td>
<td>SuperSpeed differential pair #2, RX, positive
</td></tr>
<tr>
<th scope="row">B10
</th>
<td>SSRXn1
</td>
<td>SuperSpeed differential pair #2, RX, negative
</td></tr>
<tr>
<th scope="row">B9
</th>
<td>V<sub>BUS</sub>
</td>
<td>Bus power
</td></tr>
<tr>
<th scope="row">B8
</th>
<td>SBU2
</td>
<td>Sideband use (SBU)
</td></tr>
<tr>
<th scope="row">B7
</th>
<td>Dn2
</td>
<td>USB 2.0 differential pair, position 2, negative</sup>
</td></tr>
<tr>
<th scope="row">B6
</th>
<td>Dp2
</td>
<td>USB 2.0 differential pair, position 2, positive</sup>
</td></tr>
<tr>
<th scope="row">B5
</th>
<td>CC2
</td>
<td>Configuration channel
</td></tr>
<tr>
<th scope="row">B4
</th>
<td>V<sub>BUS</sub>
</td>
<td>Bus power
</td></tr>
<tr>
<th scope="row">B3
</th>
<td>SSTXn2
</td>
<td>SuperSpeed differential pair #3, TX, negative
</td></tr>
<tr>
<th scope="row">B2
</th>
<td>SSTXp2
</td>
<td>SuperSpeed differential pair #3, TX, positive
</td></tr>
<tr>
<th scope="row">B1
</th>
<td>GND
</td>
<td>Ground return
</td></tr></tbody></table>

Type-C has 4 power and 4 ground pins, 2 differential pairs for USB 2.0 data, 4 shielded differential pairs for USB 3.x data, and other pins. With USB Power Deliviery standard, a series of power profiles are supported. So a USB cable and power source can support 0.5W to 100W. Of course, it depends on the cable, host and devices for the power and data speed. USB 4 shall provide a maximum 40Gbit data link.

USB 4 introduces 5 alternate modes to support converters and other protocols. There are 3 types of USB Type-C cables. Firstly, full featured Type-C cable supports USB3.2 performance and other alternate connection such as DisplayPort, MHL, HDMI and Thunderbolt.
Secondly, Thunderbolt 3 Type-C to Type-C (40Gbit/s) is another type of cable which can only be used as USB2 cable other than Thunderbolt 3. Lastly, adapter cables will be available. They will have their signs indicating their ability. The best option seems to be use full featured USB 4 Type-C cables and connectors. Otherwise, we have to respect what type of USB cables are. They might not work as expected even they look like the same.

## Lightning

Apple built Lightning connector and used it in every Apple mobile devices since 2012. It's a great connector for its use. Lightning connector is not even replaced by USB-C while Macbook Pro strives to push forward the industry standard practice.

![Lightning connector pin outs](/assets/images/2020/440px-Lightning_pins.png)

<table><caption>Lightning Connector pin outs</caption><tbody>
<tr><th scope="row">Pin 1</th><td>
GND</td><td>
Ground</td></tr><tr><th scope="row">Pin 2</th><td>
L0p</td><td>
Lane 0 positive</td></tr><tr><th scope="row">Pin 3</th><td>
L0n</td><td>
Lane 0 negative</td></tr><tr><th scope="row">Pin 4</th><td>
ID0</td><td>
Identification/control 0</td></tr><tr><th scope="row">Pin 5</th><td>
PWR</td><td>
Power (charger or battery)</td></tr><tr><th scope="row">Pin 6</th><td>
L1n</td><td>
Lane 1 negative</td></tr><tr><th scope="row">Pin 7</th><td>
L1p</td><td>
Lane 1 positive</td></tr><tr><th scope="row">Pin 8</th><td>
ID1</td><td>
Identification/control 1</td></tr><tr><td colspan="4" style="text-align:center">
Lane 0 and 1 may swap in IC of device connector (lanes don't swap if the accessory identification chip is connected to the ID0 pin)</td></tr></tbody></table>

While the connector has certain layout, Lightning cables can be adapative because of Apple certified chip included in the cable. All pins seem to be able to switch between data and power. iPhone supports fast charging so the connector can support 18W charger at least. However, the speed is a secret. Sidecar feature which extends macOS screen to an iPad shows the eviendence of a fast transfering speed.  

## HDMI

HDMI is usually used to connect a display device which is surprisingly popular. It's not replaced by thunderbolt/USB4 yet, allegedly because of its price advantage.
Being a audio/video transmission interface, HDMI has its roots with its predecessor DVI.
Starting from HDMI 2.1, its encoding becomes similiar to USB3 and supports 48Gbit/s data transfering speed.

![HDMI standard connector pinouts](/assets/images/2020/HDMI_Connector_Pinout.svg)

<table>
<caption>HDMI (High-Definition Multimedia Interface) Type A Receptacle Pin out</caption>
<tbody>
<tr><th scope="row">Pin 1</th><td>
TMDS Data2+</td></tr><tr><th scope="row">Pin 2</th><td>
TMDS Data2 Shield</td></tr><tr><th scope="row">Pin 3</th><td>
TMDS Data2−</td></tr><tr><th scope="row">Pin 4</th><td>
TMDS Data1+</td></tr><tr><th scope="row">Pin 5</th><td>
TMDS Data1 Shield</td></tr><tr><th scope="row">Pin 6</th><td>
TMDS Data1−</td></tr><tr><th scope="row">Pin 7</th><td>
TMDS Data0+</td></tr><tr><th scope="row">Pin 8</th><td>
TMDS Data0 Shield</td></tr><tr><th scope="row">Pin 9</th><td>
TMDS Data0−</td></tr><tr><th scope="row">Pin 10</th><td>
TMDS Clock+</td></tr><tr><th scope="row">Pin 11</th><td>
TMDS Clock Shield</td></tr><tr><th scope="row">Pin 12</th><td>
TMDS Clock−</td></tr><tr><th scope="row">Pin 13</th><td>
<a href="/wiki/Consumer_Electronics_Control" title="Consumer Electronics Control">CEC</a></td></tr><tr><th scope="row">Pin 14</th><td>
<div class="plainlist"><ul><li>Reserved (HDMI 1.0–1.3a)</li><li>Utility/HEAC+ (HDMI 1.4+, optional, <a href="/wiki/HDMI_Ethernet_Channel" class="mw-redirect" title="HDMI Ethernet Channel">HDMI Ethernet Channel</a> and <a href="/wiki/Audio_Return_Channel" class="mw-redirect" title="Audio Return Channel">Audio Return Channel</a>)</li></ul></div></td></tr><tr><th scope="row">Pin 15</th><td>
SCL (<a href="/wiki/I%C2%B2C" title="I²C">I²C</a> serial clock for <a href="/wiki/Display_Data_Channel" title="Display Data Channel">DDC</a>)</td></tr><tr><th scope="row">Pin 16</th><td>
SDA (I²C serial data for DDC)</td></tr><tr><th scope="row">Pin 17</th><td>
Ground (for DDC, CEC, ARC, and HEC)</td></tr><tr><th scope="row">Pin 18</th><td>
+5&nbsp;V (min. 0.055&nbsp;A)</td></tr><tr><th scope="row">Pin 19</th><td>
<div class="plainlist"><ul><li>Hot Plug Detect (all versions)</li><li>HEAC− (HDMI 1.4+, optional, HDMI Ethernet Channel and Audio Return Channel)</li></ul></div></td></tr></tbody></table>

## SATA

SATA (Serial AT Attachment) can be commonly found with storage devices. Various of hard drives and SSDs use SATA for power and data transfer. M.2 connector may also use SATA bus but those devices does not use SATA connectors.

![SATA connectors](/assets/images/2020/500px-SATA_Ports.jpg)

Its data connector has 7 pins and is much smaller than PATA connector.

<table>
<caption>SATA Standard connector, data segment
</caption>
<tbody><tr>
<th colspan="2">Pin #</th>
<th>Mating</th>
<th>Function
</th></tr>
<tr>
<td style="background:black;">
</td>
<td>1
</td>
<td style="text-align:left;">1st
</td>
<td>Ground
</td></tr>
<tr>
<td rowspan="2" style="background:blue;">
</td>
<td>2
</td>
<td style="text-align:right;">2nd
</td>
<td>A+ (transmit)
</td></tr>
<tr>
<td>3
</td>
<td style="text-align:right;">2nd
</td>
<td>A− (transmit)
</td></tr>
<tr>
<td style="background:black;">
</td>
<td>4
</td>
<td style="text-align:left;">1st
</td>
<td>Ground
</td></tr>
<tr>
<td rowspan="2" style="background:blue;">
</td>
<td>5
</td>
<td style="text-align:right;">2nd
</td>
<td>B− (receive)
</td></tr>
<tr>
<td>6
</td>
<td style="text-align:right;">2nd
</td>
<td>B+ (receive)
</td></tr>
<tr>
<td style="background:black;">
</td>
<td>7
</td>
<td style="text-align:left;">1st
</td>
<td>Ground
</td></tr>
<tr>
<td colspan="3" style="text-align:center;">&nbsp;—</td>
<td>Coding notch
</td></tr></tbody></table>

Its power connector has a 15 pin connector with various of voltages.

<table>
<caption>SATA Standard connector, power segment
</caption>
<tbody><tr>
<th colspan="2">Pin #</th>
<th>Mating</th>
<th>Function
</th></tr>
<tr>
<td colspan="3" style="text-align:center;">&nbsp;—</td>
<td>Coding notch
</td></tr>
<tr>
<td rowspan="3" style="background:orange;">
</td>
<td>1
</td>
<td align="right">3rd
</td>
<td rowspan="2">3.3&nbsp;V Power
</td></tr>
<tr>
<td>2</td>
<td align="right">3rd
</td></tr>
<tr>
<td>3</td>
<td align="center">2nd
</td>
<td>Enter/exit Power Disable (PWDIS) mode<br>(3.3&nbsp;V Power, Pre-charge prior to SATA 3.3)
</td></tr>
<tr>
<td rowspan="3" style="background:black;">
</td>
<td>4
</td>
<td align="left">1st
</td>
<td rowspan="3">Ground
</td></tr>
<tr>
<td>5</td>
<td align="center">2nd
</td></tr>
<tr>
<td>6</td>
<td align="center">2nd
</td></tr>
<tr>
<td rowspan="3" style="background:red;">
</td>
<td>7
</td>
<td align="center">2nd
</td>
<td>5&nbsp;V Power, Pre-charge
</td></tr>
<tr>
<td>8</td>
<td align="right">3rd
</td>
<td rowspan="2">5&nbsp;V Power
</td></tr>
<tr>
<td>9</td>
<td align="right">3rd
</td></tr>
<tr>
<td style="background:black;">
</td>
<td>10
</td>
<td align="center">2nd
</td>
<td>Ground
</td></tr>
<tr>
<td style="background:gray;">
</td>
<td>11
</td>
<td align="right">3rd
</td>
<td>Staggered spinup/activity
</td></tr>
<tr>
<td style="background:black;">
</td>
<td>12
</td>
<td>1st
</td>
<td>Ground
</td></tr>
<tr>
<td rowspan="3" style="background:yellow;">
</td>
<td>13
</td>
<td align="center">2nd
</td>
<td>12&nbsp;V Power, Pre-charge
</td></tr>
<tr>
<td>14</td>
<td align="right">3rd
</td>
<td rowspan="2">12&nbsp;V Power
</td></tr>
<tr>
<td>15</td>
<td align="right">3rd
</td></tr></tbody></table>

The latest standard supports 6Gbit/s transfering speed.

## PCI Express

PCI-E has been the primary choices for devices that are inter-connected on the motherboard. PCI-E device communicates point-to-point with each other and use packets. PCI-E link varies from one to 32 lanes. Devices can be plugged into another PCI-E sockets. Link speed is negotiated to the maximum possible speed.

![PCI-E connector](/assets/images/2020/PCIe_J1900_SoC_ITX_Mainboard_IMG_1820.jpeg)

<table>
<caption>PCI Express connector pinout (x1, x4, x8 and x16 variants)
</caption>
<tbody><tr>
<th>Pin</th>
<th>Side B</th>
<th>Side A</th>
<th>Description
</th>
<td rowspan="54">
</td>
<th>Pin</th>
<th>Side B</th>
<th>Side A</th>
<th>Description
</th></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>1
</th>
<td style="background:silver">+12&nbsp;V</td>
<td style="background:#9f9">PRSNT1#</td>
<td align="left">Must connect to farthest PRSNT2# pin
</td>
<th>50
</th>
<td style="background:#99f">HSOp(8)</td>
<td style="background:#ff9">Reserved</td>
<td rowspan="2" style="text-align:left;">Lane 8 transmit data, + and −
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>2
</th>
<td style="background:silver">+12&nbsp;V</td>
<td style="background:silver">+12&nbsp;V</td>
<td rowspan="2" align="left">Main power pins
</td>
<th>51
</th>
<td style="background:#99f">HSOn(8)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>3
</th>
<td style="background:silver">+12&nbsp;V</td>
<td style="background:silver">+12&nbsp;V
</td>
<th>52
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(8)</td>
<td rowspan="2" style="text-align:left;">Lane 8 receive data, + and −
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>4
</th>
<td style="background:#999">Ground</td>
<td style="background:#999">Ground</td>
<td>
</td>
<th>53
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(8)
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>5
</th>
<td style="background:#fc6">SMCLK</td>
<td style="background:#99f">TCK</td>
<td rowspan="5" style="text-align:left;"><a href="/wiki/SMBus" class="mw-redirect" title="SMBus">SMBus</a> and <a href="/wiki/JTAG" title="JTAG">JTAG</a> port pins
</td>
<th>54
</th>
<td style="background:#99f">HSOp(9)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 9 transmit data, + and −
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>6
</th>
<td style="background:#fc6">SMDAT</td>
<td style="background:#99f">TDI
</td>
<th>55
</th>
<td style="background:#99f">HSOn(9)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>7
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">TDO
</td>
<th>56
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(9)</td>
<td rowspan="2" style="text-align:left;">Lane 9 receive data, + and −
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>8
</th>
<td style="background:silver">+3.3&nbsp;V</td>
<td style="background:#99f">TMS
</td>
<th>57
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(9)
</td></tr>
<tr>
<th><span style="visibility:hidden;color:transparent;">0</span>9
</th>
<td style="background:#99f">TRST#</td>
<td style="background:silver">+3.3&nbsp;V
</td>
<th>58
</th>
<td style="background:#99f">HSOp(10)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 10 transmit data, + and −
</td></tr>
<tr>
<th>10
</th>
<td style="background:silver">+3.3&nbsp;V aux</td>
<td style="background:silver">+3.3&nbsp;V</td>
<td align="left"><a href="/wiki/Standby_power" title="Standby power">Standby power</a>
</td>
<th>59
</th>
<td style="background:#99f">HSOn(10)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>11
</th>
<td style="background:#fc6">WAKE#</td>
<td style="background:#99f">PERST#</td>
<td align="left">Link reactivation; fundamental reset
</td>
<th>60
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(10)</td>
<td rowspan="2" style="text-align:left;">Lane 10 receive data, + and −
</td></tr>
<tr>
<th colspan="4">Key notch
</th>
<th>61
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(10)
</td></tr>
<tr>
<th>12
</th>
<td style="background:#fc6">CLKREQ#</td>
<td style="background:#999">Ground</td>
<td align="left">Clock Request Signal
</td>
<th>62
</th>
<td style="background:#99f">HSOp(11)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 11 transmit data, + and −
</td></tr>
<tr>
<th>13
</th>
<td style="background:#999">Ground</td>
<td style="background:#99f">REFCLK+</td>
<td align="left">Reference clock differential pair
</td>
<th>63
</th>
<td style="background:#99f">HSOn(11)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>14
</th>
<td style="background:#99f">HSOp(0)</td>
<td style="background:#99f">REFCLK−</td>
<td rowspan="2" style="text-align:left;">Lane 0 transmit data, + and −
</td>
<th>64
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(11)</td>
<td rowspan="2" style="text-align:left;">Lane 11 receive data, + and −
</td></tr>
<tr>
<th>15
</th>
<td style="background:#99f">HSOn(0)</td>
<td style="background:#999">Ground
</td>
<th>65
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(11)
</td></tr>
<tr>
<th>16
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(0)</td>
<td rowspan="2" style="text-align:left;">Lane 0 receive data, + and −
</td>
<th>66
</th>
<td style="background:#99f">HSOp(12)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 12 transmit data, + and −
</td></tr>
<tr>
<th>17
</th>
<td style="background:#9f9">PRSNT2#</td>
<td style="background:#f9f">HSIn(0)
</td>
<th>67
</th>
<td style="background:#99f">HSOn(12)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>18
</th>
<td style="background:#999">Ground</td>
<td style="background:#999">Ground</td>
<td>
</td>
<th>68
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(12)</td>
<td rowspan="2" style="text-align:left;">Lane 12 receive data, + and −
</td></tr>
<tr>
<td colspan="4">PCI Express x1 cards end at pin 18
</td>
<th>69
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(12)
</td></tr>
<tr>
<th>19
</th>
<td style="background:#99f">HSOp(1)</td>
<td style="background:#ff9">Reserved</td>
<td rowspan="2" style="text-align:left;">Lane 1 transmit data, + and −
</td>
<th>70
</th>
<td style="background:#99f">HSOp(13)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 13 transmit data, + and −
</td></tr>
<tr>
<th>20
</th>
<td style="background:#99f">HSOn(1)</td>
<td style="background:#999">Ground
</td>
<th>71
</th>
<td style="background:#99f">HSOn(13)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>21
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(1)</td>
<td rowspan="2" style="text-align:left;">Lane 1 receive data, + and −
</td>
<th>72
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(13)</td>
<td rowspan="2" style="text-align:left;">Lane 13 receive data, + and −
</td></tr>
<tr>
<th>22
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(1)
</td>
<th>73
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(13)
</td></tr>
<tr>
<th>23
</th>
<td style="background:#99f">HSOp(2)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 2 transmit data, + and −
</td>
<th>74
</th>
<td style="background:#99f">HSOp(14)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 14 transmit data, + and −
</td></tr>
<tr>
<th>24
</th>
<td style="background:#99f">HSOn(2)</td>
<td style="background:#999">Ground
</td>
<th>75
</th>
<td style="background:#99f">HSOn(14)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>25
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(2)</td>
<td rowspan="2" style="text-align:left;">Lane 2 receive data, + and −
</td>
<th>76
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(14)</td>
<td rowspan="2" style="text-align:left;">Lane 14 receive data, + and −
</td></tr>
<tr>
<th>26
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(2)
</td>
<th>77
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(14)
</td></tr>
<tr>
<th>27
</th>
<td style="background:#99f">HSOp(3)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 3 transmit data, + and −
</td>
<th>78
</th>
<td style="background:#99f">HSOp(15)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 15 transmit data, + and −
</td></tr>
<tr>
<th>28
</th>
<td style="background:#99f">HSOn(3)</td>
<td style="background:#999">Ground
</td>
<th>79
</th>
<td style="background:#99f">HSOn(15)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>29
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(3)</td>
<td rowspan="2" style="text-align:left;">Lane 3 receive data, + and −
</td>
<th>80
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(15)</td>
<td rowspan="2" style="text-align:left;">Lane 15 receive data, + and −
</td></tr>
<tr>
<th>30
</th>
<td style="background:#fc6">PWRBRK#</td>
<td style="background:#f9f">HSIn(3)
</td>
<th>81
</th>
<td style="background:#9f9">PRSNT2#</td>
<td style="background:#f9f">HSIn(15)
</td></tr>
<tr>
<th>31
</th>
<td style="background:#9f9">PRSNT2#</td>
<td style="background:#999">Ground</td>
<td rowspan="2">
</td>
<th>82
</th>
<td style="background:#ff9">Reserved</td>
<td style="background:#999">Ground</td>
<td>
</td></tr>
<tr>
<th>32
</th>
<td style="background:#999">Ground</td>
<td style="background:#ff9">Reserved
</td></tr>
<tr>
<td colspan="4">PCI Express x4 cards end at pin 32
</td></tr>
<tr>
<th>33
</th>
<td style="background:#99f">HSOp(4)</td>
<td style="background:#ff9">Reserved</td>
<td rowspan="2" style="text-align:left;">Lane 4 transmit data, + and −
</td></tr>
<tr>
<th>34
</th>
<td style="background:#99f">HSOn(4)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>35
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(4)</td>
<td rowspan="2" style="text-align:left;">Lane 4 receive data, + and −
</td></tr>
<tr>
<th>36
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(4)
</td></tr>
<tr>
<th>37
</th>
<td style="background:#99f">HSOp(5)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 5 transmit data, + and −
</td></tr>
<tr>
<th>38
</th>
<td style="background:#99f">HSOn(5)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>39
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(5)</td>
<td rowspan="2" style="text-align:left;">Lane 5 receive data, + and −
</td></tr>
<tr>
<th>40
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(5)
</td></tr>
<tr>
<th>41
</th>
<td style="background:#99f">HSOp(6)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 6 transmit data, + and −
</td></tr>
<tr>
<th>42
</th>
<td style="background:#99f">HSOn(6)</td>
<td style="background:#999">Ground
</td></tr>
<tr>
<th>43
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(6)</td>
<td rowspan="2" style="text-align:left;">Lane 6 receive data, + and −
</td>
<th colspan="4">Legend
</th></tr>
<tr>
<th>44
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIn(6)
</td>
<th style="background:#999" colspan="2">Ground pin
</th>
<td colspan="2" style="text-align:left;">Zero volt reference
</td></tr>
<tr>
<th>45
</th>
<td style="background:#99f">HSOp(7)</td>
<td style="background:#999">Ground</td>
<td rowspan="2" style="text-align:left;">Lane 7 transmit data, + and −
</td>
<th style="background:silver" colspan="2">Power pin
</th>
<td colspan="2" style="text-align:left;">Supplies power to the PCIe card
</td></tr>
<tr>
<th>46
</th>
<td style="background:#99f">HSOn(7)</td>
<td style="background:#999">Ground
</td>
<th style="background:#f9f" colspan="2">Card-to-host pin
</th>
<td colspan="2" style="text-align:left;">Signal from the card to the motherboard
</td></tr>
<tr>
<th>47
</th>
<td style="background:#999">Ground</td>
<td style="background:#f9f">HSIp(7)</td>
<td rowspan="2" style="text-align:left;">Lane 7 receive data, + and −
</td>
<th style="background:#99f" colspan="2">Host-to-card pin
</th>
<td colspan="2" style="text-align:left;">Signal from the motherboard to the card
</td></tr>
<tr>
<th>48
</th>
<td style="background:#9f9">PRSNT2#</td>
<td style="background:#f9f">HSIn(7)
</td>
<th style="background:#fc6" colspan="2"><a href="/wiki/Open_drain" class="mw-redirect" title="Open drain">Open drain</a>
</th>
<td colspan="2" style="text-align:left;">May be pulled low or sensed by multiple cards
</td></tr>
<tr>
<th>49
</th>
<td style="background:#999">Ground</td>
<td style="background:#999">Ground</td>
<td>
</td>
<th style="background:#9f9" colspan="2">Sense pin
</th>
<td colspan="2" style="text-align:left;">Tied together on card
</td></tr>
<tr>
<td colspan="4">PCI Express x8 cards end at pin 49
</td>
<th style="background:#ff9" colspan="2">Reserved
</th>
<td colspan="2" style="text-align:left;">Not presently used, do not connect
</td></tr></tbody></table>

## Summary

Connectors have different shapes optimized for different tasks. When devices or system evovles, connectors follows. A standard might try to extend its usage with designs but it does not fit every devices or future use cases. All these connectors provide essential functions such as power delivery, data transfering, some sorts of confugration pins. The way they were designed depends on its historical design and constraints.