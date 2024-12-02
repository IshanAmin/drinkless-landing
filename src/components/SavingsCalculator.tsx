import { useState } from "react";
import { Card } from "./ui/card";
import { InputSection } from "./calculator/InputSection";
import { CostDisplay } from "./calculator/CostDisplay";
import { OpportunityCostsDisplay } from "./calculator/OpportunityCostsDisplay";
import { calculateDirectCosts, calculateOpportunityCosts } from "../utils/costCalculations";

const SavingsCalculator = () => {
  const [dailyDrinks, setDailyDrinks] = useState(3);
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [costPerDrink, setCostPerDrink] = useState(8);
  
  const directCosts = calculateDirectCosts(dailyDrinks, daysPerWeek, costPerDrink);
  const opportunityCosts = calculateOpportunityCosts(dailyDrinks, daysPerWeek);
  
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
            Your True Drinking Cost
            <span className="gradient-text block">Direct & Opportunity Costs</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <div className="space-y-8">
              <InputSection
                dailyDrinks={dailyDrinks}
                setDailyDrinks={setDailyDrinks}
                daysPerWeek={daysPerWeek}
                setDaysPerWeek={setDaysPerWeek}
                costPerDrink={costPerDrink}
                setCostPerDrink={setCostPerDrink}
              />
              
              <CostDisplay costs={directCosts} formatCurrency={formatCurrency} />
              
              <OpportunityCostsDisplay 
                opportunityCosts={opportunityCosts}
                formatCurrency={formatCurrency}
                dailyDrinks={dailyDrinks}
              />

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