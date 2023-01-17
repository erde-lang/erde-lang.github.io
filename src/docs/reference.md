# Reference

## Comments

Comments are unchanged from [Lua Comments](https://www.lua.org/pil/1.3.html).
Both line comments and block comments are supported.

```erde
-- this is a single line comment

--[[
  this is a
  block comment
]]

--[=[
  this is a
  block comment
  with nested ']]'
]=]
```

## Basic Types

`true`, `false` and `nil` are unchanged from Lua.

### Numbers

Numbers are unchanged from Lua:

- [Lua 5.1 Numbers](https://www.lua.org/manual/5.1/manual.html#2.1) (see 'numerical constant')
- [Lua 5.2 Numbers](https://www.lua.org/manual/5.2/manual.html#3.1) (see 'numerical constant')
- [Lua 5.3 Numbers](https://www.lua.org/manual/5.3/manual.html#3.1) (see 'numeric constant')
- [Lua 5.4 Numbers](https://www.lua.org/manual/5.4/manual.html#3.1) (see 'numeric constant')

:::caution

Since later versions of Lua support more advanced number syntax than previous
versions, you should only use the syntax for your least supported Lua version.
If Erde detects that you are using a syntax that is not supported by your
compilation targets, it will throw an error:

<br />

```erde title=numbers.erde
print(0xA23p-4)
```

```bash title=bash
erde compile --target "5.1+" numbers.erde
# error: hex exponent sign not compatible w/ lua target 5.1+
```

:::

### Strings

Strings are _mostly_ unchanged from [Lua strings](https://www.lua.org/pil/2.4.html).
Erde additionally allows for string interpolation inside of double quote or
block strings (but _not_ single quote strings) using braces. Braces may be
escaped to be used literally. Escaping the end brace is optional.

```erde
local message = 'world'

print("hello {message}") -- hello world
print([[hello {message}]]) -- hello world

-- string interpolation is not allowed in single quote strings
print('hello {message}') -- hello {message}

-- escape for literal braces
print("hello \{message\}") -- hello {message}

-- escaping the end brace is optional
print("hello \{message}") -- hello {message}
```

## Tables

Tables are unchanged from [Lua tables](https://www.lua.org/pil/2.5.html).

```erde
local myTable = { hello = 'world', 'hello world' }
print(myTable.hello) -- world
print(myTable[1]) -- hello world
```

### Destructuring

Erde supports a simple form of
[destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment),
which is a convenient way to extract values from a table.

To extract keys from a table, you may specify a list of names in braces:

```erde
local myTable = { hello = 'world' }

-- equivalent to: `local hello = a.hello`
local { hello } = myTable

print(hello) -- world
```

To extract from the array section of a table, you can use brackets:

```erde
local myTable = {
  hello = 'world',
  'my first index',
  'my second index',
}

-- equivalent to: 
-- `local first = myTable[1]`
-- `local second = myTable[2]`
local [first, second] = myTable

print(first) -- my first index
print(second) -- my second index
```

Destructured values may be given default values, which will be applied when
the destructured value is `nil`:

```erde
local myTable = { hello = 'world' }

local { someNonExistentKey = 'goodbye world' } = myTable

print(myTable) -- goodbye world
```

Destructured keys may also be given aliases. Aliases simply rename the
destructured field and must come before defaults:

```erde
local myTable = { hello = 'world' }

-- Alias
local { hello: myHello } = myTable
print(myHello) -- world

-- Alias + Default
local { someNonExistentKey: myAlias = 'James Bond' } = myTable
print(myAlias) -- James Bond
```

:::note

Nested destructuring is **_not_** supported. This is 
intentional, as nested destructuring syntax often makes code much more cryptic
and difficult to read.

:::

:::info

Destructuring can be used in combination with the [`module` keyword](#module) to
achieve the import / export paradigm:

<br />

```erde title="foo.erde"
module function myModuleFunction() {
  print('hello world')
}
```

```erde title="bar.erde"
local { myModuleFunction } = require('foo')
myModuleFunction() -- hello world
```

:::

## Functions

Functions are generally the same as [Lua functions](https://www.lua.org/pil/5.html),
but use braces instead of `end`.

:::warning

Unlike Lua, ***functions declarations are local by default***. You can read
more about this [here](/breaking-changes-lua#local-functions-by-default).

:::

### Parameters Defaults

Erde has support for parameter defaults:

```erde
function greet(name = 'world') {
  return 'hello ' .. name
}

greet() -- hello world
```

Since all parameters in Lua are optional, any parameter in Erde may be assigned
a default value. In particular, defaulted parameters need not come after
non-defaulted ones:

```erde
function myfunc(a, b = 2, c) {
  return a + b + c
}

myfunc(1, nil, 3) -- 6
```

### Varargs

Erde supports [Lua varargs](https://www.lua.org/pil/5.2.html):

```erde
function sum(...) {
  local summands = { ... }
  local total = 0

  for _, summand in ipairs(summands) {
    total += summand
  }

  return total
}
```

Additionally, Erde allows for named varargs, which will automatically place them
into a table:

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
Instead, Erde opts for arrow functions:

```erde
local sum = (a, b) -> {
  return a + b
}
```

Arrow functions can implicitly take `self` as the first parameter by using a
fat arrow instead of a skinny one 
([inspired by MoonScript](https://moonscript.org/reference/#the-language/function-literals/fat-arrows)):

```erde
local Person = { name = 'world' }

Person.introduce = () => {
  print(self.name)
}
```

Arrow function may also specify an expression instead of a function body. In
this case, the expression becomes the return value. If multiple values are being
returned, the expression list needs to be wrapped in parentheses.

```erde
-- Return single value
local getRandomNumber = () -> math.random()

-- Return multiple values (must use parentheses!)
local getRandomNumbers = () -> (
  math.random(),
  math.random(),
)
```

The parameter parentheses are optional if there is only one parameter, as long 
as it does not have a default and is not variadic. This also works for
[destructured](#destructuring) parameters.

```erde
local greet = name -> print("hello {name}!")
greet('world')

-- w/ destructuring
local greet = { name } -> print("hello {name}!")
greet({ name = 'world' })
```


## Scopes

Scopes apply to both normal declarations and function declarations. Their syntax
is equivalent to Lua, although additional keywords have been added.

### local

Local variables are unchanged from
[Lua local variables](https://www.lua.org/pil/4.2.html).

### global

Global variables are unchanged from
[Lua global variables](https://www.lua.org/pil/1.2.html).
However, the `global` keyword has been added for convenience. Its use is highly
recommended, as it is much easier to find where the variable is declared.

```erde
global MY_GLOBAL = 1
```

:::warning

Since [functions default to `local` scope](/breaking-changes-lua#local-functions-by-default),
global functions need to be explicitly declared as global:

```erde
global function myGlobalFunction() {
  ...
}
```

:::

### module

The `module` keyword acts as an export statement. Any variable declared with
`module` will automatically be placed into a table, which is then returned at
the end of the script. It may only occur at the top level of a module and may
not be used in conjunction with `return`.

```erde title="foo.erde"
module function echo(message) {
  print(message)
}
```

```erde title="bar.erde"
local foo = require('foo')
foo.echo('hello world') -- hello world
```

:::caution

The `module` keyword conflicts with the built-in `module` function in Lua 5.1,
which means the latter is unusable in Erde (although the use of Lua's `module`
function is
[highly discouraged](http://lua-users.org/wiki/LuaModuleFunctionCritiqued)
anyways).

:::

:::info

The `module` keyword can be used in combination with [destructuring](#destructuring)
to achieve the import / export paradigm:

<br />

```erde title="foo.erde"
module function myModuleFunction() {
  print('hello world')
}
```

```erde title="bar.erde"
local { myModuleFunction } = require('foo')
myModuleFunction() -- hello world
```

:::

## Operators

### Arithmetic Operators

Arithmetic operators are the same as
[Lua arithmetic operators](https://www.lua.org/manual/5.4/manual.html#3.4.1).

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

<br />

:::info

Floor division (`//`) was not introduced until Lua 5.3, but will be polyfilled
by the compiler when necessary.

:::

### Relational Operators

Relational operators are the same as
[Lua relational operators](https://www.lua.org/manual/5.4/manual.html#3.4.4)
***except for the NEQ operator***, which uses `!=`. You can read more
about this decision [here](/breaking-changes-lua#neq-operator--vs-).

<center>

| Syntax | Operator         | Example           |
| :----- | :--------------- | :---------------- |
| ==     | equality         | 1 + 1 == 2        |
| !=     | inequality       | 1 + 1 != 3        |
| <      | less than        | 3 < 5             |
| >      | greater than     | 9 > 7             |
| <=     | less than or equal    | 9 >= 8, 9 >= 9    |
| >=     | greater than or equal | 9 <= 11, 11 <= 11 |

</center>

### Logical Operators

Erde keeps [Lua's logical operators](https://www.lua.org/manual/5.4/manual.html#3.4.5),
but changes the syntax to use symbols over keywords:

<center>

| Syntax | Operator  | Example                 |
| :----- | :-------- | :---------------------- |
| \|\|   | or        | true \|\| false == true |
| &&     | and       | true && false == false  |
| !      | unary NOT | !false == true          |

</center>

### Concatenation / Length Operators

Erde keeps Lua's
[concatenation operator](https://www.lua.org/manual/5.4/manual.html#3.4.6)
and [length operator](https://www.lua.org/manual/5.4/manual.html#3.4.7):

```erde
print('hello ' .. 'world') -- hello world
print(#'hello world') -- 11
```

### Bitwise Operators

Erde supports [Lua's bitwise operators](https://www.lua.org/manual/5.4/manual.html#3.4.2)
(Lua 5.3+):

<center>

| Syntax | Operator    | Example      |
|-:------|-:-----------|-:------------|
| \|     | or          | 4 \| 2 == 6  |
| &      | and         | 6 & 5 == 4   |
| ~      | xor         | 6 ~ 5 == 3   |
| ~      | unary NOT   | ~4 == 3      |
| >>     | right shift | 2 >> 1 == 1  |
| <<     | left shift  | 2 << 1 == 4  |

</center>
<br />

Compiling bitwise operators heavily depends on the Lua target. Erde uses the
following table to determine how bit operations should be compiled:

<center>

| Target | Compilation                                                         | Erde          | Lua                            |
|--:-----|--:------------------------------------------------------------------|--:------------|--------------------------------|
| jit    | [LuaBitOp](http://bitop.luajit.org/)                                | 6 & 5         | require('bit').band(6, 5)      |
| 5.1    | [LuaBitOp](http://bitop.luajit.org/)                                | 6 & 5         | require('bit').band(6, 5)      |
| 5.1+   | Requires `--bitlib` flag                                            | 6 & 5         | require('myBitLib').band(6, 5) |
| 5.2    | [bit32](https://www.lua.org/manual/5.2/manual.html#6.7)             | 6 & 5         | require('bit32').band(6, 5)    |
| 5.2+   | Requires `--bitlib` flag                                            | 6 & 5         | require('myBitLib').band(6, 5) |
| 5.3    | [Native Syntax](https://www.lua.org/manual/5.3/manual.html#3.4.2)   | 6 & 5         | 6 & 5                          |
| 5.3+   | [Native Syntax](https://www.lua.org/manual/5.3/manual.html#3.4.2)   | 6 & 5         | 6 & 5                          |
| 5.4    | [Native Syntax](https://www.lua.org/manual/5.4/manual.html#3.4.2)   | 6 & 5         | 6 & 5                          |
| 5.4+   | [Native Syntax](https://www.lua.org/manual/5.4/manual.html#3.4.2)   | 6 & 5         | 6 & 5                          |

</center>
<br />

You may also specify your own bit library using the `--bitlib` flag in the CLI.
The library methods are assumed to be:

<center>

| Syntax | Operator    | Method                       |
|-:------|-:-----------|-:----------------------------|
| \|     | or          | require('myBitLib').bor    |
| &      | and         | require('myBitLib').band   |
| ~      | xor         | require('myBitLib').bxor   |
| ~      | unary NOT   | require('myBitLib').bnot   |
| >>     | right shift | require('myBitLib').rshift |
| <<     | left shift  | require('myBitLib').lshift |

</center>
<br />

:::caution

Trying to compile bitwise operators when targeting 5.1+ or 5.2+ _requires_
the use of `--bitlib`. This is because there really is no "sane" default here.
By far the most common bit libraries for Lua are
[LuaBitOp](http://bitop.luajit.org/) (only works on 5.1 and 5.2) and
[bit32](https://www.lua.org/manual/5.2/manual.html#6.7) (only works on 5.2),
so it is left to the developer to decide which library to use.

:::

### Assignment Operators

All binary operators (except of course [Relational Operators](#relational-operators)) 
support assignment operator shorthands:

```erde
local x = 4
x += 6
x /= 2
print(x) -- 5
```

Similar to regular assignments, assignment operators can also perform multiple
assignments in a single statement:

```erde
local x, y, z = 0, 0, 0
x, y, z += 1, 2, 3
print(x, y, z) -- 1 2 3
```

## Logic Constructs

### Do Block

Same as [Lua do blocks](https://www.lua.org/pil/4.2.html) but with braces:

```erde
do {
  ...
}
```

### If Else

Same as [Lua if-else](https://www.lua.org/pil/4.3.1.html) but with braces:

```erde
if n > 0 {
  ...
} elseif n < 0 {
  ...
} else {
  ...
}
```

### For Loop

Same as Lua but with braces. Both [numeric for loops](https://www.lua.org/pil/4.3.4.html)
and [generic for loops](https://www.lua.org/pil/4.3.5.html) are supported.

```erde
-- numeric for loop
for i = 1, 10, 1 {
  ...
}

-- generic for loop
for i, v in ipairs({ 1, 2, 3 }) {
  ...
}
```

### While Loop

Same as [Lua while loop](https://www.lua.org/pil/4.3.2.html) but with braces:

```erde
while true {
  ...
}
```

### Repeat Until

Same as [Lua repeat-until](https://www.lua.org/pil/4.3.3.html) but with braces:

```erde
repeat {
  ...
} until true
```

### Continue Statements

Erde adds support for `continue` statements, which will advance to the next
iteration of the closest looping block (`for`, `while`, `repeat...until`).

```erde
for i = 1, 10 {
  if i % 2 == 0 {
    continue
  }

  print('i is odd')
}
```

### Goto

Erde has support for [Lua's `goto`](http://lua-users.org/wiki/GotoStatement)
(Lua 5.2+, LuaJIT):

```erde
goto myJump

print('this will not be printed')

::myJump::
print('hello world')
```

:::warning

Since there is no way to polyfill `goto` in Lua 5.1, trying to use `goto` when
targeting 5.1 or 5.1+ will result in a compilation error.

:::

## Trailing Commas

In Erde, any enclosed list (i.e. surrounded by paired tokens such as `{}`, `[]`, `()`)
is allowed to have trailing commas. For example:

```erde
function myFunction(
  myFirstLongFunctionParameter,
  mySecondLongFunctionParameter,
  myThirdLongFunctionParameter, -- trailing comma allowed!
) {
  print(
    myFirstLongFunctionParameter,
    mySecondLongFunctionParameter,
    myThirdLongFunctionParameter, -- trailing comma allowed!
  )
}
```

## Semicolons

Similar to Lua, Erde supports semicolons for separating statements:

```lua
local x = 4;print(x) -- 4
```

:::info

In Lua, semicolons are most often used to avoid
[ambiguous syntax](http://lua-users.org/lists/lua-l/2009-08/msg00543.html).
In Erde, [semicolons are usually not necessary](/breaking-changes-lua#significant-whitespace-for-ambiguous-syntax).

:::

## Return Parentheses

Functions in Erde are allowed to wrap their returns in parentheses:

```erde
function getBasicPairOperations(a, b) {
  return (
    a + b,
    a - b,
    a * b,
    a / b,
  )
}

-- as an arrow function:
local getBasicPairOperations = (a, b) -> (
  a + b,
  a - b,
  a * b,
  a / b,
)
```
