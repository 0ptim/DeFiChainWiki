---
title: Leitfaden für Anfänger
description: TODO - Kurze Beschreibung dieser Seite.
permalink: /Beginners_Guide/
---

🚧 **Under construction** 🚧

For German use https://defichain-explained.com and https://www.youtube.com/channel/UCEUuJuxZUb9sC9r2Xj-7UAw to start.

*Stand dieses Artikels: Version der App 2.3.3*

Dies ist ein eher technischer Artikel über die Wallet-Software und ihre
Handhabung. Es geht mehr um typische Fallstricke und was man sich
bewusst machen sollte. Es wird keine Garantie für Vollständigkeit und
Korrektheit gegeben.

### Was kann man mit der App überhaupt machen? {#was-kann-man-mit-der-app-überhaupt-machen}

- DFI Bestand verwalten, DFI empfangen und versenden
- DFI in andere Token auf der DeFiChain tauschen (DST BTC, DST ETH, ...)
- Liquidity Mining betreiben
- Einen Masternode betreiben

### Kurze Zusammenfassung {#kurze-zusammenfassung}

- Die DeFiChain Wallet App ist nicht so einfach zu bedienen wie bekannte
  Wallets für Bitcoin und Ethereum
- Es wird stets die ganze Blockchain synchronisiert; dies braucht Zeit
  und Speicherplatz
- Es werden keine Seed Phrases (24 Wörter) verwendet, stattdessen muss
  die Datei wallet.dat und das Passwort gesichert werden, um im Notfall
  eine Wiederherstellung durchzuführen und auf die Coins zugreifen zu
  können.
-

### Ein paar technischere Details {#ein-paar-technischere-details}

#### Fullnode Wallet {#fullnode-wallet}

Sei dir bewusst, dass es sich bei der DeFiChain um ein recht junges
Projekt handelt, dass noch nicht so etabliert ist wie Bitcoin und
Ethereum. Es gibt aktuell nur eine Wallet für DeFiChain, die noch stark
weiter entwickelt wird. Die aktuelle Wallet ist eine so genannte
Fullnode-Wallet und basiert auf bitcoin-qt bzw. bitcoin core. Derartige
Wallets funktionieren anders als die von Bitcoin und Ethereum bekannten
Light- und Hardware-Wallets (Electrum, Metamask, Ledger, Trezor, ....),
die keinen Fullnode erfordern.

Ein Fullnode synchronisiert und validiert immer die gesamte Blockchain
und braucht daher viel Speicherplatz, da sie ständig wächst. Nur wenn
die Wallet synchronisiert ist können Transaktionen durchgeführt werden.
Je nach dem Zeitraum seit der letzten Synchronisierung kann diese
durchaus Minuten bis Stunden dauern. Zudem reagiert die Wallet (noch)
recht empfindlich auf Netzwerkunterbrechungen, mangelnden Speicherplatz,
unsauberes Beenden der Wallet, ...

Eher unerfahrene Benutzer können sich leicht in den Tücken der Wallet
verlieren. Es ist daher wichtig, sich dessen im Voraus klar zu sein,
damit später weniger Frust und/oder Enttäuschung vorliegen. Es ist zudem
wichtig, sich mit dem Thema Sicherheit auseinander zu setzen.

#### Sicherheit und Backup {#sicherheit-und-backup}

Anders als bei bekannten Wallets setzt die DeFiChain Wallet seit der
Version 2.3.0 nicht mehr eine seed phrase nach BIP39 ein, es werden also
keine 24 Wörter verwendet, um die private keys, public keys und Adressen
zu erzeugen. Stattdessen wird dies alles verschlüsselt (sofern ein
Passwort gesetzt wurde) in einer Datei "wallet.dat" gespeichert. Ohne
diese und das Passwort lässt sich im Notfall nichts wieder herstellen.
Diese Datei muss regelmäßig gesichert werden, wenn das Passwort geändert
wurde auf jeden Fall.
