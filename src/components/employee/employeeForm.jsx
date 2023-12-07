import { useContext, useState, useEffect } from 'react';
import { Form, Upload, message } from 'antd';

import { EmployeeContext } from '../../contexts/employeeContext';
import { TechnicalContext } from '../../contexts/technicalContext';
import { ComponentsContext } from '../../contexts/componentsContext';

import TextInput from '../../components/inputs/InputTextCommon';
import Checkbox from '../inputs/CheckBoxCommon';
import RadioButton from '../inputs/RadioCommon';
import Button from '../buttons/ButtonCommon';

const EmployeeForm = (employee) => {
    const { 
        updateEmployee 
      } = useContext(EmployeeContext);

      const {
        technicalState: { technicals },
        getTechnicals
    } = useContext(TechnicalContext);
    useEffect(() => { getTechnicals() }, [])

    const {
        checkedItems,
        radioItem
    } = useContext(ComponentsContext);

    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onFinish = async () => {
    try {
      const formData = new FormData()
      if(imgFile){
          formData.append("image", imgFile);
      }
      formData.append("name", form.getFieldValue("name"));
      formData.append("code", form.getFieldValue("code"));
      formData.append("phone", form.getFieldValue("phone"));
      formData.append("email", form.getFieldValue("email"));
      formData.append("identity", form.getFieldValue("identity"));
      formData.append("gender", radioItem);
      formData.append("technical", JSON.stringify(checkedItems));

      updateEmployee(formData, employee.employeeId)

    } catch (error) {
      console.error('Validation failed:', error);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  let techOptions = []
    technicals.map(tech => (
        techOptions.push(
            {
                label: tech.name,
                value: tech._id,
            }
        )
    ))

    let defaultCheckedList = []
    employee.employee.technical.map(tech => (
        defaultCheckedList.push(
            tech._id
        )
    ))

  const genderOptions = [
    {
        label: 'Male',
        value: 'male',
    },
    {
        label: 'Female',
        value: 'female',
    },
    {
        label: 'Other',
        value: 'other',
    },
]

    const [imageUrl, setImageUrl] = useState();
    const [imgFile, setImgFile] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        return message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        return message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const handleChange = (info) => {
    if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, (url) => {
            setImageUrl(url);
        });
        setImgFile(info.file.originFileObj)
    }
};

  return (
    <>
      <h1>Employee Details</h1>
      <Button buttonType={"edit"} handleOnClick={() => handleEdit()}/>
      <Form
          form={form}
          name="add employee"
          layout="vertical"
          initialValues={{
            remember: true,
            name: employee.employee.name,
            code: employee.employee.code,
            phone: employee.employee.phone,
            email: employee.employee.email,
            identity: employee.employee.identity,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          disabled={!isEditing}
      >
          <Form.Item valuePropName="image" getValueFromEvent={imageUrl}>
              <Upload
                  name="image"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}

              >
                  {imageUrl ? (
                      <img
                          src={imageUrl}
                          alt="avatar"
                          style={{
                              width: '100%',
                          }}
                      />
                  ) : (
                    <img
                        src={employee.employee.image}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                )}
              </Upload>

          </Form.Item>

          <Form.Item
              label="Full Name"
              name="name"
              rules={[
                  {
                      required: true,
                      message: 'Enter employee name',
                  },
              ]}
          >
              <TextInput defaultValue={employee.employee.name}/>
          </Form.Item>

          <Form.Item
              label="Employee code"
              name="code"
              rules={[
                  {
                      required: true,
                      message: 'Enter employee code',
                  },
              ]}
          >
              <TextInput defaultValue={employee.employee.code}/>
          </Form.Item>

          <Form.Item
              label="Phone number"
              name="phone"
              rules={[
                  {
                      required: true,
                      message: 'Enter phone number',
                  },
              ]}
          >
              <TextInput defaultValue={employee.employee.phone}/>
          </Form.Item>

          <Form.Item
              label="Email"
              name="email"
              rules={[
                  {
                      required: true,
                      message: 'Enter email',
                  },
              ]}
          >
              <TextInput defaultValue={employee.employee.email}/>
          </Form.Item>

          <Form.Item
              label="Identity code"
              name="identity"
              rules={[
                  {
                      required: true,
                      message: 'Enter identity code',
                  },
              ]}
          >
              <TextInput defaultValue={employee.employee.identity}/>
          </Form.Item>

          <Form.Item
              label="Technicals"
              valuePropName="checked"
          >
              <Checkbox options={techOptions} defaultValue={defaultCheckedList} />
          </Form.Item>

          <Form.Item label="Gender">
              <RadioButton options={genderOptions} defaultValue={employee.employee.gender} />
          </Form.Item>

          <Form.Item labelAlign="right" wrapperCol={{ offset: 20 }}>
              <Button buttonType={"save"} handleOnClick={() => form.submit()}/>
          </Form.Item>
      </Form>
    </>
  )
}

export default EmployeeForm