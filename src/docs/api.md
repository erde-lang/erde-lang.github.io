# API

The `erde` package exports various functions for programmatic usage:

```lua
local erde = require('erde')
```

Users should ***not*** use nested Erde modules (ex. `erde.lib`), as these
are considered private and may introduce breaking changes across any version.

## `erde.load`

Injects the Erde package loader into
[`package.loaders`](https://www.lua.org/manual/5.1/manual.html#pdf-package.loaders)
(5.1, LuaJIT) or
[`package.searchers`](https://www.lua.org/manual/5.2/manual.html#pdf-package.searchers)
(5.2+), which allows Erde modules to be loaded using Lua's `require` function.

This function also replaces Lua's native
[`debug.traceback`](https://www.lua.org/manual/5.4/manual.html#pdf-debug.traceback)
function with [`erde.traceback`](#erdetraceback), a wrapper that handles
[error rewriting](/error-rewriting). The native `debug.traceback` is restored when
calling [`erde.unload`](#erdeunload).

```lua
erde.load()

-- Specify the Lua target. By default, this is inferred from the current Lua
-- version (`_VERSION`)
erde.load('5.1+')

-- Specify load options.
erde.load({
  -- string. If specified, will be used when compiling bit operations for pre
  -- Lua 5.3 targets.
  bitlib = '',

  -- boolean. If true, will prevent replacing Lua's native `debug.traceback`.
  keep_traceback = false,

  -- boolean. If true, source maps are not cached (less memory usage, but errors
  -- will point to line numbers in compiled code).
  disable_source_maps = false,
})

-- Specify Lua target and load options.
erde.load('5.1+', {
  bitlib = '',
  keep_traceback = false,
})
```

## `erde.unload`

Removes the Erde package loader and restores Lua's native
[`debug.traceback`](https://www.lua.org/manual/5.4/manual.html#pdf-debug.traceback)
function.

```lua
erde.unload()
```

## `erde.compile`

Takes a string of Erde code and returns the compiled Lua code.

```lua
print(erde.compile([[
  local name = 'world'
  print("hello {name}!")
]]))
-- local name = 'world'
-- print("hello " .. tostring(name) .. "!")

-- Specify options
erde.compile("print('hello world')", {
  -- string. Specify the Lua target when compiling the given source string.
  lua_target = '5.1+',

  -- string. If specified, will be used when compiling bit operations for pre
  -- Lua 5.3 targets.
  bitlib = '',

  -- string. If specified, will be used as the source name in error messages.
  alias = false,
}) -- hello world!
```

## `erde.run`

Takes a string of Erde code, compiles it to Lua, then runs it and returns the result.

```lua
print(erde.run([[
  local name = 'world'
  return "hello {name}!"
]])) -- hello world!

-- Specify options
erde.run("print('hello world')", {
  -- string. Specify the Lua target when compiling the given source string.
  lua_target = '5.1+',

  -- string. If specified, will be used when compiling bit operations for pre
  -- Lua 5.3 targets.
  bitlib = '',

  -- boolean. If true, source maps are not cached (less memory usage, but errors
  -- will point to line numbers in compiled code).
  disable_source_maps = false,

  -- string. If specified, will be used as the source name in error messages.
  alias = false,
}) -- hello world!
```

## `erde.rewrite`

Takes an error string and rewrites any Erde sources using cached source maps.
Particularly useful in combination with `xpcall` to have errors point back to
the original `*.erde` source files.

```lua
local erde = erde

erde.load()

local ok, result = xpcall(function()
  return require('my-erde-module')
end, erde.rewrite)

if not ok then
  error(result)
end
```

## `erde.traceback`

A drop-in replacement of Lua's [`debug.traceback`](https://www.lua.org/manual/5.4/manual.html#pdf-debug.traceback)
that provides [error rewriting](/error-rewriting) and removes some noisy
stacktraces from Erde internals. Often used in the same manner as
[`erde.rewrite`](#erderewrite).

```lua
erde.load()

local ok, result = xpcall(function()
  return require('my-erde-module')
end, erde.traceback)

if not ok then
  error(result)
end
```

:::info

When calling [`erde.load`](#erdeload), Lua's native
[`debug.traceback`](https://www.lua.org/manual/5.4/manual.html#pdf-debug.traceback)
function will be replaced with `erde.traceback` to allow for automatic error
rewriting.

:::
