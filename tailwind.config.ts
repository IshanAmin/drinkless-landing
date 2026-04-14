import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // SobrAI palette
        sobr: {
          root: "hsl(var(--sobr-bg-root))",
          secondary: "hsl(var(--sobr-bg-secondary))",
          card: "hsl(var(--sobr-bg-card))",
          elevated: "hsl(var(--sobr-bg-elevated))",
          coral: "hsl(var(--sobr-primary))",
          "coral-light": "hsl(var(--sobr-primary-light))",
          "coral-dark": "hsl(var(--sobr-primary-dark))",
          amber: "hsl(var(--sobr-secondary))",
          blue: "hsl(var(--sobr-accent))",
          text: "hsl(var(--sobr-text-main))",
          "text-secondary": "hsl(var(--sobr-text-secondary))",
          "text-muted": "hsl(var(--sobr-text-muted))",
          success: "hsl(var(--sobr-success))",
          warning: "hsl(var(--sobr-warning))",
          error: "hsl(var(--sobr-error))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 0px hsl(var(--sobr-primary) / 0))",
          },
          "50%": {
            transform: "scale(1.08)",
            filter: "drop-shadow(0 0 16px hsl(var(--sobr-primary) / 0.4))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
