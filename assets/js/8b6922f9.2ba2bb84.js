"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[19],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},l="Breaking Changes w/ Lua",i={unversionedId:"breaking-changes-lua",id:"breaking-changes-lua",title:"Breaking Changes w/ Lua",description:"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a",source:"@site/src/docs/breaking-changes-lua.md",sourceDirName:".",slug:"/breaking-changes-lua",permalink:"/breaking-changes-lua",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Examples",permalink:"/examples"}},s={},c=[{value:"Neq Operator: <code>~=</code> vs <code>!=</code>",id:"neq-operator--vs-",level:2},{value:"Local Functions by Default",id:"local-functions-by-default",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"breaking-changes-w-lua"},"Breaking Changes w/ Lua"),(0,r.kt)("p",null,"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a\ncouple of necessary breaking changes."),(0,r.kt)("h2",{id:"neq-operator--vs-"},"Neq Operator: ",(0,r.kt)("inlineCode",{parentName:"h2"},"~=")," vs ",(0,r.kt)("inlineCode",{parentName:"h2"},"!=")),(0,r.kt)("p",null,"In Erde, the neq operator uses ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," instead of Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"~="),". This is mainly\nbecause Erde keeps ",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.3/manual.html#3.4.2"},"Lua's bit operators"),"\nand allows for operator assignments w/ these operators. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," is\nalready taken by the bitwise exclusive OR operator assignment. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"local x = 0b101\nx ~= 0b011\nprint(x) -- 0b110\n")),(0,r.kt)("p",null,"Furthermore, Lua reserves the unary ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," token for the bitwise unary NOT\noperator. This causes a problem if we try to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," from Lua, since the\nmost natural token for the logical unary NOT (that would replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"not"),"\nkeyword in Lua) would also be ",(0,r.kt)("inlineCode",{parentName:"p"},"~"),"."),(0,r.kt)("p",null,"Although it was a breaking change I did not want to make, these token collisions,\ncombined with the fact that almost all other languages use ",(0,r.kt)("inlineCode",{parentName:"p"},"!="),", were enough to\nconvince me that it would be best to simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," for the neq operator."),(0,r.kt)("h2",{id:"local-functions-by-default"},"Local Functions by Default"),(0,r.kt)("p",null,"In Lua, everything is global by default. Since the function declaration syntax\nin Lua is simply syntactic sugar for assigning an anonymous function to a label,\nthis means that the following creates a global function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function myFunction()\n  print('hello world')\nend\n\n-- equivalent to:\nmyFunction = function()\n  print('hello world')\nend\n")),(0,r.kt)("p",null,"This is an ",(0,r.kt)("strong",{parentName:"p"},"extremely")," common mistake in Lua, especially to those newer to the\nlanguage (I ",(0,r.kt)("em",{parentName:"p"},"still")," forget this occasionally). To accomodate for this, function\ndeclarations in Erde create local functions by default. Thus the following are\nequivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function myFunction()\n  print('hello world')\nend\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"function myFunction() {\n  print('hello world')\n}\n")))}p.isMDXComponent=!0}}]);