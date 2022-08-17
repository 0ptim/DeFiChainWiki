---
title: Improvement Proposals
permalink: /Improvement_Proposals/
---

DeFiChain Improvement Proposals (DFIPs)

## DFIPs already processed

### DFIP \#1: Bitcoin anchor reward source and mechanics adjustments

#### Overview

In the white paper, every 60 blocks 5 DFI is set aside to be paid out to successful Bitcoin anchoring. The paper does not mention the source of the 5 DFI. This proposal is to address the source for anchor funding and make it clear and trackable.

#### Proposal

0.1 DFI from each mined block to be accumulated in a smart contract address. This 0.1 DFI should be coming from the community part of the reward (i.e. 10% of block rewards).

If this proposal passes: block reward would look as follows:

- 180 DFI as mining reward for masternode
- 19.9 DFI goes to community fund
- 0.1 DFI goes to Bitcoin anchor reward smart contract

Upon successful anchoring, the entirety of the smart contract holding (in DFI) will be awarded to the anchorer.

Upon approval, this proposal will be implemented during the next hard fork.

#### Stage

- Request for Comment (RFC)
- Voting
- Concluded - PASSED

This proposal is currently on RFC stage for discussion. Once it gets the initial general understanding and acceptance, it will then proceed to voting stage. Voting will be conducted by masternodes. As this is likely one of the first votes of DeFiChain, voting instructions will be announced in due time.

#### Voting

Masternode snapshot will be taken at block 294,000 of DeFiChain mainnet.

Voting will open until Monday, 21 September 2020 00:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-1 yes`
- No, I do not agree. Sign: `dfip-1 no`
- Neutral. Sign: `dfip-1 neutral`.

#### Results

21 votes received.

20 masternodes voted for yes. 1 voted for no.

DFIP \#1 passes.

### DFIP \#2: DeFi incentive funding

#### Overview

DeFiChain will be launching various decentralized financial (DeFi) transactions soon. As with all financial services, centralized or decentralized alike, liquidity is key in adoption. An exchange with a bare order book would not be attracting much trading action.

Yield Farming is created for the same reason, to drive adoption and action for many DeFi activities, especially that of new protocols and services. DeFiChain requires a mechanism for us to drive adoption.

#### Increasing miner reward

With the recent move by DeFiChain Foundation to unstake all its 288 nodes, and placing them into a single publicly-verifiable address, staking reward for DeFiChain has seen a major increase in yield. Before this move, stakers receive about 25% - 28% of mining reward p.a., since the unstaking of foundation nodes, stakers now receive 50% - 60% of mining reward p.a.

#### Proposal

25% of miner reward to be set aside into a smart contract for DeFi incentive funding.

If this proposal and the previous one (#1) passes, block reward would look as follows:

- 135 DFI as mining reward for masternode
- 45 DFI goes to DeFi incentive funding smart contract
- 19.9 DFI goes to community fund
- 0.1 DFI goes to Bitcoin anchor reward smart contract

Upon approval, this proposal will be implemented during the next hard fork.

#### Stage

- Request for Comment (RFC)
- Voting
- Result - PASSED

This proposal is currently on RFC stage for discussion. Once it gets the initial general understanding and acceptance, it will then proceed to voting stage. Voting will be conducted by masternodes. As this is likely one of the first votes of DeFiChain, voting instructions will be announced in due time.

#### Voting

Masternode snapshot will be taken at block 294,000 of DeFiChain mainnet.

Voting will open until Monday, 21 September 2020 00:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-2 yes`
- No, I do not agree. Sign: `dfip-2 no`
- Neutral. Sign: `dfip-2 neutral`.

#### Results

21 votes received.

20 masternodes voted for yes. 1 voted for no.

DFIP \#1 passes.

### DFIP \#3: Maintain liquidity mining rewards at 100 DFI per block with airdrop fund and rewards ratio adjustments

#### Overview

Shortly after launching the Decentralized Exchange in November, the Liquidity Mining Rewards had been increased to 100 DFI / block in order to kick everything off and drive fast growth.

And with over \$68 Million Total Value Locked (TVL) after a mere month, very much successfully so.

These incentive rewards are currently being funded through what was decided in DFIP 2, where the community approved to set aside 25% of staking rewards for the upcoming liquidity mining.

That fund will be able to run for approximately another 3 weeks, before rewards then would settle to the regular 45 DFI / block.

#### Proposal

2 parts to this proposal:

1.  That the incentive rewards of 100 DFI per block be sustained, with the additional fund coming from the remaining airdrop fund, AND
2.  And with the recent increase of ETH’s market cap, that the ratio of rewards be changed from:
    - BTC-DFI: 85%
    - ETH-DFI: 10%
    - USDT-DFI: 5% To:
    - BTC-DFI: 80% *(reduction of 5%)*
    - ETH-DFI: 15% *(increment of 5%)*
    - USDT-DFI: 5%

Upon approval, this proposal will be implemented during one of the the upcoming hard forks.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken at block 556,100 of DeFiChain mainnet.

Voting will open until Monday, 11 January 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-3 yes`
- No, I do not agree. Sign: `dfip-3 no`
- Neutral. Sign: `dfip-3 neutral`.

#### Results

DFIP 3 passes with 15 yeses to 1 no.

ETH-DFI DeFi incentives have been adjusted to 15% (+5% from 10%), and BTC-DFI to 80% (-5% from 85%). \#5 (comment)

### DFIP \#4: Reduction of masternode collateral to 20,000 DFI

#### Overview

Currently, the collateral to run a masternode is 1,000,000 DFI.

With the steady increase of price of DFI to now \$2, it is getting very costly to set up a DFI masternode, both on the collateral and on the creation fee (100 DFI).

#### Proposal

2 parts to this proposal:

1.  Proposal collateral to be reduced to 20,000 DFI.
2.  Matsernode creation fee to be reduced to 10 DFI.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken at block 556,100 of DeFiChain mainnet.

Voting will open until Monday, 11 January 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-4 yes`
- No, I do not agree. Sign: `dfip-4 no`
- Neutral. Sign: `dfip-4 neutral`.

#### Results

DFIP 4 passes with 14 yeses to 1 no.

### DFIP \#5: Introduction & Funding of Litecoin LTC-DFI Liquidity Pool

#### Overview

Decentralized exchange (DEX) has been operating for a month now at DeFiChain and it has been stable. It is time to introduce the more liquidity pool pairs to the DEX.

#### Proposal

1.  Introduction of Litecoin LTC-DFI Liquidity Pool.
2.  Based on market cap of LTC, it is proposed for a funding of 2 DFI per block incentive as liquidity mining reward for this pool. Funding is sourced from the remainder of airdrop fund.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks, allowing LP to be funded via token deposits.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken at block 556,100 of DeFiChain mainnet.

Voting will open until Monday, 11 January 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-5 yes`
- No, I do not agree. Sign: `dfip-5 no`
- Neutral. Sign: `dfip-5 neutral`.

#### Results

DFIP 5 passes with 14 yeses to 2 nos.

### DFIP \#6: Introduction & Funding of Bitcoin Cash BCH-DFI Liquidity Pool

#### Overview

Decentralized exchange (DEX) has been operating for a month now at DeFiChain and it has been stable. It is time to introduce the more liquidity pool pairs to the DEX.

#### Proposal

1.  Introduction of Bitcoin Cash BCH-DFI Liquidity Pool.
2.  Based on market cap of BCH, it is proposed for a funding of 1 DFI per block incentive as liquidity mining reward for this pool. Funding is sourced from the remainder of airdrop fund.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks, allowing LP to be funded via token deposits.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken at block 556,100 of DeFiChain mainnet.

Voting will open until Monday, 11 January 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-6 yes`
- No, I do not agree. Sign: `dfip-6 no`
- Neutral. Sign: `dfip-6 neutral`.

#### Results

DFIP 6 passes with 13 yeses to 3 nos.

## Current Proposals

### DFIP \#7: Destruction of all of DeFiChain Foundation-owned DFI

#### Overview

Foundation-owned DFI was initially set aside for use towards adoption and development of DeFiChain. With the establishment of on-chain governance of DeFiChain and the intention of further decentralization of DeFiChain, DeFiChain Foundation should no longer play the custodian of
such coins and should therefore be destroyed.

#### Proposal

Destruction of all of foundation DFI, which is currently sitting at addres: `dJEbxbfufyPF14SC93yxiquECEfq4YSd9L` and holds 273,713,999.9999 DFI as at block 769,000.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken on the first block after Wednesday, 14 April 2021, 12:00 UTC.

Voting will open for 1 week, until first block mined after Wednesday, 21 April 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-7 yes`
- No, I do not agree. Sign: `dfip-7 no`
- Neutral. Sign: `dfip-7 neutral`.

#### Results

TBC

#### Opinions in the community

Here you have the possibility to link different opinions from the community.

### DFIP \#8: DFI emission rate beyond the first year

#### Overview

The white paper laid out the initial block reward to be 200 DFI, guaranteed for the first 1,050,000 blocks, approximately 1 year in, assuming block time is 30 seconds.

Some minor adjustments over issuance have been made over several DFIPs to incentivize anchoring and liquidity mining.

The current emission rate of DFI is 258.1 DFI per block, with some of it funded by airdrop fund.

| Description       | DFI per block |
|-------------------|---------------|
| Mining reward     | 135           |
| Community fund    | 19.9          |
| Anchor reward     | 0.1           |
| *DeFi incentives* |               |
| BTC-DFI           | 80            |
| ETH-DFI           | 15            |
| USDT-DFI          | 5             |
| LTC-DFI           | 2             |
| BCH-DFI           | 1             |
| DOGE-DFI          | 0.1           |
| TOTAL             | 258.1         |

#### Proposal

1.  Overriding that the guaranteed reward should be lowered after block 1,050,000 as laid out on whitepaper to be after May 11, 2021, 4:47:10 am UTC.
2.  Block reward after the first year to be set out as follows, maintaining all existing rewards and incentives on the first cycle:

| Description                | In use today? | DFI per block | Proportion          |
|----------------------------|---------------|---------------|---------------------|
| Masternode (mining) reward | Yes           | 135           | 33.33% (guaranteed) |
| Community fund             | Yes           | 19.9          | 4.91%               |
| Anchor reward              | Yes           | 0.1           | 0.02%               |
| DEX liquidity mining       | Yes           | 103.1         | 25.45%              |
| Atomic swap incentives     | No            | 50            | 12.34%              |
| Futures incentives         | No            | 50            | 12.34%              |
| Options incentives         | No            | 40            | 9.88%               |
| Unallocated incentives     | No            | 6.94          | 1.71%               |
| TOTAL                      |               | 405.04        | 100%                |

1.  Cycle period being 32,690 blocks (approx. 2 weeks). Every 32,690 blocks, block reward will be reduced by 1.658%. The splitting of the rewards for respective incentives will be maintained at the same proportion as laid out on the schedule above.
2.  Unused reward will be burned. Burned rewards will not be re-introduced, therefore counted towards the 1.2 billion supply cap.
3.  Rewards proposed may be adjusted with future on-chain governance changes, however, masternode (mining) rewards are guaranteed to be 33.33% of the total block reward.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks, activated after May 11, 2021 4:47:10 am UTC (1 year after first block was mined). It may not be implemented immediately on the first block after the date, depending on development, but will be implemented after the aforementioned date.

#### Implication

The implication of this proposal if it passes would see the following:

- Over 99% of the DFI will be emitted at 10 years time (11 years from block 1).
- 1.2 billion supply cap will never be breached.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken on the first block after Wednesday, 14 April 2021, 12:00 UTC.

Voting will open for 1 week, until first block mined after Wednesday, 21 April 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-8 yes`
- No, I do not agree. Sign: `dfip-8 no`
- Neutral. Sign: `dfip-8 neutral`.

#### Results

TBC

#### Opinions in the community

Here you have the possibility to link different opinions from the community.

### DFIP \#9: Management of community development via on-chain governance

#### Overview

Community development fund is currently being accumulated at the rate of 19.9 DFI every block at address `dZcHjYhKtEM88TtZLjp314H2xZjkztXtRc`.

Community fund proposals are currently being put up on DFIPs GitHub repo.

The goals of this proposal are:

1.  To allow masternodes to collectively manage and own community development fund.
2.  To create a more accessible and streamlined process of making community fund requests.

#### Proposal

1.  Destruction of all of community development UTXO DFI, which is currently sitting at addres: `dZcHjYhKtEM88TtZLjp314H2xZjkztXtRc`.
2.  The same amount of the community fund be made available as starting community fund allowance that is to be managed by on-chain governance.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks.

#### Governance summary

Voting is carried out every 70,000 blocks, roughly once every month.

Types of governance:

1.  Community fund request
    - Requesting of community fund.
    - Requires simple majority (\> 50%) by non-neutral voting masternodes to pass.
    - Fee: 10 DFI per proposal, of which half is burned.
    - The other half of the fee is distributed equally among all voting masternodes to encourage voting.
2.  Block reward reallocation proposal
    - Note the miner's reward (PoS) are guaranteed and cannot be reallocated.
    - Requires super majority (\> 66.67%) by non-neutral voting masternodes to pass.
    - Fee: 500 DFI, of which half is burned.
    - The other half of the fee is distributed equally among all voting masternodes to encourage voting.
3.  Vote of confidence
    - General directional vote, not consensus enforcible.
    - Requires super majority (\> 66.67%) by non-neutral voting masternodes to pass.
    - Fee: 50 DFI per proposal, of which half is burned
    - The other half of the fee is distributed equally among all voting masternodes to encourage voting.

#### On-chain Community fund request

The amount at `dZcHjYhKtEM88TtZLjp314H2xZjkztXtRc` will be moved to a community balance, we will call this "Community Development Fund".

This fund, will be similar to Incentive Funding and Anchor Reward, they have no private keys and are unrealized.

Voting is carried our every 70,000 blocks (at \~2335 blocks per day, that's roughly once every calendar month). This should be configurable as chainparams and requires a hardfork to update. The block where the vote is finalized is also known as "Voting Finalizing Block".

User is able to submit a fund request that is to be voted by masternodes. Each fund request costs non-refundable 10 DFI. The 10 DFI is not burned, but being added to the proposal for that will be paid out to all voting masternodes to encourage participation. Each fund request can be also specify `cycle`. Cycle is defaulted to `1` for one-off fund request, this also allows for periodic fund requests where a request is for a fixed amount to be paid out every cycle (every 70,000 blocks) for the specified cycles if the funding request remains APPROVED state.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken on the first block after Wednesday, 14 April 2021, 12:00 UTC.

Voting will open for 1 week, until first block mined after Wednesday, 21 April 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-9 yes`
- No, I do not agree. Sign: `dfip-9 no`
- Neutral. Sign: `dfip-9 neutral`.

#### Results

TBC

#### Opinions in the community

Here you have the possibility to link different opinions from the community.

### DFIP \#10: Vote of confidence: Non-fungible token (NFT) support

#### Overview

Non-fungible token (NFT) is getting quite some media attention lately.

While NFT is not quite DeFi, NFT if implemented on DeFiChain could be really interesting as it would be implemented as Native NFT, secured by underlying blockchain consensus, unlike NFTs on Turing-complete blockchain.

If implemented, NFT on DeFiChain should be implemented in accordance to ERC 721 for wide community acceptance. An optional library could be included to provide a simply interface for sites, such as OpenSea, that supports ERC 721 to easily support Native NFT on DeFiChain with the same interface.

#### Proposal

To implement and support NFT in accordance to ERC 721.

Upon approval, this proposal will be implemented during one of the the upcoming hard forks.

#### Stage

- Voting
- Results

#### Voting

Masternode snapshot will be taken on the first block after Wednesday, 14 April 2021, 12:00 UTC.

Voting will open for 1 week, until first block mined after Wednesday, 21 April 2021 12:00 UTC. Please post your votes and proofs here in this GitHub issue before the closing time.

Refer to README for voting instructions.

#### Vote options

- Yes, I agree. Sign: `dfip-10 yes`
- No, I do not agree. Sign: `dfip-10 no`
- Neutral. Sign: `dfip-10 neutral`.

#### Results

TBC

#### Opinions in the community

Here you have the possibility to link different opinions from the community.