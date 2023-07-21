import { useState, useRef, useEffect, ReactNode } from "react";
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

  useEffect(() => {
    focusEditor();
  }, []);

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
