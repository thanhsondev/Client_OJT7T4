import React, { useState, useContext, useEffect } from 'react'
import moment from 'moment';

import { ProjectContext } from '../../contexts/projectContext';
import { TechnicalContext } from '../../contexts/technicalContext';

import { Form, Switch } from 'antd';

import TextInput from '../inputs/InputTextCommon';
import Button from '../buttons/ButtonCommon';
import DatePicker from '../inputs/DateCommon';
import Select from '../inputs/SelectCommon';
import Checkbox from '../inputs/CheckBoxCommon';
import TextArea from '../inputs/InputTextArea';

const ProjectForm = (project) => {
  const projectInfo = project.project;

  const {
    updateProject
  } = useContext(ProjectContext);

  const {
    technicalState: { technicals },
    getTechnicals
  } = useContext(TechnicalContext);
  useEffect(() => { getTechnicals() }, []);

  let techOptions = []
  technicals.map(tech => (
    techOptions.push(
      {
        label: tech.name,
        value: tech._id,
      }
    )
  ));

  let defaultCheckedList = []
  projectInfo.technical.map(tech => (
    defaultCheckedList.push(
      tech._id
    )
  ));

  const [checkedTech, setCheckedTech] = useState(defaultCheckedList)
  const onTechChange = (checkedValues) => {
    setCheckedTech(checkedValues);
  };

  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const [status, setStatus] = useState(projectInfo.status);

  const statusOprions = [
    { value: 'Planning', label: 'Planning' },
    { value: 'Running', label: 'Running' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Closed', label: 'Closed' }
  ];

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const [date, setDate] = useState(projectInfo.startDate);
  const startDate = moment(new Date(date));
  const handleChangeDate = (date, dateString) => {
    const formattedDates = moment(dateString, 'YYYY-MM-DDTHH:mm:ss.SSSZ').toISOString();
    setDate(formattedDates);
  }

  const [isActive, setIsActive] = useState(projectInfo.isActive);
  const onIsActiveChange = (checked) => {
    setIsActive(checked);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onFinish = async (values) => {
    console.log(values);
    const formData = new FormData()
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("startDate", date);
    formData.append("status", status);
    formData.append("isActive", isActive);
    formData.append("technical", JSON.stringify(checkedTech));

    updateProject(formData, projectInfo._id);
    setIsEditing(!isEditing);
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <>
      {isEditing ?
        <Button buttonType={"save"} handleOnClick={() => form.submit()} /> :
        <Button buttonType={"edit-text"} handleOnClick={() => handleEdit()} />
      }
      <Form
        form={form}
        name="Project information"
        layout="vertical"
        initialValues={{
          remember: true,
          name: projectInfo.name,
          description: projectInfo.description,
          startDate: startDate,
          isActive: isActive,
          status: projectInfo.status,
          technicals: defaultCheckedList
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        disabled={!isEditing}
      >
        <Form.Item
          label="Active"
          name="isActive"
        >
          <Switch defaultChecked={isActive} onChange={onIsActiveChange} />
        </Form.Item>

        <Form.Item
          label="Project Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Enter project name',
            },
          ]}
        >
          <TextInput />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Start date"
          name="startDate"
        >
          <DatePicker onChange={handleChangeDate} />
        </Form.Item>

        <Form.Item
          label="Project's status"
          name="status"
        >
          <Select options={statusOprions} onChange={handleStatusChange} />
        </Form.Item>

        <Form.Item
          label="Technicals"
          name="technicals"
          valuePropName="checked"
        >
          <Checkbox options={techOptions} defaultValue={defaultCheckedList} onChange={onTechChange} />
        </Form.Item>

      </Form>
    </>
  )
}

export default ProjectForm
