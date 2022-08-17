---
title: CustomTransaction
permalink: /CustomTransaction/
---

## Introduction

Every token related Action on the DeFiChain is handled by Custom Transactions. The [Node Software](https://github.com/DeFiCh/ain) flags these transactions with a marker: DfTx If you want to decode these transaction, this article will help you.

## Basic construction

DefiChain is basically a fork of Bitcoin. Therefor transactions ...

- Input, Output Transaction; scriptPubKey. One Output has OP_RETURN

## Decoding OP_RETURN Hex

step by step... PUSHDATA, DfTx Marker, function Name... etc.
