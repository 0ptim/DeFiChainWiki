---
title: Wallet Bugs
permalink: /Wallet_Bugs/
---

1.  REDIRECT [App error messagesHere](/App_error_messages "wikilink")
    you can find an overview of some bugs, which often occur and
    possible solution for it.

If the described Troubleshooting does not help, please create a Issue on
Github with your problem:
<https://github.com/DeFiCh/app/issues/new?assignees=&labels=&template=bug_report.md&title=>

## Insufficient Fund

[thumb\|Insufficient Funds
Error\|alt=\|200x200px](/File:Error_message_Insufficient_Funds.png "wikilink")


**<big>Error Message</big>**
Some users are facing the error message **Insufficient funds** after
they made some changes like

- Swap Coins in the DEX
- Add or remove Liquidity
- Sending DFI or token to another address

One example is shown on the right side[thumb\|getbalance
command\|alt=\|313x313px](/File:GetBalance.png "wikilink")


**<big>Reason for the Error</big>**
The main reason for this error is not having enough DFI coins (UTXOs) to
pay the Fees of the Blockchain in your wallet.
Unknowing users could mean, that they have enough, because the
DFI-wallet in the App shows a high enough amount. But this number is a
mixture of coins and tokens. You get Token from the DEX and
Liquidity-Mining, but you need Coins to transfer them to an Exchange or
pay for fees.
So, the first thing is checking the available coin amount in your
wallet. Go to the console and execute the command *getbalance*


**<big>Troubleshooting</big>**
If your wallet shows less than 0.01DFI, then you don't have enough DFI
in your wallet to do anything on the DefiChain. The only way to solve
this is sending DFI from outside your wallet to one of the included
addresses.

## Node disconnected


**<big>Error Message</big>**
[300px\|thumb\|Node disconnected
Error](/File:Node_disconnected.jpg "wikilink") The error message **Node
is disconnected** is shown while the wallet is synchronizing. Most of
the time the wallet is already synchronized up to \~90%-95% when the
error occurd.


**<big>Reason for the Error</big>**
There are different reasons which can lead to this error. You can
distinguish between the following different types:
\# Wallet synchronized normally up to **80%-99%** until the error
message is shown: That's the most common type, which is a RAM problem.
In this case the wallet needs to much RAM to synchronize.

1.  Wallet does not synchronize and the error message occurd with
    **0.00%** synchronization: Probably a network error


**<big>Troubleshooting</big>**
Solution to solve the different reasons for this error message:

1.  There are two different solutions for the first type:
    1.  Activate the "ReIndex after saving" option in settings to
        restart the synchronization and activate the button "Delete
        peers and blocks" to clean the old block files.
    2.  Start the wallet; wait until the wallet is synchronized up to
        \~90%-95% and shut the wallet down normally (the error message
        must not occur up to this moment); after that you can restart
        your wallet (repeat the steps until the wallet is synchronized.
        You can check the RAM usage of your PC to know the perfect time
        to shut the wallet down again)
2.  For second problem type you can try the following solutions:
    1.  Check your firewall settings
    2.  Check your network settings (connect with a private networt
        instead of a public network)
    3.  Check your Antivir program

## App stuck when starting


**<big>Error Message</big>**
Your app might be stuck in an endless loop when you want to launch it.
Trying to launch it via the console might display *request failed with
status code 500*. Sometimes, you might also get an *unable to start
blockchain* error upon launching the app.

[300px\|thumb\|Unable to start blockchain error
message](/File:App_unable_to_start_blockchain.jpg "wikilink")


**<big>Reason for the Error</big>**
Most likely it is a memory (RAM and/or disk space) issue.


**<big>Troubleshooting</big>**
Here are a couple of steps that might help:

1.  Quit the app
2.  Close unneeded open programs
3.  Open a system monitor program (Task Manager, Activity Monitor), keep
    monitoring your RAM utilization
4.  Make sure you have enough disk space available (more than your RAM
    size), free up enough so that the app can create a swap file if it
    runs out of RAM
5.  Disable and enable your network connection, possibly use another one
    temporarily
6.  Try again

If that does not help, try launching the app with the *-reindex*
parameter from the command line.

Still not working? Here are some more experimental steps:

1.  Create a backup of your *wallet.dat* file (MacOS:
    \~/Library/ApplicationSupport/defi/wallets), preferably of the whole
    *defi* folder to another drive
2.  Remove all *.dat* files in the *blocks* folder (MacOS:
    \~/Library/ApplicationSupport/defi/blocks). Try again.
3.  Downgrade to the last version that worked for you
    [here](https://github.com/DeFiCh/app/releases). Try again.
4.  Delete all wallet data from the *defi* folder, start the app again,
    then quit it. Now the folder structure should have been created
    again. Copy over *wallet.dat* from your backup and launch the app
    again.

Everyting failed so far? Let's start from scratch. You'll need for
mnemonic seed for this.

1.  Delete app data (section above), uninstall *defi-app* entirely.
2.  Reinstall a version you think might work (either an older specific
    one or the latest)
3.  Launch the app
4.  Recreate the wallet from mnemonic seed.

Good luck!