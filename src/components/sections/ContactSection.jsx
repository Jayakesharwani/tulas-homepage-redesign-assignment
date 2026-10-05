
import { motion } from 'framer-motion';
import { Reveal } from '../animation/Reveal';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="contact section-pad" id="admission">
      <div className="container contact-grid">

        <Reveal>
          <div>
            <span className="eyebrow">12 / START A CONVERSATION</span>

            <h2>
              Ready to discover
              <br />
              <em>Tulas?</em>
            </h2>

            <p>
              Explore our programs, campus life, achievements, and why TIS is
              the preferred choice for parents across India.
            </p>

            <div className="contact-details">
              <a href="tel:+919837983791">+91 98379 83791</a>
              <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            className="enquiry-form-shell"
            whileHover={{
              y: -7,
              rotateX: 1.5,
              rotateY: -1.5
            }}
            transition={{ duration: 0.45 }}
          >
            <form
              className="enquiry-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label>
                FULL NAME
                <input
                  required
                  placeholder="Enter your full name"
                />
              </label>

              <label>
                EMAIL
                <input
                  type="email"
                  placeholder="you@example.com"
                />
              </label>

              <label>
                MOBILE
                <input
                  required
                  inputMode="tel"
                  placeholder="Your mobile number"
                />
              </label>

              <label>
                MESSAGE
                <textarea
                  rows="4"
                  placeholder="Tell us what you'd like to know..."
                ></textarea>
              </label>

              <button type="submit" data-cursor>
                SUBMIT ENQUIRY
                <ArrowUpRight size={18} />
              </button>
            </form>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
