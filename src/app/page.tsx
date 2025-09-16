import ComparisonSection from "@/components/ComparisionSection";
import Footer from "@/components/Footer";
import FoundingBenefits from "@/components/FoundingMember";
import LendersResult from "@/components/LendersResult";
import Testimonials from "@/components/Testimonial";
import WhoisAcuViewBuiltFor from "@/components/WhoisAcuviewBuiltFor";
import DontFundBlind from "@/components/DontFundBlind";
import IntroducingTheFirst from "@/components/Introducingthefirst";
import ExploringLenderNetwork from "@/components/ExploringLenderNetwork";
import StatsSection from "@/components/Impact";
import LenderNetworkEffect from "@/components/LenderNetworkAction";
import HiddenCrisisSection from "@/components/HiddenCrysis";
import FlexibleIntegrationOptions from "@/components/FlexibleIntegration";
export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        {/* <Header /> */}
        <IntroducingTheFirst />
        <ExploringLenderNetwork />
        <StatsSection />
        <LenderNetworkEffect />
        <HiddenCrisisSection />
        <DontFundBlind />
        <LendersResult />
        <WhoisAcuViewBuiltFor />
        <FoundingBenefits />
        <FlexibleIntegrationOptions />
        <ComparisonSection />
        {/* <SetupSteps /> */}
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
