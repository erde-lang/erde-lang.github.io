# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Versioning based on [Semantic Versioning](https://semver.org/), with suffix
based on [rockspec versioning](https://github.com/luarocks/luarocks/wiki/Rockspec-format).

## [0.6.0-1] - June 16, 2023

### Changed
- BREAKING CHANGE: Functions no longer default to `local`
  - Differs too much from vanilla Lua
  - Unexpected behavior, especially for newer users
  - More confusing than helpful
- Allow excluding target from `load` (i.e. allow options table as only argument)
- When using the `module` keyword, users can now access the module table via `_MODULE`.
  - `_MODULE` is declared at the top of the module (accessible anywhere)
  - `module` declarations are immediately added to the `_MODULE` table

### Fixed
- Fixed throwing object when failing to load compiled code
- Fixed erde loaders not handling multiple returns (package loader && `erde.run`)
- Fixed incorrect source map when code starts with newlines
- Fixed incorrect source map for function call statements
- `erde.traceback` now properly handles non-string messages
  - message is returned immediately without further processing
  - same behavior as Lua's native `debug.traceback`
- The bitwise unary `~` operator now properly uses native Lua for 5.3+ (previously always used bitlib)
- Erde now properly reports error lines as compiled error lines when there is no sourcemap
- Erde now properly injects the compile footer for empty files
- Fixed not throwing error when using both `return` and `module`
- Fixed `erde` (REPL) and `erde run` not respecting `--target` (https://github.com/erde-lang/erde/issues/11)
- Fixed global destructuring (https://github.com/erde-lang/erde/issues/14)
- Global declarations now directly mutate `_G` (https://github.com/erde-lang/erde/issues/15)
- Fixed compilation of Lua (but not Erde) keyword (https://github.com/erde-lang/erde/issues/8)
- Fixed greedy tokenization of `\` in block strings (error when tokenizing `[[\]]`)

### Added
- Allow passing in options in `erde.compile`
- Allow disabling caching source maps
- Added `erde sourcemap` command to CLI help

## [0.5.0-1] - April 01, 2023

### Removed
- BREAKING CHANGE: Removed `try...catch` statements
  - `pcall` paradigm suffices, `try...catch` statement in practice was not _that_ useful
  - Do not want to split code styles on `pcall` vs `try...catch`
- Removed `erdeXXX` executables (`erdejit`, `erde5.1`, etc).
  - Did not realize luarocks wraps these Lua scripts and forces their running Lua version
  - Not as useful now that `erde.load` automatically infers the target
  - Polluted path a little bit (lots of executables, especially when installing for multiple versions)
- Removed `-d`, `--debug` cli option

### Changed
- Erde now allows all number forms for all Lua targets and will transpile numbers to decimal format (including newly added binary literals).
- `erde` cli no longer requires the subcommand to appear directly after `erde` (flags in between are accepted)
- `erde` cli defaults `compile` and `clean` args to the current directory.
- Erde now throws an error when trying to call `load` with an invalid Lua target.
- Erde now overrides Lua's `debug.traceback` on `load`.
  - Can be disabled in `load` options using `keep_traceback`
  - Lua's native `debug.traceback` is restored when calling `unload`
- Erde now infers a version for `load` automatically based on `_VERSION` when one is not specified.
- Erde no longer catches and rethrows errors internally.
  - Previously used custom rethrown data type w/ `__tostring` metamethod, (overcomplicated, not user friendly)
  - Catching and rethrowing _changes the call stack_. Want to avoid this, as it causes confusion when debugging.
  - Still cannot handle the case when _callbacks_ written in Erde but run in Lua throw errors.
  - Easier / simplest to have user handle error rewriting themselves at top level
    - Often times this will be automatically handled since we override `debug.traceback` on `load`
  - `erde` cli will still rewrite errors (repl and `erde run`)

### Fixed
- Fixed compiling of chained function calls (ex. `myfunc()()`)
- Erde now properly ignores escape sequences (except interpolation) in block strings (`[[ ... ]]`)
- Fixed `erde` compile / clean checks for empty Lua files (`is_compiled_file`)
- Erde now properly rewrites source _references_ in error messages (ex. `xxx: in function <my_erde_file.erde:174>`)
- Erde now properly checks for invalid varargs for arrow functions with implicit params
- Erde now properly injects the erde package loader when using the repl.

### Added
- Allow binary literals (ex. `print(0b100)`) for all Lua targets.
- Allow strings to act as index chain bases without parentheses.
  - ex) `'mystring':find('my')`
- Compiled files now include the version of Erde used at the bottom of the compiled file.
- Allow specifying bitlib in `load` options
- Added `sourcemap` subcommand for debugging

## [0.4.0-1] - January 7, 2023

### Changed
- CLI options now use all lowercase (more standard)
  - `--outDir` is now `--outdir`
  - `--bitLib` is now `--bitlib`
- Readline history no longer saves empty lines
- Parser now properly checks varargs scope (cannot be used outside vararg function)

### Fixed
- Fixed `module` declarations with destructuring
- Long strings no longer throw errors for unrecognized escape chars (same behavior as Lua)
- Fixed determining ReturnList variants
- Fixed compile error when return arrow function `return () -> { ... }`
- Fixed readline history not saving
- Fixed ambiguous iife syntax in compiled Lua (inject semicolon)
- CLI now checks one extra character when looking for the compiled footer comment (handle trailing newlines injected by editor)

### Added
- Added versioned executables to allow specifying the underlying lua executable version. Each additionally sets `--target` appropriately.
  - `erde5.1` - sets `--target 5.1` and uses `lua5.1` executable
  - `erde5.2` - sets `--target 5.2` and uses `lua5.2` executable
  - `erde5.3` - sets `--target 5.3` and uses `lua5.3` executable
  - `erde5.4` - sets `--target 5.4` and uses `lua5.4` executable
  - `erdejit` - sets `--target jit` and uses `luajit` executable
- Any arguments following a script to be run are now accessible in the script via the `arg` global (same behavior as Lua)
  - ex) `erde myscript.erde "myscript_arg1"`
- CLI now supports overwriting existing Lua files when compiling with `-f, --force`
- CLI now supports printing compiled code instead of writing to files with `-p, --print` (useful for debugging)

## [0.3.0-2] - November 7, 2022

### Removed
- Erde no longer depends on [argparse](https://luarocks.org/modules/argparse/argparse)

### Changed
- `erde run` no longer uses a subcommand
- `erde compile` and `erde clean` no longer default to cwd
- Improved error messages and error handling

### Fixed
- Fix assignment operator compiled operation
- Fixed compilation error rewriting for asserts
- Fixed compilation of exponentiation operator for pre Lua5.3
- Fixed empty message when error does not have stacktrace
- Fixed `C.BITLIB` vs `C.BIT_LIB` inconsistencies
- Fixed empty file compilation
- Erde now substitutes variable names that are keywords in Lua but not in Erde (previously produced invalid Lua code)
- Erde now reports error lines at the start of the error (previously reported _after_)
- Erde now correctly preserves newlines following interpolations in long strings.
- Erde now correctly rewrites top level errors (previously always used main file source map)

### Added
- Added __tostring metamethod for thrown table errors (especially useful for sandboxed, embedded lua such as neovim)
- Added line numbers for errors when using `erde compile`
- Added REPL support
- Throw error when `return` statement is not the last statement in a block

## [0.3.0-1] - August 26, 2022

### Removed
- Removed `do` expressions.
- Removed spread operator.
- Removed optional chaining.
- Removed `erde.loader` (replaced by `require('erde').load` api)

### Changed
- Reverted split of `erde` and `erdec` in favor of more `pacman` like "main flags".
- Improved `erde --help` output.
- `erde` now runs with the regular lua shebang (`#!/usr/bin/env lua` instead of `#!/usr/bin/env luajit`)

### Added
- Erde now supports running on Lua 5.1+
- `erde` now accepts Lua targets to compile to, with specific Lua version compatabilities
- `erde` now accepts specifying a bit library to compile bit operations to
- Erde now generates souce maps and will rewrite errors when running scripts via the CLI or using `erde.load`.
- Several new apis have been added both to replace `erde.loader` and to allow for better error handling
  - `erde.rewrite` - rewrite Lua errors using a source map. Does a best-effort
    lookup for cached source map when one is not provided
  - `erde.traceback` - erde version of `debug.traceback` w/ line rewrites
  - `erde.load` - replacement for `erde.loader`, with an optional lua target
    as a parameter.
  - `erde.unload` - api to remove the injected erde loader (from a previous call
    to `erde.load`).

## [0.2.0-1] - June 03, 2022

### Removed
- Removed `self` shorthand `$`. Completely unnecessary and confusing.
- Removed `main` keyword. Completely unnecessary and confusing.
- Removed ternary / null coalescing operator
  - Ternary created ambiguous syntax (`a ? b:c() : d()` vs `a ? b : c():d()`)
  - Both difficult to optimize (requires iife)

### Changed
- Refactored internal structure (now cleaner / faster)
- Erde now uses a newline to differentiate syntax ambiguity
- Erde no longer parses number destruct aliases as valid syntax
- Varargs now spreads when used as a table or param expression.
- Erde no longer allows trailing commas in Return expressions unless parentheses are present
- `erde.loader` no longer mutates the global require function, but uses `package.loaders` (as it should)
- `catch` var no longer uses parentheses (more lua like)
- `catch` var can now be a destructure
- Array destructures can no longer be nested inside map destructures
- String interpolation is no longer supported for single quote strings
- The `erde` executable has been split into `erde` (interpreter) and `erdec` (compiler)
  - `argparse` does not allow arguments if subcommands are used, which means we
    could not do: `erde myfile.erde` to run a file. This was very unfriendly to
    scripts that may want to use a shebang with `erde`.
  - Use a similar structure as moonscript for familiarity.

### Fixed
- Tokenizer now correctly consumes whitespace in string interpolation.
- String interpolation w/ names now compiles correctly.
- Parenthesized Return now parses correctly.
- Keywords are now allowed as named index chains (ex: x.if, y:else()).
- `!=` operator is now _actually_ compiled.
- OptChain now correctly parses optional _method_ calls
- Fixed void `return` (i.e. no expressions)
- Parser / compiler no longer crash when the ast is empty

## [0.1.0-1] - March 3, 2022

Initial Release
