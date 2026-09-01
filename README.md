# Md Aanish — Portfolio

A dark-mode-first portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Theme: **"Deccan Twilight"** — deep indigo background, warm gold accent, violet AI signal, editorial serif display type paired with a technical mono for labels.

## Run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Deploy — done.

## Where everything lives

```
portfolio/
├─ app/
│  ├─ layout.tsx        → fonts, <head> metadata, SEO/OG/Twitter/JSON-LD, global chrome
│  ├─ page.tsx           → assembles all sections in order
│  ├─ globals.css        → design tokens, glass/gradient utilities, light-theme overrides
│  ├─ robots.ts          → robots.txt
│  └─ sitemap.ts         → sitemap.xml
├─ components/
│  ├─ Navbar.tsx         → sticky glass nav, command palette trigger, resume CTA
│  ├─ ThemeToggle.tsx    → dark/light switch (persisted in localStorage)
│  ├─ CommandPalette.tsx → ⌘K / Ctrl+K quick navigation
│  ├─ ScrollProgressBar.tsx
│  ├─ BackToTop.tsx
│  ├─ Hero.tsx           → headline, CTAs, socials
│  ├─ AgentTrace.tsx     → signature animated diagram (query → agents → answer)
│  ├─ About.tsx          → story + both photos
│  ├─ Skills.tsx         → focus-area cards
│  ├─ Projects.tsx       → the two resume projects as cards
│  ├─ Experience.tsx     → honest "seeking first role" framing
│  ├─ Education.tsx      → academic history table
│  ├─ AchievementsCertificates.tsx → empty-state, ready for future entries
│  ├─ Timeline.tsx       → vertical journey timeline
│  ├─ Contact.tsx        → form (opens a pre-filled email) + direct links
│  └─ Footer.tsx
├─ lib/data.ts            → all text content in one place — edit this file first
└─ public/
   ├─ images/hero.jpg      → cropped/enhanced photo (full-body shot)
   ├─ images/about.jpg     → second photo, used as a candid accent
   ├─ Md-Aanish-Resume.pdf → your uploaded resume, wired to every "Download Resume" button
   └─ icon.png             → generated monogram favicon
```

To change any text on the site, start in **`lib/data.ts`** — nearly everything pulls from there.

## Content checklist — please review before sending this to recruiters

Your resume is currently quite short, so a few sections are placeholders rather than invented content (per your own instructions, I didn't want to fabricate anything):

- **Tech stack / specific tools**: your resume doesn't name any specific language, framework, or library (e.g. Python, LangChain, a vector DB). I built "Focus Areas" from your objective's own wording (RAG pipelines, agentic AI, prompt engineering, vector search, tool integration) instead of guessing at tools. **Add your real stack in `lib/data.ts` → `focusAreas`, or ask me to add a dedicated Tech Stack section once you tell me the specifics.**
- **Experience**: no formal work history was on the resume, so that section is framed honestly as "seeking my first role," pointing at your project work instead.
- **Achievements & Certificates**: none were listed, so this section is an intentional empty state rather than invented awards.
- **Project links**: GitHub/Live Demo buttons point to `#` placeholders — send me the real repo/demo URLs and I'll wire them in.
- **Socials**: GitHub/LinkedIn links are placeholders (`github.com/`, `linkedin.com/`) — send me your actual handles.
- **Domain**: metadata assumes `mdaanish.dev` — update `siteUrl` in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `app/robots.ts` once you pick a real domain.

## Notes on the two photos

- The full-body shot (white shirt) is used as the hero/about image — face fully visible, so it was the stronger choice for a first impression.
- The close-up mirror selfie is used as a smaller, tilted accent photo in the About section. I didn't retouch or reshape the face, only cropped and lightly adjusted contrast/brightness.
