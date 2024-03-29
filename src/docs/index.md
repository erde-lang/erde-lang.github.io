---
title: Introduction
hide_title: true
slug: /
---

<center>

![Erde Logo](../../static/logo.svg)

# Erde

</center>

:::tip VERSION 1.0.0

As of August 11, 2023, version 1.0.0 has been released! Thank you to everyone
who tried out Erde and especially to those who gave feedback. These little
gestures were surprisingly encouraging, and I hope the result is something
that at least a few can find useful. Enjoy!

:::

Erde is a programming language that compiles to Lua. It uses a more symbol
favored syntax (similar to languages such as Rust, Golang, JavaScript, etc) and
has been designed to map very closely to Lua.

```erde
local function sum_evens(...numbers) {
  local sum = 0

  for _, n in ipairs(numbers) {
    if n % 2 == 0 {
      sum += n
    }
  }

  return sum
}

print(sum_evens(1, 3, 5, 7))             -- 0
print(sum_evens(2, 4, 6, 8))             -- 20
print(sum_evens(1, 2, 3, 4, 5, 6, 7, 8)) -- 20
```

Erde files may be compiled, run on the command line (using the `erde` CLI), or
loaded directly from Lua scripts using the Erde package loader. The latter is
particularly useful if you don't want to keep recompiling code or if you want
to try out Erde on an existing codebase (incremental adoption).

Erde runs on all major Lua platforms (Lua 5.1 - 5.4 and LuaJIT) and can generate
Lua code for multiple target platforms. For example, targeting `5.1+` will
generate code that runs on all major Lua platforms, while targeting `5.3` will
generate code that is only guaranteed to work on Lua5.3 (may work on other
platforms as well, but not guaranteed). The currently supported targets are:

<center>
5.1 | 5.1+ | 5.2 |  5.2+ |  5.3 |  5.3+ |  5.4 |  5.4+ |  jit (LuaJIT)
</center>
<br />

Erde will make minor adjustments, optimizations and additional error checks
depending on the targeted version. By default, Erde targets `5.1+` when
compiling and the current Lua `_VERSION` when using the package loader.

## Examples

See the [playground](/playground) for a full list of interactive examples.

### Operator Assignments

```erde
local a = 1
a += 1
a *= 5
print(a) -- 10
```

### Parameter Defaults

```erde
local function greet(message = 'hello world') {
  print(message)
}

greet() -- hello world
greet('goodbye world') -- goodbye world
```

### String Interpolation

```erde
local msg = 'world'
print("hello {msg}") -- hello world
```

### Destructuring

```erde
-- Map destructuring
local { map, filter, reduce  } = require('pl.tablex')

-- Array destructuring
local my_table = { 'hello', 'world' }
local [ msg1, msg2 ] = my_table
print(msg1) -- hello
print(msg2) -- world
```

## Core Principles

### Close Mapping to Lua

Erde was designed with the belief that learning how to program in Erde should
teach you how to program in Lua and vice-versa. For those already familiar w/
Lua, this provides an extremely low barrier to entry while for those newer to
Lua, it means low commitment, as it will be quite easy to switch to vanilla Lua
later on if you realize Erde is not right for your project.

### Minimalistic

Although not as extreme as Lua, Erde is quite minimalistic. It only adds
features that are either already present in most programming languages
(ex. parameter defaults) or are relatively simple yet powerful
(ex. destructuring). It is meant to feel like a more convenient Lua, but most
importantly it has to actually still feel like Lua.

### Stable

With the release of v1.0.0, Erde should be relatively stable, with plans to only
add **at most** one new language feature per year (perhaps even less on average).
Instead, efforts on the language will be applied to bug fixes, developer
experience (DX), and tooling.

## FAQ

### Why _another_ language that compiles to Lua?

Before writing Erde, most of the languages that compiled to Lua were either
unmaintained, ill-documented, or too immature. The languages that didn't fall
into any of these categories (such as [moonscript](https://moonscript.org)
and [fennel](https://fennel-lang.org)) have syntax or design patterns that
diverge greatly from Lua.

Ultimately, I wanted a language that I would _almost already know_ as a Lua
developer that addressed some of Lua's shortcomings (such as the lack of
parameter defaults and operator assignments). No such language existed at the
time, so I decided to create one.

### Why symbols over keywords?

Many of the commonly used programming languages today tend to use symbols over
keywords (Rust, Golang, Javascript, etc). This is meant to make Erde more
approachable for those coming from languages other than Lua.

I also personally prefer the syntax of these languages, as using keywords
everywhere tends to lead to somewhat noisy code and does not play as nicely with
text editors.

### Should I use Erde?

Although it has its shortcomings and might feel somewhat quirky at first, Lua is
genuinely an amazingly designed language. If you are only using Lua lightly,
then working with Erde will probably incur more overhead than it's worth.
However, if you are working with Lua a lot (or simply prefer the syntax of Erde),
then by all means feel free to try it out!
