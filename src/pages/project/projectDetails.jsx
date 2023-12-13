import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { ProjectContext } from '../../contexts/projectContext';

import ButtonCommon from '../../components/buttons/ButtonCommon';
import EmployeeInProject from '../../components/project/employeeInProject';
import AssignEmployeeModal from '../../components/project/assignEmployeeModal';
import ProjectForm from '../../components/project/projectForm';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const {
    projectState: { employeesInProject, isLoading, project },
    getEmployeesInProject,
    setAddEmployeeModal,
    findProject
  } = useContext(ProjectContext);

  useEffect(() => {
    findProject(projectId);
    getEmployeesInProject(projectId);
  }, []);

  return (
    <>
      <Link to="/project">Back</Link>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
          {project && <ProjectForm project={project} />}
        </div>
        <div style={{ width: "45%" }}>
          <ButtonCommon buttonType="add" handleOnClick={() => setAddEmployeeModal(true)}>
            Add Employee
          </ButtonCommon>
          {employeesInProject && isLoading ? <p>Đang tải...</p> : <EmployeeInProject employeesInProject={employeesInProject} />}
        </div>
      </div>
      {project && <AssignEmployeeModal project={project} />}
    </>
  );
}

export default ProjectDetails;
