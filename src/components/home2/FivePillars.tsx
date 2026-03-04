import { CheckCircle, Heart, TrendingUp, ShieldAlert, Layers } from "lucide-react";

const pillars = [
  {
    icon: CheckCircle,
    title: "Accountability",
    desc: "Daily check-ins, streaks, and honest tracking keep you grounded.",
  },
  {
    icon: Heart,
    title: "Support",
    desc: "Sponsor system, AI companion, and community — you're never alone.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    desc: "Visual dashboards, milestones, and journaling show how far you've come.",
  },
  {
    icon: ShieldAlert,
    title: "Crisis Help",
    desc: "Emergency flow and instant resources when it matters most.",
  },
  {
    icon: Layers,
    title: "Unified Solution",
    desc: "Everything you need in one app — no juggling multiple tools.",
  },
];

const FivePillars = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Our foundation
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            The Five Pillars of Sobr
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-sobr-card/60 border border-white/5 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-sobr-coral/10 flex items-center justify-center">
                <p.icon className="w-7 h-7 text-sobr-coral" />
              </div>
              <h3 className="text-base font-jakarta font-bold text-sobr-text">{p.title}</h3>
              <p className="text-xs text-sobr-text-muted font-inter leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FivePillars;
