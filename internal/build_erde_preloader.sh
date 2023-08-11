#!/usr/bin/env bash

# https://stackoverflow.com/questions/59895/how-do-i-get-the-directory-where-a-bash-script-is-located-from-within-the-script
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ROOT_DIR=$(dirname "$SCRIPT_DIR")

ERDE_ROOT="${SCRIPT_DIR}/erde"

export LUA_PATH="$ERDE_ROOT/?.lua;$ERDE_ROOT/?/init.lua;$LUA_PATH"
export LUA_PATH_5_2="$ERDE_ROOT/?.lua;$ERDE_ROOT/?/init.lua;$LUA_PATH_5_2"
export LUA_PATH_5_3="$ERDE_ROOT/?.lua;$ERDE_ROOT/?/init.lua;$LUA_PATH_5_3"
export LUA_PATH_5_4="$ERDE_ROOT/?.lua;$ERDE_ROOT/?/init.lua;$LUA_PATH_5_4"

ERDE_MODULES=(
  erde
  erde.compile
  erde.config
  erde.constants
  erde.lib
  erde.stdlib
  erde.tokenize
  erde.utils
)

./lua-amalg/src/amalg.lua -o $ROOT_DIR/static/erde-preload.lua ${ERDE_MODULES[@]}
