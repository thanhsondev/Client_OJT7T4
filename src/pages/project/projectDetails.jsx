import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeInProject from '../../components/employee/employeeInProject';
import { ProjectContext } from '../../contexts/projectContext';

const ProjectDetails = () => {
    const { projectId } = useParams();

    const {
      projectState: { employeesInProject, isLoading },
      getEmployeesInProject,
    } = useContext(ProjectContext);
  
    useEffect(() => {
      getEmployeesInProject(projectId);
    }, []);

  return (
    <div>
      {projectId}
      { employeesInProject && isLoading ? <p>Đang tải...</p> : <EmployeeInProject employeesInProject={employeesInProject}/>}
    </div>
  )
}

export default ProjectDetails
