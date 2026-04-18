import showcaseBuddy from "@/assets/showcase-buddy.png";
import showcaseSponsor from "@/assets/showcase-sponsor.png";
import buddySponsorLogo from "@/assets/buddy-sponsor-logo.png";

const AppShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-root relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sobr-coral/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Beautiful & Intuitive
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            See Sobr in Action
          </h2>
          <p className="text-sobr-text-secondary font-inter max-w-xl mx-auto">
            Designed with care — every screen is built to support, encourage, and empower you on your journey.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 max-w-full">
          {/* Left — Buddy single phone */}
          <div className="relative shrink-0 w-[28vw] max-w-[180px] md:max-w-[260px] animate-float">
            <img
              src={showcaseBuddy}
              alt="Sobr buddy app — daily check-ins"
              className="w-full h-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-coral/20 rounded-full scale-75" />
          </div>

          {/* Center — Buddy ↔ Sponsor logo */}
          <div className="relative shrink-0 w-[18vw] max-w-[120px] md:max-w-[180px]">
            <img
              src={buddySponsorLogo}
              alt="Buddy and Sponsor sync"
              className="w-full h-auto"
            />
          </div>

          {/* Right — Sponsor 3-phone group */}
          <div className="relative shrink-0 w-[28vw] max-w-[180px] md:max-w-[260px] animate-float" style={{ animationDelay: "0.5s" }}>
            <img
              src={showcaseSponsor}
              alt="Sobr sponsor app — progress dashboards"
              className="w-full h-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-amber/15 rounded-full scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
