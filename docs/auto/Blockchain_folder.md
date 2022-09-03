---
title: Blockchain folder
description: TODO - Short description of this page.
permalink: /Blockchain_folder/
---

## Instructions for changing the directory of the blockchain data/snapshot for the DeFiChain {#instructions-for-changing-the-directory-of-the-blockchain-datasnapshot-for-the-defichain}

### Windows {#windows}

Follow this procedure:

1.  Make sure that the DeFiChain app is closed
2.  Using Explorer go to directory `C:\Users\<username>\.defi` (Make sure you [see hidden folders](./Show_hidden_folders.md))
3.  Open the file `defi.conf` in your favorite text editor (e.g. Notepad)
4.  Add the line: `datadir=<storage directory blockchain data>`. **Important**: The line has to be added before the `[main]` section! → Instead of `<storage directory blockchain data>` you have to enter the path where you want to move the blockchain folder
5.  If you move the default folder from `C:\Users\<username>\AppData\Roaming\DeFi Blockchain` to the new directory also change the wallet directory accordingly by adding `wallets` to the data directory: `walletdir=<storage directory blockchain data>\wallets`

Example:

``` ini
rpcauth=something
rpcuser=something
rpcpassword=something
rpcpassword=something
rpcpassword=something
datadir=D:\defichain
[main]
wallet=Wallet.dat
walletdir=D:\defichain\wallets
```

6.  Save the file and start the app
7.  The app now recreates the blockchain folders in the datadir and will start with a complete download of the whole blockchain. (16.3.2021: roughly 25 GB)
8.  If a blockchain folder already exists in the new path (e.g. because you moved it), then enter it in the path in `defi.conf`. For example `datadir=D:\defichain\Defi Blockchain`. This makes it possible to copy the blockchain into the new directory beforehand without having to start a new sync.

App v2.3.3 works correctly with a moved directory.

### Mac {#mac}

Follow this procedure:

1.  Make sure that the DeFiChain app is closed
2.  Go to directory `~/.defi` (Maybe you have to press `[CMD]` + `[SHIFT]` + `[.]` to [see hidden folders](./Show_hidden_folders.md) or use `[CMD]` + `[SHIFT]` + `[G]` in Finder in your home folder and enter .defi in the popup).
3.  Open the file `defi.conf` in your favourite text editor
4.  Add the line: `datadir=<storage directory blockchain data>`. Important: The line has to be added before the `[main]` section! → Instead of this variable `<storage directory blockchain data>` you have to add the path where you want to move the blockchain folder
5.  If you move the default folder from `~/Library/Application Support/DeFi` to the new directory also change the wallet directory accordingly by adding `wallets` to the data directory:`walletdir=<storage directory blockchain data>/wallets`

Example:

``` ini
rpcauth=something
rpcuser=something
rpcpassword=something
rpcpassword=something
rpcpassword=something
datadir=/Users/me/defichain
[main]
wallet=wallet.dat
walletdir=/Users/me/defichain/wallets
```

6.  Save the file and start the app
7.  The app now recreates the blockchain folders in the datadir and will start with a complete download of the whole blockchain. (16.3.2021: roughly 25 GB)
8.  If a blockchain folder already exists in the new path, then enter it in the path. For example `datadir=/User/me/Defi`. This makes it possible to copy the blockchain into the new directory beforehand without having to start a new sync.

App v2.3.3 works correctly with a moved directory.