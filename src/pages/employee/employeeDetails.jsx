import { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EmployeeContext } from '../../contexts/employeeContext';
import { Tabs } from 'antd';

import EmployeeForm from '../../components/employee/employeeForm'
import EmployeeHistory from '../../components/employee/employeeHistory'

const EmployeeDetails = () => {
  const { 
    employeeState: { employee, histories }, 
    getEmployeeById,
    getEmployeeHistories
  } = useContext(EmployeeContext);
  const { employeeId } = useParams();

  const [content, setContent] = useState('details')

  useEffect(() => {
    getEmployeeById(employeeId);
    getEmployeeHistories(employeeId);
  }, []);

  const onChange = (key) => {
    setContent(key)
  };

  const items = [
    {
      key: 'details',
      label: 'Information'
    },
    {
      key: 'history',
      label: 'History'
    }
  ];

  let contentItem = null;
  if (content === 'details') {
    contentItem = (
      <>
        {employee !== null && <EmployeeForm employee={employee} employeeId={employeeId} />}
      </>
    )
  } else {
    contentItem = (
      <>
        {histories !== null && <EmployeeHistory histories={histories} />}
      </>
    )
  }

  return ( 
    <>
    <Link to="/employee">Back</Link>
    <div style={{width: "100%"}}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      {contentItem}
    </div>
    </>
  );
};

export default EmployeeDetails;
