---
title: Vault Maxi
description: Vault Maxi - a self custody bot to automatically manage and optimize the rewards from your vault
---

This page contains all information about the vault-maxi bot. For more information and statistics you can look at  [the official website](https://www.vault-maxi.live/). It is [open source](https://github.com/kuegi/defichain_maxi) the latest release is [2.5.1](https://github.com/kuegi/defichain_maxi/releases/tag/v2.5.1)

## What it does
In general the script checks the provided vault.
* If the collateral ratio is above the threshold it takes loans and maybe collateral out of the vault (depending on the parameters) so that the collateral ratio comes into the range. The minted tokens will be put into the LM pool to produce rewards.
* It can be used on DUSD-DFI and any dToken-DUSD pool. On DUSD-DFI, you need DFI in the vault and maxi takes the loan in DUSD and DFI from the collateral.
For dToken-DUSD it depends on your settings for main-collateral-asset. If its set to DFI, both assets are taken as loans. If its set to DUSD, the dToken is taken as loan while DUSD is taken from the collateral.
* If the collateral ratio falls below the defined threshold, LM-tokens are removed from the pool and loans in the vault are paid back and collateral is redeposited to get the ratio back within the wanted range. 
* If the DFI in the address reach a defined threshold, they are reinvested according to the specified pattern.
* with the stable-coin-arbitrage activated, it also searches for arbitrage opportunities between USDT/C and DUSD. If it finds one (after fees and commission), the according asset is taken from the collateral, swapped (with guaranteed profit) and redeposited to the vault.

With this the vault produces optimized rewards on the collateral.

It only works with bech32 addresses (starting with “df1…”). You can use either a LW address with a 24 words seedphrase or the private key received by dumpprivkey from defi-cli (but only for bech32 addresses!) 
Wallets from DFX App work too. Unfortunately saiive wallets are not supported right now.

A series of videos explaining the architecture, reviewing the sourcecode etc. can be found on youtube: [DeFiChain vault-maxi explained ](https://www.youtube.com/playlist?list=PLgSw0rik-znfQa3wVO-EJ_6Of7RnWZm3_)

## How it works
The DeFiChain VaultMaxi script runs on AWS (Amazon Web Services) as a so-called Lambda function. AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda can be used for our purpose as a free service.

The instructions in this document explain how the script can be set up to run as a Lambda function, and how it can be configured to monitor a specific vault.

Once set up, the script is triggered with an interval of 15 minutes. During each execution it takes the actions that are required to keep the configured vault in optimal condition (see “What it does”).

Optionally, the script can send information about the actions it has executed to a Telegram bot. In this way, you can easily keep track of the actions that the script has executed on your vault. Instructions for setting up a Telegram bot are also provided in this document.


## Disclaimer & Riskwarning

Do not use this tool if you don't understand vaults on defichain. If you set the wrong parameter, you risk liquidating your vault and losing the whole collateral.

**This is not financial advice and anyone using this tool is doing so at their own risk. Never invest more than you are ok to lose. We are using it ourselves but can’t guarantee that it’s working flawlessly in every edge case. We are not responsible for any lost funds.**

For additional safety we recommend using https://defichain-dobby.com/ to monitor your vault.

Follow the best practices for your AWS account which include using MFA and not using your root account to monitor the lambda.

The **risks involved** contain (but are not limited to) the following list. Do NOT use the tool if you do not understand their impact:
*Vaults on defichain and their liquidation
* Impermanent Loss
* Counterparty risk in the ecosystem
* Code bugs (in VaultMaxi or defichain itself)
* Ocean API downtime / serveroutage
* Ocean API timeouts
* loss of funds due to hacks of your account
* loss of funds when you upload custom build zips from a scammer 
* AWS closing your account, effectively stopping vault-maxi from working

***Always keep in mind that the code has full access to your wallet (not only this address, but the full wallet derived from your seed phrase). NEVER upload custom zips from anyone. We will NEVER send anyone a custom build zip to upload. Anyone who offers you one is a SCAMMER and tries to steal your funds. Please report them immediately.***

## Pitfalls and other things to consider

* only one vault-maxi instance should run on an address to avoid bots interfering with each other. Means that one address can only have one managed vault. If you want to create multiple bots for multiple vaults, every vault needs a distinct address.
* don’t forget to set up and test telegram notifications. As the bot will warn you if misconfigured or configuration doesn’t provide enough safety.
* After applying an update don’t forget to check your setup again, to ensure nothing broke and vault is still managed
* do not use weak security on your AWS account, treat it like your wallet private key. Look up best practices for securing your AWS account + IAM users as good as possible
* do not just change your LM token without paying back loans of your old token. Please take a look at our FAQ: How can I switch the used dToken for LM?
* do not set up way 1 and directly afterwards go through way 2 steps. Those are two completely different approaches and will conflict with each other.
* skipping steps on telegram setup or way 2 steps. If you are skipping one step this might prevent you from running vault-maxi successfully.


## Security and best practises
* on your AWS root account, make sure to use a long password, which is nowhere written down or saved into a file. There are multiple “how to create a strong password”, or use a password manager, which can generate and save really long passwords. Using a password manager in general is a great idea. This shifts the strong password problem to unlocking the password manager itself. Your choice
* Make sure to enable MFA (multi factor authentication) or on other sites referred to as 2FA (two factor authentication). Which generates a 6 digit code that changes every 30 seconds. Means an attacker would need your password and your MFA-device (most likely your phone). How to activate MFA?

* Instead of doing everything in AWS with your root account, create a monitoring user like described in Create a monitoring user by using our CloudFormationTemplate.
* As a best practice you should avoid using your root account as much as possible. Therefore the monitoring user can be created to have an user available to change parameters, without being able to inspect your seed. Additionally you want to create more users for different usages like checking billing information. This is based on personal preferences and therefore can’t be automated.
https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

## Donations
We are developing this thing in our free time. Noone is paying us for it. If you benefit from our work, it would be a nice gesture to give something back. Here are our DFI donation addresses:

kügi: [df1qqtlz4uw9w5s4pupwgucv4shl6atqw7xlz2wn07](https://defiscan.live/address/df1qqtlz4uw9w5s4pupwgucv4shl6atqw7xlz2wn07)

krysh: [df1qw2yusvjqctn6p4esyfm5ajgsu5ek8zddvhv8jm](https://defiscan.live/address/df1qw2yusvjqctn6p4esyfm5ajgsu5ek8zddvhv8jm)
	

Since version 2.0, vault-maxi also has an auto-donation functionality. If the parameter is set to a value > 0, it automatically donates this percentage of any reinvest to us. We thank everyone for their donations to help fund our development and as a sign of appreciation of our work.

## Support
Since this is our hobby-project we do not guarantee any support whatsoever. However there is a [discord server](https://discord.gg/DBUp4cqzBb) for our community where you can ask questions. 

Issues can always be reported in the repository. 

To get notified of new releases, we recommend you to subscribe to the repository. Any update will be an official release on github.

## Reinvestpattern
With the new reinvest logic (since version 2.4.0), you can highly customize how vault-maxi (and also reinvest) uses the DFI rewards that come into your wallet.
Everything is defined via a reinvest-pattern which is a string of (comma or space) separated reinvest-targets. each target can contain 3 parts:
the target token (can be any token with a possible swap path from DFI, or any LM-token)
the percentage (0-100) from the reinvested amount that should be used for this target
a target address or vaultId (vaultId is only valid if the token is a collateralToken). you can use wallet and vault as shortcut for your own address and vault
if you leave the percentage empty (for all or some targets) the remaining percentage (after filling all defined percentage targets) is split equally over all targets without a specified percentage.
if you leave the address/vaultId empty, collateralTokens are deposited to your own vault. All other tokens stay in your address.
If the whole parameter is empty, it falls back to the pattern `mainCollateralAsset` which effectively deposits the amount as DFI or DUSD into your vault. so exactly the same behavior as before (means no action needed if you do not want to use the new functionality)

### examples
this pattern can be super simple in the usage, but is extremely powerful for those who need it. here are some examples:
* just reinvest the DFI into the vault: `DFI` (1 target: coin = DFI, no percentage = split equally over targets, no address/vault= reinvest to own vault cause collateral Token)
* split equally between DFI and DUSD and reinvest: `DFI,DUSD`
* swap 20% to USDT and keep in wallet, split remaining to DFI and BTC, send the BTC to df1address1: `USDT:20:wallet,DFI,BTC::df1address1`
* swap 10% to BTC-DFI, 15% to SPY-DUSD, 10% reinvest in other vault as DFI, 20% send as TLT-DUSD to address2, rest as DFI in own vault: `BTC-DFI:10,SPY-DUSD:15,DFI:10:vaultIdOfOther,TLT-DUSD:20:address2,DFI`

## Setup via cloudformation template

The tool is built to be used as a lambda function on AWS. You need a LW address with a vault.
There are two ways to set up everything. Both lead to the same outcome. 

Here we describe the use of a CloudFormationTemplate that we provide which sets up everything automatically (Seed parameter must still be done manually!)

A video walkthrough of the setup within AWS can be found [on youtube](https://youtu.be/NOeXa69Z4GU)

For a guide to manually setup all necessary parts, please refer to the [old guide](https://docs.google.com/document/d/1sb9VgeVHGYZpyLWQx8VsxsoeHO4JRz3fACj5_JjoVNs)

Initial setup:
* Setup a AWS account 
* Create a secure Parameter for your seed phrase
* Create Telegram bot for monitoring

setup the bot:
* Run the CloudFormationTemplate

finally:
* Test the AWS setup

### Setup an AWS account

* Create AWS account at https://aws.amazon.com/free
* (optional but strongly recommended) Activate MFA
* Make sure to create everything in one region. In this guide Frankfurt (eu-central-1) is used. Using the template is possible in eu-central-1, us-west-1 and ap-southeast-1. 

### Create a secure parameter for your seedphrase

Go to Systems Manager and open “Parameter Store” on the left side (direct link: https://eu-central-1.console.aws.amazon.com/systems-manager/parameters)

**Note that the parameter that will be created is only applicable for the selected region. If you use multiple regions, the parameter must be created for each region. The region can be selected in the top right corner.**

Create a parameter `/defichain-maxi/wallet/seed` with type `SecureString` , the value will includes the 24 words of your seed phrase.
Type SecureString means it will be encrypted and stored and only on execution of your lambda decrypted, use default KMS key source.

*To ensure security, the script will only work if the seed is stored as a SecureString*

The words need to be separated by `,` or by ` ` (a space). You can also enter the private key here as long it is a bech32 address.
#### example seed
`car, house, apple, garden, wine`
or
`car house apple garden wine`


### Create Telegram bot for monitoring
The script can notify you via telegram messages whenever something happens. The script also works without this, but it is highly recommended to activate this monitoring. You can enter 2 types of channels/chats: for notifications and for logs. Since version 2.5.0 vault-maxi has the logLevel parameter which allows you to define what type of message is sent to which channel. We recommend to have both channels activated but mute the logs.


A good introduction to telegram bots can be found here: https://core.telegram.org/bots

To create a bot you just need to talk to the BotFather: https://t.me/botfather

* `/start` BotFather will be started
* `/mybots` lists all your available bots
* `/newbot` you can create a new bot, 

please follow through the instructions and choose your own
* Bot name - is used as name, if the bot sends a message
* Bot username - is UNIQUE for everyone (means it just can be created once for all users of telegram), and won’t be shared, so you could use something personal here to avoid creation of vault_maxi_1_bot, vault_maxi_2_bot, … 
* Please do not create a lot of something_vault_maxi_bots, you can name it after yourself or whatever, nobody will ever get access to your bot. But we saw a lot of vaultMaxi_bot created.

copy the token. we will refer to your own telegram now as `<botToken>`

Once created, search for the bot in telegram and send him `/start` and any other message you like “hello vault maxi bot”

now open `https://api.telegram.org/bot<botToken>/getUpdates`  (replace `<botToken>` with the token you got from BotFather)

In the response you should see an entry in “message” … search for “chat”: and take the entry of “id” there. This is the chatId to use for the settings (will refer to that as `<chatId>`).

To test your values, replace `<botToken>` with your token and `<chatId>` with your chatId in the following link and open it in your browser. If your chat shows a message “testMessage” from your bot, then your values are correct 
`https://api.telegram.org/bot<botToken>/sendMessage?chat_id=<chatId>&text=textMessage`

#### (optional) Create a seperate group channel with your bot for logs
This is only needed if you want to also receive the logs channel. Logs are being sent on every execution, therefore it might make sense to mute this group after creation.

* create a new group in telegram and add your bot via the username with @ (if you can’t find your bot please check bot settings with BotFather like described in the FAQs.)
* open the new created group and write a message
* like described above call following http request `https://api.telegram.org/bot<botToken>/getUpdates`
* get the chatId from the group, be careful as you will see multiple chats and ids.
* group chat ids always start with a “-”

 Sidenote: If you don’t see any updates, please wait for a bit as we received some feedback that `/getUpdates` is not always working. If you keep receiving `{"ok":true,"result":[]}`, please remove and re-add your bot to that group

to test same as above call following http request
`https://api.telegram.org/bot<botToken>/sendMessage?chat_id=<chatId>&text=groupChatTest`

### Use CloudFormationTemplate to set up vault-maxi
The CloudFormationTemplate will create everything for you at once. 

Just click this link and fill in your values. This template is only available for the regions `eu-central-1`, `us-west-1` and `ap-southeast-1` right now. Just change the region after you clicked the link:
 [Link to prefilled Template](https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/quickcreate?templateUrl=https%3A%2F%2Fdefichain-maxi-public.s3.eu-central-1.amazonaws.com%2Fdefichain-cloudtemplate.json&stackName=defichain-vault-maxi&param_DeFiAddress=&param_DeFiVault=&param_LMToken=QQQ&param_MaxCollateralRatio=210&param_MinCollateralRatio=200&param_TelegramLogsChatId=&param_TelegramLogsToken=&param_TelegramNotificationChatId=&param_TelegramNotificationToken=)

You can also use the template directly by going to https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks `Create Stack > with new resources` and specify the template as an Amazon S3 URL: https://defichain-maxi-public.s3.eu-central-1.amazonaws.com/defichain-cloudtemplate.json 

*Please make sure to read and understand all the parameters of the Template. And set them all to values that make sense in your case.*

Please be advised that the auto-donation feature applies to any fund that is added to the vault via the reinvest feature. (only if the auto-donation and reinvest are both activated). This also applies to funds that you send to the address in order for the reinvest to add them to the vault. If any donation was sent in error, feel free to contact us.

**As part of the template, you can create a monitoring user in AWS. This user will have restricted access to only those parameters and AWS resources which are necessary to manage the script on the go. That includes the possibility to stop the script and change parameters (minCollateral, maxCollateral, lmToken). But NOT the seed parameter (neither show nor change). This user is also not able to access the cloudformation stack (cause this could change the deployed code) or upload new code to the bot**

**It is highly recommended to create this user and use it in daily activities instead of the root user. This way your seed is save even if this account gets hacked/phished.**

The creation will take 1-2 minutes. afterwards everything is set up and the trigger will execute the script in 15 minutes. You can do the Test Step to make sure everything is alright.

### Test AWS setup

Go to the testing section of your vault-maxi Lambda function. Either directly via https://eu-central-1.console.aws.amazon.com/lambda/home?region=eu-central-1#/functions/defichain-vault-maxi?tab=testing or
* click on `Services` in the toolbar
* click on `Lambda`
* click on `Functions` in the menu on the left
* click on function `defichain-vault-maxi`
* click on `Test` in the lower tabs

Enter the following into the JSON editor at the bottom
```json
{
  "checkSetup": true
}
```
and click on `Test`. If you want you can save this as an event for further use.


After a few seconds, you should receive a telegram message which shows all the values that you configured. Please check and make sure that all values are as expected.

## Applying an update
When created via Template, the update also works via the CloudFormationTemplate.

To update go to your cloudformation stack https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks select your stack `defichain-vault-maxi` and click on “Update”

If you only want to change some parameters, select `Use current template` and follow the process to the parameter form.

If you want to update to the newest release of the script, select `Replace current template` and `Amazon S3 URL`
fill in `https://defichain-maxi-public.s3.eu-central-1.amazonaws.com/defichain-cloudtemplate.json` for the URL.
Click on “Next” and follow through the whole process. This will update all associated values in your stack.

**This will also update the source code of your lambda in case that a new version was released.**

*Be aware that an update via template sometimes removes your environment variables. We didn’t find out when this happens. Please remember your environmentVariables before the update and make sure that you check/reset them afterwards.*

## FAQ

### How do I set the batchsize for the stable arb?
When maxi finds an arbitrage opportunity, it takes collateral from the vault to do the arb trade. This means that you need free collateral for the trade. (vault-maxi doesn’t reduce exposure just to do arbitrage)
The free collateral is the amount of collateral that can be withdrawn from the vault such that the minimum of collateralRatio and the next collateralRatio is still 1% higher than the minimum collateral ratio from the vault scheme.
If your batchsize is bigger than the free collateral, maxi reduces the batchsize (for this one execution) to the free collateral, and warns you via telegram.

#### Example with numbers: 
consider a vault with 10k collateralValue and 6.25k loanValue. The current ratio is 160%.
to maintain a 151% ratio for 6.25k loanValue, we need 9.437k collateral. So we have 563$ of free collateral. In this case, any batchsize below $560 is fine.

**As a rule of thumb**: On a 160% targetRatio, a batchsize of 5% of your collateralValue should be fine. for 200% targetRatio you can even go to 20% of your collateralValue.

When using singlemint, this gets a bit more complicated (as the collateral also changes over time). There, with 160% targetRatio, the batchsize could be up to 3.5% of the original collateral value.

### Script fails with unclear error
Make sure that all parameters are created. If you used the template to set everything up, make sure that you created the seed parameter manually (is not done via the template). Follow these steps if you haven’t done already: Create Secure Parameter for Seed

### I am not sure if the script is running or not. How can I check it?
The script should trigger every 15 minutes. If you use telegram logs, every execution will send you a message.
If you do not have telegram logs active, you can go to https://eu-central-1.console.aws.amazon.com/lambda/home?region=eu-central-1#/functions/defichain-vault-maxi?tab=monitoring (need to change the region if you use a different one). There you should see log entries for each execution of the script. within those logentries you can also see messages in case of an error.

### I can’t complete my update, because I get some strange errors

> There was an error creating this change set
> Parameter "...." must match pattern ----

The error above is just one of many possible errors. As of version 1.0-b3 we have added input validation to our template. This means that per parameter only valid input is allowed. If you misconfigured a parameter, like in that example your TelegramNotificationToken, it means it hasn’t worked before. Please check your inputs and make sure you put in the correct value.
Why did we add input validation? Because it should help you put in correct values and not that parts of the bot, or the bot itself are just not working as expected.

### Script seems to run but I don’t get telegram messages.
To test your telegram setup, replace `<botToken>` with your token and `<chatId>` with your chatId in the following link and open it in your browser. If your chat shows a message “test” from your bot, then your values are correct. Otherwise please go through the steps in the telegram setup again and make sure you got the right values. 

`https://api.telegram.org/bot<botToken>/sendMessage?chat_id=<chatId>&text=test`

The command above works, but your bot is still not sending you messages. Please recheck it again, something still seems to be misconfigured.

As of version 1.0-b3 we have added input validation for all parameters including TelegramNotificationToken = botToken and TelegramNotificationChatId = chatId. If you can’t proceed it means you had the wrong values configured.

### Telegram shows `[Maxi …] Configuration error. please check your values`
Please check your parametervalues. minCollateral must be below maxCollateral. 
also minCollateral needs to be higher than your minCollateralRatio of the loan scheme.

### I can’t add my bot to a new Telegram group
Please talk to BotFather and check if bot settings → Allow groups? → is enabled.
You will need to enable this setting in order to be able to add your bot to a new group.
After you have created your group you can disable this setting again.

### Inside AWS logs I see an error like this… what does it mean?
`ERROR	(node:9) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.`
Nothing critical. jellyfish packages which are used for DeFiChain wallet mobile applications are also used for our vault-maxi. Within one of those packages they are using an outdated (deprecated) call to initialize a Buffer. Sadly we can’t just fix it, we need to wait for jellyfish to update their packages.
Sidenote: yes we could create a pull-request and fix it for us, but everything is about available time

### Reinvest feature is not working, I have enough DFI and I am above the configured threshold
As of v1.0b2 we only check for token DFI, that means UTXOs are not yet considered. Please convert your UTXOs into DFI tokens and on next execution the script should automatically put it into your vault.
Next version will respect UTXOs too and do a conversion if needed, while keeping UTXOs in your account to still do transactions. Similar to LW mobile app does it by keeping an amount of UTXOs in your address.

With v1.0b3 UTXOs to token conversion is implemented and UTXOs are considered for reinvesting. Not all UTXOs will be converted, similar to LW mobile application. At least 1 DFI will stay as UTXOs to ensure having a big amount of fees available for executing new transactions.

### My configured dToken for LM is not found
If you should run into troubles that a specific dToken was not found, please ensure that you have written it correctly without leading d. For example if you want to use vault maxi on dTSLA, please put TSLA-DUSD in as pair.


If you still run into problems, please reach out via our discord server

### How can I change parameter settings with my monitoring user?
Your monitoring user has no access rights to the CloudFormation Stack. This is really important, because CloudFormation Stacks are very powerful and could upload new code to your Lambda.

If you are logged in with your monitoring user. You can go to Systems Manager → Parameter Store → and change those parameters directly. Be aware that those changes will never be reflected in your CloudFormation Stack, as the stack caches its value from previous execution.
How can I switch the used dToken for LM?
Do NOT just switch the token in the parameter. This way the script has no way to reduce exposure and your vault risks liquidation.

If you want to switch the token, you need to first remove the existing exposure. either by changing the min and maxCollateralRatio to extreme values (100000 - 150000) letting the script reduce the exposure for you, or do it manually (remove LP token and repay the loan).

As of version 1.0rc2 you can set max-collateral ratio to -1 and vault-maxi will remove liquidity and payback loans. Be careful due to impermanent loss (IL) vault-maxi will not be able to payback everything.


If you reduce the exposure manually: switch to the new token in the parameters before you pay back the loan. This way the script will automatically increase the exposure in the new token on the next run.

If you let the script reduce the exposure, wait for it to execute successfully, then switch the parameters back to the desired values (new dtoken and wanted range)

### What exactly is the safety level shown in the logs? (safetylevel)
This is the vault collateralization ratio vault-maxi would achieve by removing all available liquidity and paying back tokens. If this % number drops below 300 (on 150 loan scheme vaults), then you will receive a warning that vault-maxi will not be able to guard your vault in a secure way. You might see changes in the safety level, which are basically changes due to IL (impermanent loss).

### Are USDT/C-DUSD pools supported by vault-maxi?
No. Neither of USDT nor USDC can be minted and aren’t available as main collateral. Therefore vault-maxi does not support those pools. If wanted, you can use LM-reinvest to reinvest your DFI rewards into this pool. Be careful your DFI will be swapped to USDT/C and DUSD in this process.

### Can I use a different Ocean API with vault-maxi?
Yes definitely, just use the parameter for oceanUrls.

The good thing is that it automatically falls back to default Ocean API of defichain, if any error occurs.

### How can I verify which zip sha256 hash got uploaded?
There are multiple ways, the easiest would be to stop the trigger of vault-maxi (like described in How to stop further execution of this script?). Upload whatever zip you want to update to. Go to your Lambdas and check the sha256 hash which is displayed on the page (you will need to scroll down).

If you want to check an already uploaded Lambda, please just follow the same steps. Go to your Lambda, scroll down and check the SHA256 hash displayed in AWS against the version in our github repository.

If you want to check it yourself on your machine without updating / uploading it to AWS. You will need to open your console or terminal and put in the following commands.
Windows (PowerShell):
`[System.Convert]::ToBase64String(([System.Security.Cryptography.SHA256]::Create()).ComputeHash($( Get-Content -ReadCount 0 -Encoding byte vault-maxi.zip)))`
Linux/MacOS:
`cat vault-maxi.zip | openssl dgst -sha256 -binary | openssl enc -base64`

### How to stop further execution of this script?
Log into your AWS account and open “EventBridge” https://eu-central-1.console.aws.amazon.com/events/home?region=eu-central-1#/rules

Select “vaultMaxiTrigger” and click “Disable”

After confirming disabling this trigger the tool is stopped
