import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface SignupFormProps {
  onSubmit: (data: { email: string; city: string; state: string }) => void;
  isLoading?: boolean;
}

const SignupForm = ({ onSubmit, isLoading }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, city, state });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mb-2">
      <div className="flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12"
          required
          disabled={isLoading}
        />
        <Input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="h-12"
          required
          disabled={isLoading}
        />
        <Input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="h-12"
          required
          disabled={isLoading}
        />
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