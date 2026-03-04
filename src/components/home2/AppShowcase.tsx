import iphoneFrame from "@/assets/iphone-frame.png";

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

        <div className="flex justify-center">
          <div className="relative w-[260px] md:w-[300px] animate-float">
            <img
              src={iphoneFrame}
              alt="SobrAI app screenshot"
              className="w-full h-auto drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 blur-3xl bg-sobr-coral/15 rounded-full scale-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
