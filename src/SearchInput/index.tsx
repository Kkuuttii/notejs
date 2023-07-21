import styles from "./index.module.scss";
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
  return {
    id: i.toString(),
    value: "lol" + i,
  };
});

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function SelectInput() {
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

export default SelectInput;
