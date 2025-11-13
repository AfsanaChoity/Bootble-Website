"use client";

import React from "react";
import Heading from "@/UI/Heading";
import {
  Form,
  Input,
  Select,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import AuthBtn from "@/UI/AuthBtn";
import '@/styles/AuthForm.css'

const { Option } = Select;
const { TextArea } = Input;

export default function ContactSupportPage() {
  // useForm hook (AntD)
  const [form] = Form.useForm();

  // phone prefix selector used as addonBefore
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }} size="large" defaultValue="63">
        <Option value="63">+63</Option>
        <Option value="1">+1</Option>
        <Option value="44">+44</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
         <div className="mb-6 flex justify-center">
        <Heading text="Contact Support" />
      </div>
    <div className="p-6 bg-white max-w-2xl rounded-[20px] shadow-sm mx-auto">
      {/* heading */}
     

      {/* form */}
      <div>
        <Form
          className="white-labels"
          layout="vertical"
          form={form}
          name="contact_support"
          onFinish={onFinish}
          initialValues={{ prefix: "63" }}
          scrollToFirstError
          requiredMark={false}
        >
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: "Please input your full name" }]}
          >
            <Input size="large" prefix={<UserOutlined />} placeholder="e.g. John Doe" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail" },
            ]}
          >
            <Input size="large" prefix={<MailOutlined />} placeholder="abc@gmail.com" />
          </Form.Item>

          

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input size="large" addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

            {/* location */}
                   <Form.Item
                      label="Your Message"
                      name="location"
                      rules={[
                        { required: true, message: 'Please enter your message here' },
                        
                      ]}
                    >
                      <TextArea size="large" placeholder="Type here..." style={{ height: 120, resize: 'none' }}/>
                    </Form.Item>
         

          {/* Button */}
          <Form.Item className="!mt-8">
            <AuthBtn text="Send" />
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
}
