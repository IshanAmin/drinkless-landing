import { Download, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download the App",
    description: "Available on iOS and Android. Free to get started.",
  },
  {
    icon: Users,
    title: "Choose Your Role",
    description: "Are you the Buddy quitting alcohol, or the Sponsor supporting them?",
  },
  {
    icon: Rocket,
    title: "Start Your Journey",
    description: "Set goals, track progress, and get 24/7 AI-powered support.",
  },
];

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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Step number + icon */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-sobr-coral/10 flex items-center justify-center">
                  <step.icon className="w-9 h-9 text-sobr-coral" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sobr-coral text-sobr-text text-xs font-bold flex items-center justify-center font-jakarta">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-xl font-jakarta font-bold text-sobr-text">
                {step.title}
              </h3>
              <p className="text-sobr-text-muted font-inter leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
