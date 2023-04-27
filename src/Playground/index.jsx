import { useState } from 'react';
import CodeConsole from './CodeConsole';
import CodeEditor from './CodeEditor';
import styles from './index.module.scss';

export default () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.playground}>
      <CodeEditor
        className={styles.codeEditor}
        language="erde"
        value={value}
        onChange={setValue}
      />
      <CodeConsole className={styles.codeConsole} value={value} />
    </div>
  );
};
