'use client'
import React from 'react'
import '@/styles/AuthForm.css'

import {
  Form,
  Input,
  
} from 'antd';
import {  MailOutlined } from '@ant-design/icons';

import Link from 'next/link';
import AuthPageFormat from '@/components/Shared/AuthPageFormat';
import AuthBtn from '@/UI/AuthBtn';



const ForgotPasswordForm = () => {
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
      name="forgot-password"
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

    



      {/* Button */}
      <Form.Item className='!mt-8  '>
        <Link href="/otp-verification"> 
          <AuthBtn text="Send"/>
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
        heading="Forgot Password?"
        subheading="To reset password, please enter your registered email address. We'll send you a code."
        form={<ForgotPasswordForm />}
        
      />
  

    </div>
  )
}
