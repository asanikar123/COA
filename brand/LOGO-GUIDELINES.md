# City of Asylum — Logo & Identity

A refreshed logo for **City of Asylum**, the world's largest sanctuary for exiled
and persecuted writers. It keeps the org's existing voice — the signature red, the
lowercase italic *of*, the Inter + Playfair pairing — and adds a scalable mark that
the old multilingual wordmark never had.

See **`identity.html`** for the full visual presentation (open in a browser).

---

## The concept — "The House of Poems"

In 2004, City of Asylum's first resident, the exiled Chinese poet **Huang Xiang**,
painted his verse across the façade of a house on Sampsonia Way. That House Poem
became the org's most enduring image.

The mark *is* that house:

- **The gable** — home, sanctuary, permanence (the 2+ year residency).
- **The stanza** — three ragged lines of verse fill the walls: the House Poem, and
  the full-length work every resident goes on to create.
- **The open door** — a doorway in City of Asylum red, always open. The single warm
  accent and emotional center of the mark.

> When writers are silenced, we give them a home.

---

## The files

| File | Use |
|---|---|
| `coa-logo-horizontal.svg` | **Primary** lockup, light backgrounds (nav, letterhead) |
| `coa-logo-horizontal-dark.svg` | Primary lockup, dark backgrounds |
| `coa-logo-stacked.svg` / `-dark.svg` | Avatars, footers, square spaces |
| `coa-mark.svg` | Mark alone (charcoal outline), light backgrounds |
| `coa-mark-dark.svg` | Mark alone (cream outline), dark backgrounds |
| `coa-mark-mono.svg` | One-color mark (embossing, single-ink print, stamps) |
| `coa-favicon.svg` | Rounded charcoal tile for favicons / app icons (16–64px) |
| `*.png` | Raster exports for platforms that don't accept SVG |

The horizontal/stacked SVGs **embed the fonts** (Inter + Playfair Display), so they
render identically anywhere — no font install required. The mark and favicon SVGs are
pure vector and tiny.

---

## Colors

| Name | Hex | Role |
|---|---|---|
| Charcoal | `#1c1a17` | Outline & stanza on light; dark grounds |
| Asylum Red | `#CC1333` | The door — the one fixed accent |
| Signal Gold | `#e0a417` | Eyebrows, the Donate pill |
| Muted Gold | `#6b6155` | The italic *of*, taglines, captions |
| Cream | `#f4efe7` | Outline & stanza on dark; soft panels |
| Warm White | `#faf8f3` | Page ground |

## Type

- **Inter** — 800 for `CITY` / `ASYLUM`, 500 for the tracked tagline. Wordmark, headings, UI.
- **Playfair Display Italic** — the lowercase `of`, and any literary/quote emphasis.

The wordmark sets `CITY` in charcoal, `of` in muted-gold Playfair italic, and
`ASYLUM` in Asylum Red — echoing the all-red English line of the legacy logo while
staying legible at small sizes.

---

## Rules

**Do**
- Give the logo clear space equal to the width of the doorway on every side.
- Keep the door Asylum Red — it's the one fixed color.
- Use the charcoal mark on light grounds, the cream (`-dark`) mark on dark.
- Drop to the mark alone below ~28px, or for avatars.

**Don't**
- Recolor the stanza lines, or fill the house with a photo.
- Stretch, shear, or rotate the silhouette.
- Reset the wordmark in another typeface, or make `of` upright.
- Place the charcoal logo on a busy or dark photograph (use `-dark`).

---

## Using it on the site

The site already loads Inter and Playfair, so you can drop the SVG straight into the
nav. Example (replaces the `xCofA_Logo_RGB.png` in the nav):

```html
<a class="nav-logo" href="./">
  <img src="brand/coa-logo-horizontal.svg" alt="City of Asylum" height="48">
</a>
```

Favicon:

```html
<link rel="icon" href="brand/coa-favicon.svg" type="image/svg+xml">
```

The mark can also be inlined as SVG with `stroke="currentColor"` so it inherits the
surrounding text color (charcoal in the nav, cream in the footer) automatically.
