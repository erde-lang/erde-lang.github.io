# Reference

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
interpolation via braces when using double quote or block strings. Braces may be 
escaped to be used literally and escaping the end brace is optional.

```erde
local msg = 'world'

local doubleQuotes = "hello {msg}"
local multiline = [[hello {msg}]]

-- equivalent
local braceLiteral1 = '\{ 1, 2 \}'
local braceLiteral2 = '\{ 1, 2 }'
```

### Tables

[Lua Tables](https://www.lua.org/pil/2.5.html)

Tables are unchanged from Lua, including that tables use 1-based indexing.

```erde
local a = { hello = 'world' }
local b = { ...a }
print(b.hello) -- world
```

## Declarations / Scopes

Unlike Lua, all variable declarations in Erde require a scope keyword, which is 
one of `local`, `global`, or `module`. Erde will throw an error for declarations 
that are missing a scope.

```erde
-- okay
local myVar

-- error! undeclared variable
myOtherVar = 2
```

For function declarations, the scope is optional; when the scope is
omitted, the function will default to `local`:

```erde
-- These are equivalent!

function myFunction() { }
local function myFunction() { }
```

### local

[Lua Local Variables](https://www.lua.org/pil/4.2.html)

The `local` scope is unchanged from Lua.

### global

[Lua Global Variables](https://www.lua.org/pil/1.2.html)

Global variables in Erde _require_ the `global` keyword. Thus the following is
no longer valid:

```erde
MY_GLOBAL = 1
```

Erde will throw an error about trying to assign a value to an undeclared
variable. Instead, you can use:

```erde
global MY_GLOBAL = 1
```

Since Erde evaluates all variable declarations separately for each file, any
globals you use in one file that are declared in another will need to declared
before use:

```erde title="foo.erde"
global FOO = "foo"
```

```erde title="bar.erde"
global FOO

print(FOO) -- prints: foo
```

:::note

Since functions default to `local` scope, global functions need to be explicitly
declared as global:

```erde
global function myGlobalFunc() {}
```

:::

### module

The `module` keyword acts as an `export` statement. Anything declared with the
`module` scope will be placed into a table, which is then returned at the end of
the script. It may only occur at the top level of a module and may not be used
in conjunction with `return`.

```erde title="foo.erde"
module function echo(msg) {
  print(msg)
}
```

```erde title="bar.erde"
local foo = require('foo')
foo.echo('hello world') -- prints: hello world
```

Note that this keyword conflicts with the built-in `module` function in Lua 5.1,
which means that the `module` function is not usable in Erde (although the use
of Lua's `module` function is [highly discouraged](http://lua-users.org/wiki/LuaModuleFunctionCritiqued)
anyways).

## Operators

### Arithmetic Operators

[Lua Arithmetic Operators](https://www.lua.org/manual/5.4/manual.html#3.4.1)

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

<br />

:::note

Floor division (`//`) was not introduced until Lua 5.3, but is simple enough 
that the compiler will polyfill it for you if necessary.

:::

### Relational Operators

[Lua Relational Operators](https://www.lua.org/manual/5.4/manual.html#3.4.4)

The NEQ operator uses `!=` instead of Lua's `~=`. This is due to the fact that 
Erde supports both [Bitwise Operators](#bitwise-operators) as well as 
[Assignment Operators](#assignment-operators), which causes ambiguity on whether 
`~=` represents the traditional NEQ operator or the XOR assignment operator.
Because the bitwise operators are not used very often, I felt is was better to
maintain consistency with Lua here, especially since the NEQ operator has a 
very popular alternative that is present in nearly every other programming
language.

<center>

| Syntax | Operator         | Example           |
| :----- | :--------------- | :---------------- |
| ==     | equality         | 1 + 1 == 2        |
| !=     | inequality       | 1 + 1 != 3        |
| <      | less than        | 3 < 5             |
| >      | greater than     | 9 > 7             |
| <=     | less or equal    | 9 >= 8, 9 >= 9    |
| >=     | greater or equal | 9 <= 11, 11 <= 11 |

</center>

### Bitwise Operators

[Lua Bitwise Operators](https://www.lua.org/manual/5.4/manual.html#3.4.2)

Erde supports bitwise operators and uses the same syntax as Lua 5.3+:

<center>

| Syntax | Operator    | Example                  |
| :----- | :---------- | :----------------------- |
| \|     | or          | 0b100 .\| 0b010 == 0b110 |
| &      | and         | 0b110 .& 0b101 == 0b100  |
| ~      | xor         | 0b110 .~ 0b101 == 0b011  |
| ~      | unary NOT   | .~0b100 == 0b011         |
| >>     | right shift | 0b010 .>> 1 == 0b001     |
| <<     | left shift  | 0b010 .<< 1 == 0b100     |

</center>
<br />

When compiling to Lua 5.1 or 5.2, Erde will assume the target platform has
access to the [BitOp](http://bitop.luajit.org) module and bit operations will
compile down to `require('bit').xxx()` calls.

### Logical Operators

[Lua Logical Operators](https://www.lua.org/manual/5.4/manual.html#3.4.5)

Due to Erde favor of symbols over words, the logical operators are quite
different than Lua.

<center>

| Syntax | Operator  | Example                 |
| :----- | :-------- | :---------------------- |
| \|\|   | or        | true \|\| false == true |
| &&     | and       | true && false == false  |
| !      | unary NOT | !false == true          |

</center>
<br />

The unary logical NOT operator uses the `!` token to maintain consistency with
the NEQ operator (see [Relational Operators](#relational-operators)).

### Concatenation / Length Operator

[Lua Concatenation Operator](https://www.lua.org/manual/5.4/manual.html#3.4.6) <br />
[Lua Length Operators](https://www.lua.org/manual/5.4/manual.html#3.4.7)

Unchanged from Lua.

```erde
print("hello" .. "world") -- helloworld
print(#"hello") -- 5
```

### Assignment Operators

All binary operators (except of course [Relational Operators](#relational-operators)) 
support assignment operator shorthands:

```erde
local x = 4
x += 6
x /= 2
print(x) -- prints: 5
```

## Logic Constructs

All logic constructs in Lua (`do`, `if...else`, `for`, `while`, `repeat...until`)
are the same in Erde, with the exception of using braces instead of `end`. Erde
additionally adds a `continue` statement and `try...catch` construct.

### do

[Lua Do Block](https://www.lua.org/pil/4.2.html)

```erde
do {
  ...
}
```

### if else

[Lua Do Block](https://www.lua.org/pil/4.3.1.html)

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

[Lua Numeric For Loop](https://www.lua.org/pil/4.3.4.html) <br />
[Lua Generic For Loop](https://www.lua.org/pil/4.3.5.html)

```erde
for i = 1, 10, 1 {
  ...
}

for i, v in ipairs({ 1, 2, 3 }) {
  ...
}
```

### while

[Lua While Loop](https://www.lua.org/pil/4.3.2.html)

```erde
while true {
  ...
}
```

### repeat ... until

[Lua Repeat Until](https://www.lua.org/pil/4.3.3.html)

```erde
repeat {
  ...
} until true
```

### try ... catch

Erde support `try...catch` statements to catch errors thrown by Lua's `error`
function. Under the hood it is simply a wrapper around [pcall](https://www.lua.org/pil/8.4.html).

```erde
try {
  error('my error message')
} catch err {
  print(err) -- prints: my error message
}
```

The catch variable is optional and can be destructured if you are expecting a
table to be thrown:

```erde
-- Destructured error

try {
  error({ err = 'my error message' })
} catch { err } {
  print(err) -- prints: my error message
}

-- Ignored error

try {
  error('my error message')
} catch {
  print('my custom error message') -- prints: my custom error message
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

### goto

[Lua Goto](http://lua-users.org/wiki/GotoStatement)

Erde has support for the Lua's `goto` statement available in Lua 5.2+. Note that 
there is no way to mimic this behavior in 5.1, so trying to use `goto` when 
targeting 5.1+ will result in an error.

```erde
goto myJump

print('this is skipped')

::myJump::
print('hello world')
```

## Functions

[Lua Functions](https://www.lua.org/pil/5.html)

Function declarations are the same as Lua, but use braces instead of `end`:

```erde
local function sum(a, b) {
  return a + b
}
```

As stated in [Declarations / Scopes](#declarations--scopes), the scope of a 
function is optional and defaults to _local_. Functions also support the 
[module](#module) scope:

```erde
-- This is a local function!
function sum(a, b) {
  return a + b
}

-- This is an exported function
module function sum(a, b) {
  return a + b
}
```

### Default Parameters

Erde has support for parameter defaults. Since all parameters in Lua are
optional, any parameter in Erde may be assigned a default value. In particular,
defaulted parameters do not need to come after non-defaulted ones.

```erde
function myfunc(a, b = 1, c) {
  return a + b + c
}

myfunc(1, nil, 3) -- 5
```

### Varargs

[Lua Varargs](https://www.lua.org/pil/5.2.html)

Erde supports variadic arguments from Lua:

```erde
function sum(...) {
  local total = 0

  for _, summand in ipairs({ ... }) {
    total += summand
  }

  return total
}
```

Additionally, Erde provides the ability to give variadic arguments a name, which 
will place them into a table for you:

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

Arrow function mays also specify an expression instead of a function body. In
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
as it does not have a default and is not variadic. This includes destructured
parameters.

```erde
local greet = name -> print("hello {name}!")
greet({ name = 'world' })

-- w/ destructuring
local greet = { name } -> print("hello {name}!")
greet({ name = 'world' })

-- not valid!
local greet = ... -> print(...)
local greet = name = 'bob' -> print(name)
```

## Destructuring

Erde supports a simple form of [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment),
which is a convenient way to extract values from a table.

To extract keys from a table, you may specify a list of names in braces:

```erde
local a = { hello = 'world' }

-- Destructure `a` to extract the `hello` property
-- This is equivalent to `local hello = a.hello`
local { hello } = a

print(hello) -- prints: world
```

To extract from the array section of a table, you can use brackets:

```erde
local a = {
  hello = 'world',
  'first index',
  'second index',
}

-- Destructure array elements. This is equivalent to: 
-- `local first = a[1]`
-- `local second = a[2]`
local [first, second] = a

print(first) -- prints: first index
print(second) -- prints: second index
```

Destructured values may be given aliases or default values. Aliases simply 
rename the destructured field and default values are used to replace `nil`. When
using both, aliases must come before defaults

```erde
local a = { hello = 'world' }

-- Alias
local { hello: myHello } = a
print(myHello) -- prints: world

-- Default
local { world = 'default msg' } = a
print(world) -- prints: default msg

-- Alias + Default
local { world: myWorld = 'default msg' } = a
print(myWorld) -- prints: default msg
```

:::warning

Using aliases inside of array destructuring is invalid syntax, as every name is
already an alias.

:::

:::info

Unlike most languages, nested destructuring is **_not_** supported. This is 
intentional, as nested destructuring syntax makes code more cryptic and 
difficult to read.

:::
