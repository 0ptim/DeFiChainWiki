---
title: Privatkey auslesen
description: TODO - Kurze Beschreibung dieser Seite.
permalink: /Read_out_private_key/
---

Beschreibung wie der Privat Key aus der App herausgelesen werden kann.

![Kopiere die DFI Adresse, zu welcher du den PrivatKey auslesen willst.](./../media/readprivatekey_DE_01.png)

Kopiere die DFI Adresse, zu welcher du den PrivatKey auslesen willst.

Gehe zu [dex.defichain.com](https://dex.defichain.com/) und suche nach dieser Adresse.

Hinweis: Der Betreiber der Website kann danach theoretisch deine IP Adresse mit dieser DFI Adresse verknüpfen. Eventuell ist es sinnvoll einen VPN oder einen TOR Browser zu verwenden.

*Kontrolliere ob diese Adresse auch wirklich alle Coins beinhaltet!*  
![](./../media/readprivatekey_DE_02.png)

*Gehe in die Konsole.*  
![Gehe in die Konsole](./../media/readprivatekey_DE_03.png)

Gib folgenden Befehl ein (ohne Anführungszeichen): `dumpprivkey `*`"deine Adresse"`*

Hinweis: Wenn du den BTC Private Key auslesen willst, benutze statt dessen `spv_dumpprivkey "deine Adresse"` . Danach kannst du den Key z. B. in Electrum importieren, siehe hier: [Import BTC private key to Electrum](./Import_BTC_private_key_to_Electrum.md)

Bestätige mit Enter ⏎

(Soll ich hier noch erklären wo sich die Enter Taste befindet?)

*Der Privatkey wird angezeigt. L4d4AisBuCcQxyB6Be2BRh2fbuBZ6F9v6oos9uzvTWDovNvaw6rrDer*  
![](./../media/readprivatekey_DE_04.png)
