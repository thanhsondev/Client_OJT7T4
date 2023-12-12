import React, { useContext } from "react";
import { Avatar } from "antd";
import {
   AntDesignOutlined,
   DownOutlined,
   LogoutOutlined,
   HistoryOutlined,
   BellOutlined,
   MenuOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import { LayoutContext } from "../../contexts/LayoutContext";
import SearchBox from "./searchBox";

export const NavBar = () => {
   const navigate = useNavigate();
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
         <div style={{marginLeft: "1vw", width: "4vw"}}>
            <MenuOutlined 
               style={{ fontSize: "2vw" }} 
               onClick={()=> {setLayout(!layout)}}
            />
         </div>

         <div style={{marginLeft: "10vw", width: "35vw"}}>
            <SearchBox />
         </div>

         <div style={{marginLeft: "10vw", width: "10vw"}}></div>
            <HistoryOutlined 
               style={{ marginRight: "25px", fontSize: "25px" }}
               onClick={()=> {navigate("/log")}}
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
                        src="https://res.cloudinary.com/dfz0xsh2d/image/upload/v1702260661/c7qizzx5bcgelc4s9fud.png"
                        style={{ marginLeft: "10px" }}
                     />
                  </Space>
               </div>
            </a>
         </Dropdown>
      </div>
   );
};

