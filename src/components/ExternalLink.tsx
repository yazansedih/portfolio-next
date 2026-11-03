import type { Link } from "@/data/content";

// Renders nothing for links that haven't been filled in yet.
export function LinkList({ links, className }: { links: Link[]; className?: string }) {
  const ready = links.filter((l) => l.href);
  if (ready.length === 0) return null;
  return (
    <div className={className ?? "link-row"}>
      {ready.map((l) => (
        <a key={l.label} href={l.href!} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  );
}
