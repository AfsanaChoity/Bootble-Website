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

const SignInForm = () => {
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
      name="login"
      onFinish={onFinish}
      initialValues={{  }}
      scrollToFirstError
      requiredMark={false}
    >


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
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input size='large' prefix={<MailOutlined />}  placeholder="abc@gmail.com"/>
      </Form.Item>

    

        <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
      >
        <Input.Password size='large' prefix={<LockOutlined />} placeholder='********'/>
      </Form.Item>

      {/* Remember me & Forget Password */}
                <Form.Item>
                    <div className='flex justify-end items-center '>
                       
                      
                        <Link href="/forgot-password" className='font-josefin-sans !text-black lg:text-[18px]  font-bold hover:!underline'>Forgot password?</Link>
                    
                    </div>
                </Form.Item>


      {/* Button */}
      <Form.Item className='!mt-8  '>
        <Link href="/"> 
          <AuthBtn text="Log In"/>
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
        heading="Welcome Back!"
        subheading="Welcome back, Glad to see you again!"
        form={<SignInForm />}
        footnote="Don't have an account?"
        footnoteLink="Sign Up"
        footnoteLinkPath='/sign-up'
        login={true}
      />
  

    </div>
  )
}
