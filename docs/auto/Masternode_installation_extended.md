---
title: Masternode installation extended
description: Full tutorial of how to set up a masternode. Local app and masternode in the cloud.
---

## Installation DefiChain Masternode with a local APP wallet and a masternode in the cloud: {#installation-defichain-masternode-with-a-local-app-wallet-and-a-masternode-in-the-cloud}

_As of 04 March 2021._

For this installation you need:

- 20,011 DFI (20,000 as collateral, 10 DFI for creating the masternode and 1 DFI for applicable fees).
- A Windows, MacBook or Linux machine with a wallet installed and synced.
- A VPS from a provider, preferably Debian 10 (64-bit).
- The VPS should have at least 2-4 vCPUs, 4 GB (better 8) RAM and at least 120GB hard disk with expandability.

### Setting up your APP wallet {#setting-up-your-app-wallet}

It is assumed that you already have a working, synchronised wallet running on your computer at home. Start it and create a new receiving address in legacy format. To do this, open the CLI (command line) in the APP and issue the following command:

`getnewaddress "<label>" legacy`.

Enter a freely selectable name as the label, e.g. "Masternode1". Alternatively, you can also create the legacy address in the GUI. To do this, go to your DFI wallet, select "Receive" and + New address. Do not forget to select the address type Legacy under the advanced options. The newly created address will then start with an _8_. Please make a note of this as the _"Owner Address"_, we will need it later.

Send your 20,011 DFI (20,000 DFI collateral, 10 DFI creation fee, 1 DFI transaction fee) to this newly created address in your wallet.

### Configuration of the virtual server {#configuration-of-the-virtual-server}

Now we go to the VPS (Virtual Private Server) for the first time. We assume that this has already been provided by the provider of your choice.

#### Update and secure the system {#update-and-secure-the-system}

Log in to your VPS via SSH as root user.

With this command you can check which version your server has installed:

`lsb_release -a`.

If it shows you what you expect (e.g. Debian 10 (64-bit)) you can move on to the next step.

First, we check if our operating system has any pending updates.

`apt update && apt full-upgrade`

If there are updates pending, install them, if not, congratulations on keeping your system up to date.

We need the packages nano and sudo to proceed. The former is an editor for editing config files, sudo is the option to get extended privileges with a non-root user. Since we want to deny our root user access via SSH later, this tool is also necessary.

With the two commands:

`apt install sudo`.

`apt install nano`

We install the required packages, if they are already installed, the command line will tell us.

#### Create new user and block root access {#create-new-user-and-block-root-access}

The next step is to create a new user. We creatively name it "defichain". You are free to choose the name, if you want to use a different one, adapt the two command lines below and enter your chosen username there:

`adduser defichain` _\<- here we create a user with the name defichain. If you choose a different username, note that your home directory will also change._

`sudo usermod -a -G sudo defichain` _\<- The new user defichain gets root rights in the system_.

After assigning a password and simply confirming the requested fields such as name and company with Enter, it is time to log in with our newly created user. We leave the console with _exit_ and start a new session via SSH (Putty) on our server. Now log in not with root, but with the user Defichain.

Does it work? Excellent, then we lock out our root user for the time being for security reasons, so that it is difficult for attackers to get into our system:

**Attention: Before this step, make sure you have noted down the username and password of the newly created user, otherwise you will lock yourself out of the system!**

`sudo nano /etc/ssh/sshd_config`

With this command we start the editor nano and open the config our shell environment.

Look for the following line:

`PermitRootLogin Yes`

and change it to:

`PermitRootLogin no`.

With Ctrl+X we leave the programme, are asked to save and don't forget to do that, otherwise our change was for the barrel.

Now we restart the SSh service and have secured our system a bit.

`sudo systemctl restart ssh`

If you want to re-enable root access on your system, you need to set the value of _No_ back to _Yes_ in the ssh_config you just changed.

#### Installing the Node (AIN version) {#installing-the-node-ain-version}

By default we are in our home directory, if you have taken the same username as suggested above, this is:

_/home/defichain/_

Now it's time for the node. Download the latest version directly from GitHub. You can do this with:

`wget https://github.com/DeFiCh/ain/releases/download/v3.1.1/defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

Then we unpack the package with the command:

`tar -xvzf defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`.

Now we create a new directory and copy the required files from the unpacked directory into it.

`mkdir /home/defichain/.defi`

`cp ./defichain-3.1.1/bin/* /home/defichain/.defi`

That's it, we have set up the node on our VPS. Now comes the tedious part: synchronisation.

#### Synchronisation {#synchronisation}

To do this, we start the node with the command:

`/home/defichain/.defi/defid -daemon`.

The switch _-daemon_ causes the node to run in the background and not directly in the shell and to close when we log out.

The sync process now takes some time. We check the progress with:

`/home/defichain/.defi/defi-cli getblockcount`.

Normally, a 0 is returned there for some time, which means that your node is still looking for other nodes to download the current blockchain. But we were not born yesterday and give our node a little boost by making it aware of 2 already known nodes with the command addnode, from which the blockchain can be downloaded:

`/home/defichain/.defi/defi-cli addnode "45.157.177.82:8555" add`.

`/home/defichain/.defi/defi-cli addnode "185.244.194.174:8555" add`

After a few seconds, we check if our node has already connected to other nodes:

`/home/defichain/.defi/defi-cli getconnectioncount`

There should be no 0 here, but if there is, check with your provider whether port 8555 is blocked and have it unblocked if necessary.

After 1-2 minutes, check the status again with

`/home/defichain/.defi/defi-cli getblockcount`.

We may have to enter the command repeatedly at intervals of 1-2 minutes before the 0 disappears and the first blocks start pouring in. As soon as the synchronised block count increases, we can celebrate ourselves profusely for the time being, we are almost there. The synchronisation takes several hours, so save yourself the trouble of sitting in front of the computer and tapping in the blockcount command. It takes time, but that is completely normal in a decentralised system.

#### Configure automatic start {#configure-automatic-start}

We now configure our server so that it restarts our node directly after a reboot:

`crontab -e`

for the automatic execution of programmes or scripts. At the end of the many comment lines we write:

`* * * * * pidof defid || /home/defichain/.defi/defid`

and jump to a new line with the enter key, this is important, otherwise you cannot save. This one line causes our node to start after every server restart and to restart itself if it should crash.

We check the block height again with the above-mentioned command (well, who remembers it without spiking?) and are either satisfied that it will soon be through or take a break until the sync is complete.

You can check the current block height at https://defiscan.live/.

#### Configuration and creation of the masternode {#configuration-and-creation-of-the-masternode}

Once the synchronisation is complete, we move on to the last steps on the VPS:

We create a new legacy address, just as we did in our local wallet. Since we don't have a GUI here, we'll stick to the command line:

`/home/defichain/.defi/defi-cli getnewaddress "MeinecooleMasternode" legacy`.

If you have typed everything correctly, you will again get a new address that starts with an _8_. We write this down as well, as the address of your _"operatornode"_.

Now we have to change the defi.conf.

`nano /home/defichain/.defi/defi.conf`

Since this does not yet exist or is empty, we enter a few lines of code there:

```
daemon=1

gen=1

spv=1

masternode_operator=OPERATOR_ADDRESS
```

At OPERATOR_ADDRESS, enter your newly created address from above (generated on the VPS), you made a special note of it.

In order for the config to take effect, we have to restart the node. This is done with the command:

`killall defi-init`.

This "kills" the node. And how do I restart it? You remember our crontab entry, the node restarts in maximum 1 minute.

You can check this with the command _TOP_, under the user defichain there must be a defi-init - usually at the top position. Alternatively, you can also execute the getblockcount command again, if the node is running, it will give you a result.

Hallelujah, that's it, our VPS is ready, the node is running.

#### Configuring our wallet {#configuring-our-wallet}

Now the step to create our masternode in the network is missing. To do this, we now go to the local wallet on our computer.

And now the creation, which will cost us 10 DFI. Don't worry, with the first reward, those 10 DFI will be back in many times over ;-)

Unlocked Masternode:

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS`.

5-Year locked Masternode (1,5x Rewards):

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] FIVEYEARTIMELOCK`.

10-Year Masternode (2x Rewards):

`createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] TENYEARTIMELOCK`.

Replace the addresses again, of course: Owner is that of the local wallet, Operator that of the VPS.

And watch out and don't get scared, if the masternode was created with the command above, a few blocks later you will see an outgoing and incoming transaction with 20000 DFI on your owner address, but these 20000 DFI are no longer visible in the wallet, as they are now locked and will only come back into your wallet when you resolve the masternode.

Done, congratulations, you've made it.

Check ==== status ====

Wait a few minutes and check at [mydeficha.in/masternodes.php](http://mydeficha.in/masternodes.php) if your addresses show up there. After a while (1008 block, \~8 hours) the status should go from Pre-Enabled to Enabled, then you have done everything right.

#### Update node {#update-node}

`wget https://github.com/DeFiCh/ain/releases/download/v3.1.1/defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

`tar -xvzf defichain-3.1.1-x86_64-pc-linux-gnu.tar.gz`

`~/.defi/defi-cli stop`

`cp ./defichain-3.1.1/bin/* ~/.defi/`

Wait 1-2 minutes for your node to be restarted automatically by crontab. With the command:

`~/.defi/defi-cli getblockcount`

you can check whether your node is running and synchronised again.

#### Multiple masternodes on the same VPS {#multiple-masternodes-on-the-same-vps}

If you own more than one complete masternode collateral (1 collateral = 20,000 DFI), you can run multiple masternodes on the same VPS. Every masternode requires a separate OPERATOR_ADDRESS and a corresponding OWNER_ADDRESS holding the collateral.

So, you have to create a new OPERATOR_ADDRESS on your VPS, fund a new OWNER-ADDRESS with the collateral and have to register a new masternode with these two addresses.

###### On your wallet: {#on-your-wallet}

1.  Create a new Legacy address with the CLI command `getnewaddress "<label>" legacy` or by using the App GUI (Make sure to choose "Legacy" under "Show advance options")
2.  That new address will appear in the "Receive" list in your DeFiChain Wallet App. (It must begin with an 8, it is not a Legacy address otherwise)
3.  Save that address, it is the new OWNER_ADDRESS
4.  Transfer the collateral to that address (20,000 DFI + additional 10 DFI for masternode creation + 1 DFI for transaction fees = 20,011 DFI)
5.  Wait a couple of blocks to securely confirm that transfer

###### On your VPS: {#on-your-vps}

1.  Generate a new OPERATOR_ADDRESS: `/home/defichain/.defi/defi-cli getnewaddress "MySecondCoolMasternode" legacy`
2.  Save the output (It's the newly created OPERATOR_ADDRESS)
3.  Inform your node about the newly created OPERATOR_ADDRESS by adding another Line of masternode_operator=OPERATOR_ADDRESS to your `/home/defichain/.defi/defi.conf` file (Keep the existing "masternode_operator" lines! Just add another one containing that newly crated address)
4.  Restart the node by terminating the running processes: `killall defi-init`

###### On your wallet again: {#on-your-wallet-again}

1.  Open up the CLI
2.  Run `createmasternode OWNER_ADDRESS OPERATOR_ADDRESS`
3.  Profit :)
