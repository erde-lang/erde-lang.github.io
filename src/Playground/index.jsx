import { useState } from 'react';
import CodeConsole from './CodeConsole';
import CodeEditor, { EXAMPLES_CONFIG } from './CodeEditor';
import styles from './index.module.scss';

export default () => {
  const [value, setValue] = useState(EXAMPLES_CONFIG[0].value);

  return (
    <div className={styles.playground}>
      <CodeEditor
        className={styles.codeEditor}
        language="erde"
        value={value}
        onChange={setValue}
      />
      <CodeConsole className={styles.codeConsole} code={value} />
    </div>
  );
};
