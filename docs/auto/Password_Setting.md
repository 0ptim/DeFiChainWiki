---
title: Password Setting
description: Set the password in the DeFiChain app to encrypt your wallet.dat file.
---

The DefiChain app in version 2.3.0 offers or forces you to set a password. This will encrypt your wallet.dat file where all sensitive information, like private keys are stored. Since the leakage of the private key will enable the attacker to transfer the funds from your wallet to another one, encryption of the wallet is recommended and implemented since the beginning. In former versions the was no GUI support for this function and the command line was used to encrypt and temporarily decrypt (as described [here](https://github.com/DeFiCh/app/wiki/Wallet-Encryption)).

Please consider choosing a secure password to secure your wallet and funds. Today is recommended to use long passwords instead of complex passwords (as described in the NIST Password Guidelines, summarized e.g. [here](https://auth0.com/blog/dont-pass-on-the-new-nist-password-guidelines/)).

To be able to transfer funds you need to unlock the wallet by clicking the lock symbol and entering your password. This will unlock the wallet for the time chosen in the settings. After that the wallet will lock automatically.

_Wallet unlock_  
![Wallet unlock](./../media/Wallet_Unlock_1.jpg)

_Enter password to unlock_  
![Enter password to unlock](./../media/Wallet_Unlock_2.jpg)
