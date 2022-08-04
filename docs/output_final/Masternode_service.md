---
title: Masternode service
permalink: /Masternode_service/
---

## Create a Masternode with a local APP wallet and a Masternode from a Service Provider:

*26 April 2021.*

### For this setup you need

- 20,011 DFI (20,000 as collateral, 10 DFI for creating the masternode
  and 1 DFI for applicable fees).
- A Windows, MacBook or Linux machine with a wallet installed and
  synced.
- a Legacy Operatoraddress from a Service-Provider

### Setting up your APP wallet

We assume that you already have a working and synchronized wallet
running on your computer at home. Start it and create a new receiving
address in legacy format. To do this, open the CLI (command line) in the
APP and type the following command:

`getnewaddress "<label>" legacy`.

Enter a freely selectable name as the label, e.g. "Masternode1".
Alternatively, you can also create the legacy address in the GUI. To do
this, go to your DFI wallet, select "Receive" and + New address. Don't
forget to select the address type Legacy under the advanced options. The
newly created address will then start with an *8*. Please make a note of
this as the *"Owner Address"*.

Now you need the Operatoraddress from your Service-Provider. Switch to
the command line (CLI) in the DeFi Wallet and enter:

Unlocked Masternode:

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS`.

5-Year locked Masternode (1,5x Rewards):

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] FIVEYEARTIMELOCK`.

10-Year Masternode (2x Rewards):

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] TENYEARTIMELOCK`.

Replace the addresses again, of course: Owner is the One of the local
wallet with 20.000 DFI, Operator is the One provided by your
Service-Provider.

And watch out and don't get scared, if the Masternode was created with
the command above, a few blocks later you will see an outgoing and
incoming transaction with 20000 DFI on your owner address, but these
20000 DFI are no longer visible in the wallet.

To check your balance and see the locked 20.000 DFI in the wallet, use
the command:

`listaddressgroupings`

Done, congratulations, you've made it.

### Check status

Wait a maximum of 5 minutes and check at
[mydeficha.in/masternodes.php](http://mydeficha.in/masternodes.php) if
your addresses show up there. After a while the status should go from
Pre-Enabled to Enabled, then you have done everything right.

### HowTo monitor your Masternode

Please contact your Service-Provider about the Status. **DO NOT USE YOUR
LOCAL APP WALLET TO ENABLE OR TRY TO MANAGE YOUR MASTERNODE IN THE GUI,
UNLESS YOU WANT TO RESIGN IT.**

To monitor your Rewards, you can use the
[DFI-Explorer](https://chainz.cryptoid.info/dfi/) and search for your
Owner-Address.

### Benefits to use a Service-Provider

With a Service-Provider which offer a Operatornode for you, you own your
Keys and dont send your Coins to another Institution. You dont need to
setup a VPS, update the Node or monitor if the Node is working. You only
have to hold your Collateral in your own Wallet, create the Masternode
with the Infos from the Provider and receive the Rewards directly to
your Wallet.

### List of Service-Providers

- [mydeficha.in](https://mydeficha.in/)
- <https://www.allnodes.com/>
- <https://nodehub.io/>