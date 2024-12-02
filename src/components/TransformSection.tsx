import { Card } from "./ui/card";
import { Brain, Heart, Smile, Sun, Wallet, Battery, Clock, Award, Trophy } from "lucide-react";

const TransformSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Mental Clarity",
      description: "Experience improved focus and sharper cognitive function"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Better Health",
      description: "Boost your physical wellbeing and immune system"
    },
    {
      icon: <Smile className="w-8 h-8 text-primary" />,
      title: "Emotional Balance",
      description: "Develop healthier ways to manage stress and emotions"
    },
    {
      icon: <Sun className="w-8 h-8 text-primary" />,
      title: "More Energy",
      description: "Wake up refreshed and maintain steady energy levels"
    },
    {
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: "Financial Freedom",
      description: "Save money previously spent on alcohol"
    },
    {
      icon: <Battery className="w-8 h-8 text-primary" />,
      title: "Better Sleep",
      description: "Enjoy quality, restorative sleep every night"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time Revival",
      description: "Reclaim precious moments and create lasting memories"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Respect",
      description: "Build authentic relationships and earn genuine admiration"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Success",
      description: "Break through barriers and achieve your full potential"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The New You
            <span className="gradient-text block">Transform Your Life</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Professional success"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full h-64 object-cover hidden md:block"
            />
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="People achieving goals"
              className="rounded-lg shadow-lg w-full h-64 object-cover hidden md:block"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/20 transition-colors animate-fade-up backdrop-blur-sm bg-white/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                {benefit.icon}
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;