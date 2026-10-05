
import { Reveal } from '../animation/Reveal';

export function PhilosophySection() {
  return (
    <section className="philosophy section-pad" id="academics">
      <div className="container philosophy-grid">

        <Reveal>
          <div className="philosophy-copy">
            <span className="eyebrow">03 / THE TIS WAY</span>

            <h2>
              What’s the secret to making school <em>awesome?</em>
            </h2>

            <p>
              The secret to making one's school experience truly unforgettable?
              It’s all about making learning feel like an adventure—where
              curiosity leads, creativity thrives, and every day brings
              something new to discover.
            </p>

            <div className="secret-list">
              <span>CURIOUS MINDS</span>
              <span>CREATIVE HANDS</span>
              <span>CONFIDENT LEADERS</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="philosophy-visual">
            <img
              src="https://tis.edu.in/_next/static/media/AtTIS.59351600.png"
              alt="Student exploring learning"
              loading="lazy"
            />

            <div className="philosophy-sticker">
              THERE,
              <br />
              <strong>WE CRACKED IT!</strong>
            </div>

            <div className="philosophy-orbit" aria-hidden="true">
              <span>CURIOUS</span>
              <span>CREATIVE</span>
              <span>CONFIDENT</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
