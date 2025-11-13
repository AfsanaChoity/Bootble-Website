import Heading from '@/UI/Heading'
import Paragraph from '@/UI/Paragraph'
import Image from 'node_modules/next/image'
import React from 'react'
import { Progress } from 'antd';
import gym from '@/assets/icons/gym.svg'
import walk from '@/assets/icons/walking.svg'
import SleepBarChart from '@/UI/SleepBarChart';
import water from '@/assets/icons/water.svg'

import fire from '@/assets/icons/fire.svg'
import tir from '@/assets/icons/tir.svg'


import sleep from '@/assets/icons/sleep.svg'

import heart from '@/assets/icons/heart.svg'

export default function UserDailyReport() {
    return (
        <div className=''>
           

            {/* Work Out,  Steps, Sleep, Water*/}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* 1st col */}
                {/* Work Out +  Steps*/}
                <div className='grid grid-cols-1 gap-4 '>
                    {/* work out */}
                    <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-4 ">
                        <div className="flex gap-2 items-center">
                            <div className="bg-[#FFE9FD] rounded-full p-2">
                                <Image src={gym} alt="icon" />
                            </div>
                            <div>
                                <Heading text="Work Out" />
                            </div>
                        </div>


                        <p className="font-josefin-sans font-semibold text-black text-xl lg:text-2xl">45 of 60 mins</p>
                    </div>

                    {/* Steps */}
                    <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-8 ">

                        <div className="flex gap-2 items-center">
                            <div className="bg-[#EBE9FF] rounded-full p-2">
                                <Image src={walk} alt="icon" />
                            </div>
                            <div>
                                <Heading text="Steps" />
                            </div>
                        </div>

                        {/* progress */}
                        <div>
                            <Progress type="circle" strokeColor='#121030' strokeWidth='8' percent={60} format={percent => `${percent} of 90`} />

                        </div>

                    </div>

                </div>


                {/* 2nd col */}
                {/* Sleep + water */}
                 <div className=" grid grid-cols-1 gap-4 ">
                          
                
                          <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-2 ">
                
                            <div className="flex gap-2 items-center">
                              <div className="bg-[#E9FDFF] rounded-full p-2">
                                <Image src={sleep} alt="icon"/>
                              </div>
                              <div>
                                <Heading text="Sleep"/>
                              </div>
                            </div>
                
                            {/* sleep bar */}
                            <div>
                                  <SleepBarChart />
                            </div>
                
                            {/* hours */}
                            <div className="flex justify-end">
                              <Paragraph text="7.5 hours"/>
                            </div>
                
                          </div>
                
                          <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-4">
                            <div className="flex gap-2 items-center">
                              <div className="bg-[#DBF4FF] rounded-full p-2">
                                <Image src={water} alt="icon"/>
                              </div>
                              <div>
                                <Heading text="Water"/>
                              </div>
                            </div>
                
                
                    <p className="font-josefin-sans font-semibold text-black text-xl lg:text-2xl">45 of 60 mins</p>
                          </div>
                        </div>



            </div>

        </div>
    )
}
