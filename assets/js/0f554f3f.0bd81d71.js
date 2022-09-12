"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3646],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(i),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return i?r.createElement(h,a(a({ref:t},u),{},{components:i})):r.createElement(h,a({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7968:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=i(7462),n=(i(7294),i(3905));const o={title:"Liquidity Mining",description:"TODO - Short description of this page."},a=void 0,s={unversionedId:"auto/Liquidity_Mining",id:"auto/Liquidity_Mining",title:"Liquidity Mining",description:"TODO - Short description of this page.",source:"@site/docs/auto/Liquidity_Mining.md",sourceDirName:"auto",slug:"/auto/Liquidity_Mining",permalink:"/DeFiChain-Wiki/docs/auto/Liquidity_Mining",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Liquidity_Mining.md",tags:[],version:"current",lastUpdatedAt:1663004835,formattedLastUpdatedAt:"Sep 12, 2022",frontMatter:{title:"Liquidity Mining",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Pink Paper",permalink:"/DeFiChain-Wiki/docs/auto/Pink_Paper"},next:{title:"Block Rewards",permalink:"/DeFiChain-Wiki/docs/auto/Block_Rewards"}},c={},l=[{value:"Block rewards",id:"block-rewards",level:2},{value:"Commissions from DEX users",id:"commissions-from-dex-users",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'For the decentralized exchange on DeFiChain to work correctly, investors must provide the same value of liquidity to both sides of the liquidity pools (e.g. 50$ DFI + 50$ dBTC). That is known as "liquidity mining."'),(0,n.kt)("p",null,"To incentivise liquidity providers, they earn two different types of revenue in compensation for price volatility, which may cause ",(0,n.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Impermanent_Loss"},"impermanent loss"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DFI rewards per block which are currently being awarded due to the fact that there is not currently enough swap commissions to provide the appropriate rewards to the liquidity providers."),(0,n.kt)("li",{parentName:"ul"},"Fees/Commisions for each swap on the Decentralized Exchange (DEX)")),(0,n.kt)("h2",{id:"block-rewards"},"Block rewards"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(5626).Z,width:"1473",height:"725"})),(0,n.kt)("p",null,"The emission of the block rewards changes regularly. Approximately every 11 days we have a decrease of 1.6%. The current valid distribution can be found on the DeFiChain-Analytics-Website. Just click the following link ",(0,n.kt)("a",{parentName:"p",href:"https://www.defichain-analytics.com/general?entry=emission"},"https://www.defichain-analytics.com/general?entry=emission"),"  "),(0,n.kt)("p",null,"Block rewards for dToken Liquidity Pools (e.g. dTSLA-DUSD; dURTH-DUSD,..) need to be re-adjusted every month as we ususally get 4 new dToken into the ecosystem. The distribution is currently decided by the a group of DeFichain-Contributos, so-called ticker-council, as we do not have decentralized solution for that yet. You can find the current reward-distribution ",(0,n.kt)("a",{parentName:"p",href:"https://www.krypto-sprungbrett.com/stock-token-apr/"},"by clicking this link"),"."),(0,n.kt)("h2",{id:"commissions-from-dex-users"},"Commissions from DEX users"),(0,n.kt)("p",null,"The second, currently smaller, part of the revenue comes from commissions from DEX users' swaps. From every swap a ",(0,n.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/DEX_Fee_Structure"},"fee")," of the given coin is deducted and distributed proportionally to the liquidity providers. The target is getting much more trading on the DEX in the future. So the regular decrease of block rewards should be compensated by increasing commissions in the future. So there will still be an incentive for providing liquidity after the block rewards are gone."))}d.isMDXComponent=!0},5626:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/liquiditymining_EN_reward-reduction-ff8c5ad1b3b372154309ebc5e2adec86.png"}}]);