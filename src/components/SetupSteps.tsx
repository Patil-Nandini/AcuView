// "use client";

// import Image from "next/image";

// export default function SetupSteps() {
//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full h-[20%]  lg:py-0 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/BgThreeStepProcess.webp')" }}
//     >
//       <div className="relative flex w-[58%] max-w-full h-full lg:h-full justify-center items-center flex-col lg:flex-row">
//         {/* Desktop connectors */}
//         <Image
//           src="/SetUpimageOne.png"
//           alt="Connector 1"
//           width={300}
//           height={100}
//           className="absolute top-[28%] left-[30%] hidden lg:block"
//         />
//         <Image
//           src="/SetUpimageTwo.png"
//           alt="Connector 2"
//           width={300}
//           height={100}
//           className="absolute top-[48%] left-[43%] h-[44%] hidden lg:block"
//         />

//         {/* Tablet & Mobile connectors */}
//         <Image
//           src="/TabViewPipeOne.png"
//           alt="Connector for Step 1"
//           width={370}
//           height={370}
//           className="absolute z-[1] block lg:hidden top-[12%] sm:top-[16%] sm:left-[66%] left-[10%] w-[90%] sm:w-[300px]"
//         />
//         <Image
//           src="/TabViewPipeTwo.png"
//           alt="Connector for Step 2"
//           width={370}
//           height={370}
//           className="absolute z-[1] block lg:hidden top-[50%] sm:top-[51%] sm:left-[-27%] left-[-7%] w-[90%] sm:w-[300px]"
//         />

//         {/* Steps Grid */}
//         <div className="relative z-[3] inline-grid lg:gap-[18%] sm:flex sm:flex-col sm:items-center sm:gap-[90px] gap-[50px]">
//           {/* Step 1 */}
//           <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center top-[25px] left-[-282px]">
//             {/* Icons */}
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-14%] left-[87%] sm:left-[-11%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 1 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-11%] left-[-13%] sm:left-[85%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 2 time NOT adjusted.svg"
//               ></object>
//             </div>

//             <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] bg-gradient-to-r from-[#2D6CED] to-[#2FB0D2] text-transparent bg-clip-text">
//               Quick Setup
//             </h3>
//             <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
//               <li className="mb-[18px]">
//                 1. Seamlessly integrates with existing LMS software
//               </li>
//               <li className="mb-[18px]">2. Minimal IT requirements</li>
//               <li>3. Full training & support provided for your team</li>
//             </ol>
//           </div>

//           {/* Step 2 */}
//           <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center top-[-66px] left-[150px]">
//             {/* Icons */}
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-15%] left-[-13%] sm:left-[-12%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 3 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-11%] right-[-14%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 4 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 left-[-24%] bottom-[-30%] sm:left-[-60%] sm:bottom-[-26%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 5 time NOT adjusted.svg"
//               ></object>
//             </div>

//             <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] text-[#0094ff]">
//               Immediate Results
//             </h3>
//             <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
//               <li className="mb-[18px]">1. See loan attempts in real time</li>
//               <li className="mb-[18px]">2. Start protecting your portfolio</li>
//               <li>3. Gain actionable borrower insights from day one</li>
//             </ol>
//           </div>

//           {/* Step 3 */}
//           <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center top-[205px] left-[-105px]">
//             {/* Icons */}
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-14%] left-[-12%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 6 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-14%] right-[-12%]">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 7 time NOT adjusted.svg"
//               ></object>
//             </div>

//             <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] text-[#0071c2]">
//               Ongoing Support
//             </h3>
//             <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
//               <li className="mb-[18px]">
//                 1. Dedicated customer success manager
//               </li>
//               <li className="mb-[18px]">2. Regular updates</li>
//               <li>3. Training materials</li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";

export default function SetupSteps() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#f7faff] to-[#fefbff] overflow-hidden py-16"
      style={{ backgroundImage: "url('/BgThreeStepProcess.webp')" }}
    >
      <div className="absolute ">
        <Image
          src="/BgThreeStepProcess.webp"
          alt="Background waves"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Easy 3 Step set up
        </h2>
        <p className="mt-2 text-gray-600">
          Access the <span className="font-semibold">AcuView</span> lender
          network
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[280px] px-7 mt-8"
          style={{
            backgroundImage: "url('/AcuViewButtonBg.webp')",
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
          <span className="ml-2 whitespace-nowrap">Get Your Demo!</span>
        </button>
      </div>

      {/* Steps */}
      <div className="relative z-10 mt-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-6xl">
        {/* Left Column */}
        <div className="flex flex-col gap-16">
          {/* Quick Setup */}
          <div className="relative bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] max-w-sm">
            <h3 className="text-lg font-semibold text-blue-500">Quick Setup</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>1. Seamlessly integrates with existing LMS software</li>
              <li>2. Minimal IT requirements</li>
              <li>3. Full training & support provided for your team</li>
            </ul>
            {/* Floating Icon */}
            <div className="absolute -top-6 -right-6 bg-white shadow-md rounded-lg p-3">
              <Image
                src="/SetUpimageOne.png"
                alt="Quick setup"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="relative bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] max-w-sm">
            <h3 className="text-lg font-semibold text-blue-500">
              Ongoing Support
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>1. Dedicated customer success manager</li>
              <li>2. Regular updates</li>
              <li>3. Training materials</li>
            </ul>
            {/* Floating Icon */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-md rounded-lg p-3">
              <Image
                src="/SetUpimageTwo.png"
                alt="Support"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>

        {/* Right Column (Immediate Results) */}
        <div className="relative bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] max-w-sm">
          <h3 className="text-lg font-semibold text-blue-500">
            Immediate Results
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm">
            <li>1. See loan attempts in real time</li>
            <li>2. Gain actionable borrower insights from day one</li>
            <li>3. Start protecting your portfolio today</li>
          </ul>
          {/* Floating Icon */}
          <div className="absolute -top-6 -left-6 bg-white shadow-md rounded-lg p-3">
            <Image
              src="/icons/results.png"
              alt="Results"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
