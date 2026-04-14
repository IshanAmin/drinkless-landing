import { Fragment } from "react";
import { Download, Users, Rocket } from "lucide-react";
import sobrLink from "@/assets/sobr-link.png";

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Simple to start
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            How It Works
          </h2>
        </div>

        {/* Steps 1 & 2 centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-3xl mx-auto mb-8 md:mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-sobr-coral/10 flex items-center justify-center">
                <Download className="w-9 h-9 text-sobr-coral" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sobr-coral text-sobr-text text-xs font-bold flex items-center justify-center font-jakarta">
                1
              </span>
            </div>
            <h3 className="text-xl font-jakarta font-bold text-sobr-text">
              Download the App
            </h3>
            <p className="text-sobr-text-muted font-inter leading-relaxed max-w-xs">
              Available on iOS and Android. Free to get started.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-sobr-coral">
              <path d="M4 12H32M32 12L24 5M32 12L24 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-sobr-coral/10 flex items-center justify-center">
                <Users className="w-9 h-9 text-sobr-coral" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sobr-coral text-sobr-text text-xs font-bold flex items-center justify-center font-jakarta">
                2
              </span>
            </div>
            <h3 className="text-xl font-jakarta font-bold text-sobr-text">
              Choose Your Role
            </h3>
            <p className="text-sobr-text-muted font-inter leading-relaxed max-w-xs">
              Are you the Buddy quitting alcohol, or the Sponsor supporting them?
            </p>
          </div>
        </div>

        {/* Split paths with Sobr Link in center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-start">
          {/* Buddy path */}
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            {/* Arrow down on mobile, diagonal on desktop */}
            <div className="hidden md:flex items-center justify-center mb-2">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-sobr-coral">
                <path d="M12 4V32M12 32L5 24M12 32L19 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-sobr-coral/10 flex items-center justify-center">
                <Rocket className="w-9 h-9 text-sobr-coral" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sobr-coral text-sobr-text text-xs font-bold flex items-center justify-center font-jakarta">
                3
              </span>
            </div>
            <h3 className="text-xl font-jakarta font-bold text-sobr-text">
              Start Your Journey{" "}
              <span className="font-extrabold">As Buddy</span>
            </h3>
            <p className="text-sobr-text-muted font-inter leading-relaxed max-w-xs">
              Set goals, track progress, and get 24/7 AI-powered support.
            </p>
          </div>

          {/* Sobr Link logo in center */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "350ms" }}>
            <img
              src={sobrLink}
              alt="Sobr Link — connecting Buddy and Sponsor"
              className="w-24 md:w-32 h-auto"
            />
          </div>

          {/* Sponsor path */}
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="hidden md:flex items-center justify-center mb-2">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-sobr-coral">
                <path d="M12 4V32M12 32L5 24M12 32L19 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-sobr-coral/10 flex items-center justify-center">
                <Rocket className="w-9 h-9 text-sobr-coral" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sobr-coral text-sobr-text text-xs font-bold flex items-center justify-center font-jakarta">
                3
              </span>
            </div>
            <h3 className="text-xl font-jakarta font-bold text-sobr-text">
              Start Your Journey{" "}
              <span className="font-extrabold">As Sponsor</span>
            </h3>
            <p className="text-sobr-text-muted font-inter leading-relaxed max-w-xs">
              Set goals, track progress, and get 24/7 AI-powered support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
