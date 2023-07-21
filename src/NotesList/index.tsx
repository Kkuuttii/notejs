import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { NoteCard } from "NoteCard";
import { INote } from "interfaces/interfaces";
import { filterNotesByTags } from "utils/constants";
import { getNotes } from "indexedDB";

interface RootState {
  notesCreating: boolean;
  selectedFilters: string[];
}

export function NotesList() {
  const [allNotes, setAllNotes] = useState<INote[]>();

  const notesCreating = useSelector((state: RootState) => state.notesCreating);
  const selectedTags = useSelector((state: RootState) => state.selectedFilters);

  useEffect(() => {
    getNotes().then((notes: INote[]) => {
      setAllNotes(filterNotesByTags(notes, selectedTags));
    });
  }, [notesCreating, selectedTags]);

  const noteCards = allNotes?.map((note) => (
    <NoteCard text={note.note} id={note.id} tags={note.tags} key={note.id} />
  ));

  return (
    <div className={styles.notesList}>
      <div className={styles.cardsContainer}>{noteCards}</div>
    </div>
  );
}
