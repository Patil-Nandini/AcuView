"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "Real-Time Loan Application Tracking",
    description:
      "Monitor borrower activity across the entire lender network in real time.",
    icon: "/Real-time-loan-application-tracking-Icon.webp",
    bgColor: "#FFFDE9",
  },
  {
    title:
      "Instant Alerts Of New Borrower Activity Before Your Final Loan Approval",
    description:
      "Get notified immediately when risky borrowing patterns emerge.",
    icon: "/Instant-alerts-of-new-borrower-activity-before-your-final-loan-approval-icon.webp",
    bgColor: "#FFF4F4",
  },
  {
    title: "Verified Identity, Income, And Banking Details",
    description:
      "Cross-check borrower information against multiple sources to detect fraud.",
    icon: "/Verified-identity-income-and-banking-details-icon.webp",
    bgColor: "#EEFFF9",
  },
  {
    title: "Patented Lender Privacy Keeps Their List Of Customers Safe",
    description:
      "Lenders are protected and cannot see each other's list of customers.",
    icon: "/Patented-lender-privacy-keeps-their-list-of-customers-safe-icon.webp",
    bgColor: "#F5F5FF",
  },
];

export default function IntroducingTheFirst() {
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-[100%] bg-white overflow-hidden pt-15 lg:pb-20 bg-[url('/Indroducing-Section-bg.png')]">
      <div className="flex flex-col lg:flex-row items-center lg:items-center w-full lg:justify-start justify-center ">
        {/* Left Side (40%) */}
        <div className="w-[100%] lg:w-[50%] xl:w-[40%] flex items-center justify-start h-[100%]  md:h-[60%] lg:h-[100%]">
          <object
            data="/Acuview-real-time-loan-Animation1.svg"
            type="image/svg+xml"
            width={280}
            height={280}
            className="w-[90%] h-[100%] md:w-[80%] md:h-[60%] lg:w-[85%] "
            aria-label="Fading Logo"
          >Fading Logo</object>
        </div>

        {/* Right Side (60%) */}
        <div className="w-full lg:w-[50%] relative z-20 xl:mr-15  flex flex-col justify-end items-center p-[30px] lg:p-[0] lg:items-start xl:items-center ">
          <div className="mb-8 lg:mb-12 w-[100%]">
            <h2 className="text-[25px] md:text-[41px] font-bold text-gray-900 mb-4 leading-tight text-[#000000]">
              Introducing the First and Only Real-Time{" "}
              <span className="lg:block">Loan Intelligence Network</span>
            </h2>
            <p className="text-[18px] text-[#0F1720] text-gray-600 mb-3">
              This isn't another credit report. It's a live network of
              lender-shared intelligence that flags{" "}
              <span className="lg:block">
                high-risk activity before you approve the loan.
              </span>
            </p>
            <p className="text-[18px] text-[#0F1720] font-semibold">
              No other platform does this. No one else can.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-y-12 w-full md:justify-items-start justify-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md  w-[100%] md:w-[95%] xl:w-[85%] lg:w-[90%] p-[6]   h-[100%] relative min-h-[170px]"
              >
                <div className="absolute top-0 left-[20px] transform -translate-y-1/2 z-10">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-13 h-13"
                    width={44}
                    height={44}
                  />
                </div>

                <div
                  className="rounded-2xl px-5 pt-5 pb-4 flex flex-col gap-2 h-full"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-[14px]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="relative w-full mt-16 lg:hidden">
        <div className="relative w-full h-[340px] md:h-[270px] -mx-4 md:-mx-8 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[270px] h-[340px] md:hidden">
            <Image
              src="/Introductionbluebg.png"
              alt="Blue Shape"
              width={270}
              height={340}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[220px] h-[270px] hidden md:block lg:hidden">
            <Image
              src="/Introductionbluebg.png"
              alt="Blue Shape"
              width={220}
              height={270}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[100px] left-[135px] md:bottom-[75px] md:left-[110px] -translate-x-1/2">
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/Introductionbluebglogo.png"
                alt="Fading Logo"
                width={200}
                height={200}
                className="w-[200px] h-[200px] md:w-[180px] md:h-[180px]"
                priority
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
