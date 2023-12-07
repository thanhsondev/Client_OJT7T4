import React, { useContext } from "react";
import { Avatar } from "antd";
import {
   AntDesignOutlined,
   DownOutlined,
   LogoutOutlined,
   BellOutlined,
   MenuOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { LayoutContext } from "../../context/LayoutContext";

export const NavBar = () => {
   const { layout, setLayout } = useContext(LayoutContext);

   const Username = (props) => {
      return <p style={{ fontWeight: "600", fontSize: "larger" }}>{props.name}</p>;
   };
   const items = [
      {
         key: "1",
         label: (
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="#"
               style={{ fontWeight: "bold", fontSize: "larger" }}
            >
               <LogoutOutlined style={{ marginRight: "10px" }} />
               Logout
            </a>
         ),
      },
   ];
   const onClick = (e) => {
      console.log("click ", e);
   };
   return (
      <div className="nav-container">
         <div>
            <MenuOutlined style={{ fontSize: "30px", marginTop: "10px" }} />
         </div>
         <div style={{ width: "75vw" }}></div>
         <BellOutlined
            style={{ marginRight: "25px", fontSize: "25px" }}
            onClick={setLayout(!layout)}
         />
         <Dropdown
            menu={{
               items,
            }}
         >
            <a onClick={onClick}>
               <div className="Nav" style={{ right: 0 }}>
                  <span className="nav-role">
                     <Username name="Admin" />
                  </span>
                  <Space>
                     <Avatar
                        size={{
                           xs: 26,
                           sm: 30,
                           md: 37,
                           lg: 46,
                           xl: 50,
                           xxl: 60,
                        }}
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/323211416_729557464956818_5270594118975283644_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ivtp5eg5u8kAX8Q-1vN&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBjZZMvziMno_0cUTds4ogfluSE7E9PQKoylh3n2qhzmw&oe=6576D2FF"
                        style={{ marginLeft: "10px" }}
                     />
                  </Space>
               </div>
            </a>
         </Dropdown>
      </div>
   );
};
