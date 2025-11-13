import AudioPlayerCard from '@/components/ui/AudioPlayingCard';
import React from 'react';

const FeatureContentGrid = () => {
  const featureItems = [
    { id: 1, isPlaying: true },
    { id: 2, isPlaying: false },
    { id: 3, isPlaying: false },
  ];

  const exploreItems = [
    { id: 1, isPlaying: false },
    { id: 2, isPlaying: false },
    { id: 3, isPlaying: false },
  ];

  const ContentCard = ({ isPlaying }) => (
    <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Affirmations to close your day
        </h3>
        <div className="flex gap-2">
          <span className="bg-[#fef3e6] text-[#8b6914] text-xs font-medium px-3 py-1 rounded-full">
            15 min
          </span>
          <span className="bg-[#f3e8ff] text-[#6b21a8] text-xs font-medium px-3 py-1 rounded-full">
            Evening
          </span>
          <span className="bg-[#d1fae5] text-[#065f46] text-xs font-medium px-3 py-1 rounded-full">
            Relax
          </span>
        </div>
      </div>
      <button
        className={`${
          isPlaying ? 'bg-red-600' : 'bg-[#1a1a3e]'
        } cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0`}
      >
        {isPlaying ? (
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="18" rx="1" fill="white" />
            <rect x="10" width="4" height="18" rx="1" fill="white" />
          </svg>
        ) : (
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-0.5"
          >
            <path d="M14 8L0 16V0L14 8Z" fill="white" />
          </svg>
        )}
      </button>
    </div>
  );

  return (
    <div className="">
        {/* Audio Playing */}
        <div className='pb-6'>
            <AudioPlayerCard />
        </div>
      <div className="">
        <div className="grid xl:grid-cols-2 gap-8 font-josefin-sans">
          {/* Feature Content Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Feature Content</h2>
            </div>
            <div className="space-y-4">
              {featureItems.map((item) => (
                <ContentCard key={item.id} isPlaying={item.isPlaying} />
              ))}
            </div>
          </div>

          {/* Explore More Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Explore More</h2>
              <button className="cursor-pointer text-sm font-semibold text-gray-900 hover:underline">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {exploreItems.map((item) => (
                <ContentCard key={item.id} isPlaying={item.isPlaying} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContentGrid;