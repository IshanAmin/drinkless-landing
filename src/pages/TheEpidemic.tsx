import { Link } from "react-router-dom";
import { Users, Brain, Heart, PieChart, Droplet, TrendingUp, AlertTriangle } from "lucide-react";
import { primaryStatsData } from "@/components/stats/PrimaryStats";
import { demographicStatsData } from "@/components/stats/DemographicStats";
import { youthStatsData } from "@/components/stats/YouthStats";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";

const iconMap: Record<string, React.ReactNode> = {
  "Prevalence": <Users className="h-6 w-6" />,
  "Adult Americans": <Brain className="h-6 w-6" />,
  "Gender Differences": <Heart className="h-6 w-6" />,
  "Treatment Gap": <PieChart className="h-6 w-6" />,
  "Heavy Alcohol Use": <Droplet className="h-6 w-6" />,
};

const EpidemicPage = () => {
  return (
    <div className="min-h-screen sobr-dark bg-[#0B0913] text-[#FFF9F7]">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7E6B]/10 border border-[#FF7E6B]/20 text-[#FF7E6B] text-sm font-medium mb-8">
              <AlertTriangle className="h-4 w-4" />
              Understanding the Crisis
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-bold mb-6 leading-tight">
              The Alcoholism <span className="text-[#FF7E6B]">Epidemic</span>
            </h1>
            <p className="text-lg md:text-xl text-[#FFF9F7]/70 max-w-3xl mx-auto leading-relaxed font-inter">
              Alcohol Use Disorder affects nearly 29 million Americans. These aren't just numbers — they represent real people, real families, and a crisis that demands attention.
            </p>
          </div>
        </section>

        {/* Primary Stats - Large Feature Cards */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-center mb-4 animate-fade-in">
              The Scale of the Problem
            </h2>
            <p className="text-[#FFF9F7]/60 text-center mb-12 max-w-2xl mx-auto font-inter">
              Data from the 2023 National Survey on Drug Use and Health (NSDUH) reveals staggering numbers.
            </p>

            {/* Hero stat */}
            <div className="mb-12 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF7E6B]/20 via-[#251C38] to-[#181524] border border-[#FF7E6B]/20 p-8 md:p-12 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,126,107,0.1),_transparent_60%)]" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF7E6B]/20 mb-6">
                    <Users className="h-8 w-8 text-[#FF7E6B]" />
                  </div>
                  <p className="text-6xl md:text-8xl font-jakarta font-bold text-[#FF7E6B] mb-4">28.9M</p>
                  <p className="text-xl md:text-2xl font-jakarta font-semibold mb-2">Americans Affected</p>
                  <p className="text-[#FFF9F7]/60 font-inter max-w-lg mx-auto">
                    People aged 12 and older had Alcohol Use Disorder in the past year — that's 10.2% of the population.
                  </p>
                </div>
              </div>
            </div>

            {/* Remaining primary stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {primaryStatsData.slice(1).map((stat, index) => (
                <div
                  key={stat.title}
                  className="group rounded-2xl bg-[#181524] border border-[#FFF9F7]/10 p-6 hover:border-[#FF7E6B]/30 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF7E6B]/10 flex items-center justify-center text-[#FF7E6B] group-hover:bg-[#FF7E6B]/20 transition-colors">
                      {iconMap[stat.title] || <TrendingUp className="h-5 w-5" />}
                    </div>
                    <h3 className="text-sm font-semibold text-[#FFF9F7]/80 font-jakarta">{stat.title}</h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold font-jakarta text-[#FFF9F7] mb-2">{stat.value}</p>
                  <p className="text-sm text-[#FFF9F7]/50 font-inter leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demographic Breakdown */}
        <section className="py-16 md:py-24 bg-[#181524]/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">
                  Demographic <span className="text-[#FF7E6B]">Breakdown</span>
                </h2>
                <p className="text-[#FFF9F7]/60 max-w-2xl mx-auto font-inter">
                  Alcohol Use Disorder does not discriminate. It impacts every demographic — though some communities are hit harder than others.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {demographicStatsData.map((stat, index) => {
                  // Compute a percentage width for the visual bar
                  const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
                  const maxValue = 18.7; // White demographic is highest
                  const barWidth = Math.max(10, (numericValue / maxValue) * 100);

                  return (
                    <div
                      key={stat.title}
                      className="rounded-xl bg-[#0B0913] border border-[#FFF9F7]/5 p-5 hover:border-[#FF7E6B]/20 transition-all duration-500 animate-fade-in"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-sm font-semibold text-[#FFF9F7]/90 font-jakarta">{stat.title}</h3>
                        <span className="text-2xl font-bold text-[#FF7E6B] font-jakarta">{stat.value}</span>
                      </div>
                      <p className="text-xs text-[#FFF9F7]/50 font-inter mb-3">{stat.description}</p>
                      <div className="h-2 rounded-full bg-[#FFF9F7]/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#FF7E6B] to-[#FF7E6B]/50 transition-all duration-1000"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Youth Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7E6B]/10 border border-[#FF7E6B]/20 text-[#FF7E6B] text-sm font-medium mb-6">
                <AlertTriangle className="h-4 w-4" />
                Ages 12 to 17
              </div>
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">
                Youth Alcohol Use <span className="text-[#FF7E6B]">Disorder</span>
              </h2>
              <p className="text-[#FFF9F7]/60 max-w-2xl mx-auto font-inter">
                757,000 adolescents ages 12 to 17 had AUD in 2023. This is a generation at risk — and early intervention is critical.
              </p>
            </div>

            {/* Youth hero stat */}
            <div className="mb-10 animate-fade-in">
              <div className="rounded-2xl bg-gradient-to-r from-[#251C38] to-[#181524] border border-[#FFF9F7]/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="text-center md:text-left">
                  <p className="text-5xl md:text-7xl font-jakarta font-bold text-[#FF7E6B] mb-2">757K</p>
                  <p className="text-xl font-jakarta font-semibold mb-1">Youth with AUD</p>
                  <p className="text-[#FFF9F7]/50 font-inter">Ages 12 to 17 — 2.9% of this age group</p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                  <div className="rounded-xl bg-[#0B0913]/60 border border-[#FFF9F7]/5 p-4 text-center">
                    <p className="text-3xl font-bold font-jakarta text-sky-400">270K</p>
                    <p className="text-sm text-[#FFF9F7]/60 font-inter mt-1">Boys (2.0%)</p>
                  </div>
                  <div className="rounded-xl bg-[#0B0913]/60 border border-[#FFF9F7]/5 p-4 text-center">
                    <p className="text-3xl font-bold font-jakarta text-pink-400">487K</p>
                    <p className="text-sm text-[#FFF9F7]/60 font-inter mt-1">Girls (3.8%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Youth demographic breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {youthStatsData.slice(3).map((stat, index) => (
                <div
                  key={stat.title}
                  className="rounded-xl bg-[#181524] border border-[#FFF9F7]/5 p-5 hover:border-[#FF7E6B]/20 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <h3 className="text-sm font-semibold text-[#FFF9F7]/80 font-jakarta mb-2">{stat.title}</h3>
                  <p className="text-2xl font-bold text-[#FF7E6B] font-jakarta">{stat.value}</p>
                  <p className="text-xs text-[#FFF9F7]/50 font-inter mt-1">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Source & CTA */}
        <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs text-[#FFF9F7]/40 font-inter mb-8">
              Source: 2023 National Survey on Drug Use and Health (NSDUH), Substance Abuse and Mental Health Services Administration (SAMHSA).{" "}
              <a
                href="https://www.samhsa.gov/data/report/2023-nsduh-detailed-tables"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF7E6B]/60 hover:text-[#FF7E6B] underline transition-colors"
              >
                View source data
              </a>
            </p>
            <h3 className="text-2xl md:text-3xl font-jakarta font-bold mb-4">
              Recovery is <span className="text-[#FF7E6B]">Possible</span>
            </h3>
            <p className="text-[#FFF9F7]/60 font-inter mb-8 max-w-lg mx-auto">
              These numbers are alarming, but change starts with awareness. Sobr is here to help you or your loved one take the first step.
            </p>
            <Link
              to="/learn-how-to-quit-drinking"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FF7E6B] text-[#0B0913] font-semibold hover:bg-[#FF7E6B]/90 transition-colors"
            >
              Learn How Sobr Can Help
            </Link>
          </div>
        </section>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
};

export default EpidemicPage;
