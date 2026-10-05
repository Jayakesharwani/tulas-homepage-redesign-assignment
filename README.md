# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the **Tulas International School (TIS)** homepage, focused on creating a high-converting, engaging, and responsive web experience while retaining the school's core brand identity and content.

The project features smooth animations, micro-interactions, responsive layouts, interactive sections, and a modular React component architecture.

---

## 🚀 Live Demo

- **Live URL:** [Insert Vercel / Netlify / GitHub Pages Link]
- **GitHub Repository:** [Insert GitHub Repository Link]

---

## 🎯 Project Objective

The objective of this project was to transform the existing Tulas International School homepage into a:

- Modern and visually engaging experience
- High-converting landing page
- Fully responsive website
- Animation-rich interface
- Mobile-friendly experience
- Modular and maintainable React application

The redesign preserves the core identity and information architecture of Tulas International School while introducing modern UI patterns, smooth transitions, and interactive experiences.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | Frontend framework |
| **Vite** | Development and build tool |
| **CSS3** | Styling, responsive layouts, themes, and animations |
| **Framer Motion** | UI and scroll-based animations |
| **Lucide React** | Interface icons |
| **React Icons** | Additional iconography |
| **JavaScript (ES6+)** | Application logic and interactions |
| **Vercel** | Deployment |

---

## ✨ Standout Features Implemented

### 1. Custom Cursor

A custom animated cursor interaction has been implemented to enhance the desktop browsing experience.

- Smooth cursor movement
- Interactive hover behavior
- Designed for desktop pointer devices
- Hidden on touch-oriented/mobile devices

### 2. Scroll-Triggered Animations

Sections and content elements use smooth reveal animations as the user scrolls through the page.

- Framer Motion powered animations
- Smooth entrance transitions
- Staggered content reveals
- Optimized animation durations
- Reduced-motion support

### 3. Animated Dark / Light Theme

The website includes a custom theme switcher allowing users to switch between light and dark modes.

- Animated theme toggle
- CSS variable based styling
- Theme-aware interface elements
- Responsive theme control
- Custom theme state management

### 4. Scroll Progress Indicator

A fixed scroll progress indicator provides visual feedback about the user's position on the page.

The progress indicator dynamically updates according to the user's scroll depth.

### 5. Interactive Navigation

The navigation system is designed for both desktop and mobile users.

Features include:

- Dropdown navigation menus
- Hover interactions
- Animated navigation states
- Mobile navigation
- Theme toggle
- Call-to-action button
- Responsive layout

### 6. Modern Hero Section

The hero section establishes the visual identity of the redesigned homepage with:

- Strong typography
- Clear visual hierarchy
- Animated elements
- Primary call-to-action
- Secondary navigation action
- Responsive layout
- Decorative visual elements

### 7. Interactive Sports Section

The sports section uses interactive cards to make the content more engaging.

- Equal-width sports cards
- Hover expansion
- Image transitions
- Additional sport descriptions
- Responsive horizontal layout
- Smooth interaction states

### 8. Animated Statistics Section

School statistics are presented using visually engaging cards.

The section includes:

- Animated numerical values
- Supporting imagery
- Hover interactions
- Responsive card layout
- Strong visual hierarchy

Featured statistics include:

- 22 Acre Pollution Free Campus
- 16+ Olympic Sports
- 24×7 Medical Assistance
- 6:1 Student Teacher Ratio

### 9. Awards & Recognition Slideshow

The awards section presents school achievements through an interactive slideshow.

Features include:

- Automatic slideshow transitions
- Navigation controls
- Slide counter
- Progress indicator
- Image transitions
- Subtle visual effects
- Responsive presentation

### 10. Interactive Testimonials

Testimonials are presented through an interactive and responsive interface designed to improve content readability and engagement.

### 11. Responsive Design

The entire homepage has been designed to work across:

- Mobile — approximately 375px
- Tablet — approximately 768px
- Desktop — 1280px and above

Responsive behavior is applied to navigation, typography, cards, sections, spacing, animations, and interactive elements.

---

## 📸 Screenshots

Add screenshots of the completed homepage in this section.

### Desktop

![Desktop Homepage](./screenshots/desktop-homepage.png)

### Tablet

![Tablet Homepage](./screenshots/tablet-homepage.png)

### Mobile

![Mobile Homepage](./screenshots/mobile-homepage.png)

> Place the corresponding screenshot files inside the `screenshots/` directory.

---

## 📁 Project Structure

```text
tis-homepage-redesign/
│
├── public/
│   ├── about-story.html
│   ├── about-campus.html
│   ├── about-leadership.html
│   ├── academics-curriculum.html
│   ├── academics-learning.html
│   ├── academics-senior-school.html
│   ├── boarding-hostel.html
│   ├── boarding-wellness.html
│   ├── boarding-daily-life.html
│   ├── beyond-sports.html
│   ├── beyond-clubs.html
│   ├── beyond-experiential.html
│   ├── events-school.html
│   ├── events-celebrations.html
│   ├── events-experiences.html
│   ├── admission-why-tis.html
│   ├── admission-process.html
│   ├── admission-enquiry.html
│   └── pages.css
│
├── src/
│   │
│   ├── components/
│   │
│   │   ├── animation/
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Reveal.jsx
│   │   │   └── ScrollProgress.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TopBar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MarqueeSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── EventsSection.jsx
│   │   │   ├── SportsSection.jsx
│   │   │   ├── PhilosophySection.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── RankingsSection.jsx
│   │   │   ├── PersonalitiesSection.jsx
│   │   │   ├── LeadersSection.jsx
│   │   │   ├── AwardsSection.jsx
│   │   │   ├── VirtualTourSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── CollaborationsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   │
│   │   └── ui/
│   │       └── Button.jsx
│   │
│   ├── data/
│   │   └── siteData.js
│   │
│   ├── hooks/
│   │   └── useTheme.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots/
│   ├── desktop-homepage.png
│   ├── tablet-homepage.png
│   └── mobile-homepage.png
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🧩 Component Architecture

The application follows a modular component-based architecture rather than placing the complete homepage inside a single component.

### `components/animation/`

Contains reusable animation-related components.

- `CustomCursor.jsx` — Custom cursor interaction
- `Reveal.jsx` — Scroll/reveal animation wrapper
- `ScrollProgress.jsx` — Page scroll progress indicator

### `components/layout/`

Contains global layout components.

- `Navbar.jsx` — Responsive navigation and dropdown menus
- `TopBar.jsx` — Top information bar
- `Footer.jsx` — Website footer

### `components/sections/`

Contains individual homepage sections.

Each major section is maintained as an independent React component to improve:

- Maintainability
- Reusability
- Readability
- Debugging
- Scalability

### `components/ui/`

Contains reusable interface components such as buttons.

### `data/`

Contains centralized static website content and navigation data.

### `hooks/`

Contains custom React hooks such as the theme management hook.

### `styles/`

Contains the application's global CSS and responsive styling.

---

## 📦 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
```

### 2. Navigate to the Project

```bash
cd tis-homepage-redesign
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal, typically:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📱 Responsive Testing

The homepage was designed and tested with responsive layouts for:

| Device | Target Width |
|---|---:|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1280px+ |

Responsive considerations include:

- Navigation behavior
- Typography
- Card layouts
- Section spacing
- Images
- Buttons
- Touch-friendly interactions
- Animation behavior

---

## ⚡ Performance & UX Considerations

The implementation focuses on delivering a smooth user experience through:

- Component-based React architecture
- Lightweight CSS transitions
- Framer Motion animations
- Responsive layouts
- Optimized interaction states
- Mobile-friendly navigation
- Reduced-motion support
- Reusable components
- Semantic page structure

Animations are designed to enhance the interface without unnecessarily interfering with navigation or content consumption.

---

## 🎨 Design Approach

The redesign combines the existing TIS brand identity with a modern editorial-style interface.

The design focuses on:

- Strong visual hierarchy
- Premium school aesthetic
- Modern typography
- TIS brand colors
- High-quality imagery
- Clear CTAs
- Interactive cards
- Smooth micro-interactions
- Scroll-based experiences
- Responsive layouts

The goal is to create a polished and modern homepage while retaining the recognizable identity of **Tulas International School**.

---

## 🏫 Brand Identity

The redesign retains the core TIS identity through:

- School branding
- Existing school-related content
- Brand color direction
- Official school imagery/assets
- School statistics
- Awards and achievements
- Academic and extracurricular information

Official website:

https://tis.edu.in/

---

## ✅ Submission Checklist

Before submitting the project:

- [ ] Project builds successfully with `npm run build`
- [ ] Custom Cursor is functional
- [ ] Scroll-triggered reveals are functional
- [ ] Dark/Light Theme Switcher is functional
- [ ] Scroll Progress Bar is functional
- [ ] Mobile layout tested at approximately 375px
- [ ] Tablet layout tested at approximately 768px
- [ ] Desktop layout tested at 1280px+
- [ ] No unnecessary `console.log()` statements
- [ ] No unused dependencies or dead code
- [ ] Live deployment is publicly accessible
- [ ] GitHub repository is publicly accessible
- [ ] Screenshots have been added to the README
- [ ] README contains complete setup instructions
- [ ] Google Form submission completed

---

## ⚠️ Technical Review Note

AI tools may be used for development assistance. However, the implementation should be understood by the developer submitting the project.

The developer should be able to explain:

- Component hierarchy
- React state management
- Custom hooks
- Animation implementation
- Theme switching logic
- Responsive behavior
- Navigation structure
- Project architecture

---

## 📄 Assignment

This project was developed as a **Frontend Developer Homepage Redesign Assessment** for Tulas International School.

The implementation focuses on transforming the existing homepage into a modern, animated, responsive, and high-converting web experience while maintaining the school's core brand identity and information architecture.

---

## 👩‍💻 Author

**Jaya Kesharwani**

**Frontend Developer**

- **GitHub:** [Insert GitHub Profile Link]
- **LinkedIn:** [Insert LinkedIn Profile Link]

---

## 📌 Notes

Before submitting the repository, replace the following placeholders:

1. `[Insert Vercel / Netlify / GitHub Pages Link]` with the actual live deployment URL.
2. `[Insert GitHub Repository Link]` with the public repository URL.
3. `[Insert GitHub Profile Link]` with your GitHub profile.
4. `[Insert LinkedIn Profile Link]` with your LinkedIn profile.
5. Add the actual desktop, tablet, and mobile screenshots to the `screenshots/` directory.