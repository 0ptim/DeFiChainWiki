---
title: Fullnode
description: TODO - Short description of this page.
---

## DeFiChain Fullnode {#defichain-fullnode}

To stabilize the network, it is possible to setup a DeFiChain Fullnode on a virtual or physical server with a fixed IP address. A Fullnode holds the whole blockchain without acting as a masternode (no Collateral required) and other Nodes and Wallets in the network can use it to synchronize. Everyone in the community can help make the network more stable with a public Fullnode.

## Requirements {#requirements}

### General {#general}

- Fixed IP address
- Port forwarding enabled on router (Port 8555)
- 24/7 online
- Stable internet connection (Upload)

### Hardware {#hardware}

- 100 GB free disk space (SSD recommended)
- 2-4 vCPU
- 4 GB Memory

### Software {#software}

- Debian 10, 64 Bit
- Ubuntu 18.04 or 20.04
- CentOS 8

Ubuntu 16.04 is no longer supported with Version 1.7.0 and higher.

## List of Fullnodes {#list-of-fullnodes}

- [195.90.210.76:8555](http://status.defichain-masternode.com/) (Germany, Berlin)
- [85.214.187.210:8555](http://status.defichain-masternode.com/) (Germany, Berlin)
- [85.214.55.116:8555](http://status.defichain-masternode.com/) (Germany, Berlin)
- [45.157.177.82:8555](http://status.defichain-masternode.com/) (Germany, Karlsruhe)
- [185.244.194.174:8555](http://status.defichain-masternode.com/) (Germany, Karlsruhe)
- [202.61.246.71:8555](http://status.defichain-masternode.com/) (Germany, Karlsruhe)
- [24.134.79.25:8555](http://status.defichain-masternode.com/) (Germany, Würzburg)
- [77.56.65.5:8555](http://status.defichain-masternode.com/) (Switzerland, Greifensee)
- ...

to be continued...

## Fullnode Installation {#fullnode-installation}

#### Ubuntu 18.04/20.04 {#ubuntu-18042004}

##### Create Swapfile {#create-swapfile}

*recommended for Systems less then 4 GB*

`sudo fallocate -l 4G /swapfile`

`sudo chmod 600 /swapfile`

`sudo mkswap /swapfile`

`sudo swapon /swapfile`

*Check the swapfile*

`sudo swapon --show`

*make the Swapfile permanent*

`sudo cp /etc/fstab /etc/fstab.bak`

`echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`

*Optimization*

`sudo sysctl vm.swappiness=10`

`sudo nano /etc/sysctl.conf`

`vm.swappiness=10`

##### Install Fullnode {#install-fullnode}

[Latest Version](https://github.com/DeFiCh/ain/releases/latest)

`wget https://github.com/DeFiCh/ain/releases/download/v2.11.1/defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz`

*check your downloaded package*

`wget https://github.com/DeFiCh/ain/releases/download/v2.11.1/defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz.SHA256`

`sha256sum -c defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz.SHA256`

*unzip package*

`tar -xvzf defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz`

*copy to directory*

`mkdir ~/.defi`

`cp ./defichain-2.11.1/bin/* ~/.defi`

**WARNING**  
This will work but you should avoid placing executables in ~/.defi because this is where most of you will be extracting your snapshots into. If you don't selectively pick only those files you need from your snapshot every time you could unknowningly replace key files that could cause your full node to be compromised and could even cause your funds to be stolen. If you keep important files out of your data directory they can not be overwritten by a malicious snapshot.


##### Start Fullnode {#start-fullnode}

*Start Fullnode*

`~/.defi/defid -daemon`

*When you upgrade from a previous version, please reindex the whole blockchain data*

`~/.defi/defid -reindex -daemon`

##### Monitor Fullnode {#monitor-fullnode}

*Check Blockcount*

`.defi/defi-cli getblockcount`

*Start defid after reboot*

`sudo crontab -e`

`* * * * * pidof defid || ~/.defi/defid`

*Is your node online?*

After the node is completely synchronized, check the number of connections with the command below.

`~/.defi/defi-cli getconnectioncount`

If the number of connections is 8 or less, only outbound connections are active. Check your firewall or router to see whether your full node can be reached from the Internet via port 8555. More than 8 connections mean that incoming connections are also possible and exist.

## Create and use backup for blockchain data {#create-and-use-backup-for-blockchain-data}

### Problem description {#problem-description}

![Corrupted block database](../media/fullnode_EN_1.jpg)

Some users report that this error message occurs again and again. Afterwards, the entire blockchain has to be reloaded, which is very tedious. The cause of this problem lies in the incorrect termination of the DeFi app. It is important that the app is always shut down correctly.

As a remedy, it is recommended to work with backup solutions. Then the entire blockchain does not have to be reloaded, but only the blocks after creating the backup.

### Create backup {#create-backup}

1.  Close the DeFi app
2.  Go to the folder with the blockchain data On Windows: `C:\Users\%username%\AppData\Roaming\DeFi Blockchain` On Mac: `/Users/%username%/Library/Application Support/DeFi/` On Linux: `~/.defi`
3.  Copy the following 3 folders to another location. This is your blockchain backup. `blocks` `enhancedcs` `chainstate`
4.  The backup is thus created.

![enhancedcs blocks chainstate](../media/fullnode_EN_2.png)

### Restore backup {#restore-backup}

1.  Launch the DeFi app and make sure the app has started syncing.
2.  Exit the DeFi App
3.  Go to the folder with the blockchain data On Windows: `C:\Users\%username%\AppData\Roaming\DeFi Blockchain` On Mac: `/Users/%username%/Library/Application Support/DeFi/` On Linux: `~/.defi`
4.  Delete the following folders `blocks` `enhancedcs` `chainstate`
5.  Copy the 3 folders from your backup to this folder
6.  Restart the computer
7.  Launch the DeFi App
8.  The app should now continue at the state of the last backup.

## Blockchain Snapshot Service {#blockchain-snapshot-service}

### Introduction {#introduction}

A snapshot helps in cases of corrupted blocks not to re-index the blockchain again. You will start from a much closer block to the most recent one. So, usage of a blockchain snapshot saves time and nerves not to verify each block again and again and again. It can be stored and installed locally, so that in case of issues, you can sync from that point on.

### Download sources {#download-sources}

#### DeFiChain Foundation: {#defichain-foundation}

Asia:
<https://defi-snapshots.s3-ap-southeast-1.amazonaws.com/snapshot-mainnet-1578261.zip>

Europe:
<https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1894199.zip>

To get the most recent snapshot:

Manually browse to
<https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/index.txt>

Extract last line, it's the most recent snapshot.

Append the filename to the base URL:

<https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/>

Example of snapshot URL:

[<https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1572520.zip>](https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1430890.zip)

#### mydefichain.com {#mydefichaincom}

List all available Snapshots:

Mainnet: <https://snapshot-de.mydefichain.com/index.txt>

Testnet: <https://testnet.snapshot-de.mydefichain.com/index.txt>

Download latest Snapshots (ZIP):

Mainnet: <https://snapshot-de.mydefichain.com/latest/>

Testnet: <https://testnet.snapshot-de.mydefichain.com/latest/>

### Installation guide {#installation-guide}

<table>
<thead>
<tr class="header">
<th><p>1. Backup your wallet</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Before doing anything else, always take a backup from your
wallet!</p>
<ol>
<li>In case your DeFi app is running, please close it gracefully.</li>
<li>Locate the DeFi Blockchain data directory:
<ol>
<li>Windows: C:\Users\%username%\AppData\Roaming\DeFi Blockchain</li>
<li>Linux: ~/.defi</li>
<li>Mac OS: /Users/%username%/Library/Application Support/DeFi/</li>
</ol></li>
<li>Make a copy from the directory: wallets</li>
</ol></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><p>2. Remove blockchain files</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>We are still in the DeFi Blockchain data directory from step
1.</p>
<ol>
<li>Windows: Select and delete all files and directories, excepting:
wallets</li>
<li>Linux: Delete all files and directories, excepting: wallets</li>
<li>Mac OS: Delete all files and directories, excepting: wallets</li>
</ol></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><p>3. Unzip blockchain archive</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><ol>
<li>Copy the downloaded blockchain archive to the DeFi Blockchain data
directory.</li>
<li>Unzip the archive and check that it is not been asked to replace any
existing files. In case check steps before.</li>
<li>You will see, that removed directories been created again.</li>
</ol></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><p>4. Start DeFi app</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>OPTION 1</strong> - New wallet or transaction history is
not important</p>
<ol>
<li>You can start DeFi app directly and you will see that starting block
for sync is close to the last block.</li>
<li>Happy DEXing :)</li>
</ol>
<p><strong>OPTION 2</strong> - Re-Index to get full transaction history
back</p>
<ol>
<li>If you already have a wallet from previous installation, you need to
perform a "reindex" action by selecting the according option in the
settings menu of the app OR you can start your local node headless on
the command line with <code>defid.exe -reindex</code>. Defid is located
within your apps installation directory.</li>
<li>This will take a while. Take a drink and relax until it is
finished.</li>
<li>Happy DEXing :)</li>
</ol></td>
</tr>
</tbody>
</table>

#### Example commands for Linux {#example-commands-for-linux}

Just replace the snapshot file with the current version from above.

The following steps assume that defid was installed under \~/.defi and you're logged in with the user created to run defid -\> adjust it in case your environment is different!

```
# create a new temporary folder for the snapshot in the current user's home folder
cd ~
mkdir snapshot
cd snapshot
```

```
# download the snapshot & unzip it if needed install the unzip package first via your package manager like apt etc.)
wget https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1430890.zip
unzip snapshot-mainnet-1430890.zip

# remove the snapshot archive to save space
rm snapshot-mainnet-1430890.zip
```

```
# only if you're using crontab to restart defid automatically: comment the corresponding line add a "#" in front of it)
# otherwise the node will restart again and you can not copy all directories successfully
crontab -e

# stop defid
~/.defi/defi-cli stop

# remove old blockchain data (be very careful with that command!)
rm -rf ~/.defi/anchors ~/.defi/blocks ~/.defi/burn ~/.defi/chainstate ~/.defi/enhancedcs ~/.defi/history ~/.defi/indexes ~/.defi/spv

# move snapshot files to the folder where defid can find them (usually ~/.defi)
mv ./* ~/.defi/
```

```
# start defid: choose option A or B but not both!
# option A: only if you ARE using crontab: uncomment the corresponding line
remove "#" from the beginning of the line)

crontab -e

# option B: only if you do NOT use crontab -> you have to start defid manually
# otherwise cron will periodically check and start defid
~/.defi/defid
```

```
# check that defid is running again & check that everything is working
tail -fn50 ~/.defi/debug.log
```
