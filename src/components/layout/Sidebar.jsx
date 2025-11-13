'use client'

import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { usePathname, useRouter } from 'node_modules/next/navigation';
import Image from 'node_modules/next/image';
import '@/styles/Sidebar.css'
import Link from 'node_modules/next/link';
import { ButtonBase } from 'node_modules/@mui/material/index';

import homeIcon from '@/assets/icons/Home_fill.svg'
import fitness from '@/assets/icons/ios-fitness.svg'
import nutrition from '@/assets/icons/nutrition.svg'
import yoga from '@/assets/icons/yoga.svg'
import wellness from '@/assets/icons/wellness.svg'

const menuItems = [
    { id: 1, icon: homeIcon, text: 'Home', href: '/' },
    { id: 2, icon: fitness, text: 'Fitness', href: '/fitness' },
    { id: 3, icon: nutrition, text: 'Health Info', href: '/health-info' },
    { id: 4, icon: yoga, text: 'Meditation ', href: '/meditation' },
    { id: 5, icon: wellness, text: 'Wellness ', href: '/wellness' },

];


export default function Sidebar({ open, onClose }) {

    const router = useRouter();
    const pathname = usePathname();

 

    return (
        <div className=' '>

           

            {/* for large screen */}          
            <div className='hidden lg:block '>
                <div className='flex flex-col py-20  justify-between font-cabin font-semibold bg-white rounded-[20px] px-20 min-h-[80vh]'>
                    <ul className='whitespace-nowrap space-y-10  '>

                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href || pathname.startsWith(item.href + '/'); 
                                
                                return (
                                    <li key={item.id} className={`${isActive ? 'bg-[#12103008] rounded-full' : ''} text-center  `}>
                                        <ButtonBase
                                            TouchRippleProps={{ style: { color: '' } }}
                                            className=" !px-4 !py-2 ">
                                            <Link href={item.href} className='flex text-2xl font-semibold items-center   '>
                                                <Image src={item.icon} alt='icon' className='w-10' />
                                               {
                                                isActive && (
                                                    <span className='pl-2'>
                                                         {item.text}
                                                    </span>
                                                )
                                               }
                                            </Link>
                                        </ButtonBase>

                                    </li>

                                )
                            })
                        }
                    </ul>

                    
                </div>
            </div>

            {/* for small & medium devices */}
            <div>


                {/* Drawer */}
                <Drawer
                    title="Bootble"
                    placement="left"
                    // closable={false}
                    onClose={onClose}
                    open={open}
                    key="left"
                    width="240"
                    className="!text-[#121030] font-adamina !bg-white "
                >
                    <div className='flex flex-col  h-[80vh] justify-between font-cabin font-semibold '>
                        <ul className='whitespace-nowrap space-y-8 text-center '>
                            {
                                menuItems.map((item) => {
                                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                                    return (

                                        <li key={item.id}>

                                            <ButtonBase
                                                TouchRippleProps={{ style: { color: '' } }}
                                                className="  ">
                                                <Link
                                                    href={item.href}
                                                    className={` ${isActive ? 'py-1 px-10 !bg-[#12103008]  rounded-full' : ''} flex text-xl font-semibold items-center`}
                                                >
                                                    <Image src={item.icon} alt='icon' className='w-8' />
                                                    {
                                                        isActive && (
                                                            <span className='text-[#121030] pl-2'>{item.text}</span>
                                                        )
                                                    }
                                                </Link>

                                            </ButtonBase>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        
                    </div>
                </Drawer>
            </div>
        </div>
    )
}
