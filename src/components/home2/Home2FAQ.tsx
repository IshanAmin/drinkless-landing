import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Sobr?",
    a: "Sobr is a mobile app for iOS and Android that helps people quit or reduce alcohol. It combines AI-powered support (Soby AI), personal tracking, gamification, and a unique Buddy–Sponsor pairing system.",
  },
  {
    q: "What's the difference between a Buddy and a Sponsor?",
    a: "A Buddy is the person on the sobriety journey — they track, journal, and get AI support. A Sponsor is someone who supports a Buddy — they get a dashboard, nudge system, and crisis alerts.",
  },
  {
    q: "Is Sobr free?",
    a: "Sobr offers a free tier with core features. Premium plans unlock advanced AI support, unlimited journal entries, and additional gamification rewards.",
  },
  {
    q: "How does the Crisis Flow work?",
    a: "When an urge hits, Crisis Flow activates a guided sequence — breathing exercises, distraction activities, and escalation to your Sponsor or emergency contacts if needed.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. We use industry-standard encryption and never sell your data. Your journey is yours — we protect it.",
  },
  {
    q: "Can I use Sobr without a Sponsor?",
    a: "Yes. While having a Sponsor adds accountability, Sobr works fully independently with Soby AI, check-ins, journaling, and all core features.",
  },
  {
    q: "Where can I download the app?",
    a: "Sobr is available on the Apple App Store and Google Play Store. Download links are at the top and bottom of this page.",
  },
];

const Home2FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Got questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-white/5 rounded-xl bg-sobr-card/60 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-sobr-text font-jakarta font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sobr-text-muted font-inter pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Home2FAQ;
