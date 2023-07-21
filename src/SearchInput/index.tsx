import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SELECTED_FILTER } from "store/actions";
import styles from "./index.module.scss";
import { getAllUniqueTags } from "utils/constants";
import { getNotes } from "indexedDB";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { INote } from "interfaces/interfaces";

interface RootState {
  notesCreating: boolean;
  selectedFilters?: string[];
}

export function SelectInput() {
  const [allTags, setAllTags] = useState<string[]>([]);
  const dispatch = useDispatch();
  const handleChange = (value: string[]) => {
    dispatch({
      type: CHANGE_SELECTED_FILTER,
      payload: { selectedFilters: value },
    });
  };

  const notesCreating = useSelector((state: RootState) => state.notesCreating);

  useEffect(() => {
    getNotes().then((result: INote[]) => {
      setAllTags(getAllUniqueTags(result));
    });
  }, [notesCreating]);

  const options: SelectProps[] = allTags.map((item, i) => {
    return {
      id: i.toString(),
      value: item,
    };
  });

  return (
    <div className={styles.selectWrapper}>
      <Select
        mode="tags"
        placeholder="Filter by tags"
        onChange={handleChange}
        options={options}
        className={styles.select}
        popupClassName={styles.popup}
        maxTagTextLength={10}
        allowClear
      />
    </div>
  );
}
