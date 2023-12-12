import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Tag, Dropdown, Menu, Badge } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import { ComponentsContext } from '../../contexts/componentsContext';
import { ProjectContext } from '../../contexts/projectContext';

import ConfirmModal from '../../components/Modal/ConfirmModal';

const ProjectCard = (project) => {
    const navigate = useNavigate();

    const projectInfo = project.project;
    const technicals = projectInfo.technical;

    const {
        closeProject,
    } = useContext(ProjectContext);

    const {
        setShowConfirmModal
    } = useContext(ComponentsContext);

    const settingsDropdown = (cardId) => (
        <Menu onClick={(e) => handleMenuClick(e, cardId)}>
            <Menu.Item key="more">More</Menu.Item>
            <Menu.Item key="delete"><a style={{ color: "red" }}>Delete</a></Menu.Item>
        </Menu>
    );

    const handleMenuClick = (e, cardId) => {
        if (e.key === 'more') {
            navigate(`/project/${cardId}`);
        } else if (e.key === 'delete') {
            setShowConfirmModal(true);
            setProjectID(cardId);
        }
        setVisibleDropdown(null);
    };

    const [visibleDropdown, setVisibleDropdown] = useState(null);

    const handleDropdownVisibleChange = (cardId, visible) => {
        if (visible) {
            setVisibleDropdown(cardId);
        } else {
            setVisibleDropdown(null);
        }
    };



    const handleClose = (projectId) => {
        closeProject(projectId);
        setShowConfirmModal(false);
    };
    const [projectId, setProjectID] = useState('');

    const body = (
        <>
            <Card key={projectInfo._id} style={{ width: 300, border: '1.25px solid #c7c5c5' }}>
                <div style={{ display: "flex", justifyContent:"space-between" }}>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: 6 }}>{projectInfo.name}</p>
                    <p style={{ textAlign: 'right' }}>
                        <Tag color={
                            projectInfo.status === 'Planning' ? 'blue' :
                                projectInfo.status === 'Completed' ? 'green' :
                                    projectInfo.status === 'Closed' ? 'red' :
                                        projectInfo.status === 'Running' ? 'purple' :
                                            ''
                        }>
                            {projectInfo.status}
                        </Tag>
                    </p>
                    <Badge status={projectInfo.isActive ? 'success' : 'error'} />
                </div>
                <p style={{ fontWeight: 480, marginBottom: 6 }}>{projectInfo.description}</p>
                <p style={{ fontWeight: 500, marginBottom: 6 }}>Start date: {new Date(projectInfo.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div style={{ display: "flex" }}>
                    <p style={{ fontWeight: 500, marginBottom: 6, marginRight: 6 }}>Technical: </p>
                    {technicals.map(tech => (
                        <div key={tech.id}>
                            <Tag>{tech.name}</Tag>
                        </div>
                    ))}
                </div>
                <Dropdown
                    overlay={settingsDropdown(projectInfo._id)}
                    trigger={['click']}
                    open={visibleDropdown === projectInfo._id}
                    onOpenChange={(open) => handleDropdownVisibleChange(projectInfo._id, open)}
                    placement="bottomRight"
                >
                    <EllipsisOutlined
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            fontSize: '18px',
                            cursor: 'pointer',
                        }}
                    />
                </Dropdown>
            </Card>
        </>
    )
    return (
        <>
            {body}
            <ConfirmModal handleOk={() => handleClose(projectId)} title={'Confirm close project'} message={'Do you want to close this project?'} />
        </>
    )
}

export default ProjectCard
