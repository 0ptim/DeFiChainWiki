---
title: Liquidity Mining
description: TODO - Kurze Beschreibung dieser Seite.
---

Damit die Dezentrale Börse (DEX) auf DeFiChain korrekt funktionieren kann, müssen Investoren in sogenannten Liquiditätspools Token der beiden Pool-Paare im gleichen Wert hinzufügen (z.B. DFI im Wert von 50$ und dBTC im Wert von 50$) . Dies bezeichnet man als Liquidity Mining.

Damit dies geschieht, muss es einen Anreiz geben, der die Preisschwankungen, die zu einem Impermanent Loss führen können, mindestens ausgleicht.

- Sogenannte "Rewards" ('Belohnungen') pro Block werden aktuell ausgeschüttet, weil es noch nicht genügend Handel auf der DEX gibt, um über Gebühren einen ausreichenden Anreiz zu bieten.
- Fees/Commissions ('Handelsgebühren') für jeden Swap ('Pool-Transaktion') auf der DEX.

## Block Rewards

Die Ausschüttungshöhe der Block Rewards ändert sich regelmäßig. Ungefähr alle 11 Tage reduzieren sich diese um 1,6%. Die jeweils gültige Verteilung kann man sich auf der DeFiChain-Analytics-Website ansehen. Dafür einfach diesem Link folgen https://www.defichain-analytics.com/general?entry=emission

Block Rewards für dToken-Pools (z.B. dTSLA-DUSD; dURTH-DUSD, ....) müssen monatlich neu angepasst werden, da wir normalerweise monatlich vier neue dToken ins Ökosystem einführen. Die Verteilung wird derzeit von einer Gruppe von Personen aus der DeFiChain-Community, dem sogenannten Ticker-Council, festgelegt, da es dafür noch keine dezentrale Lösung gibt. Die aktuelle Verteilung der Rewards findest du [hier](https://www.krypto-sprungbrett.com/stock-token-apr/).

![](./../media/liquiditymining_DE_reward-reduction.png)

## Handelsgebühren von DEX-Nutzern
Der zweite, derzeit noch kleinere Anteil am Ertrag des Liquidity Providers resultiert aus [Handelsgebühren](./DEX_Fee_Structure.md) ("Commissions), die die Nutzer für jede Pool-Transaktion ("Swap") zahlen müssen. Diese Gebühr wird anteilig unter den Liquidity-Providern aufgeteilt. Das Ziel ist, dass es in Zukunft deutlich mehr Handel als bisher auf der DEX gibt. Dadurch soll der regulär sinkende Anreiz aus Block Rewards durch einen Anstieg von Commissions in Zukunft mindestens ausgeglichen werden. Dadurch ist sichergestellt, dass es weiterhin Anreize für das Bereitstellen von Liquidität gibt, auch wenn es keine Block Rewards mehr gibt.
