interface OpportunityCost {
  title: string;
  description: string;
  value: number;
}

interface OpportunityCostsDisplayProps {
  opportunityCosts: Record<string, OpportunityCost>;
  formatCurrency: (amount: number) => string;
  dailyDrinks: number;
}

export const OpportunityCostsDisplay = ({ 
  opportunityCosts, 
  formatCurrency,
  dailyDrinks,
}: OpportunityCostsDisplayProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Annual Opportunity Costs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(opportunityCosts).map(([key, cost]) => (
          <div key={key} className="p-4 rounded-lg bg-secondary/10">
            <p className="font-semibold text-secondary">{cost.title}</p>
            <p className="text-sm text-slate-600 mb-2">{cost.description}</p>
            <p className="text-xl font-bold text-secondary">{formatCurrency(cost.value)}</p>
          </div>
        ))}
        <div className="p-4 rounded-lg bg-secondary/10 md:col-span-2">
          <p className="font-semibold text-secondary">Respect Cost</p>
          <p className="text-sm text-slate-600 mb-2">Impact on self-respect and dignity</p>
          <p className="text-xl font-bold text-secondary">
            {dailyDrinks === 0 ? "All the Respect" : "Personal Reflection Required"}
          </p>
        </div>
      </div>
    </div>
  );
};