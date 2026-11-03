import { education } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section aria-labelledby="learning-title" className="container section stack-40">
      <SectionHeading eyebrow="EDUCATION & RECOGNITION" title="Always learning" id="learning-title" />
      <div className="edu-grid">
        {education.map((e) => (
          <div key={e.title} className="edu-card">
            <p className="edu-period">{e.period}</p>
            <h3>{e.title}</h3>
            <p className="edu-place">{e.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
