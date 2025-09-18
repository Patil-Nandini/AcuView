"use client";

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white px-4 sm:px-8 lg:px-12 py-12 lg:py-20 font-sarabun mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-black text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold mb-4">
            <span className="flex gap-1">
              {" "}
              <Image
                src="/AwardIcon.svg"
                alt="Rocket Icon"
                width={20}
                height={20}
              />
              WORLD’S FIRST PATENTED TECHNOLOGY
            </span>
          </div>

          <h1 className="text-[27px] sm:text-[40px] font-black leading-tight text-[#000000] uppercase">
            <span>See What Some Borrowers</span>
            <span
              className="inline-block py-[20px] px-[32px] sm:px-[47px] sm:py-[20px] rounded-[60px] text-[35px] md:text-[35px] font-bold "
              style={{
                backgroundImage: "url('dont.png')",
                color: "#FFFFFF",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // padding: "20px 47px",
                marginLeft: "-7px",
              }}
            >
              ACUFI
            </span>
            Want You To See!
          </h1>
          <div
            className="relative bg-cover bg-no-repeat bg-center rounded-2xl h-[414px] w-[609px] mt-5"
            style={{ backgroundImage: "url('/LeftsideContentBg.png')" }}
          >
            <div className="absolute inset-0 flex">
              <div className="flex flex-col justify-between h-full pl-8 pt-8 pb-8 w-[45%]">
                <div>
                  <h2 className="text-[22px] font-bold text-[#333]">
                    Real-Time Loan Intelligence
                  </h2>
                  <p className="text-[16px] text-[#333] mt-2 font-normal">
                    Built to protect every dollar you lend
                  </p>
                </div>
                <div>
                  <Image
                    src="/BlueImage.png"
                    alt="Loan Intelligence"
                    width={120}
                    height={120}
                    className="w-[200px] rounded-xl"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="relative flex flex-col justify-between h-full w-[55%] pr-8 py-8">
                <div className="absolute top-0 right-0 w-[100%] h-[48%] rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-[30px] px-8 py-7 flex flex-col gap-1">
                  <div className="flex justify-end items-center w-[100%]">
                    <object
                      type="image/svg+xml"
                      data="/bannerright.svg"
                      className="h-[52px]"
                      aria-label="AcuView Icon"
                    >
                      Acuview
                    </object>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-bold text-[18px]">
                      AcuView
                    </span>
                  </div>
                  <p className="text-white text-[17px]">
                    It is the only technology in the world that shows you in
                    real time customer data
                  </p>
                </div>
                <div className="absolute bottom-0 right-0  h-[40%] rounded-br-2xl rounded-tl-none rounded-bl-none px-8 py-7 flex items-center justify-start">
                  <p className="text-white text-[17px]">
                    It alerts you when your borrower is simultaneously applying
                    for loans with other stores or online lenders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start gap-6 w-[700px]">
          <div className="relative w-full h-[280px] sm:h-[360px] lg:w-[600px] lg:h-[423px] rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Blue_Waves-New.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Bottom cards */}
          <div className="flex gap-4 w-full bg-transparent">
            {/* Card 1 */}
            <div
              className="group relative bg-transparent z-10 w-[302px] h-[200px] flex flex-col justify-start items-center text-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 rounded-[20px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: "url('/primary.png')" }}
              onClick={() => {
                window.location.href = "https://acufi.com/lets-connect/";
              }}
            >
              <div className="flex justify-end w-full mr-4">
                <Image
                  src="https://acufi.com/images/Arrow1Icon.svg"
                  alt="Arrow Icon"
                  width={35}
                  height={35}
                  className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45"
                />
              </div>
              <p className="text-[18px] sm:text-[18px] text-center mb-7 pt-5">
                Join the lender network
                <br /> Free 30-Day Trial
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="group relative z-10 w-[300px] h-[180px] flex flex-col justify-center items-center text-[#04254F] p-4 transition-transform duration-300 ease-in-out hover:scale-105  rounded-[20px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: "url('/WhiteBg.png')" }}
              onClick={() => {
                window.location.href = "https://acufi.com/lets-connect/";
              }}
            >
              <div className="flex justify-end w-full mr-4">
                <Image
                  src="BlueArrow.svg"
                  alt="Arrow Icon"
                  width={35}
                  height={35}
                  className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45"
                />
              </div>
              <p className="text-[18px] sm:text-[18px] text-center mb-7 pt-5">
                See AcuView In Action <br />
                15-Minutes Demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
