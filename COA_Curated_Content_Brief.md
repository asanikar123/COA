# City of Asylum — Curated Content & Image Brief
## For Claude Code Website Build

This document is the single source of truth for building the 7-page City of Asylum website.
All content, images, quotes, and strategic notes are curated here from:
- COA_Website_Analysis.docx (strategic audit)
- New_COA_website_comments_V06.docx (founders' feedback — Diane Samuels & Henry Reese)
- Pittsburgh Magazine article (July 2023, best narrative source)
- The New Yorker (George Packer, 2009)
- Presentation slide deck (84 slides scanned)
- Existing HTML files (index, about, writers, events, placemaking, visit, donate)

---

## STRATEGIC NORTH STAR

The old website scored 1.75/5 because it looked like a **venue**, not a **sanctuary**.
The new site must lead with the human rights mission first. Everything else (bookstore,
events, restaurant) is evidence of mission — not the mission itself.

**The three pillars are the frame for everything:**
1. **PROTECT** → Exiled Writers Program
2. **CELEBRATE** → Free Programs (200+ per year)
3. **TRANSFORM** → Placemaking / Neighborhood

**Critical tone notes from founders:**
- Never say "writer-in-residence" without "exiled under threat of persecution"
- We are NOT Yaddo or MacDowell — this is a human rights program
- Every mention of programs should connect to WHY (commitment to free expression)
- The Jazz program exists because of COA's commitment to civil rights — say that
- Use photos of real people, not illustrations or pencil sketches
- Andy Tepper should be named as "World Literature Curator"

---

## IMAGES — MASTER ASSIGNMENT LIST

### Primary Images (from cityofasylum.org — use these as-is)

| Image | URL | Assigned Page(s) |
|-------|-----|-----------------|
| CofA Logo | `https://cityofasylum.org/wp-content/uploads/2023/08/cropped-cropped-CofA_Logo_RGB-1.webp` | ALL PAGES (nav + footer) |
| Bookstore interior | `https://cityofasylum.org/wp-content/uploads/2023/07/city-of-asylum-bookstore.png` | Homepage hero, Events hero, Visit page |
| House Poem (Huang Xiang) | `https://cityofasylum.org/wp-content/uploads/2021/05/HPsized.jpeg` | Homepage origin story, About, Writers, Placemaking |
| Alphabet City building exterior | `https://cityofasylum.org/wp-content/uploads/2023/07/visit-city-of-asylum-pittsburgh.png` | Visit hero, Placemaking, Events |
| Rania Mamoun portrait | `https://cityofasylum.org/wp-content/uploads/2025/02/Rania.jpeg` | Homepage spotlight, Writers grid |
| Mai Khôi portrait | `https://cityofasylum.org/wp-content/uploads/2021/11/Untitled-design-scaled.jpg` | Homepage spotlight |
| Bertony Louis portrait | `https://cityofasylum.org/wp-content/uploads/2025/10/EDIT-Bertony-Louis1.jpg.webp` | Writers grid |
| Volodymyr Rafeyenko | `https://cityofasylum.org/wp-content/uploads/2023/07/Volodymyr-Rafeyenko-2.png` | Writers grid |
| Olena Boryshpolets | `https://cityofasylum.org/wp-content/uploads/2023/05/IMG_20240215_183656_629-1-1-scaled.jpg` | Writers grid |
| Oleksandr Frazé-Frazénko | `https://cityofasylum.org/wp-content/uploads/2023/05/KUJICAM_2023-06-06-19-36-27_developed-1-scaled.jpg` | Writers grid |
| Anouar Rahmani | `https://cityofasylum.org/wp-content/uploads/2022/01/IMG_6719-ezgif.com-webp-to-jpg-converter-1.jpg` | Writers grid |
| Jorge Olivera Castillo | `https://cityofasylum.org/wp-content/uploads/2021/12/DSC08184_20211111_Rosensteel-scaled.jpg` | Writers grid |
| Tuhin Das | `https://cityofasylum.org/wp-content/uploads/2021/05/tuhin.png` | Writers grid |
| Bewketu Seyoum | `https://cityofasylum.org/wp-content/uploads/2021/05/resize-bewketu-scaled.jpeg` | Writers grid |
| Osama Alomar | `https://cityofasylum.org/wp-content/uploads/2021/06/20170305_Rosensteel_0002-1024x683-1.jpeg` | Writers grid |
| Khet Mar | `https://cityofasylum.org/wp-content/uploads/2021/06/KhetMarBig.jpeg` | Writers grid |
| Huang Xiang portrait | `https://cityofasylum.org/wp-content/uploads/2021/06/xwbig.jpeg` | Writers grid |
| Burma House mural | `https://cityofasylum.org/wp-content/uploads/2025/05/burma_house_mural-edited.webp` | Visit neighborhood, Placemaking |
| Hugo Cruz event | `https://cityofasylum.org/wp-content/uploads/2026/02/HUGO-CRUZ-03192026-800x440.jpg` | Events upcoming |
| Bertony Louis event | `https://cityofasylum.org/wp-content/uploads/2026/02/BERTONY-LOUIS-03222026-800x440.jpg` | Events upcoming |
| Cristina Rivera Garza event | `https://cityofasylum.org/wp-content/uploads/2026/02/CRISTINA-RIVERA-GARZA-03242026-800x440.jpg` | Events upcoming |

### Supplementary Images (from presentation slide deck — local files)
These are slides but contain strong photographic content worth using:

| Slide File | Content | Best Use |
|-----------|---------|----------|
| `_023.jpeg` | Jazz-Poetry Concert — huge crowd, colorful lanterns strung overhead | **Events page hero** ⭐ Best event photo |
| `_030.jpeg` | Alphabet City Tent — warm, packed audience under string lights | Events festivals section |
| `_033.jpeg` | ASL Poetry Performance on Alphabet City stage with audience | Events programs section |
| `_015.jpeg` | Completed House Poem facade, Huang Xiang 2004 | Placemaking hero, About timeline |
| `_019.jpeg` | Burma-Pittsburgh House colorful mural | Placemaking house poems section |
| `_020.jpeg` | Jazz House 320 Sampsonia — bold colorful facade | Placemaking |
| `_027.jpeg` | Salon-style literary reading, packed room | About/Events |
| `_022.jpeg` | Writer reading with school child — warm, intimate | About mission, community |
| `_006.jpeg` | Huang Xiang portrait in front of Chinese characters | Writers page, About |
| `_011.jpeg` | 5 House Publications side by side (neighborhood transformation) | Placemaking impact |
| `_004.jpeg` | Three people in front of large colorful mural | About, Placemaking |
| `_014.jpeg` | House Poem being painted (2004, ladders, in-progress) | About timeline |

**Note on slide images:** These are embedded in presentation slides so have black borders.
Claude Code should use CSS `object-fit: cover` and crop appropriately, or use them
only where the content (not aesthetics) is the priority.

### Logo Files (local project files)
- `/mnt/project/06_COA_Logo_RGB.jpg` — Local copy of the COA logo
- `/mnt/project/OutlinedAlphabets4_PowerPoint.jpg` — Alphabet artwork (decorative use)
- `/mnt/project/OutlinedAlphabets_8_5x11_layers.jpg` — Alphabet artwork (decorative use)

---

## PAGE-BY-PAGE CONTENT BRIEF

---

### PAGE 1: HOMEPAGE (index.html)
**Strategic priority:** Lead with sanctuary mission, not venue. The founding story and
writer spotlights must appear above the fold / early scroll.

#### Hero Section
- **Eyebrow:** "The World's Largest Exiled Writer Sanctuary"
- **H1:** `When writers are silenced, <em>we give them a home.</em>`
- **Subtitle:** "City of Asylum protects writers living under threat of persecution — giving them a safe home, legal support, and the freedom to keep creating. Right here in Pittsburgh."
- **CTA 1 (red button):** "Meet Our Writers →"  → links to writers.html
- **CTA 2 (outlined):** "Support the Mission" → links to donate.html
- **Background image:** Bookstore interior URL (darkened with brightness filter)
- **Stat row (bottom of hero):**
  - 18 Writers Protected
  - 15+ Countries Represented
  - 20 Years of Sanctuary
  - 6 Writers in Residence Now

#### Mission Pillars Section
- **Eyebrow:** "Our Mission"
- **Title:** "Building a Just Community Through Creative Freedom"
- **Subtitle:** "City of Asylum works at the intersection of human rights, literature, and community."
- **Three cards:**
  1. 🛡️ **Protect** — "We provide sanctuary to writers and artists living in exile under threat of persecution — a safe home, legal support, medical benefits, and the freedom to keep creating."
  2. ✨ **Celebrate** — "Through 200+ free literary readings, concerts, films, and festivals each year, we celebrate creative expression and build bridges across cultures in our Pittsburgh community."
  3. 🏡 **Transform** — "By transforming properties into homes for writers and vibrant cultural spaces, we anchor neighborhood development on Pittsburgh's Northside — where art meets activism."

#### Writer Spotlights Section
- **Eyebrow:** "Writer Spotlights"
- **Title:** "The Human Stories Behind Our Mission"
- **Subtitle:** "Every writer at City of Asylum carries a story of courage."

**Spotlight 1 — Rania Mamoun**
- **Image:** Rania Mamoun portrait URL
- **Country badge:** Sudan
- **Role:** Writer-in-Residence since 2019 · Novelist, Poet, Activist
- **Quote (sourced from Pittsburgh Magazine):** "Diane and Henry are life changers."
- **Bio:** "A Sudanese journalist and fiction writer, Rania was censured, beaten, and arrested for her work in the resistance against President Omar al-Bashir. She arrived in Pittsburgh in 2019. During the pandemic, she collaborated with Diane Samuels on a 100-day poetry project — a poem a day — which became the book *Thirteen Months of Sunrise*. After years of writing under a pen name, her Pittsburgh book launch was the first time her name was publicly associated with her work."
- **Link:** "Read Rania's full story →"

**Spotlight 2 — Mai Khôi**
- **Image:** Mai Khôi portrait URL
- **Country badge:** Vietnam
- **Role:** Artist-in-Residence 2020–2022 · Musician, Activist
- **Quote:** "Performing Bad Activist around the world is the way I protest and raise awareness about Vietnam's human rights situation and the power of art in activism."
- **Bio:** "Mai Khôi rose to stardom in Vietnam before becoming a dissident artist. After nominating herself for the National Assembly on a pro-democracy platform and meeting Barack Obama, she faced persecution — concerts raided, evicted from her home. She received the Václav Havel Prize for Creative Dissent. At City of Asylum, she created her protest album *Bad Activist* and performed internationally."
- **Link:** "Read Mai Khôi's full story →"

#### Origin Story Section (dark background)
- **Image:** House Poem (Huang Xiang) URL — left column
- **Title:** "Born from a Single Moment of Inspiration"
- **Body:** "In 1997, Salman Rushdie gave a talk in Pittsburgh and mentioned the Cities of Asylum network in Europe — cities that protected writers whose lives were in danger. Diane Samuels and Henry Reese were in the audience. They were immediately drawn to this mission.

  They wrote to Cities of Asylum in Europe. They heard nothing. They kept writing for six years — until in 2003 they connected with author Russell Banks, who was expanding the network to the U.S.

  In 2004, Huang Xiang arrived — a Chinese poet who had been imprisoned and tortured seven times for his writing. He painted his poetry in massive calligraphy across the facade of his new home on Sampsonia Way. That single act of creative defiance defined everything that came after."
- **Button:** "Read Our Full History →" → links to about.html

#### Impact Numbers Section (charcoal background)
- 18 Writers Hosted
- ~10% of ICORN's global network
- 200+ Free Programs per Year
- Founded 2004 by Two Pittsburgh Residents

#### Donate CTA Strip (red gradient)
- **Title:** "Pittsburgh Is the Only Sanctuary Not Funded by Governments"
- **Body:** "Every other exiled writer sanctuary in the world receives government or university funding. City of Asylum runs entirely on community support — from individuals and foundations who believe creative freedom is a human right."
- **Button (gold):** "Donate Now →" → links to donate.html

#### Upcoming Events Preview (white background)
- **Eyebrow:** "What's Happening"
- **Title:** "Upcoming Programs"
- **Subtitle:** "All events are free and open to the public at Alphabet City."
- **3 event cards** using real event images:
  1. Hugo Cruz & Caminos — Jazz, Thursday March 19
  2. World Literature: Bertony Louis — Literature, Sunday March 22
  3. World Literature: Cristina Rivera Garza — Literature, Tuesday March 24
- **Button:** "View Full Calendar →" → links to events.html

#### Visit Strip (cream background)
- **Image:** Alphabet City building exterior URL — left column
- **Title:** "Find Us on Pittsburgh's Northside"
- **Address:** 40 W. North Avenue, Pittsburgh, PA 15212
- **Details:** "Home to City of Asylum Bookstore, Cucina Alfabeto restaurant, and our performance stage — open to the public daily."
- **Button:** "Plan Your Visit →" → links to visit.html

#### Newsletter (dark background)
- "Stay Connected to City of Asylum"
- Email input + "Subscribe" button

#### Footer (full 4-column)
- **Col 1 — Brand:** Logo + "City of Asylum protects persecuted writers and celebrates creative freedom from Pittsburgh's Northside. The only sanctuary not funded by governments." + EIN: 20-2810099
- **Col 2 — Explore:** About Us, Writers & Residencies, Events & Festivals, Placemaking
- **Col 3 — Visit:** Visit Us, City of Asylum Bookstore, Cucina Alfabeto, 40 W. North Avenue
- **Col 4 — Support:** Donate, Volunteer, Contact Us, Privacy Policy
- **Bottom bar:** © 2026 City of Asylum. All rights reserved.

---

### PAGE 2: ABOUT US (about.html)
**Strategic priority:** Tell the founding story as narrative, not bullet points.
Make the mission statement the lead. Human rights org first, arts space second.

#### Hero
- **Eyebrow:** "About City of Asylum"
- **H1:** "A grassroots sanctuary, built by community."
- **Subtitle:** "Founded in 2004 by two Pittsburgh residents, City of Asylum grew from a single act of courage into the world's largest program for writers exiled under threat of persecution — powered entirely by individuals and foundations, never governments."

#### Mission Section (white)
- **Title:** "Protecting and Celebrating Freedom of Creative Expression"
- **Three mission cards** (colored top borders — red, gold, green):
  1. **Provide Sanctuary** (red border) — "We give endangered writers and artists a safe home so they can continue to create and their voices are not silenced. For two years or more, each resident receives housing, a stipend, legal counsel, and medical benefits."
  2. **Celebrate Creative Expression** (gold border) — "We offer over 200 free literary, arts, and humanities programs each year in a community setting — to build social equity through cultural exchange, and to prove that free expression is worth celebrating."
  3. **Transform Neighborhoods** (green border) — "By converting dilapidated properties into homes for our programs and writers-in-exile, we anchor neighborhood economic development and prove that art and activism belong in everyday spaces."

#### Founders Section (dark background)
- **Image:** House Poem URL — left column
- **Title:** "Diane Samuels & Henry Reese"
- **Eyebrow:** "Our Founders"
- **Story:** "In 1997, Salman Rushdie gave a talk in Pittsburgh. Living under a death threat for his writing, Rushdie mentioned the European Cities of Asylum network — cities protecting writers whose lives were in danger.

  Diane Samuels, an artist, walked out thinking about a rental property she owned. Henry Reese, a former telemarketing entrepreneur, walked out thinking about how to build something that would last.

  They wrote to Cities of Asylum in Europe. They heard nothing. They wrote again. And again. For six years, they kept writing — until in 2003 they connected with novelist Russell Banks, who was expanding the network to the United States.

  In October 2004, Huang Xiang arrived in Pittsburgh — China's pre-eminent post-Cultural Revolution poet, imprisoned and tortured seven times for his writing. He painted his poems in massive calligraphy across his new home on Sampsonia Way. City of Asylum had its first house poem."
- **Pull quote:** "Most endangered writers come from circumstances where they have neither fame nor resources. We wanted to change that." — Diane Samuels & Henry Reese
- **Button:** "Meet Our Writers →" → writers.html

#### Timeline Section (cream background)
- **Title:** "20 Years of Sanctuary"
- **Vertical timeline with gold dots:**
  - **1997** — A Spark in the Audience: Diane and Henry attend Salman Rushdie's Pittsburgh talk. He mentions Cities of Asylum in Europe. An idea is born.
  - **2003** — The Connection: After six years of unanswered letters, Diane and Henry connect with Russell Banks, who is expanding the U.S. Cities of Asylum network.
  - **2004** — First Writer Arrives: Huang Xiang, China's pre-eminent post-Cultural Revolution poet, arrives. He paints his poetry across the facade of his home on Sampsonia Way — the first House Poem.
  - **2006** — A Neighborhood Transformed: Additional writers arrive. Wole Soyinka (Nobel Laureate) reads on Sampsonia Way. The neighborhood begins its transformation into a literary corridor.
  - **2009** — International Recognition: The New Yorker covers City of Asylum. 17 exiled Burmese monks take residence during the G-20 summit.
  - **2017** — Alphabet City Opens: City of Asylum opens its permanent home at 40 W. North Avenue — a cultural hub with a performance stage, bookstore, and restaurant.
  - **2022** — Ukrainian Fellowship: In response to Russia's invasion of Ukraine, City of Asylum creates a special fellowship for three Ukrainian writers: Olena Boryshpolets, Oleksandr Frazé-Frazénko, and Volodymyr Rafeyenko.
  - **2026** — 18 Writers & Growing: Today, City of Asylum has hosted 18 writers from 15+ countries — nearly 10% of all exiled writers in the 80-city International Cities of Refuge Network (ICORN).

#### What Makes Us Different (white background)
- **Title:** "A Model Like No Other"
- **Four cards** (2×2 grid):
  1. 🏠 **Long-Term, Not Temporary** — "Our residency lasts two years or more — other programs typically offer one year. We stay with writers until they are stable and independent."
  2. 🌱 **Grassroots, Not Government** — "City of Asylum is the only exiled writer sanctuary in the world not funded by governments or universities. Every dollar comes from community support."
  3. 📖 **Every Writer Creates** — "Every writer or artist hosted by City of Asylum has produced a full-length work while in residence. We don't just shelter voices — we help them speak."
  4. 🤝 **Community Integration** — "Our writers read in schools, perform at festivals, and live as neighbors on Sampsonia Way. They don't just receive sanctuary — they become part of Pittsburgh."

#### CTA Strip (red gradient)
- "Join the Movement"
- Body: "Your support directly funds housing, legal counsel, medical benefits, and creative space for writers living under threat of persecution."
- **Button:** "Donate Now →" → donate.html

#### Simple Footer
- © 2026 City of Asylum. All rights reserved. · Back to Home

---

### PAGE 3: WRITERS & RESIDENCIES (writers.html)
**Strategic priority:** These are human beings with urgent stories — not a photo directory.
Every card must convey why this writer needed sanctuary.

#### Hero (dark background)
- **Eyebrow:** "Writers & Residencies"
- **H1:** "These are the voices the world tried to silence."
- **Subtitle:** "City of Asylum hosts the largest residency program in the world for literary writers and artists living in exile under threat of persecution. For two years or more, we provide each writer with a home, a stipend, legal counsel, medical benefits — and the freedom to keep creating."

#### Program Introduction (white background)
- **Two-column:** Text left, House Poem image right
- **Title:** "The Exiled Writer & Artist Residency Program"
- **Body:** "Our residency is a long-term sanctuary for writers who are in exile because of their work. The goal is to enable each writer to continue creating while transitioning to a stable, independent life.

  Our program is effective: every writer or artist hosted by City of Asylum has created a full-length work while in residence, and has been able to continue to create after leaving."
- **Four highlight boxes** (gold left border, 2×2 grid):
  - 🏠 **Safe Housing** — A home on Sampsonia Way, Pittsburgh's Northside
  - 💰 **Living Stipend** — Financial support for two years or more
  - ⚖️ **Legal Counsel** — Immigration and legal support for writers and families
  - 🏥 **Medical Benefits** — Healthcare for writers and families during residency

#### Ukraine Fellowship Banner (warm amber background)
- 🇺🇦 **Fellowship for Ukrainian Writers**
- "In response to Russia's 2022 invasion of Ukraine, City of Asylum launched a special fellowship enabling three Ukrainian writers to come to Pittsburgh — so they can continue to research, write, and publish despite the ongoing war."
- Writers: **Olena Boryshpolets, Oleksandr Frazé-Frazénko, Volodymyr Rafeyenko**

#### Writers Grid (warm-white background)
- **Title:** "18 Writers. 15+ Countries. One Sanctuary."
- **Subtitle:** "Click on a writer to learn their full story — what they fled, what they created, and how City of Asylum changed their life."
- **Filter tabs:** All Writers | Current Residents | Ukrainian Fellowship | Alumni

**Writer Cards — in order (3-column grid):**

1. **Bertony Louis** — 🌴 Caribbean | Current Resident
   - Genre: Poet
   - Bio: "Our newest writer-in-residence, Bertony brings Caribbean poetic traditions to Pittsburgh's literary community, exploring themes of displacement, identity, and belonging."

2. **Rania Mamoun** — 🇸🇩 Sudan | Current Resident (since 2019)
   - Genre: Novelist, Poet, Activist
   - Bio: "A Sudanese journalist and bestselling fiction writer, Rania was censured, beaten, and arrested for her activism. Her short story collection *Thirteen Months of Sunrise* was shortlisted for the Warwick Prize for Women in Translation. She writes and organizes for democracy in Sudan from Pittsburgh."

3. **Volodymyr Rafeyenko** — 🇺🇦 Ukraine | Ukrainian Fellowship
   - Genre: Novelist
   - Bio: "A Ukrainian novelist displaced by Russia's 2022 invasion. His novel *Mondegreen* was the first work of fiction written in Ukrainian by an author who previously wrote in Russian — an act of linguistic resistance."

4. **Olena Boryshpolets** — 🇺🇦 Ukraine | Ukrainian Fellowship
   - Genre: Writer
   - Bio: "Ukrainian writer and journalist, researching and publishing from Pittsburgh despite the ongoing war in her homeland."

5. **Oleksandr Frazé-Frazénko** — 🇺🇦 Ukraine | Ukrainian Fellowship
   - Genre: Poet, Writer
   - Bio: "Ukrainian poet who arrived in Pittsburgh in 2023, settling on the Northside with his family. He continues writing and bearing witness to the war in Ukraine."

6. **Anouar Rahmani** — 🇩🇿 Algeria | Current Resident
   - Genre: Writer
   - Bio: "Algerian writer finding sanctuary and creative freedom at City of Asylum, continuing his literary work far from the conditions that silenced him at home."

7. **Jorge Olivera Castillo** — 🇨🇺 Cuba | Alumni
   - Genre: Writer, Poet
   - Bio: "A Cuban dissident writer and one of the founders of the Varela Project, Jorge was imprisoned multiple times by the Castro government for his writing and activism."

8. **Tuhin Das** — 🇧🇩 Bangladesh | Alumni
   - Genre: Poet
   - Bio: "Bangladeshi poet whose work — including the collection *Exile Poems: In the Labyrinth of Homesickness* — captures the experience of persecution and longing from the inside out."

9. **Bewketu Seyoum** — 🇪🇹 Ethiopia | Alumni (2019–2021)
   - Genre: Poet, Novelist, Essayist
   - Bio: "One of Ethiopia's most beloved and provocative writers, Bewketu was forced to flee after his satirical work brought threats from the government."

10. **Osama Alomar** — 🇸🇾 Syria | Alumni
    - Genre: Writer, Short Story
    - Bio: "Syrian-American writer whose flash fiction — collected in *Fullblood Arabian* — uses dark humor and surrealism to explore persecution, exile, and the absurdity of power."

11. **Khet Mar** — 🇲🇲 Myanmar | Alumni
    - Genre: Writer, Short Story
    - Bio: "A Burmese short story writer who spent a decade in political trouble for her writing. Her husband Than Htay Maung painted the famous Burma-Pittsburgh House mural on Sampsonia Way."

12. **Huang Xiang** — 🇨🇳 China | Alumni (First Writer, 2004–2006)
    - Genre: Poet
    - Bio: "China's pre-eminent post-Cultural Revolution poet — imprisoned and tortured seven times for his writing. City of Asylum's first writer-in-residence. He created the first House Poem on 408 Sampsonia Way in 2004, defining everything that came after."

#### Community CTA (dark background, centered)
- **Title:** "Connecting Writers with Community"
- **Body:** "Our writers don't just receive sanctuary — they become part of Pittsburgh. They read in schools, perform at festivals, and live as neighbors. Support their work."
- **Button (gold):** "Support a Writer's Residency →" → donate.html

#### Simple Footer

---

### PAGE 4: EVENTS & FESTIVALS (events.html)
**Strategic priority:** Programs exist because of the civil rights/free expression mission —
not the other way around. The Jazz program is rooted in COA's commitment to civil rights.

#### Hero (dark, with bookstore background image)
- **Eyebrow:** "Events & Festivals"
- **H1:** `Where Literature, Music & Ideas <em>Come Alive</em>`
- **Subtitle:** "Over 200 free programs each year — readings, concerts, films, and festivals — all grounded in the belief that art and free expression belong to everyone."
- **Stat row:** 200+ Free Programs Yearly | 3–4 Events Most Weeks | 100% Free & Open to All
- **Best image option:** Slide `_023` (Jazz-Poetry Concert crowd with colorful lanterns) — if available. Otherwise bookstore image URL.

#### Program Types (white background)
- **Title:** "Programs That Connect Communities"
- **Four cards** (colored top borders):
  1. 📖 **Literary Readings** (red border) — "Hear from writers exiled under threat of persecution, acclaimed novelists, and emerging voices. Our World Literature series, curated by Andy Tepper, features authors from every continent."
  2. 🎵 **Music & Performance** (gold border) — "Thursday Night Jazz, global sounds, and solo performances. Our stage hosts musicians whose work crosses borders — jazz, classical, world, and experimental sound. Jazz is part of our DNA: the civil rights tradition of jazz mirrors our own commitment to freedom of expression."
  3. 🎬 **Film & Conversation** (green border) — "Documentary screenings, short films, and director Q&As exploring human rights, migration, and creative freedom."
  4. 🎉 **Festivals** (purple border) — "Our flagship annual festivals bring together hundreds of artists, writers, and community members for multi-day celebrations of free expression."

#### Upcoming Events (cream background)
- **Title:** "Upcoming Programs"
- **Subtitle:** "All events are free and open to the public. Held at Alphabet City, 40 W. North Avenue, Pittsburgh."
- **6 event cards:**

  1. **Hugo Cruz & Caminos** | Music | Thu March 19, 2026 · 8:00 PM
     - Image: Hugo Cruz event URL
     - Description: "Performing the music of Art Blakey & the Jazz Messengers with a vibrant Cuban twist. Hugo Cruz brings Afro-Cuban jazz traditions to the Alphabet City stage."
     - Meta: 📍 Alphabet City · 🎟️ Free

  2. **World Literature: Bertony Louis** | Literature | Sun March 22, 2026 · 3:00 PM
     - Image: Bertony Louis event URL
     - Description: "A reading by our newest writer-in-residence — Caribbean poetry of exile, memory, and belonging. Followed by conversation with the author."
     - Meta: 📍 Alphabet City · 🎟️ Free

  3. **World Literature: Cristina Rivera Garza** | Literature | Tue March 24, 2026 · 7:00 PM
     - Image: Cristina Rivera Garza event URL
     - Description: "*Autobiography of Cotton* — a reading from Mexico's celebrated author, MacArthur Fellow, and Pulitzer Prize winner. One of the most important voices in contemporary literature."
     - Meta: 📍 Alphabet City · 🎟️ Free

  4. **Thursday Night Jazz** | Music | Thu March 26, 2026 · 8:00 PM
     - Image: Placeholder gradient (🎵)
     - Description: "Our beloved weekly jazz series continues — a different ensemble every Thursday on the Alphabet City stage. No reservations needed."
     - Meta: 📍 Alphabet City · 🎟️ Free

  5. **Human Rights Film Night** | Film | Sat March 28, 2026 · 7:00 PM
     - Image: Placeholder gradient (🎬)
     - Description: "A documentary screening exploring freedom of expression and the lives of writers under threat, followed by a moderated conversation."
     - Meta: 📍 Alphabet City · 🎟️ Free

  6. **Writer-in-Residence Reading** | Literature | Sun March 29, 2026 · 3:00 PM
     - Image: Placeholder gradient (📖)
     - Description: "Monthly showcase featuring readings and conversation from our current cohort of writers exiled under threat of persecution."
     - Meta: 📍 Alphabet City · 🎟️ Free

- **Button:** "View Full Calendar →"

#### Flagship Festivals (white background)
- **Title:** "Signature Annual Festivals"
- **Subtitle:** "Celebrations of free expression that have brought thousands to Pittsburgh's Northside since 2005."
- **Three feature cards** (image + text, alternating layout):

  1. **Jazz-Poetry Concert** | Annual · Spring | Flagship Festival
     - Image: Slide `_023` (crowd with lanterns) or Alphabet City building URL
     - Description: "Our signature annual event — an outdoor celebration on Sampsonia Way that began in 2005. Jazz musicians and exiled poets perform together under strings of lanterns. Free and open to all. Now held at Alphabet City."
     - Highlights: ✦ Annual Spring tradition since 2005 · ✦ Combines jazz and international poetry · ✦ Hundreds of attendees each year · ✦ Features current writers-in-residence

  2. **Exiled Writers Festival** | Annual · Fall | Signature Festival
     - Description: "A multi-day celebration of writers living under threat of persecution from around the world. Panels, readings, and performances — all free and open to Pittsburgh and beyond."
     - Highlights: ✦ Writers from 15+ countries · ✦ Panels on human rights and free expression · ✦ Collaboration with PEN America and ICORN

  3. **Alphabet City Cultural Fest** | Annual · Summer | Community Festival
     - Image: Slide `_030` (Alphabet City Tent audience) or Alphabet City building URL
     - Description: "A summer celebration on Pittsburgh's Northside — music, literature, food, and art all in one place. The neighborhood's own festival, free for everyone."
     - Highlights: ✦ Free community celebration · ✦ Northside neighborhood event · ✦ Music, readings, and food

#### Venue Section (dark background)
- **Two-column:** Image left (Alphabet City building URL), text right
- **Title:** "Alphabet City — Pittsburgh's Living Room for the World"
- **Body:** "Opened in 2017 at 40 W. North Avenue on Pittsburgh's Northside, Alphabet City is City of Asylum's permanent home — a former Masonic building transformed into a cultural hub."
- **2×2 feature grid:**
  - 🎭 **Performance Stage** — 150-seat stage hosting 3–4 events most weeks
  - 📚 **City of Asylum Bookstore** — World literature in translation, open daily 12–6pm
  - 🍝 **Cucina Alfabeto** — Northern Italian cuisine, open for dinner
  - 🖼️ **Gallery Spaces** — Rotating exhibitions of visual art and public installations

#### Donate CTA (red gradient)
- **Title:** "Every Program Is Free. Your Support Makes That Possible."
- **Body:** "City of Asylum receives no government funding. Every free program, every reading, every concert — made possible entirely by community support."
- **Button (gold):** "Support Free Programs →" → donate.html

#### Newsletter (dark background)
- "Never Miss a Program"
- Email input + Subscribe

#### Full Footer (4-column)

---

### PAGE 5: PLACEMAKING (placemaking.html)
**Strategic priority:** Show the physical transformation of a neighborhood as an act of
human rights activism. Art is not decoration here — it is evidence.

#### Hero (dark background, House Poem image)
- **Eyebrow:** "Placemaking"
- **H1:** `Art Transforms Places. <em>Places Transform Lives.</em>`
- **Subtitle:** "City of Asylum reimagines Pittsburgh's Northside through art — turning ordinary homes into house poems, streets into galleries, and a neighborhood into a destination for creative freedom."
- **Background image:** House Poem URL (Huang Xiang)

#### Vision Introduction (white background)
- **Two-column:** House Poem image left, text right
- **Title:** "Where It All Started: A Poem Painted on a House"
- **Body:** "In 2004, Huang Xiang — imprisoned and tortured in China for his poetry — arrived in Pittsburgh as City of Asylum's first writer-in-residence. He told Diane Samuels he wanted to carve his poetry on Mount Washington to express his gratitude.

  She couldn't arrange that. But she offered him the next best thing: the exterior of his new home on Sampsonia Way. He climbed scaffolding and painted his poems in massive white calligraphy on the brown rowhouse facade.

  It was an act of self-liberation. Banned writing, displayed for a whole neighborhood to see."
- **Pull quote** (gold border): "My poems were banned in China. Here, they cover a house for everyone to read." — Huang Xiang

#### House Poems Section (cream background)
- **Title:** "Poetry You Can Walk Through"
- **Subtitle:** "Each house poem is a collaboration between an exiled writer and a visual artist — transforming a rowhouse into a public artwork."
- **Feature cards:**

  1. **Huang Xiang — House Poem #1**
     - Image: Completed House Poem URL
     - Address: 408 Sampsonia Way · Created 2004 · China
     - Description: "The house that started it all. Huang Xiang painted his banned poems in sweeping calligraphy across the entire facade. The characters, visible from down the block, declared what City of Asylum stands for: words will not be silenced."

  2. **Burma-Pittsburgh House**
     - Image: Burma House mural URL
     - Address: 324 Sampsonia Way · Created 2009 · Myanmar
     - Description: "Khet Mar, a Burmese writer in political exile, and her husband Than Htay Maung created this vibrant mural depicting the Pittsburgh skyline as she imagined it from Burma — surrounded by suffering, dreaming of a safe city."

  3. **Spiritual Wings House**
     - Image: Slide `_017` if available, otherwise Alphabet City building URL
     - Address: 408 Sampsonia Way · Created 2006
     - Description: "A collaboration between Pittsburgh sculptor Thaddeus Mosley and Nobel Laureate Wole Soyinka — wooden sculptural wings attached to the facade, a tribute to the freedom of expression."

  4. **Jazz House**
     - Image: Slide `_020` if available
     - Address: 320 Sampsonia Way · Created 2009
     - Description: "Painted by Than Htay Maung and inspired by Oliver Lake — a bold, colorful facade celebrating the connection between jazz and civil rights, freedom and creative expression."

#### Northside Campus (dark background)
- **Title:** "The Northside Campus"
- **Subtitle:** "A Neighborhood Built Around Free Expression"
- **Body intro:** "City of Asylum's placemaking extends across Pittsburgh's Northside, creating an interconnected campus of cultural spaces, writer residences, and community landmarks."
- **5 landmark cards:**
  - 🏛️ **Alphabet City** — Our cultural hub at 40 W. North Ave. Performance stage, bookstore, restaurant, gallery.
  - 🏠 **Writer Residences** — 7 homes on Sampsonia Way where writers-in-exile live rent-free, woven into the neighborhood.
  - 🎨 **House Poems** — 8+ facade artworks stretching along Sampsonia Way, each created by an exiled writer.
  - 🌿 **Alphabet Reading Garden** — A free public garden on Monterey Street, open daily.
  - 📚 **City Books** — World literature in translation, specializing in voices from outside the mainstream.

#### Impact Stats (charcoal background)
- 8+ House Poems Created
- 20+ Properties Transformed
- 4 Blocks of Public Art
- 1 Cultural Hub (Alphabet City)

#### Philosophy Section (cream background)
- **Henry Reese quote** (large italic serif, centered): "There is no other set-up like it in the world — it owns properties, public spaces and drives a community program based on a fundamental commitment to freedom of expression." — Chris Gribble, former Chair, ICORN
- **Three philosophy cards:**
  1. 🏗️ **Art as Infrastructure** (red border) — "House poems aren't decoration. They are the physical evidence that this neighborhood has decided to stand for something."
  2. ✍️ **Writers as Neighbors** (gold border) — "Our writers don't live in a dormitory or a compound. They live on Sampsonia Way, next to dentists and retirees and schoolchildren — a neighborhood that has chosen to be extraordinary."
  3. 🌱 **Development Without Displacement** (green border) — "Every property City of Asylum has purchased and renovated was abandoned or distressed. We have never displaced a resident."

#### CTA (red gradient)
- "Help Us Build More Homes for Words"
- **Button (gold):** "Support Placemaking →" → donate.html

#### Newsletter + Full Footer

---

### PAGE 6: VISIT US (visit.html)
**Strategic priority:** Make it easy to physically come. But also convey that this is not
just a bookstore — it's a living sanctuary worth experiencing.

#### Hero (60vh photo hero)
- **Background image:** Alphabet City building exterior URL
- **Bottom overlay text:**
  - Eyebrow: "Visit Us"
  - H1: "Alphabet City"
  - Subtitle: "40 W. North Avenue, Pittsburgh, PA 15212"

#### Three Experiences (white background)
- **Title:** "Three Experiences Under One Roof"
- **Three cards:**

  1. 📚 **City of Asylum Bookstore** (gold tag)
     - Image: Bookstore interior URL
     - Hours: Open Daily · 12pm – 6pm
     - Description: "One of the most interesting bookstores in the U.S. Specializing in world literature in translation, children's books, and under-represented authors. Every purchase supports our mission."

  2. 🎭 **Programs: Readings, Concerts & Film** (red tag)
     - Image: Slide `_033` (ASL poetry performance) if available
     - Schedule: 3–4 events most weeks
     - Description: "Free literary readings, concerts, documentary screenings, and festivals on our 150-seat stage. Featuring writers exiled under threat of persecution alongside acclaimed authors and musicians."

  3. 🍝 **Cucina Alfabeto** (green tag)
     - Description: "Northern Italian cuisine in the heart of Alphabet City. Chef-driven seasonal menu. On program nights, you can watch a performance while you dine."

#### Location & Hours (cream background)
- **Two-column:** Info left, Google Maps embed right
- **Address block:**
  - Alphabet City
  - 40 W. North Avenue
  - Pittsburgh, PA 15212
- **Hours table:**
  - City of Asylum Bookstore: Mon–Sun, 12pm–6pm
  - Programs & Events: See calendar
  - Cucina Alfabeto: See restaurant hours
- **Button:** "Get Directions →" (links to Google Maps)

#### Neighborhood Section (white background)
- **Two-column:** Burma House mural image left, text right
- **Title:** "Sampsonia Way & the Northside"
- **Subtitle:** "Where Art Meets Sanctuary"
- **Body:** "A short walk from Alphabet City, Sampsonia Way is a one-way alley on Pittsburgh's Northside where writers exiled under threat of persecution from around the world have found space to exhale.

  Today, 6 writers and their families live here. Walking down Sampsonia Way, you'll see Chinese calligraphy on a rowhouse — poems banned in China, now covering a whole house for everyone to read. A vibrant Burmese mural. A comma-shaped poem in green and orange, the colors of the Bangladeshi flag.

  The block has become a Pittsburgh landmark and a living testament to what a community can do when it decides to stand up for creative freedom."
- **Button:** "Explore the House Poems →" → placemaking.html

#### Getting Here (dark background)
- **Title:** "Easy to Reach from Anywhere in Pittsburgh"
- **Three transport cards:**
  - 🚗 **By Car** — Free street parking on W. North Avenue and surrounding streets. Minutes from I-279 and Route 28.
  - 🚌 **By Bus** — Multiple Port Authority routes stop within one block of Alphabet City. Visit rideprt.org for trip planning.
  - 🚶 **On Foot** — A short walk from the Andy Warhol Museum and other Northside attractions. Follow the murals.

#### Simple Footer

---

### PAGE 7: DONATE (donate.html)
**Strategic priority:** Make the urgency real. This is not a transactional donation page —
it's an invitation to protect someone's life and voice.

#### Hero (dark gradient with red accent)
- **H1:** `You make it possible for silenced writers to <em>speak again.</em>`
- **Subtitle:** "City of Asylum is the only exiled writer sanctuary in the world not funded by governments or universities. Every program, every residence, every legal fee — made possible entirely by community support."
- **Note:** "The only sanctuary not funded by governments or universities."

#### Donation Section (white background)
- **Two-column layout:**

**Left column — Why Donate:**
- **Title:** "Your Impact Is Direct & Measurable"
- **Intro:** "Right now, 6 writers and their families are living on Sampsonia Way — in Pittsburgh — because of donors like you. Nearly 10% of all exiled writers in the entire 80-city ICORN network are in Pittsburgh. Here's what your gift does:"
- **Impact amounts** (with circular badges):
  - **$50** — One Week of Groceries: Provides food for a writer-in-residence and their family for one week
  - **$250** — One Month of Legal Support: Funds immigration and legal counsel to help a writer navigate asylum processes
  - **$500** — One Month of Medical Benefits: Covers healthcare — many writers arrive with trauma-related health needs
  - **$1,000** — One Month of Housing: Provides a safe home on Sampsonia Way for a persecuted writer and family
- **Quote:** "Diane and Henry are life changers." — Rania Mamoun, Writer-in-Residence since 2019

**Right column — Donation Form Card (sticky):**
- Toggle: One-Time / Monthly
- Amount grid (3×2): $25 · $50 · $100 · $250 · $500 · $1,000
- Custom amount input field
- **Red button:** "Donate Now →"
- Fine print: "City of Asylum is a 501(c)(3). All donations are tax-deductible. EIN: 20-2810099"

#### Trust Section (cream background)
- **Three trust cards:**
  - 🛡️ **501(c)(3) Certified** — All donations are fully tax-deductible
  - 🌍 **100% Mission-Driven** — Your gift directly protects writers and funds free programming
  - 💛 **Community-Powered** — The only exiled writer sanctuary funded entirely by individuals and foundations

#### Other Ways to Support (white background)
- **Title:** "More Ways to Help"
- **Three cards:**
  - 📈 **Gifts of Stock** — We accept gifts of appreciated stock — a tax-efficient way to give. Contact us to learn more.
  - ✉️ **Donate by Mail** — Send a check payable to City of Asylum. 40 W. North Ave, Pittsburgh PA 15212
  - 🤝 **Volunteer** — Help at events, assist writers with settling in, or support our bookstore. Time is a gift too.

#### Simple Footer

---

## KEY QUOTES TO USE ACROSS THE SITE

Source these exactly as written — they are the most powerful content available:

1. **Salman Rushdie at PEN Gala (2023):** "The first person who ran to defend me was Henry Reese... After that, a substantial number of people in the front of the audience ran up to help him and jumped on top of my assailant and held him down. If it had not been for these people, I most certainly would not be standing here today."
   → Use on: About page, Homepage origin story

2. **Henry Reese on Chautauqua:** "You would expect people to run away, but they ran forward. It's a metaphor — the physical embodiment of what the City of Asylum community stands for."
   → Use on: About page, Homepage

3. **Rania Mamoun:** "Diane and Henry are life changers."
   → Use on: Donate page, Homepage spotlight

4. **Chris Gribble, former Chair of ICORN:** "There is no other set-up like it in the world — it owns properties, public spaces and drives a community program based on a fundamental commitment to freedom of expression and to protecting the writers and artists who are the 'canaries in the coal mine' of the threats to that freedom."
   → Use on: About page, Placemaking philosophy

5. **Huang Xiang (poem excerpt, Writing in 3-D, 2000):** "The oldest way to write poetry / Is with a brush / The newest way to write poetry / Is to stand right on your head / With mind and body as one / And dab ink / On the ground!"
   → Use on: Placemaking page (attributed poem excerpt)

6. **Diane Samuels on Rushdie attack:** "We were driven before but are even more driven now. It gave us more of a sense of what writers go through, seeing the horrendous proof of what happened to Salman Rushdie. Thank God he survived."
   → Use on: About page

---

## VIDEO LINKS (for future video embeds)

These short videos are available and could enhance the About or Homepage:
- "Sanctuary" by Ash Warren (4:30) — https://www.youtube.com/watch?v=ygTOMBLj3Kg
- Henry Reese on Hospitality (1:49) — https://www.youtube.com/watch?v=D1TaEZXlPk8
- Diane Samuels — Alphabets (2:23) — https://www.youtube.com/watch?v=9wXb1E7e6WY
- Andrés Franco — Home (2:00) — https://www.youtube.com/watch?v=IsMl4hDv0DQ

---

## PRESS CREDENTIALS (for credibility/footer use)

- **The New Yorker** — "A Safe Street in Pittsburgh" by George Packer, Dec 2009
- **Pittsburgh Magazine** — "Restoring Their Voices" by Cristina Rouvalis, Aug 2023
- **Our Towns** — James and Deborah Fallows, Pantheon Books (featured City of Asylum)

---

## ORGANIZATIONAL FACTS (verified)

- **Founded:** 2004 by Diane Samuels and Henry Reese
- **Location:** 40 W. North Avenue, Pittsburgh, PA 15212
- **Writer residences:** Sampsonia Way, Pittsburgh's Northside
- **Total writers hosted:** 18 from 15+ countries
- **Current residents:** 6 writers and families
- **ICORN share:** Nearly 10% of all exiled writers in the 80-city ICORN network
- **Programs:** 200+ free programs per year (3–4 most weeks)
- **Funding:** ONLY exiled writer sanctuary not funded by governments or universities
- **Tax status:** 501(c)(3), EIN: 20-2810099
- **Bookstore hours:** Monday–Sunday, 12pm–6pm
- **Annual budget:** ~$1.5 million
- **First writer:** Huang Xiang (Chinese poet, arrived 2004)
- **Ukrainian Fellowship (2022):** Olena Boryshpolets, Oleksandr Frazé-Frazénko, Volodymyr Rafeyenko
- **World Literature Curator:** Andy Tepper

---

## WHAT THE EXISTING HTML FILES ALREADY HAVE

The 7 HTML files in the project already have:
- ✅ Correct design system (colors, typography, CSS variables)
- ✅ Correct navigation structure
- ✅ Good base content and structure for all 7 pages
- ✅ Correct image URLs from cityofasylum.org
- ✅ Correct organizational facts

**What needs improvement:**
- The origin story and founding narrative could be richer (use Pittsburgh Magazine quotes)
- Writer bios need the "exiled under threat of persecution" framing (not just "writer")
- The Jazz programs section needs civil rights context
- Rania Mamoun's 100-day poetry project story is missing — add to homepage spotlight
- The Rushdie/Chautauqua story would strengthen the About page
- Andy Tepper should be named as World Literature Curator on Events page
- Video links could be added as an optional section on About or Homepage

---
*Brief compiled March 20, 2026 from all project source files.*
