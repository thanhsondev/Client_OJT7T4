import { useContext, useState, useEffect } from 'react';
import { Form, Upload, message, Select } from 'antd';
import { Link } from "react-router-dom";

import { EmployeeContext } from '../../contexts/employeeContext';
import { TechnicalContext } from '../../contexts/technicalContext';
import { ComponentsContext } from '../../contexts/componentsContext';

import TextInput from '../../components/inputs/InputTextCommon';
import Checkbox from '../inputs/CheckBoxCommon';
import RadioButton from '../inputs/RadioCommon';
import Button from '../buttons/ButtonCommon';

import countryCode from '../../JsonData/CountryCodes.json';

const EmployeeForm = (employee) => {
    const { updateEmployee } = useContext(EmployeeContext);

    const {
        technicalState: { technicals },
        getTechnicals
    } = useContext(TechnicalContext);

    const {
        checkedItems,
        radioItem,
        processing,
        setProcessing
    } = useContext(ComponentsContext);

    
    useEffect(() => {
        getTechnicals();
    }, []);

    let defaultCheckedList = [];
    employee.employee.technical.map(tech => (
        defaultCheckedList.push(
            tech._id
        )
    ))

    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    let phoneOptions = [];
    countryCode.map(country => (
        phoneOptions.push(
            {
                label: country.name,
                value: country.dial_code,
            }
        )
    ))
    const phoneNumber = employee.employee.phone;

    const defaultDialCode = phoneNumber.slice(0, 3); 
    const actualNumber = phoneNumber.slice(3);

    const [dialCode, setDialCode] = useState(defaultDialCode);

    const handlePhoneChange = (value) => {
        setDialCode(value);
    };

    const selectPhone = (
        <Select onChange={handlePhoneChange} options={phoneOptions} defaultValue={dialCode} />
    );

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{9,12}$/;
        return phoneRegex.test(phoneNumber);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onFinish = async () => {
        try {
            const formData = new FormData();

            if (imgFile) {
                formData.append("image", imgFile);
            }

            if (!validatePhoneNumber(form.getFieldValue("phone"))) {
                form.setFields([
                    {
                        name: "phone",
                        errors: ["Please enter a valid phone number (10 digits)"],
                    },
                ]);
                return;
            }
    
            if (!validateEmail(form.getFieldValue("email"))) {
                form.setFields([
                    {
                        name: "email",
                        errors: ["Please enter a valid email address"],
                    },
                ]);
                return;
            }

            formData.append("name", form.getFieldValue("name"));
            formData.append("code", form.getFieldValue("code"));
            formData.append("phone",dialCode + form.getFieldValue("phone"));
            formData.append("email", form.getFieldValue("email"));
            formData.append("identity", form.getFieldValue("identity"));
            formData.append("gender", radioItem);
            formData.append("technical", JSON.stringify(checkedItems));

            updateEmployee(formData, employee.employeeId);
            setProcessing(true);

            if (processing === false) {
                setIsEditing(!isEditing);
            }

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
            <div>
                <Link to="/employee">Back</Link>
                <h1 style={{ textAlign: "center" }}>{employee.employee.name.toUpperCase()}</h1>
            </div>
            <Button buttonType={"edit-text"} handleOnClick={() => handleEdit()} />
            <Form
                form={form}
                name="add employee"
                layout="vertical"
                initialValues={{
                    remember: true,
                    name: employee.employee.name,
                    code: employee.employee.code,
                    phone: actualNumber,
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
                    <TextInput />
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
                    <TextInput />
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
                    <TextInput addonBefore={selectPhone} prefix={dialCode} />
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
                    <TextInput />
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
                    <TextInput />
                </Form.Item>

                <Form.Item
                    label="Technicals"
                    valuePropName="checked"
                >
                    <Checkbox options={techOptions} defaultValue={defaultCheckedList}/>
                </Form.Item>

                <Form.Item label="Gender">
                    <RadioButton options={genderOptions} defaultValue={employee.employee.gender} />
                </Form.Item>

                <Form.Item labelAlign="right" wrapperCol={{ offset: 20 }}>
                    {processing === true ?
                        (<Button buttonType={"loading"} />)
                        :
                        (<Button buttonType={"save"} handleOnClick={() => form.submit()} />)
                    }
                </Form.Item>
            </Form>
        </>
    );
}

export default EmployeeForm