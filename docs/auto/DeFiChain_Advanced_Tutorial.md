---
title: DeFiChain Advanced Tutorial
description: DeFiChain advanced tutorial. What are vaults, auctions, DFIPs and CFPs? Oracle prices vs. DEX prices.
---

In the previous [tutorial](./DeFiChain_Intermediate_Tutorial.md), we went over staking and liquidity mining and how you can get cashflow by using these investment methods. In this tutorial, we will be going in depth about vaults and auctions, which are two new features in DeFiChain. We also want to go over DeFiChain Improvement Proposals (DFIPs) and Community Funding Proposals (CFPs), two things commonly heard about in DeFiChain which could enable **you** to help change the direction of DeFiChain.

### Collateral for Vaults {#collateral-for-vaults}

A new feature that was recently introduced to DeFiChain is the ability to create a vault from which you can take out a loan and mint new tokens. A vault is similar to a bank, but it is decentralized and anyone can make their own. Users may deposit DFI, dBTC, dETH, DUSD, dUSDT, and dUSDC to their vault, and 50% of the vault must be collateralized with DFI or DUSD. Depending on which option borrowers chose for their vault, they can take out between $10.00 (for a vault that has a ratio of 1,000%, or $1 in loans for every $10 in collateral) to $66.66 (a vault with a ratio of 150%, or $6.66 in loans for every $10) in loans for every $100 of collateral. If the ratio of the vault falls below the ratio they chose, their vault is automatically sent to be liquidated, and people bid to take the collateral from the vault (there is more information in the section below).

Users can take out DUSD stablecoins, or various stock-, ETF- and commodities-tokens. This allows an investor to go short on a token; as the value of the borrowed token decreases, the less money needed to pay back the loan. You also could leverage any crypto positions you have with the extra borrowed money. For further strategies see [[Investing & Trading with Decentralized Loans and Assets on DeFiChain]].

#### Advantages {#advantages}

- Hedging against stocks
- Leveraging crypto positions
- Increasing supply of borrowed token (when you "borrow a token," you are actually minting new tokens, increasing the supply, which is good for DeFiChain)

#### Disadvantages {#disadvantages}

- Risk of liquidation - can be significantly reduced by using Kügi's Bot [vault-maxi](https://github.com/kuegi/defichain_maxi)
- Interest must be paid on borrowed tokens

### Bidding on Liquidated Vaults {#bidding-on-liquidated-vaults}

Occasionally investors default in their vaults as there may be a sudden swift drop in prices, resulting in a vault to have too low of a collateralization ratio. Although users are protected from a 30% swing in prices in an hour, as vaults are halted during this time to allow users to deposit additional collateral, vaults may simply fall below the collateralization ratio. Since there is no "liquidation engine" or such, DeFiChain must think of a way to liquidate these investors' vaults.

Vaults are liquidated by the community. An auction with a six-hour time limit is held for every liquidated vault, with a minimum bid amount decided by the system. Users bid in the borrowed token, and in exchange receive the collateral inside the vault if they win. The vault owner receives the winning bid, minus a 5% fee, which is burned. (verify)

## DFIPs and CFPs (verify) {#dfips-and-cfps-verify}

DFIPs and CFPs are a large part of DeFiChain. Aside from normal development activity from the developers, there is also activity from the community, which should happen either way, as the point of decentralization is that the community eventually does all of the development, not a centralized team overseeing the development.

### DFIPs (help needed) {#dfips-help-needed}

DFIPs are made to improve DeFiChain itself in general with improvements to features/new features, implemented by the developers.

An example of a DFIP would be using futures contracts to solve the premium of tokenized stocks on DeFiChain (read more about [DFIP-2203-A](https://github.com/DeFiCh/dfips/issues/127)), or allowing tokenized Ethereum to be used in a vault (read more about [DFIP-2203-B](https://github.com/DeFiCh/dfips/issues/128)).

### CFPs {#cfps}

CFPs are community proposals that community members create. Community proposals are used to get funding from DeFiChain's Community Fund, which is created by masternodes' block rewards. Community members can request funding for a DeFiChain project that are completing/would like to undertake. Many community projects that are found in DeFiChain are partly funded by our community fund.

## Common Topics of Confusion {#common-topics-of-confusion}

Even as an advanced user, there can still be ideas that can be confusing. Here are a couple of topics that may be perplexing:

### Oracles and DEX Prices {#oracles-and-dex-prices}

Tokenized assets on DeFiChain are always labeled d\[Asset\]. When they are exchanged on the DEX, investors might realize that the price on the DEX might not be the same as the actual price. So, there are actually two different prices of assets on DeFiChain. The first is the real price of the asset, which decentralized bots known as oracles use data from exchanges (Binance), crypto data sites (CoinMarketCap), and/or the Nasdaq (for stocks and ETFs). This price is called the oracle price, and whenever a user mints tokens in their vault, they receive the token at this price. On the other hand, we have DEX prices, which change due to DeFiChain investors and supply and demand. Sometimes there is not enough supply/too much demand, which means that the DEX price of the asset will be higher than what the actual price or the oracle price is. Or, there may be too much supply/too little demand, meaning that the DEX price will be lower. When you are liquidity mining or holding tokens of an asset, you are mining at this price or can exchange your tokens at this DEX price. DEX prices are prevented from going out of control compared to the real asset for two reasons. In crypto tokenized assets, Cake allows investors to exchange the crypto asset at a 1 to 1 ratio for the tokenized asset on DeFiChain, creating an arbitrage opportunity if the price goes too far out from the actual price of the crypto asset. As for stocks, the fact that users get to create new tokens at the actual price of the token also provides an arbitrage opportunity to keep the tokenized stock prices in line with real prices.

### No Bids on Auctions? {#no-bids-on-auctions}

Occasionally it would be unprofitable to bid on a vault, and in that case the vault keeps trying to get auctioned and liquidated.
