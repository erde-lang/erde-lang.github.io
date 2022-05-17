---
slug: /
sidebar_position: 1
---

# Getting Started

## Installation

The recommended way to install is through [luarocks](https://luarocks.org/modules/bsuth/erde):

```bash
luarocks install erde
```

Alternatively you can clone the [repo](https://github.com/erde-lang/erde) and 
update your PATH and [LUA_PATH](https://www.lua.org/pil/8.1.html) accordingly:

```bash
git clone https://github.com/erde-lang/erde.git
ERDE_ROOT="$(pwd)/erde"
export LUA_PATH="$ERDE_ROOT/?/init.lua;$LUA_PATH"
export PATH="$ERDE_ROOT/bin:$PATH"
```

You can check whether Erde is installed correctly by running:

```bash
erde -v
```

## Running Programs

First, we need to create an Erde file, which uses the `.erde` extension:

```bash
touch fibonacci.erde
```

And add some test code to it:

```erde
function fibonacci(n) {
  local a = 0
  local b = 1

  for i = 1, n {
    local tmp = a
    a = b
    b = tmp + a
    print(b)
  }
}

fibonacci(10)
```

Finally, we can run the file from the cli using:

```bash
erde fibonacci.erde
```

## Compiling Programs

Running `.erde` files directly is great for development, but for production code
we want to distribute `.lua` files instead. We can compile our previous file 
into Lua using:

```bash
erde compile fibonacci.erde
```

This should create a `fibonacci.lua` file in the same directory.

## Cleaning Projects

If you look at the generated code in `fibonacci.lua`, you will notice a comment
at the top:

```lua
-- __ERDE_COMPILED__
local fibonacci
function fibonacci(n)
  local a = 0;
  local b = 1;
  for i=1,n do
    local tmp = a;
    a = b;
    b = tmp + a;
    print(b);
  end;
end;
fibonacci(10);
...
```

Erde will automatically inject this comment at the top of generated code. This
allows erde to track which files in the current directory have been generated
and allow us to clean them up using:

```bash
erde clean
```

This also works w/ shebangs (`#!/usr/bin/env lua`). In this case, the comment
will be placed _below_ the shebang.
