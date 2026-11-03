"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { id: "top", label: "about" },
  { id: "work", label: "work" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "deploy" },
];

// How far down the viewport the "read head" sits when deciding what has run.
const HEAD = 0.6;

export function PipelineRail() {
  const railRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<number[]>([]);
  const [active, setActive] = useState(0);

  // Place one node beside each section's eyebrow line.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    function measure() {
      const base = rail!.getBoundingClientRect().top;
      setNodes(
        stages.map(({ id }) => {
          const section = document.getElementById(id);
          const anchor = section?.querySelector(".hero-hello, .eyebrow") ?? section;
          if (!anchor) return 0;
          const r = anchor.getBoundingClientRect();
          return r.top - base + r.height / 2;
        }),
      );
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  // Grow the fill line with scroll and light up the stages it has passed.
  useEffect(() => {
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    function update() {
      frame = 0;
      const rail = railRef.current;
      const fill = fillRef.current;
      if (!rail || !fill) return;

      let head: number;
      const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
      if (reduced || atBottom) {
        head = last;
      } else {
        head = innerHeight * HEAD - rail.getBoundingClientRect().top;
      }
      const y = Math.min(Math.max(head, first), last);
      fill.style.height = `${y - first}px`;

      let reached = 0;
      nodes.forEach((n, i) => {
        if (y >= n - 1) reached = i;
      });
      setActive(reached);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [nodes]);

  const ready = nodes.length > 0;
  const first = nodes[0] ?? 0;
  const last = nodes[nodes.length - 1] ?? 0;

  return (
    <nav ref={railRef} className={`pipeline${ready ? " is-ready" : ""}`} aria-label="Page sections">
      <div className="pipeline-track" style={{ top: first, height: last - first }} />
      <div ref={fillRef} className="pipeline-fill" style={{ top: first }}>
        <span className="pipeline-packet" />
      </div>
      {stages.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`pipeline-node${i <= active ? " is-active" : ""}${s.id === "contact" ? " is-deploy" : ""}`}
          style={{ top: nodes[i] ?? 0 }}
          aria-label={`Go to ${s.label}`}
          aria-current={i === active ? "step" : undefined}
        >
          <span className="pipeline-dot" aria-hidden="true" />
          <span className="pipeline-label" aria-hidden="true">
            {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
