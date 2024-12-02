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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-16 px-4">
            <img 
              src="/lovable-uploads/72f68afc-389c-4e4f-9cd6-ae3875938caf.png"
              alt="Scrabble tiles spelling YES YOU CAN"
              className="rounded-xl shadow-lg w-full h-64 object-contain p-4"
            />
            <img 
              src="/lovable-uploads/900358d8-fd7d-4564-8bcc-b33c229c5d96.png"
              alt="Scrabble tiles spelling IF NOT NOW WHEN"
              className="rounded-xl shadow-lg w-full h-64 object-contain p-4 md:block"
            />
            <img 
              src="/lovable-uploads/ee84d0eb-883d-4553-be8c-3395e010c74a.png"
              alt="Scrabble tiles spelling STOP MAKING EXCUSES"
              className="rounded-xl shadow-lg w-full h-64 object-contain p-4 md:block"
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