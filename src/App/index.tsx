import styles from "./index.module.scss";
import { Header } from "Header";
import { NotesList } from "NotesList";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NotesList />
    </div>
  );
}

export default App;
