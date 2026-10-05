import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../animation/Reveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const awardImages = [
  {
    year: '2023',
    image: 'https://tis.edu.in/_next/static/media/2023.ada8441f.png',
  },
  {
    year: '2022',
    image: 'https://tis.edu.in/_next/static/media/2022.80dca251.png',
  },
  {
    year: '2019',
    image: 'https://tis.edu.in/_next/static/media/2019.4627b387.png',
  },
  {
    year: '2018',
    image: 'https://tis.edu.in/_next/static/media/2018.671572e8.png',
  },
  {
    year: '2017',
    image: 'https://tis.edu.in/_next/static/media/2017.aa20ce2c.png',
  },
  {
    year: '2016',
    image: 'https://tis.edu.in/_next/static/media/2016.f02ac21f.png',
  },
  {
    year: '2015',
    image: 'https://tis.edu.in/_next/static/media/2015.376c0d93.png',
  },
];

export function AwardsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) =>
        current === awardImages.length - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setActive((current) =>
      current === 0 ? awardImages.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === awardImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="awards section-pad">
      <div className="container">

        <Reveal>
          <div className="awards-slideshow-head">
            <div>
              <span className="eyebrow">08 / AWARDS</span>

              <h2>
                Celebrating the hard work
                <br />
                and perseverance of the best.
              </h2>
            </div>

            <div className="awards-slide-counter">
              <span>{String(active + 1).padStart(2, '0')}</span>
              <i>/</i>
              <span>{String(awardImages.length).padStart(2, '0')}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="awards-slideshow">

            <div className="awards-slide-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="awards-slide"
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                    x: 35
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    x: -35
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <img
                    src={awardImages[active].image}
                    alt={`${awardImages[active].year} Tulas International School award ceremony`}
                  />

                  <div className="awards-slide-overlay" />

                  <div className="awards-slide-info">
                    <span>{awardImages[active].year}</span>
                    <strong>TULAS INTERNATIONAL SCHOOL</strong>
                    <small>AWARDS &amp; RECOGNITION</small>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="awards-slide-controls">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous award"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="awards-progress">
                {awardImages.map((award, index) => (
                  <button
                    key={award.year}
                    type="button"
                    className={index === active ? 'is-active' : ''}
                    onClick={() => setActive(index)}
                    aria-label={`Show ${award.year} award`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next award"
              >
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}