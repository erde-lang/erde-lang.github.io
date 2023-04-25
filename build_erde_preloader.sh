#!/usr/bin/env bash

# https://stackoverflow.com/questions/59895/how-do-i-get-the-directory-where-a-bash-script-is-located-from-within-the-script
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

ERDE_PATH="${SCRIPT_DIR}/erde"
LUA_PATH="$ERDE_PATH/?.lua;$ERDE_PATH/?/init.lua;$LUA_PATH"

ERDE_MODULES=(
  erde
  erde.lib
  erde.utils
  erde.constants
  erde.compile
  erde.compile.tokenize
  erde.compile.constants
)

amalg.lua -o $SCRIPT_DIR/static/erde-preload.lua ${ERDE_MODULES[@]}
