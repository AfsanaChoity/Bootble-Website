'use client'
import Image from "next/image";
import {  Progress } from 'antd';

import fire from '@/assets/icons/fire.svg'
import tir from '@/assets/icons/tir.svg'
import gym from '@/assets/icons/gym.svg'
import walk from '@/assets/icons/walking.svg'
import sleep from '@/assets/icons/sleep.svg'
import water from '@/assets/icons/water.svg'
import heart from '@/assets/icons/heart.svg'

import Heading from "@/UI/Heading";
import Paragraph from "@/UI/Paragraph";
import SleepBarChart from "@/UI/SleepBarChart";

export default function Home() {
  return (
    <div className="   w-full">

      {/* calory div */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between bg-white p-8 rounded-[20px] shadow-xl xl:w-[70%]">
        <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="bg-[#FFFBE9] p-2 rounded-full">
                <Image src={fire} alt=""/>
              </div>
              <div>
                <Heading text="1500"/>
                <Paragraph text="Calories Burned"/>
              </div>
            </div>

             <div className="flex gap-4 items-center">
              <div className="bg-gray-300 p-2 rounded-full">
                <Image src={tir} alt=""/>
              </div>
              <div>
                <Heading text="1500"/>
                <Paragraph text="Calories Burned"/>
              </div>
            </div>
        </div>

        <div>
    <Progress type="circle" strokeColor='#DF6D48' strokeWidth='8' percent={75} format={percent => `${percent} Remaining`} />

        </div>
      </div>

      {/* grid */}

      <div className= "flex flex-col md:flex-row lg:flex-col xl:flex-row  gap-4 pt-10 ">

        {/* 1st col */}
        <div className="md:w-[50%] lg:w-full xl:w-[50%] space-y-4 items-stretch">

          {/* 1st row */}
          <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#FFE9FD] rounded-full p-2">
                <Image src={gym} alt="icon"/>
              </div>
              <div>
                <Heading text="Work Out"/>
              </div>
            </div>


    <p className="font-josefin-sans font-semibold text-black text-xl lg:text-2xl">45 of 60 mins</p>
          </div>

          {/* 2nd row */}
        <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-8 h-[330px]">

            <div className="flex gap-2 items-center">
              <div className="bg-[#EBE9FF] rounded-full p-2">
                <Image src={walk} alt="icon"/>
              </div>
              <div>
                <Heading text="Steps"/>
              </div>
            </div>

            {/* progress */}
            <div>
                  <Progress type="circle" strokeColor='#121030' strokeWidth='8' percent={60} format={percent => `${percent} of 90`} />

            </div>

          </div>
        </div>

        {/* 2nd col */}
         <div className=" md:w-[50%] lg:w-full xl:w-[50%] space-y-4 ">
          

          <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-2 h-[330px]">

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

          <div className="bg-white rounded-[20px] p-8 shadow-xl space-y-2">
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
  );
}
