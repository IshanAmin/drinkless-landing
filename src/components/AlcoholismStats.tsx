import { useState } from "react";
import { Users, Brain, Heart, PieChart, Droplet, ChevronDown, User, Users2, Building2, School } from "lucide-react";
import { Button } from "@/components/ui/button";

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
}

const StatCard = ({ icon, title, value, description, color }: StatCardProps) => {
  return (
    <div className={`${color} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl animate-fade-in`}>
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-white/90 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-3xl font-bold mb-3 text-center">{value}</p>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  );
}

const AlcoholismStats = () => {
  const [showMoreStats, setShowMoreStats] = useState(false);
  const [showYouthStats, setShowYouthStats] = useState(false);

  const primaryStats = [
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Prevalence",
      value: "28.9M",
      description: "People aged 12+ had AUD in the past year (10.2% of population)",
      color: "bg-indigo-50"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "Adult Americans",
      value: "18M",
      description: "Adults have an alcohol use disorder causing distress and harm",
      color: "bg-purple-50"
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Gender Differences",
      value: "9.2M vs 5.3M",
      description: "Men vs women had AUD in the past year",
      color: "bg-pink-50"
    },
    {
      icon: <PieChart className="h-8 w-8 text-amber-600" />,
      title: "Treatment Gap",
      value: "Only 7.9%",
      description: "Of people with past-year AUD received treatment",
      color: "bg-amber-50"
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
      title: "Heavy Alcohol Use",
      value: "16.3M",
      description: "Adults reported heavy alcohol use in the past month (6.3%)",
      color: "bg-sky-50"
    }
  ];

  const additionalStats = [
    {
      icon: <User className="h-8 w-8 text-emerald-600" />,
      title: "Males",
      value: "16.8M",
      description: "Males ages 12 and older (12.1% in this age group)",
      color: "bg-emerald-50"
    },
    {
      icon: <User className="h-8 w-8 text-rose-600" />,
      title: "Females",
      value: "12.0M",
      description: "Females ages 12 and older (8.3% in this age group)",
      color: "bg-rose-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-orange-600" />,
      title: "American Indian/Alaska Native",
      value: "156K",
      description: "People ages 12 and older (11.6% in this age group)",
      color: "bg-orange-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-cyan-600" />,
      title: "Asian",
      value: "994K",
      description: "People ages 12 and older (5.7% in this age group)",
      color: "bg-cyan-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-gray-600" />,
      title: "Black/African American",
      value: "3.3M",
      description: "People ages 12 and older (9.6% in this age group)",
      color: "bg-gray-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-teal-600" />,
      title: "Native Hawaiian/Pacific Islander",
      value: "88K",
      description: "People ages 12 and older (7.9% in this age group)",
      color: "bg-teal-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-violet-600" />,
      title: "White",
      value: "18.7M",
      description: "People ages 12 and older (11.0% in this age group)",
      color: "bg-violet-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-fuchsia-600" />,
      title: "Two or More Races",
      value: "841K",
      description: "People ages 12 and older (13.6% in this age group)",
      color: "bg-fuchsia-50"
    },
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Hispanic/Latino",
      value: "4.8M",
      description: "People ages 12 and older (10.8% in this age group)",
      color: "bg-amber-50/70"
    }
  ];

  const youthStats = [
    {
      icon: <School className="h-8 w-8 text-blue-600" />,
      title: "Total Youth AUD",
      value: "757K",
      description: "Youth ages 12 to 17 (2.9% in this age group)",
      color: "bg-blue-50"
    },
    {
      icon: <User className="h-8 w-8 text-sky-600" />,
      title: "Boys",
      value: "270K",
      description: "Boys ages 12 to 17 (2.0% in this age group)",
      color: "bg-sky-50"
    },
    {
      icon: <User className="h-8 w-8 text-pink-600" />,
      title: "Girls",
      value: "487K",
      description: "Girls ages 12 to 17 (3.8% in this age group)",
      color: "bg-pink-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-orange-600" />,
      title: "American Indian/Alaska Native",
      value: "5K",
      description: "Youth ages 12 to 17 (2.3% in this age group)",
      color: "bg-orange-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-cyan-600" />,
      title: "Asian",
      value: "15K",
      description: "Youth ages 12 to 17 (1.0% in this age group)",
      color: "bg-cyan-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-gray-600" />,
      title: "Black/African American",
      value: "46K",
      description: "Youth ages 12 to 17 (1.3% in this age group)",
      color: "bg-gray-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-violet-600" />,
      title: "White",
      value: "438K",
      description: "Youth ages 12 to 17 (3.4% in this age group)",
      color: "bg-violet-50"
    },
    {
      icon: <Users2 className="h-8 w-8 text-fuchsia-600" />,
      title: "Two or More Races",
      value: "28K",
      description: "Youth ages 12 to 17 (3.0% in this age group)",
      color: "bg-fuchsia-50"
    },
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Hispanic/Latino",
      value: "223K",
      description: "Youth ages 12 to 17 (3.3% in this age group)",
      color: "bg-amber-50/70"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Alcoholism Epidemic</h2>
          <p className="text-slate-600">
            Recent statistics highlight the widespread impact of alcohol use disorders in the United States
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {primaryStats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <Button 
            variant="outline" 
            onClick={() => setShowMoreStats(!showMoreStats)}
            className="flex items-center gap-2 group"
          >
            {showMoreStats ? "Hide" : "Show"} Demographic Statistics
            <ChevronDown className={`h-4 w-4 transition-transform ${showMoreStats ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {showMoreStats && (
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Demographic Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {additionalStats.map((stat, index) => (
                <StatCard
                  key={`additional-${index}`}
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  color={stat.color}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8 mb-4">
          <Button 
            variant="outline" 
            onClick={() => setShowYouthStats(!showYouthStats)}
            className="flex items-center gap-2 group"
          >
            {showYouthStats ? "Hide" : "Show me"} the AUD in Youths! (Ages 12 to 17)
            <ChevronDown className={`h-4 w-4 transition-transform ${showYouthStats ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {showYouthStats && (
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">Youth Alcohol Use Disorder</h3>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Alcohol use disorder (AUD) among adolescents. 757,000 adolescents ages 12 to 17 had AUD in 2023. Source: 2023 NSDUH.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {youthStats.map((stat, index) => (
                <StatCard
                  key={`youth-${index}`}
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  color={stat.color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlcoholismStats;
