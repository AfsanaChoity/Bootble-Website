'use client'
import React from 'react'
import '@/styles/AuthForm.css'

import {
  ConfigProvider,
  Form,
  Input,
  Select,
} from 'antd';
import { LockOutlined, UserOutlined, MailOutlined,EnvironmentOutlined  } from '@ant-design/icons';

import Link from 'next/link';
import AuthPageFormat from '@/components/Shared/AuthPageFormat';
import AuthBtn from '@/UI/AuthBtn';


const { Option } = Select;

const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}
      getPopupContainer={(node) => node.parentNode}
      >
        <Option value="63">+63</Option>
      </Select>
    </Form.Item>
  );
  
  return (
   <div className=''>
     <Form
      className="white-labels  "
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ prefix: '63' }}
      scrollToFirstError
      requiredMark={false}
    >

       <Form.Item
        name="username"
        label="User Name"
        // tooltip="What do you want others to call you?"
       
        rules={[{ required: true, message: 'Please input your full name' }]}
      >
        <Input size='large' prefix={<UserOutlined />} placeholder="e.g. John Doe"/>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
       
        rules={[
          {
            
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail',
          },
        ]}
      >
        <Input size='large' prefix={<MailOutlined />}  placeholder="abc@gmail.com"/>
      </Form.Item>

      {/* location */}
       <Form.Item
          label="Location"
          name="location"
          rules={[
            { required: true, message: 'Please enter your address' },
            
          ]}
        >
          <Input size="large" prefix={<EnvironmentOutlined />} placeholder="e.g. Dhaka ,Bangladesh" />
        </Form.Item>

    



      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input size='large' addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

        <Form.Item
        name="password"
        label="Choose a password with at least 8 characters"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
      >
        <Input.Password size='large' prefix={<LockOutlined />} placeholder='********'/>
      </Form.Item>

      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item> */}

      {/* Button */}
      <Form.Item className='!mt-8  '>
        <Link href="/verification"> 
          <AuthBtn text="Sign Up"/>
    </Link>
      </Form.Item>
    </Form>
   </div>
  );
};


export default function SignUpPage() {
  return (
    <div>


      <AuthPageFormat
        heading="Register a new account"
        subheading="Please enter your information to create account"
        form={<SignUpForm />}
        footnote="Already have an account?"
        footnoteLink="Sign In"
        footnoteLinkPath='/sign-in'
        register={true}
      />
  

    </div>
  )
}
