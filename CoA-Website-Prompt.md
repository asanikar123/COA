# City of Asylum — Complete Website Recreation Prompt

Use this prompt with Claude Code, Claude Chat, or any AI coding tool to recreate the full City of Asylum website. The website consists of 7 standalone HTML pages, each self-contained with inline CSS (no external stylesheets or build tools needed).

---

## TASK

Create a 7-page static HTML website for **City of Asylum** (cityofasylum.org), a nonprofit that is the world's largest sanctuary for exiled and persecuted writers, based in Pittsburgh, PA. Each page should be a single `.html` file with all CSS inlined in a `<style>` tag. No JavaScript frameworks — just pure HTML/CSS with minimal vanilla JS for interactive elements (like donation form toggles).

---

## DESIGN SYSTEM

### Color Palette (CSS Custom Properties)
```css
:root {
  --deep: #0f1419;         /* Darkest background — nav, footer, hero overlays */
  --charcoal: #1a1f2e;     /* Secondary dark — impact strips, dark sections */
  --slate: #2d3548;        /* Tertiary dark — gradient endpoints */
  --red: #c23b2e;          /* Primary action color — buttons, CTAs, links */
  --red-dark: #8b1a1a;     /* Hover state for red */
  --gold: #c9a227;         /* Accent/highlight — eyebrows, stats, borders */
  --gold-light: #e0c660;   /* Light gold — italic hero text, hover states */
  --cream: #f5f0e8;        /* Warm light background — alternating sections */
  --warm-white: #faf8f5;   /* Page body background */
  --white: #ffffff;         /* Card backgrounds, content sections */
  --green: #2d8a4e;        /* Tertiary accent — used sparingly */
  --muted: #6b7280;        /* Body text secondary, captions */
  --text-dark: #1a1a1a;    /* Headings */
  --text-body: #3d3d3d;    /* Body text primary */
  --border: #e5e7eb;       /* Card borders, dividers */
}
```

### Typography
- **Serif (headings, quotes, stats):** `'Playfair Display', Georgia, 'Times New Roman', serif` — loaded from Google Fonts with weights: 400, 700, 900, italic 400
- **Sans-serif (body, nav, buttons):** `'Inter', 'Segoe UI', Calibri, Arial, sans-serif` — loaded from Google Fonts with weights: 300, 400, 500, 600, 700
- **Base line-height:** 1.7
- **Google Fonts import:** `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&display=swap`

### Spacing & Layout
- **Max content width:** 1200px, centered with `margin: 0 auto; padding: 0 2rem;`
- **Section vertical padding:** typically `5rem 0` or `6rem 0`
- **Card border-radius:** 16px (large cards), 12px (small elements), 8px (buttons), 20px (pill badges)
- **Card shadows on hover:** `0 12px 40px rgba(0,0,0,.08)` with `translateY(-4px)`
- **Border style:** `1px solid var(--border)` for cards

### Component Patterns

**Section Eyebrow:** Gold uppercase label above section title
```css
.section-eyebrow {
  display: block; text-align: center;
  font-size: .75rem; font-weight: 700; letter-spacing: .2em;
  text-transform: uppercase; color: var(--gold); margin-bottom: .75rem;
}
```

**Section Title:** Serif, centered
```css
.section-title {
  font-family: var(--serif); font-size: 2.4rem; font-weight: 700;
  color: var(--text-dark); text-align: center; margin-bottom: 1rem;
}
```

**Section Subtitle:** Muted, centered, max-width 650px
```css
.section-subtitle {
  text-align: center; color: var(--muted); font-size: 1.05rem;
  max-width: 650px; margin: 0 auto 3.5rem;
}
```

**Buttons:**
- `.btn-primary` — Red background, white text, 8px radius
- `.btn-secondary` — Transparent with 2px border, hover turns gold
- `.btn-gold` — Gold background, dark text, used for donate CTAs
- All buttons: `font-weight: 600-700`, `padding: .9rem 2rem`, hover has `translateY(-1px or -2px)`

**Cards with colored top border:** Cards use `::before` pseudo-element with `height: 4px` at top, colored in rotation: red, gold, green (and occasionally `#6366f1` purple for 4th cards)

**Image error handling:** All `<img>` tags include `onerror="this.style.opacity='0'"` to gracefully hide broken images. Some hero images use `onerror="this.parentElement.style.background='linear-gradient(135deg, #1a1f2e, #0f1419)'"`.

**Quote blocks:** `border-left: 3px solid var(--gold); padding-left: 1.25rem;` with serif italic font.

### Responsive Breakpoint
Single breakpoint at `max-width: 768px`:
- All grids collapse to 1-column (or 2 for small items like impact stats)
- Hero h1 shrinks to `2.2rem`
- Nav links hidden on mobile (`.nav-links { display: none; }`)

---

## NAVIGATION (Shared Across All Pages)

Sticky nav, dark background with gold bottom border:
```html
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="https://cityofasylum.org/wp-content/uploads/2023/08/cropped-cropped-CofA_Logo_RGB-1.webp" alt="City of Asylum">
      <span>City of Asylum</span>
    </a>
    <div class="nav-links">
      <a href="about.html">About Us</a>
      <a href="writers.html">Writers &amp; Residencies</a>
      <a href="events.html">Events &amp; Festivals</a>
      <a href="placemaking.html">Placemaking</a>
      <a href="visit.html">Visit Us</a>
      <a href="donate.html" class="nav-donate">Donate</a>
    </div>
  </div>
</nav>
```
- Logo: 48px height, CofA logo from their website
- Active page gets `class="active"` with `color: var(--gold)`
- Donate link styled as red button (`.nav-donate`)
- Nav height: 72px

---

## IMAGE SOURCES

Use these actual images from the City of Asylum website. All images should have `onerror` fallbacks:

| Image | URL | Used On |
|-------|-----|---------|
| CofA Logo | `https://cityofasylum.org/wp-content/uploads/2023/08/cropped-cropped-CofA_Logo_RGB-1.webp` | All pages (nav, footer) |
| Bookstore/Interior | `https://cityofasylum.org/wp-content/uploads/2023/07/city-of-asylum-bookstore.png` | Homepage hero, Events hero, Visit page |
| House Poem (Huang Xiang) | `https://cityofasylum.org/wp-content/uploads/2021/05/HPsized.jpeg` | Homepage, About, Writers, Placemaking |
| Alphabet City building | `https://cityofasylum.org/wp-content/uploads/2023/07/visit-city-of-asylum-pittsburgh.png` | Homepage, Visit hero, Events, Placemaking |
| Rania Mamoun | `https://cityofasylum.org/wp-content/uploads/2025/02/Rania.jpeg` | Homepage, Writers |
| Mai Khôi | `https://cityofasylum.org/wp-content/uploads/2021/11/Untitled-design-scaled.jpg` | Homepage |
| Bertony Louis | `https://cityofasylum.org/wp-content/uploads/2025/10/EDIT-Bertony-Louis1.jpg.webp` | Writers |
| Volodymyr Rafeyenko | `https://cityofasylum.org/wp-content/uploads/2023/07/Volodymyr-Rafeyenko-2.png` | Writers |
| Olena Boryshpolets | `https://cityofasylum.org/wp-content/uploads/2023/05/IMG_20240215_183656_629-1-1-scaled.jpg` | Writers |
| Oleksandr Frazé-Frazénko | `https://cityofasylum.org/wp-content/uploads/2023/05/KUJICAM_2023-06-06-19-36-27_developed-1-scaled.jpg` | Writers |
| Anouar Rahmani | `https://cityofasylum.org/wp-content/uploads/2022/01/IMG_6719-ezgif.com-webp-to-jpg-converter-1.jpg` | Writers |
| Jorge Olivera Castillo | `https://cityofasylum.org/wp-content/uploads/2021/12/DSC08184_20211111_Rosensteel-scaled.jpg` | Writers |
| Tuhin Das | `https://cityofasylum.org/wp-content/uploads/2021/05/tuhin.png` | Writers |
| Bewketu Seyoum | `https://cityofasylum.org/wp-content/uploads/2021/05/resize-bewketu-scaled.jpeg` | Writers |
| Osama Alomar | `https://cityofasylum.org/wp-content/uploads/2021/06/20170305_Rosensteel_0002-1024x683-1.jpeg` | Writers |
| Khet Mar | `https://cityofasylum.org/wp-content/uploads/2021/06/KhetMarBig.jpeg` | Writers |
| Huang Xiang portrait | `https://cityofasylum.org/wp-content/uploads/2021/06/xwbig.jpeg` | Writers |
| Burma House mural | `https://cityofasylum.org/wp-content/uploads/2025/05/burma_house_mural-edited.webp` | Visit |
| Programs stage header | `https://cityofasylum.org/wp-content/uploads/slider/cache/c395edf5542d2f2d3ece342d0911e84b/e-newsletter-header-1400-x-600-px-1.png` | Visit |
| Hugo Cruz event | `https://cityofasylum.org/wp-content/uploads/2026/02/HUGO-CRUZ-03192026-800x440.jpg` | Homepage, Events |
| Bertony Louis event | `https://cityofasylum.org/wp-content/uploads/2026/02/BERTONY-LOUIS-03222026-800x440.jpg` | Homepage, Events |
| Cristina Rivera Garza event | `https://cityofasylum.org/wp-content/uploads/2026/02/CRISTINA-RIVERA-GARZA-03242026-800x440.jpg` | Homepage, Events |

**For placeholder images** (when no real photo exists), use styled divs with gradient backgrounds and emoji icons:
```html
<div style="width:100%;height:100%;background:linear-gradient(135deg,var(--charcoal),var(--slate));display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:2.5rem">🎵</div>
```

---

## PAGE 1: HOMEPAGE (index.html)

**Title:** `City of Asylum — When Writers Are Silenced, We Give Them a Home`

### Sections in order:

1. **Full-viewport Hero** (min-height: 92vh)
   - Background: bookstore image, darkened with `filter: brightness(.3) saturate(.7)` plus gradient overlay
   - Eyebrow: "The World's Largest Exiled Writer Sanctuary"
   - H1: `When writers are silenced, <em>we give them a home.</em>` (the italic part is gold-light)
   - Subtitle: "City of Asylum protects persecuted writers from around the world, giving them safety, community, and the freedom to create — right here in Pittsburgh."
   - Two CTAs: "Meet Our Writers →" (red), "Support the Mission" (outlined)
   - Stat row at bottom: 18 Writers Protected | 15+ Countries | 20 Years of Sanctuary | 6 Writers in Residence Now

2. **Mission Pillars** (white bg)
   - Eyebrow: "Our Mission"
   - Title: "Building a Just Community Through Creative Freedom"
   - Three cards with emoji icons in colored circles: Protect (🛡️), Celebrate (✨), Transform (🏡)
   - Each card has title + paragraph describing the pillar

3. **Writer Spotlights** (cream bg)
   - Eyebrow: "Writer Spotlights"
   - Title: "The Human Stories Behind Our Mission"
   - Two side-by-side spotlight cards (image left/text right, alternating):
     - **Rania Mamoun** — Sudan, Writer-in-Residence since 2019, includes quote and bio
     - **Mai Khôi** — Vietnam, Artist-in-Residence 2020–2022, includes quote and bio
   - Each has country badge on image, name, role, blockquote, bio paragraph, "Read full story →" link

4. **Origin Story** (deep dark bg)
   - 2-column: image left, text right
   - Tells the 1997 Salman Rushdie story → 2004 Huang Xiang arrival → House Poem creation
   - "Read Our Full History →" button

5. **Impact Numbers** (charcoal bg)
   - 4-column stat grid: 18 Writers | 10% of ICORN | 200+ Programs/Year | Founded 2004

6. **Donate CTA** (red gradient bg)
   - "Pittsburgh Is the Only Sanctuary Not Funded by Governments"
   - Gold "Donate Now →" button

7. **Events Preview** (white bg)
   - Eyebrow: "What's Happening" / Title: "Upcoming Programs"
   - 3 event cards with images, date, title, description

8. **Visit Strip** (cream bg)
   - 2-column: image left, text right
   - Address: 40 W. North Avenue, Pittsburgh, PA 15212
   - "Plan Your Visit →" button

9. **Newsletter Signup** (deep dark bg)
   - "Stay Connected" — email input + Subscribe button

10. **Full Footer** (deep dark bg)
    - 4-column grid: Brand description | Explore links | Visit links | Support links
    - Bottom bar: copyright + privacy policy link
    - EIN: 20-2810099

---

## PAGE 2: ABOUT US (about.html)

**Title:** `About Us — City of Asylum`

### Sections:

1. **Page Hero** (dark bg, no background image)
   - Eyebrow: "About City of Asylum"
   - H1: "A grassroots sanctuary, built by community."
   - Subtitle about founding in 2004

2. **Mission Section** (white bg)
   - 3 mission cards with colored top borders (red, gold, green):
     - Provide Sanctuary — housing, stipends, legal counsel, medical benefits for 2+ years
     - Celebrate Creative Expression — 200+ free programs yearly
     - Transform Neighborhoods — converting properties on Northside

3. **Founders Section** (deep dark bg)
   - 2-column: House Poem image left, text right
   - Story of Diane Samuels & Henry Reese hearing Salman Rushdie in 1997
   - Quote: "Most endangered writers come from circumstances where they have neither fame nor resources."
   - Story of connecting with Russell Banks in 2003, welcoming Huang Xiang in 2004

4. **Timeline** (cream bg)
   - Vertical timeline with gold dots and connecting line:
     - 1997: Rushdie talk
     - 2004: First writer (Huang Xiang) arrives, creates House Poem
     - 2006: Growing sanctuary
     - 2018: Alphabet City opens
     - 2022: Ukrainian Fellowship launched
     - 2026: 18 writers and growing (10% of ICORN)

5. **What Makes Us Different** (white bg)
   - 2x2 grid of cards with emoji icons:
     - 🏠 Long-Term, Not Temporary (2+ years vs. 1 year elsewhere)
     - 🌱 Grassroots, Not Government (only community-funded program)
     - 📖 Every Writer Creates (every resident produces a full-length work)
     - 🤝 Community Integration (university partnerships, school visits, festivals)

6. **CTA** (red gradient)
   - "Join the Movement" with donate button

7. **Simple Footer** (copyright + home link)

---

## PAGE 3: WRITERS & RESIDENCIES (writers.html)

**Title:** `Writers & Residencies — City of Asylum`

### Sections:

1. **Page Hero** (dark bg, decorative gold circle)
   - Eyebrow: "Writers & Residencies"
   - H1: "These are the voices the world tried to silence."
   - Description of the residency program

2. **Program Introduction** (white bg)
   - 2-column: text left, House Poem image right
   - Title: "The Exiled Writer & Artist Residency Program"
   - Description of program effectiveness
   - 4 highlight boxes in 2x2 grid (gold left border): Safe Housing | Living Stipend | Legal Counsel | Medical Benefits

3. **Ukraine Fellowship Banner** (warm yellow bg `#FFFBEB` with `#FDE68A` borders)
   - Ukrainian flag emoji 🇺🇦 + description of the 2022 fellowship
   - Names: Olena Boryshpolets, Oleksandr Frazé-Frazénko, Volodymyr Rafeyenko

4. **Writers Grid** (warm-white bg)
   - Title: "18 Writers. 15+ Countries. One Sanctuary."
   - Filter tabs (pill buttons): All Writers | Current Residents | Ukrainian Fellowship | Alumni
   - 3-column grid of writer cards, each with:
     - Photo (320px height, cover-fit, zoom on hover)
     - Country badge (top-left, dark pill)
     - Status badge (bottom-right): green "Current" or light "Alumni"
     - Name, genre/role (gold text), short bio
   - **12 writers listed** (in order):
     1. Bertony Louis — Caribbean, Poet (Current)
     2. Rania Mamoun — Sudan, Novelist/Poet/Activist, since 2019 (Current)
     3. Volodymyr Rafeyenko — Ukraine, Novelist, Ukrainian Fellowship (Current)
     4. Olena Boryshpolets — Ukraine, Writer, Ukrainian Fellowship (Current)
     5. Oleksandr Frazé-Frazénko — Ukraine, Writer, Ukrainian Fellowship (Current)
     6. Anouar Rahmani — Algeria, Writer (Current)
     7. Jorge Olivera Castillo — Cuba, Writer (Alumni)
     8. Tuhin Das — Bangladesh, Poet (Alumni)
     9. Bewketu Seyoum — Ethiopia, Poet/Novelist/Essayist, 2019–2021 (Alumni)
     10. Osama Alomar — Syria, Writer (Alumni)
     11. Khet Mar — Myanmar, Writer (Alumni)
     12. Huang Xiang — China, Poet, First Writer 2004–2006 (Alumni)

5. **Community CTA** (deep dark bg, centered)
   - "Connecting with Community"
   - Gold "Support a Writer's Residency →" button

6. **Simple Footer**

---

## PAGE 4: EVENTS & FESTIVALS (events.html)

**Title:** `Events & Festivals — City of Asylum`

### Sections:

1. **Page Hero** (dark bg with bookstore background image, darkened)
   - Eyebrow: "Events & Festivals"
   - H1: `Where Literature, Music & Ideas <em>Come Alive</em>`
   - Stats row: 200+ Free Programs Yearly | 3–4 Events Most Weeks | 100% Free & Open to All

2. **Program Types** (white bg)
   - 4-column grid with colored top borders (red, gold, green, purple):
     - 📖 Literary Readings
     - 🎵 Music & Performance (Thursday Night Jazz, global sounds)
     - 🎬 Film & Conversation (documentaries, Q&As)
     - 🎉 Festivals

3. **Upcoming Events** (cream bg)
   - 3-column grid, 6 event cards total:
     - Hugo Cruz & Caminos (Jazz, March 19) — real image
     - Bertony Louis (Literature, March 22) — real image
     - Cristina Rivera Garza (Literature, March 24) — real image
     - Thursday Night Jazz (Music, March 26) — placeholder
     - Human Rights Film Night (Film, March 28) — placeholder
     - Writer-in-Residence Reading (Literature, March 29) — placeholder
   - Each card: image with category tag, date in red, title, description, location + "Free" meta
   - "View Full Calendar →" button below

4. **Flagship Festivals** (white bg)
   - 3 alternating feature cards (image/text, text/image, image/text):
     - Jazz Poetry Concert — Annual, Spring (Flagship badge)
     - Exiled Writers Festival — Annual, Fall (Signature badge)
     - Alphabet City Cultural Fest — Annual, Summer (Community badge)
   - Each has highlight list with gold ✦ bullets

5. **Venue Section** (deep dark bg)
   - 2-column: Alphabet City image left, text right
   - Title: "Alphabet City — Pittsburgh's Living Room for the World"
   - 2x2 feature grid: Performance Stage | City Books | Cucina Alfabeto | Gallery Spaces

6. **Donate CTA** (red gradient)
   - "Every Program Is Free. Your Support Makes That Possible."

7. **Newsletter** (deep dark bg)
   - "Never Miss a Program"

8. **Full Footer** (4-column)

---

## PAGE 5: PLACEMAKING (placemaking.html)

**Title:** `Placemaking — City of Asylum`

### Sections:

1. **Page Hero** (dark bg with House Poem background image)
   - Eyebrow: "Placemaking"
   - H1: `Art Transforms Places. <em>Places Transform Lives.</em>`

2. **Vision Introduction** (white bg)
   - 2-column: House Poem image left, text right
   - Story of Huang Xiang painting his poetry on the house facade in 2004
   - Pull quote in gold-bordered block

3. **House Poems** (cream bg)
   - Title: "Poetry You Can Walk Through"
   - 2 alternating feature cards:
     - Huang Xiang — House Poem #1 (329 Sampsonia Way, 2004)
     - Community House Poems (Sampsonia Way Corridor)

4. **Northside Campus** (deep dark bg)
   - 2-column: landmark list left, image right
   - 5 landmarks with emoji icons in cards:
     - 🏛️ Alphabet City
     - 🏠 Writer Residences
     - 🎨 Sampsonia Way House Poems
     - 📚 City Books
     - 🍽️ Cucina Alfabeto

5. **Art Installations** (white bg)
   - 3-column grid with placeholder gradient images:
     - 🖌️ Murals & Facade Art
     - 🪑 Street Furniture & Wayfinding
     - 🌿 Garden & Outdoor Spaces

6. **Impact Stats** (charcoal bg)
   - 4-column: 8+ House Poems | 20+ Properties Transformed | 4 Blocks of Art | 1 Cultural Hub

7. **Philosophy** (cream bg)
   - Henry Reese quote (large italic serif)
   - 3 philosophy cards with colored top borders:
     - Art as Infrastructure
     - Writers as Neighbors
     - Development Without Displacement

8. **CTA** (red gradient) — "Help Us Build More Homes for Words"

9. **Newsletter + Full Footer**

---

## PAGE 6: VISIT US (visit.html)

**Title:** `Visit Us — Alphabet City — City of Asylum`

### Sections:

1. **Photo Hero** (60vh height, Alphabet City building image)
   - Gradient overlay from bottom
   - Content at bottom: "Visit Us" eyebrow, "Alphabet City" h1

2. **Three Experiences** (white bg)
   - 3 info cards with images and colored tags:
     - 🟡 Bookstore — City of Asylum Bookstore (Open Daily 12-6pm)
     - 🔴 Programs — Readings, Concerts & Film (3-4 per week)
     - 🟢 Restaurant — Cucina Alfabeto (Italian cuisine)

3. **Location & Map** (cream bg)
   - 2-column: address + hours table left, Google Maps embed right
   - Address: 40 W. North Avenue, Pittsburgh, PA 15212
   - Hours table: Bookstore Mon–Sun 12pm–6pm
   - "Get Directions →" button

4. **Neighborhood** (white bg)
   - 2-column: Burma House mural image left, text right
   - Story of Sampsonia Way, House Poems, 6 writers living on the block

5. **Getting Here** (deep dark bg)
   - 3 transport options: 🚗 By Car | 🚌 By Bus | 🚶 On Foot

6. **Simple Footer**

---

## PAGE 7: DONATE (donate.html)

**Title:** `Donate — City of Asylum`

### Sections:

1. **Hero** (dark gradient bg with red radial accent)
   - H1: `You make it possible for silenced writers to <em>speak again.</em>`
   - Note: only sanctuary not funded by governments/universities

2. **Donation Section** (white bg)
   - 2-column layout:
   - **Left: Why Donate**
     - "Your Impact Is Direct & Measurable"
     - Impact list with circular amount badges:
       - $50 — One Week of Groceries
       - $250 — One Month of Legal Support
       - $500 — One Month of Medical Benefits
       - $1,000 — One Month of Housing
   - **Right: Donation Form Card** (sticky at top:100px)
     - Toggle: One-Time / Monthly
     - Amount grid (3x2): $25, $50, $100, $250, $500, $1,000
     - Custom amount input
     - Red "Donate Now →" button
     - Note: "501(c)(3) EIN: 20-2810099"

3. **Trust Section** (cream bg)
   - 3 trust icons: 🛡️ 501(c)(3) Certified | 🌍 100% Mission-Driven | 💛 Community-Powered

4. **Other Ways to Support** (white bg)
   - 3 cards: 📈 Gifts of Stock | ✉️ Donate by Mail (40 W. North Ave) | 🤝 Volunteer

5. **Simple Footer**

---

## KEY ORGANIZATIONAL FACTS

Use these facts throughout the content:

- **Founded:** 2004 by Diane Samuels and Henry Reese
- **Location:** 40 W. North Avenue, Pittsburgh, PA 15212 (Alphabet City hub)
- **Writer residences:** Sampsonia Way, Pittsburgh's Northside
- **Total writers hosted:** 18 from 15+ countries
- **Current residents:** 6 writers and families
- **Network:** Nearly 10% of all exiled writers in the 80-city International Cities of Refuge Network (ICORN) are in Pittsburgh
- **Programs:** 200+ free programs per year (3-4 most weeks)
- **Funding:** The ONLY exiled writer sanctuary in the world not funded by governments or universities — entirely community-supported
- **Tax status:** 501(c)(3), EIN: 20-2810099
- **Facilities:** Performance stage (150-seat), City Books (multilingual bookstore), Cucina Alfabeto (Italian restaurant), gallery spaces
- **Bookstore hours:** Monday–Sunday, 12pm–6pm
- **First writer:** Huang Xiang (Chinese poet, arrived 2004, created "House Poem" on 329/408 Sampsonia Way)
- **Key story:** In 1997 Salman Rushdie mentioned European Cities of Asylum at a Pittsburgh talk. Diane & Henry were inspired, wrote to Europe, got no response, eventually connected with Russell Banks who was expanding to the U.S.
- **Ukrainian Fellowship (2022):** Three writers — Olena Boryshpolets, Oleksandr Frazé-Frazénko, Volodymyr Rafeyenko
- **What makes them unique:** Long-term (2+ years, not 1), grassroots (not government), every writer creates a full-length work, community integration

---

## SECTION BACKGROUND PATTERN

Sections alternate backgrounds to create visual rhythm. The typical pattern is:

```
Dark hero → White → Cream → Dark → White → Cream → Red CTA → Dark footer
```

This alternation prevents any two adjacent sections from having the same background color.

---

## FOOTER VARIANTS

**Full Footer** (used on Homepage, Events, Placemaking):
- 4-column grid: Brand + description | Explore links | Visit links | Support links
- Bottom bar with copyright and privacy link

**Simple Footer** (used on About, Writers, Donate, Visit):
- Single row: copyright left, "Back to Home" link right (gold color)

---

## INSTRUCTIONS FOR THE AI

1. Create each page as a standalone `.html` file with all CSS in a `<style>` tag in the `<head>`
2. Each page should include the shared navigation and appropriate footer
3. Mark the current page as `class="active"` in the nav
4. Use semantic HTML5 elements (`<section>`, `<nav>`, `<footer>`, `<article>`)
5. All images must have `onerror` handlers for graceful fallback
6. Keep the design warm, literary, and professional — not corporate or tech-y
7. The tone should be: inspiring, dignified, personal, mission-driven
8. Mobile responsive with a single breakpoint at 768px
9. No external CSS files, no JavaScript frameworks, no build tools
10. File names: `index.html`, `about.html`, `writers.html`, `events.html`, `placemaking.html`, `visit.html`, `donate.html`
