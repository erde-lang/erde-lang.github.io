import Editor from '@monaco-editor/react';
import Layout from '@theme/Layout';
import React from 'react';
import * as fengari from 'fengari-web';
import styles from './playground.module.scss';

export default () => (
  <Layout pageClassName={styles.page}>
    <h1>Playground</h1>
    <button
      children={'test'}
      onClick={() => {
        console.log(fengari.load('return 1 + 1')());
      }}
    />
    <div className={styles.editors}>
      <Editor className={styles.editor} />
      <Editor className={styles.editor} options={{ readOnly: true }} />
    </div>
  </Layout>
);
