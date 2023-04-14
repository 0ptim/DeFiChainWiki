---
title: Long and Short positions
description: The basic methods of investing and trading on DeFiChain.
---

There are many ways of investing in decentralized Assets (so called "dAssets") using the DefiChain DEX. This chapter is focused on the three basic methods.

<div className="background_map">

![basic investment scheme](./../media/investingtrading_EN_01.png)

</div>

The examples are made for the input investment of DFI, but it can be replaced with all crypto tokens of DeFiChain ecosystem (f.e. dBTC, dETH, dUSDT,...).

### Long position - Neutral DFI

#### Investment thesis

The future price of the dAsset will be higher than it is today.

#### DefiChain procedure

- sell DFI on the DEX for **X amount of DUSD**
- buy preferred dAsset on the DEX with **X amount of DUSD**
- The goal of the investment
  - sell the dAsset for **Y amount of DUSD**
  - Profit: **(Y-X) DUSD**

#### Remarks

- the steps of procedure (sell and buy) should be combined to a composite swap, which makes both steps in one transaction
- trades (losses and gains) are measured in DUSD = $1
- the price of dAsset comes from the liquity minig pools, not from the price feed of the Oracles **→ pay attention to the pool ratio**
- any price movement of DFI has no effect on the investment
- whole capital is invested

:::info Example

When **DFI** price is **$2.50**, then **280 DFI** can be swapped to **700 DUSD**. For those **700 DUSD 1 dTSLA** can be bought.

After some time the **dTSLA** price rises to **1000 DUSD** and the **DFI** price rises to **$4.00.** The dTSLA can be sold for 1000 DUSD and makes **300 DUSD profit**, but the **1000 DUSD** can be swapped back **only to 250 DFI**, because the DFI price went up.

**→ The best case for this investment: Only the price of dAsset increases.**

:::

### Long position - Long DFI

#### Investment thesis

The future price of the dAsset and DFI will be higher than it is today.

#### DefiChain procedure

- put DFI in vault as the collateral for a decentralized loan and mint **x amount of DUSD**
- buy preferred dAsset on the DEX with **X amount of DUSD**
- The Goal of the investment
  - sell the dAsset for **Y amount of DUSD**
  - payback loan which equals **X amount of DUSD + interest**
  - Profit: **(Y-X) DUSD - interest**

#### Remarks

- trades (losses and gains) are measured in DUSD = $1
- the price of dAssets comes from the liquity minig pools, not from the price feed of the Oracles **→ pay attention to the pool ratio**
- if the price of the collateral falls too low, the vault will be liquidated **→ pay attention to the collateral ratio**
- not all capital is invested (2/3 – 1/10 with respect to collateral ratio) **→ the yield for long position on dAsset is reduced**

:::info Example

When **DFI** price is **$2.50**, the collateral of **280 DFI** equals **$700** and provides decentralized loan of **350 DUSD** with collateral ratio of 200%. Those **350 DUSD** can be swapped to **0.5 dTSLA** on the DEX.

When after one year **dTSLA** price goes up to **$1000** and **DFI** price rises to **$4.00**, the **0.5 dTSLA** can be swapped for **500 DUSD.** The loan can be closed with **350 + 7 DUSD** (the interest included). **The profit is 500 - 357 = 143 DUSD.**

The price of **DFI** collateral is now **$1120** which means an additional **profit of $420**.

**→ The best case for this investment: dAsset price and DFI price increases**

:::

### Short position - Long DFI

#### Investment thesis

The future price of the dAsset will be lower than it is today.

#### DefiChain procedure

- put DFI in vault as the collateral for a decentralized loan and mint **X amount of preferred dAsset**
- sell the dAsset on the DEX and get **Y amount of DUSD**
- The Goal of the investment
  - buy **X amount of dAsset+loan interest** back with **Z amount of DUSD** (after dAsset price drop)
  - payback loan
  - Profit: **(Y-Z) DUSD**

#### Remarks

- trades (losses and gains) are measured in DUSD = $1
- the price of dAssets comes from the liquity minig pools, not from the price feed of the Oracles **→ pay attention to the pool ratio**
- if the price of the collateral falls too low, the vault will be liquidated **→ pay attention to the collateral ratio**
- not all capital is invested (2/3 – 1/10 with respect to collateral ratio) **→ the yield for short position on dAsset is reduced**

:::info Example

When **DFI** price is **$2.50**, the collateral of **280 DFI** equals **$700** and provides decentralized loan **0.5 dTSLA** (200% collateralization and dTLSA price of $700). This **0.5 dTSLA** can be swapped on the DEX for **350 DUSD.**

When after one year the **dTSLA** price drops to **$500** and the **DFI** price increases to **$4.00,** the loan amount + interest is **0.51 dTSLA**, which can be bought for **255 DUSD. The profit is 350 - 255 = 95 DUSD.**

The price of **DFI** collateral is now **$1120** which means an additional **profit of $420.**

**→ The best case for this investment: The dAsset price decreases and DFI price increases.**

:::
