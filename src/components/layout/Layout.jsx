import { Outlet } from "react-router-dom";
import React from "react";
import { Sidebar } from "./SideBar";
import { NavBar } from "./NavBar";
// import { Col, Flex, Row } from "antd";
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
               marginRight: spacing / 2,
            }}
         >
            <Sidebar />
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
            <div style={{ marginBottom: spacing / 2 }}>
               <NavBar />
            </div>
            <div
               style={{
                  background: "blue",
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
