"use client"

import Paragraph from "@/UI/Paragraph"
import { ChevronRight } from "lucide-react"
import Link from "node_modules/next/link"



export default function SettingsMenuItem({ label, hasArrow = false, path }) {
  return (
    <Link
      href={path}
      className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 font-medium text-left hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-between group"
    >
      
      <Paragraph text={label}/>
      {hasArrow && <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />}
    </Link>
  )
}
