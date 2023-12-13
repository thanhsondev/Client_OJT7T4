import { useContext } from "react";
import { EmployeeContext } from "../../contexts/employeeContext";
import { Input } from 'antd';

const SearchBox = () => {
    const { setSearchString } = useContext(EmployeeContext);

    return (
        <Input placeholder="input search text" size="large" onPressEnter={(e) => {setSearchString(e.target.value)}} />
    )
}

export default SearchBox