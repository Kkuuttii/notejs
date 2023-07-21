import styles from "./index.module.scss";
import SearchInput from "../SearchInput/index";
import { Typography } from "antd";
import Note from "../Note";

function Header() {
  return (
    <div className={styles.header}>
      <Typography.Title>NOTEJS</Typography.Title>
      <div className={styles.notesControl}>
        <SearchInput />
        <Note text={"Create a new note"} />
      </div>
    </div>
  );
}

export default Header;
