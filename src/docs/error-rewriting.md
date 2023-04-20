# Error Rewriting

Since Erde code compiles to Lua, runtime errors will report line numbers and
file names for the _compiled Lua code_:

```erde title=myfile.erde
print('a' + 1)
```

```txt title=stdout
[string "__erde_source_1__"]:5: attempt to add a 'string' with a 'number'
stack traceback:
    [C]: in metamethod 'add'
    [string "__erde_source_1__"]:5: in main chunk
    (...tail calls...)
    [C]: in ?
```

In order to report references back to the original Erde file, we need to rewrite
the error.

:::danger IMPORTANT

Erde leaves it up the user to properly handle error rewriting and
provides the [`erde.rewrite`](/api#erderewrite) and [`erde.traceback`](/api#erdetraceback)
functions to do so. This means that users should use [`xpcall`](https://www.lua.org/pil/8.5.html)
with `erde.rewrite` / `erde.traceback` at the top level they wish to rewrite errors:

```erde title=myfile.erde
local ok, result = xpcall(() -> {
  print('a' + 1)
}, require('erde').rewrite)

if !ok {
  error(result)
}
```

```txt title=stdout
erde: myfile.erde:1: attempt to add a 'string' with a 'number'
stack traceback:
    [C]: in metamethod 'add'
    myfile.erde:1: in main chunk
    (...tail calls...)
    [C]: in ?
```

:::

Erde originally tried to handle all error rewriting automatically by wrapping
the Erde package loader with `xpcall` + `erde.rewrite` / `erde.traceback`.
However, this turned out to have a lot of shortcomings:

  - It's not clear whether to use `erde.rewrite` or `erde.traceback`. Most of the
    time, we want `erde.traceback` if the error propogates all the way to the
    top, but `erde.rewrite` if we want to catch the error ourselves.
  - Deeply nested errors will be rewritten multiple times (since we are
    constantly catching and rethrowing rewritten errors). Using `erde.traceback`
    in this case potentially causes duplicate stacktraces at every level.
  - Injecting our own `xpcall` requires us to _change the call stack_. Since we
    are catching and rethrowing errors, users wanting to use `xpcall` themselves
    before the stack unwinds will only get to do so from the point that we
    rethrew the error.
  - This still does not handle the case where an error-prone function is
    declared in Erde, but only run after the module has been loaded.

There were multiple attempts to overcome these, but every solution had major
flaws, not to mention somewhat confusing and overcomplicated behaviors. Thus,
to keep things simple and transparent, error rewriting is simply delegated to
the user.

However, besides providing helper functions, Erde makes some extra attempts to
ease error rewriting:

### Overriding `debug.traceback`

When using the Erde package loader ([`erde.load`](/api#erdeload)), Lua's native
[`debug.traceback`](https://www.lua.org/manual/5.4/manual.html#pdf-debug.traceback)
function will be replaced with [`erde.traceback`](/api#erdetraceback), a wrapper
that handles error rewriting.

However, _this only handles cases where `debug.traceback` would be called_. For
example, if a user explicitly calls `error('my error')`, the error will _not_
be rewritten.

### CLI (`erde run`)

When running Erde files directly from the CLI (ex. `erde run my_erde_file.erde`),
any top level errors will be rewritten before printing to stdout. Additionally,
since `erde run` calls [`erde.load`](/api#erdeload) internally, `debug.traceback`
will also be overridden.

## Example

The following is taken from my personal [NeoVim](https://neovim.io/) config.
The combination of both `xpcall` and the overridden `debug.traceback` is enough
to handle errors both during `require`, as well as in callbacks (such as keymappings).

```lua title=nvim/init.lua
local erde = require('erde')
erde.load()

local ok, result = xpcall(function()
  require('rc') -- 'rc.erde' is my Erde entrypoint
end, erde.rewrite)

if not ok then
  error(result)
end
```
