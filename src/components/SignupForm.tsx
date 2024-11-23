import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Command } from "cmdk";

interface SignupFormProps {
  onSubmit: (data: { 
    email: string; 
    city: string; 
    state: string;
    country: string;
  }) => void;
  isLoading?: boolean;
}

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", 
  "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  "District of Columbia"
];

const CANADIAN_PROVINCES = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
  "Northwest Territories", "Nunavut", "Yukon"
];

const COUNTRIES = ["United States", "Canada"];

const SignupForm = ({ onSubmit, isLoading }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [customState, setCustomState] = useState("");
  const [customCountry, setCustomCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      email, 
      city, 
      state: state || customState, 
      country: country || customCountry 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mb-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12"
        required
        disabled={isLoading}
      />
      
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="h-12"
          required
          disabled={isLoading}
        />
        
        <Select
          value={country}
          onValueChange={(value) => {
            setCountry(value);
            setCustomCountry("");
          }}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
            <SelectItem value="custom">Other</SelectItem>
          </SelectContent>
        </Select>
        
        {country === "custom" && (
          <Input
            type="text"
            placeholder="Enter country"
            value={customCountry}
            onChange={(e) => setCustomCountry(e.target.value)}
            className="h-12"
            required
            disabled={isLoading}
          />
        )}
      </div>

      <div className="flex gap-4">
        <Select
          value={state}
          onValueChange={(value) => {
            setState(value);
            setCustomState("");
          }}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select State/Province" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="" disabled>United States</SelectItem>
            {US_STATES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
            <SelectItem value="" disabled>Canada</SelectItem>
            {CANADIAN_PROVINCES.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
            <SelectItem value="custom">Other</SelectItem>
          </SelectContent>
        </Select>

        {state === "custom" && (
          <Input
            type="text"
            placeholder="Enter state/province"
            value={customState}
            onChange={(e) => setCustomState(e.target.value)}
            className="h-12"
            required
            disabled={isLoading}
          />
        )}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="bg-primary hover:bg-primary/90"
        disabled={isLoading}
      >
        {isLoading ? "Requesting..." : "Request Access"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
};

export default SignupForm;