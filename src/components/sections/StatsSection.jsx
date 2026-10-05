import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../animation/Reveal';
import { stats } from '../../data/siteData';

const statImages = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9DlzhvbRc4MdbgFh7c5wEwb0U-Bp29qCdDuDN9U3JQ&s=10',
    color: 'red',
    description: 'A spacious 22-acre pollution-free campus designed for learning, growth and exploration.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiiDsTL593z-BWC8JbCMxEY0TW5CK-nC4TBJQtOWAmQ&s=10',
    color: 'green',
    description: 'World-class sporting opportunities with professional coaching.',
  },
  {
    image: 'https://tis.edu.in/_next/static/media/image3.b8273b93.png',
    color: 'olive',
    description: 'Round-the-clock medical care and support for students on campus.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9Y_w8nJNHiv2e7vf2C0h4gHxf2Uuh7YvpbEdvoEy2g&s=10',
    color: 'dark',
    description: 'Personal attention and dedicated teachers helping every student grow with confidence.',
  },
];

function AnimatedNumber({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value);
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setDisplayValue(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      start = 0;
    };
  }, [value]);

  return (
    <div className="stats-number-animated">
      <strong>{displayValue}</strong>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="stats section-pad" id="by-numbers">
      <div className="container">
        <Reveal>
          <div className="stats-color-intro">
            <div>
              <span className="eyebrow">
                03 / BY THE NUMBERS
              </span>
              <h2>
                <span className="text-red">Tulas</span>{' '}
                beyond numbers.
              </h2>
            </div>
            <p>
              Every number represents a part of the Tulas experience —
              from our campus and sports to care, support and
              personalised learning.
            </p>
          </div>
        </Reveal>
        <div className="stats-color-grid">
          {stats.map((stat, index) => {
            const visual = statImages[index];
            return (
              <motion.article
                key={stat.label}
                className={`stats-color-card stats-color-${visual.color}`}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
              >
                <div className="stats-card-image">
                  <img
                    src={visual.image}
                    alt={`Tulas International School ${stat.label}`}
                  />
                  <div className="stats-card-overlay" />
                </div>
                <div className="stats-card-content">
                  <div className="stats-card-top">
                    <span>
                      0{index + 1}
                    </span>
                    <span className="stats-card-dot" />
                  </div>
                  <div className="stats-card-bottom">
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                    <h3>
                      {stat.label}
                    </h3>
                    <p>
                      {visual.description}
                    </p>
                  </div>
                </div>
                <div className="stats-card-circle" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}