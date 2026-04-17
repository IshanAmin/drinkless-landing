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

const UnchainPrivacyPolicy = () => {
  return (
    <div className="sobr-dark min-h-screen bg-sobr-root">
      {/* Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text mb-3">
            Privacy Policy — Quit Porn Addiction – Unchain
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-sobr-text-muted font-inter">
            <span>Effective Date: February 25, 2025</span>
            <span>Last Updated: April 16, 2026</span>
          </div>
          <div className="h-px w-full bg-white/10 mt-6" />
        </div>

        <p className="text-sobr-text-secondary font-inter leading-relaxed mb-10">
          <strong className="text-sobr-text">BrightSlides LLC</strong> ("we," "our," or "us") operates the mobile application{" "}
          <strong className="text-sobr-text">Quit Porn Addiction – Unchain</strong> (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
        </p>
        <p className="text-sobr-text-secondary font-inter leading-relaxed mb-10">
          By using the App, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
        </p>

        {/* 1 */}
        <Section title="1. Information We Collect">
          <p>We collect information that you provide directly to us, as well as data generated through your use of the App.</p>

          <SubSection title="A. Personal Data">
            <p>When you register or use the App, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Identity Data:</strong> Name, email address, and profile photo, provided via Google Sign-In.</li>
              <li><strong className="text-sobr-text">Authentication Data:</strong> When you sign in via Google Authentication, we receive identity information associated with that Google account (as permitted by your privacy settings with Google). We do not receive or store your Google password.</li>
            </ul>
          </SubSection>

          <SubSection title="B. Recovery & Health-Related Data">
            <p>To provide the core functionality of tracking your recovery journey, we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Tracking Data:</strong> Urge logs, mood logs, trigger logs, and streak/progress counters.</li>
              <li><strong className="text-sobr-text">Journaling:</strong> Personal journal entries and recovery notes you choose to write within the App.</li>
              <li><strong className="text-sobr-text">Activity Data:</strong> Records of in-app tools used, such as puzzle sessions, workout check-ins, meditation completions, and breathing exercises.</li>
              <li><strong className="text-sobr-text">Streak Tracking:</strong> To keep you on track, we maintain your streak history and progress milestones.</li>
              <li><strong className="text-sobr-text">Challenge Data:</strong> Custom challenges you create and track within the App.</li>
            </ul>
            <div className="bg-sobr-card border border-white/10 rounded-lg p-4 mt-3">
              <p className="text-sm text-sobr-amber font-medium">
                <strong>Note:</strong> We treat your recovery and daily-check-in data as highly sensitive. It is strictly used to provide the App's functionality and support your recovery journey, and is never sold to third parties or used for advertising.
              </p>
            </div>
          </SubSection>

          <SubSection title="C. Device & Technical Data">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Device Information:</strong> Device model, operating system (Android/iOS), and unique device identifiers (e.g., push notification tokens to send you reminders).</li>
              <li><strong className="text-sobr-text">Usage Data:</strong> Timestamps of App usage, interaction with features, and crash logs to help us improve stability.</li>
              <li><strong className="text-sobr-text">Analytical Data:</strong> Standard anonymized telemetry data to improve the App and user experience.</li>
            </ul>
          </SubSection>

          <SubSection title="D. Subscription & Billing Data">
            <p>If you purchase premium features, transactions are processed directly by our payment processing partner, <strong className="text-sobr-text">RevenueCat</strong>, via the Google Play Store or Apple App Store. We receive data regarding your subscription status, package selection, and entitlement, but we do not process or store your credit card numbers or raw financial data.</p>
          </SubSection>
        </Section>

        {/* 2 */}
        <Section title="2. How We Use Your Information">
          <p>We rely on accurate data to help you on your recovery journey. We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Core Functionality:</strong> Create and maintain your account, track your sobriety streaks, and power the recovery tools within the App.</li>
            <li><strong className="text-sobr-text">Personalization:</strong> Tailor the App experience based on your mood, urge logs, and activity within the App.</li>
            <li><strong className="text-sobr-text">Notifications:</strong> Send push notifications for check-ins, streak milestones, emergency support alerts, and reminders (via Expo).</li>
            <li><strong className="text-sobr-text">Transaction Processing:</strong> Manage your premium subscription status and entitlements via RevenueCat.</li>
            <li><strong className="text-sobr-text">Improvement & Security:</strong> Troubleshoot bugs, monitor App stability, prevent fraud, and secure our systems. Anonymized usage analytics are used solely to improve App performance and user experience.</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. App Permissions">
          <p>The App may request access to specific device features. You can revoke these permissions at any time in your device settings, though doing so may limit certain functionality.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Notifications:</strong> To send you recovery reminders, streak alerts, and emergency support prompts.</li>
            <li><strong className="text-sobr-text">Contacts:</strong> To allow you to select a contact for the "Call-a-Friend" emergency support feature. We only read the specific contact you select; we do not upload or store your full address book.</li>
            <li><strong className="text-sobr-text">Camera / Photo Library:</strong> To allow you to update your profile photo.</li>
          </ul>
        </Section>

        {/* 4 */}
        <Section title="4. Disclosure of Your Information">
          <p>We do not sell your personal data. We only share information in the following situations:</p>

          <SubSection title="A. Third-Party Service Providers">
            <p>Strictly to operate the App, we share data with the following trusted third-party vendors:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Supabase:</strong> For secure database hosting, user authentication, and backend services. All data stored in Supabase is encrypted at rest and in transit. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline">Privacy Policy</a></li>
              <li><strong className="text-sobr-text">RevenueCat:</strong> For managing subscriptions and in-app purchases. <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline">Privacy Policy</a></li>
              <li><strong className="text-sobr-text">Expo:</strong> For the delivery of push notifications. <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline">Privacy Policy</a></li>
              <li><strong className="text-sobr-text">Google (Sign-In & Play Services):</strong> For authentication and app distribution. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline">Privacy Policy</a></li>
              <li><strong className="text-sobr-text">Firebase Crashlytics:</strong> For crash reporting and app stability diagnostics. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline">Privacy Policy</a></li>
            </ul>
          </SubSection>

          <SubSection title="B. App Sharing Feature">
            <p>If you choose to use the "Share the App" feature, the App launches your device's native OS share sheet. This action is initiated entirely by you. We do not collect or transmit any data as part of this interaction.</p>
          </SubSection>

          <SubSection title="C. Legal Requirements">
            <p>We may disclose your information when required by law, subpoena, court order, or governmental request. We may also do so if we believe such action is necessary to comply with reasonable law enforcement requests, protect the security or integrity of our Service, or safeguard the safety, rights, and property of BrightSlides LLC, our users, or the public.</p>
          </SubSection>
        </Section>

        {/* 5 */}
        <Section title="5. Data Security">
          <p>We use administrative, technical, and physical security measures to help protect your personal information. This includes industry-standard encryption (SSL/TLS) during data transmission and secure cloud infrastructure via Supabase. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
        </Section>

        {/* 6 */}
        <Section title="6. Data Retention">
          <p>We retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Account Data:</strong> Retained while your account is active. You may request deletion of your account at any time via in-app settings or by contacting us.</li>
            <li><strong className="text-sobr-text">Recovery & Journal Data:</strong> Retained while your account is active and deleted upon account deletion.</li>
            <li><strong className="text-sobr-text">Deletion:</strong> You may request deletion of your account and all associated data at any time by contacting support or using the in-app deletion tools. Upon deletion, data is removed from our live databases but may persist in encrypted backups for a limited period for disaster recovery purposes and/or where retention is legally required.</li>
            <li><strong className="text-sobr-text">Dormant Account:</strong> We will deem a non-paying account dormant if no activity is detected within a 365-day period. A simple log-in and log-out counts as valid activity and resets the dormant clock.</li>
          </ul>
        </Section>

        {/* 7 */}
        <Section title="7. Children's Privacy">
          <p>The App is not intended for use by anyone under the age of 18. We do not knowingly collect personally identifiable information from users under 18. If we become aware that we have collected personal data from a user under 18, we will promptly delete that information. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at the email address listed below.</p>
        </Section>

        {/* 8 */}
        <Section title="8. Your Privacy Rights">
          <p>Depending on your location (e.g., California, EEA, UK), you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Access:</strong> The right to request copies of your personal data in the format we store it.</li>
            <li><strong className="text-sobr-text">Correction:</strong> The right to request that we correct any information you believe is inaccurate.</li>
            <li><strong className="text-sobr-text">Deletion:</strong> The right to request that we erase your personal data ("Right to be Forgotten").</li>
            <li><strong className="text-sobr-text">Permissions:</strong> The right to withdraw consent for optional permissions (such as Camera or Contacts) at any time via your device settings.</li>
          </ul>
          <p>To exercise these rights, please contact us at the email listed below.</p>
        </Section>

        {/* 9 */}
        <Section title="9. Opt-Out Rights">
          <p>You can stop all collection of information by the Application by uninstalling it using the standard uninstall process available on your device or via the app marketplace. You may also contact us to request deletion of any data we hold about you.</p>
        </Section>

        {/* 10 */}
        <Section title="10. Changes to This Privacy Policy">
          <p>This Privacy Policy may be updated from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of the App following the posting of changes constitutes your acceptance of those changes. You are encouraged to review this Privacy Policy periodically.</p>
        </Section>

        {/* 11 */}
        <Section title="11. Contact Us">
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

export default UnchainPrivacyPolicy;
