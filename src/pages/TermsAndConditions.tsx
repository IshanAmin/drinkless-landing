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

const ImportantNotice = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-sobr-card border border-white/10 rounded-lg p-4 mt-3">
    <p className="text-sm text-sobr-amber font-medium">{children}</p>
  </div>
);

const LegalEmphasis = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-sobr-card border border-sobr-coral/20 rounded-lg p-5 my-4">
    <p className="text-sm text-sobr-text font-semibold leading-relaxed">{children}</p>
  </div>
);

const TermsAndConditions = () => {
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
            Terms and Conditions of Use
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-sobr-text-muted font-inter">
            <span>Effective Date: April 9, 2026</span>
            <span>Version 4.0</span>
          </div>
          <div className="h-px w-full bg-white/10 mt-6" />
        </div>

        <LegalEmphasis>
          IMPORTANT NOTICE: PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE DOWNLOADING, INSTALLING, OR USING THE SOBR APPLICATION. BY ACCESSING OR USING THE APP IN ANY WAY, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE THE APP.
        </LegalEmphasis>

        {/* 1 */}
        <Section title="1. Introduction and Agreement to Terms">
          <p>These Terms and Conditions of Use ("Terms," "Agreement") constitute a legally binding contract between you and BrightSlides LLC ("Company," "we," "us," or "our"), the developer and operator of Sobr - Quit Drinking in 90 Days! (the "App"). These Terms govern your access to and use of the App in its entirety.</p>
          <p>By downloading, installing, creating an account, or otherwise accessing or using the App — including through the Apple App Store or Google Play Store — you represent and warrant that you have read, understood, and agree to be bound by these Terms and our <Link to="/privacy" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Privacy Policy</Link> (effective February 16, 2026), which is incorporated herein by reference. If you do not agree, you must immediately cease all use of the App and uninstall it from your device.</p>
          <p>BrightSlides LLC reserves the right to amend or replace these Terms at any time. The Company will update the "Effective Date" and provide reasonable notice within the App or via your registered email. Continued use of the App following updated Terms constitutes acceptance of those changes.</p>
        </Section>

        {/* 2 */}
        <Section title="2. Definitions">
          <p>The following defined terms apply throughout these Terms and are consistent with the terminology used in the Privacy Policy.</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="text-sobr-text">"Buddy" or "Primary User"</strong> — The individual who has downloaded the App and is actively using it to track sobriety, manage recovery goals, and engage with the App's features. These terms are used interchangeably throughout these Terms and in the Privacy Policy. The word "User" in these Terms always refers to the Buddy/Primary User unless the context clearly indicates otherwise.</li>
            <li><strong className="text-sobr-text">"Sponsor" or "Sobr Sponsor"</strong> — A peer accountability partner independently selected by the Buddy to provide mentorship and accountability support within the App. A Sponsor is not an employee, agent, or affiliate of the Company in any capacity.</li>
            <li><strong className="text-sobr-text">"Soby"</strong> — The App's optional AI-powered empathetic chatbot assistant, powered by Hume AI and ElevenLabs. Soby is a software system, not a human or licensed professional.</li>
            <li><strong className="text-sobr-text">"Sobr Selfie"</strong> — A photo taken by the Buddy through the App's camera feature as part of their sobriety tracking journey. Full-resolution Sobr Selfies remain on the Buddy's device. Low-resolution thumbnail versions are uploaded to the Company's secure servers solely for backup and restore purposes, as described in Section 10.</li>
            <li><strong className="text-sobr-text">"User Content"</strong> — Any information, data, text, photos, or other content submitted or transmitted by a Buddy through the App, including journal entries, mood logs, urge logs, drink logs, check-in responses, chat messages, profile details, and Sobr Selfies.</li>
            <li><strong className="text-sobr-text">"Anonymized Behavioral Data"</strong> — Usage data from which all personally identifiable information (PII) — including name, email address, phone number, physical address, and unique device or account identifiers — has been stripped prior to transmission, such that the data cannot reasonably be traced back to any individual.</li>
            <li><strong className="text-sobr-text">"Premium"</strong> — Paid subscription features managed through RevenueCat via the Apple App Store or Google Play Store.</li>
            <li><strong className="text-sobr-text">"Services"</strong> — The App and all features, content, AI capabilities, and support functions made available through it.</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. Eligibility">
          <p>To use the App, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be at least eighteen (18) years of age, or the age of legal majority in your jurisdiction, whichever is greater;</li>
            <li>Have the legal capacity and authority to enter into a binding agreement;</li>
            <li>Not be prohibited from using the App under any applicable law, rule, or regulation;</li>
            <li>Not have been previously suspended or removed from the App for violating these Terms.</li>
          </ul>
          <p>By creating an account, you represent and warrant all of the above conditions are met. BrightSlides LLC reserves the right to terminate any account if eligibility requirements are not met.</p>
          <p>The App is not intended for individuals under eighteen (18). BrightSlides LLC does not knowingly collect personal information from anyone under eighteen (18). Any such account discovered will be terminated and all associated data deleted. The App includes safeguards to prevent underage access; however, these can be circumvented by dishonest self-reporting and are not 100% foolproof.</p>
        </Section>

        {/* 4 */}
        <Section title="4. Description of Services">
          <p>Sobr - Quit Drinking in 90 Days! is a mobile application providing informational, motivational, and peer-support resources to individuals who have voluntarily chosen to reduce or eliminate alcohol consumption over a structured 90-day journey. The App provides:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sobriety and streak tracking, mood logging, urge logging, and drink logging — all encrypted with AES-256;</li>
            <li>Personal journaling and recovery note-keeping;</li>
            <li>Onboarding questionnaires and recurring check-ins with AI-generated progress analysis;</li>
            <li>Sobr Selfie photo capture with full-resolution on-device storage and encrypted low-resolution thumbnail cloud backup;</li>
            <li>Access to a peer Sponsor chosen and managed entirely by the Buddy (see Section 6);</li>
            <li>Soby, an AI-powered empathetic conversational assistant (see Section 7);</li>
            <li>Encrypted in-app chat between Buddies and Sponsors, with an optional user-controlled 30-day auto-delete setting;</li>
            <li>Weather and mood correlation features using Open-Meteo;</li>
            <li>Push notification reminders via Expo;</li>
            <li>Premium subscription features managed via RevenueCat;</li>
            <li>Anonymized product analytics via PostHog to improve App performance.</li>
          </ul>
          <LegalEmphasis>
            THE APP IS PROVIDED SOLELY FOR INFORMATIONAL, MOTIVATIONAL, AND PEER SUPPORT PURPOSES. THE APP IS NOT A MEDICAL DEVICE, CLINICAL TREATMENT PROGRAM, REHABILITATION SERVICE, MENTAL HEALTH SERVICE, OR SUBSTANCE ABUSE TREATMENT PROVIDER.
          </LegalEmphasis>
          <p>BrightSlides LLC does not guarantee any specific outcomes, including sobriety, reduced alcohol consumption, improved health, or program completion. Individual results will vary.</p>
        </Section>

        {/* 5 */}
        <Section title="5. Health and Medical Disclaimer">
          <LegalEmphasis>
            NOTHING IN THE APP — INCLUDING ANY CONTENT, SOBY AI RESPONSES, OR BUDDY/SPONSOR COMMUNICATIONS — CONSTITUTES MEDICAL ADVICE, CLINICAL COUNSELING, PSYCHIATRIC TREATMENT, PSYCHOLOGICAL THERAPY, ADDICTION TREATMENT, OR ANY OTHER FORM OF LICENSED HEALTH CARE SERVICES. THE APP IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ATTENTION.
          </LegalEmphasis>
          <p>Alcohol use disorder is a complex medical condition. Abrupt cessation can cause serious complications including alcohol withdrawal syndrome, delirium tremens, seizures, and cardiovascular events. <strong className="text-sobr-text">SOBR STRONGLY URGES ALL USERS TO CONSULT A LICENSED PHYSICIAN OR QUALIFIED HEALTHCARE PROVIDER BEFORE CHANGING THEIR ALCOHOL CONSUMPTION HABITS.</strong></p>
          <p>In an emergency, contact:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-sobr-text">Emergency Services:</strong> 911 or your local emergency number</li>
            <li><strong className="text-sobr-text">SAMHSA National Helpline:</strong> 1-800-662-4357 (free, confidential, 24/7)</li>
            <li><strong className="text-sobr-text">988 Suicide and Crisis Lifeline:</strong> Call or text 988</li>
            <li>Your personal physician, psychiatrist, or addiction specialist</li>
          </ul>
          <p>BrightSlides LLC does not monitor User communications in real time and cannot respond to emergencies. The App does not provide crisis intervention.</p>
        </Section>

        {/* 6 */}
        <Section title="6. Sponsor Relationship and Conduct">
          <SubSection title="6.1 Nature of the Sponsor Role">
            <p>The App supports a peer accountability role called the "Sobr Sponsor" — an individual who provides informal, non-clinical mentorship and accountability support. The Sponsor relationship is entirely peer-to-peer. The Company is not a party to it in any capacity.</p>
            <p>The Buddy independently selects, contacts, and engages their own Sponsor through means entirely outside the Company's control. The App provides technical infrastructure — in-app chat, push notifications, progress-sharing tools — to supplement that pre-existing relationship. All chat content between Buddies and Sponsors is encrypted with AES-256 and subject to the optional 30-day auto-delete setting described in Section 14.3.</p>
          </SubSection>

          <SubSection title="6.2 No Vetting, Screening, or Endorsement">
            <LegalEmphasis>
              BRIGHTSLIDES LLC DOES NOT VET, SCREEN, BACKGROUND-CHECK, LICENSE-VERIFY, CREDENTIAL-CHECK, TRAIN, CERTIFY, ENDORSE, SUPERVISE, MONITOR, OR IN ANY WAY EVALUATE ANY SOBR SPONSOR. THE COMPANY HAS NO KNOWLEDGE OF, AND MAKES NO REPRESENTATIONS WHATSOEVER REGARDING, THE IDENTITY, QUALIFICATIONS, BACKGROUND, CHARACTER, MENTAL HEALTH STATUS, SOBRIETY STATUS, INTENTIONS, RELIABILITY, OR CONDUCT OF ANY SPONSOR.
            </LegalEmphasis>
            <p>The Buddy acknowledges and agrees that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any Sponsor is a private individual selected solely by the Buddy, without any Company involvement, recommendation, verification, or approval;</li>
              <li>The Company has no way of knowing who a Sponsor is, their background, their sobriety status, or whether they are appropriate or safe;</li>
              <li>A Sponsor is not an employee, contractor, agent, or affiliate of the Company in any capacity;</li>
              <li>The Company cannot guarantee a Sponsor will be available, responsive, honest, or consistent;</li>
              <li>The Company cannot guarantee a Sponsor will refrain from harmful, abusive, inappropriate, negligent, or criminal conduct;</li>
              <li>The Company does not monitor real-time communications between Buddies and Sponsors;</li>
              <li>The Buddy assumes all risk associated with engaging a Sponsor of their own choosing, without exception.</li>
            </ul>
          </SubSection>

          <SubSection title="6.3 Zero Liability for Sponsor Conduct">
            <LegalEmphasis>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BRIGHTSLIDES LLC AND THE COMPANY PARTIES SHALL HAVE ABSOLUTELY NO LIABILITY OF ANY KIND FOR ANY ACTS, OMISSIONS, STATEMENTS, COMMUNICATIONS, CONDUCT, OR ADVICE OF ANY SOBR SPONSOR, WHETHER OCCURRING WITHIN THE APP, OUTSIDE THE APP, IN PERSON, OR THROUGH ANY OTHER MEDIUM.
            </LegalEmphasis>
            <p>This zero-liability obligation includes, without limitation:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any harmful, abusive, negligent, reckless, fraudulent, harassing, sexually inappropriate, manipulative, or criminal acts by a Sponsor;</li>
              <li>Any advice or guidance by a Sponsor that results in harm, including advice contributing to relapse, injury, or death;</li>
              <li>Any failure by a Sponsor to respond, maintain confidentiality, or honor commitments;</li>
              <li>Any relapse, injury, distress, psychological harm, or financial loss the Buddy alleges was caused by a Sponsor's conduct or inaction;</li>
              <li>Any misrepresentation by a Sponsor regarding identity, sobriety status, or qualifications;</li>
              <li>Any criminal act committed by a Sponsor against the Buddy or third parties;</li>
              <li>Any breach of confidentiality by a Sponsor regarding the Buddy's personal information.</li>
            </ul>
            <p>The complete absence of the Company's liability for Sponsor conduct is an essential, material term of this Agreement. Without it, the Company could not offer the Sponsor feature.</p>
          </SubSection>

          <SubSection title="6.4 Buddy Responsibilities Regarding Sponsors">
            <p>The Buddy bears full and exclusive responsibility for their selection and engagement of a Sponsor and agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Independently assess the suitability of any Sponsor for their personal situation;</li>
              <li>Exercise reasonable personal judgment and caution in all Sponsor interactions;</li>
              <li>Not share sensitive financial information, passwords, or government identification with any Sponsor;</li>
              <li>Immediately cease contact with any Sponsor whose conduct is harmful or threatening, and contact authorities if necessary;</li>
              <li>Promptly report any violating Sponsor conduct to the Company at <a href="mailto:Support@GetSobr.ai" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Support@GetSobr.ai</a>;</li>
              <li>Understand that the App's chat and notification tools do not substitute for the Buddy's own vigilance.</li>
            </ul>
          </SubSection>

          <SubSection title="6.5 Conduct Rules for Those Acting as Sponsors">
            <p>Users who serve as Sponsors agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduct themselves respectfully, honestly, supportively, and in good faith at all times;</li>
              <li>Refrain from providing medical advice, clinical recommendations, psychiatric guidance, or substance abuse treatment direction;</li>
              <li>Refrain from abusive, harassing, sexually inappropriate, manipulative, or harmful conduct;</li>
              <li>Promptly direct any Buddy in crisis to 911, 988, or SAMHSA (1-800-662-4357);</li>
              <li>Refrain from soliciting money, gifts, romantic involvement, or any personal benefit from Buddies;</li>
              <li>Not use the Sponsor role to recruit Buddies into third-party programs or services.</li>
            </ul>
            <p>Violation may result in immediate account suspension or termination without notice or refund.</p>
          </SubSection>

          <SubSection title="6.6 Emergency Contact Data">
            <p>The App permits Buddies to designate an emergency contact from their device address book. The Company stores only the specific contact's name, phone number, and relationship type — not the full address book. This data is used solely for the emergency contact feature and handled in accordance with the Privacy Policy.</p>
          </SubSection>

          <SubSection title="6.7 Release of Claims Related to Sponsors">
            <LegalEmphasis>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE BUDDY HEREBY IRREVOCABLY AND UNCONDITIONALLY RELEASES, DISCHARGES, AND HOLDS HARMLESS THE COMPANY AND ITS OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, AGENTS, SUCCESSORS, AND ASSIGNS FROM AND AGAINST ANY AND ALL CLAIMS, DEMANDS, DAMAGES, LOSSES, COSTS, EXPENSES (INCLUDING ATTORNEYS' FEES), LIABILITIES, AND CAUSES OF ACTION OF EVERY KIND, WHETHER KNOWN OR UNKNOWN, ARISING OUT OF OR IN ANY WAY RELATED TO THE BUDDY'S SELECTION OF, INTERACTION WITH, OR RELIANCE UPON ANY SOBR SPONSOR.
            </LegalEmphasis>
            <p>California residents expressly waive the protections of California Civil Code Section 1542, which states: <em>"A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party."</em></p>
          </SubSection>
        </Section>

        {/* 7 */}
        <Section title="7. Soby — AI Features: Disclaimer and Limitations">
          <SubSection title="7.1 What Soby Is">
            <p>Soby is the App's optional AI-powered conversational assistant designed to engage Buddies in supportive, motivational, and informational dialogue related to sobriety, habit formation, mood awareness, and wellness. Soby is powered by Hume AI and ElevenLabs.</p>
            <p>Soby's tone is intentionally empathetic. This is a software design feature — not genuine emotional connection, a therapeutic alliance, or human understanding. Soby is a machine. It does not feel, think, or exercise clinical judgment.</p>
          </SubSection>

          <SubSection title="7.2 What Soby Is Not">
            <LegalEmphasis>SOBY IS NOT, AND SHALL NOT UNDER ANY CIRCUMSTANCES BE CONSTRUED TO BE:</LegalEmphasis>
            <ul className="list-disc pl-6 space-y-2">
              <li>A licensed physician, psychiatrist, psychologist, therapist, counselor, social worker, or any licensed mental health or medical professional;</li>
              <li>A substance abuse treatment provider, addiction counselor, or recovery specialist;</li>
              <li>A crisis counselor, suicide prevention specialist, or emergency responder;</li>
              <li>A legal or financial advisor;</li>
              <li>A human being, regardless of how human-like Soby's responses appear;</li>
              <li>A reliable, infallible, or clinically authoritative source of health, safety, or medical information.</li>
            </ul>
            <LegalEmphasis>
              NOTHING COMMUNICATED BY SOBY SHOULD BE INTERPRETED AS MEDICAL ADVICE, CLINICAL GUIDANCE, DIAGNOSIS, TREATMENT RECOMMENDATION, OR PROFESSIONAL COUNSEL OF ANY KIND. SOBY'S OUTPUTS ARE INFORMATIONAL AND MOTIVATIONAL IN NATURE ONLY.
            </LegalEmphasis>
          </SubSection>

          <SubSection title="7.3 Soby's Limitations and Risk of Error">
            <p>The Buddy acknowledges and agrees that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Soby may produce responses that are inaccurate, incomplete, outdated, misleading, or factually wrong;</li>
              <li>Soby does not have access to the Buddy's medical history, medications, or psychiatric records;</li>
              <li>Soby cannot detect or respond to genuine medical or psychiatric emergencies, including suicidal ideation or active withdrawal;</li>
              <li>Soby may be unavailable due to system maintenance or third-party provider outages;</li>
              <li>Soby's responses may vary across sessions and must never be relied upon as consistent or authoritative.</li>
            </ul>
            <LegalEmphasis>
              BRIGHTSLIDES LLC EXPRESSLY DISCLAIMS ALL RESPONSIBILITY FOR OUTCOMES, DECISIONS, ACTIONS, OR INACTIONS TAKEN BY THE BUDDY IN RELIANCE UPON ANY OUTPUT FROM SOBY. THE BUDDY ASSUMES ALL RISK ASSOCIATED WITH USE OF AND RELIANCE UPON SOBY.
            </LegalEmphasis>
          </SubSection>

          <SubSection title="7.4 Anonymized Behavioral Data and AI Training — Honest Limitation">
            <p>To improve the effectiveness of the App's AI features, the Company may transmit Anonymized Behavioral Data — such as drinking patterns, urge frequency, mood trends, streak history, and check-in response patterns — to AI processing systems. All PII is stripped prior to transmission. This data cannot be traced back to any individual Buddy.</p>
            <LegalEmphasis>
              THE COMPANY CANNOT GUARANTEE THAT THIRD-PARTY AI PROVIDERS, INCLUDING HUME AI AND ELEVENLABS, WILL NOT USE TRANSMITTED DATA — INCLUDING ANONYMIZED DATA — TO IMPROVE, FINE-TUNE, OR TRAIN THEIR AI MODELS. While the Company employs enterprise-level API integrations with contractual data-use restrictions and implements zero-retention API settings where technically available, these measures depend on the terms and capabilities of each provider and are subject to change without notice.
            </LegalEmphasis>
            <p>By enabling and using Soby, the Buddy acknowledges and accepts these limitations.</p>
          </SubSection>

          <SubSection title="7.5 No Confidential or Therapeutic Relationship">
            <p>Communications between the Buddy and Soby do not create any attorney-client, physician-patient, therapist-client, or other professionally privileged relationship. The Company may process and store Soby conversations as described in the Privacy Policy.</p>
          </SubSection>

          <SubSection title="7.6 Crisis Situations — Soby Is Not a Crisis Resource">
            <LegalEmphasis>
              SOBY IS NOT EQUIPPED TO HANDLE CRISIS SITUATIONS. IF YOU ARE EXPERIENCING THOUGHTS OF SUICIDE, SELF-HARM, HARMING OTHERS, ACTIVE WITHDRAWAL SYMPTOMS, OR ANY MEDICAL OR PSYCHIATRIC EMERGENCY, DO NOT RELY ON SOBY.
            </LegalEmphasis>
            <p>Immediately contact:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>911 or your local emergency services;</li>
              <li>The 988 Suicide and Crisis Lifeline (call or text 988);</li>
              <li>The SAMHSA National Helpline at 1-800-662-4357;</li>
              <li>A qualified mental health professional or emergency room.</li>
            </ul>
          </SubSection>

          <SubSection title="7.7 No Reliance on Soby for Medical Decisions">
            <p>The Buddy expressly agrees not to make or refrain from making any medical decision — including decisions related to medication, detoxification, withdrawal, psychiatric treatment, or cessation of alcohol use — based on any output from Soby. All such decisions must be made in consultation with a licensed medical professional.</p>
          </SubSection>
        </Section>

        {/* 8 */}
        <Section title="8. Account Registration and Security">
          <p>The App supports account creation and sign-in via Google Authentication. By signing in through Google, you consent to the Company receiving identity information associated with your Google account as permitted by your Google privacy settings. You are responsible for your account's confidentiality and all activity under it. You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, complete, and current information at registration;</li>
            <li>Immediately notify the Company of any unauthorized account access at <a href="mailto:Support@GetSobr.ai" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Support@GetSobr.ai</a>;</li>
            <li>Log out of your account on shared devices;</li>
            <li>Not create more than one account or create one on behalf of another without their explicit authorization.</li>
          </ul>
          <ImportantNotice>
            <strong>No Password Storage — Authentication via SSO Only.</strong> The App does not use password-based authentication. Access to the App is provided exclusively through Google Single Sign-On (SSO) / OAuth or Apple Sign In / OAuth. BrightSlides LLC does not create, collect, store, transmit, or have access to your password at any time — your credentials are managed solely by Google or Apple in accordance with their respective authentication systems. If you lose access to your Google or Apple account, BrightSlides LLC cannot recover or reset your login credentials. You must contact Google or Apple directly for account recovery assistance.
          </ImportantNotice>
          <p>The Company may suspend or terminate any account at its sole discretion, with or without notice, for any reason including violation of these Terms.</p>
        </Section>

        {/* 9 */}
        <Section title="9. Subscription Plans and Payment Terms">
          <SubSection title="9.1 Free and Premium Features">
            <p>The App offers free features and Premium subscription features. Premium access is managed through RevenueCat via the Apple App Store or Google Play Store. The Company does not process or store credit card numbers or raw financial data.</p>
          </SubSection>

          <SubSection title="9.2 Auto-Renewal">
            <LegalEmphasis>
              YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW AT THE END OF EACH BILLING PERIOD UNLESS YOU CANCEL AT LEAST TWENTY-FOUR (24) HOURS BEFORE THE END OF THE CURRENT PERIOD. Renewal charges are processed within twenty-four (24) hours prior to the end of the billing period.
            </LegalEmphasis>
          </SubSection>

          <SubSection title="9.3 Cancellation and Dormant Accounts">
            <p>You may cancel your subscription at any time through the applicable app store platform. Cancellation takes effect at the end of the current billing period with no pro-rata refund. Free accounts with no detectable activity for three hundred sixty-five (365) consecutive days are deemed dormant. Any login resets the dormant clock. The Company reserves the right to delete dormant accounts and associated data in accordance with the Privacy Policy.</p>
          </SubSection>

          <SubSection title="9.4 Refund Policy">
            <p>All purchases are generally final and non-refundable, except as required by applicable law or the applicable app store's policies. For billing errors, contact the Company within thirty (30) days at <a href="mailto:Support@GetSobr.ai" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Support@GetSobr.ai</a>.</p>
          </SubSection>

          <SubSection title="9.5 Price Changes">
            <p>The Company may modify subscription pricing at any time with reasonable advance notice. Continued use after a price change constitutes acceptance of the new pricing.</p>
          </SubSection>
        </Section>

        {/* 10 */}
        <Section title="10. App Permissions and On-Device Data Handling">
          <SubSection title="10.1 Device Permissions Overview">
            <p>The App may request the following device permissions. You may revoke any permission at any time in your device settings, which may limit related functionality:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Camera:</strong> To capture Sobr Selfies and update your profile photo (see Section 10.2 for full selfie data policy);</li>
              <li><strong className="text-sobr-text">Contacts:</strong> To select an emergency contact or invite a Sponsor. The App accesses only specific contacts you select and does not upload your full address book;</li>
              <li><strong className="text-sobr-text">Location:</strong> To provide approximate weather context for journaling via Open-Meteo;</li>
              <li><strong className="text-sobr-text">Motion & Fitness:</strong> To integrate with Apple Health or Google Fit for holistic wellness tracking;</li>
              <li><strong className="text-sobr-text">Notifications:</strong> To send recovery reminders, check-in alerts, milestone notifications, and Sponsor chat alerts via Expo.</li>
            </ul>
            <p>You consent to data collection from permitted features as described in the Privacy Policy. To request deletion of any previously collected data, contact <a href="mailto:Support@GetSobr.ai" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Support@GetSobr.ai</a>.</p>
          </SubSection>

          <SubSection title="10.2 Sobr Selfie Data Policy">
            <p>The App includes a Sobr Selfie feature allowing Buddies to capture photos as part of their sobriety journey. The following policy governs how Sobr Selfie data is stored, transmitted, and used:</p>

            <h4 className="text-base font-jakarta font-semibold text-sobr-text mt-4 mb-2">On-Device Storage (Full Resolution)</h4>
            <p>Full-resolution Sobr Selfies are stored locally in a dedicated Sobr Selfie album on the Buddy's device. These full-resolution images are not uploaded to the Company's servers. The Company cannot access, view, or retrieve full-resolution Sobr Selfies from any device.</p>

            <h4 className="text-base font-jakarta font-semibold text-sobr-text mt-4 mb-2">Low-Resolution Thumbnail Upload (Backup Only)</h4>
            <p>A low-resolution thumbnail version of each Sobr Selfie is uploaded to the Company's secure cloud servers, encrypted with AES-256, and stored solely for backup and restore purposes. These thumbnails are not used for any commercial, marketing, advertising, AI training, or analytical purpose. They are not sold to or shared with any third party, except as required by law.</p>

            <h4 className="text-base font-jakarta font-semibold text-sobr-text mt-4 mb-2">Backup and Restore Use Cases</h4>
            <p>The thumbnail backup feature exists solely to serve the following recovery scenarios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-sobr-text">Device Migration:</strong> If a Buddy transitions from one device to another, full-resolution Sobr Selfies stored on the original device are not automatically transferred. The Buddy may opt to download the low-resolution thumbnail versions from the Company's cloud to their new device to preserve visual continuity of their sobriety timeline.</li>
              <li><strong className="text-sobr-text">Accidental Album Deletion:</strong> If a Buddy deletes their Sobr Selfie album from their device, the full-resolution images are permanently lost from that device and cannot be recovered by the Company. The Buddy may opt to download available low-resolution thumbnail versions from the cloud as a fallback.</li>
            </ul>

            <h4 className="text-base font-jakarta font-semibold text-sobr-text mt-4 mb-2">Important Limitations</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Downloaded thumbnails are low-resolution and will not match the quality of the original full-resolution photos;</li>
              <li>Thumbnail download is optional and must be initiated by the Buddy;</li>
              <li>The Company strongly recommends maintaining independent device backups (such as iCloud or Google Photos) as the primary means of photo preservation;</li>
              <li>Upon account deletion, all cloud-stored thumbnails are deleted from the Company's live servers in accordance with the Privacy Policy.</li>
            </ul>
          </SubSection>
        </Section>

        {/* 11 */}
        <Section title="11. User Conduct and Prohibited Uses">
          <p>By using the App, you agree that you will NOT:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the App for any purpose that is unlawful, fraudulent, or deceptive;</li>
            <li>Harass, abuse, threaten, stalk, intimidate, or harm any other User, Sponsor, or Company personnel;</li>
            <li>Impersonate any person or entity;</li>
            <li>Submit false, misleading, or inaccurate information;</li>
            <li>Solicit money, commercial goods, sexual contact, or personal favors from other Users;</li>
            <li>Attempt to gain unauthorized access to the App, other accounts, or the Company's systems;</li>
            <li>Attempt to reverse engineer, decompile, or derive the source code of the App or the Soby AI system;</li>
            <li>Interfere with or disrupt the App or its third-party services;</li>
            <li>Use automated tools, bots, or scrapers to interact with the App;</li>
            <li>Upload or transmit malicious code or harmful software;</li>
            <li>Attempt to circumvent, decrypt, or access encrypted User data or communications that are not your own.</li>
          </ul>
        </Section>

        {/* 12 */}
        <Section title="12. User-Generated Content">
          <p>The App permits Buddies to submit journal entries, mood logs, urge logs, drink logs, check-in responses, chat messages, Sobr Selfie thumbnails, and profile details (collectively, "User Content"). By submitting User Content, you represent and warrant you own or have rights to it and that it does not violate any third-party rights or applicable law.</p>
          <p>You grant the Company a non-exclusive, royalty-free, worldwide license to store, process, and use your User Content solely to provide and operate the Services, including Soby's AI analysis features and the Sobr Selfie backup and restore feature. The Company does not sell your identifiable User Content. Recovery and journal data is treated as highly sensitive and used strictly to deliver App functionality.</p>
          <p>Sponsor/Buddy chat logs are encrypted with AES-256. Deletion of chat logs is controlled by the optional 30-day auto-delete setting, as described in Section 14.3. All other User Content is retained while your account is active and deleted upon account deletion, consistent with the Privacy Policy.</p>
        </Section>

        {/* 13 */}
        <Section title="13. Intellectual Property Rights">
          <p>All content, features, functionality, design, trademarks, logos, software, the Soby AI system, algorithms, interfaces, and questionnaire frameworks comprising the App (collectively, "Company IP") are owned exclusively by BrightSlides LLC or its licensors and are protected by applicable intellectual property laws.</p>
          <p>Subject to your compliance with these Terms, the Company grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the App on your personal device for personal, non-commercial use only. All rights not expressly granted are reserved.</p>
        </Section>

        {/* 14 */}
        <Section title="14. Privacy and Data Security">
          <SubSection title="14.1 Privacy Policy">
            <p>Your use of the App is subject to BrightSlides LLC's <Link to="/privacy" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Privacy Policy</Link> (effective February 16, 2026), incorporated into these Terms by reference. The Privacy Policy describes the categories of data collected, how it is used, which third-party processors have access (including Supabase, RevenueCat, Expo, Open-Meteo, Hume AI, ElevenLabs, and PostHog), data retention and deletion practices, and your privacy rights by jurisdiction.</p>
            <p>By using the App, you consent to the collection, processing, and storage of your information as described in the Privacy Policy.</p>
          </SubSection>

          <SubSection title="14.2 AES-256 Encryption">
            <p>BrightSlides LLC employs AES-256 (Advanced Encryption Standard, 256-bit) encryption — the same standard used by the United States government and major financial institutions — to protect the following categories of data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Drink logs, urge logs, and mood logs;</li>
              <li>Daily check-in data and questionnaire responses;</li>
              <li>Sobr Selfie thumbnails stored on the Company's cloud servers;</li>
              <li>In-app chat messages between Buddies and Sponsors;</li>
              <li>All other recovery and health-related data stored on the Company's servers.</li>
            </ul>
            <p>AES-256 encrypted data is not readable by humans — including Company employees — in its encrypted form. Decryption occurs only within the App on the Buddy's authenticated device for the purpose of displaying that Buddy's own data. The Company does not have the ability to read individual encrypted data records outside of the App's normal authenticated operation.</p>
            <p>All data transmitted between the App and the Company's servers is additionally protected by SSL/TLS encryption in transit. While the Company employs these industry-standard security measures, no electronic system is 100% immune from unauthorized access. The Company cannot guarantee absolute security against all possible threats.</p>
          </SubSection>

          <SubSection title="14.3 Chat Encryption and Optional Auto-Delete">
            <p>All in-app chat messages between Buddies and their Sponsors are encrypted with AES-256. The App includes an optional chat auto-delete setting that, when enabled, automatically deletes chat messages on a rolling 30-day basis. This setting can be enabled or disabled by either the Buddy or the Sponsor at any time within the App's settings.</p>
            <p>When the auto-delete setting is enabled:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chat messages are automatically deleted on a rolling basis, cleaned daily at midnight following the 30-day retention window;</li>
              <li>Once deleted, chat messages cannot be recovered by the Company, the Buddy, or the Sponsor;</li>
              <li>The setting applies to the shared conversation thread — both Buddy and Sponsor messages are subject to deletion.</li>
            </ul>
            <p>When the auto-delete setting is disabled, chat messages are retained until either party enables the setting, the account is deleted, or the Company removes them for policy violations. The Company recommends that Buddies not rely on the App's chat feature as a permanent archive of important communications regardless of deletion settings.</p>
          </SubSection>
        </Section>

        {/* 15 */}
        <Section title="15. Third-Party Services">
          <p>The App integrates with third-party services including Supabase (database and authentication), RevenueCat (subscription management), Expo (push notifications), Open-Meteo (weather data), Google and Apple (payment processing and authentication), Hume AI (conversational AI), ElevenLabs (voice synthesis), and PostHog (anonymized product analytics). The Company does not own or control these services and is not responsible for their content, availability, privacy practices, or data-handling beyond the scope of its vendor agreements.</p>
          <p>Your use of Third-Party Services is subject to each provider's own terms and policies. The Company is not liable for any failure, interruption, error, or harm caused by any Third-Party Service.</p>
        </Section>

        {/* 16 */}
        <Section title="16. Disclaimer of Warranties">
          <LegalEmphasis>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE APP AND ALL SERVICES, CONTENT, FEATURES, SOBY AI OUTPUTS, AND INFORMATION PROVIDED THROUGH THE APP ARE PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS," WITHOUT WARRANTY OF ANY KIND BY BRIGHTSLIDES LLC OR ANY OF ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, LICENSORS, OR SUCCESSORS (COLLECTIVELY, THE "COMPANY PARTIES"), EITHER EXPRESS OR IMPLIED.
          </LegalEmphasis>
          <p>THE COMPANY PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement;</li>
            <li>Any warranty that the App will be uninterrupted, error-free, secure, or free of harmful components;</li>
            <li>Any warranty as to the accuracy, completeness, or usefulness of any content, Soby output, or Sponsor communication;</li>
            <li>Any warranty that the App will meet your individual needs or expectations;</li>
            <li>Any warranty of sobriety outcomes, health improvements, or program completion;</li>
            <li>Any warranty that AES-256 encryption or any other security measure will prevent all unauthorized access;</li>
            <li>Any warranty regarding the performance or data-handling of Hume AI, ElevenLabs, PostHog, or any other third-party provider.</li>
          </ul>
        </Section>

        {/* 17 */}
        <Section title="17. Limitation of Liability">
          <LegalEmphasis>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY PARTIES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DAMAGES — REGARDLESS OF THEORY OF LIABILITY AND EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </LegalEmphasis>
          <p>This includes without limitation:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any indirect, incidental, special, consequential, exemplary, or punitive damages;</li>
            <li>Any loss of profits, revenue, business, goodwill, or data;</li>
            <li>Any personal injury, bodily harm, death, emotional distress, psychological harm, or relapse into alcohol use;</li>
            <li>Any harm arising from the conduct, advice, or omissions of any Sobr Sponsor;</li>
            <li>Any harm arising from any output, failure, inaccuracy, or unavailability of Soby or any third-party AI provider;</li>
            <li>Any harm from reliance on any content, information, feature, or AI response in the App;</li>
            <li>Any harm from unauthorized access to your account, data, or encrypted content;</li>
            <li>Any loss or permanent deletion of Sobr Selfies or other User Content from the Buddy's device;</li>
            <li>Any dissatisfaction with the quality of low-resolution thumbnail images downloaded via the backup/restore feature;</li>
            <li>Any harm from any Third-Party Service including Supabase, RevenueCat, Expo, Hume AI, ElevenLabs, or PostHog;</li>
            <li>Any harm arising from your use of the App while intoxicated or impaired.</li>
          </ul>
          <LegalEmphasis>
            IN NO EVENT SHALL THE TOTAL AGGREGATE LIABILITY OF THE COMPANY PARTIES TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID TO THE COMPANY IN THE THREE (3) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS (USD $100.00). THIS LIMITATION OF LIABILITY IS AN ESSENTIAL ELEMENT OF THE BARGAIN BETWEEN THE COMPANY AND YOU.
          </LegalEmphasis>
        </Section>

        {/* 18 */}
        <Section title="18. Indemnification">
          <SubSection title="18.1 Comprehensive Indemnification Obligation">
            <LegalEmphasis>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD HARMLESS BRIGHTSLIDES LLC AND EACH OF ITS PAST, PRESENT, AND FUTURE OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, AGENTS, CONTRACTORS, SUBSIDIARIES, AFFILIATES, PARTNERS, LICENSORS, SUCCESSORS, AND ASSIGNS (THE "INDEMNIFIED PARTIES") FROM AND AGAINST ANY AND ALL LOSSES, DAMAGES, LIABILITIES, CLAIMS, DEMANDS, SUITS, JUDGMENTS, SETTLEMENTS, PENALTIES, FINES, COSTS, AND EXPENSES OF ANY KIND — INCLUDING REASONABLE ATTORNEYS' FEES, EXPERT FEES, COURT COSTS, AND INVESTIGATION COSTS.
            </LegalEmphasis>
            <p>This indemnification applies to claims arising out of or relating to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to, use of, or inability to use the App or any of its features, including Soby and the Sponsor feature;</li>
              <li>Your breach of any representation, warranty, covenant, or obligation under these Terms;</li>
              <li>Your violation of any applicable law, regulation, or ordinance;</li>
              <li>Your violation of any third party's rights, including intellectual property, privacy, or contractual rights;</li>
              <li>Any User Content you submit, upload, post, or transmit through the App, including Sobr Selfies;</li>
              <li>Any dispute between you and any Sobr Sponsor, including claims arising from your selection of, failure to vet, interaction with, or reliance upon any Sponsor;</li>
              <li>Any claim by a Sponsor against the Company arising from your conduct toward them;</li>
              <li>Any claim by a third party harmed by the conduct of a Sponsor you selected, to the extent asserted against the Company;</li>
              <li>Any decision or action you took, or failed to take, in reliance upon any Soby output, including any medical or safety decision;</li>
              <li>Any claim that Soby's responses misled, harmed, or failed to support you;</li>
              <li>Any misuse of the App contrary to these Terms or applicable law;</li>
              <li>Any personal injury, death, or property damage arising from your conduct in connection with the App;</li>
              <li>Any claim that the Company is responsible for or complicit in the conduct of your selected Sponsor.</li>
            </ul>
          </SubSection>

          <SubSection title="18.2 Defense and Cooperation">
            <p>The Company may assume exclusive control of any indemnified matter at its own expense. You agree to cooperate fully in the defense of such claims and not to settle any indemnified matter without the Company's prior written consent.</p>
          </SubSection>

          <SubSection title="18.3 Indemnification Is Not Capped">
            <p>The Buddy's indemnification obligation under this Section 18 is not subject to the liability cap in Section 17. The Section 17 cap applies only to claims by the Buddy against the Company — it does not limit the Buddy's obligation to defend and indemnify the Company against third-party claims.</p>
          </SubSection>

          <SubSection title="18.4 Survival">
            <p>Indemnification obligations under this Section 18 survive the termination or expiration of these Terms and the Buddy's cessation of App use, without time limit.</p>
          </SubSection>
        </Section>

        {/* 19 */}
        <Section title="19. Dispute Resolution, Arbitration, and Class Action Waiver">
          <SubSection title="19.1 Informal Resolution First">
            <p>Before initiating any formal proceeding, you agree to contact the Company at <a href="mailto:Support@GetSobr.ai" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Support@GetSobr.ai</a> and attempt to resolve any dispute informally. The Company will attempt to resolve the dispute in good faith within thirty (30) days of receiving written notice.</p>
          </SubSection>

          <SubSection title="19.2 Binding Arbitration">
            <LegalEmphasis>
              IF INFORMAL RESOLUTION FAILS, YOU AND THE COMPANY AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THESE TERMS OR THE APP — INCLUDING QUESTIONS OF ARBITRABILITY — SHALL BE RESOLVED EXCLUSIVELY THROUGH FINAL AND BINDING ARBITRATION UNDER THE CONSUMER ARBITRATION RULES OF THE AMERICAN ARBITRATION ASSOCIATION ("AAA"), RATHER THAN IN COURT. Arbitration shall be conducted in the State of Nebraska, unless otherwise agreed in writing by both parties. The arbitrator's decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
            </LegalEmphasis>
          </SubSection>

          <SubSection title="19.3 Class Action Waiver">
            <LegalEmphasis>
              YOU AND THE COMPANY EACH EXPRESSLY WAIVE THE RIGHT TO PARTICIPATE IN ANY CLASS ACTION LAWSUIT, CLASS-WIDE ARBITRATION, PRIVATE ATTORNEY GENERAL ACTION, OR ANY OTHER REPRESENTATIVE PROCEEDING. ALL DISPUTES SHALL BE RESOLVED ON AN INDIVIDUAL BASIS ONLY. IF ANY CLAIM PROCEEDS IN COURT RATHER THAN ARBITRATION, BOTH PARTIES WAIVE ANY RIGHT TO A JURY TRIAL.
            </LegalEmphasis>
          </SubSection>

          <SubSection title="19.4 Governing Law">
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Nebraska, without regard to conflict-of-law principles. To the extent any claim is not subject to arbitration, you consent to the exclusive jurisdiction of the state and federal courts located in Douglas County, Nebraska.</p>
          </SubSection>

          <SubSection title="19.5 One-Year Limitation Period">
            <LegalEmphasis>
              ANY CAUSE OF ACTION OR CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE APP MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER IT ACCRUES. ANY CLAIM NOT BROUGHT WITHIN THAT PERIOD IS PERMANENTLY BARRED.
            </LegalEmphasis>
          </SubSection>
        </Section>

        {/* 20 */}
        <Section title="20. Account Termination and Data Deletion">
          <p>The Company may suspend or terminate your account at any time, with or without notice, for any reason including violation of these Terms, harmful conduct, failure to pay fees, or applicable legal requirements.</p>
          <p>You may delete your account at any time by selecting "Delete Account" in the App settings. Upon deletion, all data — including encrypted recovery data and Sobr Selfie thumbnails stored in the cloud — is removed from live databases. Data may persist in encrypted backups for a limited period for disaster recovery and legal compliance purposes, as described in the Privacy Policy.</p>
          <ImportantNotice>
            <strong>Requesting Full Data Deletion.</strong> If you wish to request the deletion of your account and all associated personal data, you may do so in one of two ways: (1) by using the "Delete Account" option within the App's settings, or (2) by submitting a written deletion request to <a href="mailto:Support@GetSobr.ai" className="text-sobr-coral hover:text-sobr-coral-light underline transition-colors">Support@GetSobr.ai</a>. BrightSlides LLC will make best efforts to fulfill verified deletion requests within a reasonable time, subject to any applicable legal retention obligations.
          </ImportantNotice>
          <p>Sections 5, 6.3, 6.7, 7, 13, 16, 17, 18, and 19 of these Terms survive termination for any reason.</p>
        </Section>

        {/* 21 */}
        <Section title="21. General Provisions">
          <SubSection title="21.1 Entire Agreement">
            <p>These Terms, together with the Privacy Policy, constitute the entire agreement between you and the Company with respect to the App and supersede all prior agreements and understandings.</p>
          </SubSection>

          <SubSection title="21.2 Severability">
            <p>If any provision of these Terms is found unlawful, void, or unenforceable, that provision is severable and does not affect the validity of the remaining provisions.</p>
          </SubSection>

          <SubSection title="21.3 Waiver">
            <p>Failure to enforce any right or provision is not a waiver. Any waiver must be in writing signed by an authorized representative of the Company.</p>
          </SubSection>

          <SubSection title="21.4 Assignment">
            <p>You may not assign your rights or obligations under these Terms without the Company's prior written consent. The Company may freely assign these Terms, including in connection with a merger, acquisition, or sale of assets.</p>
          </SubSection>

          <SubSection title="21.5 Force Majeure">
            <p>The Company is not liable for any failure or delay caused by circumstances beyond its reasonable control, including acts of God, natural disasters, pandemic, war, cyberattacks, governmental action, or third-party service provider failures.</p>
          </SubSection>

          <SubSection title="21.6 Notices">
            <p>The Company may provide notices via your registered email, in-app notifications, or by posting to the App. You may contact the Company using the information in Section 22.</p>
          </SubSection>
        </Section>

        {/* 22 */}
        <Section title="22. Contact Information">
          <p>For questions, concerns, legal notices, data deletion requests, or to report a violation:</p>
          <div className="bg-sobr-card border border-white/10 rounded-lg p-6 mt-2">
            <p className="font-semibold text-sobr-text">BrightSlides LLC</p>
            <p>12025 Shamrock Plaza, Omaha, NE 68154</p>
            <p>
              Email:{" "}
              <a
                href="mailto:Support@GetSobr.ai"
                className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline"
              >
                Support@GetSobr.ai
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.getsobr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sobr-coral hover:text-sobr-coral-light transition-colors underline"
              >
                https://www.getsobr.ai
              </a>
            </p>
          </div>
          <ImportantNotice>
            For urgent health or safety matters, do not use the contact above. Call 911 or SAMHSA at 1-800-662-4357 directly.
          </ImportantNotice>
        </Section>

        <div className="h-px w-full bg-white/10 my-10" />
        <p className="text-sm text-sobr-text-muted font-inter text-center italic">
          By using the Sobr App, you acknowledge you have read, understood, and agree to be legally bound by these Terms.
        </p>
        <p className="text-sm text-sobr-text-muted font-inter text-center mt-2">
          BrightSlides LLC · Omaha, Nebraska · Effective April 9, 2026
        </p>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsAndConditions;
