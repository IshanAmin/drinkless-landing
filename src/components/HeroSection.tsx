
import SignupForm from "./SignupForm";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    featureRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      setTimeout(() => {
        ref.classList.add('animate-fade-up');
        ref.style.opacity = '1';
      }, 300 + (index * 150));
    });
  }, []);

  return (
    <div 
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/b170d9ae-89cd-44e3-a592-0fe4d06ebc7d.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Logo positioned absolutely with increased padding */}
      <div className="absolute top-8 w-full md:w-auto md:left-8 flex justify-center md:justify-start z-20 animate-float">
        <img 
          src="/lovable-uploads/434a8cbf-6477-4626-9f0f-bb9fdbdac292.png"
          alt="Sobr Logo" 
          className="h-12 w-auto"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 mt-16 md:mt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight md:leading-none text-white animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <span className="block mb-2">Start Your Life's</span>
              <span className="block mb-2">Success Story</span>
              <span className="gradient-text block animate-gradient bg-size-200">Leave Alcohol Behind</span>
            </h2>

            <div className="flex flex-wrap gap-4 text-white text-base md:text-lg">
              <div 
                ref={el => featureRefs.current[0] = el} 
                className="flex items-center gap-2 opacity-0"
              >
                <CheckCircle className="h-6 w-6 text-white" />
                <span>Non-Invasive</span>
              </div>
              <div 
                ref={el => featureRefs.current[1] = el} 
                className="flex items-center gap-2 opacity-0"
              >
                <CheckCircle className="h-6 w-6 text-white" />
                <span>Private & Secure</span>
              </div>
              <div 
                ref={el => featureRefs.current[2] = el} 
                className="flex items-center gap-2 opacity-0"
              >
                <CheckCircle className="h-6 w-6 text-white" />
                <span>Evidence-Based</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <SignupForm />
            <p className="text-sm text-slate-600 mt-2 text-center">
              Reserve your spot now and take the first step to leave alcohol behind for good!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
