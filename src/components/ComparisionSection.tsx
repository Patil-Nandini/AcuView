// components/ComparisonSection.tsx

import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white h-auto">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          While Others React to Defaults, <br className="hidden sm:block" />
          You Prevent Them!
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          The difference between Traditional Credit Checks & Data companies, and{" "}
          <span className="font-semibold">
            AcuView’s real-time intelligence
          </span>
          .
        </p>
      </div>

      {/* Comparison Section */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-0 relative w-[100%]">
        {/* Left Card */}
       <div
  className="flex flex-col w-[100%] max-w-[280px] rounded-3xl 
             border bg-[#FDF8F8] shadow-[0px_4px_10px_0px_#0B74DD26] 
             border-[#FA6450] p-6 relative bg-cover bg-center"
  style={{ backgroundImage: "url('/TraditionalCreditCheckBg.png')" }}
>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/TraditionalCreditCheck.png"
              alt="Traditional Credit Check Icon"
              width={28}
              height={28}
            />
            <h3 className="text-lg font-semibold text-[#6B1D57] h-[80px]">
              Traditional Credit Checks <br /> & Data Companies
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
              />
              <span>Show what borrowers did weeks or months ago</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
              />
              <span>Can’t see multiple applications across lenders</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
              />
              <span>Can’t detect identity manipulation</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
              />
              <span>Leave you vulnerable to loan stacking</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
              />
              <span>Increased bad loans</span>
            </li>
          </ul>
        </div>

        {/* Man Image (hidden on tablet & mobile) */}
        <div className="hidden lg:block">
          <Image
            src="/man.webp"
            alt="Man"
            width={480}
            height={260}
            className="object-cover"
          />
        </div>

        {/* Right Card */}
        <div
          className="flex flex-col w-full max-w-[280px] min-h-[300px] rounded-3xl shadow-[0px_4px_10px_0px_#0B74DD26] border border-gray-200
          p-6 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/TimeManagementBg.png')" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/TimeManagement.png"
              alt="AcuView Intelligence Icon"
              width={28}
              height={28}
            />
            <h3 className="text-lg font-semibold text-[#0A3D91] h-[80px]">
              AcuView’s Real-time <br /> Intelligence
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
  <li className="flex items-center gap-2">
    <Image src="/GreenCheck.svg" alt="Check" width={20} height={20} />
    <span>Shows what borrowers are doing in real time</span>
  </li>
  <li className="flex items-center gap-2">
    <Image src="/GreenCheck.svg" alt="Check" width={20} height={20} />
    <span>Tracks applications across multiple lenders in real-time</span>
  </li>
  <li className="flex items-center gap-2">
    <Image src="/GreenCheck.svg" alt="Check" width={20} height={20} />
    <span>Detects identity inconsistencies</span>
  </li>
  <li className="flex items-center gap-2">
    <Image src="/GreenCheck.svg" alt="Check" width={20} height={20} />
    <span>Identify risky borrowers before approval</span>
  </li>
  <li className="flex items-center gap-2">
    <Image src="/GreenCheck.svg" alt="Check" width={20} height={20} />
    <span>Increase good loans & profitability</span>
  </li>
</ul>

        </div>
      </div>
    </section>
  );
}
