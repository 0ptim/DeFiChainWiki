---
title: Addresses gone after wallet restore?
permalink: /Addresses_gone_after_wallet_restore?/
---

1.  REDIRECT [Wallet
    EncryptionDisclaimer](/Wallet_Encryption "wikilink"): The following
    might contain wrong or incomplete information.

Unfortunately the following will only describe and explain a certain
scenario and prevention but cannot provide a solution for common
problems that have been reported.

## Problem description

While creating a wallet in the DefiChain app, you normally create a
mnemonic phrase, consisting of 24 words. You are well advised to keep
the phrase at a safe place. The wallet creates a seed and private and
public keys from the phrase, as well as addresses to receive DFI (this
is technically very simplified here). Usually, it seems to be the
expectation of users that in case of a failure (wallet deleted,
corrupted, …) it is enough to use the phrase while creating a fresh
wallet and all keys and addresses are restored since they are determined
from the phrase. And usually this works fine.

[250px\|thumb\|Seed before & after
encryption](/File:Seed_encryption.jpg "wikilink")

The DeFiChain Wiki contains an article about [Wallet
encryption](https://github.com/DeFiCh/app/wiki/Wallet-Encryption) using
the console of the app. The article contains a notice that using the
encryption function will change the seed. In consequence the phrase
created at the beginning is useless since it can only re-create the
status **before** the encryption was turned on. This seems to be an
explanation for the reported issue that after restoring the wallet with
the mnemonic phrase users are missing the addresses, which are created
after the encryption of the Wallet. When checking with ''getaddressinfo `<address>` *it shows*ismine:false''. Fair enough since this address was not created
by the seed derived from the phrase but from the seed created during
encryption.

## Prevention

The only way to prevent this problem is to backup the actual
*wallet.dat* file after the encryption. You can backup the wallet.dat
file on the Wallet-App (since version 2.1.16) if you click on **Wallet**
on the taskbar.

[250px\|thumb\|Backup wallet in app](/File:Backup_Wallet.png)

If you want to save the wallet.dat manually, it is located at:
• Linux: `\~/.defi/wallets`
• Mac: `\~/Library/Application Support/DeFi/wallets`
• Windows: `<root>\Users\\<username>\AppData\Roaming\DeFi Blockchain\wallets`

Since version 2.1.16 the DeFiChain app has the possibility to create
backups of the *wallet.dat* from the GUI. In former version the app
created an unecrypted .txt file as backup.

Unfortunately there is no solution to recover addresses from an
encrypted *wallet.dat* without the actual file (backup). This was also
probably never intended in Bitcoin Core.