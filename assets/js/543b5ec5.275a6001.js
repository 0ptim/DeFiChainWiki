"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7315],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),s=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),h=n,f=m["".concat(o,".").concat(h)]||m[h]||d[h]||r;return a?i.createElement(f,l(l({ref:t},c),{},{components:a})):i.createElement(f,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const r={title:"API",description:"An overview of the most frequently used API calls for DeFiChain. Get stats, addresses, transactions, blocks and DEX info."},l=void 0,p={unversionedId:"auto/API",id:"auto/API",title:"API",description:"An overview of the most frequently used API calls for DeFiChain. Get stats, addresses, transactions, blocks and DEX info.",source:"@site/docs/auto/API.md",sourceDirName:"auto",slug:"/auto/API",permalink:"/docs/auto/API",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/API.md",tags:[],version:"current",lastUpdatedAt:1673906533,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{title:"API",description:"An overview of the most frequently used API calls for DeFiChain. Get stats, addresses, transactions, blocks and DEX info."},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/category/advanced-usage"},next:{title:"CLI Commands",permalink:"/docs/auto/CLI_Commands"}},o={},s=[{value:"General",id:"general",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Addresses",id:"addresses",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Blocks",id:"blocks",level:3},{value:"DEX (Decentraliced Exchange)",id:"dex-decentraliced-exchange",level:2},{value:"General",id:"general-1",level:3},{value:"Important IDs",id:"important-ids",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/stats"},"https://api.defichain.io/v1/stats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/stats?q=tokens.supply&pretty"},"https://api.defichain.io/v1/stats?q=tokens.supply&pretty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/stats?network=mainnet&pretty"},"https://api.defichain.io/v1/stats?network=mainnet&pretty"))),(0,n.kt)("h2",{id:"blockchain"},"Blockchain"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.defichain.io/v1/getanchorlist?network=mainnet"},"https://api.defichain.io/v1/getanchorlist?network=mainnet")),(0,n.kt)("h3",{id:"addresses"},"Addresses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/balance"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/balance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/txs"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/txs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD?limit=20"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD?limit=20")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/stats/rich-list?pageno=1&pagesize=200"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/stats/rich-list?pageno=1&pagesize=200")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.blockchain.com/btc/address/1FtZwEZKknoquUb6DyQHFZ6g6oomXJYEcb"},"https://www.blockchain.com/btc/address/1FtZwEZKknoquUb6DyQHFZ6g6oomXJYEcb"),"\naddress held by all DeFi nodes")),(0,n.kt)("h3",{id:"transactions"},"Transactions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92"},"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92/coins"},"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92/coins"))),(0,n.kt)("h3",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getBlockActivity?network=mainnet"},"https://api.defichain.io/v1/getBlockActivity?network=mainnet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block/12345"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block/12345")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=true"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=true")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=false"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=false")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=500000&anchorsOnly=false"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=500000&anchorsOnly=false"),"\n\\<--response 200MB!")),(0,n.kt)("h2",{id:"dex-decentraliced-exchange"},"DEX (Decentraliced Exchange)"),(0,n.kt)("h3",{id:"general-1"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listyieldfarming"},"https://api.defichain.io/v1/listyieldfarming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listswaps"},"https://api.defichain.io/v1/listswaps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getsubgraphswaps"},"https://api.defichain.io/v1/getsubgraphswaps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getdfisupply"},"https://api.defichain.io/v1/getdfisupply")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listpoolpairs"},"https://api.defichain.io/v1/listpoolpairs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listtokens"},"https://api.defichain.io/v1/listtokens")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getaccount?including_start=true&owner=dDgnpwmZJ2XnDXRVuqrBbbfoL5x953fP3b"},"https://api.defichain.io/v1/getaccount?including_start=true&owner=dDgnpwmZJ2XnDXRVuqrBbbfoL5x953fP3b"),"\n(the option including_start=true is needed to show the DFI-tokens)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/gettokenrichlist?id=2&network=mainnet"},"https://api.defichain.io/v1/gettokenrichlist?id=2&network=mainnet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getpoolpair?id=4&network=mainnet"},"https://api.defichain.io/v1/getpoolpair?id=4&network=mainnet"))),(0,n.kt)("h3",{id:"important-ids"},"Important IDs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DFI: id=0"),(0,n.kt)("li",{parentName:"ul"},"ETH: id=1"),(0,n.kt)("li",{parentName:"ul"},"BTC: id=2"),(0,n.kt)("li",{parentName:"ul"},"USDT: id=3"),(0,n.kt)("li",{parentName:"ul"},"ETH-DFI: id=4"),(0,n.kt)("li",{parentName:"ul"},"BTC-DFI: id=5"),(0,n.kt)("li",{parentName:"ul"},"USDT-DFI: id=6"),(0,n.kt)("li",{parentName:"ul"},"DOGE: id=7"),(0,n.kt)("li",{parentName:"ul"},"DOGE-DFI: id=8"),(0,n.kt)("li",{parentName:"ul"},"LTC: id=9"),(0,n.kt)("li",{parentName:"ul"},"LTC-DFI: id=10"),(0,n.kt)("li",{parentName:"ul"},"BCH: id=11"),(0,n.kt)("li",{parentName:"ul"},"BCH-DFI: id = 12"),(0,n.kt)("li",{parentName:"ul"},"USDC: id=13"),(0,n.kt)("li",{parentName:"ul"},"USDC-DFI: id=14")))}d.isMDXComponent=!0}}]);