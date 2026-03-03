

## Plan: Create `/home2` with Hero Section

### What we'll do

1. **Create `src/pages/Home2.tsx`** — A new page starting with a "Work in Progress" banner, the hero section (background image, logo, headline, checkmarks, and signup form), and the same footer as the current page.

2. **Add route in `App.tsx`** — Register `/home2` as a new route pointing to the `Home2` page.

3. **Make "2026" a secret link in the footer** — In `src/pages/Index.tsx`, wrap the "2026" text in the copyright line with a `<Link to="/home2">` so only you can access the new page. It will look identical to regular text (no underline/color change).

### Technical details

- `Home2.tsx` will import the existing `HeroSection` component directly (no duplication)
- Below the hero, a simple centered "Work in Progress" message so you know you're on the right page
- Footer will be carried over with the same layout
- The "2026" link will be styled as plain text (`text-inherit no-underline`) to stay hidden

