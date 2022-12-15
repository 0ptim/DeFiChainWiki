---
title: Cashflow Options
description: TODO - Short description of this page.
---

On DeFiChain, we have many great ways to provide value to the ecosystem and receive cashflow for it. Depending on your assets and risk appetite, you can choose your best fit. In this post, I try to summarize all the ways to make it easier for you to choose. Maybe you will also find some options that you missed before. With the coming update, the rewards on some options will also change, so read and find your best option.

:::info Disclaimer
As always, this is not financial advice, the rewards are a snapshot at the time of writing and will likely change (up or down) from day to day. Every option of course includes the general risk of the whole chain going to zero.
:::

The delta-neutral strategies are based on 40% APR in the dToken pool. Those delta-neutral strategies are still subject to a possible small Impermanent Loss, that's why I always recommend to use less volatile dTokens for it. A 20% move in the dToken results in 0.5% loss due to shifting pools.

## Simple, manual strategies {#simple-manual-strategies}

Let's start with options that involve no or low risk.

_Manual cashflow options on DeFiChain_  
![Manual cashflow options on DeFiChain](./media/cashflow_options_EN_01.png)

### Staking DFI {#staking-dfi}

- Input: **100% DFI**
- Risk: counterparty risk of centralized service
- Rewards: **20.8% APY - 23.7% APR in DFI**

This is the simplest but still effective way: add any amount of DFI to your cake or DFX account and receive cashflow. They even do the auto compounding for you.

If you have 20k DFI you can also run your own [Masternode](./Masternode.md), reduces counterparty risk and increases your reward.

You can also lock your DFI into staking to receive additional rewards. 5 years for 35% APR or 10 years for 47% APR.

### LM stablecoin pools {#lm-stablecoin-pools}

- Input: **50% DUSD + 50% (USDT or USDC)**
- Risk: IL (de/repeg of DUSD)
- Rewards: **36-45% in DFI**

You need your funds split in equal parts to DUSD and USDC/T. If you have that, this is a great place to earn yield on stablecoins.

### LM crypto pools {#lm-crypto-pools}

- Input: **50% DFI + 50% other crypto** (BTC, ETH, USDT, USDC, DUSD, LTC, BCH, DOGE)
- Risk: IL (move of DFI vs. other crypto)
- Rewards: **11-40% in DFI**

You need your funds split in equal parts to DFI and other cryptos. If you have that, this is a great place to earn yield on your existing crypto exposure.

### LM dStock pools {#lm-dstock-pools}

- Input: **50% DUSD + 50% dStock** (SPY,QQQ,TLT,GLD,TSLA,GME...)
- Risk: IL
- Rewards: **10-40% in DFI**

This is the best way to earn cashflow on your diversified stock portfolio, specially if you want market exposure but not crypto exposure.

## Manual strategies with vaults {#manual-strategies-with-vaults}

Vaults on DeFiChain are incredible tools, but to use them safely, you need to understand them. If you think it's all too complicated: nothing wrong with that. Stop reading now and stick to one of the above options.

Otherwise, follow me down the rabbit hole.

_Vault strategies that can be done manually_  
![Vault strategies that can be done manually](./media/cashflow_options_EN_02.png)

### Looped DUSD vault {#looped-dusd-vault}

- Input: **100% DUSD**
- Risk: "none" (missing the time when negative interest is gone, and you start paying)
- Rewards: **30% in DUSD**

In contrast to all other options, the rewards in this strategy are not paid to your address, but are reducing your loan amount. For compounding you need to take more loans (and loop again) which won't be possible after FCE update.

It will generally not be possible to create those after the FCE update.

Right now, this is a great place to be with your DUSD. But read on.

### DUSD vault + delta-neutral LM {#dusd-vault--delta-neutral-lm}

- Input: **100% DUSD**
- Risk: dToken IL + you need to monitor your vault depending on your collateral ratio
- Rewards: **28-30% in DFI** (for collateral ratio between 180 and 200%)

Put parts of your DUSD into the collateral and mint a dToken of your choice, such that the amount of minted dToken is the same as the remaining DUSD. Now you can put them together into the LM. This is a delta-neutral strategy, as you are neither long nor short in the dToken. You owe it to the vault, but at the same time you own the same amount of dToken being in the LM-pool.

With DUSD being worth $1.2 as collateral after the fork, this will likely be even more profitable than the looped DUSD vault, specially since this gets more profitable when DFI rises.

But make sure to choose a collateral ratio that you feel comfortable with. Since DUSD is stable in the vault, a 180% ratio in this case means that your dToken can rise 20% before you get liquidated. So if you choose a low volatile token, watching it daily could be enough.

If you like this idea but don't want to monitor/adjust your vault manually, read on to the automated options.

## Additional strategies with bots like vault-maxi {#additional-strategies-with-bots-like-vault-maxi}

The main risk with vaults is liquidation. You can prevent that by having enough buffer in the collateral ratio. But this will reduce your rewards dramatically.

Bots like vault-maxi can help here by constantly monitoring your vault and making sure it will always stay within the defined range.

But bots also add other risks to the equation (code errors, cloud-provider downtimes, hacks etc.). **Only use bots if you understand and accept all risks that come with it.**

If you want to look deeper into bots, vault-maxi is a great option. v2.3 ([released on GitHub with setup guide](https://github.com/kuegi/defichain_maxi/releases/tag/v2.3)) provides all options shown here. If you are afraid that vault-maxi is too complicated to set up, watch this video and decide for yourself: https://youtu.be/NOeXa69Z4GU

The following strategies assume a target collateral ratio of 160%.

_Cashflow options via vault-maxi_  
![Cashflow options via vault-maxi](./media/cashflow_options_EN_03.png)

### DUSD vault + delta-neutral LM {#dusd-vault--delta-neutral-lm-1}

- Input: **DUSD (66% - 100%)** + any mix of BTC, ETH, USDT, USDC, DFI
- Risk: all the risks involved with running bots + IL
- Rewards: **30.3-32.1% in DFI**

The single-mint mode of vault-maxi allows you to automate the strategy from above (take DUSD from collateral and mint dToken). This way you don't need to do any calculations yourself and can safely enjoy the rewards.

### DFI vault + single mint delta-neutral LM {#dfi-vault--single-mint-delta-neutral-lm}

- Input **DFI (at least 70%)** + any mix of BTC, ETH, USDT, USDC, DUSD
- Risk: all the risks involved with running bots + IL
- Rewards: **24.6% in DFI**

The strategy is the same as in the DUSD version, but using DFI from the collateral and minting DUSD. With the DEX-fee payout, this strategy gets additional rewards on the DUSD loan. For LM, the DUSD-DFI pool is used.

### Mixed vault + double mint delta-neutral LM {#mixed-vault--double-mint-delta-neutral-lm}

- Input: **>50% DFI** + any mix of BTC, ETH, USDT, USDC, DUSD
- Risk: all the risks involved with running bots + IL
- Rewards: **28.4% in DFI**

In the double-mint case, both DUSD and the dToken are minted from the vault and put into LM. Again, the negative interest rate increases the rewards for this strategy. With the update, you need 50% of the required collateral in DFI.

## Summary {#summary}

_Overview of all different options_  
![Overview of all different options](./media/cashflow_options_EN_04.png)

As you can see, there are multiple ways for cashflow in this beautiful ecosystem.
