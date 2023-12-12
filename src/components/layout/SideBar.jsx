import React, {useContext} from "react";
import { AppstoreOutlined, PieChartOutlined, TeamOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import { LayoutContext } from "../../contexts/LayoutContext";

export const Sidebar = () => {
   const { layout } = useContext(LayoutContext);

   function getItem(label, key, icon, children, type) {
      return {
         key,
         icon,
         children,
         label,
         type,
      };
   }
   const items = [
      getItem(
         "Dashboard",
         "Dashboard",
         <PieChartOutlined style={{ fontSize: "22px" }} />
      ),
      getItem(
         "Project Management",
         "Projects",
         <AppstoreOutlined style={{ fontSize: "22px" }} />,
         [getItem("All Project", "1"), getItem("Add Project", "2")]
      ),
      getItem(
         "Employees Management",
         "Employees",
         <TeamOutlined style={{ fontSize: "22px" }} />,
         [getItem("All Employees", "3"), getItem("Add Employees", "4")]
      ),
   ];
   const onClick = (e) => {
      console.log("click ", e);
   };
   const Username = (props) => {
      return <p style={{ fontWeight: "700", fontSize: "x-large" }}>{props.name}</p>;
   };
   return (
      <div>
         <Menu
            onClick={onClick}
            style={{
               marginTop: "5vh",
               width: "100%",
            }}
            mode="inline"
            inlineCollapsed={layout}
            items={items}
         />
      </div>
   );
};
