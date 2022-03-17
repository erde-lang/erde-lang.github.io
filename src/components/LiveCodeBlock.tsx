import BrowserOnly from '@docusaurus/BrowserOnly';
import classNames from 'classnames';
import * as fengari from 'fengari-web';
import * as monaco from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';
import { observeResize, useRerender } from '../common/utils';
import { Editor } from './Editor';
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
          overviewRulerLanes: 0,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          wrappingStrategy: 'advanced',
          minimap: {
            enabled: false,
          },
          ...options,
        }),
      );
    }
  }, [mount]);

  return [editor, setMount] as const;
}

//
// LiveCodeBlockCore
//

export interface LiveCodeBlockCoreProps {
  className?: string;
  code?: string;
  readOnly?: boolean;
  layout?: 'vertical' | 'horizontal' | 'responsive';
}

export const LiveCodeBlockCore = (props: LiveCodeBlockCoreProps) => {
  const [code, setCode] = useState(props.code ?? DEFAULT_PLAYGROUND_CODE);
  const [output, setOutput] = useState('');

  const codeBlockRef = useRef<HTMLDivElement>(null);
  const layout = props.layout ?? 'responsive';
  const rerender = useRerender();

  const [inputEditor, inputRef] = useMonaco({
    ...MONACO_OPTIONS,
    fontSize: 16,
    value: code,
    readOnly: props.readOnly,
    automaticLayout: true,
  });

  const [resultEditor, resultRef] = useMonaco({
    ...MONACO_OPTIONS,
    fontSize: 16,
    readOnly: true,
    automaticLayout: true,
  });

  useEffect(() => {
    if (layout === 'responsive' && codeBlockRef.current) {
      return observeResize(codeBlockRef.current, rerender);
    }
  }, [layout]);

  useEffect(() => {
    if (props.code !== undefined && inputEditor) {
      inputEditor.setValue(props.code);
      setCode(props.code);
    }
  }, [props.code]);

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
  }, [code, selectedTabId]);

  return (
    <div
      ref={codeBlockRef}
      className={classNames(
        styles.liveCodeBlock,
        props.className,
        styles[layout],
      )}
    >
      <div className={styles.inputEditor} ref={inputRef} />
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
          <div ref={resultRef} className={styles.resultEditor} />
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
