---
title: Dual setup (App + Node)
permalink: /Dual_setup_App_and_Node/
---

## Draft for Dual Setup

### Steps:

1.  Download the latest App version and Ain version from [github](https://github.com/DeFiCh/).
2.  Start the App and wait till the full sync has finished (You can speed up this process by downloading a blockchain snapshot: ...)
3.  Close the App after the synchronization has finished
4.  Create a copy of the \`.defi\` folder. Eg: \`cp -r .defi .defi-node\` (Note: This folder contains the whole blockchain and requires a lot of space!)
5.  Edit the \`defi.conf\` in the new .defi folder
    1.  change the rpcport to an unused port, eg: \`rpcport=8553\`
    2.  add the bind command and use an unused port: eg: \`bind=0.0.0.0:8554\`
    3.  update the walletdir, so that it points to the new directory: eg: \`walletdir=/home/user/.defi_node\`
6.  Start the node with the \`datadir\` option. Eg: \`./defid -datadir=/home/user/.defi_node\`
7.  Start the app
8.  Congrats! The App (with an integrated node) and separate node are now running simultaneously
    1.  You can use this setup to run as many nodes as you like!
    2.  This can be useful if u like to have separate nodes for anchors/masternodes/different wallets
