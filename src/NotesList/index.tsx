import styles from "./index.module.scss";
import NoteCard from "../NoteCard/index";

function NotesList() {
  return (
    <div className={styles.notesList}>
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}

export default NotesList;
