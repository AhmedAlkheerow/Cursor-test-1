import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import ProblemSection from "../components/sections/ProblemSection";
import PositioningShift from "../components/sections/PositioningShift";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Proof from "../components/sections/Proof";
import StrategicCTA from "../components/sections/StrategicCTA";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ink text-white">
      {/* UI direction: Inter + Space Grotesk pairing, neutral base with brand accent, large type scale, generous spacing, subtle gradients, and hover micro-interactions. */}
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PositioningShift />
        <Services />
        <Process />
        <Proof />
        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}
