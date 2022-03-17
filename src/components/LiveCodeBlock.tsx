import BrowserOnly from '@docusaurus/BrowserOnly';
import classNames from 'classnames';
import * as fengari from 'fengari-web';
import * as monaco from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';
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

  const codeBlockRef = useRef<HTMLDivElement>(null);
  const layout = props.layout ?? 'responsive';
  const rerender = useRerender();

  useEffect(() => {
    if (layout === 'responsive' && codeBlockRef.current) {
      return observeResize(codeBlockRef.current, rerender);
    }
  }, [layout]); // eslint-disable-line react-hooks/exhaustive-deps

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
  }, [resultEditor, code, selectedTabId]);

  return (
    <div
      ref={codeBlockRef}
      className={classNames(
        styles.liveCodeBlock,
        props.className,
        styles[layout],
      )}
    >
      <Editor ref={setInputEditor} />
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
          <Editor ref={setResultEditor} monaco={{ readOnly: true }} />
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
