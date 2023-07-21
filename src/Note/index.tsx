import styles from "./index.module.scss";
import { useState } from "react";
import { Button, Modal } from "antd";

interface INote {
  text: string;
}

function Note({ text }: INote) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {text}
      </Button>

      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <textarea name="postContent" rows={4} cols={40} />
      </Modal>
    </>
  );
}

export default Note;
