import classNames from 'classnames';
import * as fengari from 'fengari-web';
import * as monaco from 'monaco-editor';
import React, { useEffect, useState } from 'react';
import styles from './LiveCodeBlock.module.scss';
import { Tabs } from './Tabs';

//
// Constants / Types
//

type Editor = monaco.editor.IStandaloneCodeEditor;
type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions;

const MONACO_OPTIONS: EditorOptions = {
  automaticLayout: true,
  theme: 'vs-light',
  fontFamily: 'Source Code Pro',
  tabSize: 2,
  fontSize: 18,
  minimap: {
    enabled: false,
  },
};

// TODO: better default code
const DEFAULT_PLAYGROUND_CODE = `-- Erde playground
return 1 + 2`;

//
// useMonaco
//

function useMonaco(options?: EditorOptions) {
  const [mount, setMount] = useState<HTMLDivElement | null>(null);
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    if (mount) {
      setEditor(
        monaco.editor.create(mount, {
          // TODO: set language to erde
          language: 'lua',
          ...options,
        })
      );
    }
  }, [mount]);

  return [editor, setMount] as const;
}

//
// LiveCodeBlock
//

export const LiveCodeBlock = () => {
  const [code, setCode] = useState(DEFAULT_PLAYGROUND_CODE);
  const [output, setOutput] = useState('');
  const [resultEditor, resultRef] = useMonaco({
    ...MONACO_OPTIONS,
    readOnly: true,
  });

  const [inputEditor, inputRef] = useMonaco({
    ...MONACO_OPTIONS,
    value: code,
  });

  useEffect(() => {
    inputEditor?.onDidChangeModelContent(
      () => void setCode(inputEditor.getValue())
    );
  }, [inputEditor]);

  const [selectedTabId, setSelectedTabId] = useState('output');

  useEffect(() => {
    if (selectedTabId === 'output') {
      try {
        setOutput(fengari.load(code)().toString());
      } catch (error) {
        if (error instanceof Error) {
          setOutput(error.message);
        }
      }
    } else {
      const readModel = resultEditor?.getModel();
      if (!resultEditor || !readModel) return;

      if (selectedTabId === 'parsed') {
        monaco.editor.setModelLanguage(readModel, 'json');
        // TODO: parse code
        resultEditor.setValue('{ "hello": "world" }');
      } else if (selectedTabId === 'compiled') {
        monaco.editor.setModelLanguage(readModel, 'lua');
        // TODO: compile code
        resultEditor.setValue('print("todo")');
      } else if (selectedTabId === 'formatted') {
        // TODO: set language to erde
        monaco.editor.setModelLanguage(readModel, 'lua');
        // TODO: format code
        resultEditor.setValue('print("todo")');
      }
    }
  }, [code, selectedTabId]);

  return (
    <div className={styles.liveCodeBlock}>
      <div className={styles.inputEditor} ref={inputRef} />
      <div className={styles.results}>
        <Tabs
          ariaControls={styles.result}
          onChange={newTab => void setSelectedTabId(newTab.id)}
          tabs={[
            { id: 'output', label: 'Output' },
            { id: 'parsed', label: 'Parsed (AST)' },
            { id: 'compiled', label: 'Compiled' },
            { id: 'formatted', label: 'Formatted' },
          ]}
        />
        <div
          id={styles.result}
          className={classNames({
            [styles.outputMode]: selectedTabId === 'output',
          })}
        >
          {selectedTabId === 'output' && output}
          <div ref={resultRef} className={styles.resultEditor} />
        </div>
      </div>
    </div>
  );
};
