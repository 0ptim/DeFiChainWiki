"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=l,b=c["".concat(i,".").concat(p)]||c[p]||m[p]||r;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"Vault and loan with CLI",description:"Step-by-Step Guide for Creating, Managing, and Closing Vaults with the DeFiChain Desktop Wallet CLI."},o=void 0,s={unversionedId:"auto/CLI_Vault_and_Loan",id:"auto/CLI_Vault_and_Loan",title:"Vault and loan with CLI",description:"Step-by-Step Guide for Creating, Managing, and Closing Vaults with the DeFiChain Desktop Wallet CLI.",source:"@site/docs/auto/CLI_Vault_and_Loan.md",sourceDirName:"auto",slug:"/auto/CLI_Vault_and_Loan",permalink:"/docs/auto/CLI_Vault_and_Loan",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/CLI_Vault_and_Loan.md",tags:[],version:"current",lastUpdatedAt:1672505655,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{title:"Vault and loan with CLI",description:"Step-by-Step Guide for Creating, Managing, and Closing Vaults with the DeFiChain Desktop Wallet CLI."},sidebar:"tutorialSidebar",previous:{title:"CLI Commands",permalink:"/docs/auto/CLI_Commands"},next:{title:"Bitcoin Anchoring",permalink:"/docs/auto/Bitcoin_Anchoring"}},i={},d=[{value:"Key learnings",id:"key-learnings",level:2},{value:"Preparations",id:"preparations",level:2},{value:"Vault creation",id:"vault-generation",level:2},{value:"Vault DFI deposit",id:"vault-deposit",level:2},{value:"Vault dUSD loan",id:"vault-loan",level:2},{value:"Estimate loan",id:"estimate-loan",level:3},{value:"Take dUSD loan",id:"take-dusd-loan",level:3},{value:"Loop dUSD loan",id:"vault-looping",level:3},{value:"Payback Loan",id:"vault-payback",level:2},{value:"Withdraw Collateral",id:"vault-withdraw",level:2},{value:"Close the vault",id:"vault-close",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Based on the information provided in ",(0,l.kt)("a",{parentName:"p",href:"/docs/auto/Vaults_Loans"},"Vaults and Loans"),", this guide will describe all steps on how to generate a DFI only vault to mint some dUSD to profit from the negative interest rate."),(0,l.kt)("h2",{id:"key-learnings"},"Key learnings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set up a wallet on the Testnet and ensure that it has enough DFI for the vault creation process"),(0,l.kt)("li",{parentName:"ul"},"Use the CLI to create a new vault and deposit DFI into it"),(0,l.kt)("li",{parentName:"ul"},"Use the CLI to estimate and take out a dUSD loan from the vault"),(0,l.kt)("li",{parentName:"ul"},"Check the status of the vault and loan using the CLI"),(0,l.kt)("li",{parentName:"ul"},"Repay the loan and close the vault using the CLI")),(0,l.kt)("h2",{id:"preparations"},"Preparations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ensure that your wallet has at least ",(0,l.kt)("strong",{parentName:"li"},"2 DFI available")," for the vault creation.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1 DFI is burned during creation, the other one is paid back when the vault is closed."))),(0,l.kt)("li",{parentName:"ul"},"Unlock your wallet"),(0,l.kt)("li",{parentName:"ul"},"Navigate to the CLI within the Desktop Wallet.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The CLI is very fragile when it comes to spaces within the commands. It is recommended to remove spaces wherever possible.")),(0,l.kt)("p",null,"Let's start with a new wallet on the Testnet filled with 1000 DFI from the ",(0,l.kt)("a",{parentName:"p",href:"https://testnet-utxo.mydefichain.com/index.php"},"Testnet faucet"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"listaddressgroupings\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  [\n    [\n      "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n      1000.0,\n      "main"\n    ]\n  ]\n]\n')))),(0,l.kt)("h2",{id:"vault-generation"},"Vault creation"),(0,l.kt)("p",null,"To generate a new vault, the command ",(0,l.kt)("inlineCode",{parentName:"p"},'createvault "ownerAddress" ("loanSchemeId")')," is used."),(0,l.kt)("p",null,"For a list of all available schemes, call ",(0,l.kt)("inlineCode",{parentName:"p"},"listloanschemes"),"."),(0,l.kt)("p",null,"In this example we use the default loan scheme ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN150")," so we just specify the account address. ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"createvault tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b\n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The transaction ID is automatically the ",(0,l.kt)("inlineCode",{parentName:"p"},"vaultid"),".")),(0,l.kt)("p",null,"Next, get a list of all vaults within the wallet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'listvaults {"ownerAddress":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n  {\n    "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n    "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n    "loanSchemeId": "C150",\n    "state": "active"\n  }\n]\n')))),(0,l.kt)("p",null,"Or directly call ",(0,l.kt)("inlineCode",{parentName:"p"},'getvault "{vaultId}"')," with the provided transaction ID of the vault creation step"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'getvault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n  "loanSchemeId": "C150",\n  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n  "state": "active",\n  "collateralAmounts": [],\n  "loanAmounts": [],\n  "interestAmounts": [],\n  "collateralValue": 0,\n  "loanValue": 0,\n  "interestValue": 0,\n  "informativeRatio": -1,\n  "collateralRatio": -1\n')))),(0,l.kt)("p",null,"After vault generation, the balances might have been transferred to another address within the wallet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"listaddressgroupings\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n  [\n    [\n      "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n      0,\n      "main"\n    ],\n    [\n      "tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB",\n      998.99999823\n    ]\n  ]\n]\n')))),(0,l.kt)("h2",{id:"vault-deposit"},"Vault DFI deposit"),(0,l.kt)("p",null,"Next, deposit some DFI into the generated vault."),(0,l.kt)("p",null,"Only tokens can be deposited into the vault, so transfer UTXO to token if needed using the command ",(0,l.kt)("inlineCode",{parentName:"p"},'utxotoaccount {"address":"amount@token"}'),". ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'utxostoaccount {"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB":"500@DFI"}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a80da68afc050a0671dd712dd64c044b9416650081f586c6ac13710c1e7ddc55\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("p",null,"Then deposit the DFI in the vault with the command ",(0,l.kt)("inlineCode",{parentName:"p"},'deposittovault "vaultId" "fromAddress" "amount"'),". ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"deposittovault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB 500@DFI\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1d025f1db8eccb9b69b0afc0f98ab576d3c7f43728bf889e048bac08db464687\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'...\n  "collateralAmounts": [\n    "500.00000000@DFI"\n  ],\n...\n')))),(0,l.kt)("h2",{id:"vault-loan"},"Vault dUSD loan"),(0,l.kt)("p",null,"Now we are eligible to take a loan out of the vault."),(0,l.kt)("h3",{id:"estimate-loan"},"Estimate loan"),(0,l.kt)("p",null,"For the case you like to take as much dUSD as possible out of your vault, use the ",(0,l.kt)("inlineCode",{parentName:"p"},'estimateloan "vaultId" {"split":n} targetRatio')," command."),(0,l.kt)("p",null,"Here as an example with a split into 100% dUSD token and a collateral of at least 150% (the minimum of the chosen loan scheme)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'estimateloan "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" {"DUSD":1.0} 150\n')),(0,l.kt)("h3",{id:"take-dusd-loan"},"Take dUSD loan"),(0,l.kt)("p",null,"With the command ",(0,l.kt)("inlineCode",{parentName:"p"},'takeloan {"vaultId":"hex","to":"address","amounts":"str"}')," the loan can be taken from the vault. ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'takeloan {"vaultId":"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b","to":"tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB","amounts":"100@DUSD"}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"5d30554b48cff80bd7937b87ae4ae2606a5c7e20902ccead6909a29ec9567fa2\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n  "loanSchemeId": "C150",\n  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n  "state": "active",\n  "collateralAmounts": [\n    "500.00000000@DFI"\n  ],\n  "loanAmounts": [\n    "99.99981926@DUSD"\n  ],\n  "interestAmounts": [\n    "-0.00018074@DUSD"\n  ],\n  "collateralValue": 233.919545,\n  "loanValue": 99.99981926,\n  "interestValue": -0.00018074,\n  "informativeRatio": 233.91996778,\n  "collateralRatio": 234,\n  "nextCollateralRatio": 233,\n  "interestPerBlockValue": "-0.000090372907153729071537",\n  "interestsPerBlock": [\n    "-0.000090372907153729071537@DUSD"\n  ]\n}\n')))),(0,l.kt)("h3",{id:"vault-looping"},"Loop dUSD loan"),(0,l.kt)("p",null,"If you just want to profit from the negative interest rate, the taken loan dUSD tokens can be deposit back into the vault as additional collateral. ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"deposittovault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b tgPJbMNsGzXVBsn57KZGGCZXsF4K88xRGB 100@DUSD\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"b6dbb4bba4ec83eda09daf531d1968d4194ca39ba7273f471dd7a14303a991b9\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n  "loanSchemeId": "C150",\n  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n  "state": "active",\n  "collateralAmounts": [\n    "500.00000000@DFI",\n    "100.00000000@DUSD"\n  ],\n  "loanAmounts": [\n    "99.99954814@DUSD"\n  ],\n  "interestAmounts": [\n    "-0.00045186@DUSD"\n  ],\n  "collateralValue": 353.919545,\n  "loanValue": 99.99954814,\n  "interestValue": -0.00045186,\n  "informativeRatio": 353.92114422,\n  "collateralRatio": 354,\n  "nextCollateralRatio": 353,\n  "interestPerBlockValue": "-0.000090372907153729071537",\n  "interestsPerBlock": [\n    "-0.000090372907153729071537@DUSD"\n  ]\n}\n')))),(0,l.kt)("p",null,"As seen in the result, we get already our first negative interest onto the dUSD loan, so the payback amount is not 100DUSD anymore."),(0,l.kt)("h2",{id:"vault-payback"},"Payback Loan"),(0,l.kt)("p",null,"Because we deposit the loan dUSD tokens into the collateral, we should first pay back the dUSD loan with our dUSD collateral."),(0,l.kt)("p",null,"To do so, use the command ",(0,l.kt)("inlineCode",{parentName:"p"},'paybackwithcollateral "vaultId"'),". ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/7c333e497779e1dc63c578a8ff29591def8933219f90354a67c4ff0751779e3c?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'paybackwithcollateral "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"7c333e497779e1dc63c578a8ff29591def8933219f90354a67c4ff0751779e3c\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n  "loanSchemeId": "C150",\n  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n  "state": "active",\n  "collateralAmounts": [\n    "500.00000000@DFI"\n  ],\n  "loanAmounts": [\n    "30.87450689@DUSD"\n  ],\n  "interestAmounts": [\n    "-0.00002790@DUSD"\n  ],\n  "collateralValue": 234.14012,\n  "loanValue": 30.87450689,\n  "interestValue": -0.0000279,\n  "informativeRatio": 758.36067871,\n  "collateralRatio": 758,\n  "nextCollateralRatio": 758,\n  "interestPerBlockValue": "-0.000027902214659912480974",\n  "interestsPerBlock": [\n    "-0.000027902214659912480974@DUSD"\n  ]\n}\n')))),(0,l.kt)("p",null,"Pay the remaining dUSD loan back with dUSD tokens from the wallet using the command ",(0,l.kt)("inlineCode",{parentName:"p"},'paybackloan {"vaultId":"hex","from":"address","amounts":"str"}')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Hint"),": It's save to define an amount which is higher than the collateral ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/617a5e26b231c9fd80ce2c882abd3f22a5d755140ba2b1deb4c2883b2f9bf4d0?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'paybackloan {"vaultId":"40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b","from":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH","amounts":"31@DUSD"}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"617a5e26b231c9fd80ce2c882abd3f22a5d755140ba2b1deb4c2883b2f9bf4d0\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n  "loanSchemeId": "C150",\n  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n  "state": "active",\n  "collateralAmounts": [\n    "500.00000000@DFI"\n  ],\n  "loanAmounts": [],\n  "interestAmounts": [],\n  "collateralValue": 234.14012,\n  "loanValue": 0,\n  "interestValue": 0,\n  "informativeRatio": -1,\n  "collateralRatio": -1,\n  "nextCollateralRatio": -1,\n  "interestPerBlockValue": "0.000000000000000000000000",\n  "interestsPerBlock": []\n}\n')))),(0,l.kt)("h2",{id:"vault-withdraw"},"Withdraw Collateral"),(0,l.kt)("p",null,"Withdraw the DFI collateral with the command ",(0,l.kt)("inlineCode",{parentName:"p"},'withdrawfromvault "vaultId" "toAddress" "amount"'),"."),(0,l.kt)("p",null,"In case the vault gets closed afterward, this step can be skipped because the ",(0,l.kt)("inlineCode",{parentName:"p"},"closevault")," command automatically send all remaining collateral to the specified address."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/de1a5206cad6bdac8c75051594f7196a1452f6352de34f0e757b0d11eb30878b?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'withdrawfromvault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH" "500@DFI"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"de1a5206cad6bdac8c75051594f7196a1452f6352de34f0e757b0d11eb30878b\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"getvault 40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b true\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vaultId": "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b",\n  "loanSchemeId": "C150",\n  "ownerAddress": "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH",\n  "state": "active",\n  "collateralAmounts": [],\n  "loanAmounts": [],\n  "interestAmounts": [],\n  "collateralValue": 0,\n  "loanValue": 0,\n  "interestValue": 0,\n  "informativeRatio": -1,\n  "collateralRatio": -1,\n  "nextCollateralRatio": -1,\n  "interestPerBlockValue": "0.000000000000000000000000",\n  "interestsPerBlock": []\n}\n')))),(0,l.kt)("h2",{id:"vault-close"},"Close the vault"),(0,l.kt)("p",null,"Optionally close the vault with the command ",(0,l.kt)("inlineCode",{parentName:"p"},'closevault "vaultId" "toAddress"'),". ",(0,l.kt)("a",{parentName:"p",href:"https://defiscan.live/transactions/119dbe51114add775ab3ad7f1e7dd1cc44223d5798b0e0f5e37f427149862bb4?network=TestNet"},"transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'closevault "40bfc5ce57fb7203bb89fb22aabeac4a495c364bede02606ed01e60331288b9b" "tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"119dbe51114add775ab3ad7f1e7dd1cc44223d5798b0e0f5e37f427149862bb4\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},"waitfornewblock\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Command"',title:'"CLI','Command"':!0},'listvaults {"ownerAddress":"tbRQNwSTJ3rqGbFnx17ng4BuGyz3s4fEtH"}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expected output"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[]\n")))))}m.isMDXComponent=!0}}]);