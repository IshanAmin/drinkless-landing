import sobrIcon from "@/assets/sobr-icon.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-root relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-sobr-coral/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
        <img src={sobrIcon} alt="Sobr" className="h-16 w-auto mx-auto" />

        <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold text-sobr-text max-w-2xl mx-auto leading-tight">
          Start Your Journey{" "}
          <span className="gradient-text">Today</span>
        </h2>

        <p className="text-sobr-text-secondary font-inter max-w-lg mx-auto text-lg">
          The sun is shining and a whole new world is waiting. Take the first step — for yourself or for someone you love.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-sobr-coral text-sobr-text font-jakarta font-bold text-lg hover:bg-sobr-coral-dark transition-colors shadow-lg shadow-sobr-coral/25"
          >
            I Want to Quit
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-sobr-coral/40 text-sobr-text font-jakarta font-bold text-lg hover:bg-sobr-coral/10 transition-colors"
          >
            I Want to Help Someone
          </a>
        </div>

        {/* App store badges */}
        <div className="flex gap-4 justify-center">
          <a href="https://apps.apple.com/app/id6758133222" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <img src={appStoreBadge} alt="Download on the App Store" className="h-12 w-auto" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.wpes.sobr" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
