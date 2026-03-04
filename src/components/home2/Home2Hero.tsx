import { useState } from "react";
import sobrLogo from "@/assets/sobr-logo-light.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import iphoneFrame from "@/assets/iphone-frame.png";

interface Home2HeroProps {
  onRoleSelect: (role: "buddy" | "sponsor") => void;
  activeRole: string;
}

const Home2Hero = ({ onRoleSelect, activeRole }: Home2HeroProps) => {
  const isBuddy = activeRole === "buddy";

  const handleClick = (role: "buddy" | "sponsor") => {
    onRoleSelect(role);
    // Smooth scroll to dual-experience section
    setTimeout(() => {
      document.getElementById("dual-experience")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url("/lovable-uploads/b170d9ae-89cd-44e3-a592-0fe4d06ebc7d.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-sobr-root/85" />

      {/* Warm gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sobr-coral/10 via-transparent to-sobr-amber/5" />

      {/* Logo — 50% larger (h-10 → h-[60px]) */}
      <div className="absolute top-6 left-0 right-0 md:left-8 md:right-auto flex justify-center md:justify-start z-20">
        <img src={sobrLogo} alt="Sobr Logo" className="h-[60px] w-auto" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 mt-12 md:mt-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
                Your sobriety companion
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-extrabold leading-tight text-sobr-text">
                Your Partner in{" "}
                <span className="gradient-text">Leaving Alcohol Behind</span>
              </h1>
              <p className="text-lg md:text-xl text-sobr-text-secondary max-w-lg mx-auto md:mx-0 font-inter">
                Whether you're ready to quit or supporting someone who is —
                Sobr gives you the tools, the community, and the AI-powered
                guidance to make it stick.
              </p>
            </div>

            {/* Dual CTAs — swap filled/outline based on activeRole */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => handleClick("buddy")}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-jakarta font-bold text-lg transition-all duration-300 ${
                  isBuddy
                    ? "bg-sobr-coral text-sobr-text shadow-lg shadow-sobr-coral/25 hover:bg-sobr-coral-dark"
                    : "border-2 border-sobr-coral/40 text-sobr-text hover:bg-sobr-coral/10"
                }`}
              >
                I Want to Quit
              </button>
              <button
                onClick={() => handleClick("sponsor")}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-jakarta font-bold text-lg transition-all duration-300 ${
                  !isBuddy
                    ? "bg-sobr-coral text-sobr-text shadow-lg shadow-sobr-coral/25 hover:bg-sobr-coral-dark"
                    : "border-2 border-sobr-coral/40 text-sobr-text hover:bg-sobr-coral/10"
                }`}
              >
                I Want to Help Someone
              </button>
            </div>

            {/* App store badges */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right — iPhone */}
          <div className="flex justify-center animate-float">
            <div className="relative w-[280px] md:w-[320px]">
              <img
                src={iphoneFrame}
                alt="Sobr app preview"
                className="w-full h-auto relative z-10 drop-shadow-2xl"
              />
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-0 blur-3xl bg-sobr-coral/20 rounded-full scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Hero;
