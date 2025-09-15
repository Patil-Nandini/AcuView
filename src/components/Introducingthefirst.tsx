'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Real-Time Loan Application Tracking',
    description: 'Monitor borrower activity across the entire lender network in real time.',
    icon: '/Real-time-loan-application-tracking-Icon.webp',
    bgColor: '#FFFDE9',
  },
  {
    title: 'Instant Alerts Of New Borrower Activity Before Your Final Loan Approval',
    description: 'Get notified immediately when risky borrowing patterns emerge.',
    icon: '/Instant-alerts-of-new-borrower-activity-before-your-final-loan-approval-icon.webp',
    bgColor: '#FFF4F4',
  },
  {
    title: 'Verified Identity, Income, And Banking Details',
    description: 'Cross-check borrower information against multiple sources to detect fraud.',
    icon: '/Verified-identity-income-and-banking-details-icon.webp',
    bgColor: '#EEFFF9',
  },
  {
    title: 'Patented Lender Privacy Keeps Their List Of Customers Safe',
    description: "Lenders are protected and cannot see each other's list of customers.",
    icon: '/Patented-lender-privacy-keeps-their-list-of-customers-safe-icon.webp',
    bgColor: '#F5F5FF',
  },
];

export default function IntroducingTheFirst() {
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden pt-10 px-4 md:px-8 lg:px-12 lg:pb-20">
      {/* Desktop layout */}
      <div className="absolute left-0 top-[60%] -translate-y-1/2 w-[410px] h-[519px] z-0 lg:block hidden">
        <Image
          src="/Introductionbluebg.png"
          alt="Blue Shape"
          width={410}
          height={519}
        />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[510px] h-[619px] z-10 flex items-center justify-center lg:flex hidden">
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src="/Introductionbluebglogo.png"
            alt="Fading Logo"
            width={280}
            height={280}
            priority
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 ml-0 max-w-full lg:ml-[34%] lg:max-w-[60%]">
        <div className="mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Introducing the First and Only Real-Time <span className="lg:block">Loan Intelligence Network</span>
          </h2>
          <p className="text-base md:text-lg lg:text-lg text-gray-600 mb-3">
            This isn't another credit report. It's a live network of lender-shared intelligence that flags <span className="lg:block">high-risk activity before you approve the loan.</span>
          </p>
          <p className="text-sm md:text-base lg:text-md text-gray-800 font-semibold">
            No other platform does this. No one else can.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-x-6 lg:gap-y-8 w-full lg:mb-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-[6px] w-full relative"
            >
              <div
                className="absolute top-0 left-[20px] transform -translate-y-1/2 z-10"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-11 h-11"
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
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full mt-16 lg:hidden">
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
                fadeIn ? 'opacity-100' : 'opacity-0'
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
      </div>
    </section>
  );
}