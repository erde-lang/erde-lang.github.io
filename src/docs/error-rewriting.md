# Error Rewriting

When running Erde code directly (either via `erde.load` or the CLI), runtime
errors will report line numbers and file names for the _compiled Lua code_:

```erde title=myfile.erde
print('a' + 1)
```

```txt title=stdout
[string "erde::1::test.erde"]:3: attempt to add a 'string' with a 'number'
stack traceback:
    [C]: in metamethod 'add'
    [string "erde::1::test.erde"]:3: in main chunk
    (...tail calls...)
    [C]: in ?
```

In order to report references back to the original Erde file, we need to rewrite
the error. Erde originally tried to handle error rewriting automatically,
but this has many shortcomings:

  1. It's not clear whether to use `erde.rewrite` or `erde.traceback`, as
     the former is more suitable for errors meant to be caught, but the latter
     is more suitable if the error is allowed to propogate.
  1. Errors may be rewritten multiple times, causing misleading stacktraces.
  1. Throwing rewritten errors affects users wanting to use `xpcall` themselves,
     since the stack will only "unwind" from the point that the error was
     rethrown, rather than from the point of the original error.
  1. It's very difficult to handle the case where an error-prone function is
     declared in Erde, but called in Lua.

There were multiple attempts to overcome these, but every solution had major
flaws. Thus, to keep things simple and transparent, error rewriting is delegated
to the user.

:::danger IMPORTANT

Erde leaves it up to the user to properly handle error rewriting.

Users will generally want to use [`xpcall`](https://www.lua.org/pil/8.5.html)
with [`erde.rewrite`](/api#erderewrite) or [`erde.traceback`](/api#erdetraceback)
at the top level they wish to rewrite errors. For example:

```lua title=init.lua
local erde = require('erde')
erde.load()

local ok, result = xpcall(function()
  require('my_erde_entry')
end, erde.rewrite)

if not ok then
  error(result)
end
```

:::

:::info

If you are using the CLI (`erde run`), you probably do not need to manually
handle error rewriting. See [below](#cli-error-rewriting).

:::

### Package Loader Error Rewriting

When using the Erde package loader ([`erde.load`](/api#erdeload)), Lua's native
[`debug.traceback`](https://www.lua.org/manual/5.4/manual.html#pdf-debug.traceback)
function will be replaced with [`erde.traceback`](/api#erdetraceback), a wrapper
that handles error rewriting.

However, _this only handles cases where `debug.traceback` would be called_. For
example, if a user explicitly calls `error('my error')`, the error will _not_
be rewritten.

### CLI Error Rewriting

When running Erde files directly from the CLI (`erde run xxx.erde`), any top
level errors will be rewritten before printing to stdout. Additionally, since
`erde run` calls [`erde.load`](/api#erdeload) internally, `debug.traceback` will
also be overridden.
