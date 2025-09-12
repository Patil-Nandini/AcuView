"use client";
import Image from "next/image";
import React from "react";

type Card = {
  title: string;
  desc: string;
  icon: string;
  bg: string;
  gradient: string;
  tabletGradient: string;
};

const cards: Card[] = [
  {
    title: "67% Reduction",
    desc: "In loan stacking",
    icon: "/70-Reduction-Growing.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #FFE8E8 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #FFE8E8 70%)",
  },
  {
    title: "Industry-Wide Visibility",
    desc: "See your customer borrowing pattern with other Lenders",
    icon: "/Industry-Wide-Visibility.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #FEF4DC 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #FEF4DC 70%)",
  },
  {
    title: "99% Faster",
    desc: "Customer verification",
    icon: "/99-Faster-.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #E5E5FF 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #E5E5FF 70%)",
  },
  {
    title: "Privacy-Focused Design",
    desc: "You stay anonymous, and your portfolio stays protected",
    icon: "/Privacy-focused-Design.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #CBEDF9 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #CBEDF9 70%)",
  },
  {
    title: "1 < second Processing",
    desc: "Lightning-fast and unbreakable",
    icon: "/3ms-Processing.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #CDF9EE 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #CDF9EE 70%)",
  },
  {
    title: "Lender Network Effect",
    desc: "Grow stronger every day with each new lender",
    icon: "/Lender-Network-Effect.webp",
    bg: "/RectangleBg.webp",
    gradient: "linear-gradient(to bottom, white 30%, #FFE6E6 70%)",
    tabletGradient: "linear-gradient(to bottom, white 30%, #FFE6E6 70%)",
  },
];

const WhoisAcuViewBuiltFor: React.FC = () => {
  return (
    <section className="w-[100%] font-sarabun bg-[url('/Indroducing-Section-bg.png')] bg-no-repeat bg-cover pt-8 pb-28 flex flex-col justify-center items-center ">
      <div className="max-w-8xl mx-auto px-6 flex justify-center">
        <div className="text-center flex flex-col justify-center max-w-5xl">
          <h2 className="text-[34px] sm:text-[36px] font-extrabold text-[#07102A] leading-tight">
            Who is AcuView Built for?
          </h2>
          <p className="text-[#0F1720] text-[18px] text-center pt-[20px] mx-auto w-[60%] leading-relaxed">
            <span className="text-[18px] font-semibold text-[#0F1720] mr-[5px]">
              AcuView
            </span>
            is designed for lenders who can’t afford to guess, such as those
            operating in fast-moving, high-risk, or high-volume lending
            environments where every decision impacts profitability.
          </p>
          <div className="flex items-center justify-center gap-2 bg-[#085AAC] text-white px-5 py-3 rounded-[40px] w-fit mx-auto mt-6">
            {" "}
            <img
              src="/affiliate-marketing.svg"
              alt="Affiliate Marketing"
              className="w-5 h-5"
            />{" "}
            <p className="text-[16px] font-semibold">
              {" "}
              Powered by the Lender Network Effect!{" "}
            </p>{" "}
          </div>
        </div>
      </div>
      <section className="relative w-[100%] font-sarabun pb-32  flex flex-col justify-center items-center">
        <div className="relative w-[100%]">
          <object
            type="image/svg+xml"
            data="/Who-is-acuview-built-for.svg"
            className="w-[100%] h-auto max-w-[1920px]"
          >
            Your browser does not support SVG
          </object>

          {/* Card 1 */}
          <div className="absolute top-[375px] left-[135px] w-[250px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4 w-[250px] h-[100px]">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                Short-Term & Payday Lenders
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Protect against loan stacking across nearby stores.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-[375px] right-[126px] w-[250px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4 w-[250px] h-[110px]">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                Online Lenders
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Detect borrowers applying to multiple platforms simultaneously.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-[618px] left-[415px] w-[260px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4 w-[250px] h-[150px]">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                BNPL (Buy Now, Pay Later) Platforms
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Validate whether customers are stacking multiple BNPL purchases
                in real time.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="absolute top-[618px] left-[786px] w-[250px] text-center">
            <div className="bg-white rounded-xl shadow-md p-4 w-[260px] h-[150px]">
              <h3 className="font-bold text-[#0F1720] text-[16px]">
                Installment & Personal Loan Providers
              </h3>
              <p className="text-[14px] text-gray-600 mt-1">
                Verify ability-to-repay with real-time borrower data. Identify
                hidden liabilities before onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </section>
  );
};

export default WhoisAcuViewBuiltFor;
