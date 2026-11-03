import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FocusAreas } from "@/components/FocusAreas";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PipelineRail } from "@/components/PipelineRail";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="strip" aria-hidden="true" />
      <Header />
      <main className="page">
        <PipelineRail />
        <Hero />
        <FocusAreas />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
