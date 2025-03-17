
import { Brain, Droplet, Heart, PieChart, Users } from "lucide-react";
import StatCard from "./StatCard";

export const primaryStatsData = [
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

const PrimaryStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {primaryStatsData.map((stat, index) => (
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
  );
};

export default PrimaryStats;
