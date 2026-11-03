import Image from "next/image";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <p className="hero-hello">Hello, I&apos;m</p>
        <h1>{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See my work</a>
          <a href="#contact" className="btn btn-outline">Contact me</a>
        </div>
        <p className="hero-meta">{profile.meta}</p>
      </div>
      <div className="hero-visual">
        <div className="photo-frame">
          {profile.photo ? (
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill sizes="320px" priority />
          ) : (
            <span>[Your professional photo]</span>
          )}
          <div className="award-badge">
            <p className="award-kicker">1ST PLACE</p>
            <p className="award-title">Pink AI Hackathon 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
