import SignupForm from "./SignupForm";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight md:leading-none">
            <span className="block mb-2">Start Your Life's</span>
            <span className="block mb-2">Success Story</span>
            <span className="gradient-text block">Leave Alcohol Behind</span>
          </h2>

          <div className="flex flex-wrap gap-4 text-slate-600 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Non-Invasive</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Private & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Clinically Approved</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <SignupForm />
          <p className="text-sm text-slate-600 mt-2 text-center">
            Reserve your spot now to gain access to the app while we're still in beta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;