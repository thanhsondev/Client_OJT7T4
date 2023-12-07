import React, {useContext} from 'react';
import { Checkbox } from 'antd';
import { ComponentsContext } from '../../contexts/componentsContext';

// const plainOptions = ['Cb1', 'Cb2', 'Cb3'];
const CheckBoxCommon = ({options, defaultValue}) => {
    const {
        setCheckedItems
    } = useContext(ComponentsContext);

    const onChange = (checkedValues) => {
        setCheckedItems(checkedValues);
        console.log('checked = ', checkedValues);
    };

    return (
    <>
        <Checkbox.Group options={options} defaultValue={defaultValue} onChange={onChange} />
        <br />
    </>
)};

export default CheckBoxCommon;
