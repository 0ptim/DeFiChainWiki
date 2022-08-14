---
title: Import BTC private key to Electrum
permalink: /Import_BTC_private_key_to_Electrum/
---

**Warning:** Using native BTC is still in beta and it might not be possible to do much with BTC in the DeFiWallet! Try out first if you can really do what you plan to do (receiving, swapping, sending ...). If you need to get BTC out of the app and sending doesn't work, you can use the following work around:

You can use the BTC private key in Electrum to sweep the coins to an Electrum wallet as follows:

1.  Do this: [Private key read out of the app](./Private_key_read_out_of_the_app.md)
2.  Download Electrum from [electrum.org](https://electrum.org/) and then create a new standard wallet with it -\> <https://bitcoinelectrum.com/creating-an-electrum-wallet/>
3.  Sweep the BTC private key that you got from the command `spv_dumpprivkey` selecting "Wallet - Private Keys - Sweep" in the menu. You have to prepend the key with `p2wpkh:` since the originating address is a SegWit Bech32 format. More information can be found here: <https://bitcoinelectrum.com/sweeping-your-private-keys-into-electrum/>. Example:

![](./../media/Sweep_the_key.png)

4\. A popup will ask for the fee. The predetermined fee should be fine, just click send:
![](./../media/Fees.png)

5\. The BTC from your BTC DeFiWallet will now be moved to the address of the Electrum wallet from where you can send it somewhere else if you like.
