
import { Reveal } from '../animation/Reveal';
import { personalities } from '../../data/siteData';

export function PersonalitiesSection() {
  return (
    <section className="personalities section-pad">
      <div className="container">

        <Reveal>
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">06 / INFLUENTIAL PERSONALITIES</span>

              <h2>
                People who make
                <br />
                <em>possibility visible.</em>
              </h2>
            </div>

            <p>
              TIS creates opportunities for students to meet, learn from and
              be inspired by accomplished personalities.
            </p>
          </div>
        </Reveal>

        <div className="personality-rail">
          {personalities.map(([name, role, image], i) => (
            <Reveal
              key={name}
              delay={(i % 3) * 0.06}
            >
              <article className="person-card">
                <div className="person-image">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                  />
                </div>

                <span>{String(i + 1).padStart(2, '0')}</span>

                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
