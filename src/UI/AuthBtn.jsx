import { Button } from 'antd'
import React from 'react'

export default function AuthBtn({text, onClick=undefined}) {
  return (
    <div>
        <Button onClick={onClick} type="primary" htmlType="submit" block size='large' className=' text-[14px] !bg-[#121030] !font-josefin-sans !font-semibold lg:!text-[18px]'>
          {text}
        </Button>
    </div>
  )
}
