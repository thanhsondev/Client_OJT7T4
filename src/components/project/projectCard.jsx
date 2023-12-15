import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Tag, Badge } from 'antd';

import { ProjectContext } from '../../contexts/projectContext';

import ButtonCommon from '../buttons/ButtonCommon';

const ProjectCard = (project) => {
    const navigate = useNavigate();

    const projectInfo = project.project;
    const technicals = projectInfo.technical;

    const {
        getEmployeesInProject,
    } = useContext(ProjectContext);

    useEffect(() => {
        getEmployeesInProject(projectInfo._id);
    }, []);

    const handleDetails = (proId) => {
        navigate(`/project/${proId}`);
    }

    const [projectId, setProjectID] = useState('');

    const body = (
        <>
            <div style={{ width: "95%" }}>
                {/* <Badge.Ribbon text={`${employeesInProject.length} employees`} color="volcano"> */}
                    <Card key={projectInfo._id} style={{ border: '1.25px solid #c7c5c5' }}>
                        <Tag color={
                            projectInfo.status === 'Planning' ? 'blue' :
                                projectInfo.status === 'Completed' ? 'green' :
                                    projectInfo.status === 'Closed' ? 'red' :
                                        projectInfo.status === 'Running' ? 'purple' :
                                            ''
                        }>
                            {projectInfo.status}
                        </Tag>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: 6 }}>{projectInfo.name}</p>
                            <Badge status={projectInfo.isActive ? 'success' : 'error'} />
                        </div>
                        <p style={{ fontWeight: 480, marginBottom: 6 }}>{projectInfo.description}</p>
                        <p style={{ fontWeight: 500, marginBottom: 6 }}>Start date: {new Date(projectInfo.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}>
                            <p style={{ fontWeight: 500, marginBottom: 6, marginRight: 6 }}>Technical: </p>
                            {technicals.map(tech => (
                                <div key={`${tech._id}-${projectInfo._id}`}>
                                    <Tag>{tech.name}</Tag>
                                </div>
                            ))}
                        </div>
                        <ButtonCommon buttonType="details" handleOnClick={() => handleDetails(projectInfo._id)} />
                    </Card>
                {/* </Badge.Ribbon> */}
            </div>
        </>
    )
    return (
        <>
            {body}
        </>
    )
}

export default ProjectCard
