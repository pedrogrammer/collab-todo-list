/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PlusOutlined } from "@ant-design/icons";
import EmptyList from "@assets/emptyList";
import ListItem from "@components/listItem";
import { Button, Input, Select } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const wrapperStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 750,
  position: "relative",
});

const scrollAreaStyle = css({
  display: "flex",
  flexDirection: "column",
  width: 500,
  height: 700,
  overflowY: "auto",
  alignItems: "center",
  marginTop: 30,
});

const floatingButtonStyle = css({
  position: "absolute",
  right: 0,
  bottom: 5,
});

function List() {
  const [mockDataList, setmockDataList] = useState([
    { id: "1", label: "Note #1", category: "sports", isDone: true },
  ]);

  const deleteItemHandler = (id: string) => {
    setmockDataList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div css={wrapperStyle}>
      <div style={{ display: "flex", width: "100%", gap: 16 }}>
        <Input.Search
          placeholder="Search item..."
          size="large"
          style={{ flex: 1 }}
        />
        <Select
          defaultValue="all"
          size="large"
          style={{ width: 100 }}
          className="custom-select"
          options={[
            { value: "all", label: "ALL" },
            { value: "sports", label: "SPORTS" },
          ]}
        />
      </div>
      <div css={scrollAreaStyle}>
        {mockDataList.length ? (
          mockDataList.map((item) => (
            <ListItem
              key={item.id}
              {...item}
              deleteItemHandler={deleteItemHandler}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
      <Link to="/create-item">
        <Button
          css={floatingButtonStyle}
          size="large"
          shape="circle"
          type="primary"
          icon={<PlusOutlined />}
        />
      </Link>
      <Outlet />
    </div>
  );
}

export default List;
