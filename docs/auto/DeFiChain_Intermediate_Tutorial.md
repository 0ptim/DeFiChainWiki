---
title: DeFiChain Intermediate Tutorial
description: DeFiChain intermediate tutorial. What is the DEX? What makes the network secure? Introduction into staking and liquidity mining.
---

This is the second tutorial in the series. If you have not read the previous tutorial, you should read it [here](./DeFiChain_Basics_Tutorial.md) before reading this tutorial. In this tutorial, we will talk about DeFiChain's decentralized exchange (often just called the DEX). We also will go over staking and liquidity mining, which are two different ways of getting cashflow on your crypto.

## The DEX {#the-dex}

Embedded in DeFiChain is a decentralized exchange. All of the dTokens are listed on the DEX and paired with either DFI or DUSD, DeFiChain's stablecoin. The DEX works almost like a traditional exchange, but there are no orderbooks and no current way to buy or sell tokens except for what would be called a market order. All the information about the DEX can be found on the wallet being used or on [defiscan.live](https://defiscan.live), which aggregates DeFiChain's data and puts it on one website. You can find data about transactions, wallet balances, and more on defiscan.live as well.

In DeFiChain's DEX you will be able to exchange for various assets and/or provide liquidity to the exchange for great rewards. The DEX offers DFI pairs such as dBTC to DFI (read previous tutorial for reason why the asset is called dBTC instead of BTC), also written as dBTC-DFI, and DUSD pairs (DUSD is DeFiChain's stablecoin, backed with \$1.50 or more per stablecoin \[they are worth \$1 each\]). DUSD pairs are found with stock tokens such as dSPY-DUSD.

Using the DEX, users can build their own portfolio in an almost completely decentralized manner, while earning rewards.

To use it, first locate it on the wallet you are using. A DEX dashboard might look similar to this:

**DEX Pool Pairs**

| Pair<sup>1</sup> | Total Liquidity<sup>2</sup> | Volume (24H)<sup>3</sup> | Liquidity<sup>4</sup>          | Price Ratio<sup>5</sup>             | APR<sup>6</sup> (includes commission<sup>7</sup>) |
|------------------|-----------------------------|--------------------------|--------------------------------|-------------------------------------|---------------------------------------------------|
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

## Getting Cashflow with DFI {#getting-cashflow-with-dfi}

While investors can simply hold their DFI, they have opportunities to use that DFI to make a greater return on their investment. There are multiple ways investors can generate more income on their DFI:

- Staking
  - Masternodes
  - Centralized Delegation
- Liquidity Mining
  - Tokenized Cryptocurrencies
  - Tokenized Stocks
  - Tokenized ETFs on bonds and various markets and commodities

### Staking {#staking}

#### Introduction {#introduction}

Every blockchain must ensure it is secure. If not, people will be able to write transactions sending money to themselves, spending their money twice. (Side note: this is best explained as having 1 euro, and then when you spend it you then can print another one and spend it again. This does not happen in the real world since money cannot be printed and made in such a way.)

-- verify --

So, DeFiChain is secured by thousands of what we call [masternodes](./Masternode.md) from around the world. Masternodes work to make sure there are no bad actors trying to do anything malicious such as mint new DFI. Masternodes are randomly chosen to help verify the transactions, so about every 30 seconds a random masternode looks at all the transactions people want to make and confirm them, and then tell the other masternodes about this, and everything is then verified, and the transactions go through. So when a masternode completes this process it creates a block (why it is called a **block**chain.) There are nearly 10,900 masternodes right now, so it would take a lot of masternodes to gain a majority to mess up the network. In exchange for verifying the transactions, they receive a reward for every block that they make, and the fees that people pay to make the transaction. So when a user stakes, they create their own masternode or give their DFI to a centralized entity to make and maintain the masternodes for them.

-- verify --

#### Advantages {#advantages}

- Investors are helping to operate the network and make the network more decentralized
- The only price volatility risk investors incur is in the price of DFI, unlike with liquidity mining, where investors have the price volatility of multiple coins
- When making a masternode, investors are given the option to freeze the masternode (they may not withdraw) for 5 years, to gain 1.5x the rewards, or 10 years, to receive 2x the normal rewards
- DFI staking has existed since the very beginning of DFI, and is the oldest form of gaining a return on an investor's investment

#### Disadvantages {#disadvantages}

- Investors must stake (put) a minimum of 20,000 DFI, the minimum required to make a masternode. Otherwise, an investor will have to give, or delegate, their DFI to a centralized entity such as Cake
- The average APR (rewards per year) may be lower than with liquidity mining or other options
- Rewards are not guaranteed when staking, as it depends on the masternode's luck to find a block. Please read the masternodes section below to get a better understanding. The APY listed when creating your masternode may be lower or higher; the APY only shows the theoretical rewards that a staker will receive. This may not apply to centralized delegation.
- APY decreases over time as block rewards decrease and more investors create masternodes and invest their capital, although this occurs to all methods of gaining a return on DFI.
- If an investor is creating their own masternode, they can only compound their rewards when they gain another 20,000 DFI, meaning that they cannot simply compound once they get a block reward, as they are only allowed to invest 20,000 DFI at a time. This does not apply to centralized delegation.

#### Masternodes {#masternodes}

On DeFiChain, masternodes secure the network. Every masternode gets a couple attempts every second to find a new block (hashes per second). Every unfrozen masternode gets 2 attempts per second, every 5-year frozen masternode gets 3 hashes per second, and 10-year frozen masternodes get 4 hashes per second. The system automatically adjusts so that all of the masternodes together find approximately 1 block every 30 seconds.

So, if the total hash rate is 50 hashes per second, the network would adjust the difficulty of finding a block so it takes about 1,500 hashes to find a new block.

Staking is based on probability. Every hash has a small chance of being the right one, and masternodes get a couple of hashes every second. If you have an acceptable one, you get to write the next block. This means that there may be a masternode that gets lucky and their hashes are acceptable, while other masternodes are not having any luck at all getting the right hash. This is why above, it is written that rewards are not guaranteed. Your masternode may be lucky and receive lots of rewards in a period, and in the next it may receive close to nothing. The APY is just an estimate, just as flipping fifty coins does not mean you will get heads exactly 25 times. All fifty may be heads, all fifty could be tails.

##### Advantages {#advantages-1}

- All rewards you receive go straight to investors' wallets. There is no centralized entity involved and they will not need to pay fees, and in this option they actually are helping the network become decentralized
- Non-custodial, they run your masternode, which can be done on their personal laptop. They control their keys, and no one needs to have control of them

##### Disadvantages {#disadvantages-1}

- Staking becomes less profitable the less they leave your device open to write blocks. Cake leaves their servers on 24 hours a day, every day of the year, so rewards can be earned at any time
- 20,000 DFI must be staked, and it can only be compounded when there is another 20,000 DFI available to create another masternode
- Rewards cannot be guaranteed; there may be periods where little rewards are found

#### Centralized Delegation {#centralized-delegation}

Many people do not have the capital available to create their own masternode, or cannot run it for long enough to keep it more profitable than simply delegating it. This is where entities like DFX.Swiss, Cake, and KuCoin come in. People can stake any amount of DFI and earn rewards on it, while also being able to compound it. However, these entities run the masternodes, and they are in control of how much rewards a staker receive and the keys to the staker's DFI.

##### Advantages {#advantages-2}

- Users can "set it and forget it," meaning that they can stake your DFI and not have to check back on it, as rewards will continue to accrue in their account
- No minimum to stake

##### Disadvantages {#disadvantages-2}

- Users are making the network more centralized by allowing centralized entities to control your DFI
- Fees can be significant. Exchanges such as KuCoin can take more than half of the staking profits

### Liquidity Mining {#liquidity-mining}

Liquidity Mining is the process of adding liquidity to a "liquidity pool." This was explained a little in previous sections, but everyone who wants to earn rewards/provide liquidity places their holdings here, and receives tokens to represent their share of the pool, and users can swap from one token to another.

A simpler example of liquidity mining is listed below:

Alice is looking for a return on her DFI. Bob is a crypto investor. Currently, she sees a pool called dBTC-DFI. dBTC-DFI means that the two assets in this pool are dBTC and DFI. Since Alice has no DFI, and she must deposit both dBTC and DFI at the rate of the pool (investors cannot simply add to one side of the pool, it will imbalance it), she has to swap half of her DFI to dBTC at the current rate of the pool. She then adds both the DFI and the dBTC to the pool, and she has a 1% share of the pool. In return, the pool (system) gives her liquidity pool tokens that show that she is entitled to, or owns, 1% of the pool, whatever that might be.

Bob is anticipating that dBTC will perform worse than DFI, and he has dBTC after atomic swapping his bitcoin. He would like to own DFI instead. Luckily for him, he can swap in the dBTC-DFI pool and receive DFI instead. Bob will give the liquidity pool his bitcoin and take an equivalent DFI amount minus a fee, which is divided proportionally to each liquidity provider. Bob is now happy with his DFI, and Alice is as well, as she received a commission on her funds.

#### Advantages {#advantages-3}

- Help reduce slippage to users who are swapping. Slippage is the difference in tokens a swapper should get when swapping and the amount of tokens they actually receive
- APYs are higher than staking (as of 01 March 2022)
- Small price changes on one side of the pool is reduced due to the other side of the pool (risk is more diversified)

#### Disadvantages {#disadvantages-3}

- [Impermanent Loss](./Impermanent_Loss.md) (also called IL, read the article for more information)
- Severe crashes in either token's price compared to the other will lead to significant losses

*Read the next tutorial [here](./DeFiChain_Advanced_Tutorial.md).*