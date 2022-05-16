"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[3237],{34180:function(e,n,t){t.r(n),t.d(n,{LiveCodeBlockCore:function(){return y}});var r=t(94184),i=t.n(r),a=t(13163),l=t(59989),o=t(67294);function s(e,n){if(ResizeObserver){var t=new ResizeObserver(n);return t.observe(e),function(){return t.unobserve(e)}}window.addEventListener("resize",n);var r=new MutationObserver(n);return r.observe(e,{attributes:!0,subtree:!0}),function(){window.removeEventListener("resize",n),r.disconnect()}}var c="editor_SMFZ",d=t(85893),u={language:"lua",automaticLayout:!0,fontFamily:"Source Code Pro",fontSize:16,minimap:{enabled:!1},overviewRulerLanes:0,scrollBeyondLastLine:!1,tabSize:2,theme:"vs-light",wordWrap:"on",wrappingStrategy:"advanced"};var f=(0,o.forwardRef)((function(e,n){var t=(0,o.useState)(null),r=t[0],a=t[1],f=function(e,n){var t=(0,o.useState)(),r=t[0],i=t[1],a=JSON.stringify(null!=n?n:{});return(0,o.useEffect)((function(){e&&i(l.editor.create(e,Object.assign({},u,n)))}),[e,a]),r}(r,e.monaco);return(0,o.useEffect)((function(){"function"==typeof n?n(f):n&&(n.current=f)}),[n,f]),(0,o.useEffect)((function(){if(r&&f)return s(r,(function(){f.layout(r.getBoundingClientRect())}))}),[r,f]),(0,o.useEffect)((function(){if(e.fitHeight&&r&&f){var n=function(){var e=f.getContentHeight();r.style.height=e+"px"};f.onDidContentSizeChange(n),n()}}),[e.fitHeight,r,f]),(0,d.jsx)("div",{ref:a,className:i()(c,e.className)})})),h="tabs_r7T9",p=function(e){var n,t,r,a,l=(0,o.useState)(null!=(n=null!=(t=null!=(r=e.selectedTabId)?r:e.defaultSelectedTabId)?t:null==(a=e.tabs[0])?void 0:a.id)?n:""),s=l[0],c=l[1];return(0,o.useEffect)((function(){void 0!==e.selectedTabId&&c(e.selectedTabId)}),[e.selectedTabId]),(0,o.useEffect)((function(){s&&(null==e.onChange||e.onChange(s))}),[s]),(0,d.jsx)("ul",{className:i()(h,e.className),children:e.tabs.map((function(n){var t;return(0,d.jsx)("li",{role:"tab","aria-selected":n.id===s,children:null!=(t=n.label)?t:n.id,onClick:function(t){null==n.onClick||n.onClick(t),null==e.onChange||e.onChange(n.id),void 0===e.selectedTabId&&c(n.id)}},n.id)}))})},m={liveCodeBlock:"liveCodeBlock_jaIb",inputEditor:"inputEditor_hEcr",resultEditor:"resultEditor_IFtZ",output:"output_nmeg",horizontal:"horizontal_GPZV",results:"results_YBq5",vertical:"vertical_KIX6"},y=function(e){var n,t,r=(0,o.useState)(null!=(n=e.code)?n:""),c=r[0],u=r[1],h=(0,o.useState)(""),y=h[0],g=h[1],k=(0,o.useState)(),v=k[0],b=k[1],x=(0,o.useState)(),j=x[0],w=x[1],E=(0,o.useState)(null),O=E[0],C=E[1],L=function(){var e=(0,o.useState)({})[1];return function(){e({})}}();t=e.layout&&"responsive"!==e.layout?e.layout:O?O.clientWidth>600?"horizontal":"vertical":"horizontal",(0,o.useEffect)((function(){if(O&&(!e.layout||"responsive"===e.layout))return s(O,L)}),[O,e.layout]),(0,o.useEffect)((function(){void 0!==e.code&&v&&(v.setValue(e.code),u(e.code))}),[e.code,v]),(0,o.useEffect)((function(){null==v||v.onDidChangeModelContent((function(){u(v.getValue())}))}),[v]);var I=(0,o.useState)("output"),S=I[0],T=I[1];return(0,o.useEffect)((function(){if("output"===S)try{g(a.load(c)().toString())}catch(n){n instanceof Error&&g(n.message)}else{var e=null==j?void 0:j.getModel();if(!j||!e)return;"parsed"===S?(l.editor.setModelLanguage(e,"json"),j.setValue('{ "hello": "world" }')):("compiled"===S||"formatted"===S)&&(l.editor.setModelLanguage(e,"lua"),j.setValue('print("todo")'))}}),[j,c,S]),(0,d.jsxs)("div",{ref:C,className:i()(m.liveCodeBlock,e.className,m[t]),children:[(0,d.jsx)(f,{ref:b,className:m.inputEditor}),(0,d.jsxs)("div",{className:m.results,children:[(0,d.jsx)(p,{selectedTabId:S,onChange:function(e){T(e)},tabs:[{id:"output",label:"Output"},{id:"parsed",label:"Parsed (AST)"},{id:"compiled",label:"Compiled"},{id:"formatted",label:"Formatted"}]}),"output"===S?(0,d.jsx)("div",{className:m.output,children:y}):(0,d.jsx)(f,{ref:w,monaco:{readOnly:!0},fitHeight:"vertical"===t})]})]})}},19084:function(e,n,t){t.d(n,{h:function(){return a}});var r=t(91262),i=t(85893),a=function(e){return(0,i.jsx)(r.Z,{children:function(){var n=t(34180).LiveCodeBlockCore;return(0,i.jsx)(n,Object.assign({},e))}})}},7055:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r,i,a=t(25710),l=t(68277),o=t(94184),s=t.n(o),c=t(67294),d=["title","titleId"];function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h=function(e){var n=e.title,t=e.titleId,a=f(e,d);return c.createElement("svg",u({width:256,height:256,viewBox:"0 0 67.733 67.733",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},a),n?c.createElement("title",{id:t},n):null,c.createElement("defs",null,c.createElement("linearGradient",{id:"a"},c.createElement("stop",{style:{stopColor:"#3d00ba",stopOpacity:1},offset:0}),c.createElement("stop",{style:{stopColor:"#0e004a",stopOpacity:1},offset:1})),r||(r=c.createElement("linearGradient",{xlinkHref:"#a",id:"c",x1:60.003,y1:7.804,x2:51.934,y2:16.462,gradientUnits:"userSpaceOnUse"})),i||(i=c.createElement("linearGradient",{xlinkHref:"#a",id:"b",gradientUnits:"userSpaceOnUse",x1:60.003,y1:7.804,x2:51.934,y2:16.462,gradientTransform:"matrix(3.51827 0 0 3.51827 -162.796 -7.785)"})),c.createElement("clipPath",{clipPathUnits:"userSpaceOnUse",id:"e"},c.createElement("circle",{style:{fill:"#000",fillOpacity:1,stroke:"none",strokeWidth:10.5014,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"84.0113,21.0028,10.5014,21.0028",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:33.867,cy:33.867,r:22.042})),c.createElement("clipPath",{clipPathUnits:"userSpaceOnUse",id:"d"},c.createElement("circle",{style:{fill:"#000",fillOpacity:1,stroke:"none",strokeWidth:10.5014,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"84.0113,21.0028,10.5014,21.0028",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:33.867,cy:33.867,r:22.042}))),c.createElement("ellipse",{style:{fill:"none",fillRule:"evenodd",stroke:"#5f5f5f",strokeWidth:2.5069,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"20.0552,5.0138,2.5069,5.0138",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:-.962,cy:47.872,rx:32.085,ry:32.091,transform:"rotate(-46.112) skewX(.032)"}),c.createElement("circle",{style:{fill:"url(#b)",fillOpacity:1,stroke:"none",strokeWidth:10.5014,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"84.0113,21.0028,10.5014,21.0028",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:33.867,cy:33.867,r:22.042}),c.createElement("circle",{style:{fill:"url(#c)",fillOpacity:1,stroke:"none",strokeWidth:2.98483,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"23.8786,5.96964,2.98483,5.96964",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:55.898,cy:11.839,r:6.265}),c.createElement("g",{clipPath:"url(#d)"},c.createElement("path",{style:{fill:"#25c359",fillOpacity:1,stroke:"none",strokeWidth:".264583px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1},d:"M20.547 12.82s21.753 5.57 9.566 12.473c-12.187 6.903-4.807 11.292-10.042 16.671-5.235 5.379-5.874 4.954-5.874 4.954s-16.366-24.536 6.35-34.098z",clipPath:"url(#e)"}),c.createElement("circle",{style:{fill:"#25c359",fillOpacity:1,stroke:"none",strokeWidth:4.63948,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"37.1157,9.27895,4.63948,9.27895",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:36.956,cy:46.285,r:2.646}),c.createElement("circle",{style:{fill:"#25c359",fillOpacity:1,stroke:"none",strokeWidth:16.959,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"135.672,33.9179,16.959,33.9179",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:53.297,cy:40.389,r:9.671})))},p=t(72389),m={mobile:480,tablet:768,laptop:1024,desktop:1200},y=Object.values(m).sort((function(e,n){return e-n}));function g(){var e;return null!=(e=y.find((function(e){return window.innerWidth<e})))?e:m.desktop}var k=t(19084),v="menu_RLYY",b=t(85893),x=function(e){var n,t,r,i,a=(0,c.useState)(null!=(n=null!=(t=null!=(r=e.selectedItemId)?r:e.defaultSelectedItemId)?t:null==(i=e.items[0])?void 0:i.id)?n:""),l=a[0],o=a[1];return(0,c.useEffect)((function(){void 0!==e.selectedItemId&&o(e.selectedItemId)}),[e.selectedItemId]),(0,c.useEffect)((function(){l&&(null==e.onChange||e.onChange(l))}),[l]),(0,b.jsx)("menu",{className:s()(v,e.className),children:e.items.map((function(n){var t;return(0,b.jsx)("li",{"aria-selected":n.id===l,children:null!=(t=n.label)?t:n.id,onClick:function(t){null==n.onClick||n.onClick(t),null==e.onChange||e.onChange(n.id),void 0===e.selectedItemId&&o(n.id)}},n.id)}))})},j={features:"features_XAlT",mobile:"mobile_ZN57",featureList:"featureList__R_I",menu:"menu_RoY7",codeBlockContainer:"codeBlockContainer_jK24",codeBlock:"codeBlock_Noo0",index:"index_DGbY",buttons:"buttons_Pntg",goals:"goals_R6jz",faq:"faq_gSsK",installation:"installation_FWXo"},w=[{question:"Why not XXX (Moonscript / Fennel)?",answer:(0,b.jsxs)(b.Fragment,{children:["Unfortunately neither ",(0,b.jsx)("a",{href:"https://moonscript.org",children:"moonscript"})," ","nor ",(0,b.jsx)("a",{href:"https://fennel-lang.org",children:"fennel"})," seemed like attractive options, as I'm not a huge fan of whitespace languages nor lisp. The other options seemed to be either unmaintained or lacking features I wanted."]})},{question:"Why symbols over keywords?",answer:"\nMany of the commonly used programming languages today tend to use symbols over\nkeywords (Rust, Golang, Javascript, etc). This is meant to make Erde more \napproachable for those coming from languages other than Lua. I personally also \nfind symbols to be much more concise and readable (although this is extremely \nsubjective).\n"},{question:"Do I need Erde?",answer:"\nAbsolutely not. Lua is already an amazingly designed language. If you are only\nusing Lua lightly, then working with Erde will probably incur more overhead than\nit's worth. However, if you are working with Lua a lot (or simply prefer the\nsyntax of Erde), then by all means feel free to try it out!\n"}],E=[{id:"arrow-functions",label:"Arrow functions",example:"\nfunction map(t, callback) {\n  local copy = {}\n\n  for key, value in pairs(t) {\n    copy[key] = callback(value)\n  }\n\n  return copy\n}\n\nlocal evens = { 2, 4, 6, 8, 10 }\n\nlocal odds = map(evens, even -> {\n  return even - 1\n})\n\n-- OR with implicit return shorthand\nlocal odds = map(evens, even -> even - 1)\n"},{id:"destructuring",label:"Table destructuring",example:"\nlocal myTable = {\n  myValue = 5,\n  'child1',\n  'child2',\n}\n\n-- Normal destruct\nlocal { myValue } = myTable\n\n-- w/ array element destructs\nlocal { myValue, [ firstChild, secondChild ] } = myTable\n\n-- w/ only array destructs\nlocal [ firstChild, secondChild ] = myTable\n"},{id:"optional-chaining",label:"Optional chaining",example:"\nlocal nilTable = nil\n\nprint(nilTable?.test)\nprint(nilTable?[1])\nprint(nilTable?())\n\n-- Optional chaining also works for assignments!\nnilTable?.test = 'goodbye world'\nprint(nilTable?.test)\n\nlocal myTable = { test = 'hello world' }\n\nprint(myTable?.test)\n\nmyTable?.test = 'goodbye world'\nprint(myTable?.test)\n"},{id:"assignment-ops",label:"Assignment operators",example:"\nlocal a = 1\nprint(a)\na += 1\nprint(a)\na *= 5\nprint(a)\n"},{id:"param-defaults",label:"Parameter defaults",example:"\nfunction greet(message = 'hello world') {\n  print(message)\n}\n\ngreet()\ngreet('goodbye world')\n"},{id:"continue",label:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("code",{children:"continue"})," keyword"]}),example:"\nfunction printOdds(...) {\n  for _, value in ipairs({ ... }) {\n    if value % 2 == 0 {\n      continue\n    }\n\n    print(value)\n  }\n}\n\nprintOdds(1, 2, 3, 4, 5)\n"},{id:"interpolation",label:"String interpolation",example:"\nlocal myValue = 4\n\n-- Can interpolate any string\nprint('myValue is {myValue}')\nprint(\"myValue is {myValue}\")\nprint([[myValue is {myValue}]])\n\n-- Can escape braces for literal print\nprint('A literal brace: \\{')\n"},{id:"do-expressions",label:"do expressions",example:"\nlocal myVar = do {\n  local tmpVar = 4\n  return tmpVar + 3\n}\n\nprint(myVar)\nprint(tmpVar)\n"},{id:"try-catch",label:"Try catch statement",example:"\ntry {\n  print(1 / \"hello\")\n} catch (err) {\n  print('Caught: ', err)\n}\n"}],O=function(){var e=function(){var e=(0,p.Z)(),n=(0,c.useState)(e?g():m.desktop),t=n[0],r=n[1];return(0,c.useEffect)((function(){if(e){var n=function(){r(g())};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}}),[e]),t}(),n=(0,c.useState)(E[0].id),t=n[0],r=n[1],i=E.find((function(e){return e.id===t}));return e<m.laptop?(0,b.jsxs)("section",{className:s()(j.features,j.mobile),children:[(0,b.jsx)("h2",{children:"Features"}),(0,b.jsxs)("ul",{children:[E.map((function(e){return(0,b.jsx)("li",{children:e.label},e.id)})),(0,b.jsx)("li",{children:"and more!"})]})]}):(0,b.jsxs)("section",{className:s()(j.features,j.laptop),children:[(0,b.jsxs)("div",{className:j.featureList,children:[(0,b.jsx)("h2",{children:"Features"}),(0,b.jsx)(x,{className:j.menu,selectedItemId:t,onChange:function(e){r(e)},items:E.map((function(e){return{id:e.id,label:e.label}}))}),(0,b.jsx)("div",{children:"and more!"})]}),(0,b.jsx)("div",{className:j.codeBlockContainer,children:(0,b.jsx)(k.h,{className:j.codeBlock,code:null==i?void 0:i.example.trim(),layout:"vertical"})})]})},C=function(){return(0,b.jsxs)(l.Z,{pageClassName:j.index,children:[(0,b.jsxs)("header",{children:[(0,b.jsx)(h,{}),(0,b.jsx)("h1",{children:"Erde"}),(0,b.jsx)("p",{children:"A modern Lua dialect"})]}),(0,b.jsxs)("main",{children:[(0,b.jsx)("section",{children:"Erde is an expressive programming language that compiles to Lua. Syntactically it favors symbols over keywords and adds support for many features commonly found in other programming languages that Lua otherwise sacrifices for simplicity."}),(0,b.jsxs)("section",{children:["During development, Erde files may also be either run through the CLI or even loaded directly into Lua scripts using"," ",(0,b.jsx)("code",{children:"require('erde.loader')"}),". In both cases, the files will be dynamically compiled as they are loaded."]}),(0,b.jsxs)("section",{className:j.goals,children:[(0,b.jsx)("h2",{children:"Goals"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"Provide an expressive syntax while maintaining a low cognitive overhead when switching between Lua and Erde."}),(0,b.jsx)("li",{children:"Generate performant Lua 5.1+ compatible code, with optimizations for targeted versions."}),(0,b.jsx)("li",{children:"Provide native tooling support for better developer experience."})]})]}),(0,b.jsx)(O,{}),(0,b.jsxs)("section",{className:j.installation,children:[(0,b.jsx)("h2",{children:"Installation"}),(0,b.jsxs)("p",{children:["The recommended way to install is through"," ",(0,b.jsx)("a",{href:"https://luarocks.org",children:"luarocks"}),":"]}),(0,b.jsx)(a.Z,{language:"bash",children:"luarocks install erde"}),(0,b.jsxs)("p",{children:["Alternatively you can clone the"," ",(0,b.jsx)("a",{href:"https://github.com/erde-lang/erde",children:"repo"})," and update your"," ","PATH and ",(0,b.jsx)("a",{href:"https://www.lua.org/pil/8.1.html",children:"LUA_PATH"})," ","accordingly."]}),(0,b.jsx)("p",{children:"You can check whether Erde is installed correctly by running:"}),(0,b.jsx)(a.Z,{className:j.codeBlock,language:"bash",children:"erde -v"})]}),(0,b.jsxs)("section",{className:j.faq,children:[(0,b.jsx)("h2",{children:"FAQ"}),w.map((function(e,n){return(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:e.question}),(0,b.jsx)("p",{children:"string"==typeof e.answer?e.answer.trim():e.answer})]},n)}))]})]})]})}}}]);