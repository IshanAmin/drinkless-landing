

# Home2 Redesign Plan — Updated with Brand Assets & Colors

## Design Direction

Inspired by the Reasonal reference site: clean sectioned layout with alternating backgrounds, phone mockups, feature grids, testimonials, FAQ, and app store buttons. But with SobrAI's warm, empathetic personality — dark backgrounds from your palette with sunset-warm accents. The feeling: hopeful, caring, "the sun is rising on your new life."

## Brand Assets to Copy Into Project

- `Sobr-Icon-Black.png` → `src/assets/sobr-icon.png` (header, favicon)
- `App-Icon_with_Text-500x137.png` → `src/assets/sobr-logo-light.png` (for dark backgrounds)
- `App-Icon_with_Text_500x137_black.png` → `src/assets/sobr-logo-dark.png` (for light backgrounds)
- `Download_for_iOS_Button.png` → `src/assets/app-store-badge.png`
- `Download_for_Google_Play_Button.png` → `src/assets/google-play-badge.png`
- `iPhone_17_Pro.png` → `src/assets/iphone-frame.png`

## Color Integration

Update `tailwind.config.ts` with your palette. The site will use **dark mode by default** — deep purple-black backgrounds (`#0B0913`, `#251C38`) with warm text (`#FFF9F7`, `#F0CBC0`) and coral CTAs (`#FF7E6B`). Accent blue (`#4AA8FF`) for links/info elements. Font: Inter + Plus Jakarta Sans via Google Fonts.

## Page Sections (top to bottom)

### 1. WIP Banner (keep as-is)

### 2. Hero — Dark bg (`#0B0913`)
- Logo (light version) top-left
- Headline: "Your Partner in Leaving Alcohol Behind" in warm white
- Subline referencing the dual Buddy/Sponsor experience
- Two coral CTA buttons: "I Want to Quit" / "I Want to Help Someone"
- App Store + Google Play badges below CTAs
- Right side: iPhone frame with placeholder screen (or the existing hero image as a background element)
- Keep the current background image as a subtle overlay behind everything for that "whole world out there" feel

### 3. How It Works — Slightly lighter bg (`#251C38`)
- 3-step horizontal flow (vertical on mobile)
- Download → Choose Your Role → Start Your Journey
- Simple icons, warm muted text

### 4. Dual Experience — Card bg (`#181524`)
- Tabbed section: "For Buddies" / "For Sponsors"
- Buddy tab: 6-8 feature cards (Soby AI, Daily Check-ins, Crisis Flow, Streaks, Mood Journal, Gamification)
- Sponsor tab: 5-6 feature cards (Buddy Pairing, Dashboard, Live Chat, Nudges, Crisis Alerts)
- Cards use `#241C32` elevated background, coral icons, warm white text
- Like Reasonal's "Everything you need" grid section

### 5. Five Pillars — Alternating: lighter section (`#251C38`)
- Horizontal card row (scrollable on mobile)
- Accountability, Support, Progress, Crisis Help, Unified Solution
- Each with an icon and 1-line description

### 6. App Screenshot Showcase — Dark bg (`#0B0913`)
- iPhone frame mockup centered with placeholder white screen
- Caption: "See SobrAI in action" — ready for real screenshots later
- Inspired by Reasonal's phone mockup sections

### 7. Testimonials — Card bg (`#181524`)
- Quote cards with warm styling
- Placeholder testimonials for now

### 8. FAQ — Slightly lighter (`#251C38`)
- Accordion style, reuse existing FAQ component with updated dark theme styling

### 9. Final CTA — Dark bg with gradient accent
- "Start Your Journey Today"
- Two CTA buttons + App Store badges (same as hero)
- Sobr icon centered above the headline

### 10. Footer (keep, update colors to match dark theme)

## New Components to Create

All in `src/components/home2/`:
- `Home2Hero.tsx`
- `HowItWorks.tsx`
- `DualExperience.tsx`
- `FivePillars.tsx`
- `AppShowcase.tsx`
- `Home2Testimonials.tsx`
- `FinalCTA.tsx`
- `Home2Footer.tsx`

## Build Order

1. Copy all assets, update Tailwind config with colors + fonts
2. Build `Home2Hero` with logo, headline, dual CTAs, app badges, iPhone frame
3. Add `HowItWorks`
4. Build `DualExperience` tabbed feature grid
5. Add `FivePillars`
6. Add `AppShowcase` with iPhone frame
7. Wire in testimonials + FAQ
8. Add `FinalCTA` + update footer
9. Polish responsive behavior + animations

