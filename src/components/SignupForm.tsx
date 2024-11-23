import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { useState } from "react";

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

const SignupForm = () => {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [customState, setCustomState] = useState("");
  const [customCountry, setCustomCountry] = useState("");
  
  const [formState, handleSubmit] = useForm("xzbnzwkj"); // Replace with your form ID

  if (formState.succeeded) {
    return (
      <div className="text-center p-4">
        <p className="text-lg font-semibold text-green-600">Thanks for joining!</p>
        <p className="text-sm text-slate-600">We'll keep you updated on our launch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mb-2">
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        className="h-12"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={formState.errors}
      />
      
      <Input
        id="city"
        name="city"
        type="text"
        placeholder="City"
        className="h-12"
        required
      />
      
      <div className="flex gap-4">
        <Select
          name="country"
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
            <SelectGroup>
              {COUNTRIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
              <SelectItem value="custom">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        {country === "custom" && (
          <Input
            name="customCountry"
            type="text"
            placeholder="Enter country"
            value={customCountry}
            onChange={(e) => setCustomCountry(e.target.value)}
            className="h-12"
            required
          />
        )}
      </div>

      <div className="flex gap-4">
        <Select
          name="state"
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
            <SelectGroup>
              <SelectLabel>United States</SelectLabel>
              {US_STATES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Canada</SelectLabel>
              {CANADIAN_PROVINCES.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectItem value="custom">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        {state === "custom" && (
          <Input
            name="customState"
            type="text"
            placeholder="Enter state/province"
            value={customState}
            onChange={(e) => setCustomState(e.target.value)}
            className="h-12"
            required
          />
        )}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="bg-primary hover:bg-primary/90"
        disabled={formState.submitting}
      >
        {formState.submitting ? "Requesting..." : "Request Access"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
};

export default SignupForm;
