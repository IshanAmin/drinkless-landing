
import SignupForm from "./SignupForm";
import { useEffect, useRef } from "react";

const WaitlistCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-white/50 backdrop-blur-sm opacity-0 transform translate-y-4">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight px-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient">
            Ready to start your
            <span className="block">success story?</span>
          </h2>
          <SignupForm />
          <p className="text-sm text-slate-600 mt-2">
            Reserve your spot now and take the first step to leave alcohol behind for good!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistCTA;
