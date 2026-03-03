
import { Heart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <div className="min-h-screen">
      {/* Work in Progress Banner */}
      <div className="bg-amber-500 text-white text-center py-3 px-4 font-semibold text-sm tracking-wide">
        🚧 Work in Progress — New Site Coming Soon 🚧
      </div>

      <main>
        <HeroSection />
      </main>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2026 Sobr. All rights reserved. Brightslides LLC.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Omaha, Nebraska
          </p>
        </div>
      </footer>
    </div>
  );
}
