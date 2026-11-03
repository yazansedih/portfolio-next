import { experience } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="container section experience">
      <div className="experience-heading">
        <SectionHeading eyebrow="EXPERIENCE" title="Where I've worked" />
      </div>
      <div className="timeline">
        {experience.map((e) => (
          <div key={e.role + e.company} className="timeline-row">
            <p className="timeline-period">{e.period}</p>
            <div className="timeline-body">
              <h3>
                {e.role} · <span className="accent">{e.company}</span>
              </h3>
              <p className="muted small">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
