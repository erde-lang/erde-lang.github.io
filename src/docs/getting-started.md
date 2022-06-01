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
export PATH="$ERDE_ROOT/bin:$PATH"
export LUA_PATH="$ERDE_ROOT/?/init.lua;$LUA_PATH"
```

Erde comes with 2 executables: `erde` for running files and `erdec` for 
compiling files. You can check whether Erde is installed correctly by running:

```bash
erde -v
erdec -v
```

## Running Programs

Create an Erde file, which uses the `.erde` extension:

```bash
touch fibonacci.erde
```

And add some code to it:

```erde
function fibonacci(n) {
  local a, b = 0, 1

  for i = 1, n {
    a, b = b, a + b
    print(b)
  }
}

fibonacci(10)
```

Now we can run the file from the command line using the `erde`
command:

```bash
erde fibonacci.erde
```

## Compiling Programs

Running `.erde` files directly is great for development, but for production code
we want to distribute `.lua` files instead. We can compile our previous file 
into Lua using the `erdec` command:

```bash
erdec fibonacci.erde
```

This will create a `fibonacci.lua` file in the same directory. 

:::note

You can run the compiled file with the `lua` interpreter as a sanity check to 
make sure the output is the same:

```bash
lua fibonacci.lua
```

:::

## Cleaning Projects

By default, `.lua` files are generated next to their `.erde` counterparts in
order to ensure `require` resolutions are consistent. While this is great for
distribution, it clutters the directory and can feel somewhat noisy for 
development.

Erde keeps track of which files it has generated by injecting a special comment 
at the top of the file. This allows us to be able to clean all generated files
using:

```bash
erdec --clean
```

By default this will clean all generated files in the current directory tree.

:::info

For those who may be wondering how Erde handles shebangs, Erde will inject 
the comment _after_ the shebang during compilation and actually checks the first 
_two_ lines of a file during cleaning.

:::