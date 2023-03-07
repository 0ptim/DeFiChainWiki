"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"Target multiplier",description:"Target multiplier is to ensure that the DFI rewards are fairly distributed between all DeFiChain masternodes."},o=void 0,l={unversionedId:"auto/Target_multiplier",id:"auto/Target_multiplier",title:"Target multiplier",description:"Target multiplier is to ensure that the DFI rewards are fairly distributed between all DeFiChain masternodes.",source:"@site/docs/auto/Target_multiplier.md",sourceDirName:"auto",slug:"/auto/Target_multiplier",permalink:"/docs/auto/Target_multiplier",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Target_multiplier.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"Target multiplier",description:"Target multiplier is to ensure that the DFI rewards are fairly distributed between all DeFiChain masternodes."},sidebar:"tutorialSidebar",previous:{title:"Staking",permalink:"/docs/auto/Staking"},next:{title:"Decentralized Exchange",permalink:"/docs/category/decentralized-exchange"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This number represents the probability of a DeFiChain masternode minting the next block. The higher the number gets, the likelier the masternode will mint a block. It's like adding up lottery tickets."),(0,i.kt)("p",null,"After starting a masternode or after it has minted a block, the target multiplier is set to 1. It's value increases by 1 every 6 hours. Maximum can be as high as 57."),(0,i.kt)("p",null,"This mechanism ensures that masternodes which have not minted a block for a long time will have a higher chance of minting the next one."))}p.isMDXComponent=!0}}]);