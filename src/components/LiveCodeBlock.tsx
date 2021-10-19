import * as fengari from 'fengari-web';
import * as monaco from 'monaco-editor';
import React, { useEffect, useState } from 'react';
import styles from './LiveCodeBlock.module.scss';

//
// useMonaco
//

function useMonaco(
  options?: monaco.editor.IStandaloneEditorConstructionOptions
) {
  const [mount, setMount] = useState<HTMLDivElement | null>(null);
  const [model, setModel] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (mount) {
      setModel(
        monaco.editor.create(mount, {
          language: 'javascript',
          ...options,
        })
      );
    }
  }, [mount]);

  return [model, setMount] as const;
}

//
// LiveCodeBlock
//

export const LiveCodeBlock = () => {
  const [code, setCode] = useState('');
  const [editModel, editRef] = useMonaco();

  useEffect(() => {
    editModel?.onDidChangeModelContent(() => {
      setCode(editModel.getValue());
    });
  }, [editModel]);

  const [outputModel, outputRef] = useMonaco({ readOnly: true });

  useEffect(() => {
    try {
      outputModel?.setValue(fengari.load(code)().toString());
    } catch (e) {}
  }, [outputModel, code]);

  return (
    <div className={styles.liveCodeBlock}>
      <div className={styles.editors}>
        <div className={styles.monacoEditor} ref={editRef} />
        <div className={styles.monacoEditor} ref={outputRef} />
      </div>
    </div>
  );
};
