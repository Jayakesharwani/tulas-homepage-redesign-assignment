 
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../animation/Reveal';
import { rankings } from '../../data/siteData';

export function RankingsSection() {
  return (
    <section className="rankings section-pad">
      <div className="container">

        <Reveal>
          <div className="ranking-title">
            <div>
              <span className="eyebrow">05 / RECOGNITION</span>

              <h2>
                Recognition that
                <br />
                <em>keeps raising the bar.</em>
              </h2>
            </div>

            <div className="recognition-side">
              <div className="recognition-trophy" aria-hidden="true">
                <img
                  src="https://tis.edu.in/_next/static/media/2017.aa20ce2c.png"
                  alt="Tulas International School receiving a recognition trophy and plaque"
                />
              </div>

              <p>
                Independent recognition reflects the consistency of the TIS
                learning, boarding and holistic student experience. These
                rankings give families a quick view of how TIS is positioned
                across Dehradun, Uttarakhand, North India and the country.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="ranking-grid">
          {rankings.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.1}
            >
              <motion.div
                className="ranking"
                style={{ '--ranking-image': `url(${item.image})` }}
                whileHover={{
                  y: -12,
                  rotateX: 2
                }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="ranking-bg"
                  aria-hidden="true"
                />

                <div className="ranking-top">
                  <span>0{i + 1}</span>
                  <ArrowUpRight size={18} />
                </div>

                <strong>{item.rank}</strong>

                <span className="ranking-label">
                  {item.label}
                </span>

                <p>{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
