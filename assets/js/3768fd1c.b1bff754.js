"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[5435],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Design Decisions",description:"Design decisions of Erde.",slug:"design-decisions"},l=void 0,u={permalink:"/blog/design-decisions",source:"@site/src/blog/design-decisions.md",title:"Design Decisions",description:"Design decisions of Erde.",date:"2022-03-18T12:19:51.000Z",formattedDate:"March 18, 2022",tags:[],truncated:!0,authors:[],frontMatter:{title:"Design Decisions",description:"Design decisions of Erde.",slug:"design-decisions"},nextItem:{title:"Motivation",permalink:"/blog/motivation"}},s={authorsImageUrls:[]},p=[{value:"Dynamic vs Static Typing",id:"dynamic-vs-static-typing",level:2},{value:"Compatability with Lua",id:"compatability-with-lua",level:2},{value:"Breakage with Lua",id:"breakage-with-lua",level:2},{value:"Shallow vs Deep destructuring",id:"shallow-vs-deep-destructuring",level:2},{value:"No default local",id:"no-default-local",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Design decisions summary"),(0,o.kt)("h2",{id:"dynamic-vs-static-typing"},"Dynamic vs Static Typing"),(0,o.kt)("h2",{id:"compatability-with-lua"},"Compatability with Lua"),(0,o.kt)("h2",{id:"breakage-with-lua"},"Breakage with Lua"),(0,o.kt)("h2",{id:"shallow-vs-deep-destructuring"},"Shallow vs Deep destructuring"),(0,o.kt)("h2",{id:"no-default-local"},"No default local"))}f.isMDXComponent=!0}}]);