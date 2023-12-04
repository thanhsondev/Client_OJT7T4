import React, { useState } from "react";
import {
    PlusOutlined,
    ReloadOutlined,
    FormOutlined,
    DeleteTwoTone
} from "@ant-design/icons";
import { Button, Flex } from "antd";

const ButtonCommon = ({ buttonType }) => {   //Select the button that is necessary to use
    const [size] = useState("large"); // default is 'middle'

    return (
        <Flex gap="small" wrap="wrap" className="site-button-ghost-wrapper">
            {buttonType === "reload" && (
                <Button shape="circle" icon={<ReloadOutlined />} size={size} />
            )}
            {buttonType === "add" && (
                <Button shape="circle" icon={<PlusOutlined />} size={size} />
            )}

            {buttonType === "save" && (
                <Button type="primary" className="ant-btn-success">Save</Button>
            )}
            {buttonType === "cancel" && (
                <Button type="primary" danger>Cancel</Button>
            )}

            {buttonType === "edit" && (
                <Button type="edit"
                    icon={<FormOutlined style={{ fontSize: '16px', color: '#3F51B5' }} />} >
                </Button>
            )}
            {buttonType === "detele" && (
                <Button type="detele" icon={<DeleteTwoTone twoToneColor=" #eb2f96 " />} ></Button>
            )}

        </Flex>


    );
};

export default ButtonCommon;