---
title: API
permalink: /API/
---

## General {#general}

- <https://api.defichain.io/v1/stats>
- <https://api.defichain.io/v1/stats?q=tokens.supply&pretty>
- <https://api.defichain.io/v1/stats?network=mainnet&pretty>

## Blockchain {#blockchain}

<https://api.defichain.io/v1/getanchorlist?network=mainnet>

### Addresses {#addresses}

- <http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/balance>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/txs>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD?limit=20>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/address/stats/rich-list?pageno=1&pagesize=200>
- <https://www.blockchain.com/btc/address/1FtZwEZKknoquUb6DyQHFZ6g6oomXJYEcb>
  address held by all DeFi nodes

### Transactions {#transactions}

- <http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92/coins>

### Blocks {#blocks}

- <https://api.defichain.io/v1/getBlockActivity?network=mainnet>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/block/12345>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=true>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=false>
- <http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=500000&anchorsOnly=false>
  \<--response 200MB!

## DEX (Decentraliced Exchange) {#dex-decentraliced-exchange}

### General {#general-1}

- <https://api.defichain.io/v1/listyieldfarming>
- <https://api.defichain.io/v1/listswaps>
- <https://api.defichain.io/v1/getsubgraphswaps>
- <https://api.defichain.io/v1/getdfisupply>
- <https://api.defichain.io/v1/listpoolpairs>
- <https://api.defichain.io/v1/listtokens>
- <https://api.defichain.io/v1/getaccount?including_start=true&owner=dDgnpwmZJ2XnDXRVuqrBbbfoL5x953fP3b>
  (the option including_start=true is needed to show the DFI-tokens)
- <https://api.defichain.io/v1/gettokenrichlist?id=2&network=mainnet>
- <https://api.defichain.io/v1/getpoolpair?id=4&network=mainnet>

### Important IDs {#important-ids}

- DFI: id=0
- ETH: id=1
- BTC: id=2
- USDT: id=3
- ETH-DFI: id=4
- BTC-DFI: id=5
- USDT-DFI: id=6
- DOGE: id=7
- DOGE-DFI: id=8
- LTC: id=9
- LTC-DFI: id=10
- BCH: id=11
- BCH-DFI: id = 12
- USDC: id=13
- USDC-DFI: id=14