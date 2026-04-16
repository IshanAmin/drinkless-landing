import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Sparkles,
  ShieldCheck,
  LineChart,
  Brain,
  CheckCircle2,
  Zap,
  Users,
  Heart,
  Activity,
  Quote,
} from "lucide-react";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";

const APP_STORE_URL = "https://apps.apple.com/us/app/sobr-quit-drinking-coach/id6748581017";

const benefits = [
  {
    icon: Zap,
    title: "Instant Craving Support",
    description:
      "Get real-time AI coaching the moment a craving strikes. No waiting for a meeting or a callback.",
  },
  {
    icon: ShieldCheck,
    title: "Total Privacy & Discretion",
    description:
      "Work on yourself without the “public” labels. Your journey is your business, powered by secure AI technology.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Clarity",
    description:
      "Track your health gains, money saved, and hours of sleep recovered. See the tangible proof of your success every day.",
  },
  {
    icon: Brain,
    title: "Science-Backed Habit Rewiring",
    description:
      "Use proven cognitive techniques to break the cues that trigger your drinking and build new, healthy rituals.",
  },
];

const steps = [
  {
    n: "01",
    title: "Sign Up and Personalize",
    description:
      "Tell the AI about your goals and your triggers. We build a custom 90-day plan tailored to your lifestyle.",
  },
  {
    n: "02",
    title: "Connect and Chat",
    description:
      "Check in daily. Whether you’re celebrating a win or struggling with a stressful day, your AI coach is there to guide you.",
  },
  {
    n: "03",
    title: "Track Your Transformation",
    description:
      "Watch your “Respect Score” and health metrics climb as you regain the clarity you thought you’d lost.",
  },
];

const personas = [
  {
    icon: Users,
    title: "The High-Performer",
    description:
      "You’re successful, but you know alcohol is the “glass ceiling” keeping you from your next level of leadership and focus.",
  },
  {
    icon: Heart,
    title: "The Present Parent",
    description:
      "You want to be fully “there” for your kids, without the evening wine or the morning irritability getting in the way.",
  },
  {
    icon: Activity,
    title: "The Health Conscious",
    description:
      "You’ve optimized your diet and your gym routine—now you’re ready to remove the one thing sabotaging your physical results.",
  },
];

const testimonials = [
  {
    quote:
      "Before Sobr, I was stuck in a loop of 'Day 1s.' The AI support in my pocket kept me accountable during the 6 PM itch. Now, I have 100 days under my belt and my wife says I've never been more present.",
    author: "Mark S.",
    role: "Tech Executive",
  },
  {
    quote:
      "I didn't want to go to a basement meeting. Sobr gave me the privacy to heal. The clarity I have now is worth more than any drink ever was.",
    author: "Sarah J.",
    role: "Small Business Owner",
  },
  {
    quote:
      "Sobr didn't just help me stop drinking; it helped me start living. I’ve saved $800 in three months and my energy levels are through the roof.",
    author: "David L.",
    role: "Fitness Coach",
  },
];

const faqs = [
  {
    q: "Is my data private and secure?",
    a: "Absolutely. Your privacy is our priority. We use industry-standard encryption, and your interactions with the AI are strictly confidential. You are in control of your data at all times.",
  },
  {
    q: "Do I have to quit forever?",
    a: "That is up to you. Sobr helps you take control. Many members find that after 90 days of clarity, they prefer the sober life, while others use the tools to maintain strict moderation.",
  },
  {
    q: "How is this different from a traditional sponsor?",
    a: "Sobr is available 24/7, instantly. There’s no fear of judgment, no scheduling conflicts, and no social pressure. It’s an objective, science-based tool designed to fit into your modern life.",
  },
  {
    q: "What happens after the 90 days?",
    a: "By day 90, you will have built new habits and a new mindset. Most members continue using Sobr as a “maintenance” tool to track their continued success and long-term health gains.",
  },
];

const LearnHowToQuit = () => {
  // SEO: title + meta description + canonical + JSON-LD
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Learn How to Quit Drinking in 90 Days | Sobr";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
      return el;
    };
    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
      return el;
    };

    const desc =
      "Discover how to quit alcohol with Sobr, using a Live Sponsor and AI to help you regain clarity, respect, and success. Start your 90-day journey to a better life today.";

    setMeta("description", desc);
    setOg("og:title", "Learn How to Quit Drinking in 90 Days | Sobr");
    setOg("og:description", desc);
    setOg("og:type", "website");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const created = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/learn-how-to-quit-drinking`;

    // FAQ schema
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      if (created && canonical) canonical.remove();
      ld.remove();
    };
  }, []);

  return (
    <div className="sobr-dark min-h-screen bg-sobr-root text-sobr-text font-inter">
      <main>
        {/* HERO */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_hsl(var(--sobr-primary)/0.18),_transparent_60%),radial-gradient(circle_at_80%_60%,_hsl(var(--sobr-secondary)/0.12),_transparent_55%)]" />
          <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sobr-coral/10 border border-sobr-coral/20 text-sobr-coral text-sm font-medium mb-6 font-jakarta">
                  <Sparkles className="h-4 w-4" />
                  Your 90-Day Reset
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold leading-tight mb-6">
                  Master Your Relationship with Alcohol:{" "}
                  <span className="text-sobr-coral">Learn How Sobr Can Help</span>
                </h1>
                <p className="text-lg md:text-xl text-sobr-text-secondary font-semibold mb-4 font-jakarta">
                  Your 90-day roadmap to regaining clarity, earning back respect, and achieving the success you deserve.
                </p>
                <p className="text-base md:text-lg text-sobr-text-muted leading-relaxed mb-8">
                  You’re tired of the “just one more” cycle. You’re ready to wake up without the fog and the regret.
                  Whether you want to cut back or quit entirely, Sobr provides the 24/7 support you need to make it stick.
                </p>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sobr-coral text-sobr-root font-semibold font-jakarta hover:bg-sobr-coral-light transition-all duration-300 shadow-lg shadow-sobr-coral/20 hover:scale-105"
                >
                  Start Your 90-Day Journey
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: "150ms" }}>
                <div className="absolute -inset-4 bg-gradient-to-br from-sobr-coral/30 to-sobr-amber/20 rounded-3xl blur-2xl opacity-60" />
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80"
                  alt="Person experiencing clarity and success with Sobr AI sobriety coach."
                  loading="eager"
                  className="relative w-full h-[420px] md:h-[520px] object-cover rounded-3xl border border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* TRUST BAR */}
        <section className="border-y border-white/5 bg-sobr-card/40">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm text-sobr-text-muted font-inter text-center">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sobr-coral" />
                Trusted by thousands of high-performers
              </span>
              <span className="hidden md:inline text-white/20">•</span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-sobr-amber text-sobr-amber" />
                4.9★ Member Rating
              </span>
              <span className="hidden md:inline text-white/20">•</span>
              <span>Featured in Wellness Insider</span>
            </div>
          </div>
        </section>

        {/* THE SILENT WEIGHT */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-6">
                  The Silent Weight of <span className="text-sobr-coral">“One Too Many”</span>
                </h2>
                <p className="text-sobr-text-muted text-lg leading-relaxed mb-6">
                  We know how it feels. You start the day with the best intentions, but by 5 PM, the habit takes over.
                  It’s not just about the drink — it’s about what the drink takes away from you.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "The Morning Fog",
                      body: "Losing your most productive hours to a headache and “brain fog.”",
                    },
                    {
                      title: "The Broken Promises",
                      body: "Telling yourself (and your family) you’ll stop, only to let them down again.",
                    },
                    {
                      title: "The Stalled Growth",
                      body: "Knowing that your career or health could be so much further along if you weren’t held back.",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-4 p-4 rounded-xl bg-sobr-card/50 border border-white/5"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-sobr-coral/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-sobr-coral" />
                      </div>
                      <div>
                        <h3 className="font-jakarta font-semibold text-sobr-text mb-1">{item.title}</h3>
                        <p className="text-sm text-sobr-text-muted">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sobr-text-muted italic">
                  It’s a lonely cycle, and traditional methods often feel too rigid, too public, or too late when a craving hits.
                </p>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "150ms" }}>
                <img
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80"
                  alt="Tired professional reflecting on the weight of nightly drinking habits."
                  loading="lazy"
                  className="w-full h-[480px] object-cover rounded-3xl border border-white/10 grayscale-[15%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI POWERED PATH — BENEFITS */}
        <section className="py-20 md:py-28 bg-sobr-card/30 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">
                The AI-Powered Path to a <span className="text-sobr-coral">New You</span>
              </h2>
              <p className="text-sobr-text-muted text-lg">
                Sobr isn’t just an app — it’s your 24/7 sober companion that never judges and never sleeps. Here is how Sobr can help you transform in just 90 days.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="group rounded-2xl bg-sobr-root/60 border border-white/10 p-6 hover:border-sobr-coral/40 hover:-translate-y-1 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-sobr-coral/10 flex items-center justify-center mb-4 group-hover:bg-sobr-coral/20 transition-colors">
                      <Icon className="h-6 w-6 text-sobr-coral" />
                    </div>
                    <h3 className="font-jakarta font-semibold text-lg mb-2">{b.title}</h3>
                    <p className="text-sm text-sobr-text-muted leading-relaxed">{b.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* THREE STEPS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">
                Three Steps to Your <span className="text-sobr-coral">Best Self</span>
              </h2>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl bg-gradient-to-br from-sobr-card to-sobr-root border border-white/10 p-8 hover:border-sobr-coral/30 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-sobr-coral text-sobr-root font-jakarta font-bold text-sm">
                    Step {s.n}
                  </span>
                  <h3 className="font-jakarta font-bold text-xl mb-3 mt-2">{s.title}</h3>
                  <p className="text-sobr-text-muted leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAS */}
        <section className="py-20 md:py-28 bg-sobr-card/30 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">
                Is Sobr <span className="text-sobr-coral">Right for You?</span>
              </h2>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {personas.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl bg-sobr-root/60 border border-white/10 p-8 hover:border-sobr-coral/40 hover:-translate-y-1 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sobr-coral/20 to-sobr-amber/10 flex items-center justify-center mb-5">
                      <Icon className="h-7 w-7 text-sobr-coral" />
                    </div>
                    <h3 className="font-jakarta font-bold text-xl mb-3">{p.title}</h3>
                    <p className="text-sobr-text-muted leading-relaxed">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">
                Real Stories of <span className="text-sobr-coral">Recovery</span>
              </h2>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <figure
                  key={t.author}
                  className="relative rounded-2xl bg-sobr-card/60 border border-white/10 p-8 hover:border-sobr-coral/30 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Quote className="absolute -top-3 -left-3 h-8 w-8 text-sobr-coral/40" />
                  <blockquote className="text-sobr-text-secondary italic leading-relaxed mb-6">
                    “{t.quote}”
                  </blockquote>
                  <figcaption>
                    <div className="font-jakarta font-semibold text-sobr-text">{t.author}</div>
                    <div className="text-sm text-sobr-text-muted">{t.role}</div>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-sobr-amber text-sobr-amber" />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-sobr-card/30 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-center mb-12 animate-fade-in">
                Common <span className="text-sobr-coral">Questions</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl bg-sobr-root/60 border border-white/10 p-6 hover:border-sobr-coral/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <summary className="cursor-pointer font-jakarta font-semibold text-lg flex justify-between items-center list-none">
                      <span>{f.q}</span>
                      <span className="text-sobr-coral text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-sobr-text-muted leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--sobr-primary)/0.2),_transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-jakarta font-bold mb-6 leading-tight">
              Don’t Wait for a “Better Time” —{" "}
              <span className="text-sobr-coral">Build a Better You</span>
            </h2>
            <p className="text-lg text-sobr-text-muted mb-10 leading-relaxed">
              The best time to regain your clarity was yesterday. The second best time is right now. Join the thousands who have used Sobr to change their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sobr-coral text-sobr-root font-semibold font-jakarta hover:bg-sobr-coral-light transition-all duration-300 shadow-lg shadow-sobr-coral/30 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-sobr-text font-semibold font-jakarta hover:border-sobr-coral hover:text-sobr-coral transition-colors"
              >
                See Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
};

export default LearnHowToQuit;
