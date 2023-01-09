# Breaking Changes w/ Lua

While Erde attempts to keep most core behaviors consistent w/ Lua, there are a
couple of necessary breaking changes.

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

## Local Functions by Default

In Lua, everything is global by default. Since the function declaration syntax
in Lua is simply syntactic sugar for assigning an anonymous function to a label,
this means that the following creates a global function:

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
