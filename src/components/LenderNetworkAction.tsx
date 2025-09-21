"use client";

export default function LenderNetworkEffect() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 pt-45"
      style={{ backgroundImage: "url('/LenderActionBg.png')" }}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[40px] font-extrabold text-white">
          The Lender Network Effect In Action
        </h2>

        <p className="mt-4 text-[18px] text-[#FFFFFFD1] max-w-3xl leading-relaxed">
          More Lenders = More Data = Better Decisions = Lower Risks For All ={" "}
          <span className="font-bold text-[#FFFFFFD1]">Greater Profits</span>
          <br />
          <span className="font-semibold">For All</span>
        </p>
        <div className="mt-10 w-full flex justify-center">
          <object
            type="image/svg+xml"
            data="/lender-compressed.svg"
            className="w-full max-w-4xl h-auto"
          >
            Your browser does not support SVG animation.
          </object>
        </div>
      </div>
    </section>
  );
}
