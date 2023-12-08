import React, { useContext, useEffect, useCallback } from 'react';
import { Radio } from "antd";
import { ComponentsContext } from "../../contexts/componentsContext";

const RadioCommon = ({ options, defaultValue }) => {
    const {
        setRadioItem
    } = useContext(ComponentsContext);

    const setRadioItemsCallback = useCallback(
        (value) => {
            setRadioItem(value);
        },
        [setRadioItem]
    );

    useEffect(() => {
        setRadioItemsCallback(defaultValue);
    }, [setRadioItemsCallback, defaultValue]);

    const onChange = (radioValues) => {
        setRadioItem(radioValues.target.value);
        console.log('selected = ', radioValues.target.value);
    };
    
    return (
        <>
            <Radio.Group options={options} defaultValue={defaultValue} onChange={onChange} />
            <br />
        </>
)};
export default RadioCommon;
