"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[7537],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61844:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"",sidebar_label:"Reference"},p=void 0,s={unversionedId:"reference",id:"reference",title:"",description:"This reference assumes previous knowledge of Lua.",source:"@site/src/docs/reference.md",sourceDirName:".",slug:"/reference",permalink:"/docs/reference",draft:!1,tags:[],version:"current",frontMatter:{title:"",sidebar_label:"Reference"},sidebar:"sidebar",previous:{title:"Breaking Changes w/ Lua",permalink:"/docs/breaking-changes-lua"}},d={},u=[{value:"Comments",id:"comments",level:2},{value:"Types",id:"types",level:2},{value:"Strings",id:"strings",level:3},{value:"Tables",id:"tables",level:3},{value:"Variables / Scope",id:"variables--scope",level:2},{value:"global",id:"global",level:3},{value:"module",id:"module",level:3},{value:"Operators",id:"operators",level:2},{value:"Arithmetic Operators",id:"arithmetic-operators",level:3},{value:"Relational Operators",id:"relational-operators",level:3},{value:"Logical Operators",id:"logical-operators",level:3},{value:"Bitwise Operators",id:"bitwise-operators",level:3},{value:"Concatenation / Length Operators",id:"concatenation--length-operators",level:3},{value:"Ternary Operator",id:"ternary-operator",level:3},{value:"Null Coalascing Operator",id:"null-coalascing-operator",level:3},{value:"Spread Operator",id:"spread-operator",level:3},{value:"Pipe Operator",id:"pipe-operator",level:3},{value:"Assignment Operators",id:"assignment-operators",level:3},{value:"Logic Constructs",id:"logic-constructs",level:2},{value:"do",id:"do",level:3},{value:"if else",id:"if-else",level:3},{value:"for",id:"for",level:3},{value:"while",id:"while",level:3},{value:"repeat ... until",id:"repeat--until",level:3},{value:"try ... catch",id:"try--catch",level:3},{value:"continue",id:"continue",level:3},{value:"Functions",id:"functions",level:2},{value:"Parameter Defaults",id:"parameter-defaults",level:3},{value:"Varargs",id:"varargs",level:3},{value:"Arrow Functions",id:"arrow-functions",level:3},{value:"Optional Chaining",id:"optional-chaining",level:2},{value:"Destructuring",id:"destructuring",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This reference assumes previous knowledge of ",(0,l.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/"},"Lua"),"."),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("p",null,"Unchanged from Lua."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"-- this is a single line comment\n--[[\n  this is a\n  multiline comment\n]]\n")),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("p",null,"Numbers, booleans, and ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," are all unchanged from Lua."),(0,l.kt)("h3",{id:"strings"},"Strings"),(0,l.kt)("p",null,"String are ",(0,l.kt)("em",{parentName:"p"},"mostly")," unchanged from Lua. Erde additionally allows for\ninterpolation in any string form using braces. Braces may be escaped to be used\nliterally. Escaping the end brace is optional."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local msg = 'world'\n\nlocal singleQuotes = 'hello {msg}'\nlocal doubleQuotes = \"hello {msg}\"\nlocal multiline = [[hello {msg}]]\n\n-- equivalent\nlocal braceLiteral1 = '\\{ 1, 2 \\}'\nlocal braceLiteral2 = '\\{ 1, 2 }'\n")),(0,l.kt)("h3",{id:"tables"},"Tables"),(0,l.kt)("p",null,"Tables are completely backwards compatible with Lua, including that tables use\n1-based indexing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local t = {\n  -- key value pairs\n  hello = 'world',\n  goodbye = 'society',\n  ['id:{myid}'] = 'test',\n\n  -- ipairs values\n  42,\n  'i am a string at index 2',\n}\n")),(0,l.kt)("p",null,"Tables also support the ",(0,l.kt)("a",{parentName:"p",href:"#spread-operator"},"Spread Operator"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = { hello = 'world' }\nlocal b = { ...a }\nprint(b.hello) -- world\n")),(0,l.kt)("h2",{id:"variables--scope"},"Variables / Scope"),(0,l.kt)("p",null,"Variable declarations are completely backwards compatible with Lua. However,\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," scope keywords also have been added."),(0,l.kt)("h3",{id:"global"},"global"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," keyword is an ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"optional"))," keyword for declaring global\nvariables (or rather, declaring a variable in the current environment)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"-- Good\nglobal MY_GLOBAL = 1\n\nif math.random(1, 10) > 5 {\n  -- Bad\n  global MY_GLOBAL = 1\n}\n")),(0,l.kt)("p",null,"The reason the ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," keyword is optional is that the parser cannot know the\nenvironment the script will be run in, and thus is not able to determine the\ndifference between assigning a new value to an existing environment variable and\ndeclaring a new variable."),(0,l.kt)("h3",{id:"module"},"module"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," keyword acts as an ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," statement. All variables with the\n",(0,l.kt)("inlineCode",{parentName:"p"},"module")," scope will be placed into a table, which is then returned at the end of\nthe script. It may only occur at the top level of a module and may not be used\nin conjunction with ",(0,l.kt)("inlineCode",{parentName:"p"},"return"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde",metastring:'title="foo.lua"',title:'"foo.lua"'},"module function echo(msg) {\n  print(msg)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde",metastring:'title="bar.lua"',title:'"bar.lua"'},"local foo = require('foo')\nfoo.echo('hello world')\n")),(0,l.kt)("p",null,"Note that this keyword conflicts with the built-in ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," function in Lua 5.1,\nwhich means that the ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," function is not usable in Erde (although the use\nof Lua's ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," function is ",(0,l.kt)("a",{parentName:"p",href:"http://lua-users.org/wiki/LuaModuleFunctionCritiqued"},"highly discouraged"),"\nanyways)."),(0,l.kt)("h2",{id:"operators"},"Operators"),(0,l.kt)("h3",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,l.kt)("p",null,"Unchanged from Lua."),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"+"),(0,l.kt)("td",{parentName:"tr",align:"left"},"addition"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 + 2 == 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subtraction"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 - 2 == -1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unary minus"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"multiplication"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2 ","*"," 4 == 8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"/"),(0,l.kt)("td",{parentName:"tr",align:"left"},"division"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10 / 2 == 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"//"),(0,l.kt)("td",{parentName:"tr",align:"left"},"floor division"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10 // 4 == 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"^"),(0,l.kt)("td",{parentName:"tr",align:"left"},"exponentiation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2 ^ 6 == 64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"%"),(0,l.kt)("td",{parentName:"tr",align:"left"},"modulo"),(0,l.kt)("td",{parentName:"tr",align:"left"},"6 % 2 == 0"))))),(0,l.kt)("h3",{id:"relational-operators"},"Relational Operators"),(0,l.kt)("p",null,"Unchanged from Lua."),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"=="),(0,l.kt)("td",{parentName:"tr",align:"left"},"equality"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 + 1 == 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"~="),(0,l.kt)("td",{parentName:"tr",align:"left"},"inequality"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 + 1 ~= 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<"),(0,l.kt)("td",{parentName:"tr",align:"left"},"less than"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3 < 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"greater than"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9 > 7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<="),(0,l.kt)("td",{parentName:"tr",align:"left"},"less or equal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9 >= 8, 9 >= 9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},">="),(0,l.kt)("td",{parentName:"tr",align:"left"},"greater or equal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9 <= 11, 11 <= 11"))))),(0,l.kt)("h3",{id:"logical-operators"},"Logical Operators"),(0,l.kt)("p",null,"Due to Erde favor of symbols over words, the logical operators are quite\ndifferent than Lua."),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"|"),(0,l.kt)("td",{parentName:"tr",align:"left"},"or"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true ","|"," false == true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"&"),(0,l.kt)("td",{parentName:"tr",align:"left"},"and"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true & false == false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unary NOT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~false == true"))))),(0,l.kt)("br",null),(0,l.kt)("p",null,"The unary logical NOT operator uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"~")," token in order to maintain\nconsistency with inequality (",(0,l.kt)("inlineCode",{parentName:"p"},"~="),"). The ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"!=")," tokens were intentionally\navoided as it would surely cause divides among the community on which to use. It\nalso leaves the ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," token available for use in the future."),(0,l.kt)("h3",{id:"bitwise-operators"},"Bitwise Operators"),(0,l.kt)("p",null,"Erde supports bitwise operators, but unlike most languages repurposes the\nsyntax. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Traditional bitwise operators must be prefixed with ",(0,l.kt)("inlineCode",{parentName:"em"},"."),"."))),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".","|"),(0,l.kt)("td",{parentName:"tr",align:"left"},"or"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b100 .","|"," 0b010 == 0b110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".&"),(0,l.kt)("td",{parentName:"tr",align:"left"},"and"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b110 .& 0b101 == 0b100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"xor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b110 .~ 0b101 == 0b011")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unary NOT"),(0,l.kt)("td",{parentName:"tr",align:"left"},".~0b100 == 0b011")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".>>"),(0,l.kt)("td",{parentName:"tr",align:"left"},"right shift"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b010 .>> 1 == 0b001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".<<"),(0,l.kt)("td",{parentName:"tr",align:"left"},"left shift"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b010 .<< 1 == 0b100"))))),(0,l.kt)("br",null),(0,l.kt)("p",null,"The reason for the unconventional syntax is that Erde uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"~")," symbol as the\nunary logical NOT to remain consistent with ",(0,l.kt)("inlineCode",{parentName:"p"},"~="),", which conflicts with Lua5.3+'s\nunary bitwise NOT and bitwise exclusive OR. The traditional bitop symbols also\nconsume some of the most convenient syntax tokens while being seldom used by\nthe average developer. Prefixing traditional bitwise operators with ",(0,l.kt)("inlineCode",{parentName:"p"},".")," frees\nthese tokens for other uses, such as using ",(0,l.kt)("inlineCode",{parentName:"p"},"&")," for logical AND (instead of the\nmore awkward ",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),") and ",(0,l.kt)("inlineCode",{parentName:"p"},">>")," for the ",(0,l.kt)("a",{parentName:"p",href:"#pipe-operator"},"Pipe Operator"),"."),(0,l.kt)("p",null,"When compiling to Lua 5.1 or 5.2, Erde will assume the target platform has\naccess to the ",(0,l.kt)("a",{parentName:"p",href:"http://bitop.luajit.org"},"BitOp")," module and bit operations will\ncompile down to ",(0,l.kt)("inlineCode",{parentName:"p"},"require('bit').xxx()")," calls."),(0,l.kt)("h3",{id:"concatenation--length-operators"},"Concatenation / Length Operators"),(0,l.kt)("p",null,"Unchanged from Lua."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},'print("hello" .. "world") -- helloworld\nprint(#"hello") -- 5\n')),(0,l.kt)("h3",{id:"ternary-operator"},"Ternary Operator"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ternary_operation"},"ternary operator")," is fully\nsupported in Erde. It was added to avoid the more awkward ",(0,l.kt)("inlineCode",{parentName:"p"},"a and b or c")," syntax\n(which is ",(0,l.kt)("strong",{parentName:"p"},"not")," compatible with the ternary operator in the case ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," is false)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local x = myCondition ? trueExpr : falseExpr\n")),(0,l.kt)("h3",{id:"null-coalascing-operator"},"Null Coalascing Operator"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Null_coalescing_operator"},"null coalescing operator"),"\nis fully supported in Erde using ",(0,l.kt)("inlineCode",{parentName:"p"},"??"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local x = myValue ?? defaultValue\n")),(0,l.kt)("h3",{id:"spread-operator"},"Spread Operator"),(0,l.kt)("p",null,"Erde supports the Spread Operator, which expands table values into either\nanother table or function arguments."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = { hello = 'world' }\nlocal b = { ...a }\nprint(b.hello) -- world\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"function add(a, b) {\n  return a + b\n}\n\nlocal a = { 1, 2 }\nprint(add(...a)) -- 3\n")),(0,l.kt)("p",null,"Note that key, value pairs will be ignored when spreading into function arguments."),(0,l.kt)("h3",{id:"pipe-operator"},"Pipe Operator"),(0,l.kt)("p",null,"The pipe operator forwards expressions into the arguments of\na function call. The initial values may be given as a single expression or as\na list of expressions surrounded by parentheses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"}," -- hello world\n'hello world' >> print()\n\n-- hello\n-- world\n('hello', 'world') >> print()\n")),(0,l.kt)("p",null,"Each function call may also specify additional arguments. These values will\nalways be passed in ",(0,l.kt)("em",{parentName:"p"},"before")," the piped ones."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"}," -- a\n -- b\n -- c\n('b', 'c') >> print('a')\n")),(0,l.kt)("p",null,"Pipes can be (and often are) chained together, passing the returns of one pipe\nfunction into the arguments of another."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"function add(a, b) {\n  return a + b\n}\n\n1 >> add(2) >> add(3) >> print() -- 6\n")),(0,l.kt)("h3",{id:"assignment-operators"},"Assignment Operators"),(0,l.kt)("p",null,"All binary operators support assignment operator shorthands. This includes the\n",(0,l.kt)("a",{parentName:"p",href:"#null-coalascing-operator"},"Null Coalescing Operator"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local x = 4\nx += 6\nx /= 2\nprint(x) -- 5\n")),(0,l.kt)("h2",{id:"logic-constructs"},"Logic Constructs"),(0,l.kt)("p",null,"All logic constructs in Lua (",(0,l.kt)("inlineCode",{parentName:"p"},"do"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"if...else"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"while"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"repeat...until"),")\nare the same in Erde, with the exception of using braces instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),". Erde\nadditionally adds a ",(0,l.kt)("inlineCode",{parentName:"p"},"continue")," statement and ",(0,l.kt)("inlineCode",{parentName:"p"},"try...catch")," construct."),(0,l.kt)("h3",{id:"do"},"do"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"do {\n  ...\n}\n")),(0,l.kt)("h3",{id:"if-else"},"if else"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"if n > 0 {\n  ...\n} elseif n < 0 {\n  ...\n} else {\n  ...\n}\n")),(0,l.kt)("h3",{id:"for"},"for"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"for i = 1, 10, 1 {\n  ...\n}\n\nfor i, v in ipairs({ 1, 2, 3 }) {\n  ...\n}\n")),(0,l.kt)("h3",{id:"while"},"while"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"while true {\n  ...\n}\n")),(0,l.kt)("h3",{id:"repeat--until"},"repeat ... until"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"repeat {\n  ...\n} until true\n")),(0,l.kt)("h3",{id:"try--catch"},"try ... catch"),(0,l.kt)("p",null,"Erde support ",(0,l.kt)("inlineCode",{parentName:"p"},"try...catch")," statements to catch errors thrown by Lua's ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"\nfunction. Under the hood it is simply a wrapper around ",(0,l.kt)("inlineCode",{parentName:"p"},"pcall"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"try {\n  error('my error message')\n} catch (err) {\n  print(err) -- my error message\n}\n")),(0,l.kt)("h3",{id:"continue"},"continue"),(0,l.kt)("p",null,"Erde adds the ",(0,l.kt)("inlineCode",{parentName:"p"},"continue")," keyword, which will advance to the next iteration of\nthe closest looping block (",(0,l.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"while"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"repeat...until"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"for i = 1, 10 {\n  if i % 2 == 0 {\n    continue\n  }\n\n  print('i is odd')\n}\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("p",null,"Named functions are the same as Lua, but use braces instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local function sum(a, b) {\n  return a + b\n}\n")),(0,l.kt)("p",null,"Table parameters may also be ",(0,l.kt)("a",{parentName:"p",href:"#destructuring"},"destructured"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local function introduce({ name }) {\n  print(name)\n}\n\nintroduce({ name = 'world' })\n")),(0,l.kt)("h3",{id:"parameter-defaults"},"Parameter Defaults"),(0,l.kt)("p",null,"Erde has support for parameter defaults. Since all parameters in Lua are\noptional, any parameter in Erde may be assigned a default value, i.e. defaulted\nparameters need not come after non-defaulted parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"function myfunc(a, b = 1, c) {\n  return a + b + c\n}\n\nmyfunc(1, nil, 3) -- 5\n")),(0,l.kt)("h3",{id:"varargs"},"Varargs"),(0,l.kt)("p",null,"Erde supports varargs which, like Lua, ",(0,l.kt)("strong",{parentName:"p"},"must")," appear last in the parameter\nlist. Erde adds the option to name varargs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"function sum(...summands) {\n  local total = 0\n\n  for _, summand in ipairs(summands) {\n    total += summand\n  }\n\n  return total\n}\n")),(0,l.kt)("h3",{id:"arrow-functions"},"Arrow Functions"),(0,l.kt)("p",null,"Lua's anonymous function syntax (",(0,l.kt)("inlineCode",{parentName:"p"},"function() ... end"),") is not valid in Erde.\nInstead, Erde opts for arrow functions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local sum = (a, b) -> {\n  return a + b\n}\n")),(0,l.kt)("p",null,"Arrow functions can implicitly take ",(0,l.kt)("inlineCode",{parentName:"p"},"self")," as the first parameter by using a\nfat arrow instead of a skinny one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local Person = { name = 'world' }\n\nPerson.introduce = () => {\n  print(self.name)\n}\n")),(0,l.kt)("p",null,"Arrow function mays also specify an expression instead of a function body. In\nthis case, the expression becomes the return value."),(0,l.kt)("p",null,"When returning multiple values, the returns must be surrounded by parentheses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"// these are equivalent\n\nlocal add = (x, y) -> x + y\nlocal add = (x, y) -> {\n  return x + y\n}\n\nlocal echo = (x, y) -> (x, y)\nlocal echo = (x, y) -> {\n  return x, y\n}\n")),(0,l.kt)("p",null,"The parameter parentheses are optional if there is only one argument. Note that\nthis does ",(0,l.kt)("em",{parentName:"p"},"not")," work with ",(0,l.kt)("a",{parentName:"p",href:"#parameter-defaults"},"Parameter Defaults")," or\n",(0,l.kt)("a",{parentName:"p",href:"#varargs"},"Varargs")," but does work for ",(0,l.kt)("a",{parentName:"p",href:"#destructuring"},"Destructuring"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local greet = { name } -> print('hello {name}!')\ngreet({ name = 'world' })\n")),(0,l.kt)("h2",{id:"optional-chaining"},"Optional Chaining"),(0,l.kt)("p",null,"Erde supports optional chaining, which allows an index to return ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," rather\nthan throw an error if the variable is ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),". It may be applied to key-value\nindexes, number indexes, and function calls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = nil\n\n-- these are return nil\nprint(a?.b) -- key, value index\nprint(a?[1]) -- number index\nprint(a?()) -- function call\n")),(0,l.kt)("p",null,"It is particularly useful when indexing an object deeply, where an intermediate\nvalue may or may not be present."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local personA = {\n  name = 'A',\n  children = {\n    { name = 'Aa' }\n  }\n}\n\nlocal personB = { name = 'B' }\n\nprint(personA.children?[1].name) -- Aa\nprint(personB.children?[1].name) -- nil\n\n")),(0,l.kt)("p",null,"You can also use optional chaining during assignment. In this case, the\nassignment will simply not occur if the chain ends early."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local personB = { name = 'B' }\npersonB.children?[1].name = 'Bb'\nprint(personB.children?[1].name) -- nil\n")),(0,l.kt)("h2",{id:"destructuring"},"Destructuring"),(0,l.kt)("p",null,"Erde supports destructuring, which allows a convenient syntax to extract values\nfrom a table. It may be used to either declare variables or in function\nparameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"-- declaration\nlocal a = { hello = 'world' }\nlocal { hello } = a\nprint(hello) -- world\n\n-- function params\nfunction introduce({ name }) {\n  print(name)\n}\n\nintroduce({ name = 'world' })\n")),(0,l.kt)("p",null,"Specified names extract key-value pairs from the destructured table. To extract\narray values, you may specify names in brackets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = {\n  hello = 'world',\n  'first index',\n  'second index',\n}\n\nlocal { hello, [first, second] } = a\n")),(0,l.kt)("p",null,"The braces are optional if only array values are destructured."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = {\n  hello = 'world',\n  'first index',\n  'second index',\n}\n\nlocal [first, second] = a\n")),(0,l.kt)("p",null,"Destructured values may also be given aliases, which is particularly useful\nif the destructured key is a generic name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = {\n  hello = 'world',\n  'first index',\n  'second index',\n}\n\nlocal { hello: worldHello } = a\nprint(worldHello) -- 'world'\n")),(0,l.kt)("p",null,"Note that unlike most languages, nested destructuring is ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"not"))," supported.\nThis is intentional, as nested destructuring syntax often makes code more\ncryptic and difficult to read."))}c.isMDXComponent=!0}}]);