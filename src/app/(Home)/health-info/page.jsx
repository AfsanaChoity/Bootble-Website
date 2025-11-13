'use client'
import Heading from '@/UI/Heading'
import React from 'react'
import { Form, Input } from 'antd';
import { Select } from 'antd';
import AuthBtn from '@/UI/AuthBtn';
import '@/styles/AuthForm.css'

const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function HealthInfoPage() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(values)
    }

    return (
        <div>
            {/* Heading */}
            <div className='pb-6 flex justify-center'>
                <Heading text="Update Your Daily Stats" />
            </div>

            {/* form */}
            <div className='max-w-3xl mx-auto'>
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    onFinish={onFinish}

                    className="[&_.ant-form-item-label>label]:text-[13px] [&_.ant-form-item]:mb-4"
                >

                    <Form.Item
                        label="Calories Burned"
                        name="Calories Burned"
                        rules={[
                            { message: 'How much calory you have burned today?' },

                        ]}
                    >
                        <Input size="large" placeholder="1500" />
                    </Form.Item>


                    <Form.Item
                        label="Your Target"
                        name="Your Target"
                        rules={[
                            { message: 'How much calory you want to burn today?' },

                        ]}
                    >
                        <Input size="large" placeholder="2500" />
                    </Form.Item>

                    <Form.Item
                        label="Work Out"
                        name="Work Out"
                        rules={[
                            { message: 'Please enter your experience in years' },

                        ]}
                    >
                        <Input size="large" placeholder="45 mins" />
                    </Form.Item>

                    <Form.Item
                        label="Steps"
                        name="Steps"
                        rules={[
                            { message: 'Please enter your experience in years' },

                        ]}
                    >
                        <Input size="large" placeholder="5000" />
                    </Form.Item>

                    <Form.Item
                        label="Sleeping Hours"
                        name="Sleeping Hours"
                        rules={[
                            { message: 'Please enter your experience in years' },

                        ]}
                    >
                        <Input size="large" placeholder="7.5 hours" />
                    </Form.Item>

                    <Form.Item
                        label="Day"
                        name="day"
                        rules={[
                            { required: true, message: 'Please enter your category' },

                        ]}
                    >


                        <Select size="large" placeholder="Please select a day" className="wa-select">

                            {
                                days?.map((day, index) => {

                                    return (
                                        <Select.Option key={index} value={day}>{day}</Select.Option>
                                    )

                                })
                            }
                        </Select>


                    </Form.Item>


                    <Form.Item
                        label="Water"
                        name="water"
                        rules={[
                            { message: 'Please enter your experience in years' },

                        ]}
                    >
                        <Input size="large" placeholder="5 years" />
                    </Form.Item>




                    <div className='md:pt-6 '>

                        <AuthBtn text="Update" />

                    </div>
                </Form>
            </div>
        </div>
    )
}
