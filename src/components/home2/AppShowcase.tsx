import showcaseBuddy from "@/assets/showcase-buddy.png";
import showcaseSponsor from "@/assets/showcase-sponsor.png";
import buddySponsorLogo from "@/assets/buddy-sponsor-logo.png";
import buddySponsorChat from "@/assets/buddy-sponsor-chat.png";
import groundRulesFull from "@/assets/ground-rules-full.png";
import aiInsightsBuddy from "@/assets/ai-insights-buddy.png";
import aiInsightsSponsor from "@/assets/ai-insights-sponsor.png";
import buddyLayoutFull from "@/assets/buddy-layout-full.png";

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
            Detailed Logging and Tracking
          </h2>
          <p className="text-sobr-text-secondary font-inter max-w-xl mx-auto">
            Designed with care — every screen is built to support, encourage, and empower you on your journey.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 max-w-full">
          {/* Left — Buddy single phone */}
          <div className="relative shrink-0 h-[40vw] max-h-[280px] md:max-h-[420px] animate-float">
            <img
              src={showcaseBuddy}
              alt="Sobr buddy app — daily check-ins"
              className="h-full w-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-coral/20 rounded-full scale-75" />
          </div>

          {/* Center — Buddy ↔ Sponsor logo */}
          <div className="relative shrink-0 h-[15vw] max-h-[105px] md:max-h-[150px]">
            <img
              src={buddySponsorLogo}
              alt="Buddy and Sponsor sync"
              className="h-full w-auto"
            />
          </div>

          {/* Right — Sponsor 3-phone group */}
          <div className="relative shrink-0 h-[40vw] max-h-[280px] md:max-h-[420px] animate-float" style={{ animationDelay: "0.5s" }}>
            <img
              src={showcaseSponsor}
              alt="Sobr sponsor app — progress dashboards"
              className="h-full w-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-amber/15 rounded-full scale-75" />
          </div>
        </div>

      </div>

      {/* Second showcase — Buddy ↔ Sponsor chat in alternating section */}
      <div className="mt-20 md:mt-28 -mb-20 md:-mb-28 bg-sobr-card py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
              Stay Connected 24/7
            </p>
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
              Buddy ↔ Sponsor Chat & Push Notifications
            </h2>
            <p className="text-sobr-text-secondary font-inter max-w-xl mx-auto">
              Real-time Custom Push Notification from Sponsor to keep Buddy on Track!
            </p>
          </div>
          <div className="flex items-center justify-center max-w-full">
            <img
              src={buddySponsorChat}
              alt="Buddy and Sponsor chat flow — nudges and templates"
              className="w-full max-w-4xl h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Third showcase — Sponsor sets Ground Rules for Buddy */}
      <div className="mt-20 md:mt-28 -mb-20 md:-mb-28 bg-sobr-root py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
              Accountability
            </p>
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
              Sponsor Sets the Ground Rules
            </h2>
            <p className="text-sobr-text-secondary font-inter max-w-xl mx-auto">
              Sponsors create personalized rules — Buddies see them right on their home screen to stay on track.
            </p>
          </div>
          <div className="flex items-center justify-center max-w-full">
            <img
              src={groundRulesFull}
              alt="Sponsor sets ground rules and AI insights for Buddy to follow"
              className="w-full max-w-3xl h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Fourth showcase — Soby AI Insights */}
      <div className="mt-20 md:mt-28 -mb-20 md:-mb-28 bg-sobr-card py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
              Powered by Soby
            </p>
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
              AI Insights & Recommendations
            </h2>
            <p className="text-sobr-text-secondary font-inter max-w-xl mx-auto">
              Soby, our AI mascot, analyzes your journey and surfaces personalized insights and next steps — for both Buddies and Sponsors.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 max-w-full">
            {/* Left — Buddy AI insights phone */}
            <div className="relative shrink-0 h-[55vw] max-h-[420px] md:max-h-[620px] animate-float">
              <img
                src={aiInsightsBuddy}
                alt="Soby AI Insights — Buddy journey analysis and recommendations"
                className="h-full w-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-coral/20 rounded-full scale-75" />
            </div>

            {/* Center — Buddy ↔ Sponsor logo */}
            <div className="relative shrink-0 h-[18vw] max-h-[140px] md:max-h-[200px]">
              <img
                src={buddySponsorLogo}
                alt="Buddy and Sponsor sync"
                className="h-full w-auto"
              />
            </div>

            {/* Right — Sponsor AI insights phone */}
            <div className="relative shrink-0 h-[55vw] max-h-[420px] md:max-h-[620px] animate-float" style={{ animationDelay: "0.5s" }}>
              <img
                src={aiInsightsSponsor}
                alt="Soby AI Insights — Sponsor recommended support actions"
                className="h-full w-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-amber/15 rounded-full scale-75" />
            </div>
          </div>
        </div>
      </div>

      {/* Fifth showcase — Buddy app layout overview */}
      <div className="mt-20 md:mt-28 -mb-20 md:-mb-28 bg-sobr-root py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
              Built for the Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
              Everything Buddies Need, In One Place
            </h2>
            <p className="text-sobr-text-secondary font-inter max-w-2xl mx-auto">
              From crisis support and relapse prevention to curated activities and selfie progress timelapses — every screen is designed to help Buddies stay strong, every day.
            </p>
          </div>
          <div className="flex items-center justify-center max-w-full">
            <img
              src={buddyLayoutFull}
              alt="Sobr Buddy app layout — Emergency Support, relapse prevention, activities, and selfie progress"
              className="w-full max-w-5xl h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
