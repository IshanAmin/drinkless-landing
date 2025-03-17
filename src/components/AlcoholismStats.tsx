
import { Users, Brain, Heart, PieChart, Droplet, LineChart } from "lucide-react";

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
  const stats = [
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
          {stats.map((stat, index) => (
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
      </div>
    </section>
  );
};

export default AlcoholismStats;
