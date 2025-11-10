"use client"

import SettingsMenuItem from "@/components/Features/Settings/SettingsMenuItem"
import SettingsMenuSection from "@/components/Features/Settings/SettingsMenuSection"
import Heading from "@/UI/Heading"
import { Edit2 } from "lucide-react"
import user from '@/assets/images/user.png'
import Image from "node_modules/next/image"
import Paragraph from "@/UI/Paragraph"


export default function SettingsPage() {
  return (
    <div className="  ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
       <div className="pb-6">
         <Heading text="Settings"/>
       </div>

        {/* Profile Section */}
        <div className="mb-16">
          <div className="flex flex-col  gap-3">
            <div className="relative w-24 h-24">
              {/* Profile Avatar */}
              <div className="w-24 h-24 rounded-full bg-orange-200 overflow-hidden flex items-center justify-center">
                <Image src={user} alt="user"/>
              </div>
              {/* Edit Icon */}
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg border-2 border-white">
                <Edit2 size={16} />
              </button>
            </div>
           <Paragraph text="Profile Photo"/>
          </div>
        </div>

        {/* Settings Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Settings Section */}
          <SettingsMenuSection title="Account Settings">
            <SettingsMenuItem label="My Account" path="/my-account"/>
            <SettingsMenuItem label="Subscription" hasArrow path="/subscription"/>
            <SettingsMenuItem label="Community" path="/community"/>
            <SettingsMenuItem label="Log Out" path="/sign-in"/>
          </SettingsMenuSection>

          {/* Support Section */}
          <SettingsMenuSection title="Support">
            <SettingsMenuItem label="Terms & Conditions" path="/terms-conditions"/>
            <SettingsMenuItem label="Privacy Policy" path="privacy-policy"/>
            <SettingsMenuItem label="FAQs" path="/faqs" />
            <SettingsMenuItem label="Contact Support" path="contact-support"/>
          </SettingsMenuSection>
        </div>
      </div>
    </div>
  )
}
