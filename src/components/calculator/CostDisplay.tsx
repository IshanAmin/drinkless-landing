interface CostDisplayProps {
  costs: {
    weekly: number;
    monthly: number;
    yearly: number;
  };
  formatCurrency: (amount: number) => string;
}

export const CostDisplay = ({ costs, formatCurrency }: CostDisplayProps) => {
  return (
    <div className="mt-8 p-4 rounded-lg bg-primary/10">
      <h3 className="text-lg font-semibold mb-2">Direct Drinking Costs</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-slate-600">Weekly</p>
          <p className="text-xl font-bold text-primary">{formatCurrency(costs.weekly)}</p>
        </div>
        <div>
          <p className="text-sm text-slate-600">Monthly</p>
          <p className="text-xl font-bold text-primary">{formatCurrency(costs.monthly)}</p>
        </div>
        <div>
          <p className="text-sm text-slate-600">Yearly</p>
          <p className="text-xl font-bold text-primary">{formatCurrency(costs.yearly)}</p>
        </div>
      </div>
    </div>
  );
};