import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";

const SUPPORT_EMAIL = "support@sobr.com";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject || "Support Request")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    toast({
      title: "Opening your email client",
      description: "Your default email app should open with the message pre-filled.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-sobr-root text-sobr-text sobr-dark">
      <main className="container mx-auto px-4 py-16 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-sobr-text font-jakarta mb-2">
          Contact Support
        </h1>
        <p className="text-sobr-text-muted font-inter mb-8">
          Have a question or need help? Fill out the form below and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name" className="text-sobr-text font-inter">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-sobr-card border-white/10 text-sobr-text placeholder:text-sobr-text-muted/50 h-12"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-sobr-text font-inter">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="bg-sobr-card border-white/10 text-sobr-text placeholder:text-sobr-text-muted/50 h-12"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="subject" className="text-sobr-text font-inter">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this about?"
              className="bg-sobr-card border-white/10 text-sobr-text placeholder:text-sobr-text-muted/50 h-12"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message" className="text-sobr-text font-inter">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help..."
              required
              rows={6}
              className="bg-sobr-card border-white/10 text-sobr-text placeholder:text-sobr-text-muted/50"
            />
          </div>

          <Button type="submit" size="lg" className="bg-sobr-coral hover:bg-sobr-coral/90 text-sobr-text font-jakarta mt-2">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-sobr-text-muted text-center font-inter">
            This will open your default email client. You can also email us directly at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sobr-coral hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </form>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
}
