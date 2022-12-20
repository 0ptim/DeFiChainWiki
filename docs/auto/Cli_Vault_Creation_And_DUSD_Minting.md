---
title: Guide to create a vault with the CLI and mint DUSD
description: Based on the informations provided in #vaults-and-loans this guide will describes all steps on howto generate a DFI only vault to mint some DUSD to profit from the negative interest rate.
---
## Preparations
 - ensure that your wallet has at least 1DFI??? available for the vault creation.
 - navigate to the cli within the DefiWallet.
 - INFO: the cli is very fragile when it comes to spaces within the commands. So it is recommended to remove spaces wherever possible.
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
In this example we use the default loan Scheme "*MIN150*".
For a list of all available schemes call **listloanschemes**. [transaction](https://defiscan.live/transactions/40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b?network=TestNet)
```
> createvault tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH
40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b
```
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
Only token DFI can be used so first of all transfer utxo to token if needed [transaction](https://defiscan.live/transactions/a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55?network=TestNet)
```
> utxostoaccount {"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB":"500@DFI"}
a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55
> waitfornewblock
```
Than deposit the DFI in the vault [transaction](https://defiscan.live/transactions/1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687?network=TestNet)
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
For the case you like to take as much DUSD as possible out of your vault use the **estimateloan** command.
Here as an example with 100% DUSD token and a collateral of at least 150% (the minimum of the choosen loan scheme).
```
> estimateloan "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" {"DUSD":1.0} 150
```
### Take DUSD loan
To take the loan use the **takeloan {"vaultId":"hex","to":"str","amounts":"str"}** command:  [transaction](https://defiscan.live/transactions/5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2?network=TestNet)
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

### Loop DUSD loan
For the case you just want to profit from the negative interest rate the minted DUSD can be deposit into the wallet afterwards. [transaction](https://defiscan.live/transactions/b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9?network=TestNet)
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
