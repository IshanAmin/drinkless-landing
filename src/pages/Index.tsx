import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import WaitlistCTA from "@/components/WaitlistCTA";
import TransformSection from "@/components/TransformSection";
import ResearchSection from "@/components/ResearchSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import TwitterTestimonials from "@/components/TwitterTestimonials";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/drinkless-app-logo.png" 
            alt="Drinkless Logo" 
            className="h-12 w-auto"
          />
        </div>
      </header>

      <main>
        <HeroSection />
        
        <div className="mt-12 mb-12 flex justify-center">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/phone_screen_mockup-3.png"
            alt="Drinkless App Mockups"
            className="w-full max-w-6xl mx-auto px-4"
          />
        </div>

        <TransformSection />
        <SavingsCalculator />
        
        <div className="flex justify-center mb-16">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/alcohol-recover_66133658.png"
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
          <p>© 2024 drinkless. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Omaha, Nebraska
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;