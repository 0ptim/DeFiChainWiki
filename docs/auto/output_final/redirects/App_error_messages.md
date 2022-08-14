---
title: App error messages
permalink: /App_error_messages/
---

1.  REDIRECT [DeFi Wallet error
    messagesWe](/DeFi_Wallet_error_messages "wikilink") distinguish
    between wallet bugs and error messages. Bugs are errors that
    represent a serious problem and must be reported to the developers.
    Error messages are errors that can be bypassed and solved by the
    user with a different behavior. If you have a technical problem,
    please check first if your problem is already described in the error
    messages and if there is already a solution for it. If your problem
    is not described in the error messages, please create an issue entry
    on GitHub. [How to submit issues for DeFi
    app](https://github.com/DeFiCh/app/wiki/How-to-submit-issues-for-Defi-App)
    There is a community suggestion on how best to use the DeFi app.
    Please read this test first to better understand the topic.
    [Suggestion for using the DeFi
    app](/Suggestion_for_using_the_DeFi_app "wikilink")

## Insufficient Fund

[thumb\|Insufficient Funds
Error\|alt=\|200x200px\|link=<https://defichain-wiki.com/wiki/File:Error_message_Insufficient_Funds.png>](/File:Error_message_Insufficient_Funds.png "wikilink")

**<big>Error Message</big>**

Some users are facing the error message **Insufficient funds** after
they made some changes like

- Swap Coins in the DEX
- Add or remove Liquidity
- Sending DFI or token to another address

One example is shown on the right side[thumb\|getbalance
command\|alt=\|313x313px\|link=<https://defichain-wiki.com/wiki/File:GetBalance.png>](/File:GetBalance.png "wikilink")

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

**<big>Error Message</big>**[300px\|thumb\|Node disconnected
Error\|link=<https://defichain-wiki.com/wiki/File:Node_disconnected.jpg>The](/File:Node_disconnected.jpg "wikilink")
error message **Node is disconnected** is shown while the wallet is
synchronizing. Most of the time the wallet is already synchronized up to
\~90%-95% when the error occurd.

**<big>Reason for the Error</big>**

There are different reasons which can lead to this error. You can
distinguish between the following different types:

1.  Wallet synchronized normally up to **80%-99%** until the error
    message is shown: That's the most common type, which is a RAM
    problem. In this case the wallet needs to much RAM to synchronize.
2.  Wallet does not synchronize and the error message occurd with
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

No help found? Go to [Debug.log](/Debug.log "wikilink")

## App stuck when starting

Before you try anything else. Restart the computer and see if the
problem is solved.

### Version 2.3.1

There is a problem with version 2.3.1

If the app is not installed as an update, but the first time on a new
system, then the blockchain folder is not created and the app cannot
start.

The problem and the fix is documented
[here](https://defichain-wiki.com/wiki/V2.3.1#Known_bugs_with_this_version).

### Other errors that also occur with other versions

**<big>Error Message</big>**

Your app might be stuck in an endless loop when you want to launch it.
Trying to launch it via the console might display *request failed with
status code 500*. Sometimes, you might also get an *unable to start
blockchain* error upon launching the app.[300px\|thumb\|Unable to start
blockchain error
message\|link=<https://defichain-wiki.com/wiki/File:App_unable_to_start_blockchain.jpg>](/File:App_unable_to_start_blockchain.jpg "wikilink")

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

No help found? Go to [Debug.log](/Debug.log "wikilink")

## Please wait until your transaction has been added to the next block before proceeding with a new transaction.

### Problem description

[center\|Error: Please wait until your transaction has been added to the
next block before proceeding with a new
transaction.\|link=<https://defichain-wiki.com/wiki/File:Photo_2021-02-26_17-16-45.jpg%7Calt=%7Cthumb%7C850x850px>It](/File:Photo_2021-02-26_17-16-45.jpg "wikilink")
is not possible to add liquidity to a pool pair.

The problem appeared for the first time in version 2.3.0.

### Solution

The problem is probably caused by the fact that coins are stored on old
and new addresses. It seems that the app is overwhelmed with taking
coins from these different addresses together and using them in one
transaction.

Workaround: created a new address and then transferred each coin and
also the LM pairs to this new address using a normal transaction. After
that, everything went back to the way it was before.

I appreciate feedback and additions to this text.

No help found? Go to [Debug.log](/Debug.log "wikilink")

## Corrupted block database

[thumb\|600x600px\|Corrupted block
database](/File:Photo_2021-03-02_22-27-44.jpg "wikilink")

Some users report that this error message occurs again and again.
Afterwards, the entire blockchain has to be reloaded, which is very
tedious. The cause of this problem lies in the incorrect termination of
the DeFi app. It is important that the app is always shut down
correctly.

As a remedy, it is recommended to work with backup solutions. Then the
entire blockchain does not have to be reloaded, but only the blocks
after creating the backup.

[Fullnode#Create and use backup for blockchain
data](/Fullnode#Create_and_use_backup_for_blockchain_data "wikilink")

## I cannot find the AppData or Library folder

Here you can find an explanation to show hidden folders like Library or
AppData.

[Show hidden folders](/Show_hidden_folders "wikilink")

## My backup file was deleted with the update

When installing an update, some folders are overwritten. On Windows
these are the following folders:

`C:\Users\%username%\AppData\Local\Programs\defi-app`

`C:\Users\%username%\AppData\Roaming\defi-app`

If the backup was stored in one of these folders before the update, it
was most likely deleted during the update.

To avoid such problems, it's best to read our wiki recommendation on how
to use the DeFi app safely.

[Suggestion for using the DeFi
app](/Suggestion_for_using_the_DeFi_app "wikilink")

## No data found

Problem: The app cannot be started. Error message "No data found"

Here's what you can try: [Delete .defi](/Delete_.defi "wikilink")

If it did not work, we can only recommend the following:

1.  [Delete all](/Delete_DeFi_App "wikilink")
2.  [Reinstall DeFi App](https://defichain.com/downloads/)
3.  [Run Defid file](/V2.3.1#Known_bugs_with_this_version "wikilink")

After that, the app can be started normally and is installed correctly.

The team is working on a professional solution!

1.

__FORCETOC__ __INDEX__ __NEWSECTIONLINK__