---
title: Vaults und Loans
description: TODO - Short description of this page.
---

## Vaults und Loans {#vaults-and-loans}

Eine interessante Funktion ist die Möglichkeit, einen sogenannten "Vault" zu erstellen und einen "Loan" zu nehmen (auch: "minten"). Die Funktionalität ist vergleichbar mit der Kreditaufnahme bei einer Bank, jedoch vollständig dezentral auf der Blockchain. Jeder kann dies in seiner Wallet selbst tun.

### Rahmenbedingungen für Kreditsicherheiten ("Collateral") {#collateral-rules}

Nutzer dürfen DFI, dBTC, dETH, DUSD, dUSDT, und dUSDC als Sicherheit ("Collateral") im Vault ("Tresor") hinterlegen.

- 50% des Vaults müssen DFI sein, wenn man einen DUSD-Kredit ("loan") nehmen will ("DUSD minten")
- 50% des Vaults müssen DFI oder DUSD sein, wenn man einen anderen dToken minten möchte
- So lange die [DEX-Stabilisierungsgebühr](./DEX_Fee_Structure.md) über 1% ist, zählt 1 DUSD im Vault 1,20$ als Sicherheitenwert

### Nutzung des Vaults {#vault-options}

Vaults können mit einer Liquidations-Quote zwischen 150% und 1000% gewählt werden. Dieser Prozentsatz bezieht sich auf das Verhältnis "Sicherheitenwert zu Kredithöhe"

Je höher die Quote, desto mehr Sicherheiten muss man hinterlegen, aber auch umso weniger Zinsen für den Kredit zahlen. Da die Zinssätze auf der DeFiChain im Verhältnis zu den sonstigen APR/APYs aber recht gering sind, ist es nicht effizient, eine hohe Quote zu wählen, da dadurch viel Kapital gebunden wird, welche keine Erträge generiert.

Bedenke, dass der Wert deiner Sicherheiten in der Regel aufgrund der Bewegungen an den Kryptomärkten sehr volatil sein kann. Es ist daher empfehlenswert eine bestimmte Übersicherung herbeizuführen um bei Marktschwankungen, die Liquidationsquote nicht zu unterschreiten. Wie viel Übersicherung man wählt, kann nicht generell gesagt werden. Dies hängt zum einen von den verwendeten Coins ab und zum anderen von der persönlichen Risikoneigung - entscheide selbst mit welcher Übersicherung du gut schlafen kannst.

Wenn die Quote unter die Liquidationsquote fällt, wird der Vault automatisch in den Liquidationsprozess übergeben. Mache dir bewusst, dass sowohl der Wert deiner Sicherheiten als auch der Wert deines Kredits Einfluss auf die Quote hat, da auch der Wert deines Kredits Marktschwankungen unterliegt. Im Liquidationsprozess können dann andere Nutzer auf deinen Vault bieten (mehr Informationen weiter unten)

Beispiel: Wenn du einen dTSLA-Loan aufnimmst und der Kurs von dTSLA steigt, hat dein Kredit einen höheren Wert und das Verhältnis von Sicherheiten zu Kredit verschlechtert sich, sofern sich die Sicherheiten nicht ebenfalls bewegen.

Als Kredit sind DUSD oder diverse andere dToken möglich. Eine Liste aller [handelbaren dToken](./Tradable_dAssets_on_DeFiChain.md) findest du hier. Diese Möglichkeiten bieten verschiedene Marktstrategien (long/short/neutral) und verschiedene cashflow-Positionen. Einen Token shorten bedeutet, dass man einen Kredit in diesem Token aufnimmt, direkt verkauft und darauf spekuliert, diesen später günstiger zurückkaufen zu können, um den Loan zu tilgen. Weiterhin sind gehebelte Positionen möglichen. Strategien findest du unter [Investing & Trading](./Investing_Trading.md).

### DUSD-Loan-Besonderheiten {#dusd-loan-specials}

Ungedeckte DUSD sind solche, die aus der früher möglichen Rückzahlung von DUSD-Loans mit DFI resultieren (Option ist nicht mehr nutzbar). Gedeckte DUSD sind jene, zu denen es Vaults mit Sicherheiten gibt. Zum Zeitpunkt der Verfassung dieses Artikel gibt es zu viele ungedeckte DUSD im Ökosystem. Das Ziel ist es, den Anteil gedeckter DUSD zu erhöhen. Dazu wurde ein DFIP genehmigt mit dem die Aufnahme von DUSD-Loans mit einem Negativzins-Anreiz versehen wird. Reguläre Zinsen auf einen Loan sind 5%

Um die Nachfrage nach DUSD-Loans zu erhöhen wurde zusätzlich ein negativer Zinssatz implementiert, der sich aus dem Betrag geburnter DUSD durch die DEX-Fee ergibt. Die Hälfte der DEX-Fee wird weiterhin geburnt ("aus dem System genommen") während die andere Hälfte an die DUSD-Kreditnehmer ausgeschüttet wird. Der Negativzins verändert sich täglich, weil die Burn-Anzahl täglich schwankt. Die aktuelle Negativverzinsung findest du [hier](https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934).

### Gebote auf liquidierte Vaults abgeben {#bidding-on-liquidated-vaults}

Es kommt immer wieder vor, dass Vaults unter die Liquidationsquote fallen, weil es Preisschwankungen gibt, die durch die Übersicherung nicht aufgefangen werden können. Extreme Schwankungen von 30% innerhalb einer Stunde führen jedoch zu einem Stop der Liquidation. Somit haben Nutzer die Möglichkeit, Sicherheiten nachzuschießen oder Darlehensteile zurückzuzahlen um die Liquidation zu verhindern.

Eine Auktion dauert immer sechs Stunden und es gibt ein individuelles Mindestgebot für jeden Vault. Interessenten bieten auf den zur Versteigerung stehenden Token, dafür erhalten sie im Gegenzug das Collateral im Vault. Der Vault-Besitzer erhält das Gebot abzüglich einer 5%-Gebühr, die geburnt wird.

## Zusammenfassung {#summary}

### Vorteile {#advantages}

- Absicherungsgeschäfte gegen Aktien
- Hebeln von Krypto-Positionen
- Erhöhung der im Umlauf befindlichen Token

### Nachteile {#disadvantages}

- Risiko der Liquidation, welches jedoch z.B. mit Kügi's Bot [vault-maxi](https://github.com/kuegi/defichain_maxi) deutlich reduziert werden kann
- Zinszahlung auf Kredite

## Häufige Verunsicherung bei Nutzern {#common-topics-of-confusion}

Auch als fortgeschrittener Nutzer kan es immer wieder Situationen geben, die bei der DeFiChain für Verwirrung sorgen. Die nachfolgenden möchten wir an dieser Stelle aufklären.

### Oracles und DEX Preise {#oracles-and-dex-prices}

Tokenisierte Vermögenswerte auf DeFiChain heißen immer d\[Asset\], wobei \[Asset\] für den offiziellen Börsenticker steht. Beim Swappen von Token auf der DEX ist immer wieder festzustellen, dass der Kurs vom Börsenkurs abweicht. Es gibt also zwei verschiedene Preise. Zum einen gibt es den echten Preis, mit dem der Vermögenswert an einer echten Börse (z.B. Google auf der NASDAQ) oder Kryptobörse (z.B. Bitcoin auf Coinbase) gehandelt wird. Dieser Preis wird Oracle-Preis genannt und wird zugrundegelegt, sobald man einen Token mintet.

Auf der anderen Seite gibt es den DEX-Preis, der sich durch Angebot und Nachfrage im DeFiChain-Ökosystem bildet. Aufgrund der isolierten Angebot-Nachfragebildung auf der DEX weicht der Oracle-Preis regelmäßig vom Oracle-Preis nach oben oder unten ab. Beim Liquidity Mining wird der DEX-Preis zugrunde gelegt.

Um zu verhindern, dass DEX-Preise gegenüber den echten Preisen außer Kontrolle geraten, gibt es Mechanismen. Bei Krypto-Assets ist es möglich, diese über Cake 1:1 in das echte Asset zu tauschen. Dadurch gibt es hier eine Arbitrage-Möglichkeit. Für dToken, die auf Aktien/ETF/Rohstoffen basieren, gibt es sogenannte Future Swaps, die sicherstellen, dass ein Mal wöchentlich eine Bandbreite von +/- 5% hergestellt wird.

### Keine Gebote auf Auktionen {#no-bids-on-auctions}

Es gibt immer wieder Marktsituationen, in denen es nicht rentabel ist auf einen Vault zu bieten, weil die Token an der DEX günstiger erworben werden können. In diesem Fall bleibt der Vault in der Versteigerung und der Vault-Besitzer kann auf eine Quotenerholung hoffen, die dazu führt, dass er aus der Liquidierung genommen wird.

### Werde ich liquidiert, wenn die o.a. Rahmenbedingungen für Sicherheiten nicht mehr eingehalten sind? {#will-i-be-liquidated-when-the-collateral-rules-are-not-valid-anymore-in-my-vault}

Wie oben erwähnt gibt es bestimmte Mindestanforderungen an die Besicherung der verschiedenen Loans. Durch Marktschwankungen kann es vorkommen, dass ein ursprünglich korrekt mit min. 50% DFI besicherter DUSD-Loan zwar im Wert noch über die Liquidationsgrenze steht, aber der DFI-Anteil des Collaterals unter 50% gefallen ist. Viele Nutzer befürchten in diesem Fall eine Liquidierung. Dies ist nicht der Fall. Konsequenz ist jedoch, dass keine weiteren Loans mehr aufgenommen werden können, bis die 50%-Regel wieder erfüllt ist.
