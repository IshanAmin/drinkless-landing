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

        {/* Mobile layout: stacked */}
        <div className="md:hidden flex flex-col items-center gap-8 max-w-xs mx-auto">
          {/* Step 1 */}
          <Step icon={Download} num={1} title="Download the App" desc="Available on iOS and Android. Free to get started." />
          <Arrow direction="down" />
          {/* Step 2 */}
          <Step icon={Users} num={2} title="Choose Your Role" desc="Are you the Buddy quitting alcohol, or the Sponsor supporting them?" />
          <Arrow direction="down" />
          {/* Buddy */}
          <Step icon={Rocket} num={3} title={<>Start Your Journey <span className="font-extrabold">As Buddy</span></>} desc="Set goals, track progress, and get 24/7 AI-powered support." />
          {/* Sobr Link */}
          <img src={sobrLink} alt="Sobr Link" className="w-20 h-auto" />
          {/* Sponsor */}
          <Step icon={Rocket} num={3} title={<>Start Your Journey <span className="font-extrabold">As Sponsor</span></>} desc="Set goals, track progress, and get 24/7 AI-powered support." />
        </div>

        {/* Desktop layout: left steps + right split */}
        <div className="hidden md:grid grid-cols-12 gap-6 max-w-6xl mx-auto items-center">
          {/* Step 1 — cols 1-3 */}
          <div className="col-span-3">
            <Step icon={Download} num={1} title="Download the App" desc="Available on iOS and Android. Free to get started." />
          </div>

          {/* Arrow → cols 4 */}
          <div className="col-span-1 flex items-center justify-center">
            <Arrow direction="right" />
          </div>

          {/* Step 2 — cols 5-7 */}
          <div className="col-span-3">
            <Step icon={Users} num={2} title="Choose Your Role" desc="Are you the Buddy quitting alcohol, or the Sponsor supporting them?" />
          </div>

          {/* Arrow → cols 8 */}
          <div className="col-span-1 flex items-center justify-center">
            <Arrow direction="right" />
          </div>

          {/* Right split — cols 9-12 */}
          <div className="col-span-4 flex flex-col items-center gap-4">
            {/* Buddy step 3 */}
            <Step icon={Rocket} num={3} title={<>Start Your Journey <span className="font-extrabold">As Buddy</span></>} desc="Set goals, track progress, and get 24/7 AI-powered support." />

            {/* Sobr Link logo */}
            <img src={sobrLink} alt="Sobr Link — connecting Buddy and Sponsor" className="w-24 h-auto my-2" />

            {/* Sponsor step 3 */}
            <Step icon={Rocket} num={3} title={<>Start Your Journey <span className="font-extrabold">As Sponsor</span></>} desc="Set goals, track progress, and get 24/7 AI-powered support." />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable step card */
function Step({
  icon: Icon,
  num,
  title,
  desc,
}: {
  icon: React.ElementType;
  num: number;
  title: React.ReactNode;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-sobr-coral/10 flex items-center justify-center">
          <Icon className="w-9 h-9 text-sobr-coral" />
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sobr-coral text-sobr-text text-xs font-bold flex items-center justify-center font-jakarta">
          {num}
        </span>
      </div>
      <h3 className="text-xl font-jakarta font-bold text-sobr-text">{title}</h3>
      <p className="text-sobr-text-muted font-inter leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}

/* Reusable arrow */
function Arrow({ direction }: { direction: "right" | "down" }) {
  if (direction === "down") {
    return (
      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-sobr-coral">
        <path d="M12 4V32M12 32L5 24M12 32L19 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-sobr-coral">
      <path d="M4 12H32M32 12L24 5M32 12L24 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default HowItWorks;
