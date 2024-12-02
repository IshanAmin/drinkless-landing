import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

interface InputSectionProps {
  dailyDrinks: number;
  setDailyDrinks: (value: number) => void;
  daysPerWeek: number;
  setDaysPerWeek: (value: number) => void;
  costPerDrink: number;
  setCostPerDrink: (value: number) => void;
}

export const InputSection = ({
  dailyDrinks,
  setDailyDrinks,
  daysPerWeek,
  setDaysPerWeek,
  costPerDrink,
  setCostPerDrink,
}: InputSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label htmlFor="drinks-per-day">Daily Drink Count</Label>
        <div className="flex items-center gap-4">
          <Input
            id="drinks-per-day"
            type="number"
            value={dailyDrinks}
            onChange={(e) => setDailyDrinks(Number(e.target.value))}
            className="w-24"
            min={0}
          />
          <Slider
            value={[dailyDrinks]}
            onValueChange={(value) => setDailyDrinks(value[0])}
            max={20}
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
  );
};