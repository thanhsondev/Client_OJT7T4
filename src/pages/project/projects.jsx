import React, { useContext, useEffect } from 'react';

import { Col, Row, Spin } from 'antd';

import { ProjectContext } from '../../contexts/projectContext';

import ProjectCard from '../../components/project/projectCard';

const Projects = () => {

  const {
    getProjects,
    projectState: { projects, isLoading }
  } = useContext(ProjectContext);

  useEffect(() => {
    getProjects();
  }, []);

  let projectCards = null;
  if (isLoading) {
    projectCards = (
      <div className="spinner">
        <Spin size="large" />
      </div>
    )
  } else {
    projectCards = (
      <Row gutter={16}>
        {projects && projects.map(project => (
          <Col span={8} key={project._id}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <>
      {projectCards}
    </>
  );
};

export default Projects
