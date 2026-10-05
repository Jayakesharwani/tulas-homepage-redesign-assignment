
import { motion } from 'framer-motion';

export function MarqueeSection() {
  const items = Array.from({ length: 4 });

  return (
    <section className="marquee-section" id="marquee">
      <motion.div
        animate={{ x: ['0%', '-25%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="marquee-track"
      >
        {items.map((_, i) => (
          <span key={i}>
            LET'S DO IT <em>with Tulas</em> <b>✦</b>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
