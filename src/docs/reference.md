# Reference

:::caution

This reference assumes previous knowledge of [Lua](https://www.lua.org/manual/).

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
across Lua versions (in particular, each version is either the same or a 
superset of the previous version) you should only use the syntax for the least 
supported Lua version. If Erde detects that you are using a syntax that
is not supported by your compilation targets, it will throw an error.

For example, trying to compile `0xA23p-4` when targeting 5.1+ will cause 
compilation errors, since hexadecimal exponents were not added until 5.2.

### Strings

[Lua Strings](https://www.lua.org/pil/2.4.html)

String are _mostly_ unchanged from Lua. Erde additionally allows for string
interpolation inside of double quote or block strings (but not single quote
strings!) using braces. Braces may be escaped to be used literally and escaping
the end brace is optional.

```erde
local msg = 'world'

print('hello {msg}') -- hello {msg}
print("hello {msg}") -- hello world
print([[hello {msg}]]) -- hello world

-- equivalent
print("hello \{msg}") -- hello {msg}
print("hello \{msg\}") -- hello {msg}
```

### Tables

[Lua Tables](https://www.lua.org/pil/2.5.html)

Tables are unchanged from Lua.

```erde
local a = { hello = 'world', 'hello world' }
local b = { ...a }
print(b.hello) -- world
print(b[1]) -- hello world
```

### Functions

[Lua Functions](https://www.lua.org/pil/5.html)

Function declarations are the same as Lua, but use braces instead of `end`:

```erde
local function sum(a, b) {
  return a + b
}
```

:::warning

Unlike Lua, ***functions declarations are local by default***. You can read
more about this [here](/breaking-changes-lua#local-functions-by-default).

```erde
-- This is a local function!
function sum(a, b) {
  return a + b
}
```

:::

#### Parameters Defaults

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

#### Varargs

[Lua Varargs](https://www.lua.org/pil/5.2.html)

Erde supports variadic arguments from Lua:

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

Additionally, Erde allows for named varargs, which will place them into a table
for you:

```erde
function sum(...summands) {
  local total = 0

  for _, summand in ipairs(summands) {
    total += summand
  }

  return total
}
```

#### Arrow Functions

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

[Lua Local Variables](https://www.lua.org/pil/4.2.html)

The `local` scope keyword is unchanged from Lua.

### global

[Lua Global Variables](https://www.lua.org/pil/1.2.html)

Global variables are unchanged from Lua. However, the `global` scope keyword has
been added for convenience. Its use is highly recommended, as it is much easier
to find where the variable is declared.

```erde
global MY_GLOBAL = 1
```

:::note

Since [functions default to `local` scope](/breaking-changes-lua#local-functions-by-default), global functions need to be explicitly
declared as global:

```erde
global function myGlobalFunction() {
  ...
}
```

:::

### module

The `module` scope keyword acts as an `export` statement. Anything declared with
`module` will automatically be placed into a table, which is then returned at
the end of the script. It may only occur at the top level of a module and may
not be used in conjunction with `return`.

```erde title="foo.erde"
module function echo(msg) {
  print(msg)
}
```

```erde title="bar.erde"
local foo = require('foo')
foo.echo('hello world') -- hello world
```

:::caution

The `module` keyword conflicts with the built-in `module` function in Lua 5.1,
which means that the `module` function is not usable in Erde (although the use
of Lua's `module` function is [highly discouraged](http://lua-users.org/wiki/LuaModuleFunctionCritiqued)
anyways).

:::

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
that the compiler will polyfill it for you where necessary.

:::

### Relational Operators

[Lua Relational Operators](https://www.lua.org/manual/5.4/manual.html#3.4.4)

Relational operators are the same as in Lua ***with the exception of the NEQ
operator***, which uses `!=`. You can read more about this decision
[here](/breaking-changes-lua#neq-operator--vs-).

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

### Bitwise Operators

[Lua Bitwise Operators](https://www.lua.org/manual/5.4/manual.html#3.4.2)

Erde supports bitwise operators and uses the same syntax as Lua 5.3+:

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

| Target | Compilation                                                         | Input Example | Output Example                 |
|--:-----|--:------------------------------------------------------------------|--:------------|--------------------------------|
| jit    | [LuaBitOp]('http://bitop.luajit.org/')                              | 6 & 5         | require('bit').band(6, 5)      |
| 5.1    | [LuaBitOp]('http://bitop.luajit.org/')                              | 6 & 5         | require('bit').band(6, 5)      |
| 5.1+   | Requires `--bitLib` flag                                            | 6 & 5         | require('myBitLib').band(6, 5) |
| 5.2    | [bit32]('https://www.lua.org/manual/5.2/manual.html#6.7')           | 6 & 5         | require('bit32').band(6, 5)    |
| 5.2+   | Requires `--bitLib` flag                                            | 6 & 5         | require('myBitLib').band(6, 5) |
| 5.3    | [Native Syntax]('https://www.lua.org/manual/5.3/manual.html#3.4.2') | 6 & 5         | 6 & 5                          |
| 5.3+   | [Native Syntax]('https://www.lua.org/manual/5.3/manual.html#3.4.2') | 6 & 5         | 6 & 5                          |
| 5.4    | [Native Syntax]('https://www.lua.org/manual/5.4/manual.html#3.4.2') | 6 & 5         | 6 & 5                          |
| 5.4+   | [Native Syntax]('https://www.lua.org/manual/5.4/manual.html#3.4.2') | 6 & 5         | 6 & 5                          |

</center>
<br />

You may also specify your own bit library using the `--bitLib` flag in the CLI.
In this case, the library methods are assumed to be:

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
the use of `--bitLib`. This is because there really is no "sane" default here.
By far the most common bit libraries for Lua are
[LuaBitOp]('http://bitop.luajit.org/') (only works on 5.1 and 5.2) and
[bit32]('https://www.lua.org/manual/5.2/manual.html#6.7') (only works on 5.2),
so it is left to the developer to decide which library to use.

:::

### Logical Operators

[Lua Logical Operators](https://www.lua.org/manual/5.4/manual.html#3.4.5)

The logical operators in Erde are quite different than in Lua, but consistent
with most other programming languages.

<center>

| Syntax | Operator  | Example                 |
| :----- | :-------- | :---------------------- |
| \|\|   | or        | true \|\| false == true |
| &&     | and       | true && false == false  |
| !      | unary NOT | !false == true          |

</center>

### Concatenation / Length Operators

[Lua Concatenation Operator](https://www.lua.org/manual/5.4/manual.html#3.4.6) <br />
[Lua Length Operator](https://www.lua.org/manual/5.4/manual.html#3.4.7)

Unchanged from Lua.

```erde
print("hello " .. "world") -- hello world
print(#"hello world") -- 11
```

### Assignment Operators

All binary operators (except of course [Relational Operators](#relational-operators)) 
support assignment operator shorthands:

```erde
local x = 4
x += 6
x /= 2
print(x) -- 5
```

## Logic Constructs

All logic constructs in Lua (`do`, `if...else`, `for`, `while`, `repeat...until`)
are the same in Erde, with the exception of using braces for blocks instead of
`end`. Erde additionally adds a `continue` statement and `try...catch` construct.

Erde also has support for `goto` statements, but only when the compilation
target also supports it (i.e. all targets other than 5.1 and 5.1+).

### Do Block

[Lua Do Block](https://www.lua.org/pil/4.2.html)

```erde
do {
  ...
}
```

### If Else

[Lua If Else](https://www.lua.org/pil/4.3.1.html)

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

[Lua Numeric For Loop](https://www.lua.org/pil/4.3.4.html) <br />
[Lua Generic For Loop](https://www.lua.org/pil/4.3.5.html)

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

[Lua While Loop](https://www.lua.org/pil/4.3.2.html)

```erde
while true {
  ...
}
```

### Repeat Until

[Lua Repeat Until](https://www.lua.org/pil/4.3.3.html)

```erde
repeat {
  ...
} until true
```

### Try Catch

Erde supports `try...catch` statements to catch errors thrown by Lua's `error`
function. Under the hood, it is simply a wrapper around
[pcall](https://www.lua.org/pil/8.4.html).

```erde
try {
  error('my error message')
} catch err {
  print(err) -- my error message
}
```

The catch variable is optional and can be destructured if you are expecting a
table to be thrown:

```erde
try {
  error('my error message')
} catch {
  print('my custom error message') -- my custom error message
}

try {
  error({ message = 'my error message' })
} catch { message } {
  print(message) -- my error message
}
```

### Continue Statements

Erde adds support for continue statements, which will advance to the next
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

[Lua Goto](http://lua-users.org/wiki/GotoStatement)

Erde has support for the Lua's `goto` statement (added in Lua 5.2). Note that 
there is no way to mimic this behavior in 5.1, so trying to use `goto` when 
targeting 5.1 or 5.1+ will result in a compilation error.

```erde
goto myJump

print('this will not be printed')

::myJump::
print('hello world')
```

## Destructuring

Erde supports a simple form of
[destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment),
which is a convenient way to extract values from a table.

To extract keys from a table, you may specify a list of names in braces:

```erde
local a = { hello = 'world' }

-- equivalent to: `local hello = a.hello`
local { hello } = a

print(hello) -- world
```

To extract from the array section of a table, you can use brackets:

```erde
local a = {
  hello = 'world',
  'first index',
  'second index',
}

-- equivalent to: 
-- `local first = a[1]`
-- `local second = a[2]`
local [first, second] = a

print(first) -- first index
print(second) -- second index
```

Destructured values may be given aliases or default values. Aliases simply 
rename the destructured field and default values are applied to replace `nil`
values. When using both, aliases must come before defaults:

```erde
local a = { hello = 'world' }

-- Alias
local { hello: myHello } = a
print(myHello) -- world

-- Default
local { someNonExistentKey = 'goodbye' } = a
print(someNonExistentKey) -- goodbye

-- Alias + Default
local { someNonExistentKey: myAlias = 'James Bond' } = a
print(myAlias) -- James Bond
```

Destructuring is especially useful in combination with the [module](#module) 
scope keyword, as it allows us to achieve the import / export paradigm:

```erde title="foo.erde"
module function myModuleFunction() {
  print('hello world')
}
```

```erde title="bar.erde"
local { myModuleFunction } = require('foo')
myModuleFunction() -- hello world
```

:::caution

Using aliases inside of array destructuring is invalid syntax, as every name is
already an alias.

:::

:::info

Unlike other languages, nested destructuring is **_not_** supported. This is 
intentional, as nested destructuring syntax often makes code much more cryptic
and difficult to read.

:::
