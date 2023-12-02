import React from 'react';
import { Checkbox } from 'antd';
const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
};
const plainOptions = ['Cb1', 'Cb2', 'Cb3'];
const CheckBoxCommon = () => (
    <>
        <Checkbox.Group options={plainOptions} onChange={onChange} />
        <br />
    </>
);
export default CheckBoxCommon;