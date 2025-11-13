'use client'
import React, { useState } from 'react';
import { Input, Radio, Checkbox, Select } from 'antd';
import '@/styles/PaymentForm.css'
import Image from 'node_modules/next/image';
import paypal from '@/assets/icons/paypal.svg'
import Heading from '@/UI/Heading';
import AuthBtn from '@/UI/AuthBtn';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [agreed, setAgreed] = useState(false);

  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const years = Array.from({ length: 20 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <div className="  ">
        <div className='pb-6'>
            <Heading text="Payment"/>
        </div>

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 font-josefin-sans">
        
        
        {/* Billing Address Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 font-josefin-sans">Billing Address</h2>
            <span className="text-sm text-gray-500">Requester fields*</span>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              ADDRESS*
            </label>
            <Input 
              placeholder="Address" 
              className="w-full  bg-gray-100 border-0 rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-12 gap-4">
            <div className="col-span-3">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                CITY*
              </label>
              <Input 
                placeholder="City" 
                className="w-full  bg-gray-100 border-0 rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                STATE*
              </label>
              <Input 
                placeholder="State" 
                className="w-full  bg-gray-100 border-0 rounded-lg"
              />
            </div>
            <div className="col-span-6">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                ZIP*
              </label>
              <Input 
                placeholder="Zip" 
                className="w-full  bg-gray-100 border-0 rounded-lg"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Payment Method Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
          
          <Radio.Group 
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mb-6"
          >
            <Radio value="credit-card" className="text-base font-medium">
              Credit Card
            </Radio>
            <Radio value="paypal" className="text-base font-medium   ">
              {/* <Image src={paypal} alt='icon'/> */}
              Stripe
            </Radio>
            <Radio value="paypal" className="text-base font-medium  ">
              {/* <Image src={paypal} alt='icon'/> */}
              Apple Pay
            </Radio>
            <Radio value="paypal" className="text-base font-medium   ">
              {/* <Image src={paypal} alt='icon'/> */}
              Google Pay
            </Radio>
          </Radio.Group>

          <div className="mb-4 mt-4">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              CARD NUMBER*
            </label>
            <Input 
              placeholder="Address" 
              className="w-full  bg-gray-100 border-0 rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-12 gap-4 mb-4">
            <div className="col-span-3">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                EXPIRE*
              </label>
              <Select
                placeholder="Month"
                className="w-full"
                options={months}
                style={{ height: '48px' }}
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                YEAR*
              </label>
              <Select
                placeholder="Year"
                className="w-full"
                options={years}
                style={{ height: '48px' }}
              />
            </div>
            <div className="col-span-6">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                CVV*
              </label>
              <Input 
                placeholder="CVV" 
                className="w-full bg-gray-100 border-0 rounded-lg"
                maxLength={4}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              NAME ON CARD*
            </label>
            <Input 
              placeholder="Full Name" 
              className="w-full  bg-gray-100 border-0 rounded-lg"
            />
          </div>

          <Checkbox 
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="text-sm text-gray-700 !font-josefin-sans"
          >
            I agree to the <span className="font-semibold">Terms & Conditions</span> and <span className="font-semibold">Privacy Policy</span> and certify that I am authorized to make a on this account.
          </Checkbox>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
         
          <AuthBtn text="Pay Rs. 000.00"/>
        </div>
      </div>

      
    </div>
  );
};

export default PaymentForm;