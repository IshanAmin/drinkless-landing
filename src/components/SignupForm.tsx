import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { addToWaitlist } from "@/utils/airtable";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

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
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [platform, setPlatform] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addToWaitlist({
        email,
        city,
        state: state === "custom" ? customState : state,
        country: country === "custom" ? customCountry : country,
        platform,
      });

      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on our launch.",
        duration: 5000,
      });

      // Reset form
      setEmail("");
      setCity("");
      setState("");
      setCountry("");
      setPlatform("");
      setCustomState("");
      setCustomCountry("");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mb-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-12"
        required
      />
      
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        className="h-12"
        required
      />
      
      <Select
        value={platform}
        onValueChange={setPlatform}
        required
      >
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Select Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="iOS">iOS</SelectItem>
            <SelectItem value="Android">Android</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

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
            type="text"
            placeholder="Enter state/province"
            value={customState}
            onChange={(e) => setCustomState(e.target.value)}
            className="h-12"
            required
          />
        )}
      </div>

      <div className="flex gap-4">
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
            type="text"
            placeholder="Enter country"
            value={customCountry}
            onChange={(e) => setCustomCountry(e.target.value)}
            className="h-12"
            required
          />
        )}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Requesting..." : "Request Access"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
};

export default SignupForm;