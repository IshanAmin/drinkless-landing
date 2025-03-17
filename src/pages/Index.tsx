
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
import { useEffect } from "react";

export default function Index() {
  // Add scroll reveal effect when component mounts
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        
        <div className="mt-12 mb-12 flex justify-center animate-on-scroll opacity-0">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/phone_screen_mockup-3.png"
            alt="Sobr App Mockups"
            className="w-full max-w-6xl mx-auto px-4 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <TransformSection />
        <SavingsCalculator />
        
        <div className="flex justify-center mb-16 animate-on-scroll opacity-0">
          <img 
            src="https://ishanamin.com/wp-content/uploads/2024/11/90-day-plan.png"
            alt="Recovery Journey"
            className="w-full max-w-4xl mx-auto px-4 hover:scale-105 transition-transform duration-500"
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
          <p>© 2025 sobr. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> in Omaha, Nebraska
          </p>
        </div>
      </footer>
    </div>
  );
}
