import { motion } from 'framer-motion';

export function Reveal({ children, className = '', delay = 0, y = 48 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(7px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
