import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EmployeeContext } from '../../contexts/employeeContext';
import { ComponentsContext } from '../../contexts/componentsContext';

import EmployeeForm from '../../components/employee/employeeForm';
import Alert from '../../components/alerts/alertCommon';
import Button from '../../components/buttons/ButtonCommon';

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
      <div>
        <Link to="/employee">Back</Link>
      </div>
      <div>
        {employee !== null && <EmployeeForm employee={employee} employeeId={employeeId} />}
      </div>
      {alert && (
        <Alert />
      )}
    </>
  );
};

export default EmployeeDetails;
