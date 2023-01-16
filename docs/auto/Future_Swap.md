---
title: Future Swap
description: Future Swaps on DeFiChain. The way how the network uses futures to stabilize the dToken prices. 
---

## Future Swap

### Background

after the introduction of stock tokens, they were traded with a premium. The prices on the DEX were higher than the prices from the oracle. To fight this premium (but also a possible discount) the future swaps were introduced with DFIP-2203-A.

<https://github.com/DeFiCh/dfips/issues/127>

This swap is executed once a week (every 7\*2880 blocks). You can buy for + 5% of the oracle price or sell for -5% of the oracle price, even if the Price is higher/lower than that 5%. Buy or sell means swapping to/from DUSD.

### Scheduling

On defiscan.live you can find a countdown to the next future swap block via the link

<https://defiscan.live/blocks/countdown/NextFutureSwap>

In the desktop wallet you can check the next future swap block using the command **getfutureswapblock**

To quickly check for the current premium of the stock tokens you can use the dStocks Quickcheck page at

<https://dstocks-defichain.web.app/>

On defichain analytics you can also follow the premium over time in a chart

<https://www.defichain-analytics.com/vaultsLoans?entry=premium>

### Strategy

With this measure the price of the dTokens can be held in a +-5% corridor. In case of a higher premium or discount it can get arbitraged. For the case of a premium the following trade can be done

- Mint a dToken using a vault (take a loan)
- The collateralization ratio gets calculated using the oracle price (real price without premium)
- Sell the minted dToken on the DEX (swap to DUSD)
- Because of the premium, you get extra DUSD
- Do a future swap using the received DUSD to buy the dToken back paying the oracle price (cheaper because it's without premium)
- When the future Swap gets executed you will receive more dToken than you minted
- The loan (minted dToken) can be paid back and the additional dToken will stay in the wallet as a profit

### Future Swap in the Light Wallet

In the Light Wallet select the desired pool in the DEX tab. In the Swap menu you can switch from an instant swap to the future swap.

![Future swap in light wallet](./../media/future_swap_01.jpg)

### Future Swap in the Desktop Wallet

In the console view of the desktop wallet you can use the command **futureswap**.

Syntax:

```abap
futureswap "address" "amount" ( "destination" [{"txid":"hex","vout":n},...] )
```

For example to swap 500 DUSD to Netflix token:

```abap
futureswap "dVvPfdjhfdjhfjd32dPWZoNYno7uBUn1KyU" "500@DUSD" dNFLX)
```

Using the command **getpendingfutureswaps** you can check which future swaps have alread been set for a given address.

```abap
getpendingfutureswaps "address"
```
