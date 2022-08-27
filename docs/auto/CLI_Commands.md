---
title: CLI Commands
permalink: /CLI_Commands/
---

## Accounts {#accounts}

1.  accounthistorycount ( "owner" {"no_rewards":bool,"token":"str","txtype":"str"} )
2.  accounttoaccount "from" {"address":"str"} ( \[{"txid":"hex","vout":n},...\] )
    1.  Explanation: AccountToAccount sends from one account to many accounts. AnyAccountsToAccount can send from many to many accounts
3.  accounttoutxos "from" {"address":"str"} ( \[{"txid":"hex","vout":n},...\] )
4.  getaccount "owner" ( {"start":"str","including_start":bool,"limit":n} indexed_amounts )
5.  getburninfo
6.  gettokenbalances ( {"start":"str","including_start":bool,"limit":n} indexed_amounts symbol_lookup )
7.  listaccounthistory ( "owner" {"maxBlockHeight":n,"depth":n,"no_rewards":bool,"token":"str","txtype":"str","limit":n} )
8.  listaccounts ( {"start":"str","including_start":bool,"limit":n} verbose indexed_amounts is_mine_only )
9.  listburnhistory ( {"maxBlockHeight":n,"depth":n,"token":"str","txtype":"str","limit":n} )
10. listcommunitybalances
11. sendtokenstoaddress {"address":"str"} {"address":"str"} ( "selectionMode" )
12. sendutxosfrom "from" "to" amount ( "change" )
13. utxostoaccount {"address":"str"} ( \[{"txid":"hex","vout":n},...\] )

## Blockchain {#blockchain}

1.  clearmempool
2.  getbestblockhash
3.  getblock "blockhash" ( verbosity )
4.  getblockchaininfo
5.  getblockcount
6.  getblockfilter "blockhash" ( "filtertype" )
7.  getblockhash height
8.  getblockheader "blockhash" ( verbose )
9.  getblockstats hash_or_height ( stats )
10. getchaintips
11. getchaintxstats ( nblocks "blockhash" )
12. getdifficulty
13. getgov "name"
14. getmempoolancestors "txid" ( verbose )
15. getmempooldescendants "txid" ( verbose )
16. getmempoolentry "txid"
17. getmempoolinfo
18. getrawmempool ( verbose )
19. gettxout "txid" n ( include_mempool )
20. gettxoutproof \["txid",...\] ( "blockhash" )
21. gettxoutsetinfo
22. isappliedcustomtx ( "txid" blockHeight )
23. listgovs
24. preciousblock "blockhash"
25. pruneblockchain height
26. savemempool
27. scantxoutset "action" \[scanobjects,...\]
28. setgov {"name":"str"} ( \[{"txid":"hex","vout":n},...\] )
29. setgovheight {"name":"str"} height ( \[{"txid":"hex","vout":n},...\] )
30. verifychain ( checklevel nblocks )
31. verifytxoutproof "proof"

## Control {#control}

1.  getmemoryinfo ( "mode" )
2.  getrpcinfo
3.  help ( "command" )
4.  logging ( \["include_category",...\] \["exclude_category",...\] )
5.  stop
6.  uptime

## Generating {#generating}

1.  generatetoaddress nblocks "address" ( maxtries )

## Icxorderbook {#icxorderbook}

1.  icx_claimdfchtlc ( {"dfchtlcTx":"str","seed":"str"} \[{"txid":"hex","vout":n},...\] )
2.  icx_closeoffer "offerTx" ( \[{"txid":"hex","vout":n},...\] )
3.  icx_closeorder "orderTx" ( \[{"txid":"hex","vout":n},...\] )
4.  icx_createorder {"tokenFrom\|chainFrom":"str","chainTo\|tokenTo":"str","ownerAddress":"str","receivePubkey":"str","amountFrom":n,"orderPrice":n,"expiry":n} ( \[{"txid":"hex","vout":n},...\] )
5.  icx_getorder "orderTx"
6.  icx_listhtlcs {"offerTx":"str","limit":n,"closed":bool}
7.  icx_listorders ( {"token":n,"chain":n,"orderTx":"str","limit":n,"closed":bool} )
8.  icx_makeoffer ( {"orderTx":"str","amount":n,"ownerAddress":"str","receivePubkey":"str","expiry":n} \[{"txid":"hex","vout":n},...\] )
9.  icx_submitdfchtlc ( {"offerTx":"str","amount":n,"hash":"str","timeout":n} \[{"txid":"hex","vout":n},...\] )
10. icx_submitexthtlc ( {"offerTx":"str","amount":n,"htlcScriptAddress":"str","hash":"str","ownerPubkey":"str","timeout":n} \[{"txid":"hex","vout":n},...\] )

## Loan {#loan}

1.  createloanscheme mincolratio interestrate "id" ( \[{"txid":"hex","vout":n},...\] )
2.  destroyloanscheme "id" ( ACTIVATE_AFTER_BLOCK \[{"txid":"hex","vout":n},...\] )
3.  getcollateraltoken "token"
4.  getinterest "id" ( "token" )
5.  getloaninfo
6.  getloanscheme "id"
7.  getloantoken "token"
8.  listcollateraltokens ( {"height":n,"all":bool} )
9.  listloanschemes
10. listloantokens
11. paybackloan {"vaultId":"hex","from":"str","amounts":"str"} ( \[{"txid":"hex","vout":n},...\] )
12. setcollateraltoken {"token":"str","factor":n,"fixedIntervalPriceId":"hex","activateAfterBlock":n} ( \[{"txid":"hex","vout":n},...\] )
13. setdefaultloanscheme "id" ( \[{"txid":"hex","vout":n},...\] )
14. setloantoken {"symbol":"str","name":"str","fixedIntervalPriceId":"hex","mintable":bool,"interest":n} ( \[{"txid":"hex","vout":n},...\] )
15. takeloan {"vaultId":"hex","to":"str","amounts":"str"} ( \[{"txid":"hex","vout":n},...\] )
16. updateloanscheme mincolratio interestrate "id" ( ACTIVATE_AFTER_BLOCK \[{"txid":"hex","vout":n},...\] )
17. updateloantoken "token" ( {"symbol":"str","name":"str","fixedIntervalPriceId":"hex","mintable":bool,"interest":n} \[{"txid":"hex","vout":n},...\] )

## Masternodes {#masternodes}

1.  createmasternode "ownerAddress" ( "operatorAddress" \[{"txid":"hex","vout":n},...\] )
2.  getanchorteams ( blockHeight )
3.  getmasternode "mn_id"
4.  getmasternodeblocks ( {"id":"hex","ownerAddress":"str","operatorAddress":"str"} depth )
5.  listanchors
6.  listcriminalproofs ( {"start":"hex","including_start":bool,"limit":n} )
7.  listmasternodes ( {"start":"hex","including_start":bool,"limit":n} verbose )
8.  resignmasternode "mn_id" ( \[{"txid":"hex","vout":n},...\] )

## Mining {#mining}

1.  getblocktemplate ( "template_request" )
2.  getmininginfo
3.  getmintinginfo
4.  getnetworkhashps ( nblocks height )
5.  prioritisetransaction "txid" ( dummy ) fee_delta
6.  submitblock "hexdata" ( "dummy" )
7.  submitheader "hexdata"

## Network {#network}

1.  [addnode](./App_Sync_Boost.md) "node" "command"
2.  clearbanned
3.  disconnectnode ( "address" nodeid )
4.  getaddednodeinfo ( "node" )
5.  getconnectioncount
6.  getnettotals
7.  getnetworkinfo
8.  getnodeaddresses ( count )
9.  getpeerinfo
10. listbanned
11. ping
12. setban "subnet" "command" ( bantime absolute )
13. setnetworkactive state

## Oracles {#oracles}

1.  appointoracle "address" \[{"currency":"str","token":"str"},...\] weightage ( \[{"txid":"hex","vout":n},...\] )
2.  getfixedintervalprice "fixedIntervalPriceId"
3.  getoracledata "oracleid"
4.  getprice {"currency":"str","token":"str"}
5.  listfixedintervalprices ( {"start":n,"limit":n} )
6.  listlatestrawprices ( {"currency":"str","token":"str"} {"start":"hex","including_start":bool,"limit":n} )
7.  listoracles ( {"start":"hex","including_start":bool,"limit":n} )
8.  listprices ( {"start":n,"including_start":bool,"limit":n} )
9.  removeoracle "oracleid" ( \[{"txid":"hex","vout":n},...\] )
10. setoracledata "oracleid" timestamp \[{"currency":"str","tokenAmount":"str"},...\] ( \[{"txid":"hex","vout":n},...\] )
11. updateoracle "oracleid" "address" \[{"currency":"str","token":"str"},...\] weightage ( \[{"txid":"hex","vout":n},...\] )

## Poolpair {#poolpair}

1.  addpoolliquidity {"address":"str"} "shareAddress" ( \[{"txid":"hex","vout":n},...\] )
2.  compositeswap {"from":"str","tokenFrom":"str","amountFrom":n,"to":"str","tokenTo":"str","maxPrice":n} ( \[{"txid":"hex","vout":n},...\] )
3.  createpoolpair ( {"tokenA":"str","tokenB":"str","commission":n,"status":bool,"ownerAddress":"str","customRewards":"str","pairSymbol":"str"} \[{"txid":"hex","vout":n},...\] )
4.  getpoolpair "key" ( verbose )
5.  listpoolpairs ( {"start":n,"including_start":bool,"limit":n} verbose )
6.  listpoolshares ( {"start":n,"including_start":bool,"limit":n} verbose is_mine_only )
7.  poolswap {"from":"str","tokenFrom":"str","amountFrom":n,"to":"str","tokenTo":"str","maxPrice":n} ( \[{"txid":"hex","vout":n},...\] )
8.  removepoolliquidity "from" "amount" ( \[{"txid":"hex","vout":n},...\] )
9.  testpoolswap ( {"from":"str","tokenFrom":"str","amountFrom":n,"to":"str","tokenTo":"str","maxPrice":n} )
10. updatepoolpair ( {"pool":"str","status":bool,"commission":n,"ownerAddress":"str","customRewards":"str"} \[{"txid":"hex","vout":n},...\] )

## Rawtransactions {#rawtransactions}

1.  analyzepsbt "psbt"
2.  combinepsbt \["psbt",...\]
3.  combinerawtransaction \["hexstring",...\]
4.  converttopsbt "hexstring" ( permitsigdata iswitness )
5.  createpsbt \[{"txid":"hex","vout":n,"sequence":n},...\] \[{"address":amount},{"data":"hex"},...\] ( locktime replaceable)
6.  createrawtransaction \[{"txid":"hex","vout":n,"sequence":n},...\] \[{"address":amount},{"data":"hex"},...\] ( locktime replaceable )
7.  decodepsbt "psbt"
8.  decoderawtransaction "hexstring" ( iswitness )
9.  decodescript "hexstring"
10. finalizepsbt "psbt" ( extract )
11. fundrawtransaction "hexstring" ( options iswitness )
12. getrawtransaction "txid" ( verbose "blockhash" )
13. joinpsbts \["psbt",...\]
14. sendrawtransaction "hexstring" ( maxfeerate )
15. signrawtransactionwithkey "hexstring" \["privatekey",...\] ( \[{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex", amount":amount},...\] "sighashtype" )
16. testmempoolaccept \["rawtx",...\] ( maxfeerate )
17. utxoupdatepsbt "psbt" ( \["",{"desc":"str","range":n or \[n,n\]},...\] )

## Spv {#spv}

1.  spv_claimhtlc "scriptaddress" "destinationaddress" "seed" ( feerate )
2.  spv_createanchor ( \[{"txid":"hex","vout":n,"amount":n,"privkey":"str"},...\] ) "rewardAddress" ( send feerate )
3.  spv_createanchortemplate "rewardAddress"
4.  spv_createhtlc "receiverPubkey" "ownerPubkey" "timeout" ( "seed" )
5.  spv_decodehtlcscript "redeemscript"
6.  spv_dumpprivkey "address"
7.  spv_estimateanchorcost ( feerate )
8.  spv_getaddresspubkey "address"
9.  spv_getalladdresses
10. spv_getbalance
11. spv_getfeerate
12. spv_gethtlcseed "address"
13. spv_getnewaddress
14. spv_getpeers
15. spv_getrawtransaction "txid"
16. spv_gettxconfirmations "txhash"
17. spv_listanchorauths
18. spv_listanchorrewardconfirms
19. spv_listanchorrewards
20. spv_listanchors ( minBtcHeight maxBtcHeight minConfs maxConfs )
21. spv_listanchorspending
22. spv_listanchorsunrewarded
23. spv_listhtlcoutputs ( "address" )
24. spv_listreceivedbyaddress ( minconf "address_filter" )
25. spv_listtransactions
26. spv_refundhtlc "scriptaddress" "destinationaddress" ( feerate )
27. spv_refundhtlcall "destinationaddress" ( feerate )
28. spv_rescan ( height )
29. spv_sendrawtx "rawtx"
30. spv_sendtoaddress "address" amount ( feerate )
31. spv_syncstatus
32. spv_validateaddress "address"

## Tokens {#tokens}

1.  createtoken ( {"symbol":"str","name":"str","isDAT":bool,"decimal":n,"limit":n,"mintable":bool,"tradeable":bool,"collateralAddress":"str"} \[{"txid":"hex","vout":n},...\] )
2.  decodecustomtx "hexstring" ( iswitness )
3.  getcustomtx "txid" ( "blockhash" )
4.  gettoken "key"
5.  listtokens ( {"start":n,"including_start":bool,"limit":n} verbose )
6.  minttokens "amounts" ( \[{"txid":"hex","vout":n},...\] )
7.  updatetoken "token" ( {"symbol":"str","name":"str","isDAT":bool,"mintable":bool,"tradeable":bool,"finalize":bool} \[{"txid":"hex","vout":n},...\] )

## Util {#util}

1.  createmultisig nrequired \["key",...\] ( "address_type" )
2.  deriveaddresses "descriptor" ( range )
3.  estimatesmartfee conf_target ( "estimate_mode" )
4.  getdescriptorinfo "descriptor"
5.  signmessagewithprivkey "privkey" "message"
6.  validateaddress "address"
7.  verifymessage "address" "signature" "message"

## Vault {#vault}

1.  closevault "vaultId" "to" ( \[{"txid":"hex","vout":n},...\] )
2.  createvault "ownerAddress" ( "loanSchemeId" \[{"txid":"hex","vout":n},...\] )
3.  deposittovault "vaultId" "from" "amount" ( \[{"txid":"hex","vout":n},...\] )
4.  getvault "vaultId"
5.  listauctionhistory ( "owner" {"maxBlockHeight":n,"vaultId":"hex","index":n,"limit":n} )
6.  listauctions ( {"start":obj,"including_start":bool,"limit":n} )
7.  listvaults ( {"ownerAddress":"str","loanSchemeId":"str","state":"str","verbose":bool} {"start":"hex","including_start":bool,"limit":n} )
8.  placeauctionbid "vaultId" index "from" "amount" ( \[{"txid":"hex","vout":n},...\] )
9.  updatevault "vaultId" {"ownerAddress":"hex","loanSchemeId":"str"} ( \[{"txid":"hex","vout":n},...\] )
10. withdrawfromvault "vaultId" "to" "amount" ( \[{"txid":"hex","vout":n},...\] )

## Wallet {#wallet}

1.  abandontransaction "txid"
2.  abortrescan
3.  addmultisigaddress nrequired \["key",...\] ( "label" "address_type" )
4.  backupwallet "destination"
5.  bumpfee "txid" ( options )
6.  createwallet "wallet_name" ( disable_private_keys blank "passphrase" avoid_reuse )
7.  dumpprivkey "address"
8.  dumpwallet "filename"
9.  encryptwallet "passphrase"
10. getaddressesbylabel "label"
11. getaddressinfo "address"
12. getbalance ( "dummy" minconf include_watchonly avoid_reuse with_tokens )
13. getbalances ( with_tokens )
14. getnewaddress ( "label" "address_type" )
15. getrawchangeaddress ( "address_type" )
16. getreceivedbyaddress "address" ( minconf )
17. getreceivedbylabel "label" ( minconf )
18. gettransaction "txid" ( include_watchonly )
19. getunconfirmedbalance ( with_tokens )
20. getwalletinfo ( with_tokens )
21. importaddress "address" ( "label" rescan p2sh )
22. importmulti "requests" ( "options" )
23. importprivkey "privkey" ( "label" rescan )
24. importprunedfunds "rawtransaction" "txoutproof"
25. importpubkey "pubkey" ( "label" rescan )
26. importwallet "filename"
27. keypoolrefill ( newsize )
28. listaddressgroupings
29. listlabels ( "purpose" )
30. listlockunspent
31. listreceivedbyaddress ( minconf include_empty include_watchonly "address_filter" )
32. listreceivedbylabel ( minconf include_empty include_watchonly )
33. listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )
34. listtransactions ( "label" count skip include_watchonly exclude_custom_tx )
35. listunspent ( minconf maxconf \["address",...\] include_unsafe query_options )
36. listwalletdir
37. listwallets
38. loadwallet "filename"
39. lockunspent unlock ( \[{"txid":"hex","vout":n},...\] )
40. removeprunedfunds "txid"
41. rescanblockchain ( start_height stop_height )
42. sendmany "" {"address":amount} ( minconf "comment" \["address",...\] replaceable conf_target "estimate_mode" )
43. sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount replaceable conf_target "estimate_mode"avoid_reuse )
44. sethdseed ( newkeypool "seed" )
45. setlabel "address" "label"
46. settxfee amount
47. setwalletflag "flag" ( value )
48. signmessage "address" "message"
49. signrawtransactionwithwallet "hexstring" ( \[{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex","amount":amount},...\] "sighashtype" )
50. unloadwallet ( "wallet_name" )
51. walletcreatefundedpsbt \[{"txid":"hex","vout":n,"sequence":n},...\] \[{"address":amount},{"data":"hex"},...\] ( locktime options bip32derivs )
52. walletlock
53. walletpassphrase "passphrase" timeout
54. walletpassphrasechange "oldpassphrase" "newpassphrase"
55. walletprocesspsbt "psbt" ( sign "sighashtype" bip32derivs )

## Zmq {#zmq}

1.  getzmqnotifications