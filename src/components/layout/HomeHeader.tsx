import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/sobr-quit-drinking-coach/id6748581017";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/learn-how-to-quit-drinking", label: "How It Works" },
  { to: "/the-epidemic", label: "The Epidemic" },
  { to: "/blog", label: "Blog" },
  { to: "/support", label: "Support" },
];

/**
 * HomeHeader — used only on `/`.
 * Transparent overlay header with menu on the LEFT.
 * Logo is intentionally omitted; the large Sobr logo lives in the hero.
 */
const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`absolute md:fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "md:bg-sobr-root/85 md:backdrop-blur-md md:border-b md:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Left — nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-jakarta font-medium transition-colors ${
                    isActive
                      ? "text-sobr-coral bg-sobr-coral/10"
                      : "text-sobr-text-secondary hover:text-sobr-text hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right — CTA (desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sobr-coral text-sobr-root font-jakarta font-semibold text-sm hover:bg-sobr-coral-light transition-all hover:scale-105 shadow-md shadow-sobr-coral/20"
            >
              Get the App
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile toggle — left side, so it doesn't collide with hero logo */}
          <button
            className="md:hidden p-2 rounded-lg bg-sobr-root/40 backdrop-blur-sm text-sobr-text hover:bg-sobr-root/60 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Spacer so the mobile button stays left-aligned */}
          <div className="md:hidden" aria-hidden="true" />
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-fade-in bg-sobr-root/90 backdrop-blur-md rounded-b-2xl -mx-4 px-4">
            <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-jakarta font-medium transition-colors ${
                      isActive
                        ? "text-sobr-coral bg-sobr-coral/10"
                        : "text-sobr-text-secondary hover:text-sobr-text hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sobr-coral text-sobr-root font-jakarta font-semibold text-sm hover:bg-sobr-coral-light transition-colors"
              >
                Get the App
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
