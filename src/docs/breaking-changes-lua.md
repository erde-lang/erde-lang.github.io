---
sidebar_position: 2
sidebar_label: Breaking Changes w/ Lua
---

# Breaking Changes w/ Lua

While Erde attempts to keep most core behaviors consistent w/ Lua, there are a
couple of necessary breaking changes.

## Neq Operator: `~=` vs `!=`

In Erde, the neq operator uses `!=` instead of Lua's `~=`. This is mainly 
because Erde keeps [Lua's bit operators](https://www.lua.org/manual/5.3/manual.html#3.4.2) 
and allows for operator assignments w/ these operators. This means that `~=` is
already taken by the bitwise exclusive OR operator assignment. For example:

```erde
local x = 0b101
x ~= 0b011
print(x) -- 0b110
```

Initially, since bitwise operators are hardly used by most programmers, bitwise 
operators were actually prefixed with `.` in order to preserve the `~=` operator.
Thus, the above would have been:

```erde
local x = 0b101
x .~= 0b011
print(x) -- 0b110
```

However, as the majority of bitwise operators are consistent across the majority
of programming languages, combined w/ the fact that almost all other languages 
use `!=`, I decided it would be best to simply use `!=` for the neq operator.

## Local Functions by Default

In Lua, everything is global by default. Since the function syntax in Lua is 
simply syntactic sugar for assigning an anonymous function to a label, this means
that the following creates a global function:

```lua
function myFunction()
  print('hello world')
end
```

This is an **extremely** common mistake in Lua, especially to those newer to the
language (I _still_ forget this occasionally). To accomodate for this, functions
in Erde are by default local. Thus the following are equivalent:

```lua
local function myFunction()
  print('hello world')
end
```

```erde
function myFunction() {
  print('hello world')
}
```

This is **not** true for labels. All declarations should have a scope keyword, 
as it makes code much easier to read (one can easily spot when a variable is 
declared). For functions, this is repetitive, as its obvious where a function is
declared.

```erde
-- Bad, this will create a global!
myFunction = () -> print('hello world')
```

## Spreading Varargs

In Lua, spreading varargs has inconsistent behavior depending on the position 
of the varargs. Consider the following:

```lua
function leadingVarargs(...)
  print({ ..., 'last' })
end

function trailingVarargs(...)
  print({ 'first', ... })
end

leadingVarargs('a', 'b') -- a last
trailingVarargs('a', 'b') -- first a b
```

Varargs get spread completely when appearing last in a list, and otherwise only 
return the first element (this is true for both table declarations and function
parameters).

In Erde, spreading varargs behave exactly like the spread operator. That is, the
varargs are spread completely regardless of their position:

```erde
function leadingVarargs(...) {
  print({ ..., 'last' })
}

function trailingVarargs(...) {
  print({ 'first', ... })
}

leadingVarargs('a', 'b') -- a b last
trailingVarargs('a', 'b') -- first a b
```
