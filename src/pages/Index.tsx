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
            <div className="relative w-64 h-[500px] transform -rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Drinkless App Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative w-64 h-[500px] transform translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Drinkless App Progress Screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative w-64 h-[500px] transform rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
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