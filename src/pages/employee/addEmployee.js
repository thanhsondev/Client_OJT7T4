import { useContext, useState, useEffect } from 'react'
import { EmployeeContext } from '../../contexts/employeeContext'
import { TechnicalContext } from '../../contexts/technicalContext'
import { Button, Checkbox, Form, Input, Radio, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const AddEmployeePage = () => {
    const {
        technicalState: { technicals },
        getTechnicals
    } = useContext(TechnicalContext);

    const {
        createEmployee
    } = useContext(EmployeeContext)

    useEffect(() => { getTechnicals() }, [])

    let techOptions = []
    technicals.map(tech => (
        techOptions.push(
            {
                label: tech.name,
                value: tech._id,
            }
        )
    ))

    const [technicalIds, setTechnicalIds] = useState([]);
    const optionChange = (checkedTechnical) => {
        setTechnicalIds(checkedTechnical);
    };

    const [gender, setGender] = useState();
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };

    const onFinish = (values) => {
        const formData = new FormData()
        formData.append("image", imgFile)
        formData.append("name", values.name)
        formData.append("code", values.code)
        formData.append("phone", values.phone)
        formData.append("email", values.email)
        formData.append("identity", values.identity)
        formData.append("gender", gender)
        formData.append("technical", JSON.stringify(technicalIds))

        console.log(technicalIds)

        createEmployee(formData)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [loading, setLoading] = useState(false);
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
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
            setImgFile(info.file.originFileObj)
        }
    };

    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </div>
    );

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item label="Image" valuePropName="image" getValueFromEvent={imageUrl}>
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
                            uploadButton
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
                    <Input />
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
                    <Input />
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
                    <Input />
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
                    <Input />
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
                    <Input />
                </Form.Item>

                <Form.Item
                    name="technical"
                    label="Technicals"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox.Group options={techOptions} onChange={optionChange} />
                </Form.Item>

                <Form.Item label="Gender">
                    <Radio.Group onChange={onChangeGender}>
                        <Radio value="male"> Male </Radio>
                        <Radio value="female"> Female </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddEmployeePage