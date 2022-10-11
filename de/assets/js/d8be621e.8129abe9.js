"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=u(n),c=i,m=f["".concat(s,".").concat(c)]||f[c]||p[c]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={title:"Anwendung auf Raspberry-Pi",description:"TODO - Kurze Beschreibung dieser Seite."},a=void 0,o={unversionedId:"auto/App_on_Raspberry-Pi",id:"auto/App_on_Raspberry-Pi",title:"Anwendung auf Raspberry-Pi",description:"TODO - Kurze Beschreibung dieser Seite.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/App_on_Raspberry-Pi.md",sourceDirName:"auto",slug:"/auto/App_on_Raspberry-Pi",permalink:"/de/docs/auto/App_on_Raspberry-Pi",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/App_on_Raspberry-Pi.md",tags:[],version:"current",lastUpdatedAt:1665514020,formattedLastUpdatedAt:"11. Okt. 2022",frontMatter:{title:"Anwendung auf Raspberry-Pi",description:"TODO - Kurze Beschreibung dieser Seite."},sidebar:"tutorialSidebar",previous:{title:"Anwendung auf Windows Cloud Server",permalink:"/de/docs/auto/App_on_Windows_Cloud_Server"},next:{title:"Saiive.live",permalink:"/de/docs/auto/Saiivelive"}},s={},u=[{value:"DeFiNode",id:"definode",level:2},{value:"Links",id:"links",level:4},{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"RaspberryPI Image",id:"raspberrypi-image",level:2},{value:"Links",id:"links-1",level:4},{value:"Pros",id:"pros-1",level:4},{value:"Cons",id:"cons-1",level:4},{value:"Defi Wallet for Raspberry Pi",id:"defi-wallet-for-raspberry-pi",level:2},{value:"Links",id:"links-2",level:4},{value:"Pros",id:"pros-2",level:4},{value:"Cons",id:"cons-2",level:4}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mittlerweile gibt es eine gr\xf6sser werdende Gruppe von Raspberry Pi\nBesitzer, die den Defi Node (Kommandozeilen Client) oder die Defi Wallet\n(Desktop App) nutzen bzw. nutzen wollen."),(0,i.kt)("p",null,"Da zur Zeit noch kein offizielles DeFiChain release f\xfcr die Raspberrys\nverf\xfcgbar ist, haben verschiedene Community-Mitglieder eigene\nKompilationen erstellt."),(0,i.kt)("p",null,"Ziel dieser Seite ist es eine \xdcbersicht \xfcber die verschiedenen\nM\xf6glichkeiten zu geben."),(0,i.kt)("h2",{id:"definode"},"DeFiNode"),(0,i.kt)("p",null,"Mit diesem Projekt kannst du ein 3D Geh\xe4use selbst drucken und eine Node\noder Wallet lokal auf einem Raspberry Pi 4 selber erstellen und laufen\nlassen."),(0,i.kt)("h4",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/definode"},"DeFiNode auf Github"),", da ist die gesamte\nDokumentation vorhanden",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Einkaufsliste f\xfcr Hardware"),(0,i.kt)("li",{parentName:"ul"},"Source Code f\xfcr 3D-Printer"),(0,i.kt)("li",{parentName:"ul"},"Raspberry OS-Installation / -Konfiguration"),(0,i.kt)("li",{parentName:"ul"},"Installations-Script f\xfcr die Erstellung der Defi Wallet"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"Https://t.me/DeFi_Node"},"DeFiNode auf Telegram"),", f\xfcr Fragen und\nUnterst\xfctzung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gabrielkunzer.com/definode/"},"DeFiNode Druckservice"),", hier\nkannst du dir dein DEFI-Geh\xe4use bestellen")),(0,i.kt)("h4",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schritt f\xfcr Schritt Anleitung bis zum laufenden DeFi Fullnode"),(0,i.kt)("li",{parentName:"ul"},'Hat die M\xf6glichkeit f\xfcr "Don\'t trust - verify" des Source Codes')),(0,i.kt)("h4",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eigene Erstellung der Defi Wallet auf dem Raspberry mit mehrst\xfcndigem\nZeitaufwand (","~","2.5h)"),(0,i.kt)("li",{parentName:"ul"},"L\xe4uft als Web App im Browserfenster")),(0,i.kt)("h2",{id:"raspberrypi-image"},"RaspberryPI Image"),(0,i.kt)("p",null,"Das Image beinhaltet das Raspberry Pi OS und die Installation der Defi\nWallet. Nach dem kopieren des Images auf die Speicherkarte /\nUSB-Speicher und der Konfiguration des Betriebssystems ist die Defi\nWallet betriebsbereit. Einfacher geht's nimmer."),(0,i.kt)("h4",{id:"links-1"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1yGWeP8gqt5JNypeeJTZ-0aqh-k04m7Jj?usp=sharing"},"Google\nDrive"),",\nda ist die Image Datei f\xfcr den Download erh\xe4ltlich"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/software/"},"RaspberryPi Imager"),", f\xfcr das\nKopieren der Image auf die Speicherkarte")),(0,i.kt)("h4",{id:"pros-1"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Normale" Raspberry Pi OS Installation mit vorinstalliertem Defi\nWallet - schnell und unkompliziert')),(0,i.kt)("h4",{id:"cons-1"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L\xe4uft als Web App im Browserfenster"),(0,i.kt)("li",{parentName:"ul"},'Da vollst\xe4ndig kompiliert und vorinstalliert, ist "Don\'t trust -\nverify" nicht gegeben')),(0,i.kt)("h2",{id:"defi-wallet-for-raspberry-pi"},"Defi Wallet for Raspberry Pi"),(0,i.kt)("p",null,"Diese AppImages entsprechen den Defi Wallets f\xfcr Linux, Mac und Windows,\nwie sie von DeFiChain offiziell angeboten werden und sind eine Erg\xe4nzung\nzu dessen Angebot. Auch gibt es den Defi Node in der\nKommandozeilen-Version, d.h. den Fullnode in der Client Version. Die\nAppImage und den Fullnode sind jeweils in der 32-Bit und in der 64-Bit\nVersion erh\xe4ltlich."),(0,i.kt)("h4",{id:"links-2"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi"},"Defi Wallet auf\nGithub"),",\nda ist die AppImage f\xfcr den Download erh\xe4ltlich"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Martin8617/Defi-Node-for-Raspberry-Pi"},"Defi Node auf\nGithub"),", da\nist die Client Version f\xfcr den Download erh\xe4ltlich")),(0,i.kt)("h4",{id:"pros-2"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Entspricht graphisch exakt den offiziellen Defi Wallets"),(0,i.kt)("li",{parentName:"ul"},"L\xe4uft als Desktop App"),(0,i.kt)("li",{parentName:"ul"},"Client Version f\xfcr den Betrieb ohne GUI (Graphische Oberfl\xe4che)")),(0,i.kt)("h4",{id:"cons-2"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Da vollst\xe4ndig kompiliert, ist "Don\'t trust - verify" nicht gegeben')))}p.isMDXComponent=!0}}]);