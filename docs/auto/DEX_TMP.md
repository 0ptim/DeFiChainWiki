---
title: DEX TEMP FROM TUTORIAL
description: TODO - Short description of this page.
---

## The DEX {#the-dex}

Embedded in DeFiChain is a decentralized exchange. All of the dTokens are listed on the DEX and paired with either DFI or DUSD, DeFiChain's stablecoin. The DEX works almost like a traditional exchange, but there are no orderbooks and no current way to buy or sell tokens except for what would be called a market order. All the information about the DEX can be found on the wallet being used or on [defiscan.live](https://defiscan.live), which aggregates DeFiChain's data and puts it on one website. You can find data about transactions, wallet balances, and more on defiscan.live as well.

In DeFiChain's DEX you will be able to exchange for various assets and/or provide liquidity to the exchange for great rewards. The DEX offers DFI pairs such as dBTC to DFI (read previous tutorial for reason why the asset is called dBTC instead of BTC), also written as dBTC-DFI, and DUSD pairs (DUSD is DeFiChain's stablecoin, backed with \$1.50 or more per stablecoin \[they are worth \$1 each\]). DUSD pairs are found with stock tokens such as dSPY-DUSD.

Using the DEX, users can build their own portfolio in an almost completely decentralized manner, while earning rewards.

To use it, first locate it on the wallet you are using. A DEX dashboard might look similar to this:

**DEX Pool Pairs**

| Pair<sup>1</sup> | Total Liquidity<sup>2</sup> | Volume (24H)<sup>3</sup> | Liquidity<sup>4</sup>          | Price Ratio<sup>5</sup>             | APR<sup>6</sup> (includes commission<sup>7</sup>) |
| ---------------- | --------------------------- | ------------------------ | ------------------------------ | ----------------------------------- | ------------------------------------------------- |
| dBTC-DFI         | \$306,240,605               | \$1,934,290              | 3,888 dBTC 43,704,406 DFI      | 0.00008897 dBTC/DFI 11,240 DFI/dBTC | 62.61%                                            |
| DUSD-DFI         | \$152,173,668               | \$5,068,896              | 76,086,834 DUSD 21,861,738 DFI | 3.48 DUSD/DFI 0.2873 DFI/DUSD       | 83.37%                                            |
| dSPY-DUSD        | \$18,399,690                | \$264,387                | 19,297 dSPY 9,199,845 DUSD     | 0.002098 dSPY/DUSD 476.7 DUSD/dSPY  | 103.69%                                           |

Now let's break down each of the columns, so we can understand what is going on..

1.  Pair: The pair is what is being exchanged. In the pair dBTC-DFI, we can exchange dBTC to DFI or DFI to dBTC.
2.  Total Liquidity: Every pair comes with a liquidity pool. A liquidity pool is all of the capital that is being invested in the pool by investors. They provide liquidity for users to swap. Total liquidity is the dollar equivalent of the assets that are in the liquidity pool. So in the case of the dBTC-DFI pool, the total liquidity is the value of the dBTC and DFI in the pool converted to USD.
3.  Volume (24H): The volume is the amount that was traded in the preceding 24 hours. In the DUSD-DFI pool, there was \$5,068,896 of trades (people exchanging both from DUSD to DFI and DFI back to DUSD).
4.  Liquidity: The liquidity column shows what the liquidity is actually made of. While the column "Total Liquidity" shows the dollar equivalent of the assets, the liquidity column actually shows how much of each asset is in the liquidity pool. Notice that each side of the liquidity pool makes up exactly 50% of the total liquidity.
5.  Price Ratio: The price ratio, like it implies, is the ratio of the liquidity in the pool. There is 19,297 dSPY and 9,199,845 DUSD in the liquidity pool, so in the pool there is 476.7 DUSD for every dSPY just as the price ratio notes, and 0.002098 dSPY for every DUSD as well.
6.  APR: There will be more information in the liquidity mining section below. In a nutshell, this is the current rate that liquidity miners are receiving rewards for providing their assets to the pool, exposing themselves both to the risk of both assets and another risk which is known as impermanent loss. There is a calculation in order to get the APR, but it is more complex than an investor would need to know at the moment.
7.  Commission: When a user swaps, 0.2% of their trade stays in the liquidity pool and is instead distributed proportionally to each of the liquidity miners. The APR that is listed on defiscan.live includes the commissions, which are based on the total liquidity and the 24-hour volume.
