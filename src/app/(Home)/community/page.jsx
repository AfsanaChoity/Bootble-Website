'use client'
import Image from "next/image";
import AI from '@/assets/images/AI.svg'
import Heading from "@/UI/Heading";
import Paragraph from "@/UI/Paragraph";
import UserDailyReport from "@/components/Shared/UserDailyReport";
import CaloryCard from "@/components/Shared/CaloryCard";
import SocialShareCard from "@/components/Shared/SocialShareCard";

export default function CommunityPage() {
  return (
   

    <div>
      {/* calory card */}
      {/* <div className="pb-4 2xl:w-[60%]">
          <CaloryCard />
      </div> */}


      <div className="grid 2xl:grid-cols-5 gap-4">
     <div className="2xl:col-span-3 space-y-4">
        <CaloryCard />
       <UserDailyReport />
     </div>

      {/* 2nd col */}
     <div className="2xl:col-span-2 ">
      <SocialShareCard />
     </div>
    </div>
    </div>
  );
}
