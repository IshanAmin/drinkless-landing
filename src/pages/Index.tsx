import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import WaitlistCTA from "@/components/WaitlistCTA";
import TransformSection from "@/components/TransformSection";

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
                <img src="/placeholder.svg" alt="App Screenshot 1" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative w-64 h-[500px] transform translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white shadow-2xl z-10">
                <img src="/placeholder.svg" alt="App Screenshot 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative w-64 h-[500px] transform rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white">
                <img src="/placeholder.svg" alt="App Screenshot 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <TransformSection />
        <FeatureShowcase />
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