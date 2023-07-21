import { INote } from "interfaces/interfaces";

export const collectTags = (text: string): string[] => {
  const regexp = /^#(?=.*[^0-9])[a-zа-яё0-9]{1,29}$/i;
  const allTags = text.split(/\s+/).filter((item) => {
    const filterCondition = regexp.test(item) && item.length > 1;
    return filterCondition;
  });
  return Array.from(new Set(allTags));
};

export const getAllUniqueTags = (notesArray: INote[]): string[] => {
  let allTags: string[] = [];
  notesArray.forEach((item) => {
    allTags = [...allTags, ...item.tags];
  });
  return Array.from(new Set(allTags));
};

export const filterNotesByTags = (
  notes: INote[],
  selectedTags: string[]
): INote[] => {
  if (selectedTags?.length > 0) {
    let filteredNotes = notes.filter(({ tags }) =>
      tags.find((tag: string) => {
        return selectedTags.includes(tag);
      })
    );
    return filteredNotes;
  } else {
    return notes;
  }
};
