import sobrLogo from "@/assets/sobr-logo-light.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import buddyScreenshot from "@/assets/buddy-screenshot.png";
import sponsorScreenshot from "@/assets/sponsor-screenshot.png";
import { motion, AnimatePresence } from "framer-motion";

interface Home2HeroProps {
  onRoleSelect: (role: "buddy" | "sponsor") => void;
  activeRole: string;
}

const Home2Hero = ({ onRoleSelect, activeRole }: Home2HeroProps) => {
  const isBuddy = activeRole === "buddy";

  const handleClick = (role: "buddy" | "sponsor") => {
    onRoleSelect(role);
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-x-hidden"
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

      {/* Logo — large, top-left */}
      <div className="absolute top-4 md:top-6 left-0 right-0 md:left-8 md:right-auto flex justify-center md:justify-start z-20">
        <img src={sobrLogo} alt="Sobr Logo" className="h-14 md:h-[80px] w-auto" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 mt-12 md:mt-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
                Your sobriety companion
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jakarta font-extrabold leading-tight text-sobr-text">
                Your Partner in{" "}
                <span className="gradient-text">Leaving Alcohol Behind</span>
              </h1>
              <p className="text-lg md:text-xl text-sobr-text-secondary max-w-lg mx-auto md:mx-0 font-inter">
                Whether you're ready to quit or supporting someone who is -
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
              <a href="https://apps.apple.com/app/id6758133222" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.wpes.sobr" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right — Two iPhones with sync arrow (swap on role toggle) */}
          <div className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-4 w-full max-w-full py-6">
            {(() => {
              const phones = [
                {
                  id: "buddy",
                  src: buddyScreenshot,
                  alt: "Sobr app — buddy view (Ishaan)",
                  glow: "bg-sobr-coral/20",
                  delay: 0,
                },
                {
                  id: "sponsor",
                  src: sponsorScreenshot,
                  alt: "Sobr app — sponsor view (Jolly)",
                  glow: "bg-sobr-amber/15",
                  delay: 0.5,
                },
              ];
              // Position 0 = left slot, Position 1 = right slot
              // When isBuddy: buddy(0) on left, sponsor(1) on right -> positions [0, 1]
              // When !isBuddy: sponsor(1) on left, buddy(0) on right -> positions [1, 0]
              const buddyPosition = isBuddy ? 0 : 1; // 0 = left, 1 = right
              const sponsorPosition = isBuddy ? 1 : 0;

              const transition = { type: "spring" as const, stiffness: 60, damping: 20, mass: 1.4 };

              const Phone = ({ phone, position }: { phone: typeof phones[number]; position: number }) => (
                <motion.div
                  animate={{ x: position === 0 ? "0%" : "100%" }}
                  initial={false}
                  transition={transition}
                  className="absolute top-1/2 left-0 -translate-y-1/2 origin-center"
                  style={{
                    width: "calc(50% - 32px)",
                    maxWidth: 280,
                  }}
                >
                  <div
                    className="relative w-full animate-float"
                    style={{ animationDelay: `${phone.delay}s` }}
                  >
                    <img
                      src={phone.src}
                      alt={phone.alt}
                      className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
                    />
                    <div className={`absolute inset-0 -z-10 blur-3xl ${phone.glow} rounded-full scale-75`} />
                  </div>
                </motion.div>
              );

              const leftIsBuddy = isBuddy;

              return (
                <div className="relative w-full max-w-[640px] mx-auto" style={{ aspectRatio: "640 / 560" }}>
                  <Phone phone={phones[0]} position={buddyPosition} />
                  <Phone phone={phones[1]} position={sponsorPosition} />

                  {/* Bi-directional sync arrow with animated labels — centered overlay */}
                  <motion.div
                    transition={transition}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-20 text-sobr-coral px-1"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={`top-${leftIsBuddy ? "buddy" : "sponsor"}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="text-[8px] sm:text-[10px] md:text-xs font-jakarta font-semibold tracking-wider uppercase"
                      >
                        {leftIsBuddy ? "Buddy" : "Sponsor"}
                      </motion.span>
                    </AnimatePresence>
                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-8 md:w-12" stroke="currentColor">
                      <path d="M4 8H36L30 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M44 16H12L18 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={`bot-${leftIsBuddy ? "sponsor" : "buddy"}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="text-[8px] sm:text-[10px] md:text-xs font-jakarta font-semibold tracking-wider uppercase"
                      >
                        {leftIsBuddy ? "Sponsor" : "Buddy"}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Hero;
