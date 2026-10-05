 
import { motion } from 'framer-motion';
import { Reveal } from '../animation/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { Button } from '../ui/Button';
import { brand } from '../../data/siteData';

export function AboutSection() {
  return (
    <section className="about section-pad" id="about-tis">
      <div className="container about-grid">

        <Reveal>
          <SectionIntro
            eyebrow="01 / ABOUT TIS"
            title="A school where curiosity becomes possibility."
          />
        </Reveal>

        <Reveal delay={.08} className="about-visual">
          <motion.div
            className="about-image"
            whileHover={{ scale: 1.018, rotate: -0.5 }}
            transition={{
              duration: .65,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <img
              src="https://tis.edu.in/_next/static/media/image1.a3011dda.png"
              alt="Students collaborating in a classroom"
              loading="lazy"
            />
          </motion.div>

          <motion.img
            className="about-cutout"
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src={brand.officialCutouts.atTis}
            alt="TIS student cutout"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={.12} className="about-copy">
          <p>
            We provide world-class education, modern facilities, and a nurturing
            environment for students to thrive academically, socially, and culturally.
            Join TIS to be part of a community that encourages leadership, innovation,
            and lifelong learning.
          </p>

          <Button href="#boarding-life" variant="outline">
            DISCOVER CAMPUS LIFE
          </Button>
        </Reveal>

      </div>
    </section>
  );
}
