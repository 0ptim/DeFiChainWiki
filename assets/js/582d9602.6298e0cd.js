"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[161],{3905:(A,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>u});var r=t(67294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function c(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,r,o=function(A,e){if(null==A)return{};var t,r,o={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var l=r.createContext({}),i=function(A){var e=r.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):c(c({},e),A)),t},p=function(A){var e=i(A.components);return r.createElement(l.Provider,{value:e},A.children)},g={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(A,e){var t=A.components,o=A.mdxType,n=A.originalType,l=A.parentName,p=a(A,["components","mdxType","originalType","parentName"]),s=i(t),u=o,f=s["".concat(l,".").concat(u)]||s[u]||g[u]||n;return t?r.createElement(f,c(c({ref:e},p),{},{components:t})):r.createElement(f,c({ref:e},p))}));function u(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var n=t.length,c=new Array(n);c[0]=s;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=A,a.mdxType="string"==typeof A?A:o,c[1]=a;for(var i=2;i<n;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},75051:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const n={title:"Import BTC private key to Electrum",description:"Import a Bitcoin (BTC) private key into the Electrum wallet to send BTC to a different address."},c=void 0,a={unversionedId:"auto/Import_BTC_private_key_to_Electrum",id:"auto/Import_BTC_private_key_to_Electrum",title:"Import BTC private key to Electrum",description:"Import a Bitcoin (BTC) private key into the Electrum wallet to send BTC to a different address.",source:"@site/docs/auto/Import_BTC_private_key_to_Electrum.md",sourceDirName:"auto",slug:"/auto/Import_BTC_private_key_to_Electrum",permalink:"/docs/auto/Import_BTC_private_key_to_Electrum",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Import_BTC_private_key_to_Electrum.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"Import BTC private key to Electrum",description:"Import a Bitcoin (BTC) private key into the Electrum wallet to send BTC to a different address."},sidebar:"tutorialSidebar",previous:{title:"Private key read out of the app",permalink:"/docs/auto/Read_out_private_key"},next:{title:"Atomic Swap",permalink:"/docs/auto/Atomic_Swap"}},l={},i=[],p={toc:i};function g(A){let{components:e,...n}=A;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Using native BTC is still in beta and it might not be possible to do much with BTC in the DeFiWallet! Try out first if you can really do what you plan to do (receiving, swapping, sending ...). If you need to get BTC out of the app and sending doesn't work, you can use the following work around:"),(0,o.kt)("p",null,"You can use the BTC private key in Electrum to sweep the coins to an Electrum wallet as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Do this: ",(0,o.kt)("a",{parentName:"li",href:"/docs/auto/Read_out_private_key"},"Private key read out of the app")),(0,o.kt)("li",{parentName:"ol"},"Download Electrum from ",(0,o.kt)("a",{parentName:"li",href:"https://electrum.org/"},"electrum.org")," and then create a new standard wallet with it -",">"," ",(0,o.kt)("a",{parentName:"li",href:"https://bitcoinelectrum.com/creating-an-electrum-wallet/"},"https://bitcoinelectrum.com/creating-an-electrum-wallet/")),(0,o.kt)("li",{parentName:"ol"},"Sweep the BTC private key that you got from the command ",(0,o.kt)("inlineCode",{parentName:"li"},"spv_dumpprivkey"),' selecting "Wallet - Private Keys - Sweep" in the menu. You have to prepend the key with ',(0,o.kt)("inlineCode",{parentName:"li"},"p2wpkh:")," since the originating address is a SegWit Bech32 format. More information can be found here: ",(0,o.kt)("a",{parentName:"li",href:"https://bitcoinelectrum.com/sweeping-your-private-keys-into-electrum/"},"https://bitcoinelectrum.com/sweeping-your-private-keys-into-electrum/"),". Example:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(80827).Z,width:"602",height:"333"})),(0,o.kt)("p",null,"4","."," A popup will ask for the fee. The predetermined fee should be fine, just click send:\n",(0,o.kt)("img",{src:t(59708).Z,width:"365",height:"172"})),(0,o.kt)("p",null,"5","."," The BTC from your BTC DeFiWallet will now be moved to the address of the Electrum wallet from where you can send it somewhere else if you like."))}g.isMDXComponent=!0},59708:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW0AAACsCAIAAAA/oGrQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABRFSURBVHhe7Z3fr5zHWcfPDYLL/AnmAisoEkQIEE1VEpUrWECnSPZNL3ArARfm5nCDr3AQQuICKaJUh6pp65OWusFq5VYuEsRIRxQqLOHWaRzbCnHrUNI2CandRq2CwQ19nplnZp55Zvbdd9/ZPbv77vej1Xrm+TXz/ni+5z3H9p6dxwEAoA3Wkf8HAIChQEcAAK1ARwAArUBHAACtQEcAAK1ARwAArcyhIy++/sN/+6+37j94x09pQFMy+ikAYGvpqyN7//CNkxdu0fsvfuTaX135Fr1oEI0SBADYSnrpyO3vvv1bn77hx9//nwc//dS/04sG3kIuCvBjAMAW0ktHPnvjzb/88qs0ePCjd973mZvnrr1OLxrQlIzkogAXCACYwZ07d44dO7bjeOKJJ+7duyeOo4LWvXr1qkwUZCSXTOakl4585vob9P3LB7/w8s9/5Pl3P3PrDw7f/P3DN2nwc3/z/Ac//zK5KEBC67z45CPutBGPPPmiGHtz4YQkcpkB+YIvoxleaxht+wfj4PDw8OzZsyQfFy9epJvwqaeeEsdRQXrxEz/5U0ZKqsb+zNaRp69+52f/+up7D174xFdf+42/5Sb4x69/7/I3vk8DmpLx1z9985EPf4XCXHiB05ATF2RG0yfjuBfc/il9AVDBo2zmI14ObBKPPvooaYpMjhCjGo0iQszQkT/752+e/uLte2//36+eu/7eg+tfv/v2+etv/tLHb7z/C3eeuX6XpmT8zQsU8IDCKFjSEqwibSqw8D6EjoC1gJ5E6Hnk2rVrMj9aonbEgTgGMUNHfuWjz7/zDv8Q5P0XXz7997dp8Nb9B4998qU//fLrf/yl12j6R8+9cvqfvk0DCqNgGmR0yIh7TvGECNdyT8q3H675yCKEqe9JHpw44R90nPGCVKN5LDylfatFeCLIblxYthkibdpHFVmEjkn+sEhZKaZWVwTj5Ny5c3SV6V3mq8ArSLuIEH115MTf3fqTf32dBm/d/9H7Lr7yH3fvv+cCP338xdV7H7h0hwZTdaTeENxg0j/cUbGxgzX5Ve+lMbuD1WWpAmLncejQjGqRSOa1m6FBtWTKSgcTiC49jhVnHj4YJw899NDR/2TEcHQ6Er+veexjXzv9pbuv/uDB52+/dfKLr5567rVLd374rR88+MN/uffYx56ngPr3NdwktX7I7dQ1bhLbTI/7GzvGmmoRNxNKbxjztnVOkVU53ml1eh4+GCd0xxweHspkFXgRofc4EMcgZugIEX/O+uzNe7/3HH8Lc/Pu/Vt3/5cGpw/fePbWPXJRwJSfs04RknXTkbQfGhXevBTH+qeFMitZIrU6eRhZ3WTqimB8kIjcucMP8ivBaEe7lMzWEcL/ve+piy/98sdv/MJHv/b4uRfo9e5nbr3nUy+Rccbf+1JH6Gd0+fsatooxNVW1kfobO8aaWpE45M0U3qKUyEYlK40C1To06Hn4YJycPXt2Vc8jVdVolJJeOqL/HdrvPHvrE1997VMv/PfvXnql779D41YJxO5Ixmrz6JbraewYa6pFwm74B6+lN4zpT8F3fplF2CCZ80TV7Hv4YJzQhT916pRMjhZauqoXZCSXTOakl47c/u7bv33+ph/7fxf/Mx/6Svx38eTCv4sHYJvppSME/p8eAGAafXWEwOcGAACqzKEjAABQBToCAGgFOgIAaAU6AgBoBToCAGgFOgIAaAU6AgBoBToCAGhFdOR7AAAwFOgIAKAV6AgAoBXoCACgFegIAKAV6AgAoBXoCACgFegIAKAV6AgAoBXoCACgFegIAKAV6AgAoBXoCAAL4HPjRY6wE+gIAAuA+u0/xwh0BICjAzoCHQGgFegIdASAVqAj0BEAWoGObL6OXDnz8MNnrsgErAN0SXZ2dg9ktukc7O7szLjDFqAjl/eOH9+7LJNlMs9Cy9ARd3Msr2OrctBHI45AR4YswXefo9pP1utOroLNMYbg5Ttj4iqFRaXJQZQWT77A7oFdkJB4vbW4coDTxKjiqmEaDijj9UpTrwEHRWfIsIem53GqNsGGfE9py1QzK2fprSPUxDs71TbeFh3hU7+7u7yWNVfaUzUa+sQ0Mv8SdOP5u5BSyxaa6XWrxagKLuZ8ypYcVS9UoUGokgpbi0cf5rSx37PaWComqJrJl5cokJxKPHlMfQvnxhuTJtV4s75M1Vb92jqMxqkWTzr20VdHuIcnk2ofb4mO+DOcTjzP6ep52XanPJ50mQWDz3QeGbv3M+ELTQiSaYy1xjTLLyhXk52k7Go9h/WYOVfr3BvPbM2SdPe7gnm46o3Sy/W9V4UZJEYH+HFp0VQXUxY909lZVFkkhxIr/nIzCippvTG+MzHuJmzqYHfK3syuZVoUr4eZYYWeOuJbeH+inkjIJDeXe07h6WRffBTIYxXi8lyVvYmYQjQFC3lOWMos5GwzWbiOhNMY7xIy+BFZ4oD/5Lm/OBxCI30F/Jgd4QLqgjEskoxF2QjPJSgMKThEmLIq2X0BKiI5IEVU9sYBumIddYOqJQRtsd64phsKZr0Qo2Jli6XFjx2FwVr40CLKocM4xhxORrGIL9qVojddxE89CURaS0YpmMiWNNsKU0mIoSaM/cGnhiX9dMQJAHVwEhJufhEC5RRLGgW8xSlCiuEsNqlYlSllyRJMYaE+LFpH0vml0+lG0WIG+krQmM69sZQxfqyNkaqXxvqSli5+1+jr7++cYCkjTbVy9X50KEVuyb28HxNMhHPu0TE8jjhjaRHyIkxh0YfZZ1xjir9cPUAJMw+ZKS2cmfHw7q9lZ0aVNdsyU6pNULixs0MVNOsreulIamDp/qyl4ziIwP4k+Mjljo8hW5mlLYSOZyb7ZYofz2LBOsIXRcHnM55WM9Cnm9NWpCNlqYxw45SRppofzy5o6bz/pt6dZa84sqB6TLnKjKRaGZtS3eSUPQbKjXhUuYxp5Yr4aYUd4tRJebzJrhRzuR1h0w7A0UdHTHdzL9fbm0YkJEFGOC0E+ZgyS1sIMyXKFD+exYJ1JGtcf+XjKbYDckswGXgkfwSLzvWmmF5eqGQsykZUteBKwZYrZ3ZTLKUVkapaGoe6YuxsJA/V9QkpVRWpeO2Eg2Si7SZGYGu+J2XpdGaQPZppi3Gs7T5b7SH9bNSjEtPJTtZ8bZ6l9Ep8eRLyFIGMEh6K2zB9PMFJf8QQXyHUcVBKKpF5CnroCLWv+tZDnkjCg4l3h/am8WQSnkZU20uMsgQve1JxLqunRH2hmSxYR/JT6C7J+XBe4wnWA9FcuQrRID9X19dEjfm6Fd8GJ2NRVkh2lVw1Mr4eI2YTqfZT3xvHx4gO4kJht5wYd154y7psEHSJLCaUScbCosowZC8tPjIPVSeZ7NmqUwMdtIMQHY8yRSnv9MMhJF6tpCx2SbXDmJDvmFClgrMwaUNWgR3FqonZOqKbnwmNzS3PZH+Nk8tCCAkxulQcc4rAmWoqqlFdaBYL1hEA+tPVc6QUHe24tmj1q9HjeWQjgY6AFeK+rNf0ghybJyP8lNSpItAR6AgA7UBHoCMAtAIdgY4A0Ap0BDoCQCvUb2NFjrAT6AgAoBXoCACgFegIAKAV6AgAoBXoCACgFegIAKAV6AgAoBXoCACgFegIAKCVNdOR8PETm/g/y4Fi6v/3XQE9/rcuaKSvjvCHu6jbQi4N3S3VCzTNPoNZn/GwYQRRrPdT6W20RJuyuPPpelpBYcmUn/A81H3KoIwjkqAXiXsJcFpmrH+Ke2VjRKicZVConsepKsGGvGLaAtWsbQAsit46on9zDV9FYtEXhm+C4pbcWOjW9QdTPazSO8xCJv+ns/lLEqMqkE99kp3M03WMNTrGfnW1hP1cxbyoC7Z6VSI59Ed18/kGwlQv5Hahw7Jd8qRWFyyG/jpy5iBcI7p6u2fcxF829579wpdpdoIvaCBecobvIMHnponz1y1ZibUiNbM7D/k2+RTm3mEWTfSqMANlsUslmzp6qstkYSangBKNf1YGB7jFVvXbZ0Ajc+iIXDZ/Qcx7lAl/D02z8x/B4mPcUEgWdX+IsbS4wUboiN68oC1+PMzi4RMRz6tzCebskCNYYkwe4isJyhXPuR+ntSroWKFiyggbSzsnsjVMhTCVBH0msoXIH3xqCBbOXDoil40vh79g+t3H9bFrix97ooUG7vYIlN+nb8AdMaXnPdrix8MsGrKYE5pb+BxKSkh2p1WXiZeg57hGxd+dQl7ZhDqoZHSYCmZKef6msAvlBTv2ANqYT0fS1fVXRb+7sBl2fWNrrydaOlybQ+cdXN7fwywZyu3Jgsgrk8ycF7IZ1eVSpSp5RUfFlFDl9BF0bKxa0OV2hOnaYNHMqSMRf4X0ex+7vme015MsFGYuemlx8Z039GqJ9y1v044q3mGWXr/wxYw5Mkwyu5vGMxrqMdruk1SW/TmrTvTo9HLFrFRINWF5UXHSHzGExuT372JShxn8MgGL5oh1xF/cQPR6TLwEhbC6xZRYK+KhhpuZNxxv7MI7zBIN0aROVAgqzlSKyU+gylWLOnu/QAftKUXrSA7keUzgyZTCuZnQhcRZmLQhq8AOu02wOPrqyOKhmw0XdqSsXddmygYWz1HrSPnlE4wR92CwJleY7zmoyHJZ3fMIAGAsQEcAAK1ARwAArUBHAACtQEcAAK1ARwAArUBHwBB2ztzqeEkQ2BqgI2AIRjjMS4K2BvlFuONFjnM60BEwBCMc5iVBWwN1mvx6/jECHQHLwgiHeUnQ1gAdgY6AIRjhMC8J2hqgI9ARMAQjHOYlQVsDdAQ6AoZghMO8JGhrgI5AR8AQjHCYlwRtDdCRvjqiPh6GWPR/CL9iPyZnBNwcNUY4zEuCRopcYEXSkct7x6VHPMfedUxGkeN7l1NomKwzC9WRpfb5SHXkO2+8MdaXEQ7zMsFjes3Wkao0lHa2TCb16KPj0qVLMlIY45J1xH1UjSP4SovHyYT7RTb8IJOiJCxPq5fNC24C0JFRvhalI96wP1nlE8mNGzdOnjz59NNPy9xBUzKSS+ZL/r5GfSyik4muTzN30lD5XihmpPhaEU7fSB0ZMUY4zEuCRopcYEWmI9IjjigSVkfCfLVCUkhJKSLEMp9HnDQoOn/FTJIJh46MSpEkQ1MRH7AOGOEwLwnaGuZ+HknTVQuJkpKqiBBL1pGZloh2sVKESbSXA7DeGOEwLwnaGubVEZrJF0rHioUkSElVRIhl6oj78Nz8aaG0BIyOhDEN0/OIpNaKpDiwLhjhMC8J2hrm1BGWkcm+TNbgiYQhBamKCLFUHfHtHUhyENDxZFdTlgofsrsb7d7Is3pZXQ6sHiMc5iVBW0OmI3LveoJCaB2xWrMeQjKdReoIABojHOYlQVtD0pExAh0By8IIh3lJ0NYAHYGOgCEY4TAvCdoaoCPQETAEIxzmJUFbA3QEOgKGYITDvCRoa6BOGzdynNOBjgAAWoGOAABagY4AAFqBjgAAWoGOAABagY4AAFqBjgAAWoGOAABagY4AAFpp0JH80wAyOlyNLK/yAtmITQKwOObRkfjBIcTugXRLtWc6GolcUmLQZ4qUlTvWWhVruCUAlklfHXHtnz6o7GDXfSBrh1jUXSRF0cE1/GgOyspr2LRruCUAlklfHal0hu+W1DPpcWX3z4ORbTqR5oV4UAXJc5GuoPslFYxEpxjzGJMnp1m+Ctfc3dW+tIqLrCSqw/HxMgvLd1nMJgEYOX11JHx+qsK1YtAR7qEUEV1FlnRnMitlSVnBRE4uzkli8TFuKCRLCrMr8zyk+Si9SiXRFKCAMCOPbKm0BJNYANgWeutI2Ri+W/S7OHwbZmph4aZzfomM5N8ulcX12BMtJkyvnmXR2g+fOT+lpk/M4r1RU/slG6aITgdg7PTVEfVzjYDvFv0uDnEd5L1c4L6kly2nLWXxjngTptfOsgbpiJ4S3ZbSC8Co6asj1Br6+SL9nFV6hv3JHRrJtaxqKLLHIInhJ5NMbUKuGqcyZLCCxiZfIJVKNo+u6YtpSyXRFCg2WbdM3yQAo6avjhDcHhHqId+K/j13p5+zun5TPaVrBLOxxYLe5cdcxvnVr6qIeCebU6m8x/US3qVXIcpElcImXcEnlpbOTQIwYubQkQ3GqAYAYKFARwAArWyHjgAAlgl0BADQCnQEANAKdAQA0Ap0BADQCnQEANAKdAQA0Ap0BCwe+a2wY0SOsMD8huMxveQIO4GOgMVD/Sa/q35cQEemAR0Bi2drdUTixgJ0BKwS6Mg4gI6AVQIdGQfQEbBKoCPjADoCVsk66sjlvePH9y7LZCAboCOLOMwIdASsklYd2Z/4T4RiJvtibGRTdIT2KUe+M2S/0BEwGlp0xPVREo/9yYKEZDN0hBQ07nLQoUNHwGho0JF6Hzhx8Tivi9oLTy2h3dJjDFtSTkppbLAj0ZFCPGoHYo89xQx7jKkDHQGrZLiOcD90fhX2jebaRuLkS7jJVA3pGu+yf/eWoSxfR4IWpiOpHYg9dk4SyyIOMwIdAaukSUeqbeCaR/C9FMP82CTqeGaybwIGcQQ6Ing5IW3oPhA/Li1+3Ax0BKyS4ToSvsJmcC8F47TOMf1jpkRpmZ+j0xHGPYl0H4gflxY/bgY6AlZJg45wI8SHdIJ/2Kh6g731zmFPStOP+h6dMpSl6whtMm5aNtx5IClGTGQodXgw0BGwSlp0hOBmiLge4mZyHJ9MuHMqvZSlcZKuYlKGsvznEbPpmk0fSByHEyTnx3ubgY6AVdKoI2vL8nVkvYCOgFUCHRkH0BGwSqAj4wA6AlYJdGQcQEfAKtlaHRnlS46wE+gIWDzUb2NFjrDA9N6YXnKEnUBHAACtQEcAAK1ARwAArUBHAACtQEcAAK1ARwAArUBHAACtQEcAAK1ARwAArUBHAACtQEcAAK1ARwAArYiOAADAcB5//MdBZ8tDGSCJ6wAAAABJRU5ErkJggg=="},80827:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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7t27t27des4556TDpXTF7t8sre4U497xu/8z0m3bdtl7tl25btf2a++745vpipOSQ4DlrshhmHYRU8pOOeWKK67Ylrv00kvTVO5tb3vbt7/97SjFgQMHPvvZz65Zs2Z8fPzxxx9/5plnLr/88rQol65Y5vChrR/5yTUfvOfqD7Rs37nsvXdd85GDd6x/qut2wVN3Ztv3rvpEuuKk5BBguatyGKZXxJSy7jZu3Pj73//+1ltvPe+889LUKadcfPHFR48effrppz/84Q+nqbYcTmw556b/Grlvy5qW7bHb1z2/69+fv/fiybcjOy/afuOn0xUnJYcAy109h2EaRUwp6+K000675557JiYm2n/c5txzzz148OA111yT9ttyuPPaD/7khn9oiVzv25Pjn9q1/dp0xUnJIcBy15LD0G8RU8q6iAqOj49fcsklab/m9NNPf/jhh+OuMe235fAHm8545NZ/aolc79vEtrW/2HNHuuKk5BBguWvPYeiriCllXVxxxRVHjhy57LLL0n6zCy64YPPmzWmnLYffuew9h358YUvket92XHfu4V89lq44KTkEWO465vB3R//QexFTyroY5O7w21947296+G+E3bbvf+2cl3r7rDg5BFjuOuYwPPfcb3osYkpZF9P+b4c7vr7qli+e2cuPzHTedl1829WfTJebihwCLHfdchgOHny6lyKmlHU3vZ8sHf/KmeNXnd0auZ63Izsvuv2b/5EuNxU5BFjuJslhOHDgsShi2ukipay76f25w/+97L0P3PSPLZHrfXty/FM7t1+TLjcVOQRY7uo5fP75F4pBJLC+FZPdpJRNahqfSnPDp9/1xA/Ob4lc79vEtrX79jZ9LPgk5BBguatyGC182ctecfO222L81reedvPNtxbzU5qlzyzd/G/vOLLzopbI9b79+Lpznzv0eLrcVOQQYLkrcli0cMfdu1796jfE7oEDjxWDXszS/9HihktOf35Xa+R632776tkvHvtDutxU5BBguYscVi2M3Xe+8/3j43cXg95vEO+6664tW7ak/3th/zr+/w6/+6VVLYXra+v9x0qDHAIsd295y7urFoYYnPCXr4/B3r0PvuY1JxaTcy9yeMfXzzl4xwXT2568Y/32LT19WmlBDgFoFfeF0cIYvO51Jxczc+/Qk4/uHr9hkO2JR+9P1+qBHALQ6olfPhk3iGef/bF7d/80TS11cggAcggAcggAYYZzaLPZbDbbIt1SzLrrNYcAsITJIQDIIQDIIQAEOQQAOQQAOQSA0EcOtyxd6Stsdj4AS0V6Z++uvxweWIomyWH6PAMAFjM57IkcAixtctgTOQRY2uSwJ3IIsLTJYU/kEGBpW/A5HFt7/PFrx9JOrn1m9k2Rwz0bVqzYsCf/CzqI/fv3j/Vr06rjjlu1Ke3UdJtnts3UX/m5+jsY/9Slf/5geVsgOYzEDQ11jNxSy+HoSPeVY2Prh2BuRRHTP3+wvC2MHGaFGx7uWLkllMNYlb39yCELiRxCYUHksAjcxuHa/WFMpVdredfYMpOfs3Y4doY3Nh1N12iZaDvenx5yODKSx66Wu9GRYmJoaGS0mGkJZ2NBcZIcMvfkEAoLIYd52aJRjR7GqKhcdbBtJu9bmsmOlsPG0TSzcXh4Y8tuPujL1DksK1gOs98bFaw0clhbUE7KIXNPDqGwAHJYBCwblT1szNTyNvlMemkXInhZPhu5bN3tWw93h0XkyszVZ+oa83FrWOaykcOx7GnCHJJDKMx/DltaljVuyvh1nCnGTWYsinLIUiWHUJj3HEbKaoFK94fpt5Ad7jjTlMCsc02VG1s7nA7m6zY175an9a73HBY1bPzeorGytqCcHFt/UnqLgrkih1CY7xy25qnMXha4TOMHTltmWk6M3eJwyObL1elHZ1p2+zZ1DtPlaz9JU5sssldfVRazVORw06q0C3NFDqEw73eHi8MUORxQdXfom6XMOTmEghz2ZG5yOJ1PpZk5608aOml9Gi+OD7VZQE+y+DZ3+7PpNr+A+FQaKMhhT2Y3hwDMNznsiRwCLG1y2JNJcgjA0pDe2bvrL4dLVfoKAViu+sghACxVcggAcggAcggAQQ4BQA4BQA4BIMghAMghQCfpQzqWovQVthlaN7FUt/QVTkoOATqIbKQPclxa5LAbOQToYNnmMK1bKuQQYCByuDTIIcBA5HBpkEOAgcjh0iCHAANZiDkcW3v88WvH0s40yWE3cgjQwaA53Dg8VBnemCYHtJBzGM8tfbVDAz/HmSSHAAMZJId5GhoN3Dg8Qz1cuDmM+FfPbMa+3BkhhwADGSCHnavVevuUr1pb3kOWBWncVGYzjXMapyzUHDY3sHqq2ZdQHIpRPmj5otpnsnOHh8up5uv2TQ4BBjL9HDYC0EXRjrwBaV26uWo5s9aYrBBrx4pfi5npmp0clhlvPPv05OMpD4dseuNw9uTbvqiOX2ZVyuy6jYtOgxwCDGSgHHaMVvYuXyre9KtlVQbqJ9bXZ4Y3tiyYllnKYVJUsal++dOOmerX/Isp5UfTuNDyZcYVB/qa5RBgINPPYcd38OxNv5ws3u7rb/rtM6FlN7TP9G92c5hJd3vxZIc3Fk1MwzQ75RfVNCOHAPNqgBxm7+f1b/GlO6TyXT07GuP6m34aZ0cap2UlqO92Kkf/ZiWH8cSqJ1o9ybG1w8c3hiEftn1Rk3+Zg9ZQDgEGM0gOQ1a2Sv5mn73r57IfE4m3+Pqbfi0h1WnZSfWrtJwyXbNzd9jyRIvJWsrqVWtf2/5lpp3QnM7+ySHAQAbM4YI1OzmcUTNR/YocAgxEDueNHAIsHHK4NMghwEDkcGmQQ4CBLNscLsktfYWTkkOADiIbS1X6Ctu0JGQpbekrnJQcAoAcAoAcAkCQQwCQQwCQQwAIcggAcggAcggAQQ4BQA4BQA4BIKQc2mw2m822rLcPffz/AdTUB8ur4owCAAAAAElFTkSuQmCC"}}]);