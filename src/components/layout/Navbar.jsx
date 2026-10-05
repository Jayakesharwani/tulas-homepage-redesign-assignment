import { Menu, Moon, Sun, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  {
    label: 'About TIS',
    section: 'about-tis',
    links: [
      ['Our Story', 'about-story.html'],
      ['Campus & Facilities', 'about-campus.html'],
      ['Leadership', 'about-leadership.html'],
    ],
  },
  {
    label: 'Academics',
    section: 'academics',
    links: [
      ['Curriculum', 'academics-curriculum.html'],
      ['Learning Approach', 'academics-learning.html'],
      ['Senior School', 'academics-senior-school.html'],
    ],
  },
  {
    label: 'Boarding Life',
    section: 'boarding-life',
    links: [
      ['Hostel Life', 'boarding-hostel.html'],
      ['Student Wellness', 'boarding-wellness.html'],
      ['Daily Life', 'boarding-daily-life.html'],
    ],
  },
  {
    label: 'Beyond Academics',
    section: 'beyond-academics',
    links: [
      ['Sports', 'beyond-sports.html'],
      ['Clubs & Activities', 'beyond-clubs.html'],
      ['Experiential Learning', 'beyond-experiential.html'],
    ],
  },
  {
    label: 'Events',
    section: 'events',
    links: [
      ['School Events', 'events-school.html'],
      ['Celebrations', 'events-celebrations.html'],
      ['Student Experiences', 'events-experiences.html'],
    ],
  },
  {
    label: 'Admission',
    section: 'admission',
    links: [
      ['Why Choose TIS', 'admission-why-tis.html'],
      ['Admission Process', 'admission-process.html'],
      ['Enquire Now', 'admission-enquiry.html'],
    ],
  },
];

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">

       
        <a
          className="brand-lockup"
          href="/"
          data-cursor
          aria-label="Tulas International School Home"
        >
          <img
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School logo"
          />

          <span>
            <b>TULAS</b>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <div
              className="nav-dropdown"
              key={item.label}
            >
              {/* MAIN NAV OPTION */}
              <a
                className="nav-parent"
                href={`/#${item.section}`}
                data-cursor
              >
                <span>{item.label}</span>

                <ChevronDown
                  className="nav-chevron"
                  size={13}
                  strokeWidth={1.8}
                />
              </a>

              {/* DROPDOWN */}
              <div className="nav-dropdown-menu">
                {item.links.map(([label, href]) => (
                  <a
                    key={label}
                    href={`/${href}`}
                    data-cursor
                  >
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* THEME BUTTON */}
          <motion.button
            type="button"
            className={`theme-toggle ${
              theme === 'dark' ? 'is-dark' : ''
            }`}
            onClick={onToggleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
            data-cursor
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <span
              className="theme-toggle-track"
              aria-hidden="true"
            >
              <span className="theme-toggle-stars">
                <i />
                <i />
                <i />
              </span>

              <span className="theme-toggle-orb" />
            </span>

            <span
              className="theme-toggle-glow"
              aria-hidden="true"
            />

            <motion.span
              className="theme-toggle-icon"
              key={theme}
              initial={{
                opacity: 0,
                rotate: -70,
                scale: 0.55,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 420,
                damping: 22,
              }}
            >
              {theme === 'light' ? (
                <Moon size={14} />
              ) : (
                <Sun size={14} />
              )}
            </motion.span>
          </motion.button>

          {/* APPLY NOW */}
          <a
            className="nav-cta"
            href="/#admission"
            data-cursor
          >
            <span>APPLY NOW</span>
            <span className="nav-cta-arrow">↗</span>
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="mobile-nav">

          {navItems.map((item) => (
            <details
              key={item.label}
              className="mobile-dropdown"
            >
              <summary>
                <span>{item.label}</span>

                <ChevronDown size={14} />
              </summary>

              <div>
                {item.links.map(([label, href]) => (
                  <a
                    key={label}
                    href={`/${href}`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </details>
          ))}

          {/* MOBILE THEME */}
          <button
            type="button"
            className={`mobile-theme-toggle ${
              theme === 'dark' ? 'is-dark' : ''
            }`}
            onClick={onToggleTheme}
          >
            <span className="mobile-theme-icon">
              {theme === 'light' ? (
                <Moon size={15} />
              ) : (
                <Sun size={15} />
              )}
            </span>

            <span>
              {theme === 'light'
                ? 'Dark mode'
                : 'Light mode'}
            </span>
          </button>

          {/* MOBILE APPLY BUTTON */}
          <a
            className="nav-cta"
            href="/#admission"
            onClick={() => setOpen(false)}
          >
            APPLY NOW
          </a>
        </div>
      )}
    </header>
  );
}