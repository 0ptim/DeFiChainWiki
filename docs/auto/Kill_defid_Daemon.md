---
title: Kill defid Daemon
description: Stop a running DeFiChain daemon by killing the corresponding process. Find the PID and stop the process.
---

## Kill defid on Mac {#kill-defid-on-mac}

If you need to stop a running DefiChain Daemon (defid), you need to kill the corresponding process. You can do that by looking for the current PID in the terminal running the command 'top'.

Why you should need to stop it manually? Just in case an error occured e.g. in the DefiChain Wallet App or another app like defi-portfolio which I stopped somehow wrong and the Daemon was still running afterwards.

The top command is listing all current processes on your mac. There you can look for defid in the COMMAND column. The pick the corresponding PID you will need to run the 'kill' command. After stopping the top command pressing 'q' you can run the command

`kill pid-from-defid` (e.g. 'kill 15913')

This will stop the DefiChain Daemon process as you can verify in the debug.log (normally using `tail -f ./Library/Application\ Support/DeFi/debug.log`)
