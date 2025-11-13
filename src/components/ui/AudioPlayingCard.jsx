'use client'

import React, { useState } from 'react';

const AudioPlayerCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="">
      <div className="w-full xl:max-w-[49%] font-josefin-sans">
        <div className="relative bg-[#0f172a] rounded-3xl overflow-hidden shadow-xl">
          {/* Background Pattern/Image */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 20C100 20 120 40 140 60C160 80 180 100 180 120C180 140 160 160 140 180C120 200 100 180 100 180" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
                <path d="M80 40C80 40 100 60 120 80C140 100 160 120 160 140C160 160 140 180 120 200" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
                <circle cx="150" cy="60" r="3" fill="rgba(255,255,255,0.2)"/>
                <circle cx="170" cy="80" r="2" fill="rgba(255,255,255,0.15)"/>
                <circle cx="160" cy="100" r="4" fill="rgba(255,255,255,0.1)"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            <h2 className="text-white text-xl font-semibold mb-2 leading-tight">
              Unwind Your Mind, Recharge<br />Your Soul.
            </h2>
            
            <div className="text-white text-sm font-medium mb-6">
              00:00
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              >
                {isPlaying ? (
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="4" height="14" rx="1" fill="#0f172a" />
                    <rect x="8" width="4" height="14" rx="1" fill="#0f172a" />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-0.5"
                  >
                    <path d="M12 7L0 14V0L12 7Z" fill="#0f172a" />
                  </svg>
                )}
              </button>

              {/* Pause Button */}
              <button className="cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="4" height="14" rx="1" fill="#0f172a" />
                  <rect x="8" width="4" height="14" rx="1" fill="#0f172a" />
                </svg>
              </button>

              {/* Stop Button */}
              <button className="cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="10" height="10" rx="1" fill="#0f172a" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerCard;