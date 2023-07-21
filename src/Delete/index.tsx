import { useDispatch } from "react-redux";
import { TOGGLE_DB_CHANGING } from "store/actions";
import { deleteNote } from "indexedDB";
import { Button, Modal } from "antd";
import { ExclamationCircleFilled, DeleteOutlined } from "@ant-design/icons";

interface IDelete {
  id: number;
}

const { confirm } = Modal;

export function Delete({ id }: IDelete) {
  const dispatch = useDispatch();

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this note?",
      icon: <ExclamationCircleFilled rev={undefined} />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch({ type: TOGGLE_DB_CHANGING });
        deleteNote(id).then(() => {
          dispatch({ type: TOGGLE_DB_CHANGING });
        });
      },
    });
  };

  return (
    <Button onClick={showDeleteConfirm} type="dashed">
      <DeleteOutlined key="edit" />
    </Button>
  );
}
