import React, {useContext} from 'react';
import { EmployeeContext } from '../../contexts/employeeContext'
import { Button } from 'antd';

import AddModal from '../../components/employee/addEmployeeModal';

const Employees = () => {
    const {
        setShowModal
    } = useContext(EmployeeContext)

    const openAddModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <Button type="primary" onClick={openAddModal}>
                Add
            </Button>
            <AddModal />
        </>
    )
}

export default Employees