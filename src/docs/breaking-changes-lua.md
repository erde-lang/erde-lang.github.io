# Breaking Changes w/ Lua

While Erde attempts to keep most core behaviors consistent w/ Lua, there are a
couple of breaking changes.

## NEQ Operator: `~=` vs `!=`

In Erde, the NEQ operator uses `!=` instead of Lua's `~=`. This is mainly
because Erde keeps [Lua's bit operators](https://www.lua.org/manual/5.3/manual.html#3.4.2)
and allows for operator assignments w/ these operators. This means that `~=` is
already taken by the bitwise exclusive OR operator assignment:

```erde
local x = 5 -- 0b101
x ~= 3 -- 0b011
print(x) -- 6 (0b110)
```

Additionally, if we try to keep `~=` from Lua, the most natural token for the
logical unary NOT (that would replace the `not` keyword in Lua) would be `~`.
However, Lua already reserves the unary `~` operator token for the bitwise
unary NOT operator:

```lua
local x = 5 -- 0b101
print(~x) -- 2 (0b010)
```

## Function Call Parentheses

In Lua, function call parentheses are optional when there is only one argument
and it is either a string literal or table constructor:

```lua
print "my message"
print { message = "my table" }
```

Erde does ***not*** support this syntax, that is, function calls always require
parentheses. This forces consistency not only across the Erde projects, but also
with many other programming languages:

```lua
print("my message")
print({ message = "my table" })
```

## Local Functions by Default

In Lua, all variables are global by default. Since the function declaration
syntax in Lua is simply syntactic sugar for assigning an anonymous function to
a label, this means that the following creates a global function:

```lua title="Lua"
function myFunction()
  print('hello world')
end

-- equivalent to:
myFunction = function()
  print('hello world')
end
```

An **extremely** common mistake in Lua is to accidentally create a global
function instead of a local one, especially to those newer to the language
(I _still_ forget this occasionally). To accomodate for this, function
declarations in Erde create local functions by default. Thus the following are
equivalent:

```lua title="Lua"
local function myFunction()
  print('hello world')
end
```

```erde title="Erde"
function myFunction() {
  print('hello world')
}
```

Global functions can still be created in Erde using `global`:

```erde
global function myGlobalFunction() {
  print('hello world')
}
```

## Significant Whitespace for Ambiguous Syntax

In Lua, there is a well-known ambiguous syntax involving
[immediately invoked function expressions (iife)](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression):

```lua
local x = y
(function() print('hello world') end)()

-- can be interpreted as either:
local x = y;
(function() print('hello world') end)()

-- or:
local x = y(function() print('hello world') end)()
```

Lua uses semicolons to differentiate these statements. You can still use
semicolons in Erde, but Erde will also infer the intention based on the presence
of newlines. If there is a newline before the iife, it is parsed as a separate
statement, otherwise it is parsed as a function call:

```erde
-- parsed as two separate statements
local x = y
(() -> print('hello world'))()

-- parsed as one statement (back-to-back function calls)
local x = y(() -> print('hello world'))()
```

## Semicolons in Table Constructors

Lua allows for semicolons in table constructors, which,
[according to the docs](https://www.lua.org/pil/3.6.html),
is usually used to delimit different sections in a constructor:

```lua
local x = { x = 10, y = 45; 'one', 'two', 'three' }
```

Erde does ***not*** support this syntax, as it not only causes inconsistencies
in table constructor delimiters, but is also quite unreadable, since many are
not even aware that such syntax is valid Lua.
