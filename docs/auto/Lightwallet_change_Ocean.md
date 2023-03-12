---
title: Lightwallet change Ocean
description: Wallets can interact with DeFiChain blockchain via Ocean infrastructure. List of different Ocean infrastructures that are available.
---

The Lightwallet of DeFiChain interacts with the blockchain via Ocean infrastructure. Every user action is saved in a signed transaction and send to Ocean, which then executes it. So, a running ocean infrastructure is mandatory to have access to your funds with the Lightwallet. DeFiChain is a decentralized project and has alternatives to the standard infrastructure here as well.

**Attention: Use only ocean infrastructures that you trust.**

## How to change Ocean infrastructure {#how-to-change-ocean-infrastructure}

Below are described the steps to change the ocean infrastructure (e.g. default ocean is down and therefore access to the funds in the wallet is not possible).

## Alow "Beta features" in About menu

Firstly it is necessary to allow "Beta features" by clicking on the  text "TRY BETA FEATURES"  in the _About_ menu, which can be reached through the _Settings_ menu. 

_About menu in the Settings menu of the Lightwallet_

![Provider entry in the settings menu of the Lightwallet](./../media/Lightwallet_about_menu.jpg)

## Change provider in the settings menu

_Provider entry in the settings menu of the Lightwallet_

![Provider entry in the settings menu of the Lightwallet](./../media/Lightwallet_settings_Provider.jpg)

In the provider menu it can be entered a new endpoint URL for the ocean infrastructure. The default setting is <https://ocean.defichain.com> and can also be restored with the button _Reset provider_ (will be enabled after ocean was changed). Passcode is required to save the changes.

_Provider menu to change the ocean infrastructure_

![Provider menu to change the ocean infrastructure](./../media/Lightwallet_provider_menu.jpg)

## Available Ocean infrastructures {#available-ocean-infrastructures}

1.  The default ocean infrastructure is set up and maintained by the core team. Because of the broad usage they need a lot of servers to handle the requests. There was a CFP ([CFP-2205-04](https://github.com/DeFiCh/dfips/issues/147)) to finance these servers on AWS. You can reach ocean via <https://ocean.defichain.com>
2.  A community driven ocean infrastructure was set up by mydefichain and is also financed via a CFP ([CFP-2207-18](https://github.com/DeFiCh/dfips/issues/187)). You can use it with the link <https://ocean.mydefichain.com/>
3.  Another ocean infrastructure was set up by Jan and Lukas, who also have an alternative Defiscan Explorer <https://ocean.explore-defichain.com/>
