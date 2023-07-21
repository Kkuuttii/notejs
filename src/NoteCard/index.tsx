import styles from "./index.module.scss";
import { Delete } from "Delete";
import { NoteModal } from "NoteModal";
import { Card } from "antd";

interface INoteCard {
  text: string;
  id: number;
  tags: string[];
}

const { Meta } = Card;

export function NoteCard({ text, id, tags }: INoteCard) {
  return (
    <Card
      className={styles.card}
      actions={[
        <NoteModal isEdit={true} id={id} value={text} />,
        <Delete id={id} />,
      ]}
    >
      <Meta title={text} description={tags.join(" ")} />
    </Card>
  );
}
