// ShareRows.jsx
"use client";
import React from "react";

import fb from '@/assets/icons/FB.svg'
import insta from '@/assets/icons/Insta.svg'
import linkedIn from '@/assets/icons/LinkedIn.svg'
import x from '@/assets/icons/Twitter.svg'
import Image from "node_modules/next/image";
import Paragraph from "@/UI/Paragraph";
import share from '@/assets/icons/Share.svg'

const items = [
  { id: "fb", label: "Share your progress report on", name: "Facebook", bg: "#1877F2", logo: fb },
  { id: "ig", label: "Share your progress report on", name: "Instagram", bg: "linear-gradient(45deg,#f58529,#dd2a7b,#8134af)", logo: insta },
  { id: "li", label: "Share your progress report on", name: "LinkedIn", logo: linkedIn },
  { id: "x", label: "Share your progress report on", name: "X", logo: x },
];

export default function SocialShareCard() {
  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full ">
        <div className="space-y-4">
          {items.map(i => (
            <button
              key={i.id}
              className="cursor-pointer w-full flex items-center gap-4 justify-between bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
              aria-label={`${i.name} share`}
              onClick={() => alert(`Share to ${i.name}`)}
            >
              <div className="flex items-center gap-4">
               <Paragraph text={i.label}/>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  
                >
                  <Image src={i.logo} alt="icon"/>
                </div>
              </div>

              <div>
                <Image src={share} alt="icon"/>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
