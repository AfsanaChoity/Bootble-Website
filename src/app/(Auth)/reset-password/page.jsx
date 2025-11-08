'use client'
import React, { useState } from 'react'

import '@/styles/AuthForm.css'


import {
    ConfigProvider,
    Form,
    Input,
    Select,
} from 'antd';

import Link from 'next/link';
import AuthBtn from '@/UI/AuthBtn';
import AuthPageFormat from '@/components/Shared/AuthPageFormat';



const ResetPasswordForm = () => {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    


    return (
        <div className=''>
            <Form
                className="white-labels  "
                layout="vertical"
                form={form}
                name="reset-password"
                onFinish={onFinish}
                initialValues={{  }}
                scrollToFirstError
            >



                {/* Password */}
                <Form.Item
                    name="new-password"
                    label="New password"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password size='large'/>
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                    name="confirm-password"
                    label="Confirm New password"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password size='large'/>
                </Form.Item>

                {/* Button */}
                <Form.Item className='  '>
                    
                    <AuthBtn text="Save" />
                    
                </Form.Item>
            </Form>

           
        </div>
    );
};


export default function ResetPasswordPage() {
    return (
        <div>

            <ConfigProvider
                theme={{
                    components: {
                        Input: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
                        Select: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
                    },
                }}
            >
                <AuthPageFormat
                    heading="Set New Password"
                    subheading="Create a new password. Ensure it differs from previous ones for security"
                    form={<ResetPasswordForm />}
                    
                />
            </ConfigProvider>
        </div>
    )
}
