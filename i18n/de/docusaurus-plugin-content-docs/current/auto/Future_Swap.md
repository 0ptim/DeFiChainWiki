---
title: Future Swap
description: TODO - Short description of this page.
---

## Future Swap

### Hintergrund

Nach der Einführung der Stock Tokens wurden diese mit einem Premium gehandelt. Die Preise auf der DEX waren also höher als die Oracle Preise der jeweiligen Aktien. Um dem Premium (aber auch einem möglichen Discount) entgegenzuwirken wurden mit DFIP-2203-A die Future Swaps eingeführt.

<https://github.com/DeFiCh/dfips/issues/127>

Durch diesen Swap, der ca jede Woche (alle 7\*2880 blocks) durchgeführt wird, kann man zu Oracle Preis + 5% kaufen bzw Oracle Preis -5% verkaufen. Kauf/Verkauf ist dabei ein Tausch von/in DUSD.

### Zeitpunkt

Wann der nächste Future Swap durchgeführt wird zeigt defiscan.live unter folgendem Link

<https://defiscan.live/blocks/countdown/NextFutureSwap>

Der Block lässt sich in der Desktop Wallet mit dem Befehl **getfutureswapblock** abfragen

Um das aktuelle Premium der einzelnen dToken abzufragen eignet sich die Seite "dStocks Quickcheck" unter

<https://dstocks-defichain.web.app/>

Auf defichain-analytics kann man den Verlauf des Premiums über die Zeit als Diagramm verfolgen

<https://www.defichain-analytics.com/vaultsLoans?entry=premium>

### Strategie

Durch diese Maßnahme lässt sich der Preis der dTokens in der +-5% Bandbreite halten. Sollte es zu einem höheren Premium bzw Discount kommen kann wie folgt arbitragiert werden. Für den Fall Premium Fall kurz vor dem Future Swap:

- Mittels Vault den dToken minten (einen Kredit aufnehmen)
- Für das Besicherungsverhältnis des Vaults wird der Oracle Preis (echter Preis ohne Premium) herangezogen
- Die geminteten dToken über den DEX Pool verkaufen (also in DUSD tauschen)
- Durch das Premium erhält man „zu viele“ DUSD
- Mit diese DUSD einen Future Swap einstellen um die dToken zum Oracle Preis (also günstiger, da ohne Premium) zurück zu kaufen.
- Bei Ausführung des Future Swaps erhält man mehr dToken als man gemintet hat.
- Der Kredit (gemintete dToken) könne zurückgezahlt werden und die zusätzlich erhaltenen dToken bleiben als Gewinn in der Wallet.

### Future Swap im Light Wallet

In der Light Wallet im Reiter DEX den gewünschten Pool auswählen. Im Swap Menü von Instant auf Future wechseln.

![Future Swap im light wallet](./../media/future_swap_01.jpg)

### Future Swap in der Desktop Wallet

In der Konsole kann der Future Swap mit dem Befehl **futureswap** eingegeben werden.

Syntax:

```abap
futureswap "address" "amount" ( "destination" [{"txid":"hex","vout":n},...] )
```

Zum Beispiel wenn 500 DUSD in kannNetflix Token getauscht werden sollen:

```abap
futureswap "dVvPfdjhfdjhfjd32dPWZoNYno7uBUn1KyU" "500@DUSD" dNFLX)
```

Mit **getpendingfutureswaps** kann abgefragt werden welche Future Swaps bereits eingemeldet worden sind.

```abap
getpendingfutureswaps "address"
```
