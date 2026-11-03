export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
