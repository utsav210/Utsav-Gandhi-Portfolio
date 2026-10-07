# PORTFOLIO PLAN

## 1. Positioning
**Primary Positioning**: AI Engineer / Agentic AI Engineer
**Secondary Positioning**: AI/ML Engineer, Python / Software Engineer
**Target Roles**: Forward Deployed Engineer, AI Engineer, Applied AI Engineer
**Target Audience**: Recruiters (hiring for AI/ML roles), Freelance Clients (seeking GenAI/Automation solutions).

**Key Technical Differentiators**:
- Proven experience building Agentic Workflows (LangGraph, Human-in-the-loop, State persistence).
- Strong full-stack foundation (Next.js, React, Django) allowing end-to-end delivery of AI solutions.
- Intersecting expertise in AI Safety & Cybersecurity (Guardrails, Prompt Injection Defense, M.E. Cyber Security).
- Focus on quantifiable metrics (Latency reduction, Accuracy %, Time saved) over just technology lists.

## 2. Sitemap & Information Architecture
- **Hero Section**: Value proposition and strong AI-focused headline.
- **About/Profile**: Concise summary of engineering philosophy and background.
- **Expertise (Technical Skills)**: Grouped into Agentic AI, Generative AI, AI/ML, Software Engineering, Cybersecurity.
- **Featured Projects**: CyberTrace AI, Agentic AI with LangGraph, RAG-Based AI Book Assistant.
- **Engineering Lab**: Deep dive into architecture diagrams, agent workflows, and AI pipelines (e.g., LangGraph patterns, RAG architecture).
- **Experience & Education**: Timeline of professional roles and academic background.
- **What I Can Build (Freelance Services)**: Offerings like AI/GenAI Solutions, Agentic Systems, Automation, AI-powered Cybersecurity.
- **Contact**: Secure, privacy-conscious form for leads and recruiter outreach.

## 3. Content Strategy
- **Evidence > Claims**: Back up skills with project outcomes (e.g., "98% response accuracy in RAG", "Reduced API latency by 40%").
- **Engineering Decisions**: Highlight *why* specific architectures were chosen (e.g., MMR retrieval to reduce hallucinations, DFS for cycle detection in mule accounts).
- **Authenticity**: Use exact terminology and metrics from the resume. No hallucinations.

## 4. Design Direction
- **Theme**: "AI × Engineering × Intelligence".
- **Vibe**: Premium, technical, minimal, intelligent. Dark mode by default (or sophisticated high-contrast theme).
- **Visuals**: Use subtle technical elements (e.g., a node-graph visualization, terminal-like typography for code, clean bento-box layouts for cards).
- **Colors**: Deep blacks, slate grays, with primary accents of electric blue or vibrant purple to signify AI/Compute.
- **Typography**: Inter or Roboto Mono for technical details; sleek sans-serif (e.g., Inter, Plus Jakarta Sans) for headings.

## 5. Technical Architecture
- **Framework**: Astro (for high performance and static generation).
- **Styling**: Tailwind CSS.
- **Language**: TypeScript.
- **Interactive UI**: React (only for complex components like the Hero visualization or Engineering Lab graphs), Framer Motion for smooth animations.
- **Icons**: Lucide React.
- **Contact Form**: Formspree (or similar static form provider).
- **Hosting/CI**: GitHub Pages via GitHub Actions.

## 6. Skills Architecture (Agent Skills)
We will create specific `.agents/skills/` to divide responsibilities:
- `portfolio-strategy`
- `resume-content`
- `ui-ux-design`
- `frontend-architecture`
- `responsive-design`
- `interaction-motion`
- `accessibility`
- `seo`
- `performance`
- `security-audit`
- `browser-qa`
- `recruiter-review`
- `freelance-conversion`
- `deployment`

## 7. QA Strategy
- Automated checks (TypeScript compiler, Astro build, ESLint).
- Browser Agent QA for Visual, Responsive, Accessibility, and Functional testing across Desktop, Tablet, and Mobile viewports.
- Recruiter/Freelance proxy reviews to ensure messaging hits the mark.
- Performance profiling (Lighthouse target: 95+ across all metrics).

## 8. Deployment Strategy
- Local validation (`npm run build`).
- Initialize Git repository and commit.
- Push to GitHub (using provided credentials if applicable).
- Set up GitHub Actions for automated deployment to GitHub Pages.
