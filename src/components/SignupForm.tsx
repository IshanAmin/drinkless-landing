import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { addToWaitlist } from "@/utils/airtable";
import { useToast } from "@/components/ui/use-toast";
import { EmailPlatformSection } from "./form-sections/EmailPlatformSection";
import { LocationSection } from "./form-sections/LocationSection";

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
        title: "Congratulations! You're ready to change your life for the better!",
        description: "We'll keep you updated when we're ready for the launch. Your place in line is secured.",
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto mb-2">
      <EmailPlatformSection
        email={email}
        platform={platform}
        setEmail={setEmail}
        setPlatform={setPlatform}
      />
      
      <LocationSection
        city={city}
        state={state}
        country={country}
        customState={customState}
        customCountry={customCountry}
        setCity={setCity}
        setState={setState}
        setCountry={setCountry}
        setCustomState={setCustomState}
        setCustomCountry={setCustomCountry}
      />

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