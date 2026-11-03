import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

// Link-preview card for LinkedIn, WhatsApp, Slack and others; rendered at build time.
export const alt = `${profile.name} — AI/ML & Full-Stack Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6efe3",
          borderTop: "16px solid #8b1c2c",
          padding: "72px 80px",
          color: "#2a211c",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 28, color: "#4f6b3a", letterSpacing: 2 }}>AI/ML & FULL-STACK ENGINEER</div>
          <div style={{ fontSize: 96, fontWeight: 700, color: "#8b1c2c", lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 36, lineHeight: 1.35, maxWidth: 940 }}>
            LLM agents, RAG pipelines and monitored ML models — and the full-stack products that put them into production.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#6b5d52" }}>Ramallah, Palestine · Open to remote & on-site</div>
      </div>
    ),
    size,
  );
}
