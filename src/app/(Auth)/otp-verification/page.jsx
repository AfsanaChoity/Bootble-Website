'use client'
import React, { useState } from 'react'
import '@/styles/AuthForm.css'

import {
  ConfigProvider,
  Input,
  
} from 'antd';

import Link from 'next/link';
import AuthBtn from '@/UI/AuthBtn';
import AuthPageFormat from '@/components/Shared/AuthPageFormat';


const VerificationForm = () => {


  const onChange = value => {
    console.log('Received values of form: ', value);
  };


  
  return (
   <div className='max-w-md mx-auto space-y-4 md:space-y-8 mt-4 lg:mt-8 mb-4 md:mb-8'>

    <div>
       <Input.OTP
        length={6}
        size="large"
        className=""
        onChange={onChange}   
      />
    </div>

    {/* Button */}
    <div>
       <Link href="/reset-password"><AuthBtn text="Verify Code"/></Link>
    </div>

   

   </div>
  );
};


export default function OtpVerificationPage() {
  return (
    <div className=''>

 <ConfigProvider
      theme={{
        components: {
          Input: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
          Select:{ hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
        },
      }}
    >
      <AuthPageFormat
        heading="OTP"
        subheading="To reset your account, please enter the verification code you get on your email mdsah*******@gmail.com"
        form={<VerificationForm />}
        footnote="You have not received the email?"
        footnoteLink="Resend"
      />
    </ConfigProvider>

    
    </div>
  )
}
