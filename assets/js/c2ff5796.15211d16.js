"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={title:"V2.3.2",description:"TODO - Short description of this page."},i=void 0,l={unversionedId:"auto/V2.3.2",id:"auto/V2.3.2",title:"V2.3.2",description:"TODO - Short description of this page.",source:"@site/docs/auto/V2.3.2.md",sourceDirName:"auto",slug:"/auto/V2.3.2",permalink:"/docs/auto/V2.3.2",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/V2.3.2.md",tags:[],version:"current",lastUpdatedAt:1665514020,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{title:"V2.3.2",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"V2.3.1",permalink:"/docs/auto/V2.3.1"},next:{title:"Community",permalink:"/docs/category/community"}},s={},d=[{value:"General recommendations for installation",id:"general-recommendations-for-installation",level:2},{value:"Known problems from the community with the installation",id:"known-problems-from-the-community-with-the-installation",level:2},{value:"Wrong addresses are displayed",id:"wrong-addresses-are-displayed",level:3},{value:"Transactions are not displayed in the history",id:"transactions-are-not-displayed-in-the-history",level:2},{value:"The wallet does not synchronize",id:"the-wallet-does-not-synchronize",level:3},{value:"Insufficient amount",id:"insufficient-amount",level:3},{value:"Please wait until your transaction has been added to the next block before proceeding with a new transaction",id:"please-wait-until-your-transaction-has-been-added-to-the-next-block-before-proceeding-with-a-new-transaction",level:3},{value:"Comments",id:"comments",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Testimonials from the community about the installation of DeFi Wallet V2.3.2"),(0,o.kt)("h2",{id:"general-recommendations-for-installation"},"General recommendations for installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before installation, make sure that your backup is stored in a safe place. For example, on a memory stick."),(0,o.kt)("li",{parentName:"ul"},"Optionally, it may be useful to always run the DeFi Wallet on 2 devices in parallel. This way you always have access to your coins, even if the update fails on one device. This helps to stay calm and not to get nervous.")),(0,o.kt)("h2",{id:"known-problems-from-the-community-with-the-installation"},"Known problems from the community with the installation"),(0,o.kt)("h3",{id:"wrong-addresses-are-displayed"},"Wrong addresses are displayed"),(0,o.kt)("p",null,"One user reports that DeFi Wallet displays incorrect addresses after the update. Some addresses that were not displayed before the update are now displayed, and some addresses that were displayed and used before the update are now no longer displayed."),(0,o.kt)("p",null,"This is very easy to explain. The DeFi Wallet with version 2.3.2 shows all addresses after the update that own or once owned DFI UTXO. If you have an address that only has tokens and no DFI UTXO, this address will not be displayed after the update. You can add the address again manually."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/auto/Create_address#display-an-old-address-again"},"Create address#Display an old address again:"))),(0,o.kt)("p",null,"To check whether an address has DFI UTXO or not, you can use this explorer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.defichain.com/#/DFI/mainnet/home"},"https://explorer.defichain.com/#/DFI/mainnet/home"))),(0,o.kt)("p",null,"To check if an address has DFI tokens you can use this explorer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dex.defichain.com/mainnet/pool"},"https://dex.defichain.com/mainnet/pool"))),(0,o.kt)("p",null,"Please note that DFI UTXO and DFI Token are not the same."),(0,o.kt)("h2",{id:"transactions-are-not-displayed-in-the-history"},"Transactions are not displayed in the history"),(0,o.kt)("p",null,"This problem is well known. The developers are working on a solution."),(0,o.kt)("h3",{id:"the-wallet-does-not-synchronize"},"The wallet does not synchronize"),(0,o.kt)("p",null,"Many antivirus programs are not compatible with Bitcoin Core and also not with DeFi Wallet 2.3.2. Disable the antivirus software to run DeFi Wallet."),(0,o.kt)("h3",{id:"insufficient-amount"},"Insufficient amount"),(0,o.kt)("p",null,"This error message seems to occur more often after the update to 2.3.2.\nSolution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new address: ",(0,o.kt)("a",{parentName:"li",href:"/docs/auto/Create_address"},"Create address")),(0,o.kt)("li",{parentName:"ul"},"Send all tokens and coins to the newly created address: ",(0,o.kt)("a",{parentName:"li",href:"/docs/auto/Send_all_coins"},"Send all coins")),(0,o.kt)("li",{parentName:"ul"},"Try again. Now it should work.")),(0,o.kt)("p",null,"No help found? Go to ",(0,o.kt)("a",{parentName:"p",href:"/docs/auto/Debug.log"},"Debug.log")),(0,o.kt)("h3",{id:"please-wait-until-your-transaction-has-been-added-to-the-next-block-before-proceeding-with-a-new-transaction"},"Please wait until your transaction has been added to the next block before proceeding with a new transaction"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Error: Please wait until your transaction has been added to the next block before proceeding with a new transaction."),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"Error: Please wait until your transaction has been added to the next block before proceeding with a new transaction.",src:a(233).Z,width:"850",height:"221"})," is not possible to make a transaction. Solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new address: ",(0,o.kt)("a",{parentName:"li",href:"/docs/auto/Create_address"},"Create address")),(0,o.kt)("li",{parentName:"ul"},"Send all tokens and coins to the newly created address: ",(0,o.kt)("a",{parentName:"li",href:"/docs/auto/Send_all_coins"},"Send all coins")),(0,o.kt)("li",{parentName:"ul"},"Try again. Now it should work.")),(0,o.kt)("p",null,"No help found? Go to ",(0,o.kt)("a",{parentName:"p",href:"/docs/auto/Debug.log"},"Debug.log")),(0,o.kt)("h2",{id:"comments"},"Comments"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"defi-app to DeFi Wallet"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"defi-app to DeFi Wallet",src:a(795).Z,width:"300",height:"149"})),(0,o.kt)("p",null,"As of version 2.3.2, the wallet is no longer called defi-app but DeFi Wallet. The old app remains and must be uninstalled manually."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"old folder defi-app that can be deleted"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"old folder defi-app that can be deleted",src:a(1330).Z,width:"800",height:"607"})),(0,o.kt)("p",null,"folder ",(0,o.kt)("inlineCode",{parentName:"p"},"/Users/*<username>*/Library/Application Support/defi-app")," can be deleted."))}c.isMDXComponent=!0},233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/v232_EN_1-e3e4eb9573305f107a3aecce7c5e3c8c.jpg"},795:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/v232_EN_2-ba7cef3662b8c757c5e4c40a693cdf55.png"},1330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/v232_EN_3-cdc94edcff59a20722012f684f045c3e.png"}}]);