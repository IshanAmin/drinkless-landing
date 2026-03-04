import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sobr helped me see my progress when I couldn't see it myself. The daily check-ins changed everything.",
    name: "Sarah M.",
    role: "Buddy — 6 months sober",
  },
  {
    quote: "As a sponsor, I finally have a way to stay connected without being overbearing. The nudge system is genius.",
    name: "James T.",
    role: "Sponsor",
  },
  {
    quote: "Soby AI was there at 2 AM when no one else was. It didn't judge — it just helped me breathe through it.",
    name: "Alex R.",
    role: "Buddy — 1 year sober",
  },
];

const Home2Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-sobr-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sobr-coral font-jakarta font-semibold tracking-wide uppercase text-sm">
            Real stories
          </p>
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-sobr-text">
            Voices from the Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-sobr-elevated border border-white/5 space-y-6 animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="w-8 h-8 text-sobr-coral/40" />
              <p className="text-sobr-text-secondary font-inter leading-relaxed italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-jakarta font-bold text-sobr-text">{t.name}</p>
                <p className="text-sm text-sobr-text-muted font-inter">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home2Testimonials;
