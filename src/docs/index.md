---
title: ''
sidebar_label: Home
slug: /
sidebar_position: 1
---

Erde is a programming language that compiles to Lua. It was created with the
intention of allowing for more expressive Lua code.

```erde
local map = (t, callback) -> {
  local tcopy = {}
  for key, value in ipairs(t) {
    t[key] = callback(value)
  }
  return tcopy
}

local printDoubles = t -> t
  >> map(n -> 2 * n)
  >> unpack()
  >> print()

printDoubles({ 1, 2, 3 }) -- prints: 2 4 6
```

## Overview

Many of Lua's keywords and quirks have been kept to ensure Erde is approachable
for those coming from Lua and readable even for those who may not have much of
an interest. For example, variables still use `local`, tables are still
1-index based, and negation still uses the `~` operator.

```erde
local x = { 'hello world!' }
if x[1] ~= nil {
  print(x[1])
}
```
