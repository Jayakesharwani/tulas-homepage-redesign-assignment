# TIS Redesign — Requirement Coverage

## Original task coverage

1. **Project overview** — complete single-page animated React homepage with TIS brand direction and original homepage content hierarchy.
2. **React.js** — React + Vite.
3. **Styling** — CSS variables and structured CSS architecture.
4. **Animations** — Framer Motion for hero entrance, scroll reveals, marquee movement, hover motion and scroll progress.
5. **Deployment** — Vercel-ready Vite project.
6. **Custom cursor** — desktop-only spring-following ring; disabled for coarse pointers.
7. **Scroll-triggered reveals** — reusable `Reveal` component, 0.48s entrance timing, `once: true` viewport behavior.
8. **Theme switcher** — animated-feeling light/dark control with localStorage persistence.
9. **Scroll progress** — spring-smoothed fixed progress line at viewport top.
10. **Clean architecture** — components grouped into layout, sections, UI and animation; data separated from presentation.
11. **Semantic structure** — header, nav, main, section and footer elements.
12. **Responsive design** — desktop, tablet and mobile breakpoints with structural mobile changes rather than simple scaling.
13. **Image handling** — unique visual source per content card/section, responsive object-fit sizing, lazy loading below the fold, eager hero image, no repeated hero photography.
14. **Accessibility/performance** — alt text, keyboard-friendly controls, reduced-motion media query, transform/opacity animation patterns, no scroll-jacking.
15. **README** — setup, build and deployment instructions included.

## TIS content retained

- Welcome / boarding and day school positioning
- Establishment story
- Events
- 16+ sports
- “What’s the secret to making school awesome?” philosophy
- 22-acre campus statistic
- 16+ sports statistic
- 24×7 medical assistance
- 6:1 student-teacher ratio
- Recognition/rankings
- Influential personalities
- Leaders / values narrative
- Awards
- Virtual tour
- Parent testimonials / Google review direction
- 12+ collaborations
- Admission/enquiry CTA
- Contact details and policy/footer links

## Brand implementation

Core variables:

- `#B90124` TIS red
- `#60BAB1` sea green
- `#6A7B12` olive accent
- black / white foundation

The official TIS logo and selected official transparent TIS assets are used directly from `tis.edu.in`. The remaining photography is intentionally separated by content item so each visual has its own source. For production, any generic editorial photography should be replaced with TIS-owned/licensed photography where required.

## User-directed visual update — October 2026

- Enhanced only the navbar theme-toggle interaction; navigation labels, CTA, logo and layout were otherwise preserved.
- Added spring hover/tap motion, icon transition and animated orb treatment to the theme toggle.
- Animated the existing `scholarStudents` hero cutout without replacing it; added soft edge fading/blur treatment on all four sides.
- Replaced generic stock imagery in the sports, events, awards, personalities, leadership and supporting sections with official Tulas International School media URLs.
- Expanded Events to 10 TIS events with short descriptions, scroll reveals and image hover motion.
- Added real TIS sports photography for the full 16-sport rail.
- Added actual collaboration/academic-partner logos from TIS's official international tie-up media.
- Added two official Tulas International School YouTube videos to the virtual-tour experience.
- Added animated statistic counters and a restrained decorative gold orbit around the existing statistic numbers; existing TIS text/accent palette remains unchanged.
- Added more staggered scroll-triggered reveals and restrained hover/scale motion across requested sections.

### Image/video source basis
The assets were selected from Tulas International School's official website media endpoints and its official YouTube channel, including the school's sports, events, awards, collaboration and campus-tour material.
