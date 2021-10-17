"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[941],{5034:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},s="Syntax",p={unversionedId:"Learn/syntax",id:"Learn/syntax",isDocsHomePage:!1,title:"Syntax",description:'TODO: "Inspired by XXX" footnotes',source:"@site/src/docs/Learn/syntax.md",sourceDirName:"Learn",slug:"/Learn/syntax",permalink:"/docs/Learn/syntax",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"}},d=[{value:"Comments",id:"comments",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Strings",id:"strings",children:[],level:2},{value:"Logic Flow",id:"logic-flow",children:[{value:"if else",id:"if-else",children:[],level:3},{value:"for",id:"for",children:[],level:3},{value:"while",id:"while",children:[],level:3},{value:"repeat ... until",id:"repeat--until",children:[],level:3},{value:"do",id:"do",children:[],level:3}],level:2},{value:"Tables",id:"tables",children:[{value:"Declaration",id:"declaration",children:[],level:3},{value:"Indexing (+ Optional Chaining)",id:"indexing--optional-chaining",children:[],level:3},{value:"Destructuring",id:"destructuring",children:[],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"Declaration",id:"declaration-1",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Fat vs Skinny Arrows",id:"fat-vs-skinny-arrows",children:[],level:3},{value:"Implicit Return",id:"implicit-return",children:[],level:3},{value:"Optional Parentheses",id:"optional-parentheses",children:[],level:3}],level:2},{value:"Operators",id:"operators",children:[{value:"Arithmetic Operators",id:"arithmetic-operators",children:[],level:3},{value:"Bitwise Operators",id:"bitwise-operators",children:[],level:3},{value:"Relational Operators",id:"relational-operators",children:[],level:3},{value:"Logical Operators",id:"logical-operators",children:[],level:3},{value:"Misc Operators",id:"misc-operators",children:[{value:"Concatenation/Length Operators",id:"concatenationlength-operators",children:[],level:4},{value:"Ternary Operator",id:"ternary-operator",children:[],level:4},{value:"Null Coalascing Operator",id:"null-coalascing-operator",children:[],level:4}],level:3},{value:"Assignment Operators",id:"assignment-operators",children:[],level:3}],level:2},{value:"Pipes",id:"pipes",children:[],level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,'TODO: "Inspired by XXX" footnotes'),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("p",null,"Erde uses the same single-line comment syntax as lua, but replaces the\nmultiline comment with ",(0,l.kt)("inlineCode",{parentName:"p"},"---"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"-- this is a comment\n---\n  this is a\n  multiline comment\n---\n")),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"Variables use the same syntax as lua. However, an optional ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," keyword has\nbeen added when declaring global variables, and is highly encouraged."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = 1\nglobal b = 2\n")),(0,l.kt)("h2",{id:"strings"},"Strings"),(0,l.kt)("p",null,"Single/double quote strings are unchanged from lua:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = 'this is a single quote string'\nlocal b = \"this is a double quote string\"\n")),(0,l.kt)("p",null,"Strings that span multiple lines use backticks and allow for interpolation\nusing braces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local msg = 'hello world!'\nlocal a = `\n  most programs\n  start with: {msg}\n`\n")),(0,l.kt)("p",null,"You can escape backticks and braces to use them literally in a string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local a = `\n  this is a backtick: \\`\n  these are braces: \\{\\}\n`\n")),(0,l.kt)("h2",{id:"logic-flow"},"Logic Flow"),(0,l.kt)("p",null,"Logic flow constructs are the same as lua, but use braces for scoping:"),(0,l.kt)("h3",{id:"if-else"},"if else"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"if n > 0 {\n  print('n is positive')\n} elseif n < 0 {\n  print('n is negative')\n} else {\n  print('n is zero')\n}\n")),(0,l.kt)("h3",{id:"for"},"for"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"for i = 1, 10, 1 {\n  print(i)\n}\n\nfor i, v in ipairs({ 1, 2, 3 }) {\n  print(i, v)\n}\n")),(0,l.kt)("h3",{id:"while"},"while"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"while true {\n  write_lua_programs()\n}\n")),(0,l.kt)("h3",{id:"repeat--until"},"repeat ... until"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local n = 10\nrepeat {\n  n = n - 1\n} until (n < 0)\n")),(0,l.kt)("h3",{id:"do"},"do"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"do")," blocks in erde may optionally return values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"do {\n  local msg = 'hello world'\n  print(msg)\n}\n\nlocal msg = do {\n  -- do something\n  return 'hello world'\n}\nprint(msg)\n")),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("h3",{id:"declaration"},"Declaration"),(0,l.kt)("p",null,"When declaring tables, erde uses ",(0,l.kt)("inlineCode",{parentName:"p"},":")," in place of ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," for key-value pairs. The\nbracket syntax from lua has been kept, but erde also allows for arbitrary\nstrings as keys:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local t = {\n  -- key value pairs\n  hello: 'world',\n  goodbye: 'society',\n  ['id:' .. getkey()]: 'test',\n  'my-key': 'test',\n\n  -- ipairs values\n  42,\n  'i am a string at index 2',\n}\n")),(0,l.kt)("h3",{id:"indexing--optional-chaining"},"Indexing (+ Optional Chaining)"),(0,l.kt)("p",null,"Indexing tables is the same as lua, including that tables are 1-indexed.\nHowever, erde also adds ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"},"optional chaining"),",\nalthough with some slightly different semantics than javascript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"print(parent?.name)\nprint(parent.children?[1])\nparent.children?[1].wakeparent?('i need food')\n")),(0,l.kt)("p",null,"Contrary to javascript (which always requires ",(0,l.kt)("inlineCode",{parentName:"p"},"?."),"), here we only need ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"\nbefore each index. As shown above, this also works for function calls."),(0,l.kt)("p",null,"You can also use optional chaining during assignment. In this case, the\nassignment will simply not occur if the chain ends early:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local parent = {}\n-- no children, doesn't do anything\nparent.children?[1].name = 'big complainer'\n")),(0,l.kt)("h3",{id:"destructuring"},"Destructuring"),(0,l.kt)("p",null,"Erde tables support ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"destructuring"),".\nDestructuring key-value pairs uses the form ",(0,l.kt)("inlineCode",{parentName:"p"},":xxx")," (note the preceeding ",(0,l.kt)("inlineCode",{parentName:"p"},":"),")\nto distinguish itself from array destructuring:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local parent = {\n  name: 'bsuth',\n  'child1',\n  'child2',\n}\n\nlocal { :name } = parent\nlocal { firstkid, secondkid } = parent\nprint(name, firstkid, secondkid) -- bsuth child1 child2\n\n-- or all in one line\nlocal { :name, firstkid, secondkid } = parent\n")),(0,l.kt)("p",null,"Nested destructuring is also supported, where the higher level index appears\nfirst, followed by it's destructure. Note that they are separated by a space.\nIn this case, ",(0,l.kt)("em",{parentName:"p"},"only the deepest variables are kept in scope"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local { :children { child1, child2 } } = parent\nprint(children) -- nil\nprint(child1) -- child\nprint(child2) -- child\n")),(0,l.kt)("p",null,"All destructured values can be assigned defaults. Note that this is also true\nfor nested destructures:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local { :children = {} } = parent\nlocal { :children { child1 = 'mychild' } = {} } = parent\nprint(child1) -- mychild\n")),(0,l.kt)("p",null,"Note that nested destructuring will throw an ",(0,l.kt)("inlineCode",{parentName:"p"},"attempt to index a nil value"),"\nerror if the key does not exist. While we can simply assign defaults everywhere,\nthis can get pretty messy. Here, erde reuses the optional operator to allow\nan early exit of nested destructures. In this case the destructured variables\nwill simply be ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local parent = {}\nlocal { :children? { child1 } } = parent\nprint(child1) -- nil\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"declaration-1"},"Declaration"),(0,l.kt)("p",null,"Named functions are the same as in Lua, but with braces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"-- local function\nlocal function sum(a, b) {\n  return a + b\n}\n\n-- non-local function\nfunction sum(a, b) {\n  return a + b\n}\n")),(0,l.kt)("p",null,"However, anonymous functions do NOT use the lua ",(0,l.kt)("inlineCode",{parentName:"p"},"function() ... end")," syntax.\nInstead, erde opts for arrow functions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local greet = (name) -> {\n  print(`hello {name}!`)\n}\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"Erde has support for optional parameters are varargs. Optional parameters are\nassigned a default value when nil and must come after non-optional parameters\nin the arguments list. Varargs must appear as the last parameter and may by\noptionally named:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local greet = (prefix, suffix = '!', ...names) -> {\n  print(prefix)\n  for _, name in ipairs(name) {\n    print(name)\n  }\n  print(suffix)\n}\n\ngreet('hello') -- hello!\ngreet('hello', nil, 'world') -- hello world!\ngreet('hello', '...', 'a', 'b') -- hello a b ...\n")),(0,l.kt)("p",null,"Table parameters may also be ",(0,l.kt)("a",{parentName:"p",href:"#destructuring"},"destructured"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local greetperson = ({ :name }) -> {\n  print('hello {name}!')\n}\n\ngreetperson({ name = 'world' })\n")),(0,l.kt)("h3",{id:"fat-vs-skinny-arrows"},"Fat vs Skinny Arrows"),(0,l.kt)("p",null,"Like lua, erde provides a shorthand for declaring functions that take self as\nthe first parameter. In this case, the skinny arrow (",(0,l.kt)("inlineCode",{parentName:"p"},"->"),") is replaced with a\nfat one (",(0,l.kt)("inlineCode",{parentName:"p"},"=>"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local Person = { name = 'bsuth' }\n\nPerson.introduce = () => {\n  print(`Hi, my name is {self.name}`)\n}\n")),(0,l.kt)("h3",{id:"implicit-return"},"Implicit Return"),(0,l.kt)("p",null,"Functions may specify an expression instead of a function body. In this case,\nthe expression becomes the return value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"// these are equivalent\n\nlocal add = (x, y) -> x + y\n\nlocal add = (x, y) -> {\n  return x + y\n}\n")),(0,l.kt)("h3",{id:"optional-parentheses"},"Optional Parentheses"),(0,l.kt)("p",null,"If there is only one argument, then you may omit the parentheses. Note that this\ndoes ",(0,l.kt)("em",{parentName:"p"},"not")," work for optional parameters or varargs, but does work for\ndestructuring:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local echo = name -> print(name)\nlocal greet = { :name } -> print('hello {name}!')\n")),(0,l.kt)("h2",{id:"operators"},"Operators"),(0,l.kt)("h3",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"+"),(0,l.kt)("td",{parentName:"tr",align:"left"},"addition"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 + 2 == 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subtraction"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 - 2 == -1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unary minus"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"multiplication"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2 ","*"," 4 == 8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"/"),(0,l.kt)("td",{parentName:"tr",align:"left"},"division"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10 / 2 == 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"//"),(0,l.kt)("td",{parentName:"tr",align:"left"},"floor division"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10 // 4 == 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"^"),(0,l.kt)("td",{parentName:"tr",align:"left"},"exponentiation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2 ^ 6 == 64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"%"),(0,l.kt)("td",{parentName:"tr",align:"left"},"modulo"),(0,l.kt)("td",{parentName:"tr",align:"left"},"6 % 2 == 0"))))),(0,l.kt)("h3",{id:"bitwise-operators"},"Bitwise Operators"),(0,l.kt)("p",null,"Erde supports bitwise operators, but unlike most languages repurposes the\nsyntax. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Traditional bitwise operators must be prefixed with ",(0,l.kt)("inlineCode",{parentName:"em"},"."),"."))),(0,l.kt)("p",null,"The reason for this is that the bitwise operators are far too seldom used to\nconsume some of the most important operator characters available. The\ntraditional bitwise operators have been assigned different functions in order to\nreduce noise. See ",(0,l.kt)("a",{parentName:"p",href:"#logical-operators"},"Logical Operators")," and ",(0,l.kt)("a",{parentName:"p",href:"#pipes"},"Pipes"),"."),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".","|"),(0,l.kt)("td",{parentName:"tr",align:"left"},"or"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b100 .","|"," 0b010 == 0b110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".&"),(0,l.kt)("td",{parentName:"tr",align:"left"},"and"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b110 .& 0b101 == 0b100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"xor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b110 .~ 0b101 == 0b011")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unary NOT"),(0,l.kt)("td",{parentName:"tr",align:"left"},".~0b100 == 0b011")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".>>"),(0,l.kt)("td",{parentName:"tr",align:"left"},"right shift"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b010 .>> 1 == 0b001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},".<<"),(0,l.kt)("td",{parentName:"tr",align:"left"},"left shift"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0b010 .<< 1 == 0b100"))))),(0,l.kt)("h3",{id:"relational-operators"},"Relational Operators"),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"=="),(0,l.kt)("td",{parentName:"tr",align:"left"},"equality"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 + 1 == 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"~="),(0,l.kt)("td",{parentName:"tr",align:"left"},"inequality"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 + 1 ~= 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<"),(0,l.kt)("td",{parentName:"tr",align:"left"},"less than"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3 < 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"greater than"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9 > 7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<="),(0,l.kt)("td",{parentName:"tr",align:"left"},"less or equal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9 >= 8, 9 >= 9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},">="),(0,l.kt)("td",{parentName:"tr",align:"left"},"greater or equal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"9 <= 11, 11 <= 11"))))),(0,l.kt)("h3",{id:"logical-operators"},"Logical Operators"),(0,l.kt)("p",null,"As mentioned in the ",(0,l.kt)("a",{parentName:"p",href:"#bitwise-operators"},"Bitwise Operators")," section, the\ntraditional bitwise operator syntax is available for use, and this is one such\nwhere we employ it. Instead of the awkward doubling of operators (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"||"),"), we simply use the traditional bitwise counterparts."),(0,l.kt)("center",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"|"),(0,l.kt)("td",{parentName:"tr",align:"left"},"or"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true ","|"," false == true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"&"),(0,l.kt)("td",{parentName:"tr",align:"left"},"and"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true & false == false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"unary NOT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~false == true"))))),(0,l.kt)("p",null,"The unary logical NOT operator uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"~")," syntax in order to maintain\nconsistency with inequality (",(0,l.kt)("inlineCode",{parentName:"p"},"~="),"). Many will have mixed feelings about this,\nbut I felt reluctant to change the ",(0,l.kt)("inlineCode",{parentName:"p"},"~=")," syntax. I wanted erde to feel very\nnatural specifically for ",(0,l.kt)("em",{parentName:"p"},"lua")," developers in particular, and having used lua for\nawhile now I have grow very accustomed (and even now enjoy) the syntax. After\nthe decision to keep ",(0,l.kt)("inlineCode",{parentName:"p"},"~=")," was made, I subsequently chose to adopt ",(0,l.kt)("inlineCode",{parentName:"p"},"~")," as the\nunary NOT operator in order to maintain consistency."),(0,l.kt)("p",null,"I intentionally did not add ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"!=")," as aliases, as I feel the preference\nwould cause divides the community and it leaves the ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," syntax open for future\noperations."),(0,l.kt)("h3",{id:"misc-operators"},"Misc Operators"),(0,l.kt)("h4",{id:"concatenationlength-operators"},"Concatenation/Length Operators"),(0,l.kt)("p",null,"Unchanged from lua."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},'print("hello" .. "world") -- helloworld\nprint(#"hello") -- 5\n')),(0,l.kt)("h4",{id:"ternary-operator"},"Ternary Operator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde",metastring:'title="erde"',title:'"erde"'},"a ? b : c\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua"',title:'"lua"'},"(function()\n  if a then\n    return b\n  else\n    return c\n  end\n)()\n")),(0,l.kt)("h4",{id:"null-coalascing-operator"},"Null Coalascing Operator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde",metastring:'title="erde"',title:'"erde"'},"a ?? b\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua"',title:'"lua"'},"(function()\n  if a ~= nil  then\n    return a\n  else\n    return b\n  end\n)()\n")),(0,l.kt)("h3",{id:"assignment-operators"},"Assignment Operators"),(0,l.kt)("p",null,"All binary operators support assignment operator shorthands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local x = 4\nx += 6\nx /= 2\nprint(x) -- 5\n")),(0,l.kt)("h2",{id:"pipes"},"Pipes"),(0,l.kt)("p",null,"Pipes are a new feature that forward an expression result into the arguments of\na function call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local getmessage = () -> {\n  return 'hello world'\n}\n\n'hello world' >> print()\n")),(0,l.kt)("p",null,"They are particularly useful for chaining function calls:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"{ 1, 2, 3}\n  >> map(n -> 2 * n)\n  >> reduce((sum, n) -> sum + n)\n  >> print() -- 11\n")),(0,l.kt)("p",null,"Because this behavior conflicts with that of method calls\n(",(0,l.kt)("inlineCode",{parentName:"p"},"mytable:somemethod()"),"), erde provides a syntax to pipe into methods, which\nplaces ",(0,l.kt)("inlineCode",{parentName:"p"},"self")," as the first parameter and the expression result as the second:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"mycustomclass\n  >> :mymethod()\n  >> :myothermethod()\n")),(0,l.kt)("p",null,"Note that pipes ",(0,l.kt)("strong",{parentName:"p"},"cannot")," pass multiple values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-erde"},"local getchildren = () -> {\n  return 'child1', 'child2'\n}\n\ngetchildren() >> print() -- only prints child!\n")),(0,l.kt)("p",null,"While erde ",(0,l.kt)("em",{parentName:"p"},"could")," allow pipes to pass multiple values, we restrict this to\navoid the headache of having to debug situations where too many or too few\narguments are getting passed somewhere in the pipe chain."))}u.isMDXComponent=!0}}]);