import React from 'react';
import { Input } from 'antd';

const InputTextCommon = ({ inputType, ...props }) => {
    return (
        <>
            <Input {...props} />
        </>
    )
}
export default InputTextCommon;
