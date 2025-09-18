"use client";

import Image from "next/image";
import React from "react";

export default function LendingBanner() {
  return (
    <section className="w-full flex justify-center  relative ">
      <section className="flex flex-col lg:flex-row items-center absolute top-[-270px] justify-between bg-[#1272D2] rounded-[27px] shadow-lg p-8 lg:p-2 max-w-6xl w-full gap-8">
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <object
            type="image/svg+xml"
            data="/Acuview-Join.svg"
            className="w-[250px] md:w-[320px] lg:w-[360px] h-auto"
          >
            Acuview-Join
          </object>
        </div>

        <div className="flex flex-col items-start text-white w-full lg:w-1/2">
          <h2 className="text-[23px] font-bold leading-snug">
            Join the Founding Lenders Who Are Transforming Risk Management
          </h2>
          <p className="mt-4 text-sm md:text-base opacity-90 max-w-[500px]">
            Every day you wait is another day of exposure to loan stacking and
            fraud. Start protecting your portfolio today with the world&apos;s
            first real-time lending intelligence network.
          </p>
          <p className="mt-4 font-semibold text-base md:text-lg">
            Watch the Loan Stacking Detection Happen LIVE!
          </p>
          <p className="mt-1 text-sm md:text-base">
            Get Your Custom ROI Analysis
          </p>

          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-white text-[#1670EA] px-5 py-4 rounded-full font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition">
            <Image
              src="/BlueRocket.svg"
              alt="Rocket Icon"
              width={20}
              height={20}
            />
            15-Minute Demo!
          </button>
        </div>
      </section>
    </section>
  );
}
