import styles from "./index.module.scss";
import React from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: "Are you sure delete this note?",
    icon: <ExclamationCircleFilled rev={undefined} />,
    // content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

function Delete() {
  return (
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
  );
}

export default Delete;
