import React from "react";
import {
    PlusOutlined,
    ReloadOutlined,
    FormOutlined,
    DeleteTwoTone
} from "@ant-design/icons";
import { Button, Flex } from "antd";

const ButtonCommon = ({ buttonType, size = "large", handleOnClick }) => {
    return (
        <Flex gap="small" wrap="wrap" className="site-button-ghost-wrapper">
            {buttonType === "reload" && (
                <Button shape="circle" icon={<ReloadOutlined />} size={size} onClick={handleOnClick}/>
            )}
            {buttonType === "add" && (
                <Button shape="circle" icon={<PlusOutlined />} size={size} onClick={handleOnClick}/>
            )}
            {buttonType === "save" && (
                <Button type="primary" className="ant-btn-success" onClick={handleOnClick}>
                    Save
                </Button>
            )}
            {buttonType === "cancel" && (
                <Button type="primary" danger onClick={handleOnClick}>
                    Cancel
                </Button>
            )}
            {buttonType === "edit" && (
                <Button type="edit"
                    icon={<FormOutlined style={{ fontSize: '16px', color: '#3F51B5' }} />} 
                    onClick={handleOnClick}
                >
                </Button>
            )}
            {buttonType === "detele" && (
                <Button type="detele" 
                    icon={<DeleteTwoTone twoToneColor=" #eb2f96 " />} 
                    onClick={handleOnClick}
                >
                </Button>
            )}

        </Flex>


    );
};

export default ButtonCommon;