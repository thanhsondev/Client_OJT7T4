import { Outlet } from "react-router-dom";
import React from "react";
import { Col, Flex, Row } from "antd";
const spacing = 10;

export const Layout = () => {
  return (
    <div
      className="w-full h-screen"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {/* SIDE BAR */}
      <div
        style={{
          height: "100%",
          background: "green",
          marginRight: spacing / 2,
        }}
      >
        SIDE BAR
      </div>
      {/* HEADER & CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginLeft: spacing / 2,
        }}
      >
        <div style={{ background: "blue", marginBottom: spacing / 2 }}>
          HEADER
        </div>
        <div
          style={{
            background: "red",
            flex: 1,
            overflowY: "auto",
            marginTop: spacing / 2,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
