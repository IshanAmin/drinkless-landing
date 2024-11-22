import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";
import { addToWaitlist } from "@/utils/brevo";

const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      await addToWaitlist(email);
      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on our launch.",
        duration: 5000,
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight px-4">
            Ready to start your
            <span className="block">success story?</span>
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              required
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistCTA;