
import { Card } from "./ui/card";
import { Brain, Heart, Smile, Sun, Wallet, Battery, Clock, Award, Trophy } from "lucide-react";
import { useRef, useEffect } from "react";

const TransformSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            The New You
            <span className="gradient-text block animate-gradient bg-size-200">Transform Your Life</span>
          </h2>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation opacity-0 transition-opacity duration-500">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/20 transition-all duration-300 hover-lift backdrop-blur-sm bg-white/50 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="animate-float">
                  {benefit.icon}
                </div>
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
