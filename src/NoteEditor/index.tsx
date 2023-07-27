import { useState, useRef, useEffect, ReactNode, useCallback } from "react";
import styles from "./index.module.scss";
import { collectTags } from "utils/constants";
import {
  Editor,
  EditorState,
  CompositeDecorator,
  ContentState,
  ContentBlock,
} from "draft-js";

const hashtagStrategy = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void
) => {
  const text = contentBlock.getText();
  const allTags = collectTags(text);

  allTags.forEach((tag) => {
    let index = 0;
    while (index !== -1) {
      const currentIndex = text.indexOf(tag, index);
      if (currentIndex !== -1) {
        index = currentIndex + tag.length;
        callback(currentIndex, currentIndex + tag.length);
      } else {
        index = -1;
      }
    }
  });
};

const Decorated = ({ children }: { children: ReactNode }) => {
  return <span style={{ color: "#5384a2" }}>{children}</span>;
};

const createDecorator = () =>
  new CompositeDecorator([
    {
      strategy: hashtagStrategy,
      component: Decorated,
    },
  ]);

interface INoteEditor {
  value?: string;
  onChange?: (text: string) => void;
}

export function NoteEditor({ value, onChange }: INoteEditor) {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(value ?? ""),
      createDecorator()
    )
  );
  const editor = useRef<Editor>(null);

  const focusEditor = () => editor.current?.focus();

  const setCursorToEnd = useCallback(() => {
    if (editor.current) {
      const contentState = editorState.getCurrentContent();
      const blockMap = contentState.getBlockMap();
      const lastBlock = blockMap.last();
      const lastBlockKey = lastBlock.getKey();
      const lastBlockLength = lastBlock.getLength();

      const newEditorState = EditorState.forceSelection(
        editorState,
        editorState.getSelection().merge({
          anchorKey: lastBlockKey,
          anchorOffset: lastBlockLength,
          focusKey: lastBlockKey,
          focusOffset: lastBlockLength,
          hasFocus: true,
        })
      );

      setEditorState(newEditorState);
    }
  }, [editorState]);

  useEffect(() => {
    focusEditor();
    setCursorToEnd();
  }, [setCursorToEnd]);

  const handleChange = (editorState: EditorState) => {
    onChange?.(editorState.getCurrentContent().getPlainText());
    setEditorState(editorState);
  };

  return (
    <div onClick={focusEditor} className={styles.input}>
      <Editor ref={editor} editorState={editorState} onChange={handleChange} />
    </div>
  );
}
