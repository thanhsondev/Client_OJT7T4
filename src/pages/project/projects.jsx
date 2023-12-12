import React, { useContext, useEffect } from 'react';

import { ProjectContext } from '../../contexts/projectContext';

import ProjectCard from '../../components/project/projectCard';

const Projects = () => {

  const {
    getProjects,
    projectState: { projects }
  } = useContext(ProjectContext);

  useEffect(() => {
    getProjects();
  }, []);

  const projectCards = projects.map((project) => (
    <>
      <ProjectCard project={project} />
    </>
  ));


  return (
    <>
      {projectCards}
    </>
  );
};

export default Projects
