---
title: App on Raspberry-Pi
description: TODO - Short description of this page.
permalink: /App_on_Raspberry-Pi/
---

In the meantime there is a growing group of Raspberry Pi owners who use
or want to use the Defi Node (command line client) or the Defi Wallet
(desktop app).

Since there is currently no official DeFiChain release available for the
Raspberrys, several community members have created their own
compilations.

The goal of this page is to give an overview of the different
possibilities.

## DeFiNode {#definode}

With this project you can print a 3D enclosure yourself and create and
run a Node or Wallet locally on a Raspberry Pi 4.

#### Links {#links}

- [DeFiNode on Github](https://github.com/definode), there is all the
  documentation available
  - Shopping list for hardware
  - Source Code for 3D-Printer
  - Raspberry OS installation / configuration
  - Installation script for creating the Defi Wallet
- [DeFiNode on Telegram](https://t.me/DeFi_Node), for questions and
  support
- [DeFiNode Druckservice](https://www.gabrielkunzer.com/definode/),
  there you can order your own DEFI case

#### Pros {#pros}

- Step by step guide to running DeFi Fullnode.
- Has the option for "don't trust - verify" the source code

#### Cons {#cons}

- Own creation of the Defi Wallet on the Raspberry with several hours of
  time (\~2.5h)
- Runs as a web app in the browser window

## RaspberryPI Image {#raspberrypi-image}

The image contains the Raspberry Pi OS and the installation of the Defi
Wallet. After copying the image to the memory card / USB memory and
configuring the OS, the Defi Wallet is ready to use. It couldn't be
easier.

#### Links {#links-1}

- [Google
  Drive](https://drive.google.com/drive/folders/1yGWeP8gqt5JNypeeJTZ-0aqh-k04m7Jj?usp=sharing),
  there is the image file available for download
- [RaspberryPi Imager](https://www.raspberrypi.org/software/), for
  copying the image to the memory card

#### Pros {#pros-1}

- "Normal" Raspberry Pi OS installation with preinstalled Defi Wallet -
  fast and easy

#### Cons {#cons-1}

- Runs as web app in browser window
- Since fully compiled and pre-installed, "don't trust - verify" is not
  given

## Defi Wallet for Raspberry Pi {#defi-wallet-for-raspberry-pi}

These AppImages correspond to the Defi Wallets for Linux, Mac and
Windows, as they are officially offered by DeFiChain and are a
supplement to its offer. There is also the Defi Node in the command line
version, i.e. the fullnode in the client version. The AppImage and the
fullnode are available in 32-bit and 64-bit versions respectively.

#### Links {#links-2}

- [Defi Wallet on
  Github](https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi),
  there is the AppImage available for download
- [Defi Node on
  Github](https://github.com/Martin8617/Defi-Node-for-Raspberry-Pi),
  there is the client version available for download

#### Pros {#pros-2}

- Corresponds graphically exactly to the official Defi Wallets
- Runs as desktop app
- Client version for operation without GUI (graphical user interface)

#### Cons {#cons-2}

- Since fully compiled, "Don't trust - verify" is not given
