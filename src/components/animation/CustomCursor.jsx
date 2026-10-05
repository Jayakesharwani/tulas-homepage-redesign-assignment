import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 });
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)');
    const update = () => setHidden(media.matches);
    update();
    media.addEventListener?.('change', update);
    const move = (event) => { x.set(event.clientX); y.set(event.clientY); };
    const over = (event) => setActive(Boolean(event.target.closest('a,button,[data-cursor]')));
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      media.removeEventListener?.('change', update);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  if (hidden) return null;
  return <motion.div className={`custom-cursor ${active ? 'is-active' : ''}`} style={{ x: springX, y: springY }} />;
}
