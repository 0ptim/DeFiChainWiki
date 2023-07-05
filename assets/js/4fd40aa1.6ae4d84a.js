"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5776],{51283:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(67294),l=a(7452),n=a(39960),s=a(95999),o=a(25934),c=a(9367);const m=e=>{let{children:t,messagesLength:a}=e;const l=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=l.current;e&&(e.scrollTop=e.scrollHeight)}),[a]),r.createElement("div",{ref:l,className:"flex h-96 w-full flex-col gap-2 overflow-auto pr-1"},t)},d="https://jellychat.fly.dev",u=(0,c.ZP)(d);function i(){const[e,t]=(0,r.useState)(""),[a,n]=(0,r.useState)([]),[c,i]=(0,r.useState)(!1),[E,w]=(0,r.useState)(!1),[k,N]=(0,r.useState)(null),[v,_]=(0,r.useState)(!1),[C,S]=(0,r.useState)(!1),T=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=localStorage.getItem("user_token");if(e)N(e);else{const e=(0,o.Z)();N(e),localStorage.setItem("user_token",e)}}),[]),(0,r.useEffect)((()=>{if(!k)return;console.log("Fetching chat history..."),console.log("User token: ",k);(async()=>{try{_(!0);const e=await fetch(`${d}/history`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_token:k})});if(e.ok){const t=await e.json();console.log("Chat history: ",t),n(t)}else console.error("Failed to fetch chat history. Status code: ",e.status),S(!0)}catch(E){console.error("Failed to fetch chat history.",E),S(!0)}_(!1)})()}),[k]),(0,r.useEffect)((()=>(u.on("tool_start",(e=>{console.log("Tool start: ",e.tool_name),n((t=>[...t,{message_type:"tool",content:e.tool_name}]))})),u.on("final_message",(e=>{console.log("Final message: ",e.message),n((t=>[...t,{message_type:"jelly",content:e.message}])),i(!1)})),()=>{u.disconnect()})),[]);const j=async()=>{if(e){n((t=>[...t,{message_type:"human",content:e}])),i(!0),t("");try{u.emit("user_message",k,e)}catch(E){console.error(E)}}else w(!0)};return r.createElement(l.Z,{description:"Ask questions about DeFiChain which JellyChat will answer for you."},r.createElement("div",{className:"transition-color mapBackground flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 md:py-28"},r.createElement("div",{className:"relative flex max-w-2xl grow flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-2xl dark:bg-backgroundDark md:p-10"},r.createElement(h,null),r.createElement(p,null),r.createElement("h1",{className:"mb-1"},r.createElement(s.Z,null,"JellyChat.Title")),r.createElement("p",{className:"mx-8 mb-2 text-center text-gray-600 dark:text-gray-200"},r.createElement(s.Z,null,"JellyChat.Instruction")),r.createElement(m,{messagesLength:a.length},C?r.createElement(x,{onRetry:()=>{window.location.reload()}}):null,a.map(((e,t)=>r.createElement(b,{key:t,message:e}))),c&&r.createElement("div",{className:"self-start rounded-lg bg-gray-50 px-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"mb-0 animate-pulse text-lg"},"...")),v&&r.createElement(f,null)),r.createElement(g,{setError:w,error:E,onSubmit:j,question:e,setQuestion:t,inputRef:T}),r.createElement(y,{disabled:c,onSubmit:j}))))}function g(e){let{error:t,onSubmit:a,question:l,setQuestion:n,inputRef:o,setError:c}=e;return r.createElement("div",{className:"relative w-full"},r.createElement("input",{className:"w-full rounded-lg border border-transparent bg-gray-50 p-5 pr-11 text-xl shadow-md outline-none hover:border-main-300 focus:border-main-700 dark:bg-gray-800  dark:hover:border-main-700 dark:focus:border-main-500 "+(t?"bg-main-100 dark:bg-main-900":""),type:"text",placeholder:(0,s.I)({message:"JellyChat.Placeholder"}),value:l,ref:o,onChange:e=>{n(e.target.value),c(!1)},onKeyDown:e=>{13===e.keyCode&&a()}}),r.createElement("div",{className:"absolute inset-y-0 right-3 flex items-center"},l&&r.createElement("button",{className:"flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-0 bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-500 dark:text-gray-800",onClick:()=>{n(""),o.current.focus()}},"X")))}function b(e){let{message:t}=e;const{content:a,message_type:l}=t;return r.createElement(r.Fragment,null,"human"===l&&r.createElement("div",{className:"chatbubble_user max-w-md self-end whitespace-pre-line rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"mb-0 text-lg"},a)),"tool"===l&&r.createElement("div",{className:"chatbubble_tool max-w-md self-start whitespace-pre-line rounded-lg border-0 bg-gray-50 px-4 py-2 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"text-md mb-0 text-gray-700 dark:text-gray-300"},"*",a,"*")),"jelly"===l&&r.createElement("div",{className:"chatbubble_jelly max-w-md self-start whitespace-pre-line rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"mb-0 text-lg"},a)))}function y(e){let{disabled:t,onSubmit:a}=e;return r.createElement("button",{className:"sendButton w-full cursor-pointer rounded-lg border-none p-4 text-lg text-white outline-none",onClick:a,disabled:t},r.createElement(s.Z,null,"JellyChat.Button"))}function p(){return r.createElement(n.Z,{className:"absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-50 font-bold shadow-md dark:bg-gray-800",to:"/docs/auto/JellyChat"},"?")}function h(){return r.createElement("div",{className:"jellyChatBeta absolute left-0 top-0 h-32 w-32 drop-shadow-md"})}function f(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"chatbubble_user max-w-md animate-pulse self-end rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"text-md mb-0 text-transparent dark:text-transparent"},"Hey, I'm Bob.")),r.createElement("div",{className:"chatbubble_tool animate-pulse self-start rounded-lg border-0 bg-gray-50 px-4 py-2 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"text-md mb-0 text-transparent dark:text-transparent"},"This is a tool.")),r.createElement("div",{className:"chatbubble_jelly animate-pulse self-start rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"text-md mb-0 text-transparent dark:text-transparent"},"Hello Bob, I'm Jelly.")),r.createElement("div",{className:"chatbubble_user max-w-md animate-pulse self-end rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"text-md mb-0 text-transparent dark:text-transparent"},"Hey, I'm Bob. And you are Jelly.")),r.createElement("div",{className:"chatbubble_jelly animate-pulse self-start rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800"},r.createElement("p",{className:"text-md mb-0 text-transparent dark:text-transparent"},"True! True! True! True! True! True! True! True!")))}function x(e){let{onRetry:t}=e;return r.createElement("div",{className:"flex grow flex-col items-center justify-center"},r.createElement("div",{className:"flex flex-col items-center rounded-md bg-slate-100 p-6 dark:bg-slate-600"},r.createElement("p",{className:"text-center text-lg"},r.createElement(s.Z,null,"JellyChat.Error")),r.createElement("button",{className:"cursor-pointer rounded-md border-none bg-slate-300 p-4 text-base transition-colors hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-800",onClick:t},r.createElement(s.Z,null,"JellyChat.Retry"))))}}}]);