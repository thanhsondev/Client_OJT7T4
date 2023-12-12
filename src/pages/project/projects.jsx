import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Space, Card, Tag, Dropdown, Menu } from 'antd';
import { SearchOutlined, EllipsisOutlined } from '@ant-design/icons';

import { ComponentsContext } from '../../contexts/componentsContext';
import { ProjectContext } from '../../contexts/projectContext';

import ButtonCommon from '../../components/buttons/ButtonCommon';
import ConfirmModal from '../../components/Modal/ConfirmModal'

const Projects = () => {
  const navigate = useNavigate();
  const {
    getProjects,
    projectState: { projects },
    closeProject,
  } = useContext(ProjectContext);

  const {
  } = useContext(ComponentsContext);

  const {
    setShowConfirmModal
  } = useContext(ComponentsContext);

  useEffect(() => {
    getProjects();
  }, []);

  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleDropdownVisibleChange = (cardId, visible) => {
    if (visible) {
      setVisibleDropdown(cardId);
    } else {
      setVisibleDropdown(null);
    }
  };

  const settingsDropdown = (cardId) => (
    <Menu onClick={(e) => handleMenuClick(e, cardId)}>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  const handleMenuClick = (e, cardId) => {
    if (e.key === 'edit') {
      navigate(`/project/${cardId}`);
    } else if (e.key === 'delete') {
      setShowConfirmModal(true);
      setProjectID(cardId);
    }
    setVisibleDropdown(null);
  };

  const handleClose = (projectId) => {
    closeProject(projectId);
    setShowConfirmModal(false);
  };
  const [projectId, setProjectID] = useState('');
  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef(null);

  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };

  // const handleReset = (clearFilters, confirm) => {
  //   clearFilters();
  //   setSearchText('');
  //   confirm();
  // };

  // const getColumnSearchProps = (dataIndex) => ({
  //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //       onKeyDown={(e) => e.stopPropagation()}
  //     >
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search`}
  //         value={selectedKeys[0]}
  //         onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: 'block',
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters, confirm)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             close();
  //           }}
  //         >
  //           Close
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? '#1677ff' : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   onFilterDropdownOpenChange: (visible) => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current?.select(), 100);
  //     }
  //   },
  //   render: (text) => text,
  // });

  const projectCards = projects.map((project) => (
    <Card key={project._id} style={{ width: 300, border: '1.25px solid #c7c5c5' }}>
      <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: 6 }}>{project.name}</p>
      <p style={{ textAlign: 'right' }}>
        <Tag color={project.status === 'Planning' ? 'blue' : project.status === 'Complete' ? 'green' : ''}>
          {project.status}
        </Tag>
      </p>
      <p style={{ fontWeight: 480, marginBottom: 6 }}>{project.description}</p>
      <p style={{ fontWeight: 500, marginBottom: 6 }}>Start date: {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p style={{ fontWeight: 500, marginBottom: 6 }}>Tech: {project.technical}</p>
      <Dropdown
        overlay={settingsDropdown(project._id)}
        trigger={['click']}
        open={visibleDropdown === project._id}
        onOpenChange={(open) => handleDropdownVisibleChange(project._id, open)}
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
  ));


  return (
    <>
      {projectCards}
      <ConfirmModal handleOk={() => handleClose(projectId)} title={'Confirm close project'} message={'Do you want to close this project?'} />
    </>
  );
};

export default Projects
