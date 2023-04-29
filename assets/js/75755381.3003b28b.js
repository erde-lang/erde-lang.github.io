"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[432],{3905:(e,t,g)=>{g.d(t,{Zo:()=>C,kt:()=>m});var a=g(7294);function I(e,t,g){return t in e?Object.defineProperty(e,t,{value:g,enumerable:!0,configurable:!0,writable:!0}):e[t]=g,e}function l(e,t){var g=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),g.push.apply(g,a)}return g}function n(e){for(var t=1;t<arguments.length;t++){var g=null!=arguments[t]?arguments[t]:{};t%2?l(Object(g),!0).forEach((function(t){I(e,t,g[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(g)):l(Object(g)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(g,t))}))}return e}function r(e,t){if(null==e)return{};var g,a,I=function(e,t){if(null==e)return{};var g,a,I={},l=Object.keys(e);for(a=0;a<l.length;a++)g=l[a],t.indexOf(g)>=0||(I[g]=e[g]);return I}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)g=l[a],t.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(e,g)&&(I[g]=e[g])}return I}var i=a.createContext({}),o=function(e){var t=a.useContext(i),g=t;return e&&(g="function"==typeof e?e(t):n(n({},t),e)),g},C=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var g=e.components,I=e.mdxType,l=e.originalType,i=e.parentName,C=r(e,["components","mdxType","originalType","parentName"]),A=o(g),m=I,s=A["".concat(i,".").concat(m)]||A[m]||c[m]||l;return g?a.createElement(s,n(n({ref:t},C),{},{components:g})):a.createElement(s,n({ref:t},C))}));function m(e,t){var g=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var l=g.length,n=new Array(l);n[0]=A;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:I,n[1]=r;for(var o=2;o<l;o++)n[o]=g[o];return a.createElement.apply(null,n)}return a.createElement.apply(null,g)}A.displayName="MDXCreateElement"},2235:(e,t,g)=>{g.r(t),g.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=g(7462),I=(g(7294),g(3905));const l={title:"Introduction",hide_title:!0,slug:"/"},n=void 0,r={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Erde Logo",source:"@site/src/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",hide_title:!0,slug:"/"},sidebar:"sidebar",next:{title:"Getting Started",permalink:"/getting-started"}},i={},o=[{value:"Examples",id:"examples",level:2},{value:"Assignment Operators",id:"assignment-operators",level:3},{value:"Parameter Defaults",id:"parameter-defaults",level:3},{value:"String Interpolation",id:"string-interpolation",level:3},{value:"Destructuring",id:"destructuring",level:3},{value:"Core Principles",id:"core-principles",level:2},{value:"Close Mapping to Lua",id:"close-mapping-to-lua",level:3},{value:"Minimalistic",id:"minimalistic",level:3},{value:"Stable",id:"stable",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why <em>another</em> language that compiles to Lua?",id:"why-another-language-that-compiles-to-lua",level:3},{value:"Why symbols over keywords?",id:"why-symbols-over-keywords",level:3},{value:"Should I use Erde?",id:"should-i-use-erde",level:3}],C={toc:o};function c(e){let{components:t,...l}=e;return(0,I.kt)("wrapper",(0,a.Z)({},C,l,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("center",null,(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Erde Logo",src:g(4062).Z,width:"256",height:"256"})),(0,I.kt)("h1",{id:"erde"},"Erde")),(0,I.kt)("br",null),(0,I.kt)("p",null,"Erde is a programming language that compiles to Lua. It uses a more symbol\nfavored syntax (similar to languages such as Rust, Golang, JavaScript, etc) and\nhas been designed to map very closely to Lua."),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-erde"},"local function sumEvens(...numbers) {\n  local sum = 0\n\n  for _, n in ipairs(numbers) {\n    if n % 2 == 0 {\n      sum += n\n    }\n  }\n\n  return sum\n}\n\nprint(sumEvens(1, 3, 5, 7))             -- 0\nprint(sumEvens(2, 4, 6, 8))             -- 20\nprint(sumEvens(1, 2, 3, 4, 5, 6, 7, 8)) -- 20\n")),(0,I.kt)("p",null,"Erde files may be compiled, run on the command line (using the ",(0,I.kt)("inlineCode",{parentName:"p"},"erde")," CLI), or\nloaded directly from Lua scripts using the Erde package loader. The latter is\nparticularly useful if you don't want to keep recompiling code or if you want\nto try out Erde on an existing codebase (incremental adoption)."),(0,I.kt)("p",null,"Erde runs on all major Lua platforms (Lua 5.1 - 5.4 and LuaJIT) and can generate\nLua code for multiple target platforms. For example, targeting ",(0,I.kt)("inlineCode",{parentName:"p"},"5.1+")," will\ngenerate code that runs on all major Lua platforms, while targeting ",(0,I.kt)("inlineCode",{parentName:"p"},"5.3")," will\ngenerate code that is only guaranteed to work on Lua5.3 (may work on other\nplatforms as well, but not guaranteed). The currently supported targets are:"),(0,I.kt)("center",null,"5.1 | 5.1+ | 5.2 |  5.2+ |  5.3 |  5.3+ |  5.4 |  5.4+ |  jit (LuaJIT)"),(0,I.kt)("br",null),(0,I.kt)("p",null,"Erde will make minor adjustments, optimizations and additional error checks\ndepending on the targeted version. By default Erde targets ",(0,I.kt)("inlineCode",{parentName:"p"},"5.1+"),"."),(0,I.kt)("h2",{id:"examples"},"Examples"),(0,I.kt)("p",null,"See the ",(0,I.kt)("a",{parentName:"p",href:"/playground"},"playground")," for a full list of interactable examples."),(0,I.kt)("h3",{id:"assignment-operators"},"Assignment Operators"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-erde"},"local a = 1\na += 1\na *= 5\nprint(a) -- 10\n")),(0,I.kt)("h3",{id:"parameter-defaults"},"Parameter Defaults"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-erde"},"function greet(message = 'hello world') {\n  print(message)\n}\n\ngreet() -- hello world\ngreet('goodbye world') -- goodbye world\n")),(0,I.kt)("h3",{id:"string-interpolation"},"String Interpolation"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-erde"},"local msg = 'world'\nprint(\"hello {msg}\") -- hello world\n")),(0,I.kt)("h3",{id:"destructuring"},"Destructuring"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-erde"},"-- Map destructuring\nlocal { map, filter, reduce  } = require('pl.tablex')\n\n-- Array destructuring\nlocal myobject = { 'hello', 'world' }\nlocal [ msg1, msg2 ] = myobject\nprint(msg1) -- hello\nprint(msg2) -- world\n")),(0,I.kt)("h2",{id:"core-principles"},"Core Principles"),(0,I.kt)("h3",{id:"close-mapping-to-lua"},"Close Mapping to Lua"),(0,I.kt)("p",null,"Erde was designed with the belief that learning how to program in Erde should\nteach you how to program in Lua and vice-versa. For those already familiar w/\nLua, this provides an extremely low barrier to entry while for those newer to\nLua, it means low commitment, as it will be quite easy to switch to vanilla Lua\nlater on if you realize Erde is not right for your project."),(0,I.kt)("h3",{id:"minimalistic"},"Minimalistic"),(0,I.kt)("p",null,"Although not as extreme as Lua, Erde is quite minimalistic. It only adds\nfeatures that are either already present in most programming languages\n(ex. parameter defaults) or are relatively simple yet powerful (ex. destructuring)."),(0,I.kt)("p",null,"Features whose uses are too niche will not be considered for the language,\nregardless of how convenient they may make certain situations. This keeps the\nlanguage simple (like Lua) and lowers the barrier to entry."),(0,I.kt)("h3",{id:"stable"},"Stable"),(0,I.kt)("p",null,"After version 1.0-1, Erde will be relatively stable, with plans to only add\n",(0,I.kt)("strong",{parentName:"p"},"at most")," one new language feature per year (perhaps even less on average).\nInstead, efforts on the language will be applied to bug fixes, developer\nexperience (DX), and tooling."),(0,I.kt)("h2",{id:"faq"},"FAQ"),(0,I.kt)("h3",{id:"why-another-language-that-compiles-to-lua"},"Why ",(0,I.kt)("em",{parentName:"h3"},"another")," language that compiles to Lua?"),(0,I.kt)("p",null,"Before writing Erde, most of the languages that compiled to Lua were either\nunmaintained, ill-documented, or too immature. The languages that didn't fall\ninto any of these categories (such as ",(0,I.kt)("a",{parentName:"p",href:"https://moonscript.org"},"moonscript"),"\nand ",(0,I.kt)("a",{parentName:"p",href:"https://fennel-lang.org"},"fennel"),") have syntax or design patterns that\ndiverge greatly from Lua."),(0,I.kt)("p",null,"Ultimately, I wanted a language that I would ",(0,I.kt)("em",{parentName:"p"},"almost already know")," as a Lua\ndeveloper that addressed some of Lua's shortcomings (such as the lack of\nparameter defaults and assignment operators). No such language existed at the\ntime, so I decided to create one."),(0,I.kt)("h3",{id:"why-symbols-over-keywords"},"Why symbols over keywords?"),(0,I.kt)("p",null,"Many of the commonly used programming languages today tend to use symbols over\nkeywords (Rust, Golang, Javascript, etc). This is meant to make Erde more\napproachable for those coming from languages other than Lua."),(0,I.kt)("p",null,"I also personally prefer the syntax of these languages, as using keywords\neverywhere tends to lead to somewhat noisy code and does not play as nicely with\ntext editors."),(0,I.kt)("h3",{id:"should-i-use-erde"},"Should I use Erde?"),(0,I.kt)("p",null,"Although it has its shortcomings and might feel somewhat quirky at first, Lua is\ngenuinely an amazingly designed language. If you are only using Lua lightly,\nthen working with Erde will probably incur more overhead than it's worth.\nHowever, if you are working with Lua a lot (or simply prefer the syntax of Erde),\nthen by all means feel free to try it out!"))}c.isMDXComponent=!0},4062:(e,t,g)=>{g.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMjU2IgogICBoZWlnaHQ9IjI1NiIKICAgdmlld0JveD0iMCAwIDY3LjczMzMzMiA2Ny43MzMzMzEiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMSAoYzRlOGY5ZWQ3NCwgMjAyMS0wNS0yNCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ28uc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzciCiAgICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICAgIGJvcmRlcmNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6bG9ja2d1aWRlcz0iZmFsc2UiCiAgICAgdW5pdHM9InB4IgogICAgIHdpZHRoPSIxMjhweCIKICAgICBpbmtzY2FwZTp6b29tPSIyLjE3OTU1MTUiCiAgICAgaW5rc2NhcGU6Y3g9IjE1My45MzA3NSIKICAgICBpbmtzY2FwZTpjeT0iMTIzLjY0OTI5IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDEwIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIxOTMwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSI2MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImcxODA0OCIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiI+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDEyMDg3Ij4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzNkMDBiYTtzdG9wLW9wYWNpdHk6MSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDEyMDgzIiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMGUwMDRhO3N0b3Atb3BhY2l0eToxIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIGlkPSJzdG9wMTIwODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDExODA1Ij4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMTgwNyIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTAuNTEzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Ojg0LjEwNjgsIDIxLjAyNjcsIDEwLjUxMzMsIDIxLjAyNjc7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgICAgIGQ9Im0gMzMuODY2NjY2LDExLjc5OTc5NiBhIDIyLjA2NjY1NCwyMi4wNjY2NTQgMCAwIDAgLTIyLjA2Njg3LDIyLjA2Njg3IDIyLjA2NjY1NCwyMi4wNjY2NTQgMCAwIDAgMjIuMDY2ODcsMjIuMDY2ODY4IDIyLjA2NjY1NCwyMi4wNjY2NTQgMCAwIDAgMjIuMDY2ODY4LC0yMi4wNjY4NjggMjIuMDY2NjU0LDIyLjA2NjY1NCAwIDAgMCAtMjIuMDY2ODY4LC0yMi4wNjY4NyB6IG0gOC45ODgwODEsNy45MjE5OTcgYSA0Ljk4MDY1MTUsNC45ODA2NTE1IDAgMCAxIDQuOTgxMDkzLDQuOTgxMDkxIDQuOTgwNjUxNSw0Ljk4MDY1MTUgMCAwIDEgLTQuOTgxMDkzLDQuOTgwNTc0IDQuOTgwNjUxNSw0Ljk4MDY1MTUgMCAwIDEgLTQuOTgwNTc1LC00Ljk4MDU3NCA0Ljk4MDY1MTUsNC45ODA2NTE1IDAgMCAxIDQuOTgwNTc1LC00Ljk4MTA5MSB6IiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50MTIwODciCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxMjA4OSIKICAgICAgIHgxPSI2MC4wMDI4MzEiCiAgICAgICB5MT0iNy44MDM5NDk4IgogICAgICAgeDI9IjUxLjkzMzg2OCIKICAgICAgIHkyPSIxNi40NjE4NDUiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgLz4KICAgIDxjbGlwUGF0aAogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBpZD0iY2xpcFBhdGgxMjMyNCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTIzMjYiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEwLjU0NzE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo4NC4zNzY5LCAyMS4wOTQyLCAxMC41NDcxLCAyMS4wOTQyO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgICBkPSJNIDI3LjEzNDg5LDIwLjU4NTc1MiBBIDIwLjkxNzU5NywyMy40Mjg1OCA0NSAwIDAgLTEuNzg2MTQxMiwzNi4wMjExMjUgMjAuOTE3NTk3LDIzLjQyODU4IDQ1IDAgMCAxMC40NjI4MzgsNjMuMzc0NjAyIDIwLjkxNzU5NywyMy40Mjg1OCA0NSAwIDAgMzkuMzgzODY3LDQ3LjkzOTIzIDIwLjkxNzU5NywyMy40Mjg1OCA0NSAwIDAgMjcuMTM0ODksMjAuNTg1NzUyIFogbSA1LjM5MTg3MSwxMC4xMDc3NzggYSA0LjcyMTI5ODQsNS4yODgwNTEgNDUgMCAxIDIuNzY0OTI5LDYuMTc0NDIzIDQuNzIxMjk4NCw1LjI4ODA1MSA0NSAwIDEgLTYuNTI4MDY4LDMuNDgzNjggNC43MjEyOTg0LDUuMjg4MDUxIDQ1IDAgMSAtMi43NjQ2NDEsLTYuMTczNzgxIDQuNzIxMjk4NCw1LjI4ODA1MSA0NSAwIDEgNi41Mjc3OCwtMy40ODQzMjIgeiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEyMDg3IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50MTQyMzMiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHgxPSI2MC4wMDI4MzEiCiAgICAgICB5MT0iNy44MDM5NDk4IgogICAgICAgeDI9IjUxLjkzMzg2OCIKICAgICAgIHkyPSIxNi40NjE4NDUiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDMuNTE4MjY1OSwwLDAsMy41MTgyNjU5LC0xNjIuNzk1OCwtNy43ODQ3NzYpIiAvPgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDE4MDIwIj4KICAgICAgPGNpcmNsZQogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxMC41MDE0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6ODQuMDExMywgMjEuMDAyOCwgMTAuNTAxNCwgMjEuMDAyODtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIKICAgICAgICAgaWQ9ImNpcmNsZTE4MDIyIgogICAgICAgICBjeD0iMzMuODY2NjY1IgogICAgICAgICBjeT0iMzMuODY2NjY1IgogICAgICAgICByPSIyMi4wNDE1NjMiCiAgICAgICAgIGlua3NjYXBlOmxhYmVsPSJwbGFuZXQiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDE3NzAiPgogICAgICA8Y2lyY2xlCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEwLjUwMTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo4NC4wMTEzLCAyMS4wMDI4LCAxMC41MDE0LCAyMS4wMDI4O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgICBpZD0iY2lyY2xlMTc3MiIKICAgICAgICAgY3g9IjMzLjg2NjY2NSIKICAgICAgICAgY3k9IjMzLjg2NjY2NSIKICAgICAgICAgcj0iMjIuMDQxNTYzIgogICAgICAgICBpbmtzY2FwZTpsYWJlbD0icGxhbmV0IiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPGVsbGlwc2UKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM1ZjVmNWY7c3Ryb2tlLXdpZHRoOjIuNTA2OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjIwLjA1NTIsIDUuMDEzOCwgMi41MDY5LCA1LjAxMzg7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgICBpZD0icGF0aDMxIgogICAgICAgY3g9Ii0wLjk2MjAxOTY4IgogICAgICAgY3k9IjQ3Ljg3MjE0NyIKICAgICAgIHJ4PSIzMi4wODUyMiIKICAgICAgIHJ5PSIzMi4wOTEyNyIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNjkzMjQ4NjYsLTAuNzIwNjk4NDcsMC43MjEwODM1NiwwLjY5Mjg0ODExLDAsMCkiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0icmluZyIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQxNDIzMyk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEwLjUwMTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo4NC4wMTEzLCAyMS4wMDI4LCAxMC41MDE0LCAyMS4wMDI4O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgaWQ9ImNpcmNsZTE0MjMxIgogICAgICAgY3g9IjMzLjg2NjY2NSIKICAgICAgIGN5PSIzMy44NjY2NjUiCiAgICAgICByPSIyMi4wNDE1NjMiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0icGxhbmV0IiAvPgogICAgPGNpcmNsZQogICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDEyMDg5KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6Mi45ODQ4MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjIzLjg3ODYsIDUuOTY5NjQsIDIuOTg0ODMsIDUuOTY5NjQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgICBpZD0icGF0aDIwODYiCiAgICAgICBjeD0iNTUuODk3NTU2IgogICAgICAgY3k9IjExLjgzODYyOSIKICAgICAgIHI9IjYuMjY0ODk0IgogICAgICAgaW5rc2NhcGU6bGFiZWw9Im1vb24iIC8+CiAgICA8ZwogICAgICAgaWQ9ImcxODA0OCIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJsYW5kIgogICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTc3MCkiPgogICAgICA8cGF0aAogICAgICAgICBzdHlsZT0iZmlsbDojMjVjMzU5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2NDU4M3B4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gMjAuNTQ3MzU3LDEyLjgxOTg4NSBjIDAsMCAyMS43NTIzNzEsNS41NzA0MjYgOS41NjU1MTUsMTIuNDczNDA2IC0xMi4xODY4NTUsNi45MDI5NzkgLTQuODA2ODA3LDExLjI5MTcyNiAtMTAuMDQxNjY0LDE2LjY3MDcxNiAtNS4yMzQ4NTcsNS4zNzg5OSAtNS44NzM4NjIsNC45NTM5MzQgLTUuODczODYyLDQuOTUzOTM0IDAsMCAtMTYuMzY1OTUwMywtMjQuNTM1NTkzIDYuMzUwMDExLC0zNC4wOTgwNTYgeiIKICAgICAgICAgaWQ9InBhdGgxNzc2MiIKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMTgwMjApIiAvPgogICAgICA8Y2lyY2xlCiAgICAgICAgIHN0eWxlPSJmaWxsOiMyNWMzNTk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjQuNjM5NDg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTozNy4xMTU3LCA5LjI3ODk1LCA0LjYzOTQ4LCA5LjI3ODk1O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgICBpZD0iY2lyY2xlMTUxNCIKICAgICAgICAgY3g9IjM2Ljk1NTgyMiIKICAgICAgICAgY3k9IjQ2LjI4NTQ1NCIKICAgICAgICAgcj0iMi42NDU4MzMzIiAvPgogICAgICA8Y2lyY2xlCiAgICAgICAgIHN0eWxlPSJmaWxsOiMyNWMzNTk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE2Ljk1OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjEzNS42NzIsIDMzLjkxNzksIDE2Ljk1OSwgMzMuOTE3OTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIKICAgICAgICAgaWQ9ImNpcmNsZTE1OTYiCiAgICAgICAgIGN4PSI1My4yOTcyNiIKICAgICAgICAgY3k9IjQwLjM4ODg4NSIKICAgICAgICAgcj0iOS42NzE0ODc4IiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="}}]);