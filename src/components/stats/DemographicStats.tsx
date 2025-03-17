
import { Building2, User, Users2 } from "lucide-react";
import StatCard from "./StatCard";

export const demographicStatsData = [
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

const DemographicStats = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Demographic Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        {demographicStatsData.map((stat, index) => (
          <StatCard
            key={`demographic-${index}`}
            icon={null}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default DemographicStats;
