import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";

const SavingsCalculator = () => {
  const [storeSpending, setStoreSpending] = useState(50);
  const [barSpending, setBarSpending] = useState(100);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);

  useEffect(() => {
    const weeklySavings = storeSpending + barSpending;
    const monthly = weeklySavings * 4.33; // Average weeks in a month
    const yearly = monthly * 12;
    
    setMonthlySavings(monthly);
    setYearlySavings(yearly);
  }, [storeSpending, barSpending]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your Savings
            <span className="gradient-text block">See How Much You'll Save</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <div className="space-y-8">
              {/* Store Spending Input */}
              <div className="space-y-4">
                <Label htmlFor="store-spending">Weekly Spending at Stores</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="store-spending"
                    type="number"
                    value={storeSpending}
                    onChange={(e) => setStoreSpending(Number(e.target.value))}
                    className="w-24"
                    min={0}
                  />
                  <Slider
                    value={[storeSpending]}
                    onValueChange={(value) => setStoreSpending(value[0])}
                    max={500}
                    step={5}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Bar Spending Input */}
              <div className="space-y-4">
                <Label htmlFor="bar-spending">Weekly Spending at Bars</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="bar-spending"
                    type="number"
                    value={barSpending}
                    onChange={(e) => setBarSpending(Number(e.target.value))}
                    className="w-24"
                    min={0}
                  />
                  <Slider
                    value={[barSpending]}
                    onValueChange={(value) => setBarSpending(value[0])}
                    max={500}
                    step={5}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Savings Display */}
              <div className="mt-8 space-y-4 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <p className="text-sm text-slate-600 mb-1">Monthly Savings</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(monthlySavings)}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10">
                    <p className="text-sm text-slate-600 mb-1">Yearly Savings</p>
                    <p className="text-3xl font-bold text-secondary">
                      {formatCurrency(yearlySavings)}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  Based on your weekly spending of {formatCurrency(storeSpending + barSpending)}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;