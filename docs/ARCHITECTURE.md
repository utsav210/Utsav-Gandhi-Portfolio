# ARCHITECTURE

## 1. Stack Overview
- **Framework**: Astro (v5)
- **UI Library**: React (v19) for interactive islands.
- **Styling**: Tailwind CSS (v4) via native Astro Vite plugin.
- **Language**: TypeScript (Strict Mode).
- **Icons**: Inline SVGs (to avoid hydration/export issues with CJS modules) & Lucide React.
- **Animations**: Framer Motion.

## 2. Directory Structure
```text
/
├── src/
│   ├── components/  # React & Astro components (Navbar, Hero, ProjectCard, Section)
│   ├── data/        # portfolio.ts (Source of truth derived from Resume)
│   ├── layouts/     # Layout.astro (Global HTML wrapper & metadata)
│   ├── pages/       # index.astro (Entry point)
│   └── styles/      # global.css (Tailwind v4 theme configs)
├── public/          # Static assets (Favicon, Resume PDF)
├── docs/            # Strategic and Architecture documentation
├── .agents/skills/  # AI Agent Workspace Skills
└── astro.config.mjs # Astro and Vite configuration
```

## 3. Data Flow
Content is entirely decoupled from the presentation layer. `src/data/portfolio.ts` contains structured arrays and objects representing the user's resume. Components map over this data to render UI. This allows rapid content updates without touching markup.

## 4. Rendering Strategy
The application is **Statically Generated (SSG)** by default. 
- `Navbar` and `Hero` are hydrated on the client (`client:load`) because they contain state (scroll state, mobile menu, Framer Motion).
- `ProjectCard` and `Section` are static Astro components, shipping zero JavaScript to the client.

## 5. Deployment
Configured for GitHub Pages via standard `npm run build`. The resulting `/dist` folder is purely static HTML/CSS with minimal JS for interactive islands.
