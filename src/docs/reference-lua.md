---
title: ''
sidebar_label: Reference (for Lua users)
---

## Comments

Comments are unchanged from Lua.

```erde
-- this is a single line comment
--[[
  this is a
  multiline comment
]]
```

## Numbers

Numbers are unchanged from Lua.

```erde
print(43)
print(1.9e1)
print(0xfp+2)
```

## Strings

String syntax is _mostly_ unchanged from Lua. Erde additionally allows for
interpolation in any string form using braces. Braces may be escaped to be used
literally.

```erde
local msg = 'world'

local singleQuotes = 'hello {msg}'
local doubleQuotes = "double quotes: hello {msg}"
local multiline = [[hello {msg}]]

local braceLiteral = 'A brace literal: \{ 1, 2 \}'
```

It is not necessary to escape the ending brace, but often helps with readability.

## Variables / Scope

Variable declarations are completely backwards compatible with Lua. However,
the `global` and `module` scope keywords also have been added.

### global

An optional `global` keyword has been added when declaring global variables. It
may only occur at the top level of a module.

```erde
-- Good
global MY_GLOBAL = 1

if math.random(1, 10) > 5 {
  -- Bad
  global MY_GLOBAL = 1
}
```

Note that Erde does not enforce the precence of the `global` operator, since the
parser does not know the environment the script will be run in.

### module

A `module` keyword has been added that acts as an `export` statement. All
variables with the `module` scope will be placed into a table, which is then
returned at the end of the script. Like the `global` keyword, it may only occur
at the top level of a module and may not be used in conjunction with `return`.

```erde title="foo.lua"
module function echo(msg) {
  print(msg)
}
```

```erde title="bar.lua"
local foo = require('foo')
foo.echo('hello world')
```

This keyword conflicts with the built-in `module` function in Lua 5.1, which
means that the `module` function is not usable in Erde. However, due to this
being the most fitting keyword and the [highly discouraged](http://lua-users.org/wiki/LuaModuleFunctionCritiqued)
use of Lua's `module`, the decision was made to move forward regardless.

## Logic Constructs

All logic constructs (`do`, `if...else`, `for`, `while`, `repeat...until`) in
Lua are the same in Erde, with the exception of using braces instead of `end`.

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

## Tables

### Declaration

When declaring tables, erde uses `:` in place of `=` for key-value pairs. The
bracket syntax from lua has been kept, but erde also allows for arbitrary
strings as keys:

```erde
local t = {
  -- key value pairs
  hello: 'world',
  goodbye: 'society',
  ['id:' .. getkey()]: 'test',
  'my-key': 'test',

  -- ipairs values
  42,
  'i am a string at index 2',
}
```

### Indexing (+ Optional Chaining)

Indexing tables is the same as lua, including that tables are 1-indexed.
However, erde also adds [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining),
although with some slightly different semantics than javascript:

```erde
print(parent?.name)
print(parent.children?[1])
parent.children?[1].wakeparent?('i need food')
```

Contrary to javascript (which always requires `?.`), here we only need `?`
before each index. As shown above, this also works for function calls.

You can also use optional chaining during assignment. In this case, the
assignment will simply not occur if the chain ends early:

```erde
local parent = {}
-- no children, doesn't do anything
parent.children?[1].name = 'big complainer'
```

### Destructuring

Erde tables support [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
Destructuring key-value pairs uses the form `:xxx` (note the preceeding `:`)
to distinguish itself from array destructuring:

```erde
local parent = {
  name: 'bsuth',
  'child1',
  'child2',
}

local { :name } = parent
local { firstkid, secondkid } = parent
print(name, firstkid, secondkid) -- bsuth child1 child2

-- or all in one line
local { :name, firstkid, secondkid } = parent
```

Nested destructuring is also supported, where the higher level index appears
first, followed by it's destructure. Note that they are separated by a space.
In this case, _only the deepest variables are kept in scope_.

```erde
local { :children { child1, child2 } } = parent
print(children) -- nil
print(child1) -- child
print(child2) -- child
```

All destructured values can be assigned defaults. Note that this is also true
for nested destructures:

```erde
local { :children = {} } = parent
local { :children { child1 = 'mychild' } = {} } = parent
print(child1) -- mychild
```

Note that nested destructuring will throw an `attempt to index a nil value`
error if the key does not exist. While we can simply assign defaults everywhere,
this can get pretty messy. Here, erde reuses the optional operator to allow
an early exit of nested destructures. In this case the destructured variables
will simply be `nil`:

```erde
local parent = {}
local { :children? { child1 } } = parent
print(child1) -- nil
```

## Functions

### Declaration

Named functions are the same as in Lua, but with braces:

```erde
-- local function
local function sum(a, b) {
  return a + b
}

-- non-local function
function sum(a, b) {
  return a + b
}
```

However, anonymous functions do NOT use the lua `function() ... end` syntax.
Instead, erde opts for arrow functions:

```erde
local greet = (name) -> {
  print(`hello {name}!`)
}
```

### Parameters

Erde has support for optional parameters are varargs. Optional parameters are
assigned a default value when nil and must come after non-optional parameters
in the arguments list. Varargs must appear as the last parameter and may by
optionally named:

```erde
local greet = (prefix, suffix = '!', ...names) -> {
  print(prefix)
  for _, name in ipairs(name) {
    print(name)
  }
  print(suffix)
}

greet('hello') -- hello!
greet('hello', nil, 'world') -- hello world!
greet('hello', '...', 'a', 'b') -- hello a b ...
```

Table parameters may also be [destructured](#destructuring):

```erde
local greetperson = ({ :name }) -> {
  print('hello {name}!')
}

greetperson({ name = 'world' })
```

### Fat vs Skinny Arrows

Like lua, erde provides a shorthand for declaring functions that take self as
the first parameter. In this case, the skinny arrow (`->`) is replaced with a
fat one (`=>`):

```erde
local Person = { name = 'bsuth' }

Person.introduce = () => {
  print(`Hi, my name is {self.name}`)
}
```

### Implicit Return

Functions may specify an expression instead of a function body. In this case,
the expression becomes the return value:

```erde
// these are equivalent

local add = (x, y) -> x + y

local add = (x, y) -> {
  return x + y
}
```

### Optional Parentheses

If there is only one argument, then you may omit the parentheses. Note that this
does _not_ work for optional parameters or varargs, but does work for
destructuring:

```erde
local echo = name -> print(name)
local greet = { :name } -> print('hello {name}!')
```

## Operators

### Arithmetic Operators

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

### Bitwise Operators

Erde supports bitwise operators, but unlike most languages repurposes the
syntax. **_Traditional bitwise operators must be prefixed with `.`._**

The reason for this is that the bitwise operators are far too seldom used to
consume some of the most important operator characters available. The
traditional bitwise operators have been assigned different functions in order to
reduce noise. See [Logical Operators](#logical-operators) and [Pipes](#pipes).

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

### Relational Operators

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

As mentioned in the [Bitwise Operators](#bitwise-operators) section, the
traditional bitwise operator syntax is available for use, and this is one such
where we employ it. Instead of the awkward doubling of operators (such as `&&`
and `||`), we simply use the traditional bitwise counterparts.

<center>

| Syntax | Operator  | Example               |
| :----- | :-------- | :-------------------- |
| \|     | or        | true \| false == true |
| &      | and       | true & false == false |
| ~      | unary NOT | ~false == true        |

</center>

The unary logical NOT operator uses the `~` syntax in order to maintain
consistency with inequality (`~=`). Many will have mixed feelings about this,
but I felt reluctant to change the `~=` syntax. I wanted erde to feel very
natural specifically for _lua_ developers in particular, and having used lua for
awhile now I have grow very accustomed (and even now enjoy) the syntax. After
the decision to keep `~=` was made, I subsequently chose to adopt `~` as the
unary NOT operator in order to maintain consistency.

I intentionally did not add `!` and `!=` as aliases, as I feel the preference
would cause divides the community and it leaves the `!` syntax open for future
operations.

### Misc Operators

#### Concatenation/Length Operators

Unchanged from lua.

```erde
print("hello" .. "world") -- helloworld
print(#"hello") -- 5
```

#### Ternary Operator

```erde title="erde"
a ? b : c
```

```lua title="lua"
(function()
  if a then
    return b
  else
    return c
  end
)()
```

#### Null Coalascing Operator

```erde title="erde"
a ?? b
```

```lua title="lua"
(function()
  if a ~= nil  then
    return a
  else
    return b
  end
)()
```

### Assignment Operators

All binary operators support assignment operator shorthands:

```erde
local x = 4
x += 6
x /= 2
print(x) -- 5
```

## Pipes

Pipes are a new feature that forward an expression result into the arguments of
a function call:

```erde
local getmessage = () -> {
  return 'hello world'
}

'hello world' >> print()
```

They are particularly useful for chaining function calls:

```erde
{ 1, 2, 3}
  >> map(n -> 2 * n)
  >> reduce((sum, n) -> sum + n)
  >> print() -- 11
```

Because this behavior conflicts with that of method calls
(`mytable:somemethod()`), erde provides a syntax to pipe into methods, which
places `self` as the first parameter and the expression result as the second:

```erde
mycustomclass
  >> :mymethod()
  >> :myothermethod()
```

Note that pipes **cannot** pass multiple values:

```erde
local getchildren = () -> {
  return 'child1', 'child2'
}

getchildren() >> print() -- only prints child!
```

While erde _could_ allow pipes to pass multiple values, we restrict this to
avoid the headache of having to debug situations where too many or too few
arguments are getting passed somewhere in the pipe chain.
