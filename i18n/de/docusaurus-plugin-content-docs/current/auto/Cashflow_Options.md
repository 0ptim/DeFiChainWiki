---
title: Cashflow-Optionen
description: TODO - Short description of this page.
---

Auf DeFiChain haben wir viele großartige Möglichkeiten, dem Ökosystem einen Wert zu verleihen und dafür Cashflow zu erhalten. Abhängig von Ihrem Vermögen und Ihrer Risikobereitschaft können Sie die beste Lösung wählen. In diesem Beitrag versuche ich, alle Möglichkeiten zusammenzufassen, um Ihnen die Auswahl zu erleichtern. Vielleicht finden Sie auch einige Optionen, die Sie bisher übersehen haben. Mit dem kommenden Update werden sich auch die Prämien für einige Optionen ändern, also lesen Sie und finden Sie Ihre beste Option.

:::info Disclaimer
Wie immer ist dies keine Finanzberatung, die Renditen sind eine Momentaufnahme zum Zeitpunkt der Erstellung und werden sich wahrscheinlich von Tag zu Tag ändern (nach oben oder unten). Jede Option beinhaltet natürlich das allgemeine Risiko, dass die gesamte Kette auf Null geht.
:::

Die delta-neutralen Strategien basieren auf 40% APR im dToken-Pool. Diese delta-neutralen Strategien unterliegen immer noch einem möglichen kleinen Impermanent Loss, weshalb ich immer empfehle, weniger volatile dTokens dafür zu verwenden. Eine 20%ige Bewegung des dTokens führt zu einem Verlust von 0,5% aufgrund von Poolverschiebungen.

## Einfache, manuelle Strategien {#simple-manual-strategies}

Beginnen wir mit Optionen, die kein oder nur ein geringes Risiko beinhalten.

*Manuelle Cashflow-Optionen auf DeFiChain*.  
![Manuelle Cashflow-Optionen auf DeFiChain](./../media/cashflow_options_DE_01.png)

### Staking DFI {#staking-dfi}

- Eingabe: **100% DFI**
- Risiko: Kontrahentenrisiko des zentralisierten Dienstes
- Belohnungen: **20,8% APY - 23,7% APR in DFI**

Dies ist der einfachste, aber dennoch effektive Weg: Fügen Sie Ihrem Kuchen- oder DFX-Konto einen beliebigen Betrag an DFI hinzu und erhalten Sie Cashflow. Sie machen sogar die automatische Aufzinsung für Sie.

Wenn Sie über 20.000 DFI verfügen, können Sie auch Ihre eigenen MN betreiben, was das Kontrahentenrisiko verringert und Ihre Rendite erhöht.

Sie können Ihre DFI auch in Staking einbinden, um zusätzliche Belohnungen zu erhalten. 5 Jahre für 35% APR oder 10 Jahre für 47% APR.

### LM-Stablecoin-Pools {#lm-stablecoin-pools}

- Eingabe: **50% DUSD + 50% (USDT oder USDC)**
- Risiko: IL (de/repeg von DUSD)
- Belohnungen: **36-45% in DFI**

Sie müssen Ihre Mittel zu gleichen Teilen in DUSD und USDC/T aufteilen. Wenn Sie das haben, ist dies ein großartiger Ort, um Rendite auf Stablecoins zu verdienen.

### LM Krypto-Pools {#lm-crypto-pools}

- Input: **50% DFI + 50% andere Kryptowährungen** (BTC, ETH, USDT, USDC, DUSD, LTC, BCH, DOGE)
- Risiko: IL (Verschiebung von DFI vs. andere Kryptowährungen)
- Belohnungen: **11-40% in DFI**

Sie müssen Ihre Mittel zu gleichen Teilen auf DFI und andere Kryptos aufteilen. Wenn Sie das haben, ist dies ein großartiger Ort, um Rendite auf Ihr bestehendes Krypto-Exposure zu erzielen.

### LM dStock-Pools {#lm-dstock-pools}

- Eingabe: **50% DUSD + 50% dStock** (SPY,QQQ,TLT,GLD,TSLA,GME...)
- Risiko: IL
- Belohnungen: **10-40% in DFI**

Dies ist der beste Weg, um einen Cashflow auf Ihr diversifiziertes Aktienportfolio zu erwirtschaften, besonders wenn Sie ein Marktengagement, aber kein Krypto-Exposure wünschen.

## Manuelle Strategien mit Vaults {#manual-strategies-with-vaults}

Vaults auf DeFiChain sind unglaubliche Werkzeuge, aber um sie sicher zu nutzen, müssen Sie sie verstehen. Wenn Sie denken, dass das alles zu kompliziert ist, dann ist das nicht schlimm. Hören Sie jetzt auf zu lesen und halten Sie sich an eine der oben genannten Optionen.

Ansonsten folgen Sie mir in den Kaninchenbau.

*Vault-Strategien, die manuell ausgeführt werden können*  
![Vault-Strategien, die manuell durchgeführt werden können](./../media/cashflow_options_DE_02.png)

### Geloopte DUSD-Vault {#looped-dusd-vault}

- Eingabe: **100% DUSD**
- Risiko: "keine" (Sie verpassen den Zeitpunkt, an dem die Negativzinsen weg sind und Sie anfangen zu zahlen)
- Belohnungen: **30% in DUSD**

Im Gegensatz zu allen anderen Optionen werden die Belohnungen bei dieser Strategie nicht an Ihre Adresse gezahlt, sondern verringern Ihren Kreditbetrag. Für die Aufzinsung müssen Sie weitere Kredite aufnehmen (und das Loopen wiederholen), was nach dem FCE-Update nicht mehr möglich sein wird.

Nach der FCE-Aktualisierung wird es in der Regel nicht mehr möglich sein, diese zu erstellen.

Im Moment ist das eine gute Ausgangslage für Ihr DUSD. Aber lesen Sie weiter.

### DUSD-Vault + delta-neutraler LM {#dusd-vault--delta-neutral-lm}

- Eingabe: **100% DUSD**
- Risiko: dToken IL + Sie müssen Ihren Vault je nach Ihrem Sicherheitenverhältnis überwachen
- Belohnung: **28-30% in DFI** (für ein Sicherheitenverhältnis zwischen 180 und 200%)

Legen Sie einen Teil Ihrer DUSD in den Vault und minten Sie einen dToken Ihrer Wahl, so dass der Betrag des geminteten dTokens dem der verbleibenden DUSD entspricht. Nun können Sie beide zusammen in den LM einbringen. Dies ist eine delta-neutrale Strategie, da Sie mit dem dToken weder long noch short sind. Sie schulden sie dem Vault, besitzen aber gleichzeitig die gleiche Menge an dToken, die sich im LM-Pool befinden.

Da DUSD nach dem Fork als Sicherheit $1,2 wert ist, ist dies wahrscheinlich sogar profitabler als der geloopte DUSD-Vault, zumal dieser profitabler wird, wenn der DFI steigt.

Stellen Sie jedoch sicher, dass Sie ein Sicherheitenverhältnis wählen, mit dem Sie sich wohl fühlen. Da DUSD im Vault stabil ist, bedeutet ein Verhältnis von 180% in diesem Fall, dass Ihr dToken um 20% steigen kann, bevor Sie liquidiert werden. Wenn Sie also einen Token mit geringer Volatilität wählen, könnte es ausreichen, ihn täglich zu beobachten.

Wenn Ihnen diese Idee gefällt, Sie aber Ihren Vault nicht manuell überwachen/anpassen möchten, lesen Sie weiter zu den automatisierten Optionen.

## Zusätzliche Strategien mit Bots wie vault-maxi {#additional-strategies-with-bots-like-vault-maxi}

Das Hauptrisiko bei Vaults ist die Liquidation. Sie können dies verhindern, indem Sie einen ausreichenden Puffer in der Sicherheitenquote haben. Aber das wird Ihre Gewinne drastisch reduzieren.

Bots wie vault-maxi können hier helfen, indem sie Ihren Vault ständig überwachen und dafür sorgen, dass er immer innerhalb des festgelegten Bereichs bleibt.

Aber Bots bringen auch andere Risiken mit sich (Codefehler, Ausfallzeiten von Cloud-Providern, Hacks usw.). **Verwenden Sie Bots nur, wenn Sie alle damit verbundenen Risiken verstehen und akzeptieren.**

Wenn Sie sich eingehender mit Bots befassen wollen, ist vault-maxi eine großartige Option. v2.3 ([veröffentlicht auf GitHub mit Setup-Anleitung](https://github.com/kuegi/defichain_maxi/releases/tag/v2.3)) bietet alle hier gezeigten Optionen. Wenn Sie befürchten, dass vault-maxi zu kompliziert einzurichten ist, sehen Sie sich dieses Video an und entscheiden Sie selbst: https://youtu.be/NOeXa69Z4GU

Die folgenden Strategien gehen von einer Zielsicherheitsquote von 160% aus.

*Cashflow-Optionen über vault-maxi*  
![Cashflow-Optionen über vault-maxi](../media/cashflow_options_DE_03.png)

### DUSD-Vault + delta-neutraler LM {#dusd-vault--delta-neutral-lm-1}

- Eingabe: **DUSD (66% - 100%)** + beliebige Mischung aus BTC, ETH, USDT, USDC, DFI
- Risiko: alle mit dem Betrieb von Bots verbundenen Risiken + IL
- Belohnungen: **30,3-32,1% in DFI**

Der Single-Mint-Modus von vault-maxi ermöglicht es Ihnen, die oben beschriebene Strategie zu automatisieren (DUSD aus Sicherheiten nehmen und dToken minten). Auf diese Weise müssen Sie selbst keine Berechnungen durchführen und können die Gewinne sicher genießen.

### DFI-Vault + einzelne Münze delta-neutral LM {#dfi-vault--single-mint-delta-neutral-lm}

- Eingabe **DFI (mindestens 70%)** + beliebige Mischung aus BTC, ETH, USDT, USDC, DUSD
- Risiko: alle mit dem Betrieb von Bots verbundenen Risiken + IL
- Belohnungen: **24,6% in DFI**

Die Strategie ist die gleiche wie in der DUSD-Version, aber mit DFI aus den Sicherheiten und dem Minten von DUSD. Durch die Auszahlung der DEX-Gebühr erhält diese Strategie zusätzliche Belohnungen für das DUSD-Darlehen. Für LM wird der DUSD-DFI-Pool verwendet.

### Gemischter Vault + doppeltes Minten delta-neutrale LM {#mixed-vault--double-mint-delta-neutral-lm}

- Eingabe: **>50% DFI** + beliebige Mischung aus BTC, ETH, USDT, USDC, DUSD
- Risiko: alle mit dem Betrieb von Bots verbundenen Risiken + IL
- Belohnungen: **28,4% in DFI**

Bei dem Doppel-Minting werden sowohl DUSD als auch der dToken aus dem Vault gemintet und in LM eingezahlt. Auch hier erhöht der negative Zinssatz die Belohnung für diese Strategie. Mit der Aktualisierung benötigen Sie 50% der erforderlichen Sicherheiten in DFI.

## Zusammenfassung {#summary}

*Übersicht über alle verschiedenen Optionen*  
![Überblick über die verschiedenen Optionen](../media/cashflow_options_DE_04.png)

Wie Sie sehen können, gibt es in diesem schönen Ökosystem mehrere Möglichkeiten für den Cashflow.
