import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginBlock: "40px 20px" }}>TODO LIST</h2>
      <Outlet />
    </div>
  );
}

export default Layout;
