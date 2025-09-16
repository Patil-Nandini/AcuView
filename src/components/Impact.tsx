"use client";

import Image from "next/image";

export default function StatsSection() {
  return (
    <div className="w-full flex justify-end absolute z-2 top-[1750px]">
      {" "}
      <div className="w-[80%] bg-[#015CB8] rounded-l-[260px] flex flex-col md:flex-row justify-end items-center text-white max-w-7xl overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-6 border-r-[2px] border-r-[#FFFFFF1A] h-[200px]">
          <Image
            src="/Active Lenders.svg"
            alt="Active Lenders"
            width={50}
            height={50}
          />
          <h2 className="text-[40px] font-extrabold mt-4">127+</h2>
          <p className="font-semibold mt-2 text-[16px]">Active Lenders</p>
          <p className="text-[14px] mt-1">Growing Daily!</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-6 border-r-[2px] border-r-[#FFFFFF1A] h-[200px]">
          <Image
            src="/Data Points.svg"
            alt="Data Points"
            width={50}
            height={50}
          />
          <h2 className="text-[40px] font-extrabold mt-4">1M+</h2>
          <p className="font-semibold mt-2 text-[16px]">Data Points</p>
          <p className="text-[14px] mt-1">Expanding Fast!</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-6 border-r-[2px] border-r-[#FFFFFF1A] h-[200px]">
          <Image src="/Real-Time.svg" alt="Real Time" width={50} height={50} />
          <h2 className="text-[40px] font-extrabold mt-4">24/7</h2>
          <p className="font-semibold mt-2 text-[16px]">Real-Time</p>
          <p className="text-[14px] mt-1">Never Stops!</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-1 bg-white text-[#0033A1] rounded-l-[260px] ml-15">
          <Image src="/Impact.svg" alt="Your Impact" width={50} height={50} />
          <h2 className="text-xl font-extrabold mt-4 bg-gradient-to-r from-[#635AD9] to-[#219BE4]  bg-clip-text text-transparent">
            YOUR IMPACT
          </h2>
          <p className="text-[14px] mt-2 text-[#504E4E] max-w-[220px]">
            Every signup makes the Lender network{" "}
            <span className="font-semibold">7x</span> more valuable for{" "}
            <span className="font-semibold">EVERYONE</span>!
          </p>
        </div>
      </div>
    </div>
  );
}
