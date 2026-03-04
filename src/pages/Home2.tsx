import { useState } from "react";
import Home2Hero from "@/components/home2/Home2Hero";
import HowItWorks from "@/components/home2/HowItWorks";
import DualExperience from "@/components/home2/DualExperience";
import FivePillars from "@/components/home2/FivePillars";
import AppShowcase from "@/components/home2/AppShowcase";
import Home2Testimonials from "@/components/home2/Home2Testimonials";
import Home2FAQ from "@/components/home2/Home2FAQ";
import FinalCTA from "@/components/home2/FinalCTA";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";

export default function Home2() {
  const [activeRole, setActiveRole] = useState<string>("buddy");

  return (
    <div className="min-h-screen sobr-dark">
      {/* Work in Progress Banner */}
      <div className="bg-sobr-coral text-sobr-text text-center py-3 px-4 font-semibold text-sm tracking-wide font-jakarta">
        🚧 Work in Progress — New Site Coming Soon 🚧
      </div>

      <main>
        <Home2Hero onRoleSelect={setActiveRole} activeRole={activeRole} />
        <HowItWorks />
        <DualExperience activeTab={activeRole} onTabChange={setActiveRole} />
        <FivePillars />
        <AppShowcase />
        <Home2Testimonials />
        <Home2FAQ />
        <FinalCTA />
      </main>

      <Home2Footer />
    </div>
  );
}
