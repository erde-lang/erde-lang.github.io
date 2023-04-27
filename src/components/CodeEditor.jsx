import CodeBlock from '@theme/CodeBlock';
import classNames from 'classnames';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import styles from './CodeEditor.module.scss';

export default props => {
  const [internalValue, setInternalValue] = useState(props.defaultValue ?? '');
  const value = props.value ?? internalValue;
  const onChange = newValue => {
    setInternalValue(newValue);
    props.onChange?.(newValue);
  };

  return (
    <div className={classNames(styles.codeEditor, props.className)}>
      <div className={styles.scroll}>
        <Editor
          className={styles.editor}
          value={value}
          onValueChange={onChange}
          highlight={code => (
            <CodeBlock
              className={styles.codeBlock}
              language={props.language}
              children={code}
            />
          )}
        />
      </div>
    </div>
  );
};
