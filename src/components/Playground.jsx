import CodeBlock from '@theme/CodeBlock';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import CodeEditor from './CodeEditor';
import styles from './Playground.module.scss';

const STDOUT_SEPARATOR = '__::__';

function run_lua(code) {
  return fengari.load(`
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
}

const TAB_CONFIGS = [
  {
    label: 'Run',
    callback: code => run_lua(`return require('erde').run([[${code}]])`),
  },
  {
    label: 'Compile',
    callback: code => run_lua(`return require('erde').compile([[${code}]])`),
  },
];

export default () => {
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState('print("hi\\nbye")');
  const result = useMemo(() => TAB_CONFIGS[tab].callback(value), [tab, value]);

  return (
    <div className={styles.playground}>
      <CodeEditor
        className={styles.codeEditor}
        language="erde"
        value={value}
        onChange={setValue}
      />
      <div className={styles.result}>
        <ul className={styles.tabs}>
          {TAB_CONFIGS.map((config, i) => (
            <li
              className={classNames(i === tab && styles.active)}
              children={config.label}
              onClick={() => void setTab(i)}
            />
          ))}
        </ul>
        <div className={styles.console}>
          <div className={styles.scroll}>
            {result.stdout
              .split(STDOUT_SEPARATOR)
              .filter(line => !!line)
              .map(line => (
                <pre children={line} />
              ))}
            {!result.value ? null : !result.ok ? (
              <pre
                className={classNames(styles.output, styles.error)}
                children={result.value}
              />
            ) : tab === 0 ? (
              <pre children={result.value} />
            ) : (
              <CodeBlock
                className={styles.codeBlock}
                language="lua"
                children={result.value}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
