import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Smartphone, CheckCircle, ArrowRight, Brain, Heart, Star, Trophy, Users, Shield, Clock, Target, Sparkles } from "lucide-react";
import FeatureShowcase from "@/components/FeatureShowcase";
import WaitlistCTA from "@/components/WaitlistCTA";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our launch.",
      duration: 5000,
    });
    setEmail("");
  };

  const features = [
    {
      icon: Brain,
      title: "Clear Mind",
      description: "Experience improved mental clarity and focus"
    },
    {
      icon: Heart,
      title: "Better Health",
      description: "Enhance your overall physical wellbeing"
    },
    {
      icon: Star,
      title: "Quality Sleep",
      description: "Enjoy deeper, more restful nights"
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Track your progress and celebrate wins"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded individuals"
    },
    {
      icon: Shield,
      title: "Protection",
      description: "Guard your mental and physical health"
    },
    {
      icon: Clock,
      title: "More Time",
      description: "Reclaim your precious time and energy"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and achieve meaningful goals"
    },
    {
      icon: Sparkles,
      title: "New You",
      description: "Discover your best self every day"
    }
  ];

  const clinicalStudies = [
    {
      title: "Self-Monitoring in Alcohol Treatment",
      study: "Moos, R. H., & Moos, B. S. (2007). \"Rates and predictors of relapse during the first year after treatment for alcohol use disorders.\" Journal of Studies on Alcohol and Drugs.",
      findings: "This research indicates that patients who actively monitor their drinking behavior and triggers are better able to manage their alcohol use after treatment. The act of keeping track can provide insights that lead to better coping strategies."
    },
    {
      title: "The Alcohol Use Disorders Identification Test (AUDIT)",
      study: "Babor, T. F., de la Fuente, J. R., Saunders, J., & Grant, M. (2001). \"AUDIT: The Alcohol Use Disorders Identification Test: Guidelines for Use in Primary Care.\" World Health Organization.",
      findings: "This tool not only helps to identify individuals with hazardous or harmful drinking patterns but also emphasizes the importance of self-monitoring as part of treatment. The feedback from tracking can motivate individuals to reduce their consumption."
    },
    {
      title: "Behavioral Interventions",
      study: "Heather, N., & Riper, H. (2016). \"Reducing alcohol consumption: the role of self-monitoring and feedback.\" Alcohol Research UK.",
      findings: "This review highlights the effectiveness of self-monitoring combined with personalized feedback in reducing alcohol consumption. Individuals who track their drinking behaviors typically show a significant decrease in intake."
    },
    {
      title: "The Role of Technology",
      study: "Riper, H., et al. (2014). \"Effectiveness of web-based interventions for problematic alcohol use: a meta-analysis.\" BMC Public Health.",
      findings: "This meta-analysis included studies where participants used mobile apps or online platforms to track their drinking, and it found significant reductions in alcohol consumption. The monitoring aspect played a critical role in these outcomes."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold gradient-text">drinkless</h1>
          <Button variant="ghost">Contact</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Start Your Life's Success Story
            <span className="gradient-text block">Live Better Today</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12">
            Join thousands of individuals on their journey to a healthier, alcohol-free lifestyle.
            Be the first to know when we launch.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              required
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="flex justify-center gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Non-Invasive</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Private & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Clinically Approved</span>
            </div>
          </div>
        </div>

        {/* App Screenshots Section */}
        <div className="mt-24 mb-24">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative w-64 h-[500px] transform -rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white">
                <img src="/placeholder.svg" alt="App Screenshot 1" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative w-64 h-[500px] transform translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white shadow-2xl z-10">
                <img src="/placeholder.svg" alt="App Screenshot 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative w-64 h-[500px] transform rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-[3rem] blur-xl" />
              <div className="relative w-full h-full border-8 border-black rounded-[3rem] overflow-hidden bg-white">
                <img src="/placeholder.svg" alt="App Screenshot 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* The New You Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The New You
              <span className="gradient-text block">Transform Your Life</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Showcase Section */}
        <FeatureShowcase />

        {/* Clinical Studies Section */}
        <div className="container mx-auto px-4 py-24 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Clinically Proven
              <span className="gradient-text block">Research-Backed Approach</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our approach is grounded in extensive clinical research and proven methodologies.
              Here are some key studies that validate our methods:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {clinicalStudies.map((study, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 gradient-text">{study.title}</h3>
                <div className="space-y-4">
                  <p className="text-sm text-slate-500 italic">{study.study}</p>
                  <p className="text-slate-600">{study.findings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Waitlist CTA */}
        <WaitlistCTA />
      </main>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2024 drinkless. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Omaha, Nebraska
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
