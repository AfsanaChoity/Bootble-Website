

'use client'
import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Heading from '@/UI/Heading';
import Paragraph from '@/UI/Paragraph';

const FitnessCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Get the first day of the month
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  // Get the last day of the month
  const getLastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  // Generate calendar days for 2 weeks view
  const generateCalendarDays = () => {
    const days = [];
    const firstDay = getFirstDayOfMonth(currentDate);

    // Get the Monday of the week containing the first day of the month
    const startDate = new Date(firstDay);
    const dayOfWeek = startDate.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    startDate.setDate(startDate.getDate() + diff);

    // Generate 14 days (2 weeks)
    for (let i = 0; i < 14; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  return (
    <div className="w-full">
      <div className="w-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <Heading text="Calender" />
            <div className="flex gap-2">
              <button
                onClick={() => navigateMonth(-1)}
                className="w-8 h-8 rounded-lg border-none bg-white flex items-center justify-center cursor-pointer transition-all hover:bg-gray-100"
                aria-label="Previous month"
              >
                <LeftOutlined style={{ fontSize: 14, color: '#666' }} />
              </button>

              <button
                onClick={() => navigateMonth(1)}
                className="w-8 h-8 rounded-lg border-none bg-white flex items-center justify-center cursor-pointer transition-all hover:bg-gray-100"
                aria-label="Next month"
              >
                <RightOutlined style={{ fontSize: 14, color: '#666' }} />
              </button>
            </div>
          </div>

          <Paragraph text="View your weekly fitness report here" />
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3">
          {/* Day headers */}
          {daysOfWeek.map((day, index) => (
            <div key={`header-${index}`} className="text-center pb-2">
              <div className="text-[14px] font-semibold font-josefin-sans text-[#3F3F3F] mb-2">
                {day}
              </div>
            </div>
          ))}

          {/* Calendar days */}
          {calendarDays.map((date, index) => {
            const isCurrentDay = isToday(date);
            const containerClasses = [
              'rounded-[12px]',
              'py-4 px-2',
              'text-center',
              'cursor-pointer',
              'transition-all',
              isCurrentDay
                ? 'bg-[#2d2d44] text-white shadow-[0_4px_12px_rgba(45,45,68,0.3)]'
                : 'bg-white text-[#1a1a1a] hover:bg-gray-100 hover:-translate-y-0.5'
            ].join(' ');

            return (
              <div
                key={index}
                className={containerClasses}
                role="button"
                tabIndex={0}
                // keep the same behavior as previous inline handlers (no special JS needed;
                // Tailwind :hover handles visual feedback)
              >
                <div className="md:text-[20px] font-semibold font-josefin-sans">
                  {date.getDate().toString().padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Month Display */}
        <div className="text-center mt-6 font-josefin-sans text-[#3F3F3F] font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default FitnessCalendar;
