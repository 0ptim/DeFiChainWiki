---
title: DeFi Wallet error messages outdated
permalink: /DeFi_Wallet_error_messages_outdated/
---

Dies ist eine Unterseite von [DeFi Wallet error
message](/DeFi_Wallet_error_message "wikilink")

## Insufficient Fund

[thumb\|Insufficient Funds
Error\|alt=\|200x200px\|link=<https://defichain-wiki.com/wiki/File:Error_message_Insufficient_Funds.png>](/File:Error_message_Insufficient_Funds.png "wikilink")**<big>Error
Message</big>**

Some users are facing the error message **Insufficient funds** after
they made some changes like

- Swap Coins in the DEX
- Add or remove Liquidity
- Sending DFI or token to another address

One example is shown on the right side[thumb\|getbalance
command\|alt=\|313x313px\|link=<https://defichain-wiki.com/wiki/File:GetBalance.png>](/File:GetBalance.png "wikilink")**<big>Reason
for the Error</big>**

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