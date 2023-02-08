---
title: Collateral Ratio
description: How to calculate the collateralization ratio? Different loan schemes on DeFiChain vaults explained.
---

## Calculation

The collateralization ratio (or collateral ratio) is calculated as the total collateral value divided by the total loan amount.

This means when the value of the collateral increases the collateralization ratio will increase as well. In the other way, the collateralization ratio would decrease if the value of the minted assets increases. The ratio is calculated using prices taken from the oracle price feeds.

## Minimum collateralization ratio

Depending on the selected loan scheme each vault has a minimum collateralization ratio. The vault must be kept above this ratio all the time to avoid liquidation.

The available minimum collateralization ratios are

- 150% min. ratio \> 5% APR
- 175% min. ratio \> 3% APR
- 200% min. ratio \> 2% APR
- 350% min. ratio \> 1.5% APR
- 500% min. ratio \> 1% APR
- 1000% min. ratio \> 0.5% APR

As an example, with the 150% scheme and DFI worth 1000$ you could mint dTesla up to a vlue of 666$. The higher the minimum collateralization ratio (the percentage) is, the lower the interest rates for loans will be. The disadvantage of the higher ratios is that you are not able to mint so many tokens as with smaller ratios. With the 1000% scheme in this example, you could only mint up to 100$ worth of dTesla.
