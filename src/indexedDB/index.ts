import { openDB } from "idb";

const DB_NAME = "notesDB";
const DB_VERSION = 1;
const NOTES_STORE = "notesStore";

export const openDatabase = async () => {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(NOTES_STORE)) {
        db.createObjectStore(NOTES_STORE, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

const connectToStore = async (storeName: string) => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, "readwrite");
  return tx.objectStore(storeName);
};

export const addNote = async (note: string, tags: string[]) => {
  const store = await connectToStore(NOTES_STORE);
  await store.add({ note, tags });
};

export const getNotes = async () => {
  const store = await connectToStore(NOTES_STORE);
  return store.getAll();
};

export const deleteNote = async (id: number) => {
  const store = await connectToStore(NOTES_STORE);
  await store.delete(id);
};

export const editNote = async (id: number, note: string, tags: string[]) => {
  const store = await connectToStore(NOTES_STORE);
  await store.put({ note, id, tags });
};
