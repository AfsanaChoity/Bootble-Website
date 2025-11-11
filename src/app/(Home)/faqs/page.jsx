"use client"

import { useState } from "react"
import { ChevronRight, X } from "lucide-react"
import Heading from "@/UI/Heading"



const faqData = [
  {
    id: "1",
    question: "How do I register for an account?",
    answer:
      "Click the Sign Up button, fill in your name, date of birth, and choose whether you need an invoice. Once registered, you can log in and start exploring courses.",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods.",
  },
  {
    id: "3",
    question: "Will I get a certificate after completing a course?",
    answer: "Yes, you will receive a certificate of completion for each course you finish.",
  },
  {
    id: "4",
    question: "Can I access the courses on mobile devices?",
    answer: "Yes, all our courses are fully accessible on mobile devices and tablets.",
  },
  {
    id: "5",
    question: "How long do I have access to purchased courses?",
    answer: "You have lifetime access to all purchased courses.",
  },
  {
    id: "6",
    question: "Are the courses self-paced or scheduled?",
    answer: "All courses are self-paced, allowing you to learn at your own speed.",
  },
]

export default function FAQPage() {
  const [expanded, setExpanded] = useState("")

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? "" : id)
  }

  return (
    <div className="  ">
        {/* Heading */}
        <div className="pb-4">
            <Heading text="FAQs"/>
        </div>
      <div className="max-w-2xl space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleExpand(item.id)}
            className={`border rounded-lg p-6 cursor-pointer transition-all ${
              expanded === item.id ? "bg-blue-50 border-gray-800" : "bg-white border-gray-300 hover:border-gray-400"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm leading-snug">{item.question}</h3>
                {expanded === item.id && <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.answer}</p>}
              </div>
              <button className="flex-shrink-0 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center">
                {expanded === item.id ? (
                  <X size={18} className="text-gray-700 cursor-pointer" strokeWidth={3} />
                ) : (
                  <ChevronRight size={18} className="text-gray-600 cursor-pointer" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
