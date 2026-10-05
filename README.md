# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the **Tulas International School (TIS)** homepage, focused on creating a high-converting, engaging, and responsive web experience while retaining the school's core brand identity and content.

The project features smooth animations, micro-interactions, responsive layouts, interactive sections, and a modular React component architecture.

---

## 🚀 Live Demo

- **Live URL:** [Insert Vercel / Netlify / GitHub Pages Link]
- **GitHub Repository:** https://github.com/Jayakesharwani/tulas-homepage-redesign-assignment

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

---

## 📁 Project Structure

```text
tulas-homepage-redesign-assignment/
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
│   │   │
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
│   │       ├── Button.jsx
│   │       └── SectionIntro.jsx
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
├── IMPLEMENTATION_NOTES.md
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Jayakesharwani/tulas-homepage-redesign-assignment.git
```

### 2. Navigate to the Project

```bash
cd tulas-homepage-redesign-assignment
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```
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

## 👩‍💻 Author

**Jaya Kesharwani**
**Full Stack Developer**