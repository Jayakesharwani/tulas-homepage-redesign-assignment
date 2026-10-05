
import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { footerGroups } from '../../data/siteData';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-motion-line" aria-hidden="true">
        TULAS · LEARN · LEAD · GROW · TULAS · LEARN · LEAD · GROW
      </div>

      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
          />

          <h2>
            Education with purpose.
            <br />
            <em>Life with possibility.</em>
          </h2>

          <p>
            Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand
          </p>

          <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
          <a href="tel:+919837983791">+91-9837983791</a>
        </div>

        {Object.entries(footerGroups).map(([group, links]) => (
          <div className="footer-col" key={group}>
            <h3>{group}</h3>

            {links.map((link) => (
              <a key={link} href="#" data-cursor>
                {link}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Tulas International School. All rights reserved.
        </span>

        <div className="socials">
          <a href="#" aria-label="Instagram">
            <FaInstagram size={17} />
          </a>

          <a href="#" aria-label="Facebook">
            <FaFacebookF size={17} />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube size={17} />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
