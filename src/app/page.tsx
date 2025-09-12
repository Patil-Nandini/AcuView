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
>>>>>>> 0a41945b41850c4bb3f0ed118da93689c38fdf2b

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        {/* <Header /> */}
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
