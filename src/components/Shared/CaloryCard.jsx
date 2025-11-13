import Heading from '@/UI/Heading'
import Paragraph from '@/UI/Paragraph'
import Image from 'node_modules/next/image'
import React from 'react'
import { Progress } from 'antd';
import fire from '@/assets/icons/fire.svg'
import tir from '@/assets/icons/tir.svg'

export default function CaloryCard() {
  return (
    <div>
         {/* calory div */}
                    <div className="flex flex-col md:flex-row gap-4 md:justify-between bg-white p-8 rounded-[20px] shadow-xl">
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#FFFBE9] p-2 rounded-full">
                                    <Image src={fire} alt="" />
                                </div>
                                <div>
                                    <Heading text="1500" />
                                    <Paragraph text="Calories Burned" />
                                </div>
                            </div>
        
                            <div className="flex gap-4 items-center">
                                <div className="bg-gray-300 p-2 rounded-full">
                                    <Image src={tir} alt="" />
                                </div>
                                <div>
                                    <Heading text="1500" />
                                    <Paragraph text="Calories Burned" />
                                </div>
                            </div>
                        </div>
        
                        <div className='flex justify-center'>
                            <Progress type="circle" strokeColor='#DF6D48' strokeWidth='8' percent={75} format={percent => `${percent} Remaining`} />
        
                        </div>
                    </div>
    </div>
  )
}
