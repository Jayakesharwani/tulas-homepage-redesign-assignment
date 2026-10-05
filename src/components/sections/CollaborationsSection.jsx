
import { motion } from 'framer-motion';
import { Reveal } from '../animation/Reveal';
import { collaborations } from '../../data/siteData';

export function CollaborationsSection() {
  return (
    <section className="collaborations section-pad">
      <div className="container">

        <Reveal>
          <div className="collab-head">
            <span className="eyebrow">11 / COLLABORATIONS</span>

            <h2>
              <span className="collab-count">12+</span> collaborations.
              <br />
              <em>One connected ecosystem.</em>
            </h2>
          </div>
        </Reveal>

      </div>

      <div className="logo-marquee">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="logo-track"
        >
          {[...collaborations, ...collaborations].map((item, i) => (
            <div
              className="collab-logo"
              key={`${item.name}-${i}`}
            >
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
