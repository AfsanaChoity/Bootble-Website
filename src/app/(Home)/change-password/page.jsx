'use client'
import Heading from '@/UI/Heading'
import React from 'react'
import { LockOutlined } from '@ant-design/icons';
import '@/styles/AuthForm.css'

import {
    Form,
    Input,
    DatePicker,

} from 'antd'
import AuthBtn from '@/UI/AuthBtn';

export default function ChangePasswordPage() {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            {/* heading */}
            <div className='pb-10'>
                <Heading text="Change Password" />
            </div>

            {/* form */}
            <Form
                layout="vertical"
                form={form}
                name="edit-account"
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{}}
                scrollToFirstError
            >




                <Form.Item
                    name="currentPassword"
                    label="Current Password"
                    rules={[
                        {

                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password size='large' prefix={<LockOutlined />} placeholder='********' />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    label="New Password"
                    rules={[
                        {

                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password size='large' prefix={<LockOutlined />} placeholder='********' />
                </Form.Item>


                <Form.Item
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    rules={[
                        {

                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password size='large' prefix={<LockOutlined />} placeholder='********' />
                </Form.Item>


                    {/* Button */}
                    <Form.Item>
                        <AuthBtn text="Change Password"/>
                    </Form.Item>


            </Form>

        </div>
    )
}
