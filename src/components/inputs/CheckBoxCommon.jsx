import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'antd';
import { ComponentsContext } from '../../contexts/componentsContext';

const CheckBoxCommon = ({ options, defaultValue }) => {
    const { 
        setCheckedItems 
    } = useContext(ComponentsContext);

    useEffect(() => {
        setCheckedItems(defaultValue);
    }, [defaultValue]);

    const onChange = (checkedValues) => {
        setCheckedItems(checkedValues);
    };

    return (
        <>
            <Checkbox.Group options={options} defaultValue={defaultValue} onChange={onChange} />
            <br />
        </>
    );
};

export default CheckBoxCommon;