---
title: Wallet Encryption
description: TODO - Short description of this page.
---

Disclaimer: The following might contain incorrect or incomplete information. Unfortunately, the following information will only describe and explain a certain scenario and prevention but cannot provide a solution for common problems that have been reported.

## Summary {#summary}

If you created your wallet in version 2.3.0 (and did not restore from a seed phrase) backup your wallet in .dat files and store them at a safe place. Every time you change your password, backup wallet.dat again. It is recommend to backup from time to time even without changing password.

If you created your wallet in an older version using a seed phrase and encrypted the wallet thereafter (either by using the command line or GUI in version 2.3.0), keep your seed phrase and backup in .dat files in a safe place. The seed used to determine addresses changes with the encryption. Every time you change your password, backup wallet.dat again. It is recommend to backup from time to time even without changing password.

## Why encryption matters {#why-encryption-matters}

The DeFiChain App stores relevant data of your wallet in a file called "wallet.dat", which is located at:

- Linux: `\~/.defi/wallets`
- Mac: `\~/Library/Application Support/DeFi/wallets`
- Windows: `<root>\Users\\<username>\AppData\Roaming\DeFi` Blockchain\wallets

This file works in many aspects just as in Bitcoin core since DeFiChain is a fork of Bitcoin. The wallet.dat stores your seed and private keys, as well as all public keys and addresses. All keys and addresses are determined from the seed using cryptographic methods (so called hierarchical deterministic wallet, short HD wallet according to BIP). If the wallet.dat file is unencrypted (this has been the standard up to version 2.3.0 of the app), all data stored in the file was openly available to everybody who was getting access to that file. So in case the file got in the wrong hands, all funds can be moved to another address and therefore be stolen.

So users should be advised to encrypt their wallet and since version 2.3.0 the app is actively encouraging that.

After encryption of wallet.dat all data in the file is encrypted and can only be used in the app after unlocking the wallet.dat by entering the password. Before 2.3.0 initial encryption of the wallet.dat and temporary decryption by entering the password could be done in the command line only. Version 2.3.0 added GUI support for this.

## Encryption in the DeFiChain App {#encryption-in-the-defichain-app}

#### App Version up to 2.1.17 {#app-version-up-to-2117}

![Seed before & after encryption](./media/Seed_encryption.jpg)

In app versions _before_ 2.3.0 (i.e. up to 2.1.17) the creation of a new wallet started with the creation a mnemonic or seed phrase, consisting of 24 words. This is what most users refer to as their "seed". Technically the app derived a seed from that phrase and private/public keys and addresses from the seed. The general expectation of users is that having the phrase would be enough to recover the wallet (after computer crash, reinstallation, ...) including all keys and addresses. The DeFiChain GitHub Wiki contains an article about [Wallet encryption](https://github.com/DeFiCh/app/wiki/Wallet-Encryption) using the command line of the app. The article contains a notice that using the encryption function will change the seed. In consequence the phrase created at the beginning is useless since it can only re-create the status **before** the encryption was turned on. This seems to be an explanation for the reported issue that after restoring the wallet with the seed phrase users are missing the addresses, which are created after the encryption of the Wallet. When checking with 'getaddressinfo' `<address>` _it shows_ `ismine:false`. Fair enough since this address was not created by the seed derived from the phrase but from the seed created during encryption.

![Backup wallet in app](./media/Backup_Wallet.png)

Even after encryption is enabled, the app keeps the keys and addresses derived from the original seed in the wallet. So access to the funds is still possible. However, the old addresses have been marked with a warning that they a not saved by the seed (the new seed after encryption).

How to backup with enabled encryption: Keep the mnemonic phrase and a copy of wallet.dat or a backup made with the backup function of the app. The backup function in 2.1.16 and 2.1.17 creates a backup in .dat format which is useful to restore also in newer version. Former versions created unencrypted backup in .txt files that are deemed to be not secure and are not feasible for restoring a wallet in new versions.

In short: for encrypted wallets the seed phrase is usually not enough to recover a wallet from scratch. The phrase can be used to restore the keys and addresses before encryption was turned on. Keep the phrase and a backup of wallet.dat at a safe place.

#### App version 2.3.0 and later (last checked with 2.3.3) {#app-version-230-and-later-last-checked-with-233}

The version 2.3.0 does not use seed phrases anymore. Instead the creation of a wallet starts with setting a password and with that an encrypted wallet is created. You still can restore an existing wallet by using the old seed phrase or using a .dat file.

If you did not set a password your .dat file and decide to do this now, make sure to create a new backup of your .dat file since in general the same problem occurs as if the wallet was created with a seed phrase and encrypted later.
