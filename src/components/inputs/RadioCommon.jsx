import React, {useContext} from "react";
import { Radio } from "antd";
import { ComponentsContext } from "../../contexts/componentsContext";

const RadioCommon = ({ values }) => {
    const {
        setRadioItem
    } = useContext(ComponentsContext);

    const onChange = (radioValues) => {
        setRadioItem(radioValues.target.value);
        console.log('selected = ', radioValues.target.value);
    };
    
    return (
        <>
            <Radio.Group options={values} onChange={onChange} />
            <br />
        </>
)};
export default RadioCommon;