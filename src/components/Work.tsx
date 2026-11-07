import Image from "next/image";
import { featuredProjectId, projects, type Project } from "@/data/content";
import { LinkList } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

function Highlights({ items, small }: { items?: string[]; small?: boolean }) {
  if (!items?.length) return null;
  return (
    <ul className={small ? "small-list" : undefined}>
      {items.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>
  );
}

function Metrics({ items }: { items?: Project["metrics"] }) {
  if (!items?.length) return null;
  return (
    <div className="metrics">
      {items.map((m) => (
        <div key={m.label}>
          <p className="metric-value">{m.value}</p>
          <p className="metric-label">{m.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Work() {
  const visible = projects.filter((p) => !p.hidden);
  const featured = visible.find((p) => p.id === featuredProjectId) ?? visible[0];
  const rest = visible.filter((p) => p !== featured);

  return (
    <section id="work" className="band">
      <div className="container section stack-40">
        <SectionHeading eyebrow="SELECTED WORK" title="Systems I've designed and shipped" />

        {featured && (
          <article className="featured">
            <div
              className="featured-media"
              style={featured.image ? { aspectRatio: `${featured.image.width} / ${featured.image.height}` } : undefined}
            >
              {featured.image ? (
                <Image src={featured.image.src} alt={`${featured.title} screenshot`} fill sizes="(max-width: 900px) 100vw, 560px" />
              ) : (
                <span>[{featured.title} screenshot]</span>
              )}
            </div>
            <div className="featured-body">
              <p className="card-eyebrow accent">{featured.eyebrow}</p>
              <h3>{featured.title}</h3>
              <p className="muted">{featured.summary}</p>
              <Highlights items={featured.highlights} />
              <Metrics items={featured.metrics} />
              <p className="stack-line">{featured.stack}</p>
              <LinkList links={featured.links} />
            </div>
          </article>
        )}

        <div className="project-grid">
          {rest.map((p) => (
            <article key={p.id} className="project-card">
              <p className="card-eyebrow">{p.eyebrow}</p>
              <h3>{p.title}</h3>
              <p className="muted small">{p.summary}</p>
              <Highlights items={p.highlights} small />
              <Metrics items={p.metrics} />
              <p className="stack-line">{p.stack}</p>
              <LinkList links={p.links} className="link-row push-bottom" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
