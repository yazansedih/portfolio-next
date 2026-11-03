import Image from "next/image";
import { featured, projects } from "@/data/content";
import { LinkList } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="band">
      <div className="container section stack-40">
        <SectionHeading eyebrow="SELECTED WORK" title="Systems I've designed and shipped" />

        <article className="featured">
          <div className="featured-media">
            {featured.image ? (
              <Image src={featured.image} alt={`${featured.title} screenshot`} fill sizes="(max-width: 900px) 100vw, 560px" />
            ) : (
              <span>[Aurynix Nexus screenshot]</span>
            )}
          </div>
          <div className="featured-body">
            <p className="card-eyebrow accent">{featured.eyebrow}</p>
            <h3>{featured.title}</h3>
            <p className="muted">{featured.summary}</p>
            <ul>
              {featured.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="stack-line">{featured.stack}</p>
            <LinkList links={featured.links} />
          </div>
        </article>

        <div className="project-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <p className="card-eyebrow">{p.eyebrow}</p>
              <h3>{p.title}</h3>
              <p className="muted small">{p.summary}</p>
              {p.highlights && (
                <ul className="small-list">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {p.metrics && (
                <div className="metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="metric-value">{m.value}</p>
                      <p className="metric-label">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="stack-line">{p.stack}</p>
              <LinkList links={p.links} className="link-row push-bottom" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
