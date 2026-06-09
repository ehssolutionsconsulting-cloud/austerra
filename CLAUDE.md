# Austerra Group — CLAUDE.md

## Project
Australian B2B environmental & engineering consulting firm.
**Company:** Austerra Group Pty Ltd ("Southern Earth")
**Services:** Environmental · Occupational Hygiene · Geotechnical Engineering
**Market:** Infrastructure, energy, mining, construction, government — Australia wide

---

## Stack
- **Framework:** Next.js 14 App Router
- **CMS:** Payload CMS v3 (self-hosted, runs inside Next.js, admin at `/admin`)
- **Database:** MongoDB Atlas (free tier)
- **Styling:** SASS (SCSS) only
- **Language:** TypeScript
- **Hosting:** Vercel
- **Domain:** austerra.com.au
- **Fonts:** IBM Plex Serif + IBM Plex Mono + IBM Plex Sans (Google Fonts)

---

## Coding Rules — Never Break

1. **No inline styles** — never use `style={{}}` anywhere
2. **No Tailwind** — SCSS only, one file per component in `styles/components/`
3. **BEM naming** — all classes follow Block__Element--Modifier convention
4. **No rounded corners** — `border-radius: 0` everywhere
5. **No box shadows** — use borders for depth
6. **No gradients** — flat colors only
7. **No lined/ruled backgrounds** — no repeating horizontal line patterns
8. **WCAG 2.1 AA** — all components must be accessible
9. **Semantic HTML** — correct tags (`<nav>`, `<main>`, `<article>`, `<section>`, etc.)
10. **ARIA** — labels, roles, states on all interactive elements

---

## Accessibility Requirements

- Skip link to `#main-content` on every page
- WCAG 2.1 AA color contrast minimum on all text
- Visible focus ring (`outline: 3px solid var(--color-olive); outline-offset: 3px`) on all interactive elements via `:focus-visible`
- All images have meaningful `alt` text; decorative images use `alt=""`
- All forms: `<label for>`, `aria-required`, `aria-describedby` for errors, `role="alert"` on error messages
- Mobile nav: focus trap, `aria-expanded`, `aria-controls`, Escape key closes
- Heading hierarchy: one `<h1>` per page, never skip levels
- Cards: link on the title/heading, never make whole card clickable via `onClick`
- `prefers-reduced-motion` respected for all transitions
- All `<ul>` navigation lists use `role="list"`

---

## Design Tokens (`styles/_variables.scss`)

### Colors
```
--color-ink:           #1a1a14   (nav bg, primary text)
--color-ink-mid:       #4a4a3a   (body text)
--color-ink-light:     #8a8a7a   (labels, meta — large text only, contrast AA Large)
--color-paper:         #f7f4ed   (page bg)
--color-paper-dark:    #ece8de   (card/sidebar bg)
--color-rule:          #d4cfc0   (borders, dividers)
--color-red:           #c0392b   (discipline 01, eyebrow labels)
--color-olive:         #5a6b3a   (primary CTA, discipline 02, focus ring)
--color-olive-light:   #7a9a5a   (hover states)
--color-pencil:        #b5a882   (logo on dark bg)
--color-stone:         #7a6e5e   (discipline 03 — large text only)
```

### Discipline Accent Colors
- Environmental (01) → `--color-red`
- Occupational Hygiene (02) → `--color-olive`
- Geotechnical (03) → `--color-stone`

### Fonts
```
$font-serif: 'IBM Plex Serif', serif
$font-mono:  'IBM Plex Mono', monospace
$font-sans:  'IBM Plex Sans', sans-serif
```

### Spacing
```
$spacing-page-x:    2.5rem
$spacing-section-y: 3rem
$spacing-card:      2rem
$nav-height:        56px
```

### Breakpoints
```
$bp-mobile:  480px
$bp-tablet:  768px
$bp-desktop: 1024px
```

---

## Design Style

- Clean, flat, corporate — inspired by field notebooks and geological reports
- Dark ink navbar always (`--color-ink` bg, `--color-pencil` logo)
- Section labels: IBM Plex Mono, uppercase, prefixed with `// `
- Service cards: 2px top accent bar in discipline color
- Card grids use 1px gaps: parent `background: var(--color-rule)`, children `background: var(--color-paper)`
- Major sections separated by `border-bottom: 2px solid var(--color-ink)`
- Buttons: rectangular, IBM Plex Mono, uppercase — primary (ink fill) and outline variants
- `<em>` inside headings renders key words in italic `--color-olive`

---

## Pages (14 total)

| # | Page | Route | CMS Data |
|---|---|---|---|
| 1 | Home | `/` | Projects + Services |
| 2 | About | `/about` | TeamMembers |
| 3 | Services Overview | `/services` | Services |
| 4 | Environmental | `/services/environmental` | Services |
| 5 | Occupational Hygiene | `/services/occupational-hygiene` | Services |
| 6 | Geotechnical | `/services/geotechnical` | Services |
| 7 | Projects Archive | `/projects` | Projects |
| 8 | Project Detail | `/projects/[slug]` | Projects |
| 9 | Insights Archive | `/insights` | Insights |
| 10 | Insight Detail | `/insights/[slug]` | Insights |
| 11 | Careers | `/careers` | JobListings |
| 12 | Contact | `/contact` | Static + API route |
| 13 | Privacy Policy | `/privacy-policy` | Static |
| 14 | Terms of Use | `/terms-of-use` | Static |

### Home page sections (in order)
Hero → Industries Strip → Service Cards → Featured Projects → About Band

### Service detail pages (4, 5, 6) sections (in order)
Page Header → Discipline Tab Nav → Service Detail + Sub-services → Related Projects → Other Disciplines

### About page sections (in order)
Page Header → Founder Story + Values → Team Grid → Certifications Bar

### Projects page sections (in order)
Page Header → Filter Bar (All / Environmental / OccHyg / Geotechnical) → Projects Grid → Pagination

### Insights page sections (in order)
Page Header → Featured Insight (large) → Insights Grid

### Careers page sections (in order)
Page Header → Why Join Us (3 cards) → Job Listings → Empty state if no listings

### Contact page sections (in order)
Page Header → 2-column: Contact Details left + Contact Form right

---

## Payload CMS Collections

### Services
`title · slug · disciplineNumber (1|2|3) · accentColor (red|olive|stone) · shortDescription · fullDescription (richText) · subServices (array) · tags (array) · featuredImage`

### Projects
`title · slug · projectId (PRJ-YYYY-XXX) · client · year · location · discipline (environmental|hygiene|geotechnical) · featured (bool) · shortDescription · fullDescription (richText) · tags (array) · coverImage`

### Insights
`title · slug · publishedAt · author (→TeamMembers) · category (Environmental|Geotechnical|OccHyg|General) · excerpt · body (richText) · coverImage · status (draft|published)`

### TeamMembers
`name · initials (2 chars) · role · qualifications · bio · photo · order`

### JobListings
`title · location · type (Full-time|Part-time|Contract) · discipline · description (richText) · closingDate · active (bool)`

### Users
`name · role (admin|editor) · auth: true`

---

## Environment Variables
```
MONGODB_URI=
PAYLOAD_SECRET=
NEXT_PUBLIC_SERVER_URL=
```

## Getting Started
```bash
npx create-payload-app@latest austerra-group
# Select: Next.js · MongoDB · TypeScript
cd austerra-group
npm install sass
npm run dev
# Admin: http://localhost:3000/admin
```