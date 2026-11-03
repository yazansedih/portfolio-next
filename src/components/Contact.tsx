import { profile } from "@/data/content";
import { LinkList } from "./ExternalLink";

export function Contact() {
  const links = [...profile.socials, { label: "CV (PDF)", href: profile.cvUrl }];
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2>Let&apos;s build something reliable together.</h2>
          <p className="contact-lead">
            Open to AI/ML and backend roles, remote or on-site. The fastest way to reach me is email.
          </p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-light">
            {profile.email}
          </a>
          <LinkList links={links} />
        </div>
      </div>
    </section>
  );
}
