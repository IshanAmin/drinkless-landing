import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";

const SavingsCalculator = () => {
  const [drinksPerWeek, setDrinksPerWeek] = useState(10);
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [costPerDrink, setCostPerDrink] = useState(8);
  
  // Calculate direct costs
  const calculateDirectCosts = () => {
    const weeklyDrinkCost = drinksPerWeek * costPerDrink;
    const monthlyDrinkCost = weeklyDrinkCost * 4.33; // Average weeks in a month
    const yearlyDrinkCost = monthlyDrinkCost * 12;
    return {
      weekly: weeklyDrinkCost,
      monthly: monthlyDrinkCost,
      yearly: yearlyDrinkCost,
    };
  };

  // Fixed opportunity costs (annual values)
  const opportunityCosts = {
    lostProductivity: {
      title: "Lost Productivity",
      description: "Reduced work performance and missed opportunities",
      value: drinksPerWeek * daysPerWeek * 100 * 52, // $100 impact per drinking day
    },
    mentalClarity: {
      title: "Mental Clarity Impact",
      description: "Reduced cognitive function and decision-making ability",
      value: drinksPerWeek * 50 * 52, // $50 per drink per week annualized
    },
    hangoverCost: {
      title: "Hangover Recovery Cost",
      description: "Lost time and productivity from hangovers",
      value: daysPerWeek * 200 * 52, // $200 per drinking day annualized
    },
    socialImpact: {
      title: "Social & Relationship Impact",
      description: "Strain on personal and professional relationships",
      value: drinksPerWeek * daysPerWeek * 75 * 52, // $75 per drinking occasion
    },
  };

  const directCosts = calculateDirectCosts();
  const totalAnnualCost = directCosts.yearly + 
    Object.values(opportunityCosts).reduce((acc, curr) => acc + curr.value, 0);

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
            True Cost Calculator
            <span className="gradient-text block">Direct & Opportunity Costs</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <div className="space-y-8">
              {/* Drinking Pattern Inputs */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="drinks-per-week">Weekly Drink Count</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="drinks-per-week"
                      type="number"
                      value={drinksPerWeek}
                      onChange={(e) => setDrinksPerWeek(Number(e.target.value))}
                      className="w-24"
                      min={0}
                    />
                    <Slider
                      value={[drinksPerWeek]}
                      onValueChange={(value) => setDrinksPerWeek(value[0])}
                      max={50}
                      step={1}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="days-per-week">Days Drinking Per Week</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="days-per-week"
                      type="number"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                      className="w-24"
                      min={0}
                      max={7}
                    />
                    <Slider
                      value={[daysPerWeek]}
                      onValueChange={(value) => setDaysPerWeek(value[0])}
                      max={7}
                      step={1}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="cost-per-drink">Cost Per Drink ($)</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="cost-per-drink"
                      type="number"
                      value={costPerDrink}
                      onChange={(e) => setCostPerDrink(Number(e.target.value))}
                      className="w-24"
                      min={0}
                    />
                    <Slider
                      value={[costPerDrink]}
                      onValueChange={(value) => setCostPerDrink(value[0])}
                      max={20}
                      step={1}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              {/* Direct Costs Display */}
              <div className="mt-8 p-4 rounded-lg bg-primary/10">
                <h3 className="text-lg font-semibold mb-2">Direct Drinking Costs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Weekly</p>
                    <p className="text-xl font-bold text-primary">{formatCurrency(directCosts.weekly)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Monthly</p>
                    <p className="text-xl font-bold text-primary">{formatCurrency(directCosts.monthly)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Yearly</p>
                    <p className="text-xl font-bold text-primary">{formatCurrency(directCosts.yearly)}</p>
                  </div>
                </div>
              </div>

              {/* Opportunity Costs Display */}
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
                </div>
              </div>

              {/* Total Annual Cost Summary */}
              <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                <h3 className="text-xl font-bold mb-2">Total Annual Impact</h3>
                <p className="text-3xl font-bold text-primary">{formatCurrency(totalAnnualCost)}</p>
                <p className="text-sm text-slate-600 mt-2">
                  Including both direct costs and estimated opportunity costs
                </p>
              </div>
            </div>
          </Card>
          
          <p className="text-sm text-slate-600 mt-4 text-center italic">
            These values are estimates based on various studies and research about alcohol's economic impact. The actual costs could vary significantly based on individual circumstances, career, location, and lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;