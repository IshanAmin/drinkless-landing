
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AlcoholismStats from "@/components/AlcoholismStats";
import FeatureShowcase from "@/components/FeatureShowcase";
import WaitlistCTA from "@/components/WaitlistCTA";
import TransformSection from "@/components/TransformSection";
import ResearchSection from "@/components/ResearchSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import TwitterTestimonials from "@/components/TwitterTestimonials";
import FAQSection from "@/components/FAQSection";
import ReferencesDialog from "@/components/stats/ReferencesDialog";

export default function Index() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AlcoholismStats />
        
        <div className="mt-12 mb-12 flex justify-center">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/phone_screen_mockup-3.png"
            alt="Sobr App Mockups"
            className="w-full max-w-6xl mx-auto px-4"
          />
        </div>

        <TransformSection />
        <SavingsCalculator />
        
        <div className="flex justify-center mb-16">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/90-day-plan.png"
            alt="Recovery Journey"
            className="w-full max-w-4xl mx-auto px-4"
          />
        </div>
        
        <FeatureShowcase />
        <ResearchSection />
        <WaitlistCTA />
        <TwitterTestimonials />
        <FAQSection />
      </main>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p><p>© <Link to="/home3" className="text-inherit no-underline hover:text-inherit">2026</Link> Sobr. All rights reserved. Brightslides LLC.</p> Sobr. All rights reserved. Brightslides LLC.</p>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <ReferencesDialog />
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Omaha, Nebraska
          </p>
        </div>
      </footer>
    </div>
  );
}
