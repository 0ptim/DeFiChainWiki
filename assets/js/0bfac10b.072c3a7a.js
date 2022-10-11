"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4419],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8353:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Custom Transaction",description:"TODO - Short description of this page."},i=void 0,c={unversionedId:"auto/CustomTransaction",id:"auto/CustomTransaction",title:"Custom Transaction",description:"TODO - Short description of this page.",source:"@site/docs/auto/CustomTransaction.md",sourceDirName:"auto",slug:"/auto/CustomTransaction",permalink:"/docs/auto/CustomTransaction",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/CustomTransaction.md",tags:[],version:"current",lastUpdatedAt:1665514020,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{title:"Custom Transaction",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Lightwallet change Ocean",permalink:"/docs/auto/Lightwallet_change_Ocean"},next:{title:"Guides",permalink:"/docs/category/guides"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Basic construction",id:"basic-construction",level:2},{value:"Decoding OP_RETURN Hex",id:"decoding-op_return-hex",level:2}],l={toc:u};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Every token related Action on the DeFiChain is handled by Custom Transactions. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/ain"},"Node Software")," flags these transactions with a marker: DfTx If you want to decode these transaction, this article will help you."),(0,o.kt)("h2",{id:"basic-construction"},"Basic construction"),(0,o.kt)("p",null,"DefiChain is basically a fork of Bitcoin. Therefor transactions ..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Input, Output Transaction; scriptPubKey. One Output has OP_RETURN")),(0,o.kt)("h2",{id:"decoding-op_return-hex"},"Decoding OP_RETURN Hex"),(0,o.kt)("p",null,"step by step... PUSHDATA, DfTx Marker, function Name... etc."))}p.isMDXComponent=!0}}]);