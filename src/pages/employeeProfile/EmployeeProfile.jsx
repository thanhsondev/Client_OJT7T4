import { useParams } from "react-router-dom";

export const EmployeeProfile = () => {
  const { employeeId } = useParams();
  return <div>EmployeeProfile: {employeeId}</div>;
};
