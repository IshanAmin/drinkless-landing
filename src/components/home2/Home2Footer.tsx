import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import sobrLogo from "@/assets/sobr-logo-light.png";

const Home2Footer = () => {
  return (
    <footer className="bg-sobr-root border-t border-white/5 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={sobrLogo} alt="Sobr" className="h-8 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-sobr-text-muted font-inter">
            <p>© 2026 Sobr. All rights reserved. Brightslides LLC.</p>
            <Link to="/terms" className="hover:text-sobr-coral transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-sobr-coral transition-colors">Privacy</Link>
            <Link to="/account-deletion" className="hover:text-sobr-coral transition-colors">Delete Account</Link>
          </div>

          <p className="flex items-center gap-1 text-sm text-sobr-text-muted font-inter">
            Made with <Heart className="h-4 w-4 text-sobr-coral fill-sobr-coral" /> in Omaha, Nebraska
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Home2Footer;
