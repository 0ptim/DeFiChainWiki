---
title: How to "rescue" stuck DFI
permalink: /How_to_rescue_stuck_DFI/
---

**Disclaimer: Console should be used in care. We are not responsible if the wrong commands are issued resulting in lost coins!**

If you have problems sending your DFI from the Wallet try the following **step-by-step instruction**

## Step 1: Checking DFI-coin vs. DFI-token

Before starting we should check, if a DFI-sending problem is caused by "unwrapped" DFI

![DFI-amount showed in the wallet](./../media/DFI_Wallet.webp)

Your DFI-Wallet is showing an DFI amount. To see, how many coins and tokens you have, you need the following 2 commands:

`getbalance`  
`gettokenbalances {} true true`

![checking DFI-coins vs. DFI-token](./../media/DFI-coins_vs._DFI-token.webp)

In the above picture you see, most DFI are Token and not Coins. These Tokens cannot be transferred to another address.

**HINT: You may need some DFI-coins (see getbalance) to execute commands from Step 4.**

## Step 2: Find addresses holding DFI-Token

The above shown DFI-amount are hold by one or more addresses. To find out, which one are hold the token, use the following command:

`listaccounts {} false false true`

You are getting a list of entries, which should look like this:

![address with DFI-token](./../media/Address_with_DFI-token.webp)

## Step 3: Checking all tokens on relevant address

Before changing token to coin, please check the amount and all the other tokens on this address with:

`getaccount`  
`address_from_command_before`

You should get the following result:

![List of tokens on the address](./../media/Tokens_on_address.webp)

## Step 4: Converting token to coin

Now, we come to the last, essential step. This will convert an amount of token into coins. Use the command:

`accounttoutxos address_from_above` {"adress_from_above":"DFI_amount_to_convert@DFI"}

### Error

**If you execute the command from Step 4, you may get the following error:**

![Error when changing token to coin](./../media/Error_changing_token_to_coin.webp)

Then you need additional steps:

#### Step 4.1: Sending DFI-coin to Token-adress

Send a small amount of DFI to this address!

![Sending DFI-coin to address with token, result is a Tx-hash](./../media/Result_Tx-Hash.webp)

You will get an Tx-Hash as a result.

#### Step 4.2: Check Confirmation

Please go to <https://explorer.defichain.io/#/DFI/mainnet/home> to check, if it is confirmed before you proceed.

![Confirmations after exection of command](./../media/Check_Confirmation.webp)

#### Step 4.3: Converting token to coin

Now, you can run the accounttoutxos command from above again. If it is successful, you will get an Tx-hash, which can be checked in the explorer again (Step 5)

![Successful execution of Token-to-Coin conversion](./../media/Token-to-Coin_conversion.webp)

## Step 5: Check conversion

Just to be sure, everythin worked, you can run the commands getaccount address and getbalance again. In the following Picture, you see that the DFI-coin amount is now increased by 2DFI. The token were converted.

[New token and coin balance](./../media/New_Balance.webp)

## Source

Daniel Zirkel:
<https://www.reddit.com/r/defiblockchain/comments/kb10d3/stepbystep_changing_dfitoken_to_dficoin/?utm_medium=android_app&utm_source=share>
