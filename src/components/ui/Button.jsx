import { ArrowUpRight } from 'lucide-react';

export function Button({ children, href = '#', variant = 'solid' }) {
  return (
    <a className={`btn btn-${variant}`} href={href} data-cursor>
      <span>{children}</span><ArrowUpRight size={17} strokeWidth={1.8} />
    </a>
  );
}
