"use client";

import React from "react";
import Heading from '@/UI/Heading.jsx'
import Paragraph from "@/UI/Paragraph.jsx";

const notifications = [
  {
    text: "A new user has completed the vetting process and registered on Local coupon.",
    time: "Just Now",
  },
  {
    text: "Feedback forms for the last episode have been completed by participants.",
    time: "5 min ago",
  },
  {
    text: "Reminder: The next podcast episode is scheduled for tomorrow at 5 PM.",
    time: "30 min ago",
  },
  {
    text: "Podcast episode has been successfully completed.",
    time: "6 hours ago",
  },
  {
    text: "Reminder: Prepare questions for the primary user in the next podcast episode.",
    time: "8 hours ago",
  },
];

export default function NotificationsPanel() {
  return (
    <div className="  ">
      <div className="max-w-6xl mx-auto px-6">
        <Heading text="Notifications"/>

        <p className="mt-4 font-gabarito text-gray-700 font-medium">Total <span className="font-bold">128</span> Notifications</p>

        <div className="mt-6 bg-transparent">
          {/* white card with rounded corners */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* list rows */}
            <div className="divide-y divide-gray-100">
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-5 ${i % 2 === 1 ? "bg-gray-50" : ""}`}
                >
                  <div className="">
                    
                    <Paragraph text={n.text}/>
                  </div>
                  <div className="text-sm text-gray-500 ml-6 whitespace-nowrap">
                    <Paragraph text={n.time}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
