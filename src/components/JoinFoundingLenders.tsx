// "use client";

// import Image from "next/image";
// import React from "react";

// export default function LendingBanner() {
//   return (
//     <section className="w-full flex justify-center  relative ">
//       <section className="flex flex-col-reverse lg:flex-row items-center absolute top-[-270px] justify-between bg-[#1272D2] sm:rounded-[27px] shadow-lg p-8 lg:p-2 max-w-6xl w-full gap-8">
//         <div className="flex justify-center items-center w-full lg:w-1/2">
//           <object
//             type="image/svg+xml"
//             data="/Acuview-Join.svg"
//             className="w-[250px] md:w-[320px] lg:w-[360px] h-auto"
//           >
//             Acuview-Join
//           </object>
//         </div>

//         <div className="flex flex-col items-start text-white w-full lg:w-1/2">
//           <h2 className="text-[23px] font-bold leading-snug">
//             Join the Founding Lenders Who Are Transforming Risk Management
//           </h2>
//           <p className="mt-4 text-[16px] opacity-90 max-w-[500px]">
//             Every day you wait is another day of exposure to loan stacking and
//             fraud. Start protecting your portfolio today with the world&apos;s
//             first real-time lending intelligence network.
//           </p>
//           <p className="mt-4 font-semibold text-base md:text-lg">
//             Watch the Loan Stacking Detection Happen LIVE!
//           </p>
//           <p className="mt-1 text-[16px]">
//             Get Your Custom ROI Analysis
//           </p>

//           {/* CTA Button */}
//           <button className="mt-6 flex items-center gap-2 bg-white text-[#1670EA] px-5 py-4 rounded-full font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition">
//             <Image
//               src="/BlueRocket.svg"
//               alt="Rocket Icon"
//               width={20}
//               height={20}
//             />
//             15-Minute Demo!
//           </button>
//         </div>
//       </section>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import React from "react";

export default function LendingBanner() {
  return (
    <section className="w-full flex justify-center relative  md:px-6 lg:px-20  md:top-[100px]">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#1272D2] md:rounded-[27px] shadow-lg p-6 sm:p-8 lg:p-12 max-w-6xl w-full gap-8 mt-[-120px] md:mt-[-150px] lg:mt-[-200px]   ">
        {/* Image */} 
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <object
            type="image/svg+xml"
            data="/Acuview-Join.svg"
            className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto"
          >
            Acuview-Join
          </object>
        </div>

        {/* Text */}
        <div className="flex flex-col items-start text-white w-full lg:w-1/2">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-snug">
            Join the Founding Lenders Who Are Transforming Risk Management
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] opacity-90 max-w-[500px]">
            Every day you wait is another day of exposure to loan stacking and
            fraud. Start protecting your portfolio today with the world&apos;s
            first real-time lending intelligence network.
          </p>
          <p className="mt-4 font-semibold text-base md:text-lg">
            Watch the Loan Stacking Detection Happen LIVE!
          </p>
          <p className="mt-1 text-[15px] sm:text-[16px]">
            Get Your Custom ROI Analysis
          </p>

          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-white text-[#1670EA] px-5 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer"   onClick={() =>
                (window.location.href =
                  "https://acufi.com/acuview-get-started/")
              }>
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
