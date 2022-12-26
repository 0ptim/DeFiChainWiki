---
title: Guide to create a vault with the CLI and take a DUSD loan
description: Based on the informations provided in #vaults-and-loans this guide will describes all steps on howto generate a DFI only vault to mint some DUSD to profit from the negative interest rate.
---
## Preparations
 - ensure that your wallet has at least 2DFI available for the vault creation. 1DFI is burned during creation, the other one is payed back when the vault is closed.
 - unlock your wallet
 - navigate to the cli within the DefiWallet.
 - INFO: the cli is very fragile when it comes to spaces within the commands. So it is recommended to remove spaces wherever possible.

 So lets start with a new wallet in the testnet filled with 1000DFI from the [testnet faucet](https://testnet-utxo.mydefichain.com/index.php)
```
> listaddressgroupings
[
  [ 
    [
      "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
      1000.0,
      "main"
    ]
  ]
]
```
## Vault creation {#vault-generation}
To generate a new vault the command **createvault "ownerAddress" ("loanSchemeId")** is used.

For a list of all available schemes call **listloanschemes**. 

In this example we use the default loan Scheme "*MIN150*" so we just specify the account address. [transaction](https://defiscan.live/transactions/40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b?network=TestNet)
```
> createvault tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH
40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b
```
*Hint*: The transaction id is automatically the vaultId
Next get a list of all vaults within the wallet
```
> listvaults {"ownerAddress":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"} 
[
  {
    "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",
    "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",
    "loanSchemeId": "C150",
    "state": "active"
  } 
] 
```

or directly call **getvault "vaultId"** with the provided transaction id of the vault creation step

```
> getvault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b"
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

After vault generation it could be that the balances are transfered to another address within the wallet.
```
> listaddressgroupings                                                  
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

## Vault DFI deposit {#vault-deposit}
Next deposit some DFIs into the generated vault. 

Only tokens can be deposit into the vault so transfer utxo to token if needed using the command **utxotoaccount {"address":"amount@token"}**: [transaction](https://defiscan.live/transactions/a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55?network=TestNet)
```
> utxostoaccount {"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB":"500@DFI"}
a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55
> waitfornewblock
```
Than deposit the DFI in the vault with the command **deposittovault "vaultId" "fromAddress" "amount"**: [transaction](https://defiscan.live/transactions/1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687?network=TestNet)
```
> deposittovault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB 500@DFI                                
1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687
> waitfornewblock
> getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
...
  "collateralAmounts": [                                                                                                                                  
    "500.00000000@DFI"                                                                                                                                    
  ],  
...
```

## Vault DUSD loan {#vault-loan}
Now we are eligible to take a loan out of the vault. 

### Estimate loan 
For the case you like to take as much DUSD as possible out of your vault use the **estimateloan "vaultId" {"split":n} ( targetRatio )** command.

Here as an example with a split into 100% DUSD token and a collateral of at least 150% (the minimum of the choosen loan scheme).
```
> estimateloan "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" {"DUSD":1.0} 150
```
### Take DUSD loan
With the command **takeloan {"vaultId":"hex","to":"address","amounts":"str"}** the loan can be taken from the vault:  [transaction](https://defiscan.live/transactions/5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2?network=TestNet)
```
> takeloan {"vaultId":"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b","to":"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB","amounts":"100@DUSD"}    
5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2
> waitfornewblock
> getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
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

### Loop DUSD loan {#vault-looping}
If you just want to profit from the negative interest rate the taken loan DUSD tokens can be deposit back into the vault as additional collateral. [transaction](https://defiscan.live/transactions/b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9?network=TestNet)
```
> deposittovault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB 100@DUSD                               
b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9  
> waitfornewblock
> getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true 
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
As seen in the result we get already our first negative interest onto the DUSD loan, so the payback amount is not 100DUSD anymore.

## Payback Loan {#vault-payback}
Because we deposit the loan DUSD tokens into the collateral we should first payback the DUSD loan with our DUSD collateral.

To do so use the command **paybackwithcollateral "vaultId"** : [transaction](https://defiscan.live/transactions/7c333e497779e1dc63c578a8ff29591def8933219f90354a67c4ff0751779e3c?network=TestNet)
```
> paybackwithcollateral "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b"
7c333e497779e1dc63c578a8ff29591def8933219f90354a67c4ff0751779e3c
> waitfornewblock
> getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
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

Payback the remaining DUSD loan with DUSD tokens from the wallet using the command **paybackloan {"vaultId":"hex","from":"address","amounts":"str"}** 

*Hint*: Its save to define an amount which is higher than the collateral [transaction](https://defiscan.live/transactions/617a5e26b231c9fd80ce2c882abd3f22a5d755140ba2b1deb4c2883b2f9bf4d0?network=TestNet)
```
> paybackloan {"vaultId":"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b","from":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH","amounts":"31@DUSD"}
617a5e26b231c9fd80ce2c882abd3f22a5d755140ba2b1deb4c2883b2f9bf4d0
> waitfornewblock
> getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
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

## Withdraw Collateral {#vault-withdraw}

Withdraw the DFI collateral with the command **withdrawfromvault "vaultId" "toAddress" "amount"**.

In case the vault gets closed afterwards, this step can be skipped because the **closevault** command automatically send all remaining collateral to the specified address.

[transaction](https://defiscan.live/transactions/de1a5206cad6bdac8c75051594f7196a1452f6352de34f0e757b0d11eb30878b?network=TestNet)
```
> withdrawfromvault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH" "500@DFI"
de1a5206cad6bdac8c75051594f7196a1452f6352de34f0e757b0d11eb30878b
> waitfornewblock
> getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true
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

## Close the vault {#vault-close}
Optionally close the vault with the command **closevault "vaultId" "toAddress"**:[transaction](https://defiscan.live/transactions/119dbe51114add775ab3ad7f1e7dd1cc44223d5798b0e0f5e37f427149862bb4?network=TestNet)
```
> closevault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"
119dbe51114add775ab3ad7f1e7dd1cc44223d5798b0e0f5e37f427149862bb4
> waitfornewblock
> listvaults {"ownerAddress":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"}
[]
```
