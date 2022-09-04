---
title: App Sync Boost
description: TODO - Short description of this page.
---

Sometimes the Wallet-APP in Windows, Mac or Linux need a long time to sync the whole blockchain.

In this case you can manually add some Fullnodes with a high and stable Internet Connection to your Peerlist to give the sync a "boost".

![](../media/Cli_addnode.jpg)

To do this, open the CLI in the APP and type the following Command:

`addnode "ipaddress:port" add`

Click Enter and and when the output is 'null', the command was successfull.

If you like you can also add lines in the defi.conf file to make sure, every restart after an update or installed snapshot has these nodes set as peers, e.g.(see [github](https://github.com/DeFiCh/ain/blob/master/share/examples/default.conf) for examples and documentation):

`addnode=seed.mydeficha.in:8555`

A list of Fullnodes can you find [here](./Fullnode.md#list-of-fullnodes).

The project [mydeficha.in](https://mydeficha.in/) offers a seed you can add. This will in fact add many addresses at once.

Simple type

`addnode "seed.mydeficha.in:8555" add`

in the command line.

If you get a "Method not found" you probably have a typo or forget a " " (space/blank) after addnode.
