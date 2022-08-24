---
title: Introduction
hide_title: true
slug: /
---

<center>

![Erde Logo](../../static/logo.svg)

# Erde

</center>

<br />

Erde is a programming language that compiles to Lua. It uses a more symbol
favored syntax (similar to languages such as Rust, Golang, JavaScript, etc) and
has been designed to map very closely to Lua.

```erde
local function sumEvens(...numbers) {
  local sum = 0

  for _, n in ipairs(numbers) {
    if n % 2 == 0 {
      sum += n
    }
  }

  return sum
}

print(sumEvens(1, 3, 5, 7))             -- 0
print(sumEvens(2, 4, 6, 8))             -- 20
print(sumEvens(1, 2, 3, 4, 5, 6, 7, 8)) -- 20
```

Erde files may be compiled, run on the command line (using the `erde` CLI), or
even loaded directly from Lua scripts using the Erde package loader 
(`require('erde').load()`). This makes it easily possible to maintain a
codebase containing both Lua and Erde files and is particularly useful for
incremental adoption (in case you want to try out Erde on an existing codebase).

Erde runs on all major platforms (Lua 5.1 - 5.4 and LuaJIT) and can generate
Lua code for multiple target platforms. For example, targeting `5.3` will
generate code that is only guaranteed to work on Lua5.3 (may work on other
platforms as well, but not guaranteed) while targeting `5.1+` will generate code
that run on all major Lua platforms. Erde will make minor adjustments,
optimizations and additional error checks depending on the targeted version. By
default Erde targets `5.1+`.

Erde also provides extensive support for source maps and error rewriting. When
running via the CLI or `require('erde').load()`, any errors at runtime will have
their file names and line numbers modified to point back to the original Erde
files. This saves developers from having to dig through compiled code during
debugging.

## Core Principles

### Close Mapping to Lua

Erde was designed with the belief that learning how to program in Erde should
teach you how to program in Lua and vice-versa. For those already familiar w/
Lua, this provides an extremely low barrier to entry. For those newer to Lua,
it means low commitment, as it will be quite easy to switch to vanilla Lua later
on if you realize Erde is not right for your project.

### Minimalistic

Although not as extreme as Lua, Erde is quite minimalistic. It only adds
features that are either already present in most programming languages
(ex. parameter defaults) or are relatively simple yet powerful (ex. destructuring).

Features whose uses are too niche will not be considered for the language,
regardless of how convenient they may make certain situations. This keeps the
language simple (like Lua) and lowers the barrier to entry.

### Stable

After v1.0.0, Erde will be relatively stable, with plans to only add **at most**
one new language feature per year (perhaps even less on average). Instead,
efforts on the language will be applied to bug fixes, developer experience (DX),
and tooling.

## Additional Features

- Assignment Operators (+=, *=, etc)
- Parameter Defaults
- Named Varargs
- `continue` Statement
- String Interpolation
- Destructuring
- Arrow Functions
- Try Catch

## Why _another_ language that compiles to Lua?

Most of the languages that currently compile to Lua tend to be either
unmaintained, ill-documented, unstable, or too immature. The languages that
don't fall into any of these categories (such as [moonscript](https://moonscript.org)
and [fennel](https://fennel-lang.org)) tend to have syntax or design patterns
that diverge greatly from Lua. When I was newer to Lua, I didn't want to use any
of these languages due to fear of massive migrations later on if I needed to
switch back. Even once I became much more familiar with Lua, I simply didn't
want to learn an entirely new programming language when Lua already sufficed,
but was still frustrated with some of Lua's lacking features (such as the lack
of parameter defaults and assignment operators).

Ultimately, I wanted a language that I would _almost already know_ as a Lua
developer that addressed some of Lua's shortcomings. No such language existed
at the time, so I decided to create one.

## Why symbols over keywords?

Many of the commonly used programming languages today tend to use symbols over
keywords (Rust, Golang, Javascript, etc). This is meant to make Erde more
approachable for those coming from languages other than Lua.

I also personally prefer the syntax of these languages, as using keywords
everywhere tends to lead to somewhat noisy code and does not play as nicely with
text editors.

## Should I use Erde?

Although it might feel somewhat quirky at first, Lua is genuinely an amazingly
designed language. If you are only using Lua lightly, then working with Erde
will probably incur more overhead than it's worth. However, if you are working
with Lua a lot (or simply prefer the syntax of Erde), then by all means feel
free to try it out!
