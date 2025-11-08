import { Button } from 'node_modules/antd/es/index'
import Image from 'node_modules/next/image'
import React from 'react'
import apple from '@/assets/icons/apple.svg'

export default function AppleBtn({text}) {
  return (
    <div>
       <Button size='large' className='!font-gabarito !text-[14px] !font-semibold !rounded-[30px] !w-[240px]'>
        <Image src={apple} alt='apple' />
        {text}
       </Button>
    </div>
  )
}
