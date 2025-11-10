"use client"

import CustomOutlineBtn from "@/UI/CustomOutlineBtn"
import Heading from "@/UI/Heading"

export default function MyAccountPage() {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        {/* Header with Edit Account Button */}
        <div className="flex justify-between items-start mb-4">
          
          <Heading text="Login Details:"/>
         
          <CustomOutlineBtn text="Edit Account" path="/edit-account"/>
        </div>

        {/* Login Details Section */}
        <div className="space-y-6 mb-16">
          {/* Full Name */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Full Name</p>
            <p className="text-base font-semibold text-gray-900">Leslie Alexander</p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Email</p>
            <p className="text-base font-semibold text-gray-900">eslie@gmail.com</p>
          </div>

          {/* Location */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Location</p>
            <p className="text-base font-semibold text-gray-900">Dhaka</p>
          </div>

          {/* Date of Birth */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
            <p className="text-base font-semibold text-gray-900">04/08/2002</p>
          </div>

          {/* Age */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Age</p>
            <p className="text-base font-semibold text-gray-900">24</p>
          </div>

          {/* Height */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Height</p>
            <p className="text-base font-semibold text-gray-900">6 feet</p>
          </div>

          {/* Weight */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Weight</p>
            <p className="text-base font-semibold text-gray-900">73 kg</p>
          </div>
        </div>

        {/* Password Section */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-start ">
          
           
            <Heading text="Password:"/>
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Password</p>
              <p className="text-base font-semibold text-gray-900 tracking-widest">••••••••</p>
            </div>
          
          <CustomOutlineBtn text="Change Password" path="/change-password"/>
        </div>
      </div>
    </div>
  )
}
