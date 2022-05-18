---
title: ''
sidebar_label: Reference
---

:::caution

This reference assumes a basic working knowledge of 
[Lua](https://www.lua.org/manual/).

:::

## Comments

[Lua Comments](https://www.lua.org/pil/1.3.html)

Comments are unchanged from Lua. Both line comments and block comments are 
supported.

```erde
-- this is a single line comment

--[[
  this is a
  block comment
]]
```

## Types

`true`, `false` and `nil` are unchanged from Lua.

### Numbers

[Lua 5.4](https://www.lua.org/manual/5.4/manual.html#3.1)
[Lua 5.3](https://www.lua.org/manual/5.3/manual.html#3.1)
[Lua 5.2](https://www.lua.org/manual/5.2/manual.html#3.1)
[Lua 5.1](https://www.lua.org/manual/5.1/manual.html#2.1)
(See 'numeric/numerical constant')

Numbers are unchanged from Lua. However, since the syntax for numbers differs
across Lua 5.1 - Lua 5.4 (in particular, each version is either the same or a 
superset of the previous version) you should only use the syntax for the least 
supported Lua version. If Erde detects that you are using a syntax that
is not supported by your compilation targets, it will throw an error.

For example, trying to compile `0xA23p-4` when targeting Lua 5.1+ will cause 
compilation errors, since hexadecimal exponents were not added until Lua 5.2.

### Strings

[Lua Strings](https://www.lua.org/pil/2.4.html)

String are _mostly_ unchanged from Lua. Erde additionally allows for
interpolation in any string form using braces, which may be escaped to be used
literally. Escaping the end brace is optional.

```erde
local msg = 'world'

local singleQuotes = 'hello {msg}'
local doubleQuotes = "hello {msg}"
local multiline = [[hello {msg}]]

-- equivalent
local braceLiteral1 = '\{ 1, 2 \}'
local braceLiteral2 = '\{ 1, 2 }'
```

### Tables

[Lua Tables](https://www.lua.org/pil/2.5.html)

Tables are unchanged from Lua, including that tables use 1-based indexing.

Tables also support the [Spread Operator](#spread-operator).

```erde
local a = { hello = 'world' }
local b = { ...a }
print(b.hello) -- world
```

## Variables / Scope

Variable declarations are completely backwards compatible with Lua. However,
the `global` and `module` scope keywords also have been added.

### global

The `global` keyword is an **_optional_** keyword for declaring global
variables (or rather, declaring a variable in the current environment).

```erde
-- Good
global MY_GLOBAL = 1

if math.random(1, 10) > 5 {
  -- Bad
  global MY_GLOBAL = 1
}
```

The reason the `global` keyword is optional is that the parser cannot know the
environment the script will be run in, and thus is not able to determine the
difference between assigning a new value to an existing environment variable and
declaring a new variable.

### module

The `module` keyword acts as an `export` statement. All variables with the
`module` scope will be placed into a table, which is then returned at the end of
the script. It may only occur at the top level of a module and may not be used
in conjunction with `return`.

```erde title="foo.lua"
module function echo(msg) {
  print(msg)
}
```

```erde title="bar.lua"
local foo = require('foo')
foo.echo('hello world')
```

Note that this keyword conflicts with the built-in `module` function in Lua 5.1,
which means that the `module` function is not usable in Erde (although the use
of Lua's `module` function is [highly discouraged](http://lua-users.org/wiki/LuaModuleFunctionCritiqued)
anyways).

## Operators

### Arithmetic Operators

Unchanged from Lua.

<center>

| Syntax | Operator       | Example      |
| :----- | :------------- | :----------- |
| +      | addition       | 1 + 2 == 3   |
| -      | subtraction    | 1 - 2 == -1  |
| -      | unary minus    | -4           |
| \*     | multiplication | 2 \* 4 == 8  |
| /      | division       | 10 / 2 == 5  |
| //     | floor division | 10 // 4 == 2 |
| ^      | exponentiation | 2 ^ 6 == 64  |
| %      | modulo         | 6 % 2 == 0   |

</center>

### Relational Operators

Unchanged from Lua.

<center>

| Syntax | Operator         | Example           |
| :----- | :--------------- | :---------------- |
| ==     | equality         | 1 + 1 == 2        |
| ~=     | inequality       | 1 + 1 ~= 3        |
| <      | less than        | 3 < 5             |
| >      | greater than     | 9 > 7             |
| <=     | less or equal    | 9 >= 8, 9 >= 9    |
| >=     | greater or equal | 9 <= 11, 11 <= 11 |

</center>

### Logical Operators

Due to Erde favor of symbols over words, the logical operators are quite
different than Lua.

<center>

| Syntax | Operator  | Example               |
| :----- | :-------- | :-------------------- |
| \|     | or        | true \| false == true |
| &      | and       | true & false == false |
| ~      | unary NOT | ~false == true        |

</center>
<br />

The unary logical NOT operator uses the `~` token in order to maintain
consistency with inequality (`~=`). The `!` and `!=` tokens were intentionally
avoided as it would surely cause divides among the community on which to use. It
also leaves the `!` token available for use in the future.

### Bitwise Operators

Erde supports bitwise operators, but unlike most languages repurposes the
syntax. **_Traditional bitwise operators must be prefixed with `.`._**

<center>

| Syntax | Operator    | Example                  |
| :----- | :---------- | :----------------------- |
| .\|    | or          | 0b100 .\| 0b010 == 0b110 |
| .&     | and         | 0b110 .& 0b101 == 0b100  |
| .~     | xor         | 0b110 .~ 0b101 == 0b011  |
| .~     | unary NOT   | .~0b100 == 0b011         |
| .>>    | right shift | 0b010 .>> 1 == 0b001     |
| .<<    | left shift  | 0b010 .<< 1 == 0b100     |

</center>
<br />

The reason for the unconventional syntax is that Erde uses the `~` symbol as the
unary logical NOT to remain consistent with `~=`, which conflicts with Lua5.3+'s
unary bitwise NOT and bitwise exclusive OR. The traditional bitop symbols also
consume some of the most convenient syntax tokens while being seldom used by
the average developer. Prefixing traditional bitwise operators with `.` frees
these tokens for other uses, such as using `&` for logical AND (instead of the
more awkward `&&`) and `>>` for the [Pipe Operator](#pipe-operator).

When compiling to Lua 5.1 or 5.2, Erde will assume the target platform has
access to the [BitOp](http://bitop.luajit.org) module and bit operations will
compile down to `require('bit').xxx()` calls.

### Concatenation / Length Operators

Unchanged from Lua.

```erde
print("hello" .. "world") -- helloworld
print(#"hello") -- 5
```

### Ternary Operator

The [ternary operator](https://en.wikipedia.org/wiki/Ternary_operation) is fully
supported in Erde. It was added to avoid the more awkward `a and b or c` syntax
(which is **not** compatible with the ternary operator in the case `b` is false).

```erde
local x = myCondition ? trueExpr : falseExpr
```

### Null Coalascing Operator

The [null coalescing operator](https://en.wikipedia.org/wiki/Null_coalescing_operator)
is fully supported in Erde using `??`.

```erde
local x = myValue ?? defaultValue
```

### Spread Operator

Erde supports the Spread Operator, which expands table values into either
another table or function arguments.

```erde
local a = { hello = 'world' }
local b = { ...a }
print(b.hello) -- world
```

```erde
function add(a, b) {
  return a + b
}

local a = { 1, 2 }
print(add(...a)) -- 3
```

Note that key, value pairs will be ignored when spreading into function arguments.

### Pipe Operator

The pipe operator forwards expressions into the arguments of
a function call. The initial values may be given as a single expression or as
a list of expressions surrounded by parentheses.

```erde
 -- hello world
'hello world' >> print()

-- hello
-- world
('hello', 'world') >> print()
```

Each function call may also specify additional arguments. These values will
always be passed in _before_ the piped ones.

```erde
 -- a
 -- b
 -- c
('b', 'c') >> print('a')
```

Pipes can be (and often are) chained together, passing the returns of one pipe
function into the arguments of another.

```erde
function add(a, b) {
  return a + b
}

1 >> add(2) >> add(3) >> print() -- 6
```

### Assignment Operators

All binary operators support assignment operator shorthands. This includes the
[Null Coalescing Operator](#null-coalascing-operator).

```erde
local x = 4
x += 6
x /= 2
print(x) -- 5
```

## Logic Constructs

All logic constructs in Lua (`do`, `if...else`, `for`, `while`, `repeat...until`)
are the same in Erde, with the exception of using braces instead of `end`. Erde
additionally adds a `continue` statement and `try...catch` construct.

### do

```erde
do {
  ...
}
```

### if else

```erde
if n > 0 {
  ...
} elseif n < 0 {
  ...
} else {
  ...
}
```

### for

```erde
for i = 1, 10, 1 {
  ...
}

for i, v in ipairs({ 1, 2, 3 }) {
  ...
}
```

### while

```erde
while true {
  ...
}
```

### repeat ... until

```erde
repeat {
  ...
} until true
```

### try ... catch

Erde support `try...catch` statements to catch errors thrown by Lua's `error`
function. Under the hood it is simply a wrapper around `pcall`.

```erde
try {
  error('my error message')
} catch (err) {
  print(err) -- my error message
}
```

### continue

Erde adds the `continue` keyword, which will advance to the next iteration of
the closest looping block (`for`, `while`, `repeat...until`).

```erde
for i = 1, 10 {
  if i % 2 == 0 {
    continue
  }

  print('i is odd')
}
```

## Functions

Named functions are the same as Lua, but use braces instead of `end`:

```erde
local function sum(a, b) {
  return a + b
}
```

Table parameters may also be [destructured](#destructuring):

```erde
local function introduce({ name }) {
  print(name)
}

introduce({ name = 'world' })
```

### Parameter Defaults

Erde has support for parameter defaults. Since all parameters in Lua are
optional, any parameter in Erde may be assigned a default value, i.e. defaulted
parameters need not come after non-defaulted parameters.

```erde
function myfunc(a, b = 1, c) {
  return a + b + c
}

myfunc(1, nil, 3) -- 5
```

### Varargs

Erde supports varargs which, like Lua, **must** appear last in the parameter
list. Erde adds the option to name varargs.

```erde
function sum(...summands) {
  local total = 0

  for _, summand in ipairs(summands) {
    total += summand
  }

  return total
}
```

### Arrow Functions

Lua's anonymous function syntax (`function() ... end`) is not valid in Erde.
Instead, Erde opts for arrow functions.

```erde
local sum = (a, b) -> {
  return a + b
}
```

Arrow functions can implicitly take `self` as the first parameter by using a
fat arrow instead of a skinny one.

```erde
local Person = { name = 'world' }

Person.introduce = () => {
  print(self.name)
}
```

Arrow function mays also specify an expression instead of a function body. In
this case, the expression becomes the return value.

When returning multiple values, the returns must be surrounded by parentheses.

```erde
// these are equivalent

local add = (x, y) -> x + y
local add = (x, y) -> {
  return x + y
}

local echo = (x, y) -> (x, y)
local echo = (x, y) -> {
  return x, y
}
```

The parameter parentheses are optional if there is only one argument. Note that
this does _not_ work with [Parameter Defaults](#parameter-defaults) or
[Varargs](#varargs) but does work for [Destructuring](#destructuring).

```erde
local greet = { name } -> print('hello {name}!')
greet({ name = 'world' })
```

## Optional Chaining

Erde supports optional chaining, which allows an index to return `nil` rather
than throw an error if the variable is `nil`. It may be applied to key-value
indexes, number indexes, and function calls.

```erde
local a = nil

-- these are return nil
print(a?.b) -- key, value index
print(a?[1]) -- number index
print(a?()) -- function call
```

It is particularly useful when indexing an object deeply, where an intermediate
value may or may not be present.

```erde
local personA = {
  name = 'A',
  children = {
    { name = 'Aa' }
  }
}

local personB = { name = 'B' }

print(personA.children?[1].name) -- Aa
print(personB.children?[1].name) -- nil

```

You can also use optional chaining during assignment. In this case, the
assignment will simply not occur if the chain ends early.

```erde
local personB = { name = 'B' }
personB.children?[1].name = 'Bb'
print(personB.children?[1].name) -- nil
```

## Destructuring

Erde supports destructuring, which allows a convenient syntax to extract values
from a table. It may be used to either declare variables or in function
parameters.

```erde
-- declaration
local a = { hello = 'world' }
local { hello } = a
print(hello) -- world

-- function params
function introduce({ name }) {
  print(name)
}

introduce({ name = 'world' })
```

Specified names extract key-value pairs from the destructured table. To extract
array values, you may specify names in brackets.

```erde
local a = {
  hello = 'world',
  'first index',
  'second index',
}

local { hello, [first, second] } = a
```

The braces are optional if only array values are destructured.

```erde
local a = {
  hello = 'world',
  'first index',
  'second index',
}

local [first, second] = a
```

Destructured values may also be given aliases, which is particularly useful
if the destructured key is a generic name.

```erde
local a = {
  hello = 'world',
  'first index',
  'second index',
}

local { hello: worldHello } = a
print(worldHello) -- 'world'
```

Note that unlike most languages, nested destructuring is **_not_** supported.
This is intentional, as nested destructuring syntax often makes code more
cryptic and difficult to read.
