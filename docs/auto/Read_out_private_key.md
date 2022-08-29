---
title: Private key read out of the app
permalink: /Read_out_private_key/
---

Description of how the private key can be read out of the app.

![Copy the DFI address to which you want to read the private key](./../media/readprivatekey_EN_01.png)

Copy the DFI address to which you want to read the private key.

Go to [dex.defichain.com](https://dex.defichain.com/) and search for this address.

Note: The website operator can theoretically link your IP address with this DFI address. It may be useful to use a VPN or a TOR browser.

*Check if this address really contains all coins!*  
![](./../media/readprivatekey_EN_02.png)

*Go to the console and Unlock your wallet.*  
![](./../media/readprivatekey_EN_03.png)

Go to the console.

Enter the following command: `dumpprivkey `*`"your address"`*.

> *Note*: For reading the native BTC private key instead of a DFI key, use command `spv_dumpprivkey `*`"your address"`* instead. You can use the BTC key for example in Electrum, see here: [Import BTC private key to Electrum](./Import_BTC_private_key_to_Electrum.md).

Confirm with Enter ⏎

(Should I explain here where the Enter key is located?)

*The private key is displayed. L4d4AisBuCcQxyB6Be2BRh2fbuBZ6F9v6oos9uzvTWDovNvaw6rr*  
![The private key is displayed.](./../media/readprivatekey_EN_04.png)
