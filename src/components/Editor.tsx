import classNames from 'classnames';
import * as monaco from 'monaco-editor';
import { useEffect, useState } from 'react';
import { observeResize } from '../common/utils';
import styles from './Editor.module.scss';

//
// Constants / Types
//

type Editor = monaco.editor.IStandaloneCodeEditor;
type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions;

const DEFAULT_EDITOR_OPTIONS: EditorOptions = {
  language: 'lua', // TODO: set language to erde
  automaticLayout: true,
  fontFamily: 'Source Code Pro',
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  overviewRulerLanes: 0,
  scrollBeyondLastLine: false,
  tabSize: 2,
  theme: 'vs-light',
  wordWrap: 'on',
  wrappingStrategy: 'advanced',
};

//
// Hooks
//

function useMonaco(container?: HTMLDivElement | null, options?: EditorOptions) {
  const [editor, setEditor] = useState<Editor | null>(null);

  // Use json string to detect options changes
  const optionsJson = JSON.stringify(options ?? {});

  useEffect(() => {
    if (container) {
      setEditor(
        monaco.editor.create(container, {
          ...DEFAULT_EDITOR_OPTIONS,
          ...options,
        }),
      );
    }
  }, [container, optionsJson]); // eslint-disable-line react-hooks/exhaustive-deps

  return editor;
}

//
// Editor
//

interface EditorProps {
  className?: string;
  monaco?: EditorOptions;
  fitHeight?: boolean;
}

export const Editor = (props: EditorProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const editor = useMonaco(container, props.monaco);

  useEffect(() => {
    if (container && editor) {
      return observeResize(
        container,
        () => void editor.layout(container.getBoundingClientRect()),
      );
    }
  }, [container, editor]);

  useEffect(() => {
    if (props.fitHeight && container && editor) {
      const updateHeight = () => {
        const contentHeight = editor.getContentHeight();
        container.style.height = `${contentHeight}px`;
      };

      editor.onDidContentSizeChange(updateHeight);
      updateHeight();
    }
  }, [props.fitHeight, container, editor]);

  return (
    <div
      ref={setContainer}
      className={classNames(styles.editor, props.className)}
    />
  );
};
