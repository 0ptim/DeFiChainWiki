---
title: Einführung
description: TODO - Short description of this page.
---

## Entscheidung für eine Wallet {#decision-which-wallet-should-you-use}

Mit einer Wallet-App bekommst du Zugriff auf deine DFI-Coins, die auf der Blockchain gespeichert sind.

Du kannst damit u.a.

- deinen DFI-Bestand verwalten
- Coins senden und empfangen
- die DEX zum Tauschen von Coins nutzen
- [Liquidity Mining](./Liquidity_Mining.md) betreiben
- einen Vault ("Tresor") erstellen und damit Sicherheiten für einen Loan verwalten
- einen Loan ("Kredit") erstellen und zurückzahlen
- Future Swaps nutzen

Derzeit hast du die Auswahl zwischen mehreren Wallets.

### DeFiChain Light Wallet {#defichain-light-wallet}

![](./../media/beginnersguide_DE_01.jpg)

Die [Light Wallet](./Lightwallet.md) ist verfügbar für dein Smartphone mit Android oder iOS. Die Lightwallet synchronisiert nicht die vollständige Blockchain. Sie benötigt dadurch weniger Speicherplatz und ist schneller einsatzbereit. Darüber hinaus erleichtert die bedienerfreundliche Benutzeroberfläche den Einstieg in das DeFiChain-Ökosystem.

Die [Light Wallet](./Lightwallet.md) setzt auf eine 24-Wörter-Seed-Phrase als Zugriffsmechanismus. Bitte beachte die einschlägigen Sicherheitsvorkehrungen beim Einsatz der App.

Die folgende Auflistung ist ohne Anspruch auf Vollständigkeit. Du bist allein für deinen Seed verantwortlich.

- Bewahre deine 24 Wörter sicher auf.
- Teile diese niemandem mit - außer einer Vertrauensperson für einen Notfall
- Insbesondere Betrüger in Telegram-Channels sind sehr kreativ, wenn es um deine 24 Wörter geht. Teile diese nie jemanden mit, der dich einfach so anschreibt.
- Hinterlege deine 24 Wörter nicht in irgendeiner App / Bot, die dir jemand anpreist

Für die Bequemlichkeit (um nicht jedes Mal die App mit 24 Wörtern starten zu müssen) vergibst du einen sechsstelligen PIN-Code, um in der App Transaktionen freizugeben. Nach dreimaliger Falscheingabe wird die App zurückgesetzt und du musst deine 24 Wörter parat haben, um auf deine Coins zugreifen zu können.

### DFX Light Wallet {#dfx-light-wallet}

![](./../media/beginnersguide_DE_02.jpg)

Die DFX Light Wallet ist eine abgewandelte Form der DeFiChain Light Wallet mit diversen Zusatzfunktionen des Anbieters DFX.Swiss. Unter anderem wird damit die Verwaltung deines DFX-Staking-Guthabens und die Teilnahme an Votings ermöglicht.

Näheres dazu findest du [hier im DFX-Bereich](./DFX_FAQ.md#Schritt-f.C3.BCr-Schritt_Anleitung) des Wiki.

### Jellywallet {#jellywallet}

Die Jellywallet ist das jüngste Mitglied der Wallet-Familie auf der DeFiChain. Es handelt sich dabei um eine Chrome-Extension, ist also eine Browser-Anwendung und damit für Nutzer geeignet, die lieber am PC als am Smartphone arbeiten.

Sie nutzt ebenso wie die zuvor genannten Lightwallets einen 24-Wörter-Seed. Dieser Seed ist kompatibel mit dem Seed der LightWallet, sodass ein Parallelbetrieb auf Laptop und Smartphone möglich ist.

Die Nutzung von Vaults und Loans sind mit der Jellywallet zum Zeitpunkt der Verfassung dieses Artikels noch nicht möglich.

Den Download und weitere Informationen findest du [hier](https://jellywallet.io/).

### Full-Node-Wallet {#full-node-wallet}

Für einen Anfänger ist der Einstieg über die Full-Node-Wallet nicht unbedingt zu empfehlen, weil die Bedienbarkeit am wenigsten intuitiv ist. Für technisch affine Nutzer, die nicht nur eine grafische Oberfläche benutzen wollen, sondern auch über Kommandozeile arbeiten wollen, ist die Full-Node-Wallet aber alternativlos. Ebenso ist die Full-Node-Wallet dann notwendig, wenn man eine Masternode selbst betreiben möchte.

- Die Full-Node-Wallet ist nicht so einfach zu bedienen wie Wallets für das Smartphone
- Es wird stets die ganze Blockchain synchronisiert; dies braucht Zeit und Speicherplatz
- Es werden keine Seed Phrases (24 Wörter) verwendet. Stattdessen arbeitet die Full-Node-Wallet mit einer Sicherungsdatei. Man muss die Datei "wallet.dat" und das Passwort sichern, um im Notfall eine Wiederherstellung durchführen und auf die Coins zugreifen zu können.
- Den Download findest du hier: <https://defichain.com/downloads> für macOS, Windows und Linux
