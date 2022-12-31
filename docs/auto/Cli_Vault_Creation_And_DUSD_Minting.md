---
title: Vault and dUSD loan with CLI
description: Based on the information provided in #vaults-and-loans, this guide will describe all steps on how to generate a DFI only vault to mint some dUSD to profit from the negative interest rate.
---

## Key learnings {#key-learnings}

- Set up a wallet on the Testnet and ensure that it has enough DFI for the vault creation process
- Use the CLI to create a new vault and deposit DFI into it
- Use the CLI to estimate and take out a dUSD loan from the vault
- Check the status of the vault and loan using the CLI
- Repay the loan and close the vault using the CLI

## Preparations {#preparations}

- Ensure that your wallet has at least 2 DFI available for the vault creation.
  - 1 DFI is burned during creation, the other one is paid back when the vault is closed.
- Unlock your wallet
- Navigate to the CLI within the Desktop Wallet.

:::caution
The CLI is very fragile when it comes to spaces within the commands. It is recommended to remove spaces wherever possible.
:::

Let's start with a new wallet on the Testnet filled with 1000 DFI from the [Testnet faucet](https://testnet-utxo.mydefichain.com/index.php).

```bash title="CLI Command"
listaddressgroupings
```

<details><summary>Expected output</summary>
<p>

```
  [
    [
      "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
      1000.0,
      "main"
    ]
  ]
]
```

</p>
</details>

## Vault creation {#vault-generation}

To generate a new vault, the command `createvault "ownerAddress" ("loanSchemeId")` is used.

For a list of all available schemes, call `listloanschemes`.

In this example we use the default loan scheme `MIN150` so we just specify the account address. [transaction](https://defiscan.live/transactions/40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b?network=TestNet)

```bash title="CLI Command"
createvault tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH
```

<details><summary>Expected output</summary>
<p>

```
40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b
```

</p>
</details>

:::tip
The transaction ID is automatically the `vaultid`.
:::

Next, get a list of all vaults within the wallet.

```bash title="CLI Command"
listvaults {"ownerAddress":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"}
```

<details><summary>Expected output</summary>
<p>

```
[
  {
    "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
    "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
    "loanSchemeId": "C150",
    "state": "active"
  }
]
```

</p>
</details>

Or directly call `getvault "{vaultId}"` with the provided transaction ID of the vault creation step

```bash title="CLI Command"
getvault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b"
```

<details><summary>Expected output</summary>
<p>

```
{
  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
  "loanSchemeId": "C150",
  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
  "state": "active",
  "collateralAmounts": [],
  "loanAmounts": [],
  "interestAmounts": [],
  "collateralValue": 0,
  "loanValue": 0,
  "interestValue": 0,
  "informativeRatio": -1,
  "collateralRatio": -1
```

</p>
</details>

After vault generation, the balances might have been transferred to another address within the wallet.

```bash title="CLI Command"
listaddressgroupings
```

<details><summary>Expected output</summary>
<p>

```
[
  [
    [
      "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
      0,
      "main"
    ],
    [
      "tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB",
      998.99999823
    ]
  ]
]
```

</p>
</details>

## Vault DFI deposit {#vault-deposit}

Next, deposit some DFI into the generated vault.

Only tokens can be deposited into the vault, so transfer UTXO to token if needed using the command `utxotoaccount {"address":"amount@token"}`. [transaction](https://defiscan.live/transactions/a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55?network=TestNet)

```bash title="CLI Command"
utxostoaccount {"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB":"500@DFI"}
```

<details><summary>Expected output</summary>
<p>

```
a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

Then deposit the DFI in the vault with the command `deposittovault "vaultId" "fromAddress" "amount"`. [transaction](https://defiscan.live/transactions/1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687?network=TestNet)

```bash title="CLI Command"
deposittovault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB 500@DFI
```

<details><summary>Expected output</summary>
<p>

```
1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash title="CLI Command"
getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
```

<details><summary>Expected output</summary>
<p>

```
...
  "collateralAmounts": [
    "500.00000000@DFI"
  ],
...
```

</p>
</details>

## Vault dUSD loan {#vault-loan}

Now we are eligible to take a loan out of the vault.

### Estimate loan

For the case you like to take as much dUSD as possible out of your vault, use the `estimateloan "vaultId" {"split":n} targetRatio` command.

Here as an example with a split into 100% dUSD token and a collateral of at least 150% (the minimum of the chosen loan scheme).

```bash title="CLI Command"
estimateloan "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" {"DUSD":1.0} 150
```

### Take dUSD loan

With the command `takeloan {"vaultId":"hex","to":"address","amounts":"str"}` the loan can be taken from the vault. [transaction](https://defiscan.live/transactions/5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2?network=TestNet)

```bash title="CLI Command"
takeloan {"vaultId":"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b","to":"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB","amounts":"100@DUSD"}
```

<details><summary>Expected output</summary>
<p>

```
5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash title="CLI Command"
getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
```

<details><summary>Expected output</summary>
<p>

```
{
  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
  "loanSchemeId": "C150",
  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
  "state": "active",
  "collateralAmounts": [
    "500.00000000@DFI"
  ],
  "loanAmounts": [
    "99.99981926@DUSD"
  ],
  "interestAmounts": [
    "-0.00018074@DUSD"
  ],
  "collateralValue": 233.919545,
  "loanValue": 99.99981926,
  "interestValue": -0.00018074,
  "informativeRatio": 233.91996778,
  "collateralRatio": 234,
  "nextCollateralRatio": 233,
  "interestPerBlockValue": "-0.000090372907153729071537",
  "interestsPerBlock": [
    "-0.000090372907153729071537@DUSD"
  ]
}
```

</p>
</details>

### Loop dUSD loan {#vault-looping}

If you just want to profit from the negative interest rate, the taken loan dUSD tokens can be deposit back into the vault as additional collateral. [transaction](https://defiscan.live/transactions/b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9?network=TestNet)

```bash title="CLI Command"
deposittovault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB 100@DUSD
```

<details><summary>Expected output</summary>
<p>

```
b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash title="CLI Command"
getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
```

<details><summary>Expected output</summary>
<p>

```
{
  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
  "loanSchemeId": "C150",
  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
  "state": "active",
  "collateralAmounts": [
    "500.00000000@DFI",
    "100.00000000@DUSD"
  ],
  "loanAmounts": [
    "99.99954814@DUSD"
  ],
  "interestAmounts": [
    "-0.00045186@DUSD"
  ],
  "collateralValue": 353.919545,
  "loanValue": 99.99954814,
  "interestValue": -0.00045186,
  "informativeRatio": 353.92114422,
  "collateralRatio": 354,
  "nextCollateralRatio": 353,
  "interestPerBlockValue": "-0.000090372907153729071537",
  "interestsPerBlock": [
    "-0.000090372907153729071537@DUSD"
  ]
}
```

</p>
</details>

As seen in the result, we get already our first negative interest onto the dUSD loan, so the payback amount is not 100DUSD anymore.

## Payback Loan {#vault-payback}

Because we deposit the loan dUSD tokens into the collateral, we should first pay back the dUSD loan with our dUSD collateral.

To do so, use the command `paybackwithcollateral "vaultId"`. [transaction](https://defiscan.live/transactions/7c333e497779e1dc63c578a8ff29591def8933219f90354a67c4ff0751779e3c?network=TestNet)

```bash title="CLI Command"
paybackwithcollateral "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b"
```

<details><summary>Expected output</summary>
<p>

```
7c333e497779e1dc63c578a8ff29591def8933219f90354a67c4ff0751779e3c
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash
getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
```

<details><summary>Expected output</summary>
<p>

```
{
  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
  "loanSchemeId": "C150",
  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
  "state": "active",
  "collateralAmounts": [
    "500.00000000@DFI"
  ],
  "loanAmounts": [
    "30.87450689@DUSD"
  ],
  "interestAmounts": [
    "-0.00002790@DUSD"
  ],
  "collateralValue": 234.14012,
  "loanValue": 30.87450689,
  "interestValue": -0.0000279,
  "informativeRatio": 758.36067871,
  "collateralRatio": 758,
  "nextCollateralRatio": 758,
  "interestPerBlockValue": "-0.000027902214659912480974",
  "interestsPerBlock": [
    "-0.000027902214659912480974@DUSD"
  ]
}
```

</p>
</details>

Pay the remaining dUSD loan back with dUSD tokens from the wallet using the command `paybackloan {"vaultId":"hex","from":"address","amounts":"str"}`

_Hint_: It's save to define an amount which is higher than the collateral [transaction](https://defiscan.live/transactions/617a5e26b231c9fd80ce2c882abd3f22a5d755140ba2b1deb4c2883b2f9bf4d0?network=TestNet)

```bash title="CLI Command"
paybackloan {"vaultId":"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b","from":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH","amounts":"31@DUSD"}
```

<details><summary>Expected output</summary>
<p>

```
617a5e26b231c9fd80ce2c882abd3f22a5d755140ba2b1deb4c2883b2f9bf4d0
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash title="CLI Command"
getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
```

<details><summary>Expected output</summary>
<p>

```
{
  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
  "loanSchemeId": "C150",
  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
  "state": "active",
  "collateralAmounts": [
    "500.00000000@DFI"
  ],
  "loanAmounts": [],
  "interestAmounts": [],
  "collateralValue": 234.14012,
  "loanValue": 0,
  "interestValue": 0,
  "informativeRatio": -1,
  "collateralRatio": -1,
  "nextCollateralRatio": -1,
  "interestPerBlockValue": "0.000000000000000000000000",
  "interestsPerBlock": []
}
```

</p>
</details>

## Withdraw Collateral {#vault-withdraw}

Withdraw the DFI collateral with the command `withdrawfromvault "vaultId" "toAddress" "amount"`.

In case the vault gets closed afterward, this step can be skipped because the `closevault` command automatically send all remaining collateral to the specified address.

[transaction](https://defiscan.live/transactions/de1a5206cad6bdac8c75051594f7196a1452f6352de34f0e757b0d11eb30878b?network=TestNet)

```bash title="CLI Command"
withdrawfromvault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH" "500@DFI"
```

<details><summary>Expected output</summary>
<p>

```
de1a5206cad6bdac8c75051594f7196a1452f6352de34f0e757b0d11eb30878b
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash title="CLI Command"
getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
```

<details><summary>Expected output</summary>
<p>

```
{
  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
  "loanSchemeId": "C150",
  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
  "state": "active",
  "collateralAmounts": [],
  "loanAmounts": [],
  "interestAmounts": [],
  "collateralValue": 0,
  "loanValue": 0,
  "interestValue": 0,
  "informativeRatio": -1,
  "collateralRatio": -1,
  "nextCollateralRatio": -1,
  "interestPerBlockValue": "0.000000000000000000000000",
  "interestsPerBlock": []
}
```

</p>
</details>

## Close the vault {#vault-close}

Optionally close the vault with the command `closevault "vaultId" "toAddress"`. [transaction](https://defiscan.live/transactions/119dbe51114add775ab3ad7f1e7dd1cc44223d5798b0e0f5e37f427149862bb4?network=TestNet)

```bash title="CLI Command"
closevault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"
```

<details><summary>Expected output</summary>
<p>

```
119dbe51114add775ab3ad7f1e7dd1cc44223d5798b0e0f5e37f427149862bb4
```

</p>
</details>

```bash title="CLI Command"
waitfornewblock
```

```bash title="CLI Command"
listvaults {"ownerAddress":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"}
```

<details><summary>Expected output</summary>
<p>

```
[]
```

</p>
</details>
