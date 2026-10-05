
import { Reveal } from '../animation/Reveal';
import { Play, ArrowUpRight } from 'lucide-react';

export function VirtualTourSection() {
  return (
    <section className="tour">
      <div className="tour-image">
        <img
          src="https://tis.edu.in/_next/static/media/image1.c5d0c872.webp"
          alt="TIS National Games campus event"
          loading="lazy"
        />
        <div className="tour-overlay" />
      </div>

      <Reveal>
        <div className="tour-content">
          <span className="eyebrow">09 / EXPERIENCE THE CAMPUS</span>

          <h2>
            DIVE INTO OUR...
            <br />
            <em>VIRTUAL TOUR</em>
          </h2>

          <div className="tour-actions">
            <a
              className="play-btn"
              href="https://www.youtube.com/watch?v=zWlXJPTb_Vk"
              target="_blank"
              rel="noreferrer"
              data-cursor
            >
              <Play size={19} fill="currentColor" />
              WATCH TIS VIDEO
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="tour-video-grid">
            <div className="tour-video">
              <iframe
                src="https://www.youtube.com/embed/zWlXJPTb_Vk?rel=0&modestbranding=1"
                title="Tulas International School Campus Tour"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="tour-video">
              <iframe
                src="https://www.youtube.com/embed/dRHDg_UvqV4?rel=0&modestbranding=1"
                title="Why Parents Choose Tulas International School"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
