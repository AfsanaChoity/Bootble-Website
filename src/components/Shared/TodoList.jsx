'use client'
import Image from 'node_modules/next/image';
import React, { useState } from 'react';
import food from '@/assets/images/food.svg';
import workOut from '@/assets/images/workout.svg';

const TodoList = () => {
  const [activities, setActivities] = useState([
    { 
      id: 1, 
      time: '10:00', 
      title: 'Morning Workout', 
      color: 'green',
      image: workOut
    },
    { 
      id: 2, 
      time: '04:00', 
      title: 'Calories Count', 
      color: 'purple',
      image: food
    }
  ]);

  const timeSlots = [
    '09:00', '10:00', '12:00', '02:00', '04:00', '05:00', '06:00'
  ];

  const getActivityForTime = (time) => {
    return activities.find(activity => activity.time === time);
  };

  return (
    <div className="">
      <div className="">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {/* Time slots */}
          <div className="space-y-4">
            {timeSlots.map((time, index) => {
              const activity = getActivityForTime(time);
              
              return (
                <div key={index} className="flex items-start gap-6">
                  {/* Time label */}
                  <div className="w-16 pt-2">
                    <span className="text-sm font-medium text-gray-600">
                      {time}
                    </span>
                  </div>

                  {/* Activity or empty slot */}
                  <div className="flex-1 min-h-[48px] relative">
                    {activity ? (
                      <div className="flex items-center gap-4">
                        <div
                          className={`
                            inline-flex items-center gap-3 px-6 py-3 rounded-xl cursor-pointer
                            transition-all duration-200 hover:shadow-md hover:scale-105
                            ${activity.color === 'green' 
                              ? 'bg-green-100 border border-green-300 text-green-700' 
                              : 'bg-purple-100 border border-purple-300 text-purple-700'
                            }
                          `}
                        >
                          <span className="text-sm font-semibold">
                            {activity.title}
                          </span>
                        </div>
                        
                        {/* Activity Image */}
                        <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                          
                    
                          <Image src={activity.image} 
                            alt={activity.title}
                            className="w-full h-full object-contain"
                            />
                        </div>
                      </div>
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;