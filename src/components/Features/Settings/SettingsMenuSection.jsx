"use client"

import Heading from "@/UI/Heading"



export default function SettingsMenuSection({ title, children }) {
  return (
    <div>
      
      <div className="pb-4">
        <Heading text={title}/>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
