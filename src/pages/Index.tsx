import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our launch.",
      duration: 5000,
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold gradient-text">drinkless</h1>
          <Button variant="ghost">Contact</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Start Your Life's Success Story
            <span className="gradient-text block">Live Better Today</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12">
            Join thousands of individuals on their journey to a healthier, alcohol-free lifestyle.
            Be the first to know when we launch.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              required
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="flex justify-center gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Private & Secure</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 blur-3xl rounded-full" />
            <Smartphone className="h-64 w-64 text-primary relative" />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2024 drinkless. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;