
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { brand } from '../../data/siteData';

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="hero-copy">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          TULAS INTERNATIONAL SCHOOL · DEHRADUN
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Welcome to
          <br />
          <span>the modern Gurukul.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          TIS is one of India’s top boarding and day schools in Dehradun, India.
          Our CBSE curriculum focuses on academic excellence, holistic
          development, and preparing students to be global leaders.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Button href="#about-tis">EXPLORE TIS</Button>
          <Button href="#contact" variant="outline">
            APPLY NOW
          </Button>
        </motion.div>
      </div>

      <div className="hero-visual">
        <div className="hero-frame">
          <img
            src="https://www.schoolsofdehradun.com/wp-content/uploads/2023/10/Tulas-International-School.jpg"
            alt="Students learning in a modern school environment"
            fetchPriority="high"
          />

          <div className="hero-overlay">
            <span>01</span>
            <strong>LEARN · LEAD · GROW</strong>
            <ArrowUpRight size={20} />
          </div>
        </div>

        <motion.div
          className="hero-cutout-wrap"
          animate={{
            y: [0, -8, 0],
            rotate: [-1.2, 1.2, -1.2],
            scale: [1, 1.018, 1]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <img
            className="hero-cutout"
            src={brand.officialCutouts.scholarStudents}
            alt="TIS student visual"
          />
        </motion.div>

        <div className="hero-badge">
          <span>22</span>
          <small>
            ACRES OF
            <br />
            CAMPUS
          </small>
        </div>
      </div>

      <a className="scroll-cue" href="#marquee">
        <ArrowDown size={16} />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}
