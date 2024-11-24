import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

interface LocationSectionProps {
  city: string;
  state: string;
  country: string;
  customState: string;
  customCountry: string;
  setCity: (value: string) => void;
  setState: (value: string) => void;
  setCountry: (value: string) => void;
  setCustomState: (value: string) => void;
  setCustomCountry: (value: string) => void;
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

export const LocationSection = ({
  city,
  state,
  country,
  customState,
  customCountry,
  setCity,
  setState,
  setCountry,
  setCustomState,
  setCustomCountry,
}: LocationSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="h-12"
          required
        />
        
        <div className="flex gap-4">
          <Select
            value={state}
            onValueChange={(value) => {
              setState(value);
              setCustomState("");
            }}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="State" />
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

        <Select
          value={country}
          onValueChange={(value) => {
            setCountry(value);
            setCustomCountry("");
          }}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Country" />
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
      </div>
      
      {country === "custom" && (
        <div className="w-full">
          <Input
            type="text"
            placeholder="Enter country"
            value={customCountry}
            onChange={(e) => setCustomCountry(e.target.value)}
            className="h-12"
            required
          />
        </div>
      )}
    </div>
  );
};