import React from "react";
import { AppstoreOutlined, PieChartOutlined, TeamOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import { useNavigate } from 'react-router-dom';
// import { LayoutContext } from "../../contexts/LayoutContext";

export const Sidebar = () => {
   const navigate = useNavigate();
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
         "dashboard",
         <PieChartOutlined style={{ fontSize: "22px" }} />
      ),
      getItem(
         "Project Management",
         "Projects",
         <AppstoreOutlined style={{ fontSize: "22px" }} />,
         [getItem("All Project", "projects"), getItem("Add Project", "addProject")]
      ),
      getItem(
         "Employees Management",
         "Employees",
         <TeamOutlined style={{ fontSize: "22px" }} />,
         [getItem("All Employees", "employee"), getItem("Add Employees", "addEmployee")]
      ),
   ];
   const onClick = (e) => {
      console.log("click ", e.keyPath[0]);
      const path = e.keyPath[0];
      navigate(`/${path}`);
   };
   const Username = (props) => {
      return <p style={{ fontWeight: "700", fontSize: "x-large" }}>{props.name}</p>;
   };
   return (
      <div>
         <div className="Avatar">
            <Avatar
               size={{
                  xs: 40,
                  sm: 50,
                  md: 75,
                  lg: 90,
                  xl: 120,
                  xxl: 150,
               }}
               src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/323211416_729557464956818_5270594118975283644_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ivtp5eg5u8kAX8Q-1vN&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBjZZMvziMno_0cUTds4ogfluSE7E9PQKoylh3n2qhzmw&oe=6576D2FF"
            />
         </div>
         <span className="AvatarDescription">
            <Username name="Administrator" />
         </span>
         <Menu
            onClick={onClick}
            style={{
               marginTop: "5vh",
               width: 256,
            }}
            mode="inline"
            items={items}
         />
      </div>
   );
};

