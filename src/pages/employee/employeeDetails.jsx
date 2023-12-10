import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../contexts/employeeContext';
import { ComponentsContext } from '../../contexts/componentsContext';

import EmployeeForm from '../../components/employee/employeeForm'
import Alert from '../../components/alerts/alertCommon'

const EmployeeDetails = () => {
  const {
    employeeState: { employee },
    getEmployeeById
  } = useContext(EmployeeContext);
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeById(employeeId);
  }, [employee]);

  const {
    alert
  } = useContext(ComponentsContext);

  return (
    <>
      <div style={{ width: "100%" }}>
        {employee !== null && <EmployeeForm employee={employee} employeeId={employeeId} />}
      </div>
      {alert && (
        <Alert />
      )}
    </>
  );
};

export default EmployeeDetails;
