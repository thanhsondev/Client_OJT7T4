import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../contexts/employeeContext';
import { ComponentsContext } from '../../contexts/componentsContext';

import { Alert } from 'antd';

import EmployeeForm from '../../components/employee/employeeForm'

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
    alert,
    setAlert,
    alertMessage,
    alertType
  } = useContext(ComponentsContext);

  const onCloseAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        {employee !== null && <EmployeeForm employee={employee} employeeId={employeeId} />}
      </div>
      {alert && (
        <Alert
          message={alertMessage}
          type={alertType}
          showIcon
          closable
          onClose={onCloseAlert}
          style={{
            position: 'fixed',
            top: 20,
            right: 16,
            width: 300,
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default EmployeeDetails;
