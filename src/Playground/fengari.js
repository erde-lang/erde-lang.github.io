// Separator used for serialization to transfer between Lua and JS.
const STDOUT_SEPARATOR = '__::__';

export function run_lua(code) {
  const result = fengari.load(`
    local stdout = {}
    local native_print = _G.print

    _G.print = function(...)
      local stringified = {}

      for _, value in ipairs({ ... }) do
        table.insert(stringified, tostring(value))
      end

      table.insert(stdout, table.concat(stringified, ' '))
    end

    local ok, value = pcall(function() ${code} end)

    _G.print = native_print

    return require('js').createproxy({
      ok = ok,
      value = value,
      stdout = table.concat(stdout, '${STDOUT_SEPARATOR}'),
    }, 'object')
  `)();

  result.stdout = result.stdout.split(STDOUT_SEPARATOR).filter(line => !!line);
  return result;
}
