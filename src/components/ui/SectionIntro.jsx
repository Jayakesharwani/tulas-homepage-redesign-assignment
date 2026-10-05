export function SectionIntro({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
