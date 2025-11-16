'use client'
import FitnessCalendar from '@/components/Shared/FitnessCalender'
import Heading from '@/UI/Heading'
import React, { useState } from 'react'
import addBtn from '@/assets/icons/addBtn.svg'
import Image from 'node_modules/next/image'
import TodoList from '@/components/Shared/TodoList'
import ActivityModal from '@/components/Modals/ActivityModal'

export default function FitnessPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* Calender */}
      <div>
        <FitnessCalendar />
      </div>

      {/* to do list */}
      <div>
        {/* header */}
        <div className='py-10 flex justify-between'>
          <Heading text="Today’s Workout"/>
          <button onClick={handleOpenModal} className='cursor-pointer'>
            <Image src={addBtn} alt='button'/>
          </button>
        </div>

        {/* list */}
        <div>
        <TodoList />
        </div>
      </div>

      <ActivityModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          // onSubmit={handleSubmit}
        />
    </div>
  )
}
