import React, {useContext} from 'react';
import { Checkbox } from 'antd';
import { ComponentsContext } from '../contexts/componentsContext';

// const plainOptions = ['Cb1', 'Cb2', 'Cb3'];
const CheckBoxCommon = ({values}) => {
    const {
        setCheckedItems
    } = useContext(ComponentsContext);

    const onChange = (checkedValues) => {
        setCheckedItems(checkedValues);
        console.log('checked = ', checkedValues);
    };

    return (
    <>
        <Checkbox.Group options={values} onChange={onChange} />
        <br />
    </>
)};
export default CheckBoxCommon;