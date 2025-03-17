
import { useState } from "react";
import PrimaryStats from "./stats/PrimaryStats";
import DemographicStats from "./stats/DemographicStats";
import YouthStats from "./stats/YouthStats";
import ExpandableSection from "./stats/ExpandableSection";
import ReferencesDialog from "./stats/ReferencesDialog";

const AlcoholismStats = () => {
  const [showMoreStats, setShowMoreStats] = useState(false);
  const [showYouthStats, setShowYouthStats] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Alcoholism Epidemic</h2>
          <p className="text-slate-600">
            Recent statistics highlight the widespread impact of alcohol use disorders in the United States
          </p>
        </div>
        
        <PrimaryStats />

        <ExpandableSection 
          isExpanded={showMoreStats}
          onToggle={() => setShowMoreStats(!showMoreStats)}
          buttonText={{
            show: "Show More Demographic Statistics",
            hide: "Hide Demographic Statistics"
          }}
        >
          <DemographicStats />
        </ExpandableSection>

        <ExpandableSection 
          isExpanded={showYouthStats}
          onToggle={() => setShowYouthStats(!showYouthStats)}
          buttonText={{
            show: "Show me the AUD in Youths! (Ages 12 to 17)",
            hide: "Hide the AUD in Youths! (Ages 12 to 17)"
          }}
        >
          <YouthStats />
        </ExpandableSection>
        
        <ReferencesDialog />
      </div>
    </section>
  );
};

export default AlcoholismStats;
