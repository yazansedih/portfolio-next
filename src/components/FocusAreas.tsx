import { focusAreas } from "@/data/content";

export function FocusAreas() {
  return (
    <section aria-label="Focus areas" className="container focus-grid">
      {focusAreas.map((f) => (
        <div key={f.index} className={`focus-card tone-${f.tone}`}>
          <p className="focus-index">{f.index}</p>
          <p className="focus-title">{f.title}</p>
        </div>
      ))}
    </section>
  );
}
