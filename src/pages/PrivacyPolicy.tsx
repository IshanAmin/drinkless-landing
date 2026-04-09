import { ArrowLeft } from "lucide-react";
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

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="text-lg font-jakarta font-semibold text-sobr-text mb-2">{title}</h3>
    <div className="space-y-3 text-sobr-text-secondary font-inter leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="sobr-dark min-h-screen bg-sobr-root">
      {/* Header */}
      <header className="border-b border-white/5 py-5">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/home2" className="flex items-center gap-3">
            <img src={sobrLogo} alt="Sobr" className="h-8 w-auto" />
          </Link>
          <Link
            to="/home2"
            className="flex items-center gap-2 text-sm text-sobr-text-muted hover:text-sobr-coral transition-colors font-inter"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text mb-3">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-sobr-text-muted font-inter">
            <span>Effective Date: February 16, 2026</span>
            <span>Last Updated: February 16, 2026</span>
          </div>
          <div className="h-px w-full bg-white/10 mt-6" />
        </div>

        <p className="text-sobr-text-secondary font-inter leading-relaxed mb-10">
          BrightSlides LLC ("we," "our," or "us") operates the mobile application{" "}
          <strong className="text-sobr-text">Sobr - Quit Drinking in 90 Days!</strong> (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our App.
        </p>
        <p className="text-sobr-text-secondary font-inter leading-relaxed mb-10">
          By using the App, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
        </p>

        {/* 1 */}
        <Section title="1. Information We Collect">
          <p>We collect information that you provide directly to us, as well as data generated through your use of the App.</p>

          <SubSection title="A. Personal Data">
            <p>When you register or participate in the App, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Identity Data:</strong> Name, email address, profile details, work status, disability flag, (e.g., avatar URL), and your designated user type (buddy or sponsor).</li>
              <li><strong className="text-sobr-text">Authentication Data:</strong> When you sign-in via Google Authentication, we receive identity information associated with that account (as permitted by your privacy settings with those providers).</li>
              <li><strong className="text-sobr-text">Emergency Contacts:</strong> If you designate an emergency contact, we store the name, phone number, and relationship type (e.g., partner, friend) of the contact you select from your address book.</li>
            </ul>
          </SubSection>

          <SubSection title="B. Recovery & Health-Related Data">
            <p>To provide the core functionality of tracking your sobriety journey, we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Tracking Data:</strong> Drink logs, urge logs, mood logs, and streak/progress counters.</li>
              <li><strong className="text-sobr-text">Journaling:</strong> Personal journal entries and recovery notes.</li>
              <li><strong className="text-sobr-text">Questionnaire Data:</strong> Responses to onboarding questions and related scoring outputs followed by subsequent check-ins.</li>
              <li><strong className="text-sobr-text">Social Data:</strong> Chat content and interaction history between you and your designated Buddy or Sponsor.</li>
              <li><strong className="text-sobr-text">Streak Tracking:</strong> To keep you on track, we offer Streak tracking and progress metrics.</li>
              <li><strong className="text-sobr-text">Chat Logs:</strong> In-app chat content between you and your designated buddy/sponsor. Chats are automatically deleted on a rolling 30-day cycle.</li>
              <li><strong className="text-sobr-text">Push Notifications:</strong> Sponsor role has the ability to send custom push notifications (also known in-app as "nudge/nudges"). We store these to make it easy to send with one-tap.</li>
            </ul>
            <div className="bg-sobr-card border border-white/10 rounded-lg p-4 mt-3">
              <p className="text-sm text-sobr-amber font-medium">
                <strong>Note:</strong> We treat your recovery and daily-check-in data as highly sensitive. It is strictly used to provide the App's functionality and your recovery journey and is never sold to third parties or used for advertising.
              </p>
            </div>
          </SubSection>

          <SubSection title="C. Device & Technical Data">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Device Information:</strong> Device model, operating system (iOS/Android), and unique device identifiers (e.g., Push Notification tokens to send you reminders and routing timestamps).</li>
              <li><strong className="text-sobr-text">Usage Data:</strong> Timestamps of app usage, interaction with features, and crash logs to help us improve stability.</li>
              <li><strong className="text-sobr-text">Analytical Data:</strong> Standard analytical and telemetry data to improve app and app experience.</li>
            </ul>
          </SubSection>

          <SubSection title="D. Location & Context">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Location:</strong> If granted, we collect approximate location data to provide context for your journal entries or to localize weather data.</li>
              <li><strong className="text-sobr-text">Weather:</strong> We may derive local weather conditions using open-source APIs (Open-Meteo) to help you correlate weather patterns with mood or urges.</li>
            </ul>
          </SubSection>

          <SubSection title="E. Subscription & Billing Data">
            <p>If you purchase premium features, transactions are processed directly by our payment processing partner, RevenueCat via the Apple App Store or Google Play Store. Premium access is managed using RevenueCat. We receive data regarding your subscription status, package selection, and entitlement, but we do not process or store your credit card numbers or raw financial data.</p>
          </SubSection>
        </Section>

        {/* 2 */}
        <Section title="2. How We Use Your Information">
          <p>We rely on accurate data to help you succeed in your 90-day journey. We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Core Functionality:</strong> Create your account, track your sobriety streaks, and visualize your progress, along with personalized recovery features.</li>
            <li><strong className="text-sobr-text">Communication:</strong> Facilitate chat and data sharing between you and your assigned Buddy/Sponsor.</li>
            <li><strong className="text-sobr-text">Personalization:</strong> Tailor the App experience based on your mood, urges, and questionnaire responses.</li>
            <li><strong className="text-sobr-text">Notifications:</strong> Send push notifications for check-ins, streak milestones, and reminders (via Expo.dev).</li>
            <li><strong className="text-sobr-text">Transaction Processing:</strong> Manage your premium subscription status and entitlements via RevenueCat.</li>
            <li><strong className="text-sobr-text">Improvement & Security:</strong> To troubleshoot bugs, monitor app stability, prevent fraud, and secure our systems.</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. App Permissions">
          <p>The App may request access to specific device features. You can revoke these permissions at any time in your device settings, though this may limit functionality.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Camera:</strong> To capture selfie logs or update your profile picture.</li>
            <li><strong className="text-sobr-text">Contacts:</strong> To allow you to quickly select an emergency contact from your address book. We only collect the specific contacts, name, phone number, and relationship type. We do not use or upload your entire address book. Contact permissions are also used to invite a buddy or a sponsor.</li>
            <li><strong className="text-sobr-text">Location:</strong> To provide weather context and localized journaling.</li>
            <li><strong className="text-sobr-text">Motion & Fitness:</strong> To integrate with Apple Health or Google Fit for holistic wellness tracking.</li>
            <li><strong className="text-sobr-text">Notifications:</strong> To send you recovery reminders and chat alerts.</li>
          </ul>
        </Section>

        {/* 4 */}
        <Section title="4. Disclosure of Your Information">
          <p>We do not sell your personal data. We only share information in the following situations:</p>

          <SubSection title="A. With Your Consent (Buddy/Sponsor System)">
            <p>If you choose to connect with a "Buddy" or "Sobr Sponsor" within the App, you consent to sharing your chats and specific recovery progress data (e.g., streak status, mood logs, check-ins, etc.) with that individual to facilitate accountability.</p>
          </SubSection>

          <SubSection title="B. Third-Party Service Providers">
            <p>As outlined in Section 3, strictly to operate the App, we share data with trusted third-party vendors who assist us in operating the App. These include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Supabase:</strong> For secure database hosting, user authentication, and backend services.</li>
              <li><strong className="text-sobr-text">RevenueCat:</strong> For managing subscriptions and in-app purchases.</li>
              <li><strong className="text-sobr-text">Expo:</strong> For the delivery of push notifications.</li>
              <li><strong className="text-sobr-text">Open-Meteo:</strong> For fetching weather data.</li>
              <li><strong className="text-sobr-text">Google & Apple:</strong> For processing payments.</li>
            </ul>
          </SubSection>

          <SubSection title="C. Legal Requirements">
            <p>We may disclose your information when required by law, subpoena, court order, or governmental request. We may also do so if we believe such action is necessary to comply with reasonable law enforcement requests, protect the security or integrity of our Service, or safeguard the safety, rights, and property of BrightSlides LLC, our users, or the public.</p>
          </SubSection>
        </Section>

        {/* 5 */}
        <Section title="5. Data Security">
          <p>We use administrative, technical, and physical security measures to help protect your personal information. This includes using industry-standard encryption (SSL/TLS) during data transmission and utilizing secure cloud infrastructure (Supabase). However, please be aware that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
        </Section>

        {/* 6 */}
        <Section title="6. Data Retention">
          <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Account Data:</strong> Retained while your account is active. You must click Delete Account under settings as the final step.</li>
            <li><strong className="text-sobr-text">Chat Logs:</strong> Automatically deleted on a 30-day rolling basis, cleaned at Midnight 12:00 AM each day after initial 30 days.</li>
            <li><strong className="text-sobr-text">Deletion:</strong> You may request the deletion of your account and all associated data at any time by contacting support or using the in-app deletion tools. Upon deletion, data is removed from our live databases but may persist in backups for a limited period for disaster recovery purposes and/or where retention is legally required.</li>
            <li><strong className="text-sobr-text">Dormant Account:</strong> We will deem a non-paying account as dormant if within a 365 day period, no activity is detected. An active activity can be a quick log in and out and will be deemed to be valid activity, resetting the dormant account clock.</li>
          </ul>
        </Section>

        {/* 7 */}
        <Section title="7. Children's Privacy">
          <p>The App is not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If we become aware that we have collected personal data from a child under 18, we will delete that information. The app has built in precautions to prevent under age 18 users. These precautions can be bypassed with dishonesty and there is no 100% fool-proof method.</p>
        </Section>

        {/* 8 */}
        <Section title="8. Artificial Intelligence (AI) and Machine Learning Features">
          <p>To enhance your recovery journey, Sobr utilizes Artificial Intelligence (AI) to provide personalized insights and conversational support. By using these specific features, you acknowledge the following data practices:</p>

          <SubSection title='A. AI Progress Tracking, Journal Analysis & Recommendations'>
            <p>We utilize AI algorithms to analyze your daily check-ins, questionnaire responses, mood logs, urge logs, and personal journal entries. The AI cross-references this data to track your recovery trajectory, generate weekly summaries of your thoughts and progress, and provide personalized recommendations and actionable next steps. Because journal entries contain highly sensitive personal reflections, this analysis is isolated to your account and is used strictly to provide these personalized weekly insights. Your journal data is never used to train public AI models.</p>
          </SubSection>

          <SubSection title='B. "Soby" Empathetic AI Chatbot & Voice Processing'>
            <p>The App features an optional interactive AI chatbot named "Soby." Soby is powered by trusted third-party AI providers: Hume AI (for emotional intelligence and conversational processing) and ElevenLabs (for voice synthesis).</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Data Transmission:</strong> If you interact with Soby via voice or text, your audio recordings and chat transcripts are securely transmitted to these providers via API strictly to generate the chatbot's real-time responses.</li>
              <li><strong className="text-sobr-text">Data Protection:</strong> We utilize enterprise/API-level integrations with these providers. Under their API terms, Hume AI and ElevenLabs are restricted from using your personal chat or voice data to train their general, public AI models.</li>
              <li><strong className="text-sobr-text">Disclaimer:</strong> While we configure these integrations to maximize your privacy (such as utilizing zero-retention API settings where available), the processing of your voice and text inputs by these third parties is subject to their respective privacy/security protocols.</li>
            </ul>
          </SubSection>
        </Section>

        {/* 9 */}
        <Section title="9. Your Privacy Rights">
          <p>Depending on your location (e.g., California, EEA, UK), you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Access:</strong> The right to request copies of your personal data in the format we store. We do not provide mappings.</li>
            <li><strong className="text-sobr-text">Correction:</strong> The right to request that we correct any information you believe is inaccurate.</li>
            <li><strong className="text-sobr-text">Deletion:</strong> The right to request that we erase your personal data ("Right to be Forgotten").</li>
            <li><strong className="text-sobr-text">Permissions:</strong> Withdraw consent for optional permissions (like Camera or Location) at any time via your device settings. We do not control device settings.</li>
          </ul>
          <p>To exercise these rights, please contact us at the email listed below.</p>
        </Section>

        {/* 10 */}
        <Section title="10. Contact Us">
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <div className="bg-sobr-card border border-white/10 rounded-lg p-6 mt-2">
            <p className="font-semibold text-sobr-text">BrightSlides LLC</p>
            <p>
              Email:{" "}
              <a
                href="mailto:Support@GetSobr.ai"
                className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline"
              >
                Support@GetSobr.ai
              </a>
            </p>
          </div>
        </Section>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;
