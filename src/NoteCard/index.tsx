import styles from "./index.module.scss";
import React from "react";
import { Card } from "antd";
import Note from "../Note/index";
import Delete from "../Delete";
function NoteCard() {
  return (
    <Card
      title="Default size card"
      extra={
        <div className={styles.noteOptions}>
          <Note text={"Open & Edit"} />
          <Delete />
        </div>
      }
      className={styles.card}
      headStyle={{ background: "green" }}
    >
      <span>Card content</span>
      <span>Card content</span>
      <span>Card content</span>
    </Card>
  );
}

export default NoteCard;
