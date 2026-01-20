import BannedCards from "@/components/BannedCards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToPlay from "@/components/HowToPlay";
import Navbar from "@/components/Navbar";
import RotationSets from "@/components/RotationSets";
import Rules from "@/components/Rules";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 space-y-24">
        <Hero />
        <HowToPlay />
        <Rules />
        <RotationSets />
        <BannedCards />
      </main>
      <Footer />
    </>
  );
}
