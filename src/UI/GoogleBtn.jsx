import { Button } from 'node_modules/antd/es/index'
import Image from 'node_modules/next/image'
import React from 'react'
import apple from '@/assets/icons/google.svg'

export default function GoogleBtn({text}) {
  return (
    <div>
       <Button size='large' className='!w-[240px] !font-gabarito !text-[14px] !font-semibold !rounded-[30px] !px-8'>
        <Image src={apple} alt='apple' />
        {text}
       </Button>
    </div>
  )
}
