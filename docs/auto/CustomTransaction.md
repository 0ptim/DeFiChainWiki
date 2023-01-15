---
title: Custom Transaction
description: Every token related action is handled by a custom transaction. DeFiChain is Bitcoin fork, but with native DeFi build on top.
---

## Introduction {#introduction}

Every token related Action on the DeFiChain is handled by Custom Transactions. The [Node Software](https://github.com/DeFiCh/ain) flags these transactions with a marker: 'DfTx'. If you want to decode these transaction, this article will help you.

## Basic construction {#basic-construction}

DefiChain is basically a fork of Bitcoin. Therefor transactions ...

- Input, Output Transaction; scriptPubKey. One Output has OP_RETURN

## Decoding OP_RETURN Hex {#decoding-op_return-hex}

step by step... PUSHDATA, DfTx Marker, function Name... etc.
