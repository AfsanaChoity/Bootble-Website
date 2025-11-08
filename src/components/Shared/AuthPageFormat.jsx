

import AuthHeading from '@/UI/AuthHeading'
import AuthSubHeading from '@/UI/AuthSubHeading'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/images/logo.svg'
import Image from 'node_modules/next/image'
import AppleBtn from '@/UI/AppleBtn'
import GoogleBtn from '@/UI/GoogleBtn'
import { Divider } from 'antd';

export default function AuthPageFormat({ heading, subheading, form, footnote = '', footnoteLink = '', footnoteLinkPath = '', register = false, login = false }) {
  return (
    <div className='min-h-screen py-4 lg:py-8 flex items-center  '>
      <div className='container mx-auto flex flex-col items-center  '>
        {/* Logo */}
        <div >
          <Image src={logo} alt='logo' />
        </div>

        {/* content */}
        <div className='pt-6 lg:pt-10  text-center w-full  '>
          {/* Heading */}
          <div>
            <AuthHeading heading={heading} />
          </div>

          {/* subheading */}
          <div className='pt-2 lg:pt-4 max-w-xl mx-auto px-4 lg:px-0'>
            <AuthSubHeading text={subheading} />
          </div>

          {/* Form */}
          <div className='pt-10  px-4 lg:px-0 max-w-xl mx-auto '>
            {form}
          </div>


          {/* Footnote */}
          <div className='pb-4 '>
            <p className='font-josefin-sans font-medium lg:text-[18px]'>{footnote} <Link href={footnoteLinkPath} className='font-bold hover:underline'>{footnoteLink}</Link></p>
          </div>


        </div>

        {/* Google & Apple Button */}

        {
          (register || login) && (
            <div className='space-y-4'>
              <Divider style={{ borderColor: '#B3B3B3' }}>OR</Divider>

              <GoogleBtn text={register ? 'Sign up with Google' : 'Sign in with Google'} />
              <AppleBtn text={register ? 'Sign up with Apple' : 'Sign in with Apple'} />
            </div>
          )
        }
      </div>
    </div>
  )
}
