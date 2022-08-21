---
title: Wallet.dat corrupt salvage failed
permalink: /corrupt_salvage_failed/
---

Error: Wallet.dat corrupt, salvage failed

Detailed error message:

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

Solution:

1.  Restart the computer
2.  Move the folder mentioned above to another location. In this example
    above: C:/Users\\%username%\Download\DeFiChain Wallets\\
3.  Launch the DeFiChain app
