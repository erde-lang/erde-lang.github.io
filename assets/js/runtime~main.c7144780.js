!function(){"use strict";var e,t,n,r,f,o={},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,c),n.loaded=!0,n.exports}c.m=o,c.c=a,c.amdO={},e=[],c.O=function(t,n,r,f){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],f=e[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&f||o>=f)&&Object.keys(c.O).every((function(e){return c.O[e](n[d])}))?n.splice(d--,1):(a=!1,f<o&&(o=f));if(a){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}f=f||0;for(var u=e.length;u>0&&e[u-1][2]>f;u--)e[u]=e[u-1];e[u]=[n,r,f]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);c.r(f);var o={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},c.d(f,o),f},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return"assets/js/"+({53:"935f2afb",350:"4f3f73ee",3019:"8b6922f9",3237:"1df93b7f",3579:"d61aab09",6342:"0ce74438",7537:"2918fb4f",7918:"17896441",9514:"1be78505",9637:"351fc821"}[e]||e)+"."+{3:"d60171e8",53:"1e43925d",180:"3bb9dc0a",249:"3e2e04d8",350:"d06de1c3",408:"bd641471",525:"4005ec09",848:"1c72808d",854:"efebdf82",911:"c5b1652d",996:"fc31a2b9",1065:"67980919",1134:"35e65fbc",1147:"65e37eb8",1156:"3f4d8930",1259:"ca8cb204",1448:"31c35081",1471:"3de420eb",1597:"5dd106f4",1886:"2b1b6e78",1960:"e4ca95bb",1961:"d39ae531",2060:"976a8b82",2075:"0c5c1e72",2140:"615ba9ec",2240:"4580b706",2450:"9d518e6b",2571:"dbd31c99",2798:"cc3bad7d",2814:"7881e37f",2892:"808e299b",2911:"aec70b77",2954:"9f5a89ee",3019:"823f30e7",3036:"b964b9d6",3237:"b9a7b323",3579:"b93313eb",3585:"22725956",3632:"bab88fa5",3682:"9e88863d",3760:"853f8094",3919:"25c42267",4028:"e19ac818",4129:"bf216e4a",4188:"c9a0782a",4368:"f4b85218",4386:"48a68e05",4407:"d19178d4",4902:"7ba458e8",4912:"7febb0b4",4946:"779fff2d",5062:"52820e72",5593:"957478ca",5703:"0cfb7a74",5710:"43bae370",5849:"d75e2fe2",5962:"1afe45c6",6082:"4b5b49f6",6241:"61a002ef",6342:"202e6e76",6424:"7a71ce60",6449:"d7f1e4e2",6489:"accf91cf",6587:"a180c46b",6717:"feabd0b3",7043:"9f2541bd",7131:"b7f0af74",7287:"8f77b35d",7537:"cde7a539",7562:"95dc5268",7637:"ff8b14b2",7778:"3503db6f",7835:"067d9030",7918:"ca8f7530",8070:"d32f0657",8084:"5d47da16",8180:"95a47fbd",8424:"9a5fc7a1",8430:"1b8ef9fa",8670:"e5ef4b03",8715:"7e1d93d2",8719:"92cd2907",8906:"90fcc9f4",8946:"a94fb8a1",9343:"503d0523",9398:"46fd90e1",9400:"04bc27d6",9514:"d50af120",9537:"984edda3",9637:"f0e4e54d",9667:"3aba5776",9684:"d9e08afe",9907:"c87e51c4"}[e]+".js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},f="erde-lang.github.io:",c.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var a,d;if(void 0!==n)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==f+n){a=b;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",f+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),f&&f.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"7918","935f2afb":"53","4f3f73ee":"350","8b6922f9":"3019","1df93b7f":"3237",d61aab09:"3579","0ce74438":"6342","2918fb4f":"7537","1be78505":"9514","351fc821":"9637"}[e]||e,c.p+c.u(e)},function(){var e={1303:0,532:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var f=new Promise((function(n,f){r=e[t]=[n,f]}));n.push(r[2]=f);var o=c.p+c.u(t),a=new Error;c.l(o,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var f=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+f+": "+o+")",a.name="ChunkLoadError",a.type=f,a.request=o,r[1](a)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,f,o=n[0],a=n[1],d=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)c.o(a,r)&&(c.m[r]=a[r]);if(d)var u=d(c)}for(t&&t(n);i<o.length;i++)f=o[i],c.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return c.O(u)},n=self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();