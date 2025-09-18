"use client";

import Image from "next/image";

export default function StatsSection() {
  return (
    <div className="w-full flex justify-end absolute z-2 top-[4850px] min-[375px]:top-[4770px] min-[425px]:top-[4700px] min-[600px]:top-[4650px] md:top-[3650px] lg:top-[2580px]">
      <div className="w-[100%] min-[600px]:w-[90%] min-[1100px]:w-[80%] bg-[#015CB8] rounded-l-0 min-[600px]:rounded-l-[60px] min-[1100px]:rounded-l-[260px] md:rounded-l-[260px] flex flex-col min-[600px]:flex-row md:flex-row justify-end items-center text-white max-w-7xl overflow-hidden">
        {/* Mobile*/}
        <div className="flex flex-row min-[600px]:hidden w-full">
          <div className="flex-1 flex flex-col items-center justify-center text-center py-3 px-2">
            <Image src="/Active Lenders.svg" alt="Active Lenders" width={25} height={25} />
            <h2 className="text-[20px] font-extrabold mt-1">127+</h2>
            <p className="font-semibold text-[11px]">Active Lenders</p>
            <p className="text-[9px] mt-0.5">Growing Daily!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-3 px-2">
            <Image src="/Data Points.svg" alt="Data Points" width={25} height={25} />
            <h2 className="text-[20px] font-extrabold mt-1">1M+</h2>
            <p className="font-semibold text-[11px]">Data Points</p>
            <p className="text-[9px] mt-0.5">Expanding Fast!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-3 px-2">
            <Image src="/Real-Time.svg" alt="Real Time" width={25} height={25} />
            <h2 className="text-[20px] font-extrabold mt-1">24/7</h2>
            <p className="font-semibold text-[11px]">Real-Time</p>
            <p className="text-[9px] mt-0.5">Never Stops!</p>
          </div>
        </div>
        
        {/* Tablet/Desktop */}
        <div className="hidden min-[600px]:flex flex-row md:flex-row w-full">
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 border-r-[2px] border-r-[#FFFFFF1A] h-[170px] min-[1100px]:h-[200px]">
            <Image src="/Active Lenders.svg" alt="Active Lenders" width={50} height={50} />
            <h2 className="text-[40px] font-extrabold mt-2">127+</h2>
            <p className="font-semibold mt-1 text-[16px]">Active Lenders</p>
            <p className="text-[14px] mt-0.5">Growing Daily!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 border-r-[2px] border-r-[#FFFFFF1A] h-[170px] min-[1100px]:h-[200px]">
            <Image src="/Data Points.svg" alt="Data Points" width={50} height={50} />
            <h2 className="text-[40px] font-extrabold mt-2">1M+</h2>
            <p className="font-semibold mt-1 text-[16px]">Data Points</p>
            <p className="text-[14px] mt-0.5">Expanding Fast!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 border-r-[2px] border-r-[#FFFFFF1A] h-[170px] min-[1100px]:h-[200px]">
            <Image src="/Real-Time.svg" alt="Real Time" width={50} height={50} />
            <h2 className="text-[40px] font-extrabold mt-2">24/7</h2>
            <p className="font-semibold mt-1 text-[16px]">Real-Time</p>
            <p className="text-[14px] mt-0.5">Never Stops!</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-1 bg-white text-[#0033A1] rounded-l-[60px] min-[1100px]:rounded-l-[260px] ml-15">
            <Image src="/Impact.svg" alt="Your Impact" width={50} height={50} />
            <h2 className="text-xl font-extrabold mt-2 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent">
              YOUR IMPACT
            </h2>
            <p className="text-[14px] mt-1 text-[#504E4E] max-w-[220px]">
              Every signup makes the Lender network{" "}
              <span className="font-semibold">10x</span> more valuable for{" "}
              <span className="font-semibold">EVERYONE</span>!
            </p>
          </div>
        </div>
        
        {/* Mobile: YOUR IMPACT section */}
        <div className="flex min-[600px]:hidden w-[75%] bg-white rounded-l-[60px] mt-1 self-end">
          <div className="flex flex-row items-center justify-start py-4 px-5 w-full">
            <Image src="/Impact.svg" alt="Your Impact" width={30} height={30} className="mr-3" />
            <div className="flex flex-col">
              <h2 className="text-base font-extrabold bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent">
                YOUR IMPACT
              </h2>
              <p className="text-[11px] mt-1 text-[#504E4E]">
                Every sign up makes the Lender network{" "}
                <span className="font-semibold">10x</span> more valuable for{" "}
                <span className="font-semibold">EVERYONE</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}