"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[3237],{34180:function(e,t,n){n.r(t),n.d(t,{LiveCodeBlockCore:function(){return y}});var r=n(94184),i=n.n(r),l=n(13163),a=n(59989),o=n(67294);function s(e,t){if(ResizeObserver){var n=new ResizeObserver(t);return n.observe(e),function(){return n.unobserve(e)}}window.addEventListener("resize",t);var r=new MutationObserver(t);return r.observe(e,{attributes:!0,subtree:!0}),function(){window.removeEventListener("resize",t),r.disconnect()}}var c="editor_SMFZ",u=n(85893),d={language:"lua",automaticLayout:!0,fontFamily:"Source Code Pro",fontSize:16,minimap:{enabled:!1},overviewRulerLanes:0,scrollBeyondLastLine:!1,tabSize:2,theme:"vs-light",wordWrap:"on",wrappingStrategy:"advanced"};var f=(0,o.forwardRef)((function(e,t){var n=(0,o.useState)(null),r=n[0],l=n[1],f=function(e,t){var n=(0,o.useState)(),r=n[0],i=n[1],l=JSON.stringify(null!=t?t:{});return(0,o.useEffect)((function(){e&&i(a.editor.create(e,Object.assign({},d,t)))}),[e,l]),r}(r,e.monaco);return(0,o.useEffect)((function(){"function"==typeof t?t(f):t&&(t.current=f)}),[t,f]),(0,o.useEffect)((function(){if(r&&f)return s(r,(function(){f.layout(r.getBoundingClientRect())}))}),[r,f]),(0,o.useEffect)((function(){if(e.fitHeight&&r&&f){var t=function(){var e=f.getContentHeight();r.style.height=e+"px"};f.onDidContentSizeChange(t),t()}}),[e.fitHeight,r,f]),(0,u.jsx)("div",{ref:l,className:i()(c,e.className)})})),p="tabs_r7T9",m=function(e){var t,n,r,l,a=(0,o.useState)(null!=(t=null!=(n=null!=(r=e.selectedTabId)?r:e.defaultSelectedTabId)?n:null==(l=e.tabs[0])?void 0:l.id)?t:""),s=a[0],c=a[1];return(0,o.useEffect)((function(){void 0!==e.selectedTabId&&c(e.selectedTabId)}),[e.selectedTabId]),(0,o.useEffect)((function(){s&&(null==e.onChange||e.onChange(s))}),[s]),(0,u.jsx)("ul",{className:i()(p,e.className),children:e.tabs.map((function(t){var n;return(0,u.jsx)("li",{role:"tab","aria-selected":t.id===s,children:null!=(n=t.label)?n:t.id,onClick:function(n){null==t.onClick||t.onClick(n),null==e.onChange||e.onChange(t.id),void 0===e.selectedTabId&&c(t.id)}},t.id)}))})},h={liveCodeBlock:"liveCodeBlock_jaIb",inputEditor:"inputEditor_hEcr",resultEditor:"resultEditor_IFtZ",output:"output_nmeg",horizontal:"horizontal_GPZV",results:"results_YBq5",vertical:"vertical_KIX6"},y=function(e){var t,n,r=(0,o.useState)(null!=(t=e.code)?t:""),c=r[0],d=r[1],p=(0,o.useState)(""),y=p[0],k=p[1],v=(0,o.useState)(),g=v[0],b=v[1],x=(0,o.useState)(),j=x[0],w=x[1],O=(0,o.useState)(null),E=O[0],C=O[1],L=function(){var e=(0,o.useState)({})[1];return function(){e({})}}();n=e.layout&&"responsive"!==e.layout?e.layout:E?E.clientWidth>600?"horizontal":"vertical":"horizontal",(0,o.useEffect)((function(){if(E&&(!e.layout||"responsive"===e.layout))return s(E,L)}),[E,e.layout]),(0,o.useEffect)((function(){void 0!==e.code&&g&&(g.setValue(e.code),d(e.code))}),[e.code,g]),(0,o.useEffect)((function(){null==g||g.onDidChangeModelContent((function(){d(g.getValue())}))}),[g]);var S=(0,o.useState)("output"),I=S[0],T=S[1];return(0,o.useEffect)((function(){if("output"===I)try{k(l.load(c)().toString())}catch(t){t instanceof Error&&k(t.message)}else{var e=null==j?void 0:j.getModel();if(!j||!e)return;"parsed"===I?(a.editor.setModelLanguage(e,"json"),j.setValue('{ "hello": "world" }')):("compiled"===I||"formatted"===I)&&(a.editor.setModelLanguage(e,"lua"),j.setValue('print("todo")'))}}),[j,c,I]),(0,u.jsxs)("div",{ref:C,className:i()(h.liveCodeBlock,e.className,h[n]),children:[(0,u.jsx)(f,{ref:b,className:h.inputEditor}),(0,u.jsxs)("div",{className:h.results,children:[(0,u.jsx)(m,{selectedTabId:I,onChange:function(e){T(e)},tabs:[{id:"output",label:"Output"},{id:"parsed",label:"Parsed (AST)"},{id:"compiled",label:"Compiled"},{id:"formatted",label:"Formatted"}]}),"output"===I?(0,u.jsx)("div",{className:h.output,children:y}):(0,u.jsx)(f,{ref:w,monaco:{readOnly:!0},fitHeight:"vertical"===n})]})]})}},19084:function(e,t,n){n.d(t,{h:function(){return l}});var r=n(91262),i=n(85893),l=function(e){return(0,i.jsx)(r.Z,{children:function(){var t=n(34180).LiveCodeBlockCore;return(0,i.jsx)(t,Object.assign({},e))}})}},7055:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r,i,l=n(42773),a=n(67294),o=n(73727),s=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=function(e){var t=e.title,n=e.titleId,l=u(e,s);return a.createElement("svg",c({width:256,height:256,viewBox:"0 0 67.733 67.733",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,a.createElement("defs",null,a.createElement("linearGradient",{id:"a"},a.createElement("stop",{style:{stopColor:"#3d00ba",stopOpacity:1},offset:0}),a.createElement("stop",{style:{stopColor:"#0e004a",stopOpacity:1},offset:1})),r||(r=a.createElement("linearGradient",{xlinkHref:"#a",id:"c",x1:60.003,y1:7.804,x2:51.934,y2:16.462,gradientUnits:"userSpaceOnUse"})),i||(i=a.createElement("linearGradient",{xlinkHref:"#a",id:"b",gradientUnits:"userSpaceOnUse",x1:60.003,y1:7.804,x2:51.934,y2:16.462,gradientTransform:"matrix(3.51827 0 0 3.51827 -162.796 -7.785)"})),a.createElement("clipPath",{clipPathUnits:"userSpaceOnUse",id:"e"},a.createElement("circle",{style:{fill:"#000",fillOpacity:1,stroke:"none",strokeWidth:10.5014,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"84.0113,21.0028,10.5014,21.0028",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:33.867,cy:33.867,r:22.042})),a.createElement("clipPath",{clipPathUnits:"userSpaceOnUse",id:"d"},a.createElement("circle",{style:{fill:"#000",fillOpacity:1,stroke:"none",strokeWidth:10.5014,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"84.0113,21.0028,10.5014,21.0028",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:33.867,cy:33.867,r:22.042}))),a.createElement("ellipse",{style:{fill:"none",fillRule:"evenodd",stroke:"#5f5f5f",strokeWidth:2.5069,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"20.0552,5.0138,2.5069,5.0138",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:-.962,cy:47.872,rx:32.085,ry:32.091,transform:"rotate(-46.112) skewX(.032)"}),a.createElement("circle",{style:{fill:"url(#b)",fillOpacity:1,stroke:"none",strokeWidth:10.5014,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"84.0113,21.0028,10.5014,21.0028",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:33.867,cy:33.867,r:22.042}),a.createElement("circle",{style:{fill:"url(#c)",fillOpacity:1,stroke:"none",strokeWidth:2.98483,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"23.8786,5.96964,2.98483,5.96964",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:55.898,cy:11.839,r:6.265}),a.createElement("g",{clipPath:"url(#d)"},a.createElement("path",{style:{fill:"#25c359",fillOpacity:1,stroke:"none",strokeWidth:".264583px",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1},d:"M20.547 12.82s21.753 5.57 9.566 12.473c-12.187 6.903-4.807 11.292-10.042 16.671-5.235 5.379-5.874 4.954-5.874 4.954s-16.366-24.536 6.35-34.098z",clipPath:"url(#e)"}),a.createElement("circle",{style:{fill:"#25c359",fillOpacity:1,stroke:"none",strokeWidth:4.63948,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"37.1157,9.27895,4.63948,9.27895",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:36.956,cy:46.285,r:2.646}),a.createElement("circle",{style:{fill:"#25c359",fillOpacity:1,stroke:"none",strokeWidth:16.959,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"135.672,33.9179,16.959,33.9179",strokeDashoffset:0,strokeOpacity:1,paintOrder:"stroke fill markers"},cx:53.297,cy:40.389,r:9.671})))},f=n(72389),p={mobile:480,tablet:768,laptop:1024,desktop:1200},m=Object.values(p).sort((function(e,t){return e-t}));function h(){var e;return null!=(e=m.find((function(e){return window.innerWidth<e})))?e:p.desktop}var y=n(19084),k=n(94184),v=n.n(k),g="menu_RLYY",b=n(85893),x=function(e){var t,n,r,i,l=(0,a.useState)(null!=(t=null!=(n=null!=(r=e.selectedItemId)?r:e.defaultSelectedItemId)?n:null==(i=e.items[0])?void 0:i.id)?t:""),o=l[0],s=l[1];return(0,a.useEffect)((function(){void 0!==e.selectedItemId&&s(e.selectedItemId)}),[e.selectedItemId]),(0,a.useEffect)((function(){o&&(null==e.onChange||e.onChange(o))}),[o]),(0,b.jsx)("menu",{className:v()(g,e.className),children:e.items.map((function(t){var n;return(0,b.jsx)("li",{"aria-selected":t.id===o,children:null!=(n=t.label)?n:t.id,onClick:function(n){null==t.onClick||t.onClick(n),null==e.onChange||e.onChange(t.id),void 0===e.selectedItemId&&s(t.id)}},t.id)}))})},j="goals_R6jz",w="mobileFeatures_K0FH",O="features_XAlT",E="featureList__R_I",C="menu_RoY7",L="codeBlockContainer_jK24",S="codeBlock_Noo0",I="index_DGbY",T="buttons_Pntg",_=function(){return(0,b.jsxs)("section",{className:j,children:[(0,b.jsx)("h2",{children:"Goals"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"Provide an expressive syntax while maintaining a low cognitive overhead when switching between Lua and Erde."}),(0,b.jsx)("li",{children:"Generate performant Lua 5.1+ compatible code, with optimizations for targeted platforms (ex. using goto when compiling for 5.2+ / LuaJIT)."}),(0,b.jsx)("li",{children:"Provide native tooling support for better developer experience (ex. formatter, language server)"})]})]})},N=[{id:"arrow-functions",label:"Arrow functions",example:"\nfunction map(t, callback) {\n  local copy = {}\n\n  for key, value in pairs(t) {\n    copy[key] = callback(value)\n  }\n\n  return copy\n}\n\nlocal evens = { 2, 4, 6, 8, 10 }\n\nlocal odds = map(evens, even -> {\n  return even - 1\n})\n\n-- OR with implicit return shorthand\nlocal odds = map(evens, even -> even - 1)\n"},{id:"destructuring",label:"Table destructuring",example:"\nlocal myTable = {\n  myValue = 5,\n  'child1',\n  'child2',\n}\n\n-- Normal destruct\nlocal { myValue } = myTable\n\n-- w/ array element destructs\nlocal { myValue, [ firstChild, secondChild ] } = myTable\n\n-- w/ only array destructs\nlocal [ firstChild, secondChild ] = myTable\n"},{id:"optional-chaining",label:"Optional chaining",example:"\nlocal nilTable = nil\n\nprint(nilTable?.test)\nprint(nilTable?[1])\nprint(nilTable?())\n\n-- Optional chaining also works for assignments!\nnilTable?.test = 'goodbye world'\nprint(nilTable?.test)\n\nlocal myTable = { test = 'hello world' }\n\nprint(myTable?.test)\n\nmyTable?.test = 'goodbye world'\nprint(myTable?.test)\n"},{id:"assignment-ops",label:"Assignment operators",example:"\nlocal a = 1\nprint(a)\na += 1\nprint(a)\na *= 5\nprint(a)\n"},{id:"param-defaults",label:"Parameter defaults",example:"\nfunction greet(message = 'hello world') {\n  print(message)\n}\n\ngreet()\ngreet('goodbye world')\n"},{id:"continue",label:"continue keyword",example:"\nfunction printOdds(...) {\n  for _, value in ipairs({ ... }) {\n    if value % 2 == 0 {\n      continue\n    }\n\n    print(value)\n  }\n}\n\nprintOdds(1, 2, 3, 4, 5)\n"},{id:"interpolation",label:"String interpolation",example:"\nlocal myValue = 4\n\n-- Can interpolate any string\nprint('myValue is {myValue}')\nprint(\"myValue is {myValue}\")\nprint([[myValue is {myValue}]])\n\n-- Can escape braces for literal print\nprint('A literal brace: \\{')\n"},{id:"do-expressions",label:"do expressions",example:"\nlocal myVar = do {\n  local tmpVar = 4\n  return tmpVar + 3\n}\n\nprint(myVar)\nprint(tmpVar)\n"},{id:"try-catch",label:"Try catch statement",example:"\ntry {\n  print(1 / \"hello\")\n} catch (err) {\n  print('Caught: ', err)\n}\n"}],V=function(){var e=function(){var e=(0,f.Z)(),t=(0,a.useState)(e?h():p.desktop),n=t[0],r=t[1];return(0,a.useEffect)((function(){if(e){var t=function(){r(h())};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[e]),n}(),t=(0,a.useState)(N[0].id),n=t[0],r=t[1],i=N.find((function(e){return e.id===n}));return e<p.laptop?(0,b.jsxs)("section",{className:w,children:[(0,b.jsx)("h2",{children:"Features"}),(0,b.jsxs)("ul",{children:[N.map((function(e){return(0,b.jsx)("li",{children:e.label},e.id)})),(0,b.jsx)("li",{children:"and more!"})]})]}):(0,b.jsxs)("section",{className:O,children:[(0,b.jsxs)("div",{className:E,children:[(0,b.jsx)("h2",{children:"Features"}),(0,b.jsx)(x,{className:C,selectedItemId:n,onChange:function(e){r(e)},items:N.map((function(e){return{id:e.id,label:e.label}}))}),(0,b.jsx)("div",{children:"and more!"})]}),(0,b.jsx)("div",{className:L,children:(0,b.jsx)(y.h,{className:S,code:null==i?void 0:i.example.trim(),layout:"vertical"})})]})},D=function(){return(0,b.jsxs)(l.Z,{pageClassName:I,children:[(0,b.jsxs)("header",{children:[(0,b.jsx)(d,{}),(0,b.jsx)("h1",{children:"Erde"}),(0,b.jsx)("p",{children:"A modern Lua dialect"})]}),(0,b.jsxs)("main",{children:[(0,b.jsx)("section",{children:"Erde is an expressive programming language that compiles to Lua. Syntactically it favors symbols over keywords and adds support for many features commonly found in other programming languages that Lua otherwise sacrifices for simplicity."}),(0,b.jsx)(_,{}),(0,b.jsx)(V,{}),(0,b.jsx)("section",{className:T,children:(0,b.jsx)(o.rU,{to:"/docs/",children:(0,b.jsx)("button",{children:"Get Started"})})})]})]})}}}]);