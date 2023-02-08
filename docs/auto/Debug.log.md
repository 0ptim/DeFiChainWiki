---
title: Debug.log
description: To find hints about errors of the DeFiChain App, locate the debug.log file.
---

If the DeFiChain App Wallet does not work properly, it can be helpful to check the debug.log file for error messages.

1.  Windows: Go to C:\Users\\%username%\AppData\Roaming\DeFi Blockchain
2.  Mac: Got to /Users/%username%/Library/Application Support/DeFi
3.  Open the debug.log
4.  Read the error message at the end of the file and try to find and fix the error.

Some error messages are documented below.

## Wallet.dat corrupt, salvage failed {#walletdat-corrupt-salvage-failed}

### Detailed error message {#detailed-error-message}

> init message: Verifying wallet(s)...
>
> Using BerkeleyDB version Berkeley DB 4.8.30: (April  9, 2010)
>
> Using wallet C:/Users\\%username%\Download\DeFiChain
> Wallets\Wallet.dat
>
> BerkeleyEnvironment::Open:
> LogDir=C:/Users\\%username%\Download\DeFiChain Wallets\database
> ErrorFile=C:/Users\\%username%\Download\DeFiChain Wallets\db.log
>
> Failed to rename Wallet.dat to Wallet.dat.1614585866.bak
>
> Error: Wallet.dat corrupt, salvage failed
>
> Shutdown: In progress...
>
> scheduler thread interrupt
>
> Shutdown: done

### Solution: {#solution}

1.  Restart the computer
2.  Move the folder mentioned above to another location. In this example above: C:/Users\\%username%\Download\DeFiChain Wallets
3.  Launch the DeFiChain app

I have not found a solution for the corrupted wallet dat file. It seems that I destroyed this file myself because I opened it with the editor program and saved it again. This seems to destroy the file.

Solution: Use original BackUp.

## Error: Inconsistent data in default config {#error-inconsistent-data-in-default-config}

We do not yet know of a simple solution to this problem. The only solution we know is to delete the app completely and reinstall it.

[Delete DeFi App](./Delete_DeFi_App.md)

## No data found {#no-data-found}

We do not yet know of a simple solution to this problem. The only solution we know is to delete the app completely and reinstall it.

[Delete DeFi App](./Delete_DeFi_App.md)

## No space left on device {#no-space-left-on-device}

The memory space is full. Some users have reported that this error message appears despite free memory. We suspect that the DeFi app is not compatible with Fusion Drive.
