import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Tag } from 'antd';
import ButtonCommon from '../buttons/ButtonCommon';
import { format } from 'date-fns';

const HistoryCard = (history) => {
    const navigate = useNavigate();
    const employeeHistory = history.history;

    const handleDetails = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

  return (
    <>
    <Card 
        style={{ marginTop: 16, width:"100%" }} 
        title={employeeHistory.projectId.name} 
        extra={
            <Tag color={employeeHistory.isWorking ? 'green' : 'red'}>
                {employeeHistory.isWorking ? 'Working' : 'Outed'}
            </Tag>
        }
    >
        <p>Position: {employeeHistory.role.name}</p>
        <p>Description: {employeeHistory.description}</p>
        <br />
        <p>Join: {employeeHistory.joinDate}</p>
        <p>Out: {employeeHistory.outDate ? employeeHistory.joinDate : "On working"}</p>
        <p>Join: {format(new Date(employeeHistory.joinDate), 'yyyy-MM-dd')}</p>
        <p>Out: {employeeHistory.outDate ? format(new Date(employeeHistory.joinDate), 'yyyy-MM-dd') : "On working"}</p>
        <ButtonCommon buttonType="details" handleOnClick={() => handleDetails(employeeHistory.projectId._id)} />
    </Card>
    </>
  )
}

export default HistoryCard