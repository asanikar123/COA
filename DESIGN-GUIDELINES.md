# City of Asylum — Design Guidelines

The homepage (`index.html`) is the reference implementation. These guidelines
codify what it does so every page looks and behaves like one site. The shared
rules live in **`design-system.css`** — link it on every page and do not
redefine its rules inline.

---

## 1. The Rail (the one principle that matters most)

The layout is built on a **left rail**, not a centered column.

- A fixed-width left column — `var(--rail)` = `clamp(320px, 27vw, 500px)` —
  holds full-bleed media: the hero photo, the donate logos.
- **Every piece of text content on the page shares one vertical left edge**,
  positioned at `var(--rail)`. The hero headline, body copy, section eyebrows,
  section titles, card headings, quotes, and buttons all start on this line.
- At 1440px wide this edge lands at **~437px**. Verify alignment by measuring
  `getBoundingClientRect().left` of each heading — they should match.

Mechanically this is done by offsetting `.container` with
`margin-left: var(--rail)` (see `design-system.css`). Split sections (image +
text) use a `grid-template-columns: var(--rail) 1fr` grid so the image fills
the rail column and the text starts exactly on the edge.

**Exceptions, by design:**
- The **footer** re-centers in a 1200px column (`.site-footer .container`).
- Card grids (e.g. pillars) shift left by their own inner padding
  (`margin-left: -2rem`) so the *text inside the first card* lands on the rail,
  not the card's padded edge.
- Below **900px** the rail collapses: `.container` resets to
  `margin-left: auto` and the hero stacks vertically.

---

## 2. Tokens

Defined in `:root` (`design-system.css`). Use the variables, never raw hex.

| Token | Value | Use |
|---|---|---|
| `--deep` | `#1c1a17` | Hero / footer background, primary dark text |
| `--text-body` | `#37332e` | Body copy |
| `--coa-red` | `#CC1333` | Primary CTA ("Donate Now", footer Donate button) |
| `--accent-gold` | `#e0a417` | Eyebrows, nav Donate pill, hero emphasis |
| `--gold` | `#6b6155` | Section eyebrows, quote attributions, muted accents |
| `--cream` / `--warm-white` | `#f4efe7` / `#faf8f3` | Alternating section backgrounds |
| `--border` | `#e4ddd0` | Hairlines, secondary button borders |
| `--sans` | Inter | All UI and headings |
| `--serif` | Playfair Display | Italic emphasis, pull quotes only |
| `--rail` / `--rail-gap` | see above | The layout rail |

---

## 3. Components (all in `design-system.css`)

- **Nav** — sticky, white, 98px tall, logo flush to the page's left edge (no
  left padding), uppercase items, dropdowns. Rightmost dropdowns
  (`.nav-dropdown-right`) open leftward to avoid horizontal overflow.
  Shrinks between 769–1400px; collapses below 768px. **The nav markup must be
  identical on every page** (only the active-link color differs).
- **Footer** — dark, 4-column grid (`2fr 1fr 1fr 1fr`), brand blurb with a
  `<br>` before "The world's largest…", **red** (`--coa-red`) Donate button.
  **Identical markup on every page.**
- **Buttons** — `.btn-primary` (gold), `.btn-secondary` (outline),
  `.btn-gold` (red, uppercase CTA), `.btn-sm` (compact). `.nav-donate` is the
  gold nav pill.
- **Section headings** — `.section-eyebrow` (gold, uppercase, tracked),
  `.section-title` (Inter 800, 2.25rem), `.section-subtitle` (muted). All
  left-aligned.
- **Hero** — rail pattern: `.hero-photo` (rail column) + `.hero-panel` (text).
  Interior pages use the same structure but **omit the homepage's cascade
  indents** (the staggered `margin-left` on h1 lines) for a clean left edge.

---

## 4. Spacing & density

- Section vertical rhythm: major sections `~6rem` top/bottom; compact content
  blocks (like "Our Story") are tightened so a text column fits within its
  paired image height. Prefer small margins (`.3–.9rem`) between stacked text
  elements over large ones.
- No stray empty `<p></p>` spacers — use margins.

---

## 5. Per-page migration checklist

For every page other than `index.html`:

1. **Link the system:** add `<link rel="stylesheet" href="design-system.css">`
   in `<head>` **before** the page's own `<style>` and before `mobile.css`.
2. **Strip duplicates:** remove the page's inline copies of `:root` tokens,
   `.container`, nav rules, footer rules, button rules, and section-heading
   rules so the shared versions take effect. Keep only page-specific CSS.
3. **Unify chrome:** replace the page's `<nav>` and `<footer>` markup with the
   canonical versions from `index.html` (adjust only the active-link highlight).
4. **Rail-ify the hero:** convert the page's top hero to `.hero` / `.hero-photo`
   / `.hero-panel` so its headline lands on the rail.
5. **Verify:** at 1440px, the hero headline, every section heading, and the
   primary CTA share the same `left` value. No horizontal scroll. Footer Donate
   button is red.

---

## 6. Guardrails

- `overflow-x: clip` on `<html>` blocks horizontal scroll without breaking the
  sticky nav.
- Edit shared rules in `design-system.css` only — never fork them into a page.
- `index.html` remains the living reference; when in doubt, match it.
