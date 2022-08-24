# Examples

## Problem Examples

### Fibonacci

Computes the nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

```erde
function fibonacci(n = 0) {
  if n == 0 {
    return 0
  } else {
    local a, b = 0, 1

    for i = 2, n {
      a, b = b, a + b
    }

    return b
  }
}

print(fibonacci(0)) -- 0
print(fibonacci(1)) -- 1
print(fibonacci(2)) -- 1
print(fibonacci(3)) -- 2
print(fibonacci(4)) -- 3
print(fibonacci(5)) -- 5
print(fibonacci(6)) -- 8
print(fibonacci(7)) -- 13
print(fibonacci(8)) -- 21
print(fibonacci(9)) -- 34
```

### FizzBuzz

A simple childrens game commonly used in programming interviews
([Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz)).

```erde
for i = 1, 100 {
  if i % 15 == 0 {
    print('FizzBuzz')
  } elseif i % 3 == 0 {
    print('Fizz')
  } elseif i % 5 == 0 {
    print('Buzz')
  } else {
    print(i)
  }
}
```

### Read-Only Tables

Erde port of Lua's [Read-Only Tables](https://www.lua.org/pil/13.4.5.html),
commonly used to illustrate the power of metatables.

```erde
function readOnly(t) {
  return setmetatable({}, {
    __index = t,
    __newindex = () -> error('attempt to update a read-only table', 2)
  })
}
```

## Feature Examples

### Assignment Operators

[Documentation](/reference#assignment-operators)

```erde
local a = 1
print(a) -- 1

a += 1
print(a) -- 2

a *= 5
print(a) -- 10
```

### Valid Anagram

Returns true if `s` and `t` are [anagrams](https://en.wikipedia.org/wiki/Anagram),
otherwise false. Does not take casing into account.

```erde
function getCharCounts(str) {
  local charCounts = {}

  for i = 1, #str {
    local char = str:sub(i,i)
    charCounts[char] ||= 0
    charCounts[char] += 1
  }

  return charCounts
}

function isAnagram(s, t) {
  local sCharCounts = getCharCounts(s:gsub('%s+', ''))
  local tCharCounts = getCharCounts(t:gsub('%s+', ''))

  for char, count in pairs(sCharCounts) {
    if tCharCounts[char] != count {
      return false
    } else {
      tCharCounts[char] = nil
    }
  }

  for char, count in pairs(tCharCounts) {
    return false -- cannot have leftover chars
  }

  return true
}

print(isAnagram('anagram', 'nag a ram')) -- true
print(isAnagram('binary', 'brainy')) -- true
print(isAnagram('new york times', 'monkeys write')) -- true

print(isAnagram('anagram', 'nag a ran')) -- false
print(isAnagram('binari', 'brainy')) -- false
print(isAnagram('new york times', 'monkeys rite')) -- false
```

### Parameter Defaults

[Documentation](/reference#parameters-defaults)

```erde
function greet(message = 'hello world') {
  print(message)
}

greet() -- hello world
greet('goodbye world') -- goodbye world
```

### Named Varargs

[Documentation](/reference#varargs)

```erde
function sum(...summands) {
  local total = 0

  for i, summand in ipairs(summands) {
    total += summand
  }

  return total
}

print(sum(1, 2, 3, 4)) -- 10
```

### Continue

[Documentation](/reference#continue-statements)

```erde
function printOdds(...) {
  for _, value in ipairs({ ... }) {
    if value % 2 == 0 {
      continue
    }

    print(value)
  }
}

printOdds(1, 2, 3, 4, 5) -- 1 3 5
```

### String Interpolation

[Documentation](/reference#strings)

```erde
local msg = 'world'

print('hello {msg}') -- hello {msg}
print("hello {msg}") -- hello world
print([[hello {msg}]]) -- hello world

-- escaped brace
print("hello \{msg}") -- hello {msg}
```

### Destructuring

[Documentation](/reference#destructuring)

```erde
local myTable = {
  myValue = 5,
  'child1',
  'child2',
}

-- map destructure
local { myValue } = myTable
print(myValue) -- 5

-- array destructure
local [ firstChild, secondChild ] = myTable
print(firstChild) -- child1
print(secondChild) -- child2
```

### Arrow Functions

[Documentation](/reference#arrow-functions)

```erde
local ok, result = pcall(() -> {
  if someCondition {
    error('my error')
  } else {
    return 'no error'
  }
})
```

```erde
local mypairs = t -> (next, t, nil)

for key, value in mypairs({ 'a', 'b', 'c' }) {
  -- 1 a
  -- 2 b
  -- 3 c
  print(key, value)
}
```

### Try Catch

[Documentation](/reference#try-catch)

```erde
try {
  local myvar = 1 / "hello"
} catch {
  print('Failed to assign myvar')
}
```

```erde
try {
  error('my error messsage')
} catch message {
  print(message) -- my error message
}
```
