import React from "react";
import CinematicVideo from "@/components/CinematicVideo";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-[#f5f5f5] w-full max-w-full overflow-x-clip">
      {/* 1. Interactive 3D Cursor & Scroll-Scrubbed Video Background Engine */}
      <CinematicVideo videoSrc="/video/portfolio-background.mp4" />

      {/* 2. Smooth LERP Custom Cursor with Magnetic Triggers */}
      <CustomCursor />

      {/* 3. Floating Navbar Header */}
      <Navbar />

      {/* 4. Main Portfolio Screen Sequence */}
      <div className="relative z-10 flex flex-col space-y-4 sm:space-y-8 w-full max-w-full overflow-x-clip">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Achievements />
        <Certifications />
        <Skills />
        <Experience />
        <Contact />
      </div>

      {/* 5. Cyberpunk Telemetry Footer */}
      <Footer />
    </main>
  );
}
