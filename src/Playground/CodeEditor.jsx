import CodeBlock from '@theme/CodeBlock';
import classNames from 'classnames';
import Editor from 'react-simple-code-editor';
import styles from './CodeEditor.module.scss';

export default props => (
  <div className={classNames(styles.codeEditor, props.className)}>
    <div className={styles.scroll}>
      <Editor
        className={styles.editor}
        value={props.value}
        onValueChange={props.onChange}
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
