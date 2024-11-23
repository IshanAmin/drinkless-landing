import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { addToWaitlist } from "@/utils/brevo";
import SignupForm from "./SignupForm";

const WaitlistCTA = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: { email: string; city: string; state: string }) => {
    if (!data.email) return;
    
    setIsLoading(true);
    try {
      await addToWaitlist(data.email);
      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on our launch.",
        duration: 5000,
      });
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
          <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
          <p className="text-sm text-slate-600 mt-2">
            Reserve your spot now to gain access to the app while we're still in beta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistCTA;