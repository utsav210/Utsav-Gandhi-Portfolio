# DESIGN SYSTEM

## 1. Core Principles
- **AI × Engineering × Intelligence**: The visual identity is built to feel premium, technical, minimal, intelligent, and highly usable. 
- **Restraint & Authenticity**: No unnecessary 3D elements, no glowing excesses. Interactions strictly serve to enhance comprehension.
- **Accessibility**: WCAG 2.2 AA compliant. High contrast mode by default (Dark Theme), visible focus states.

## 2. Typography
- **Primary (Headings & Body)**: `Inter` (Sans-serif)
  - Used for readability and modern aesthetic.
  - Headings are bold with tight tracking to communicate confidence.
- **Secondary (Code & Technical Details)**: `Roboto Mono` (Monospace)
  - Used for tags, roles, timelines, and technical terms.
  - Represents the engineering backbone of the portfolio.

## 3. Color Palette
- **Background**: `#0a0a0a` (Deep Space Black)
- **Surface**: `#121212` (Elevated Black)
- **Surface Hover**: `#1e1e1e`
- **Primary (Accent)**: `#3b82f6` (Electric Blue - `blue-500`)
- **Primary Light**: `#60a5fa` (Soft Blue - `blue-400`)
- **Text Primary**: `#ffffff` (Pure White)
- **Text Secondary**: `#a1a1aa` (Zinc-400 for descriptions)
- **Text Muted**: `#52525b` (Zinc-600 for subtle borders/text)

## 4. Components
- **Buttons**: Rounded-xl, solid primary background with subtle hover scale and shadow. Text is bold and sans-serif.
- **Cards**: `bg-surface` with 1px border. Hover state introduces a `-translate-y-1` transition, a primary-tinted border, and a soft blue shadow.
- **Badges/Tags**: Monospace, small text, `bg-surface-hover` for high contrast against cards.

## 5. Animation & Interaction
- **Hero**: Framer Motion for entrance animations. A subtle pulsating background blur represents AI compute.
- **Nav**: Solidifies into a blurred glass header upon scroll.
- **Reduced Motion**: Respects OS-level reduced motion settings via CSS where applicable.
