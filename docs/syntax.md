---
sidebar_position: 1
---

# Erde Syntax

## Strings

Single/double quote strings are unchanged from lua:

```erde
local a = 'this is a single quote string'
local b = "this is a double quote string"
```

Strings that span multiple lines use backticks and allow for interpolation
using braces:

```erde
local msg = 'hello world!'
local a = `
  most programs
  start with: {msg}
`
```

You can escape backticks and braces to use them literally in a string:

```erde
local a = `
  this is a backtick: \`
  these are braces: \{\}
`
```

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
  print(i, v)
}
```

### while

```erde
while true {
  write_lua_programs()
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

### Declaration

When declaring tables, erde uses `:` in place of `=` for key-value pairs. The
bracket syntax from lua has been kept, but erde also allows for arbitrary
strings as keys:

```erde
local t = {
  -- key value pairs
  hello: 'world',
  goodbye: 'society',
  ['id:' .. getkey()]: 'test',
  'my-key': 'test',

  -- ipairs values
  42,
  'i am a string at index 2',
}
```

### Indexing (+ Optional Chaining)

Indexing tables is the same as lua, including that tables are 1-indexed.
However, erde also adds [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining),
although with some slightly different semantics than javascript:

```erde
print(parent?.name)
print(parent.children?[1])
parent.children?[1].wakeparent?('i need food')
```

Contrary to javascript (which always requires `?.`), here we only need `?`
before each index. As shown above, this also works for function calls.

You can also use optional chaining during assignment. In this case, the
assignment will simply not occur if the chain ends early:

```erde
local parent = {}
-- no children, doesn't do anything
parent.children?[1].name = 'big complainer'
```

### Destructuring

Erde tables support [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
Destructuring key-value pairs uses the form `:xxx` (note the preceeding `:`)
to distinguish itself from array destructuring:

```erde
local parent = {
  name: 'bsuth',
  'child1',
  'child2',
}

local { :name } = parent
local { firstkid, secondkid } = parent
print(name, firstkid, secondkid) -- bsuth child1 child2

-- or all in one line
local { :name, firstkid, secondkid } = parent
```

Nested destructuring is also supported, where the higher level index appears
first, followed by it's destructure. Note that they are separated by a space.
In this case, _only the deepest variables are kept in scope_.

```erde
local { :children { child1, child2 } } = parent
print(children) -- nil
print(child1) -- child
print(child2) -- child
```

All destructured values can be assigned defaults. Note that this is also true
for nested destructures:

```erde
local { :children = {} } = parent
local { :children { child1 = 'mychild' } = {} } = parent
print(child1) -- mychild
```

Note that nested destructuring will throw an `attempt to index a nil value`
error if the key does not exist. While we can simply assign defaults everywhere,
this can get pretty messy. Here, erde reuses the optional operator to allow
an early exit of nested destructures. In this case the destructured variables
will simply be `nil`:

```erde
local parent = {}
local { :children? { child1 } } = parent
print(child1) -- nil
```
