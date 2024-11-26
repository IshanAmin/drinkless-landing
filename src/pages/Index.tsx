import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import WaitlistCTA from "@/components/WaitlistCTA";
import TransformSection from "@/components/TransformSection";
import ResearchSection from "@/components/ResearchSection";
import SavingsCalculator from "@/components/SavingsCalculator";

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
          <Button variant="ghost">Contact</Button>
        </div>
      </header>

      <main>
        <HeroSection />
        
        {/* App Screenshots Section */}
        <div className="mt-24 mb-24">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative w-[290px] h-[580px] transform -rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[48px] blur-xl" />
              <div className="relative w-full h-full border-[12px] border-black rounded-[48px] overflow-hidden bg-white shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[16px] z-10" />
                <img 
                  src="https://ishanamin.com/wp-content/uploads/2024/11/Landing-Page-Tracker.jpeg" 
                  alt="Drinkless App Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative w-[290px] h-[580px] transform translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[48px] blur-xl" />
              <div className="relative w-full h-full border-[12px] border-black rounded-[48px] overflow-hidden bg-white shadow-2xl z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[16px] z-10" />
                <img 
                  src="https://ishanamin.com/wp-content/uploads/2024/11/Landing-Page-Home.jpeg" 
                  alt="Drinkless App Progress Screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative w-[290px] h-[580px] transform rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[48px] blur-xl" />
              <div className="relative w-full h-full border-[12px] border-black rounded-[48px] overflow-hidden bg-white shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[16px] z-10" />
                <img 
                  src="https://ishanamin.com/wp-content/uploads/2024/11/Landing-Page-Tracking.jpeg" 
                  alt="Drinkless App Stats Screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <TransformSection />
        <SavingsCalculator />
        <FeatureShowcase />
        <ResearchSection />
        <WaitlistCTA />
      </main>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2024 drinkless. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Omaha, Nebraska
          </p>
          <div className="flex gap-6">
            <a href="mailto:info@drinkless.app" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;