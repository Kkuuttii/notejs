import styles from "./index.module.scss";
import { NoteModal } from "NoteModal";
import { SelectInput } from "SearchInput";
import { Typography } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <SmileOutlined className={styles.logoImage} />
        <Typography.Title className={styles.title}>NOTEJS</Typography.Title>
      </div>
      <div className={styles.notesControl}>
        <SelectInput />
        <NoteModal buttonText={"Create a new note"} />
      </div>
    </header>
  );
}
