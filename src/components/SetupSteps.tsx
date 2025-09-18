"use client";

import Image from "next/image";

export default function SetupSteps() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full  lg:py-60 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/BgThreeStepProcess.webp')" }}
    >
      <div className="relative flex  max-w-full h-full lg:h-full justify-center items-center flex-col lg:flex-row">
        {/* Desktop connectors */}
        <Image
          src="/SetUpimage1.png"
          alt="Connector1"
          width={300}
          height={100}
          className="absolute top-[25%] left-[43%] w-[100%] hidden lg:block"
        />
        <Image
          src="/SetUpimage2.png"
          alt="Connector2"
          width={200}
          height={300}
          className="absolute top-[48%] left-[43%] h-[44%] hidden lg:block"
        />

        {/* Tablet & Mobile connectors  */}
        <Image
          src="/TabViewPipeOne.png"
          alt="Connector for Step 1"
          width={370}
          height={370}
          className="absolute z-[1] block lg:hidden top-[12%] sm:top-[16%] sm:left-[66%] left-[10%] w-[90%] sm:w-[300px]"
        />
        <Image
          src="/TabViewPipeTwo.png"
          alt="Connector for Step 2"
          width={370}
          height={370}
          className="absolute z-[1] block lg:hidden top-[50%] sm:top-[51%] sm:left-[-27%] left-[-7%] w-[90%] sm:w-[300px]"
        /> 

        <div className="relative z-[3] inline-grid lg:gap-[18%] sm:flex sm:flex-col sm:items-center sm:gap-[90px] gap-[50px]">
          <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center top-[127px] left-[-183px]">
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-14%] left-[87%] sm:left-[-11%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 1 time NOT adjusted.svg"
              >Icon</object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-11%] left-[-13%] sm:left-[85%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 2 time NOT adjusted.svg"
              >Icon</object>
            </div>

            <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] bg-gradient-to-r from-[#2D6CED] to-[#2FB0D2] text-transparent bg-clip-text">
              Quick Setup
            </h3>
            <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
              <li className="mb-[18px]">
                1. Seamlessly integrates with existing LMS software
              </li>
              <li className="mb-[18px]">2. Minimal IT requirements</li>
              <li>3. Full training & support provided for your team</li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center top-[19px] left-[343px]">
            {/* Icons */}
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-15%] left-[-13%] sm:left-[-12%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 3 time NOT adjusted.svg"
              >Icon</object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-11%] right-[-14%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 4 time NOT adjusted.svg"
              >Icon</object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 left-[32%] bottom-[-175%] sm:left-[-25%] sm:bottom-[-32%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 5 time NOT adjusted.svg"
              >Icon</object>
            </div>

            <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] text-[#0094ff]">
              Immediate Results
            </h3>
            <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
              <li className="mb-[18px]">1. See loan attempts in real time</li>
              <li className="mb-[18px]">2. Start protecting your portfolio</li>
              <li>3. Gain actionable borrower insights from day one</li>
            </ol>
          </div>

          <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] lg:p-8 p-5 flex flex-col justify-center top-[15px] left-[-169px]">
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 top-[-14%] left-[-12%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 6 time NOT adjusted.svg"
              >Icon</object>
            </div>
            <div className="absolute w-[25%] h-[25%] flex items-center justify-center z-10 bottom-[-14%] right-[-12%]">
              <object
                type="image/svg+xml"
                data="https://acufi.com/images/ICON 7 time NOT adjusted.svg"
              >Icon</object>
            </div>

            <h3 className="text-[26px] sm:text-[22px] font-semibold mb-[18px] text-[#0071c2]">
              Ongoing Support
            </h3>
            <ol className="text-[#504E4E] text-[16px] sm:text-[15px] font-medium list-none m-0">
              <li className="mb-[18px]">
                1. Dedicated customer success manager
              </li>
              <li className="mb-[18px]">2. Regular updates</li>
              <li>3. Training materials</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}






// export default function SetupSteps() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat py-10 lg:py-0">
//       <div className="relative flex w-[58%] max-w-full h-full lg:h-full justify-center items-center flex-col lg:flex-row">
//         {/* Desktop connectors */}
//         <img
//           className="hidden lg:block absolute top-[28%] left-[30%]"
//           src="https://acufi.com/wp-content/uploads/2025/07/SetUpimageOne.png"
//           alt="Connector 1"
//         />
//         <img
//           className="hidden lg:block absolute top-[48%] left-[43%] h-[44%]"
//           src="https://acufi.com/wp-content/uploads/2025/07/SetUpimageTwo.png"
//           alt="Connector 2"
//         />

//         {/* Tablet & Mobile connectors */}
//         <img
//           className="block lg:hidden absolute z-[1] top-[16%] left-[66%] md:top-[12%] md:left-[10%] w-[300px] max-w-[370px] md:w-full"
//           src="https://acufi.com/wp-content/uploads/2025/07/TabViewPipeOne.png"
//           alt="Connector for Step 1"
//         />
//         <img
//           className="block lg:hidden absolute z-[1] top-[51%] left-[-51%] md:top-[50%] md:left-[-7%] w-[300px] max-w-[370px] md:w-full"
//           src="https://acufi.com/wp-content/uploads/2025/07/TabViewPipeTwo.png"
//           alt="Connector for Step 2"
//         />

//         {/* Steps grid */}
//         <div className="relative grid lg:inline-grid  md:gap-[90px] items-center">
//           {/* Step 1 */}
//           <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] md:max-w-[380px] md:h-auto p-8 md:p-6 flex flex-col justify-center">
//             {/* Icons */}
//             <div className="absolute top-[-14%] left-[87%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 1 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute bottom-[-11%] left-[-13%] md:left-[85%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 2 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <h3 className="bg-gradient-to-r from-[#2D6CED] to-[#2FB0D2] bg-clip-text text-transparent text-[26px] font-semibold mb-4 md:text-[22px]">
//               Quick Setup
//             </h3>
//             <ol className="text-[#504E4E] text-[16px] font-medium space-y-4 md:text-[15px]">
//               <li>1. Seamlessly integrates with existing LMS software</li>
//               <li>2. Minimal IT requirements</li>
//               <li>3. Full training &amp; support provided for your team</li>
//             </ol>
//           </div>

//           {/* Step 2 */}
//           <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] md:max-w-[380px] top-[-72px] left-[267px] md:h-auto p-8 md:p-6 flex flex-col justify-center">
//             <div className="absolute top-[-15%] left-[-13%] md:left-[-12%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 3 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute bottom-[-11%] right-[-14%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 4 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <div className="absolute bottom-[-30%] left-[-24%] md:left-[-60%] md:bottom-[-26%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 5 time NOT adjusted.svg"
//               ></object>
//             </div>
//             <h3 className="text-[#0094ff] text-[26px] font-semibold mb-4 md:text-[22px]">
//               Immediate Results
//             </h3>
//             <ol className="text-[#504E4E] text-[16px] font-medium space-y-4 md:text-[15px]">
//               <li>1. See loan attempts in real time</li>
//               <li>2. Start protecting your portfolio</li>
//               <li>3. Gain actionable borrower insights from day one</li>
//             </ol>
//           </div>

//           {/* Step 3 */}
//           <div className="relative bg-white rounded-[21px] shadow-[17.5px_5.6px_27.51px_2.1px_#91AAFA99] w-[340px] h-[280px] md:max-w-[380px] md:h-auto p-8 md:p-6 flex flex-col justify-center mt-6 md:mt-0">
//             <div className="absolute top-[-14%] left-[-12%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 6 time NOT adjusted.svg"
//               >Line</object>
//             </div>
//             <div className="absolute bottom-[-14%] right-[-12%] w-[25%] h-[25%] flex items-center justify-center">
//               <object
//                 type="image/svg+xml"
//                 data="https://acufi.com/images/ICON 7 time NOT adjusted.svg"
//               >Line</object>
//             </div>
//             <h3 className="text-[#0071c2] text-[26px] font-semibold mb-4 md:text-[22px]">
//               Ongoing Support
//             </h3>
//             <ol className="text-[#504E4E] text-[16px] font-medium space-y-4 md:text-[15px]">
//               <li>1. Dedicated customer success manager</li>
//               <li>2. Regular updates</li>
//               <li>3. Training materials</li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
