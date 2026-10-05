import { motion } from 'framer-motion';
import { Reveal } from '../animation/Reveal';
import { SectionIntro } from '../ui/SectionIntro';
import { sports } from '../../data/siteData';

export function SportsSection() {
  return (
    <section
      className="sports section-pad"
      id="beyond-academics"
    >
      <div className="container">

        <Reveal>
          <SectionIntro
            eyebrow="02 / BEYOND ACADEMICS"
            title={
              <>
                <span className="text-red">
                  Sports?...
                </span>{' '}
                It’s not just a facility. At Tulas it’s the foundation!
              </>
            }
            copy="16+ sports curated to bring joy and discipline to your life."
          />
        </Reveal>

        <div className="sports-rail">
          {sports.map((sport, i) => (
            <Reveal
              key={sport.name}
              delay={(i % 5) * 0.045}
            >
              <motion.article
                className="sport-card"
                data-cursor
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

       
                <div className="sport-image">
                  <motion.img
                    src={sport.image}
                    alt={`${sport.name} at Tulas International School`}
                    loading="lazy"
                    whileHover={{
                      scale: 1.07,
                      rotate: 0.7,
                    }}
                    transition={{
                      duration: 0.65,
                    }}
                  />
                </div>

             
                <div className="sport-description">
                  <span>ABOUT THE SPORT</span>

                  <p>
                    {sport.description}
                  </p>
                </div>

                
                <div className="sport-meta">
                  <span>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3>{sport.name}</h3>
                </div>

              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}