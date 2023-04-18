"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[19],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},o="Breaking Changes w/ Lua",i={unversionedId:"breaking-changes-lua",id:"breaking-changes-lua",title:"Breaking Changes w/ Lua",description:"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a",source:"@site/src/docs/breaking-changes-lua.md",sourceDirName:".",slug:"/breaking-changes-lua",permalink:"/breaking-changes-lua",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"API",permalink:"/api"},next:{title:"Examples",permalink:"/examples"}},s={},c=[{value:"NEQ Operator: <code>~=</code> vs <code>!=</code>",id:"neq-operator--vs-",level:2},{value:"Function Call Parentheses",id:"function-call-parentheses",level:2},{value:"Local Functions by Default",id:"local-functions-by-default",level:2},{value:"Significant Whitespace for Ambiguous Syntax",id:"significant-whitespace-for-ambiguous-syntax",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"breaking-changes-w-lua"},"Breaking Changes w/ Lua"),(0,r.kt)("p",null,"While Erde attempts to keep most core behaviors consistent w/ Lua, there are a\ncouple of breaking changes."),(0,r.kt)("h2",{id:"neq-operator--vs-"},"NEQ Operator: ",(0,r.kt)("inlineCode",{parentName:"h2"},"~=")," vs ",(0,r.kt)("inlineCode",{parentName:"h2"},"!=")),(0,r.kt)("p",null,"In Erde, the NEQ operator uses ",(0,r.kt)("inlineCode",{parentName:"p"},"!=")," instead of Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"~="),". This is mainly\nbecause Erde keeps ",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.3/manual.html#3.4.2"},"Lua's bit operators"),"\nand allows for operator assignments w/ these operators. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," is\nalready taken by the bitwise exclusive OR operator assignment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"local x = 5 -- 0b101\nx ~= 3 -- 0b011\nprint(x) -- 6 (0b110)\n")),(0,r.kt)("p",null,"Additionally, if we try to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"~=")," from Lua, the most natural token for the\nlogical unary NOT (that would replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"not")," keyword in Lua) would be ",(0,r.kt)("inlineCode",{parentName:"p"},"~"),".\nHowever, Lua already reserves the unary ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," operator token for the bitwise\nunary NOT operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local x = 5 -- 0b101\nprint(~x) -- 2 (0b010)\n")),(0,r.kt)("h2",{id:"function-call-parentheses"},"Function Call Parentheses"),(0,r.kt)("p",null,"In Lua, function call parentheses are optional when there is only one argument\nand it is either a string literal or table constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'print "my message"\nprint { message = "my table" }\n')),(0,r.kt)("p",null,"Erde does ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"not"))," support this syntax, that is, function calls always require\nparentheses. This forces consistency not only across the Erde projects, but also\nwith many other programming languages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'print("my message")\nprint({ message = "my table" })\n')),(0,r.kt)("h2",{id:"local-functions-by-default"},"Local Functions by Default"),(0,r.kt)("p",null,"In Lua, all variables are global by default. Since the function declaration\nsyntax in Lua is simply syntactic sugar for assigning an anonymous function to\na label, this means that the following creates a global function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Lua"',title:'"Lua"'},"function myFunction()\n  print('hello world')\nend\n\n-- equivalent to:\nmyFunction = function()\n  print('hello world')\nend\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"extremely")," common mistake in Lua is to accidentally create a global\nfunction instead of a local one, especially to those newer to the language\n(I ",(0,r.kt)("em",{parentName:"p"},"still")," forget this occasionally). To accomodate for this, function\ndeclarations in Erde create local functions by default. Thus the following are\nequivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Lua"',title:'"Lua"'},"local function myFunction()\n  print('hello world')\nend\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde",metastring:'title="Erde"',title:'"Erde"'},"function myFunction() {\n  print('hello world')\n}\n")),(0,r.kt)("p",null,"Global functions can still be created in Erde using ",(0,r.kt)("inlineCode",{parentName:"p"},"global"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"global function myGlobalFunction() {\n  print('hello world')\n}\n")),(0,r.kt)("h2",{id:"significant-whitespace-for-ambiguous-syntax"},"Significant Whitespace for Ambiguous Syntax"),(0,r.kt)("p",null,"In Lua, there is a well-known ambiguous syntax involving\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Immediately_invoked_function_expression"},"immediately invoked function expressions (iife)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local x = y\n(function() print('hello world') end)()\n\n-- can be interpreted as either:\nlocal x = y;\n(function() print('hello world') end)()\n\n-- or:\nlocal x = y(function() print('hello world') end)()\n")),(0,r.kt)("p",null,"Lua uses semicolons to differentiate these statements. You can still use\nsemicolons in Erde, but Erde will also infer the intention based on the presence\nof newlines. If there is a newline before the iife, it is parsed as a separate\nstatement, otherwise it is parsed as a function call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-erde"},"-- parsed as two separate statements\nlocal x = y\n(() -> print('hello world'))()\n\n-- parsed as one statement (back-to-back function calls)\nlocal x = y(() -> print('hello world'))()\n")))}p.isMDXComponent=!0}}]);