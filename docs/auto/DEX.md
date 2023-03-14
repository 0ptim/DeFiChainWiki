---
title: DEX
description: DEX - the decentralized exchange of the DeFiChain ecosystem. Liquidity mining and the role of DUSD.
---

## DEX and Decentralized Trading

DEX is short for Decentralized Exchange and describes the feature on the DeFiChain that enables the trading of dTokens. Other than on a centralized exchange (CEX) there is no orderbook managed by a centralized entity. The exchange is handled via Liquidity pools instead. Such a pool is filled with two different dAssets. The ratio between the amount of dAssets in the pool determinate the dAsset prices. The exchange rate depends on this pool ratio.

## Liquidity Pools

There are two main types of pools on the DeFiChain.

The crypto-pools where is always the tokenized crypto in pair with DFI, the native coin of the DeFiChain, e.g. dETH-DFI or dBTC-DFI. The specific part of crpto-pools are the stablecoin pools dUSDT-DFI and dUSDC-DFI.

The dStock-pools, on the other hand, are always trademade up by dStock and DUSD, the stablecoin of the DeFiChain. E.g. sTSLA-DUSD, dQQQ-DUSD, and so on.

DUSD can be exchange directly with the stablecoin pools dUSDT-DUSD and dUSDC-DUSD and also with the DFI in DFI-DUSD pool. By these three pools the crypto and dStocks parts of liquidity pools are conected.

A list of the dStocks grouped by dAsset categories can be found [here.](./Tradable_dAssets_on_DeFiChain.md)

![](../media/dex_EN_pool-pairs.png)

## Liquidity Mining

The Liquidity mining means to provide the liquidity for rewards. To participate it is needed to add both dAssets of the poolpair in the pool, with the same value on both sides. For example dTSLA and DUSD both with value of $100. The share of the pool is represented by the amount of Liquidity mining tokens. According to size of the share, the part of the DFI rewards and the part of the commissions are paid to the liquidity mining provider each block.

Further information about Liquidity mining topic can be founded [here](../category/liquidity-mining).

## The DEX usage

Using the DEX, one can build his own portfolio in an almost completely decentralized manner, while earning rewards or making profit by trading.

To reach the DEX, The [DeFiChain wallet](../category/Wallets) is needed. A DEX dashboard might look similar to this:

**DEX Pool Pairs**

| Pair<sup>1</sup> | Total Liquidity<sup>2</sup> | Volume (24H)<sup>3</sup> | Liquidity<sup>4</sup>          | Price Ratio<sup>5</sup>             | APR<sup>6</sup> (includes commission<sup>7</sup>) |
| ---------------- | --------------------------- | ------------------------ | ------------------------------ | ----------------------------------- | ------------------------------------------------- |
| dBTC-DFI         | \$306,240,605               | \$1,934,290              | 3,888 dBTC 43,704,406 DFI      | 0.00008897 dBTC/DFI 11,240 DFI/dBTC | 62.61%                                            |
| DUSD-DFI         | \$152,173,668               | \$5,068,896              | 76,086,834 DUSD 21,861,738 DFI | 3.48 DUSD/DFI 0.2873 DFI/DUSD       | 83.37%                                            |
| dSPY-DUSD        | \$18,399,690                | \$264,387                | 19,297 dSPY 9,199,845 DUSD     | 0.002098 dSPY/DUSD 476.7 DUSD/dSPY  | 103.69%                                           |

Each column is described below:

1.  Pair: The pair is what is being exchanged. In the pair dBTC-DFI, we can exchange dBTC to DFI or DFI to dBTC.
2.  Total Liquidity: Every pair comes with a liquidity pool. A liquidity pool is all of the capital that is being added in the pool by providers. They provide liquidity for users to swap. Total liquidity is the dollar equivalent of the assets that are in the liquidity pool. So in the case of the dBTC-DFI pool, the total liquidity is the value of the dBTC and DFI in the pool converted to USD.
3.  Volume (24H): The volume is the amount that was traded in the preceding 24 hours. In the DUSD-DFI pool, there was \$5,068,896 of trades (people exchanging both from DUSD to DFI and DFI back to DUSD).
4.  Liquidity: The liquidity column shows what the liquidity is actually made of. While the column "Total Liquidity" shows the dollar equivalent of the dAssets, the liquidity column actually shows how much of each dAsset is in the liquidity pool. Notice that each side of the liquidity pool makes up exactly 50% of the total liquidity.
5.  Price Ratio: The price ratio, like it implies, is the ratio of the liquidity in the pool. There is 19,297 dSPY and 9,199,845 DUSD in the liquidity pool, so in the pool there is 476.7 DUSD for every dSPY just as the price ratio notes, and 0.002098 dSPY for every DUSD as well.
6.  APR: In a nutshell, this is the current rate that liquidity miners are receiving rewards for providing their dAssets to the pool, exposing themselves both to the risk of both assets and another risk which is known as impermanent loss.
7.  Commission: When a user swaps, 0.2% of their trade stays in the liquidity pool and is instead distributed proportionally to each of the liquidity miners. The APR that is listed on defiscan.live includes the commissions, which are based on the total liquidity and the 24-hour volume.

:::danger Attention

Using the DEX is not risk free! Before start using the DEX is highly recommended to go throug the [**Liquidity mining**](../category/liquidity-mining) and [**Investing & Trading**](../category/investing--trading) topics!

:::
