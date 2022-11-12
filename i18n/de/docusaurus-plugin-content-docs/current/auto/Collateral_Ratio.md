---
title: Besicherungsverhältnis
description: TODO - Short description of this page.
---

## Berechnung

Das Besicherungsverhältnis berechnet sich durch die Summe der Werte, die dem Vault als Kollateral bereitgestellt wurden, dividiert durch die Summe der aufgenommenen Kredite.

Das heißt, wenn der Wert im Kollateral steigt, so steigt auch das Besicherungsverhältnis. Andererseits würde das Besicherungsverhältnis sinken, sollten die geminteten Assets im Wert steigen, also die Höhe der Kredite zunehmen. Zur Berechnung des Verhältnisses werden immer die aktuellen Oraclepreise herangezogen.

## Minimum collateralization ratio

Abhängig vom gewählten Kreditschema hat jeder Vault ein minimum collateralization ratio. Es ist zwingend notwendig, den Vault zu jeder zeit über diesem Mindestwert zu betreiben, da anderenfalls bei Unterscheitung dieses Mindest-Besicherungsverhältnisses der Vault liquidiert wird.

Die Zur Verfügung stehenden minimum collateralization ratios sind

-   150% min. ratio \> 5% APR
-   175% min. ratio \> 3% APR
-   200% min. ratio \> 2% APR
-   350% min. ratio \> 1.5% APR
-   500% min. ratio \> 1% APR
-   1000% min. ratio \> 0.5% APR

Zum Beispiel kann man beim 150% Schema und als Kollateral hinterlegten DFI im Wert von 1000$ dTSLA im Wert von bis zu 666$ als Kredit aufnehmen. Je höher das minimum collateralization ratio (die Prozentzahl) ist, desto geringer werden die Zinsraten für die Kredite. Der Nachteil dieser höheren Mindest-Verhältnisse ist jedoch, das man nicht so viele Assets minten kann, bzw mehr Kollateral für den gleichen Kredit bräuchte. In diesem Beispiel könnte man mit dem 1000% Schema und DFI im Wert von 1000$ nur dTSLA im Wert von 100$ als Kredit aufnehmen.
