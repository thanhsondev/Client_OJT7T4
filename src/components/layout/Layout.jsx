import { Outlet } from "react-router-dom";
import React, {useContext} from "react";
import { Sidebar } from "./SideBar";
import { NavBar } from "./NavBar";
import { LayoutContext } from "../../contexts/LayoutContext";
const spacing = 10;

export const Layout = () => {
   const { layout, setLayout } = useContext(LayoutContext);
   return (
      <div
         className="w-full h-screen"
         style={{ display: "flex", justifyContent: "space-between" }}
      >
         {/* SIDE BAR */}
         {layout ? <div
            style={{
               height: "100%",
               marginRight: spacing / 2,
               background: "#ebebeb",
               width: "5vw",
               transition: "width 0.3s ease-in-out"
            }}
         >
            <Sidebar />
         </div> : <div
            style={{
               height: "100%",
               marginRight: spacing / 2,
               background: "#ebebeb",
               width: "16vw",
               transition: "width 0.3s ease-in-out"
            }}
         >
            <Sidebar />
         </div>}
         {/* HEADER & CONTENT */}
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               flex: 1,
               marginLeft: spacing / 2,
            }}
         >
            <div style={{ marginBottom: spacing / 2,  background: "#ebebeb"}}>
               <NavBar />
            </div>
            <div
               style={{
                  flex: 1,
                  overflowY: "auto",
                  marginTop: spacing / 2,
                  overflowX: "hidden"
               }}
            >
               <Outlet />
            </div>
         </div>
      </div>
   );
};
