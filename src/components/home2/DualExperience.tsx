import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Heart,
  Activity,
  Shield,
  Sparkles,
  Trophy,
  Target,
  BookOpen,
  Users,
  LayoutDashboard,
  MessageCircle,
  Bell,
  AlertTriangle,
  Award,
} from "lucide-react";

const buddyFeatures = [
  { icon: Activity, title: "Daily Check-ins", desc: "Track your mood, cravings, and progress every day." },
  { icon: Brain, title: "Soby AI Companion", desc: "24/7 AI-powered support that understands your journey." },
  { icon: Shield, title: "Crisis Flow", desc: "Instant emergency support when urges hit hardest." },
  { icon: Target, title: "Drink & Urge Tracker", desc: "Log triggers and watch your streak grow." },
  { icon: Sparkles, title: "Daily Affirmations", desc: "Personalized motivation delivered when you need it." },
  { icon: Trophy, title: "Gamification", desc: "Earn badges, climb leaderboards, unlock rewards." },
  { icon: BookOpen, title: "Mood & Trigger Journal", desc: "Reflect, learn patterns, and build resilience." },
  { icon: Award, title: "Goal Setting", desc: "Set milestones and celebrate every victory." },
];

const sponsorFeatures = [
  { icon: Users, title: "Buddy Pairing", desc: "Connect with someone you care about in one tap." },
  { icon: LayoutDashboard, title: "Real-time Dashboard", desc: "See your buddy's progress, moods, and streaks." },
  { icon: MessageCircle, title: "Live Chat", desc: "Stay connected with built-in secure messaging." },
  { icon: Bell, title: "Nudge System", desc: "Send encouragement exactly when it matters." },
  { icon: AlertTriangle, title: "Crisis Alerts", desc: "Get notified instantly if your buddy needs help." },
  { icon: Heart, title: "Shared Milestones", desc: "Celebrate wins together on the journey." },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, desc, index }: FeatureCardProps) => (
  <div
    className="group p-6 rounded-2xl bg-sobr-elevated border border-white/5 hover:border-sobr-coral/20 transition-all duration-300 animate-fade-in"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="w-12 h-12 rounded-xl bg-sobr-coral/10 flex items-center justify-center mb-4 group-hover:bg-sobr-coral/20 transition-colors">
      <Icon className="w-6 h-6 text-sobr-coral" />
    </div>
    <h3 className="text-lg font-jakarta font-bold text-sobr-text mb-2">{title}</h3>
    <p className="text-sobr-text-muted font-inter text-sm leading-relaxed">{desc}</p>
  </div>
);

const DualExperience = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Two roles, one mission
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            Built for Buddies & Sponsors
          </h2>
          <p className="text-sobr-text-secondary font-inter max-w-2xl mx-auto">
            Whether you're on the journey yourself or walking beside someone — SobrAI has you covered.
          </p>
        </div>

        <Tabs defaultValue="buddy" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-sobr-elevated border border-white/5 p-1 rounded-xl mb-10">
            <TabsTrigger
              value="buddy"
              className="rounded-lg font-jakarta font-semibold data-[state=active]:bg-sobr-coral data-[state=active]:text-sobr-text text-sobr-text-muted"
            >
              🙋 For Buddies
            </TabsTrigger>
            <TabsTrigger
              value="sponsor"
              className="rounded-lg font-jakarta font-semibold data-[state=active]:bg-sobr-coral data-[state=active]:text-sobr-text text-sobr-text-muted"
            >
              🤝 For Sponsors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buddy">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {buddyFeatures.map((f, i) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sponsor">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sponsorFeatures.map((f, i) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DualExperience;
