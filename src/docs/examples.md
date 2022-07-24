# Examples

## Arrow Functions

```erde
function map(t, callback) {
  local copy = {}

  for key, value in pairs(t) {
    copy[key] = callback(value)
  }

  return copy
}

local evens = { 2, 4, 6, 8, 10 }

local odds = map(evens, even -> {
  return even - 1
})

-- OR with implicit return shorthand
local odds = map(evens, even -> even - 1)
```

## Destructuring

```erde
local myTable = {
  myValue = 5,
  'child1',
  'child2',
}

-- Map destruct
local { myValue } = myTable

-- Array destruct
local [ firstChild, secondChild ] = myTable
```

## Assignment Operators

```erde
local a = 1
print(a)
a += 1
print(a)
a *= 5
print(a)
```

## Parameter Defaults

```erde
function greet(message = 'hello world') {
  print(message)
}

greet()
greet('goodbye world')
```

## Continue

```erde
function printOdds(...) {
  for _, value in ipairs({ ... }) {
    if value % 2 == 0 {
      continue
    }

    print(value)
  }
}

printOdds(1, 2, 3, 4, 5)
```

## String Interpolation

```erde
local myValue = 4

-- Can interpolate any string
print('myValue is {myValue}')
print("myValue is {myValue}")
print([[myValue is {myValue}]])

-- Can escape braces for literal print
print('A literal brace: \\{')
```

## Try Catch

```erde
try {
  print(1 / "hello")
} catch (err) {
  print('Caught: ', err)
}
```
