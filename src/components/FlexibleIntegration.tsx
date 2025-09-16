"use client"
import Image from "next/image";

export default function FlexibleIntegrationOptions() {
  return (
    <section
      className="w-[100%] flex items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/FlexibleIntegrationOptionsBg.webp')",
      }}
    >
      <div className=" w-[95%] flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-24 gap-10">
        {/* Left Section */}
      <div className="basis-[30%] flex flex-col items-start justify-center">
          <h2 className="text-[40px] font-bold text-[#0F1720] mb-6">
            Flexible Integration
            <br />
            Options
          </h2>
          <p className="text-[18px] text-[#0F1720]  mb-6">
            Choose the access method that works best for you!
          </p>
          <button
            type="button"
            className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[240px] px-7  ml-[-7px]"
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

        {/* Right Section (Cards) */}
      <div className="basis-[75%] flex flex-col gap-8">
          {/* Card 1 */}
          <div
            className="relative rounded-[60px] p-8 md:p-10 bg-no-repeat bg-cover w-[100%]"
            style={{ backgroundImage: "url('/FlexibleCardsBg.webp')" }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
             <Image src="/APIIntegration.svg" alt="API Integration Icon" width={32} height={32} />
              <span className="text-xl font-bold text-gray-900 flex justify-center items-center">
                API Integration
              </span>
            </div>
            <p className="text-[#504E4E] mb-6">
              Seamlessly integrate AcuView’s real-time intelligence directly
              into your existing LMS/LOS software with our robust API.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FeatureCard text="RESTful API with comprehensive documentation" />
              <FeatureCard text="Real-time responses" />
              <FeatureCard text="Easy integration with popular LMS platforms" />
              <FeatureCard text="Webhook support for instant notifications" />
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="relative rounded-[60px] p-8 md:p-10 bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/FlexibleCardsBg.webp')" }}
          >
            <div className="flex items-center  justify-center gap-3 mb-2">
              <Image src="/WebPortal.svg" alt="API Integration Icon" width={32} height={32} />
              <span className="text-xl font-bold text-gray-900">
                Web Portal
              </span>
            </div>
            <p className="text-gray-700 mb-6">
              Access AcuView’s intelligence through our intuitive web portal for
              manual checks and detailed analysis.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
              <FeatureCard text="User-friendly dashboard with instant insights" />
              <FeatureCard text="Manual borrower verification tools" />
              <FeatureCard text="Detailed reporting and analytics" />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="
      flex flex-col items-center justify-center 
      bg-white rounded-[30px] shadow-[0px_10px_30px_0px_#D1DCE266] py-6 px-4 min-h-[96px] w-[168px]
      transition duration-300 ease-in-out
      hover:scale-120 
    ">
      <span className="mb-2">
        <Image
          src="/CircleGreen.svg"
          alt=""
          width={32}
          height={32}
        />
      </span>
      <span className="text-center text-base text-gray-800 font-medium">
        {text}
      </span>
    </div>
  );
}
