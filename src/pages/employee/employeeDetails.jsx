import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../contexts/employeeContext';

import EmployeeForm from '../../components/employee/employeeForm'

const EmployeeDetails = () => {
  const { 
    employeeState: { employee }, 
    getEmployeeById
  } = useContext(EmployeeContext);
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeById(employeeId);
  }, [employeeId]);

  return (
    <>
      {employee !== null && <EmployeeForm employee={employee[0]} employeeId={employeeId} />}
    </>
  );
};

export default EmployeeDetails;
