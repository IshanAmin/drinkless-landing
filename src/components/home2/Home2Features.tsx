import { Check, Clock } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  comingSoon?: boolean;
}

const ComingSoonTab = () => (
  <div className="absolute top-0 right-0 w-0 h-0 border-t-[3rem] border-t-sobr-coral border-l-[3rem] border-l-transparent z-10">
    <span className="absolute -top-[2.6rem] right-[0.15rem] text-[0.5rem] font-bold text-sobr-root rotate-45 uppercase tracking-wider leading-none font-jakarta">
      Coming<br />Soon
    </span>
  </div>
);

const Home2Features = () => {
  const features: Feature[] = [
    {
      title: "Drink Tracker",
      description: "Track your consumption with daily progress and milestones for a clear view of your success.",
    },
    {
      title: "Track Urges",
      description: "Monitor and manage your urges with powerful tracking tools.",
    },
    {
      title: "Stay Accountable",
      description: "Stay grounded with daily reviews that document and reflect your sobriety journey.",
    },
    {
      title: "Daily Affirmations",
      description: "Stay motivated and focused with personalized daily affirmations.",
      comingSoon: true,
    },
    {
      title: "Daily Tips",
      description: "Receive daily notifications with proven strategies for permanent change.",
    },
    {
      title: "Success Stories",
      description: "Get inspired by daily stories from app graduates who successfully quit.",
    },
    {
      title: "Positive Distractions",
      description: "Earn rewards while playing engaging sober games.",
    },
    {
      title: "Mood Check-in",
      description: "Simple mood tracking three times daily for better self-awareness.",
    },
    {
      title: "Soby AI Companion",
      description: "Chat with Soby, your cheerful companion on your alcohol-free journey.",
      comingSoon: true,
    },
    {
      title: "Goal Setting",
      description: "Set and achieve your sobriety goals with structured support.",
    },
    {
      title: "Daily Streaks",
      description: "Compete for top spots on the leaderboard with your streak.",
    },
    {
      title: "Gamification",
      description: "Earn badges, points, and rewards for reaching milestones.",
      comingSoon: true,
    },
  ];

  const comingSoonFeatures = [
    {
      title: "Professional Resources",
      description: "Access professional advice and support through chat or video calls.",
    },
    {
      title: "Community Support",
      description: "Connect and stay motivated with like-minded individuals.",
    },
    {
      title: "AI-Based Personalized Feedback",
      description: "Receive tailored advice based on your unique journey.",
    },
    {
      title: "Mood & Trigger Journal",
      description: "Track your moods and identify trigger patterns.",
    },
    {
      title: "Social Substitutes",
      description: "Explore and share mocktail recipes with our growing database.",
    },
    {
      title: "Mindfulness Meditation",
      description: "Practice specialized mindfulness techniques for managing cravings.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-sobr-root relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sobr-coral/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Everything You Need
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            Powerful Mobile Features
          </h2>
          <p className="text-sobr-text-secondary font-inter max-w-xl mx-auto">
            Everything you need to start your journey towards a healthier lifestyle, with more features coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-6 rounded-2xl bg-sobr-card/60 border border-white/5 hover:border-sobr-coral/20 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {feature.comingSoon && <ComingSoonTab />}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-jakarta font-semibold text-base text-sobr-text">{feature.title}</h3>
                <Check className="h-5 w-5 text-sobr-coral shrink-0" />
              </div>
              <p className="text-sm text-sobr-text-muted font-inter leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-sobr-text-muted" />
            <h3 className="text-xl font-jakarta font-semibold text-sobr-text">Future Roadmap</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {comingSoonFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col space-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-jakarta font-semibold text-sobr-text">{feature.title}</h4>
                <p className="text-sm text-sobr-text-muted font-inter">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Features;
