import { Phone, ArrowUpRight } from 'lucide-react';

export function TopBar() {
  return (
    <div className="topbar">
      <span><Phone size={13} /> ADMISSIONS HELPLINE NO. <strong>+91-9837983791</strong></span>
      <a href="#contact" data-cursor>ENQUIRE NOW <ArrowUpRight size={14} /></a>
    </div>
  );
}
