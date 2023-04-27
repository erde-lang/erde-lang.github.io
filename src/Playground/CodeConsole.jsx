import CodeBlock from '@theme/CodeBlock';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import styles from './CodeConsole.module.scss';
import { run_lua } from './fengari';

const TABS_CONFIG = [
  {
    label: 'Run',
    callback: code => run_lua(`return require('erde').run([[${code}]])`),
  },
  {
    label: 'Compile',
    callback: code => run_lua(`return require('erde').compile([[${code}]])`),
  },
];

const Tabs = props => (
  <ul className={styles.tabs}>
    {TABS_CONFIG.map((config, i) => (
      <li
        key={i}
        className={classNames(styles.tab, i === props.value && styles.active)}
        children={config.label}
        onClick={() => void props.onChange(i)}
      />
    ))}
  </ul>
);

const Output = props => {
  const result = useMemo(
    () => TABS_CONFIG[props.tab].callback(props.code),
    [props.tab, props.code],
  );

  return (
    <div className={styles.output}>
      <div className={styles.scroll}>
        {result.stdout.map(line => (
          // Nothing is reliable as a key here, so just use Math.random() to stop
          // development console errors.
          <pre key={Math.random()} children={line} />
        ))}
        {!result.value ? null : !result.ok ? (
          <pre className={styles.error} children={result.value} />
        ) : props.tab === 0 ? (
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
  );
};

export default props => {
  const [tab, setTab] = useState(0);

  return (
    <div className={classNames(styles.codeConsole, props.className)}>
      <Tabs value={tab} onChange={setTab} />
      <Output tab={tab} value={props.value} />
    </div>
  );
};
