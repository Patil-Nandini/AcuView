"use client";
import Image from "next/image";

export default function HowAcuViewWorks() {
  return (
    <section className="relative px-4 py-16 overflow-hidden w-[100%]">
      <div className="absolute top-10 left-[20px] z-3">
        <Image
          src="/HowWorksIconLeft.png"
          alt="Flower Icon"
          width={64}
          height={64}
          className="w-[100] h-[100]"
          priority
        />
      </div>

      <div className="w-[90%] mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          How AcuView Works
        </h2>
        <p className="text-center text-gray-600 text-lg mb-6">
          Four simple steps to smarter lending decisions
        </p>
        {/* Demo Button */}
        <div className="flex justify-center mb-12">
          <button
            type="button"
            className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7 mt-5 ml-[-7px]"
            style={{
              backgroundImage: "url('/watchNowButtonBg.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              paddingBottom: "25px",
            }}
            aria-label="Start Your Free 90-Day Trial"
            onClick={() =>
              (window.location.href = "https://acufi.com/lets-connect/")
            }
          >
            <Image
              src="/RocketIcon.png"
              alt="Rocket Icon"
              width={20}
              height={20}
            />
            <span className="ml-2 whitespace-nowrap"> Get Your Demo!</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-15">
          <div className="relative bg-white rounded-xl shadow-lg px-6 py-8 w-[277px] h-[270px]  mb-6 md:mb-0 rotate-[-7deg]">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 ">
              <Image
                src="/IconSubmitDetails.png"
                alt="Submit Details"
                width={48}
                height={48}
                className="w-[100]"
              />
            </div>
            <h3 className="text-lg font-bold text-center mb-2 mt-3 border-b border-[#E9E9E9] pb-5">
              Submit Details
            </h3>

            <p className="text-center text-gray-600 text-base">
              Enter borrower details via portal or API
            </p>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#FEB70133] border-2 border-[#F8FCFD] rounded-b-xl"></div>
          </div>
          {/* Step 2 */}
          <div className="relative bg-white rounded-xl shadow-lg px-6 py-8 w-[286px] h-[180px]  mb-6 md:mb-0 rotate-[-3deg]">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <Image
                src="/Scan-Network.webp"
                alt="Scan Network"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-bold text-center mb-2 mt-3 border-b border-[#E9E9E9] pb-5">
              Scan Network
            </h3>
            <p className="text-center text-gray-600 text-base">
              Check for matches, stacking, or red flags
            </p>
          </div>
          {/* Step 3 */}
          <div className="relative bg-white rounded-xl shadow-lg px-6 py-8 w-[286px] h-[180px] mb-6 md:mb-0 rotate-[2deg]">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <Image
                src="/Get-Results.webp"
                alt="Get Results"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-bold text-center mb-2 mt-3 border-b border-[#E9E9E9] pb-5">
              Get Results
            </h3>
            <p className="text-center text-gray-600 text-base">
              Receive insights in milliseconds
            </p>
          </div>
          {/* Step 4 */}
          <div className="relative bg-white rounded-xl shadow-lg px-6 py-8 w-[277px] h-[270px] mb-6 md:mb-0 rotate-[7deg]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Image
                src="/Make-Decisions.webp"
                alt="Make Decisions"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-bold text-center mb-2 mt-3 border-b border-[#E9E9E9] pb-5">
              Make Decisions
            </h3>
            <p className="text-center text-gray-600 text-base">
              Approve good borrowers and avoid bad ones
            </p>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[#3E7DC633] border-2 border-[#F8FCFD] rounded-b-xl"></div>

          </div>
        </div>
        {/* Decorative curve (dotted line) */}
        <div className="absolute left-[160px] right-0 mx-auto top-[520px] z-0 pointer-events-none">
          <object
            type="image/svg+xml"
            data="/Line2.svg"
            className="w-[90%] h-full"
            aria-label="The Hidden Loans Animation"
          >
            How AcuView Works Line
          </object>
        </div>
        <div className="flex justify-center mt-30">
          <div className="bg-white rounded-[20px] border border-[#DBDFE2] shadow-[0px_3px_30px_10px_#D1DCE233] px-8 py-5 text-center text-lg text-[#0F1720] font-semibold">
            All Without Ever Sharing Your Customers' List.
            <br />
            Your Data Stays Secure. Customer Behavior Becomes Visible.
          </div>
        </div>
      </div>
    </section>
  );
}
