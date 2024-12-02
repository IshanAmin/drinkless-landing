export const calculateDirectCosts = (dailyDrinks: number, daysPerWeek: number, costPerDrink: number) => {
  const weeklyDrinkCount = dailyDrinks * daysPerWeek;
  const weeklyDrinkCost = weeklyDrinkCount * costPerDrink;
  const monthlyDrinkCost = weeklyDrinkCost * 4.33; // Average weeks in a month
  const yearlyDrinkCost = monthlyDrinkCost * 12;
  
  return {
    weekly: weeklyDrinkCost,
    monthly: monthlyDrinkCost,
    yearly: yearlyDrinkCost,
  };
};

export const calculateOpportunityCosts = (dailyDrinks: number, daysPerWeek: number) => {
  const weeklyDrinkCount = dailyDrinks * daysPerWeek;
  
  return {
    lostProductivity: {
      title: "Lost Productivity",
      description: "Reduced work performance and missed opportunities",
      value: weeklyDrinkCount * daysPerWeek * 100 * 52,
    },
    mentalClarity: {
      title: "Mental Clarity Impact",
      description: "Reduced cognitive function and decision-making ability",
      value: weeklyDrinkCount * 50 * 52,
    },
    hangoverCost: {
      title: "Hangover Recovery Cost",
      description: "Lost time and productivity from hangovers",
      value: daysPerWeek * 200 * 52,
    },
    socialImpact: {
      title: "Social & Relationship Impact",
      description: "Strain on personal and professional relationships",
      value: weeklyDrinkCount * daysPerWeek * 75 * 52,
    },
  };
};