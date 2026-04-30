import { useState } from "react";
import { Loader2 } from "lucide-react";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { addToWaitlist } from "@/utils/airtable";

const APP_STORE_URL = "https://apps.apple.com/app/id6758133222";

interface Props {
  /** Tailwind height class for badge images, e.g. "h-12" or "h-14" */
  badgeHeight?: string;
  /** Layout direction wrapper className override */
  className?: string;
}

/**
 * Renders the App Store + Google Play badges side-by-side.
 * - iOS badge links to the App Store.
 * - Android badge is shown as "Coming Soon" with a corner ribbon and
 *   opens a slide-up drawer for waitlist signup (Airtable).
 */
const AndroidWaitlistButton = ({
  badgeHeight = "h-12",
  className = "flex flex-col sm:flex-row gap-4 justify-center items-center",
}: Props) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await addToWaitlist({
        email: email.trim(),
        city: "",
        state: "",
        country: country.trim(),
        platform: "Android",
      });
      toast({
        title: "You're on the list! 🎉",
        description:
          "We'll email you the moment Sobr launches on Google Play.",
        duration: 5000,
      });
      setEmail("");
      setCountry("");
      setOpen(false);
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={className}>
      {/* iOS — live link */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className={`${badgeHeight} w-auto`}
        />
      </a>

      {/* Android — Coming Soon, opens waitlist drawer */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button
            type="button"
            aria-label="Join the Android waitlist — coming soon"
            className="relative inline-block transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-sobr-coral rounded-md"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play (coming soon)"
              className={`${badgeHeight} w-auto opacity-60`}
            />
            {/* Folded-corner "Coming Soon" tab — matches FeatureShowcase style */}
            <span
              className="absolute -top-2 -right-2 bg-sobr-coral text-sobr-root text-[9px] font-jakarta font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-md whitespace-nowrap"
            >
              Coming Soon
            </span>
          </button>
        </DrawerTrigger>

        <DrawerContent className="bg-sobr-root border-t border-white/10">
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle className="text-sobr-text font-jakarta text-2xl">
                Get notified when Android launches
              </DrawerTitle>
              <DrawerDescription className="text-sobr-text-secondary">
                Sobr for Android is in final review. Drop your email and we'll
                let you know the moment it's live on Google Play.
              </DrawerDescription>
            </DrawerHeader>

            <form onSubmit={handleSubmit} className="px-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="android-waitlist-email" className="text-sobr-text">
                  Email
                </Label>
                <Input
                  id="android-waitlist-email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-sobr-text placeholder:text-sobr-text-secondary/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="android-waitlist-country" className="text-sobr-text">
                  Country <span className="text-sobr-text-secondary text-xs">(optional)</span>
                </Label>
                <Input
                  id="android-waitlist-country"
                  type="text"
                  maxLength={100}
                  placeholder="United States"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bg-white/5 border-white/10 text-sobr-text placeholder:text-sobr-text-secondary/60"
                />
              </div>

              <DrawerFooter className="px-0">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-sobr-coral text-sobr-root hover:bg-sobr-coral-light font-jakarta font-bold"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining…
                    </>
                  ) : (
                    "Notify Me at Launch"
                  )}
                </Button>
                <DrawerClose asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-sobr-text-secondary hover:text-sobr-text"
                  >
                    Maybe later
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AndroidWaitlistButton;
