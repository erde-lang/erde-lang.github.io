import BrowserOnly from '@docusaurus/BrowserOnly';
import classNames from 'classnames';
import * as fengari from 'fengari-web';
import * as monaco from 'monaco-editor';
import { useEffect, useState } from 'react';
import { observeResize, useRerender } from '../common/utils';
import { Editor, MonacoEditor } from './Editor';
import styles from './LiveCodeBlock.module.scss';
import { Tabs } from './Tabs';

//
// LiveCodeBlockCore
//

export interface LiveCodeBlockCoreProps {
  className?: string;
  code?: string;
  layout?: 'vertical' | 'horizontal' | 'responsive';
}

export const LiveCodeBlockCore = (props: LiveCodeBlockCoreProps) => {
  const [code, setCode] = useState(props.code ?? '');
  const [output, setOutput] = useState('');

  const [inputEditor, setInputEditor] = useState<MonacoEditor | undefined>();
  const [resultEditor, setResultEditor] = useState<MonacoEditor | undefined>();

  const [codeBlockRef, setCodeBlockRef] = useState<HTMLDivElement | null>(null);
  const rerender = useRerender();

  let layout: 'vertical' | 'horizontal';
  if (!props.layout || props.layout === 'responsive') {
    if (codeBlockRef) {
      layout = codeBlockRef.clientWidth > 600 ? 'horizontal' : 'vertical';
    } else {
      layout = 'horizontal';
    }
  } else {
    layout = props.layout;
  }

  useEffect(() => {
    if (codeBlockRef) {
      if (!props.layout || props.layout === 'responsive') {
        return observeResize(codeBlockRef, rerender);
      }
    }
  }, [codeBlockRef, props.layout]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.code !== undefined && inputEditor) {
      inputEditor.setValue(props.code);
      setCode(props.code);
    }
  }, [props.code, inputEditor]);

  useEffect(() => {
    inputEditor?.onDidChangeModelContent(
      () => void setCode(inputEditor.getValue()),
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
      const resultEditorModel = resultEditor?.getModel();
      if (!resultEditor || !resultEditorModel) return;

      if (selectedTabId === 'parsed') {
        monaco.editor.setModelLanguage(resultEditorModel, 'json');
        // TODO: parse code
        resultEditor.setValue('{ "hello": "world" }');
      } else if (selectedTabId === 'compiled') {
        monaco.editor.setModelLanguage(resultEditorModel, 'lua');
        // TODO: compile code
        resultEditor.setValue('print("todo")');
      } else if (selectedTabId === 'formatted') {
        // TODO: set language to erde
        monaco.editor.setModelLanguage(resultEditorModel, 'lua');
        // TODO: format code
        resultEditor.setValue('print("todo")');
      }
    }
  }, [resultEditor, code, selectedTabId]);

  return (
    <div
      ref={setCodeBlockRef}
      className={classNames(
        styles.liveCodeBlock,
        props.className,
        styles[layout],
      )}
    >
      <Editor ref={setInputEditor} className={styles.inputEditor} />
      <div className={styles.results}>
        <Tabs
          selectedTabId={selectedTabId}
          onChange={newSelectedTabId => void setSelectedTabId(newSelectedTabId)}
          tabs={[
            { id: 'output', label: 'Output' },
            { id: 'parsed', label: 'Parsed (AST)' },
            { id: 'compiled', label: 'Compiled' },
            { id: 'formatted', label: 'Formatted' },
          ]}
        />
        {selectedTabId === 'output' ? (
          <div className={styles.output}>{output}</div>
        ) : (
          <Editor
            ref={setResultEditor}
            monaco={{ readOnly: true }}
            fitHeight={layout === 'vertical'}
          />
        )}
      </div>
    </div>
  );
};

//
// LiveCodeBlock
//

export const LiveCodeBlock = (props: LiveCodeBlockCoreProps) => (
  <BrowserOnly>{() => <LiveCodeBlockCore {...props} />}</BrowserOnly>
);
