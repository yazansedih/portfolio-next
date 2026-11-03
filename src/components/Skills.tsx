import { skills } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="band">
      <div className="container section stack-40">
        <SectionHeading eyebrow="TOOLKIT" title="What I work with" />
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
