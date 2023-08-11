"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[19],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="Breaking Changes w/ Lua",s={unversionedId:"breaking-changes-lua",id:"breaking-changes-lua",title:"Breaking Changes w/ Lua",description:"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a",source:"@site/src/docs/breaking-changes-lua.md",sourceDirName:".",slug:"/breaking-changes-lua",permalink:"/breaking-changes-lua",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reference",permalink:"/reference"},next:{title:"Error Rewriting",permalink:"/error-rewriting"}},l={},p=[{value:"NEQ Operator: <code>~=</code> vs <code>!=</code>",id:"neq-operator--vs-",level:2},{value:"Function Call Parentheses",id:"function-call-parentheses",level:2},{value:"Significant Whitespace for Ambiguous Syntax",id:"significant-whitespace-for-ambiguous-syntax",level:2},{value:"Semicolons in Table Constructors",id:"semicolons-in-table-constructors",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"breaking-changes-w-lua"},"Breaking Changes w/ Lua"),(0,r.kt)("p",null,"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a\ncouple of minor breaking changes."),(0,r.kt)("h2",{id:"neq-operator--vs-"},"NEQ Operator: ",(0,r.kt)("inlineCode",{parentName:"h2"},"~=")," vs ",(0,r.kt)("inlineCode",{parentName:"h2"},"!=")),(0,r.kt)("p",null,"In Erde, the NEQ operator uses ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," instead of Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"~="),". This is mainly\nbecause Erde keeps ",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.3/manual.html#3.4.2"},"Lua's bit operators"),"\nand allows for operator assignments w/ these operators. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," is\nalready taken by the bitwise exclusive OR operator assignment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"local x = 5 -- 0b101\nx ~= 3 -- 0b011\nprint(x) -- 6 (0b110)\n")),(0,r.kt)("p",null,"Additionally, if we try to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," from Lua, the most natural token for the\nlogical unary NOT (that would replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," keyword in Lua) would be ",(0,r.kt)("inlineCode",{parentName:"p"},"~"),".\nHowever, Lua already reserves the unary ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," operator token for the bitwise\nunary NOT operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local x = 5 -- 0b101\nprint(~x) -- 2 (0b010)\n")),(0,r.kt)("p",null,"If Erde finds a ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," token being used as a binary operator, it will throw an\nerror, suggesting the ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," operator instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"if x ~= nil {\n  ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"unexpected token '~=', did you mean '!='?\n")),(0,r.kt)("h2",{id:"function-call-parentheses"},"Function Call Parentheses"),(0,r.kt)("p",null,"In Lua, function call parentheses are optional when there is only one argument\nand it is either a string literal or table constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'print "my message"\nprint { message = "my table" }\n')),(0,r.kt)("p",null,"Erde does ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"not"))," support this syntax, that is, function calls always require\nparentheses. This forces consistency not only across the Erde projects, but also\nwith many other programming languages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'print("my message")\nprint({ message = "my table" })\n')),(0,r.kt)("h2",{id:"significant-whitespace-for-ambiguous-syntax"},"Significant Whitespace for Ambiguous Syntax"),(0,r.kt)("p",null,"In Lua, there is an infamous ambiguous syntax involving\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Immediately_invoked_function_expression"},"immediately invoked function expressions (IIFE)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local x = y\n(function() print('hello world') end)()\n\n-- can be interpreted as either:\nlocal x = y;\n(function() print('hello world') end)()\n\n-- or:\nlocal x = y(function() print('hello world') end)()\n")),(0,r.kt)("p",null,"Lua requires semicolons to differentiate these statements. You can still use\nsemicolons in Erde, but Erde will also infer the user's intention based on the\npresence of newlines. If there is a newline before the IIFE, it is parsed as a\nseparate statement. Otherwise, it is parsed as a chained function call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"-- parsed as two separate statements\nlocal x = y\n(() -> print('hello world'))()\n\n-- parsed as one statement (chained function calls)\nlocal x = y(() -> print('hello world'))()\n")),(0,r.kt)("h2",{id:"semicolons-in-table-constructors"},"Semicolons in Table Constructors"),(0,r.kt)("p",null,"Lua allows for semicolons in table constructors, which,\n",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/3.6.html"},"according to the docs"),",\nis usually used to delimit different sections in a constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local x = { x = 10, y = 45; 'one', 'two', 'three' }\n")),(0,r.kt)("p",null,"Erde does ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"not"))," support this syntax, as it not only causes inconsistencies\nin table constructor delimiters, but is also quite unreadable, since many are\nnot even aware that such syntax is valid Lua."))}u.isMDXComponent=!0}}]);