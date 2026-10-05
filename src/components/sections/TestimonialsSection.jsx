 
import { useState } from 'react';

import { Reveal } from '../animation/Reveal';
import { testimonials } from '../../data/siteData';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const parentPhotos = [
  'https://tis.edu.in/_next/static/media/tashi.3807cb3c.png',
  'https://tis.edu.in/_next/static/media/namita.86a0f799.png',
  'https://tis.edu.in/_next/static/media/sandeep.1b22b59e.png',
  'https://tis.edu.in/_next/static/media/pinky.8d7145b0.png',
  'https://tis.edu.in/_next/static/media/amit.c7b6247e.png'
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - 3);

  const move = (direction) => {
    setActive((current) =>
      Math.min(maxIndex, Math.max(0, current + direction))
    );
  };

  return (
    <section className="testimonials section-pad">
      <div className="container">

        <Reveal>
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">10 / FROM THE PARENTS</span>

              <h2>
                When school becomes
                <br />
                <em>a place to belong.</em>
              </h2>
            </div>

            <div
              className="review-controls"
              aria-label="Review navigation"
            >
              <button
                type="button"
                onClick={() => move(-1)}
                disabled={active === 0}
                aria-label="Previous review"
              >
                <ArrowLeft size={18} />
              </button>

              <span>
                {String(active + 1).padStart(2, '0')} —{' '}
                {String(maxIndex + 1).padStart(2, '0')}
              </span>

              <button
                type="button"
                onClick={() => move(1)}
                disabled={active === maxIndex}
                aria-label="Next review"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="testimonial-viewport">
          <div
            className="testimonial-track"
            style={{ '--review-index': active }}
          >
            {testimonials.map(([name, relation, quote], i) => (
              <article
                className="testimonial"
                key={name}
              >
                <div className="testimonial-photo">
                  <img
                    src={parentPhotos[i % parentPhotos.length]}
                    alt={`${name}, Tulas parent`}
                    loading="lazy"
                  />
                </div>

                <Quote size={22} />

                <p>“{quote}”</p>

                <footer>
                  <strong>{name}</strong>
                  <span>{relation}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div
          className="review-dots"
          aria-label="Review positions"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              className={
                i >= active && i < active + 3
                  ? 'is-active'
                  : ''
              }
              onClick={() => setActive(Math.min(i, maxIndex))}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
