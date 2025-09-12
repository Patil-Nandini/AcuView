import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Industries from "@/components/IndustriesWeServe";
import LendersResult from "@/components/LendersResult";
import DontFundBlind from "@/components/DontFundBlind";

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full max-w-[1920px]">
        {/* <Header /> */}
        <DontFundBlind />
        <LendersResult />
        <Industries/>
        <Footer />
      </div>
    </main>
  );
}
