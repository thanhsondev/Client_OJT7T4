import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProjectContext } from '../../contexts/projectContext';

import EmployeeInProject from '../../components/employee/employeeInProject';
import ButtonCommon from '../../components/buttons/ButtonCommon';
import AssignEmployeeModal from '../../components/employee/assignEmployeeModal';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const {
    projectState: { employeesInProject, isLoading },
    getEmployeesInProject,
    setAddEmployeeModal
  } = useContext(ProjectContext);

  useEffect(() => {
    getEmployeesInProject(projectId);
  }, [employeesInProject]);

  return (
    <>

      <div>
        {projectId}
        <ButtonCommon buttonType="add" handleOnClick={() => setAddEmployeeModal(true)}>
          Add Employee
        </ButtonCommon>
        {employeesInProject && isLoading ? <p>Đang tải...</p> : <EmployeeInProject employeesInProject={employeesInProject} />}
      </div>
      <AssignEmployeeModal projectId={projectId}/>

    </>
  );
}

export default ProjectDetails;
