import React, { useState, useContext } from 'react';
import { Table, Space } from 'antd';
import ButtonCommon from '../../components/buttons/ButtonCommon';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import EmployeeInProjectModal from './employeeInProjectModal'
import { ComponentsContext } from '../../contexts/componentsContext';
import { ProjectContext } from '../../contexts/projectContext';

const EmployeeInProject = (employeesInProject) => {
    const {
        setShowConfirmModal
    } = useContext(ComponentsContext);

    const {
        removeEmployeeFromProject,
        setEmployeeDetailsModal
    } = useContext(ProjectContext);

    const empInPro = employeesInProject.employeesInProject;

    const [empId, setEmpId] = useState('');
    const [empDetails, setEmpDetails] = useState(null);

    const handleDetails = (record) => {
        setEmployeeDetailsModal(true);
        setEmpDetails(record);
    };

    const handleDelete = (empId) => {
        removeEmployeeFromProject(empId);
        setShowConfirmModal(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'employeeId',
            key: 'employeeName',
            render: (_, { employeeId }) => (
                <p>{employeeId.name}</p>
            )
        },
        {
            title: 'Position',
            dataIndex: 'role',
            key: 'role',
            render: (_, { role }) => (
                <p>{role.name}</p>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <ButtonCommon buttonType="edit" handleOnClick={() => handleDetails(record)} />
                    <ButtonCommon buttonType="delete" handleOnClick={() => { setShowConfirmModal(true); setEmpId(record._id); }} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table dataSource={empInPro} columns={columns} />
            <ConfirmModal handleOk={() => handleDelete(empId)} title={"Confirm remove employee"} message={"Do you confirm to remove this employee from project?"} />
            {empDetails && <EmployeeInProjectModal empDetails={empDetails} />}
        </>
    );
};

export default EmployeeInProject;
