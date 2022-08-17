---
title: Masternode
permalink: /Masternode/
---

## Defichain Masternode

Im Januar 2021 stimmten die Masternode- und Stakeholder im [DFI-Vorschlag Nr. 4](https://github.com/DeFiCh/dfips/issues/6) darüber ab, das Collateral für eine Masternode auf 20000 DFI zu reduzieren.

Am 1. März 2021 wurde der Hardfork mit dem Namen DAKOTA in Block 678000 implementiert und das Collateral reduziert.

Jetzt ist die Zeit gekommen, dass die DFI-Holder durch das Betreiben einer eigenen Masternode das Netzwerk stabiler machen und die Dezentralisierung voranbringen.

### Betreiben einer Masternode

Es gibt verschiedene Möglichkeiten, eine Masternode im Defichain-Netzwerk zu betreiben.

#### Option 1 - Ownernode- und Operator zuhause auf einem Rechner

Die erste Möglichkeit besteht darin, die Masternode auf einem PC, Laptop oder Apple MacBook oder einem ähnlichen Gerät in deinem Heimnetzwerk auszuführen. Du kannst die Hardware in deinem Büro, Wohnzimmer oder sogar im Kinderzimmer betreiben, hauptsache sie läuft dauerhaft und hat eine Internetverbindung.

Die einzigen Dinge, die du brauchst:

- Internetverbindung (keine statische IP erforderlich)
- eine Hardware mit installierter APP-Wallet
- 20000 DFI in dieser Wallet für das Collateral der Masternode, ca. 11 DFI für die Erstellung und Gebühren.

**Vorteile:**

- Dies ist das einfachste Setup und du brauchst nur ein paar Klicks für die Umsetzung.
- Du benötigst keine zusätzliche Hardware, da du deinen vorhandenen Computer nutzen kannst.

**Nachteile:**

- Wenn dein Computer offline ist oder deine Internetverbindung unterbrochen ist, kannst du nicht am Netzwerk und am Staking teilnehmen und erhhälst keine Belohnungen in dieser Zeit.
- Wenn du das Internet mit deiner Masternode stabiler machen und Dienste für andere Knoten anbieten möchtest, musst du den Port 8555 von extern für alle öffnen. <sup>1</sup>
- Wenn du den Port öffnest, veröffentlichst du deine wallet.dat im Internet, möglicherweise ein mögliches Ziel für Angreifer.

<small>\[1\] Du musst den Port **NICHT** öffnen, um am Staking teilzunehmen, aber ohne diesen offenen Port hilfst du nicht, das Netzwerk zu stabilisieren, und niemand kann deine Masternode für die Synchronisierung oder andere implementierte Funktionen verwenden.</small>

#### Option 2 - Ownernode und Operatornode bei "Home"

In diesem Szenario beteibst du 2 Knoten in deinem HOME-Netzwerk. Eine Maschine fungiert als Ownernode und hält die Sicherheit von 20.000 DFI. Dies kann dein Macbook, Laptop oder Personal Computer sein. Du startest diesen Computer nur bei Bedarf, um Tokens zu übertragen oder die DEX zu nutzen, LM zu verwenden oder Rewards an eine andere Adresse zu senden.

Die andere Maschine ist deine Operatornode. Dies kann ein anderer Laptop oder PC oder Raspberry oder ein Home-Server sein. Du benötigst nur die eigentliche Nodeversion. Kein Collateral, keine Wallet-APP. Du kannst Port 8555 in deinem Router für diesen Computer öffnen, um Netzwerkservices zu präsentieren und diese Node für andere Nodes und APP-Wallets öffentlich zu machen. Da diese Node keine Coins oder Token enthält, ist das Sicherheitsrisiko viel geringer als in Szenario 1.

**Vorteile:**

- Der Port wird nur zu der Node geöffnet, die keine Coins oder Token enthält.
- Du betreibst deine Node zu Hause und stabilisierst das Netzwerk dennoch über den geöffneten Port 8555 (nur mit statischer IP möglich bzw sinnvoll!)

**Nachteile:**

- Wenn deine Operatornode offline ist oder die Internetverbindung unterbrochen ist, kannst du nicht am Netzwerk und am Staking teilnehmen - in dieser Zeit gibt es keine Rewards.
- Hardware für Privatanwender ist meistens nicht für den Dauerbetrieb rund um die Uhr geeignet (Netzteil, SSD, CPU) Es besteht ein erhöhtes Risiko für Hardwareschäden.
- Für die Operatornode wird eine weitere Hardware benötigt
- Du brauchst eine statische IP-Adresse, um deine Masternode im Netzwerk zu präsentieren.
- Du öffnest den Port 8555 in dein Heim-Netzwerk und machst deine IP öffentlich.
- Eine instabile oder langsame Internetverbindung (Upload) beeinträchtigt die Stabilität des Netzwerks

#### Option 3 - Ownernode und Operatornode in einem Rechenzentrum

Das bevorzugte Szenario ist eine Hot / Coldwallet-Lösung mit der Operatornode "in the Cloud". Deine APP-Wallet läuft wie in Option 2 auf deinem eigenen Computer zu Hause. Im besten Fall mit Ledgersupport als "Cold-Wallet". Diese Wallet enthält das Collateral von 20.000 DFI und muss nur aktiv sein, wenn du mit deiner Wallet oder deiner Masternode agieren möchtest.

Die Operatornode wird in einem professionellen TIER 2- oder 3-Datencenter gehostet. Ein einfacher virtueller privater Server reicht aus, es wird kein großer Rootserver oder ähnliches benötigt.

**Vorteile:**

- Zu Hause ist keine Portweiterleitung erforderlich.
- Hochverfügbarkeit, 24/7-Infrastruktur und redundante Internetverbindung für deine Masternode (Operatornode)
- Full Service für das Defichain-Netzwerk: Hochverfügbarkeit mit redundanter Hardware und Internetverbindung stabilisieren das Netzwerk und fördern die Dezentralisierung.

**Nachteile:**

- VPS in einem Rechenzentrum erforderlich und Kenntnisse, um diese zu managen und aktuell zu halten.
