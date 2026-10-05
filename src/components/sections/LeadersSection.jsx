
import { Reveal } from '../animation/Reveal';
import { leaders } from '../../data/siteData';

export function LeadersSection() {
  return (
    <section className="leaders section-pad" id="boarding-life">
      <div className="container">

        <Reveal>
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">07 / LEADERS OF INDIA</span>

              <h2>
                Character before
                <br />
                <em>achievement.</em>
              </h2>
            </div>

            <p>
              A modern Gurukul balances ambition with values, giving young
              people room to grow into responsible, curious leaders.
            </p>
          </div>
        </Reveal>

        <div className="leaders-list">
          {leaders.map(([number, label, copy, image]) => (
            <Reveal key={number} y={70}>
              <article className="leader-row leader-row-animated">
                <span className="leader-number">{number}</span>

                <div className="leader-copy">
                  <small>{label}</small>
                  <h3>{copy}</h3>
                </div>

                <div className="leader-image">
                  <img
                    src={image}
                    alt={label}
                    loading="lazy"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
