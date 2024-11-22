import { Check, Clock } from "lucide-react";
import { Card } from "./ui/card";

interface Feature {
  title: string;
  description: string;
  isComingSoon?: boolean;
}

const FeatureShowcase = () => {
  const features: Feature[] = [
    {
      title: "Drink Tracker",
      description: "Track your consumption with daily progress and milestones for a clear view of your success."
    },
    {
      title: "Track Urges",
      description: "Monitor and manage your urges with powerful tracking tools."
    },
    {
      title: "Stay Accountable",
      description: "Stay grounded with daily reviews that document and reflect your sobriety journey."
    },
    {
      title: "Daily Affirmations",
      description: "Stay motivated and focused with personalized daily affirmations."
    },
    {
      title: "Daily Tips",
      description: "Receive daily notifications with proven strategies for permanent change."
    },
    {
      title: "Success Stories",
      description: "Get inspired by daily stories from app graduates who successfully quit."
    },
    {
      title: "Positive Distractions",
      description: "Earn rewards while playing engaging sober games."
    },
    {
      title: "Mood Check-in",
      description: "Simple mood tracking three times daily for better self-awareness."
    },
    {
      title: "Mood & Trigger Journal",
      description: "Track your moods and identify trigger patterns."
    },
    {
      title: "Goal Setting",
      description: "Set and achieve your sobriety goals with structured support."
    },
    {
      title: "Daily Streaks",
      description: "Compete for top spots on the leaderboard with your streak."
    },
    {
      title: "Gamification",
      description: "Earn badges, points, and rewards for reaching milestones."
    },
    {
      title: "Professional Resources",
      description: "Access professional advice and support through chat or video calls.",
      isComingSoon: true
    },
    {
      title: "Community Support",
      description: "Connect and stay motivated with like-minded individuals.",
      isComingSoon: true
    },
    {
      title: "AI-Based Personalized Feedback",
      description: "Receive tailored advice based on your unique journey.",
      isComingSoon: true
    },
    {
      title: "Sunny Chatbot",
      description: "Chat with Sunny, your cheerful companion on your alcohol-free journey.",
      isComingSoon: true
    },
    {
      title: "Social Substitutes",
      description: "Explore and share mocktail recipes with our growing database.",
      isComingSoon: true
    },
    {
      title: "Mindfulness Meditation",
      description: "Practice specialized mindfulness techniques for managing cravings.",
      isComingSoon: true
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
            <span className="gradient-text block">For Your Journey</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to start your journey towards a healthier lifestyle,
            with more features coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 hover:border-primary/20 transition-colors animate-fade-up backdrop-blur-sm ${
                feature.isComingSoon ? 'bg-white/30' : 'bg-white/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                {feature.isComingSoon ? (
                  <span className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    Coming Soon
                  </span>
                ) : (
                  <Check className="h-5 w-5 text-primary" />
                )}
              </div>
              <p className="text-slate-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;