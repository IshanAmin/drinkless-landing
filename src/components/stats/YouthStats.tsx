
import YouthStatCard from "./YouthStatCard";

export const youthStatsData = [
  {
    title: "Total Youth AUD",
    value: "757K",
    description: "Youth ages 12 to 17 (2.9% in this age group)",
    color: "bg-blue-50"
  },
  {
    title: "Boys",
    value: "270K",
    description: "Boys ages 12 to 17 (2.0% in this age group)",
    color: "bg-sky-50"
  },
  {
    title: "Girls",
    value: "487K",
    description: "Girls ages 12 to 17 (3.8% in this age group)",
    color: "bg-pink-50"
  },
  {
    title: "American Indian/Alaska Native",
    value: "5K",
    description: "Youth ages 12 to 17 (2.3% in this age group)",
    color: "bg-orange-50"
  },
  {
    title: "Asian",
    value: "15K",
    description: "Youth ages 12 to 17 (1.0% in this age group)",
    color: "bg-cyan-50"
  },
  {
    title: "Black/African American",
    value: "46K",
    description: "Youth ages 12 to 17 (1.3% in this age group)",
    color: "bg-gray-50"
  },
  {
    title: "White",
    value: "438K",
    description: "Youth ages 12 to 17 (3.4% in this age group)",
    color: "bg-violet-50"
  },
  {
    title: "Two or More Races",
    value: "28K",
    description: "Youth ages 12 to 17 (3.0% in this age group)",
    color: "bg-fuchsia-50"
  },
  {
    title: "Hispanic/Latino",
    value: "223K",
    description: "Youth ages 12 to 17 (3.3% in this age group)",
    color: "bg-amber-50/70"
  }
];

const YouthStats = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">Youth Alcohol Use Disorder</h3>
      <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
        Alcohol use disorder (AUD) among adolescents. 757,000 adolescents ages 12 to 17 had AUD in 2023. Source: 2023 NSDUH.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        {youthStatsData.map((stat, index) => (
          <YouthStatCard
            key={`youth-${index}`}
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

export default YouthStats;
