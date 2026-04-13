import { ArrowLeft, Trash2, ShieldCheck, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import sobrLogo from "@/assets/sobr-logo-light.png";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-jakarta font-bold text-sobr-text mb-4">{title}</h2>
    <div className="space-y-4 text-sobr-text-secondary font-inter leading-relaxed">{children}</div>
  </section>
);

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-sobr-root text-sobr-text sobr-dark">
      <header className="border-b border-white/5 bg-sobr-root">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/">
            <img src={sobrLogo} alt="Sobr" className="h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sobr-text-muted hover:text-sobr-coral transition-colors font-inter text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-sobr-text font-jakarta mb-3">
            Account Deletion Request
          </h1>
          <p className="text-sobr-text-muted font-inter">
            Learn how to delete your Sobr account and what happens to your data.
          </p>
          <div className="h-px w-full bg-white/10 mt-6" />
        </div>

        {/* App / Developer info */}
        <div className="bg-sobr-card border border-white/10 rounded-lg p-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-inter">
            <div>
              <span className="text-sobr-text-muted">App Name</span>
              <p className="text-sobr-text font-semibold mt-1">Sobr — Quit Drinking in 90 Days!</p>
            </div>
            <div>
              <span className="text-sobr-text-muted">Developer</span>
              <p className="text-sobr-text font-semibold mt-1">BrightSlides LLC</p>
            </div>
            <div>
              <span className="text-sobr-text-muted">Support Email</span>
              <p className="mt-1">
                <a href="mailto:support@getsobr.ai" className="text-sobr-coral hover:underline">
                  support@getsobr.ai
                </a>
              </p>
            </div>
            <div>
              <span className="text-sobr-text-muted">Website</span>
              <p className="mt-1">
                <a href="https://www.getsobr.ai/account-deletion" className="text-sobr-coral hover:underline">
                  www.getsobr.ai/account-deletion
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Steps to request deletion */}
        <Section title="How to Request Account Deletion">
          <div className="flex items-start gap-3 mb-2">
            <Trash2 className="h-5 w-5 text-sobr-coral mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sobr-text mb-2">Option 1 — In-App (Recommended)</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Open the <strong className="text-sobr-text">Sobr</strong> app on your device.</li>
                <li>Navigate to <strong className="text-sobr-text">Settings</strong> (gear icon).</li>
                <li>Scroll down to <strong className="text-sobr-text">Your Account</strong>.</li>
                <li>Tap <strong className="text-sobr-text">"Delete Account"</strong>.</li>
                <li>Confirm the deletion when prompted.</li>
              </ol>
              <div className="bg-sobr-card border border-white/10 rounded-lg p-4 mt-3">
                <p className="text-sm text-sobr-amber font-medium">
                  <strong>Note:</strong> Account deletion can be cancelled within 30 days. After 30 days the deletion is permanent and cannot be reversed.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-6">
            <ShieldCheck className="h-5 w-5 text-sobr-coral mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sobr-text mb-2">Option 2 — Email Request</p>
              <p>
                If you are unable to access the app, you can email{" "}
                <a href="mailto:support@sobr.com" className="text-sobr-coral hover:underline">
                  support@sobr.com
                </a>{" "}
                with the subject line <strong className="text-sobr-text">"Account Deletion Request"</strong>.
                Please include the email address associated with your Sobr account so we can verify your identity.
                We will process your request within <strong className="text-sobr-text">5 business days</strong>.
              </p>
            </div>
          </div>
        </Section>

        {/* Data deleted */}
        <Section title="Data That Is Deleted">
          <p>Upon successful account deletion, the following data is <strong className="text-sobr-text">permanently removed</strong> from our live databases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Profile & Identity Data:</strong> Name, email address, avatar, user type (Buddy/Sponsor).</li>
            <li><strong className="text-sobr-text">Recovery & Health Data:</strong> Drink logs, urge logs, mood logs, streak counters, daily check-ins, and questionnaire responses.</li>
            <li><strong className="text-sobr-text">Journal Entries:</strong> All personal journal entries and recovery notes.</li>
            <li><strong className="text-sobr-text">Chat Logs:</strong> All in-app chat messages between you and your Buddy/Sponsor.</li>
            <li><strong className="text-sobr-text">Sobr Selfie Data:</strong> All selfie images and associated metadata.</li>
            <li><strong className="text-sobr-text">Emergency Contacts:</strong> Any stored emergency contact information.</li>
            <li><strong className="text-sobr-text">Device & Push Tokens:</strong> Push notification tokens and device identifiers linked to your account.</li>
            <li><strong className="text-sobr-text">AI Interaction History:</strong> All Soby chatbot conversation transcripts and voice data.</li>
          </ul>
        </Section>

        {/* Data retained */}
        <Section title="Data That May Be Retained">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-sobr-amber mt-0.5 shrink-0" />
            <div className="space-y-4">
              <p>Certain data may be retained for a limited period after deletion for the following reasons:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-sobr-text">Encrypted Backups (up to 30 days):</strong> Deleted data may persist in automated, encrypted database backups used for disaster recovery. These backups are purged on a rolling 30-day cycle and are not accessible for regular use.
                </li>
                <li>
                  <strong className="text-sobr-text">Subscription Records:</strong> Transaction and subscription metadata managed by RevenueCat and the Apple App Store / Google Play Store is retained by those platforms per their own data retention policies. We do not control or store payment card information.
                </li>
                <li>
                  <strong className="text-sobr-text">Anonymized Analytics:</strong> Non-personally identifiable, aggregated usage data collected via PostHog may be retained indefinitely. This data cannot be traced back to your account.
                </li>
                <li>
                  <strong className="text-sobr-text">Legal Obligations:</strong> We may retain minimal data where required by applicable law, regulation, or valid legal process (e.g., tax records, fraud prevention).
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Important notice */}
        <div className="bg-sobr-card border border-sobr-amber/30 rounded-lg p-6 mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-sobr-amber mt-0.5 shrink-0" />
            <div className="space-y-2 font-inter text-sm">
              <p className="font-semibold text-sobr-amber">Important</p>
              <p className="text-sobr-text-secondary">
                Account deletion is <strong className="text-sobr-text">irreversible after 30 days</strong>. All recovery progress, streaks, journal entries, and personal data will be permanently lost. Please make sure you no longer need access to this information before confirming deletion.
              </p>
              <p className="text-sobr-text-secondary">
                If you have an active premium subscription, please cancel it through the App Store or Google Play <strong className="text-sobr-text">before</strong> deleting your account to avoid continued billing.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <Section title="Questions?">
          <p>
            If you have any questions about account deletion or your data, please contact us at{" "}
            <a href="mailto:support@sobr.com" className="text-sobr-coral hover:underline">
              support@sobr.com
            </a>{" "}
            or visit our{" "}
            <Link to="/support" className="text-sobr-coral hover:underline">
              Support page
            </Link>
            . You can also review our full{" "}
            <Link to="/privacy" className="text-sobr-coral hover:underline">
              Privacy Policy
            </Link>{" "}
            for more details.
          </p>
        </Section>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
}
