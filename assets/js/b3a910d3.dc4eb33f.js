"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={title:"Masternode",description:"TODO - Short description of this page."},i=void 0,l={unversionedId:"auto/Masternode",id:"auto/Masternode",title:"Masternode",description:"TODO - Short description of this page.",source:"@site/docs/auto/Masternode.md",sourceDirName:"auto",slug:"/auto/Masternode",permalink:"/docs/auto/Masternode",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Masternode.md",tags:[],version:"current",lastUpdatedAt:1665514020,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{title:"Masternode",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Suggestion for using the DeFi app",permalink:"/docs/auto/Suggestion_for_using_the_DeFi_app"},next:{title:"Payout DFI in Euro",permalink:"/docs/auto/Payout_DFI_in_Euro"}},s={},d=[{value:"DeFiChain Masternode",id:"defichain-masternode",level:2},{value:"How to Run a Masternode",id:"how-to-run-a-masternode",level:3},{value:"Option 1 - Ownernode at &quot;Home&quot;",id:"option-1---ownernode-at-home",level:4},{value:"Option 2 - Ownernode and Operatornode at &quot;Home&quot;",id:"option-2---ownernode-and-operatornode-at-home",level:4},{value:"Option 3 - Ownernode and Operatornode in a Data Center",id:"option-3---ownernode-and-operatornode-in-a-data-center",level:4},{value:"Masternode Issues",id:"masternode-issues",level:2},{value:"I have found a block, but the rewards are not apparent",id:"i-have-found-a-block-but-the-rewards-are-not-apparent",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"defichain-masternode"},"DeFiChain Masternode"),(0,r.kt)("p",null,"In January 2021, the Masternodes decided in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/6"},"DFI Proposal #4")," to reduce the collateral for one masternode to 20,000 DFI from 1,000,000 DFI."),(0,r.kt)("p",null,"On March 1, 2021, the hard fork named DAKOTA was implemented in Block 678,000 and finally reduced the collateral."),(0,r.kt)("h3",{id:"how-to-run-a-masternode"},"How to Run a Masternode"),(0,r.kt)("p",null,"There are several ways to operate a Masternode in the DeFiChain Network."),(0,r.kt)("h4",{id:"option-1---ownernode-at-home"},'Option 1 - Ownernode at "Home"'),(0,r.kt)("p",null,"The first possibility is to run the Masternode on a Personal Computer, Laptop or Apple MacBook or something similar in your Home Network. You can place the hardware, in your office, living room or even in your child's room. You can decide."),(0,r.kt)("p",null,"The only things you need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internet connection (no static IP needed)"),(0,r.kt)("li",{parentName:"ul"},"Any hardware with installed app/wallet"),(0,r.kt)("li",{parentName:"ul"},"20,000 DFI in this Wallet for the node, 11 DFI for creation and fees.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is the simplest setup and you only need a few clicks to run it."),(0,r.kt)("li",{parentName:"ul"},"You don't need extra Hardware, you can use your existing machine with the wallet on it.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cons:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your machine is offline or your internet connection is down, you can't participate in the network and staking - no rewards in this time."),(0,r.kt)("li",{parentName:"ul"},"If you want to make the network more stable with your masternode and want to offer services for other nodes, you have to open port 8555 externally for everyone.",(0,r.kt)("sup",null,"1")),(0,r.kt)("li",{parentName:"ul"},"When you open the Port, you present your wallet.dat to the public internet, maybe a possible target for attackers.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[1]"," You do ",(0,r.kt)("strong",{parentName:"p"},"NOT")," have to open the Port to participate in staking, but without this open port, you don't help to stabilize the Network and no one can use your node for synchronization or other implemented features")),(0,r.kt)("h4",{id:"option-2---ownernode-and-operatornode-at-home"},'Option 2 - Ownernode and Operatornode at "Home"'),(0,r.kt)("p",null,"In this scenario you have two nodes or wallet apps in your home network. One machine acts as the ownernode and holds the Collateral of 20,000 DFI. This can be your Macbook, Laptop or Personal Computer. You start this machine, when you need it, only to transfer some token or use the DEX, LM or send Rewards to another address."),(0,r.kt)("p",null,"The other machine is your Operatornode. This can be another Laptop or PC or ",(0,r.kt)("a",{parentName:"p",href:"/docs/auto/App_on_Raspberry-Pi"},"Raspberry")," or a home server. You only need the actual nodeversion on it. No collateral, no wallet app required. You can open Port 8555 in your router to this machine to present network services and make this node public for other nodes."),(0,r.kt)("p",null,"Because this Node has no coins or tokens, the security risk is much less than in option 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Port only to the Node without Coins or Token in it."),(0,r.kt)("li",{parentName:"ul"},"You run the Node at home, nevertheless stabilize the network over opened Port 8555 (only possible with static IP.)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cons:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your Operatornode is offline or your internet connection is down, you cannot participate in the network and staking - there are no rewards in this time."),(0,r.kt)("li",{parentName:"ul"},"Hardware for home is not very suitable for 24/7 continuous operation (Power Supply, SSD or another disc etc.) Risky for hardware damage."),(0,r.kt)("li",{parentName:"ul"},"Need another device for the Operatornode"),(0,r.kt)("li",{parentName:"ul"},"You need a static IP-Address to present your Node in the Network."),(0,r.kt)("li",{parentName:"ul"},"Open port 8555 externally for everyone to your Home-Network."),(0,r.kt)("li",{parentName:"ul"},"An unstable or slow internet connection (upload) is bad for the stability of the network")),(0,r.kt)("h4",{id:"option-3---ownernode-and-operatornode-in-a-data-center"},"Option 3 - Ownernode and Operatornode in a Data Center"),(0,r.kt)("p",null,'The preferred scenario is a Hot/Cold wallet solution with the Operatornode "in the Cloud". Your APP-Wallet run at your own machine at home like in option 2. In best case with Ledgersupport as a "Cold-Wallet".'),(0,r.kt)("p",null,"This wallet contains the collateral of 20,000 DFI and only needs to be active when you want to use with your Wallet or Node."),(0,r.kt)("p",null,"The operatornode is hosted in a professional tier 2 or 3 Datacenter. A simple virtual private Server is enough, no big rootserver or something else needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No Port Forwarding needed at Home."),(0,r.kt)("li",{parentName:"ul"},"High Availability, 24/7 Infrastructure and redundant Internet Connection for your Masternode (Operatornode)"),(0,r.kt)("li",{parentName:"ul"},"Full Service for the DeFiChain Network: high-availability node with redundant hardware and internet connection stabilizes the Network and is a boost for the decentralization.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cons:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VPS needed in a data center and some knowledge to handle and update it.")),(0,r.kt)("h2",{id:"masternode-issues"},"Masternode Issues"),(0,r.kt)("h3",{id:"i-have-found-a-block-but-the-rewards-are-not-apparent"},"I have found a block, but the rewards are not apparent"),(0,r.kt)("p",null,"Problem:"),(0,r.kt)("p",null,"I set up a masternode in the testnet and after a few hours I already found 2 blocks. But the rewards are not displayed in the wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7980).Z,width:"900",height:"666"})),(0,r.kt)("p",null,"Mining Rewards are displayed correctly in the explorer."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2).Z,width:"900",height:"571"}),"\n",(0,r.kt)("img",{src:n(7634).Z,width:"900",height:"573"})),(0,r.kt)("p",null,"The balance in the Wallet is smaller than the distributed rewards."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4389).Z,width:"600",height:"471"})),(0,r.kt)("p",null,"Solution:"),(0,r.kt)("p",null,"DFI Rewards are only released after a certain block time has elapsed. To see the coins that have not been released yet, you need to enter the following code in the console: ",(0,r.kt)("inlineCode",{parentName:"p"},"getbalances")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5137).Z,width:"600",height:"780"})),(0,r.kt)("p",null,"After the expiration of the blocking period, the coins will be displayed correctly in the wallet."))}u.isMDXComponent=!0},7980:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/masternode_EN_1-2b6f6f7e67a79b707633ff7092fa6923.png"},2:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/masternode_EN_2-9f328a500665adb39cac7357e797530c.png"},7634:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/masternode_EN_3-2fc95c1ac0be29e313ed9a1f562648c6.png"},5137:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/masternode_EN_4-734c6a4996fc506c837fe8185ff1c7e5.jpg"},4389:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/masternode_EN_4-2714cb8d53fb2536d37e035c4877ff62.png"}}]);