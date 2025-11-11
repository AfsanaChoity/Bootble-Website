'use client'
import Heading from '@/UI/Heading'
import React from 'react'
import { LockOutlined, UserOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '@/styles/AuthForm.css'

import {
  Form,
  Input,
  DatePicker,

} from 'antd'
import AuthBtn from '@/UI/AuthBtn';

export default function EditAccountPage() {

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
        <Heading text="Edit Profile" />
      </div>

      {/* form */}
      <Form
        layout="vertical"
        form={form}
        name="edit-account"
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ fullName: "John Doe", email: "abc@gmail.com" }}
        scrollToFirstError
      >

        <Form.Item
          name="fullName"
          label="Full Name"

          rules={[{ message: 'Please input your full name' }]}
        >
          <Input size='large' prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}
        >
          <Input
            size='large'
            prefix={<MailOutlined />}
            disabled
          />
        </Form.Item>

        {/* location */}
        <Form.Item
          label="Location"
          name="location"
          rules={[
            { message: 'Please enter your address' },

          ]}
        >
          <Input size="large" prefix={<EnvironmentOutlined />} placeholder="e.g. Dhaka ,Bangladesh" />
        </Form.Item>



        {/* date of birth + Age */}
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          {/* date of birth */}
          <Form.Item label="Date of Birth" className=''>
            <DatePicker size='large' style={{ width: '100%' }} />
          </Form.Item>

          {/* Age */}
          <Form.Item label='Age'>
            <Input size='large' />
          </Form.Item>
        </div>

        {/* Height + Weight */}
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>

          {/* Height */}
          <Form.Item label='Height'>
            <Input size='large' />
          </Form.Item>

          {/* Weight */}
          <Form.Item label='Weight'>
            <Input size='large' />
          </Form.Item>
        </div>

          <Form.Item>
            <AuthBtn text="Update"/>
          </Form.Item>

      </Form>

    </div>
  )
}
