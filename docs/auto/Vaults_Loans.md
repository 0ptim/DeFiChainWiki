---
title: Vaults and Loans
description: TODO - Short description of this page.
---

## Vaults and Loans {#vaults-and-loans}

An interesting feature is the possibility to create a vault from which you can take out a loan and mint new tokens. A vault is similar to a bank, but it is decentralized and anyone can create one.

### Collateral rules {#collateral-rules}

Users may deposit DFI, dBTC, dETH, DUSD, dUSDT, and dUSDC as collateral to the vault.

- 50% of the vault must be collateralized with DFI when taking a DUSD-loan ("minting DUSD")
- 50% of the vault must be DFI or DUSD when minting any other dToken
- As long as the [DEX-stabilization fee](./DEX_Fee_Structure.md) is above 1%, DUSD in the collateral is worth 1.20$

### Vault options {#vault-options}

Vaults can be chosen with liquidation-ratios between 150% and 1000%. That percentage refers to the ratio "Value of your collateral / Value of your loan".

The higher the ratio the more collateral you need and the less interest has to be paid for the loan. As the interest rates for loans are comparatively low versus the possible APR/APY it is not very efficient to choose a high ratio as you have to lock a lot of not-working capital into your vault.

Keep in mind that the value of your collateral is very volatile due to crypto markets movements. So it is recommended to put a certain amount more collateral into the vault than the liquidation ratio. How much more? That depends on your personal risk attitude - you decide which over-collaterization allows you a good sleep at night.

If the ratio goes below the chosen ratio, the vault is automatically sent to a liquidation process. Be aware that both the value of your collateral and the value of your loan is volatile. So movements on both sides influence the ratio - not only the collateral. Other users can bid to take the collateral from the vault (there is more information in the section below).

Example: When taking e.g. dTSLA as a loan and dTSLA's price increases your loan gets a higher value and so the ratio goes down even if the collateral has not changed.

Users can take out DUSD stablecoins, or various dToken such as stock-, ETF- and commodities-tokens. You can find a [list](./Tradable_dAssets_on_DeFiChain.md) of all tradable assets here. This allows an investor to take several positions (long/short/neutral) and several cashflow-positions. Going short on a token means take a loan, sell it immediately and buy it back cheaper later. As the value of the borrowed token decreases, the less money is needed to pay back the loan. You also could leverage any crypto positions you have with the extra borrowed money. For further strategies see [Investing and Trading](./Investing_Trading.md).

### DUSD-Loan 'specials' {#dusd-loan-specials}

Unbacked DUSD are such which result from a former payback-option for DUSD-loans with DFI (option is not active anymore). Backed DUSD are such with an active vault and collateral. As of the day of writing this article there are too many unbacked DUSD in the ecosystem. The community's target is to increase the ratio of backed tokens within the ecosystem. Therefor the community voted on a DFIP which suggested incentive payments for DUSD-loans. The regular loan interest is 5%.

To increase the creation of DUSD-loans there is additionaly a negative interest rate which is calculated from the amount of burned DUSD by the DEX-Fee. Half of the DEX-fee still gets burned (=getting unbacked DUSD ("Algo-DUSD") out of the system and the second half is paid out to the users with DUSD-loans. The APR changes every day, as the burn-amount is changing every day. The current APR for DUSD-loans can be found live [here](https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934).

### Bidding on Liquidated Vaults {#bidding-on-liquidated-vaults}

Occasionally investors default in their vaults as there may be a sudden swift drop in prices, resulting in a vault to have too low of a collateralization ratio. Although users are protected from a 30% swing in prices in an hour, as vaults are halted during this time to allow users to deposit additional collateral, vaults may simply fall below the collateralization ratio. Since there is no "liquidation engine" or such, DeFiChain must think of a way to liquidate these investors' vaults.

Vaults are liquidated by the community. An auction with a six-hour time limit is held for every liquidated vault, with a minimum bid amount decided by the system. Users bid in the borrowed token, and in exchange receive the collateral inside the vault if they win. The vault owner receives the winning bid, minus a 5% fee, which is burned.

## Summary {#summary}

### Advantages {#advantages}

- Hedging against stocks
- Leveraging crypto positions
- Increasing supply of borrowed token (when you "borrow a token," you are actually minting new tokens, increasing the supply, which is good for DeFiChain)

### Disadvantages {#disadvantages}

- Risk of liquidation - can be significantly reduced by using Kügi's Bot [vault-maxi](https://github.com/kuegi/defichain_maxi)
- Interest must be paid on borrowed tokens

## Common Topics of Confusion {#common-topics-of-confusion}

Even as an advanced user, there can still be ideas that can be confusing. Here are a couple of topics that may be perplexing:

### Oracles and DEX Prices {#oracles-and-dex-prices}

Tokenized assets on DeFiChain are always labeled d\[Asset\]. When they are exchanged on the DEX, investors might realize that the price on the DEX might not be the same as the actual price. So, there are actually two different prices of assets on DeFiChain. The first is the real price of the asset, which decentralized bots known as oracles use data from exchanges (Binance), crypto data sites (CoinMarketCap), and/or the Nasdaq (for stocks and ETFs). This price is called the oracle price, and whenever a user mints tokens in their vault, they receive the token at this price. On the other hand, we have DEX prices, which change due to DeFiChain investors and supply and demand. Sometimes there is not enough supply/too much demand, which means that the DEX price of the asset will be higher than what the actual price or the oracle price is. Or, there may be too much supply/too little demand, meaning that the DEX price will be lower. When you are liquidity mining or holding tokens of an asset, you are mining at this price or can exchange your tokens at this DEX price. DEX prices are prevented from going out of control compared to the real asset for two reasons. In crypto tokenized assets, Cake allows investors to exchange the crypto asset at a 1 to 1 ratio for the tokenized asset on DeFiChain, creating an arbitrage opportunity if the price goes too far out from the actual price of the crypto asset. As for stocks we have so called "Future Swaps" which bring the dAssets once a week back into a +/- 5% range to the oracle price.

### No Bids on Auctions? {#no-bids-on-auctions}

Occasionally it would be unprofitable to bid on a vault, and in that case the vault keeps trying to get auctioned and liquidated.

#### Will I be liquidated when the collateral rules are not valid anymore in my vault? {#will-i-be-liquidated-when-the-collateral-rules-are-not-valid-anymore-in-my-vault}

As stated above there are some collateral rules. Due to market-movements it is possible that you have a DUSD-loan which was initially correctly collaterized with 50% DFI is still above the liquidation ratio, but the DFI-value is below 50% of the collateral calue. Many users fear a liquidation at that time, but that will not happen. The consequence is just that you can not get more DUSD-loans until the collaterization level of 50% is reached again.

## Collateral for Vaults (TEMP FROM TUTORIAL) {#collateral-for-vaults}

A new feature that was recently introduced to DeFiChain is the ability to create a vault from which you can take out a loan and mint new tokens. A vault is similar to a bank, but it is decentralized and anyone can make their own. Users may deposit DFI, dBTC, dETH, DUSD, dUSDT, and dUSDC to their vault, and 50% of the vault must be collateralized with DFI or DUSD. Depending on which option borrowers chose for their vault, they can take out between $10.00 (for a vault that has a ratio of 1,000%, or $1 in loans for every $10 in collateral) to $66.66 (a vault with a ratio of 150%, or $6.66 in loans for every $10) in loans for every $100 of collateral. If the ratio of the vault falls below the ratio they chose, their vault is automatically sent to be liquidated, and people bid to take the collateral from the vault (there is more information in the section below).

Users can take out DUSD stablecoins, or various stock-, ETF- and commodities-tokens. This allows an investor to go short on a token; as the value of the borrowed token decreases, the less money needed to pay back the loan. You also could leverage any crypto positions you have with the extra borrowed money. For further strategies see [[Investing & Trading with Decentralized Loans and Assets on DeFiChain]].

### Advantages {#advantages}

- Hedging against stocks
- Leveraging crypto positions
- Increasing supply of borrowed token (when you "borrow a token," you are actually minting new tokens, increasing the supply, which is good for DeFiChain)

### Disadvantages {#disadvantages}

- Risk of liquidation - can be significantly reduced by using Kügi's Bot [vault-maxi](https://github.com/kuegi/defichain_maxi)
- Interest must be paid on borrowed tokens
