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
import TheEarlyBird from "@/components/TheEarlyBird";
import LendingBanner from "@/components/JoinFoundingLenders";
import FaqSection from "@/components/FAQS";
import AcuviewBanner from "@/components/AcuView";
import ThirtyDaysFree from "@/components/30DaysFree";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import SetupSteps from "@/components/SetupSteps";

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        <Header />
        <HeroSection />
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
        <SetupSteps />
        <TheEarlyBird />
        <ThirtyDaysFree />
        <Testimonials />
        <AcuviewBanner />
        <FaqSection />
        <LendingBanner />
        <Footer />
      </div>
    </main>
  );
}
