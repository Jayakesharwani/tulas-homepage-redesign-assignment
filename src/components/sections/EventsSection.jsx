
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../animation/Reveal';
import { events } from '../../data/siteData';

export function EventsSection() {
  return (
    <section className="events section-pad" id="events">
      <div className="container">

        <Reveal>
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">01A / EVENTS</span>

              <h2>
                Moments that become
                <br />
                <em>memories.</em>
              </h2>
            </div>

            <p>
              TIS events bring students, families, sports and the wider
              community together around experiences worth remembering.
            </p>
          </div>
        </Reveal>

        <div className="events-grid">
          {events.map((event, i) => (
            <Reveal
              key={event.title}
              delay={(i % 3) * 0.06}
            >
              <motion.article
                className="event-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="event-image">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    whileHover={{ scale: 1.055 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>

                <span>{event.meta}</span>

                <motion.h3
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.55 }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                >
                  {event.title}
                </motion.h3>

                <p className="event-description">
                  {event.description}
                </p>

                <a href="#contact">
                  EXPLORE
                  <ArrowUpRight size={13} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
