import React, { useContext, useEffect, useCallback } from 'react';
import { Checkbox } from 'antd';
import { ComponentsContext } from '../../contexts/componentsContext';

const CheckBoxCommon = ({ options, defaultValue }) => {
    const { 
        setCheckedItems 
    } = useContext(ComponentsContext);

    const setCheckedItemsCallback = useCallback(
        (value) => {
            setCheckedItems(value);
        },
        [setCheckedItems]
    );

    useEffect(() => {
        console.log('useEffect triggered');
        setCheckedItemsCallback(defaultValue);
    }, [setCheckedItemsCallback, defaultValue]);

    const onChange = (checkedValues) => {
        console.log('onChange triggered');
        setCheckedItemsCallback(checkedValues);
    };

    console.log('Component rendered');

    return (
        <>
            <Checkbox.Group options={options} defaultValue={defaultValue} onChange={onChange} />
            <br />
        </>
    );
};

export default CheckBoxCommon;