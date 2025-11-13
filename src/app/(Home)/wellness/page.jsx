'use client'
import CaloryCard from '@/components/Shared/CaloryCard'
import UserDailyReport from '@/components/Shared/UserDailyReport'
import Heading from '@/UI/Heading'
import Paragraph from '@/UI/Paragraph'
import Image from 'node_modules/next/image'
import React from 'react'
import AI from '@/assets/images/AI.svg'
import CaloryChart from '@/components/ui/CaloryChart'


export default function WellnessPage() {
    return (
        <div>
            {/* calory card */}
            <div className="pb-4 xl:w-[60%]">
                <CaloryChart />
            </div>


            <div className="grid 2xl:grid-cols-5 gap-4">
                <div className="2xl:col-span-3">
                    <UserDailyReport />
                </div>

                {/* 2nd col */}
                <div className="2xl:col-span-2 ">
                    <div className="bg-white p-8 rounded-[20px] shadow-xl h-full">
                        <Heading text="AI" />
                        <Paragraph text="Hi, I am here to help you. " />
                        <div className="flex justify-center">

                            <Image src={AI} alt="AI" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
