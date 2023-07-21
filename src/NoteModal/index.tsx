import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_DB_CHANGING } from "store/actions";
import styles from "./index.module.scss";
import { NoteEditor } from "NoteEditor";
import { addNote, deleteNote, editNote } from "indexedDB";
import { collectTags } from "utils/constants";
import { Button, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

interface INoteModal {
  buttonText?: string;
  id?: number;
  isEdit?: boolean;
  value?: string;
}

export function NoteModal({
  buttonText,
  id,
  isEdit = false,
  value,
}: INoteModal) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [noteText, setNoteText] = useState(value ?? "");

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (isEdit) {
      dispatch({ type: TOGGLE_DB_CHANGING });

      if (!noteText && id) {
        await deleteNote(id);
      } else if (id) {
        await editNote(id, noteText, collectTags(noteText));
      }

      dispatch({ type: TOGGLE_DB_CHANGING });
    } else if (noteText.length !== 0) {
      dispatch({ type: TOGGLE_DB_CHANGING });
      await addNote(noteText, collectTags(noteText));
      dispatch({ type: TOGGLE_DB_CHANGING });
    }
    handleCancel();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (text: string) => {
    setNoteText(text);
  };

  const tagsList = useMemo(() => collectTags(noteText).join(" "), [noteText]);

  return (
    <>
      <Button type="primary" onClick={showModal} className={styles.button}>
        {!isEdit && buttonText}
        {isEdit && <EditOutlined />}
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        destroyOnClose={true}
      >
        <NoteEditor onChange={handleChange} value={value} />
        <div>{tagsList}</div>
      </Modal>
    </>
  );
}
