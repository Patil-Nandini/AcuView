import ComparisonSection from "@/components/ComparisionSection";
import Footer from "@/components/Footer";
import FoundingBenefits from "@/components/FoundingMember";
import Industries from "@/components/IndustriesWeServe";
import LendersResult from "@/components/LendersResult";
import SetupSteps from "@/components/SetupSteps";
import Testimonials from "@/components/Testimonial";
import WhoisAcuViewBuiltFor from "@/components/WhoisAcuviewBuiltFor";
import DontFundBlind from "@/components/DontFundBlind";
import IntroducingTheFirst from "@/components/Introducingthefirst";
import TheEarlyBird from "@/components/TheEarlyBird";

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        {/* <Header /> */}
        <IntroducingTheFirst />
        <DontFundBlind />
        <LendersResult />
        {/* <WhoisAcuViewBuiltFor/> */}
        <FoundingBenefits />
        {/* <ComparisonSection /> */}
        {/* <SetupSteps /> */}
        <TheEarlyBird />
        <Testimonials />
        <Industries/>
        <Footer />
      </div>
    </main>
  );
}
