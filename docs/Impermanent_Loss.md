---
title: Impermanent Loss
description: TODO - Short description of this page.
---

Assets of a liquidity pool can have strong price fluctuations (in relation to each other). Arbitrageurs can arbitrage differences between exchanges, which is why liquidity pools stay balanced, but it comes at a cost to liquidity miners.

Here is a demonstration:

There is currently 9,000 DFI and 9 BTC in the BTC-DFI pool. The ratio of the pool is 1,000 DFI/BTC. When someone adds liquidity, they must add in that exact proportion. They add 1,000 DFI and 1 BTC to the pool (value 2,000 DFI), which means that the pool size is now 10,000 DFI and 10 BTC. So, their proportion of the pool is 10%, meaning that when they would like to withdraw, they can remove 10% of the liquidity pool. Suddenly, the price of BTC versus DFI goes up 4x. The pool must be rebalanced in order for the pool to have the new ratio, 4,000 DFI/BTC. However, it must maintain the the xy-constant of 100,000 (the two pools' liquidity amounts multiplied together), or 10,000 DFI \* 10 BTC. To fulfill both conditions, the amount of BTC in the pool goes down to 5, while the amount of DFI increases to 20,000. This happens by arbitrageurs who add DFI to the pool and take BTC to sell for a profit (at the cost of providers). Now, if the investor takes out their 10% share, they will receive 0.5 BTC and 2,000 DFI. They sell their BTC, and receive another 2,000 DFI. They now have 4,000 DFI, a 100% increase from their original 2,000 DFI. However, if they had just held their 1 BTC and their 1,000 DFI, they would be able to swap their whole BTC to 4,000 DFI and have 5,000 DFI instead, resulting in an impermanent loss of 1,000 DFI or 20%.

_Rule of thumb: The longer you wait, the lesser is the risk of a loss._

**A detailed explanation of impermanent loss can be found here:**

<https://julianhosp.com/impermanent-loss-other-liquidity-mining-risks-explained/>

**A calculator to calculate the impermanent loss is here:**

<https://decentyields.com/impermanent-loss-calculator>

and:

<https://www.krypto-magazin.de/impermanent-loss-rechner/> (in German)

Example: You use the BTC-DFI liquidity pool (Asset 1: BTC; Asset 2: DFI). The price of DFI doubles, while BTC hast not changed at all, or DFI has increased against BTC by 2x. You should key this into the calculator:

_Asset 1: 0%_

_Asset 2: 100%_

After hitting "Calculate" it will compute an impermanent loss of 5.72%.
