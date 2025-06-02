/** @jsxImportSource @emotion/react */
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Popconfirm } from "antd";
import { css, type CSSObject } from "@emotion/react";

interface ListItemProps {
  id: string;
  label: string;
  category: string;
  isDone: boolean;
  deleteItemHandler: (id: string) => void;
}

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBlock: 17,
  borderBottom: "1px solid #6C63FF",
  position: "relative",
};

const actionsStyle = {
  display: "flex",
  gap: 8,
  opacity: 0,
  transition: "opacity 0.3s",
};

const wrapperStyle = css({
  ...listItemStyle,
  "&:hover .actions": {
    opacity: 1,
  },
} as CSSObject);

function ListItem({ id, label, deleteItemHandler }: ListItemProps) {
  return (
    <div css={wrapperStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox style={{ marginInlineEnd: 17 }} />
        <span style={{ fontSize: 20 }}>{label}</span>
      </div>
      <div className="actions" css={actionsStyle}>
        <Button type="text" size="large" icon={<EditOutlined />} />
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          onConfirm={() => deleteItemHandler(id)}
        >
          <Button type="text" size="large" icon={<DeleteOutlined />} />
        </Popconfirm>
      </div>
    </div>
  );
}

export default ListItem;
