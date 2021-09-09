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

## Logic Flow

Logic flow constructs are the same as lua, but use braces for scoping:

### if else

```erde
if n > 0 {
  print('n is positive')
} elseif n < 0 {
  print('n is negative')
} else {
  print('n is zero')
}
```

### for

```erde
for i = 1, 10, 1 {
  print(i)
}

for i, v in ipairs({ 1, 2, 3 }) {

}
```

### while

```erde
while true {

}
```

### repeat ... until

```erde
local n = 10
repeat {
  n = n - 1
} until (n < 0)
```

## Tables

When declaring tables, erde use `:` in place of `=` for key-value pairs. The
bracket syntax from lua has also been kept, in addition to allowing arbitrary
strings:

```erde
local t = {
  -- key value pairs
  hello: 'world',
  goodbye: 'society',
  [myhash('id')]: 'test',
  `random string`: 'test',

  -- number index values
  42,
  'i am a string at index 2',
}
```
