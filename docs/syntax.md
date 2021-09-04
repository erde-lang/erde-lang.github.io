---
sidebar_position: 1
---

# Erde Syntax

## Strings

Single/double quote Strings are unchanged from lua:

```erde
local a = 'this is a single quote string'
local b = "this is a single quote string"
```

Strings that span multiple lines use backticks and allow for interpolation
using braces:

```erde
local msg = 'hello world!'
local c = `
  this is a multine
  string, which a
  greeting: {msg}
`
```

You can escape braces and backticks to use them literally in a string.

## If-Else

If-Else statements use braces to scope blocks, but do not use parentheses in
the conditional. Erde keeps the `elseif` keyword from lua:

```erde
if n > 0 {
  print('n is positive')
} elseif n < 0 {
  print('n is negative')
} else {
  print('n is zero')
}
```
