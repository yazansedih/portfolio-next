import { profile } from "@/data/content";

export function Footer() {
  return (
    <>
      <footer className="container site-footer">
        <span>© 2026 {profile.name} | Palestine - West Bank</span>
      </footer>
      <div className="strip" aria-hidden="true" />
    </>
  );
}
