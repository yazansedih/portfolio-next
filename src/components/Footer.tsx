import { profile } from "@/data/content";

export function Footer() {
  return (
    <>
      <footer className="container site-footer">
        <span>© 2026 {profile.name}</span>
        <span>Designed and built in Palestine</span>
      </footer>
      <div className="strip" aria-hidden="true" />
    </>
  );
}
