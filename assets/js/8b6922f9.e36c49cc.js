"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[19],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l="Breaking Changes w/ Lua",i={unversionedId:"breaking-changes-lua",id:"breaking-changes-lua",title:"Breaking Changes w/ Lua",description:"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a",source:"@site/src/docs/breaking-changes-lua.md",sourceDirName:".",slug:"/breaking-changes-lua",permalink:"/breaking-changes-lua",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Examples",permalink:"/examples"}},s={},c=[{value:"NEQ Operator: <code>~=</code> vs <code>!=</code>",id:"neq-operator--vs-",level:2},{value:"Local Functions by Default",id:"local-functions-by-default",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"breaking-changes-w-lua"},"Breaking Changes w/ Lua"),(0,r.kt)("p",null,"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a\ncouple of necessary breaking changes."),(0,r.kt)("h2",{id:"neq-operator--vs-"},"NEQ Operator: ",(0,r.kt)("inlineCode",{parentName:"h2"},"~=")," vs ",(0,r.kt)("inlineCode",{parentName:"h2"},"!=")),(0,r.kt)("p",null,"In Erde, the NEQ operator uses ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," instead of Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"~="),". This is mainly\nbecause Erde keeps ",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.3/manual.html#3.4.2"},"Lua's bit operators"),"\nand allows for operator assignments w/ these operators. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," is\nalready taken by the bitwise exclusive OR operator assignment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"local x = 0b101\nx ~= 0b011\nprint(x) -- 0b110\n")),(0,r.kt)("p",null,"Furthermore, Lua reserves the unary ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," operator token for the bitwise unary NOT\noperator. This causes a problem if we try to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," from Lua, since the\nmost natural token for the logical unary NOT (that would replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"not"),"\nkeyword in Lua) would also be ",(0,r.kt)("inlineCode",{parentName:"p"},"~"),"."),(0,r.kt)("p",null,"Although it was a breaking change I did not want to make (as I've actually grown\nfond of the ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," token), these token collisions combined with the fact that\nalmost all other languages use ",(0,r.kt)("inlineCode",{parentName:"p"},"!="),", were enough to convince me that it would be\nbest to simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," for the NEQ operator."),(0,r.kt)("h2",{id:"local-functions-by-default"},"Local Functions by Default"),(0,r.kt)("p",null,"In Lua, everything is global by default. Since the function declaration syntax\nin Lua is simply syntactic sugar for assigning an anonymous function to a label,\nthis means that the following creates a global function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function myFunction()\n  print('hello world')\nend\n\n-- equivalent to:\nmyFunction = function()\n  print('hello world')\nend\n")),(0,r.kt)("p",null,"This is an ",(0,r.kt)("strong",{parentName:"p"},"extremely")," common mistake in Lua, especially to those newer to the\nlanguage (I ",(0,r.kt)("em",{parentName:"p"},"still")," forget this occasionally). To accomodate for this, function\ndeclarations in Erde create local functions by default. Thus the following are\nequivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Lua"',title:'"Lua"'},"local function myFunction()\n  print('hello world')\nend\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde",metastring:'title="Erde"',title:'"Erde"'},"function myFunction() {\n  print('hello world')\n}\n")))}p.isMDXComponent=!0}}]);