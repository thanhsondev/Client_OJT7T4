import React, { useContext } from 'react';
import { Checkbox } from 'antd';
// import { ComponentsContext } from '../../contexts/componentsContext';

const CheckBoxCommon = ({ ...props }) => {
    // const { 
    //     setCheckedItems 
    // } = useContext(ComponentsContext);

    // const onChange = (checkedValues) => {
    //     setCheckedItems(checkedValues);
    // };

    return (
        <>
            <Checkbox.Group {...props} />
            <br />
        </>
    );
};

export default CheckBoxCommon;
