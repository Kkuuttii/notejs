import styles from "./index.module.scss";
import Header from "../Header/index";
import NotesList from "../NotesList/index";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NotesList />
    </div>
  );
}

export default App;
