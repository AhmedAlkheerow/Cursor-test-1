import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import ProblemSection from "../components/sections/ProblemSection";
import PositioningShift from "../components/sections/PositioningShift";
import Services from "../components/sections/Services";
import WorkGrid from "../components/sections/WorkGrid";
import Process from "../components/sections/Process";
import Proof from "../components/sections/Proof";
import FounderSection from "../components/sections/FounderSection";
import StrategicCTA from "../components/sections/StrategicCTA";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* UI direction: editorial SaaS layout, red accent, generous whitespace, thin dividers, and soft card shadows. */}
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PositioningShift />
        <Services />
        <WorkGrid />
        <Process />
        <Proof />
        <FounderSection />
        <StrategicCTA />
      </main>
      <Footer />
    </div>
  );
}
