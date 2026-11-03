import { profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="container site-header">
      <a href="#top" className="brand">
        {profile.name}
      </a>
      <nav aria-label="Main" className="site-nav">
        {nav.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
        {profile.cvUrl && (
          <a href={profile.cvUrl} className="btn-outline-accent" download>
            <span className="cv-label-long">Download </span>CV
          </a>
        )}
        <ThemeToggle />
      </nav>
    </header>
  );
}
