import React, {useContext} from "react";
import { Radio } from "antd";
import { ComponentsContext } from "../contexts/componentsContext";

const RadioCommon = ({ Values }) => {
    const {
        setRadioItem
    } = useContext(ComponentsContext);

    const onChange = (radioValues) => {
        setRadioItem(radioValues);
        console.log('checked = ', radioValues);
    };
    
    return (
        <>
            <Radio.Group options={Values} onChange={onChange} />
            <br />
        </>
)};
export default RadioCommon;
