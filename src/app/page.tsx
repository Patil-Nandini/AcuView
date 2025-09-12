import ComparisonSection from "@/components/ComparisionSection";
import Footer from "@/components/Footer";
import FoundingBenefits from "@/components/FoundingMember";
import Industries from "@/components/IndustriesWeServe";
import LendersResult from "@/components/LendersResult";
<<<<<<< HEAD
import SetupSteps from "@/components/SetupSteps";
import Testimonials from "@/components/Testimonial";
import WhoisAcuViewBuiltFor from "@/components/WhoisAcuviewBuiltFor";
=======
import DontFundBlind from "@/components/DontFundBlind";
<<<<<<< HEAD
import IntroducingTheFirst from "@/components/Introducingthefirst";
=======
>>>>>>> 0a41945b41850c4bb3f0ed118da93689c38fdf2b
>>>>>>> 4ec9d15072818f3156d580419a8e898c80fb774d

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        {/* <Header /> */}
        <IntroducingTheFirst />
        <DontFundBlind />
        <LendersResult />
        <WhoisAcuViewBuiltFor/>
        <FoundingBenefits />
        <ComparisonSection />
        <SetupSteps />
        <Testimonials />
        <Industries/>
        <Footer />
      </div>
    </main>
  );
}
