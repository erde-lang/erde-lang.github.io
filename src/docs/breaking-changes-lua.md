# Breaking Changes w/ Lua

While Erde attempts to keep most core behaviors consistent w/ Lua, there are a
couple of necessary breaking changes.

## NEQ Operator: `~=` vs `!=`

In Erde, the NEQ operator uses `!=` instead of Lua's `~=`. This is mainly 
because Erde keeps [Lua's bit operators](https://www.lua.org/manual/5.3/manual.html#3.4.2) 
and allows for operator assignments w/ these operators. This means that `~=` is
already taken by the bitwise exclusive OR operator assignment:

```erde
local x = 0b101
x ~= 0b011
print(x) -- 0b110
```

Furthermore, Lua reserves the unary `~` operator token for the bitwise unary NOT
operator. This causes a problem if we try to keep `~=` from Lua, since the
most natural token for the logical unary NOT (that would replace the `not`
keyword in Lua) would also be `~`.

Although it was a breaking change I did not want to make (as I've actually grown
fond of the `~=` token), these token collisions combined with the fact that
almost all other languages use `!=`, were enough to convince me that it would be
best to simply use `!=` for the NEQ operator.

## Local Functions by Default

In Lua, everything is global by default. Since the function declaration syntax
in Lua is simply syntactic sugar for assigning an anonymous function to a label,
this means that the following creates a global function:

```lua
function myFunction()
  print('hello world')
end

-- equivalent to:
myFunction = function()
  print('hello world')
end
```

This is an **extremely** common mistake in Lua, especially to those newer to the
language (I _still_ forget this occasionally). To accomodate for this, function
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
