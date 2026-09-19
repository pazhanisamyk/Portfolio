"use client";

import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Layers,
  ExternalLink,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  X,
  Sparkles,
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
  Radio,
  ChevronRight
} from "lucide-react";

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export default function Projects() {
  const projects = PORTFOLIO_DATA.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardTransforms, setCardTransforms] = useState<
    { scale: number; brightness: number; opacity: number; y: number }[]
  >(projects.map(() => ({ scale: 1, brightness: 1, opacity: 1, y: 0 })));

  useEffect(() => {
    let ticking = false;

    const updateTransforms = () => {
      const transforms = projects.map((_, idx) => {
        let maxOverlap = 0;
        const currentCard = cardRefs.current[idx];
        if (!currentCard) return { scale: 1, brightness: 1, opacity: 1, y: 0 };

        const currentRect = currentCard.getBoundingClientRect();

        for (let nextIdx = idx + 1; nextIdx < projects.length; nextIdx++) {
          const nextCard = cardRefs.current[nextIdx];
          if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect();
            // When nextCard scrolls up into currentCard's area
            if (nextRect.top < currentRect.bottom) {
              const overlap = (currentRect.bottom - nextRect.top) / Math.max(1, currentRect.height);
              maxOverlap = Math.max(maxOverlap, Math.min(1, overlap));
            }
          }
        }

        // Drop previous card opacity rapidly to 0 so no text merges or bleeds through
        const opacity = Math.max(0, 1 - maxOverlap * 2.5);
        const scale = Math.max(0.92, 1 - maxOverlap * 0.05);
        const brightness = Math.max(0.2, 1 - maxOverlap * 0.8);
        const y = maxOverlap * -15;

        return { scale, brightness, opacity, y };
      });

      setCardTransforms(transforms);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  const handleInspect = (proj: Project) => {
    sfx.playModalOpen();
    setSelectedProject(proj);
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[104rem] w-full mx-auto z-10 select-none"
    >
      {/* Top Header: Left Title & Right Telemetry Badge */}
      <div className="pt-4 sm:pt-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Tracking Monospace Subtitle */}
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // FEATURED BUILDS //
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none text-left">
              <span>SELECTED </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                WORK<span className="text-[#ff003c] drop-shadow-[0_0_20px_#ff003c]">.</span>
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">04 // SELECTED WORK</span>
          </div>
        </div>
      </div>

      {/* iOS Stacking Cards Deck Container */}
      <div className="relative flex flex-col space-y-24 sm:space-y-36 pb-24 w-full">
        {projects.map((proj, idx) => {
          const transform = cardTransforms[idx] || { scale: 1, brightness: 1, opacity: 1, y: 0 };
          const stickyTop = `calc(5.5rem + ${idx * 26}px)`;

          return (
            <div
              key={proj.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="sticky transition-all duration-300 ease-out will-change-transform w-full"
              style={{
                top: stickyTop,
                zIndex: 10 + idx,
                transform: `scale(${transform.scale}) translateY(${transform.y}px)`,
                filter: `brightness(${transform.brightness})`,
                opacity: transform.opacity,
                visibility: transform.opacity <= 0.02 ? "hidden" : "visible",
                pointerEvents: transform.opacity < 0.1 ? "none" : "auto",
                transformOrigin: "top center",
              }}
            >
              {/* Project Card Body (Rich Translucent Glassmorphism) */}
              <div
                onMouseEnter={() => sfx.playHover()}
                className="group relative rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 p-6 sm:p-8 md:p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_40px_rgba(255,0,60,0.25)] overflow-hidden transition-all duration-300 w-full"
              >
                {/* Top Specular Glare Line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                {/* Laser Glowing Top Accent Line */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2.5px] rounded-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
                  style={{
                    backgroundColor: proj.accentColor,
                    boxShadow: `0 0 16px ${proj.accentColor}`,
                  }}
                />

                {/* Subtle Ambient Background Gradient */}
                <div
                  className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: proj.accentColor }}
                />

                {/* Top Row: Counter & Framework & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 font-mono text-xs">
                  {/* iOS Style Index Counter (01 / 03) */}
                  <div className="flex items-center gap-2">
                    <span
                      className="font-bold text-sm sm:text-base font-mono px-3 py-1 rounded-lg bg-black/60 border border-neutral-800"
                      style={{ color: proj.accentColor }}
                    >
                      0{idx + 1} / 0{projects.length}
                    </span>
                    <span className="text-neutral-400 bg-black/40 px-3 py-1 rounded-lg border border-neutral-800/80 hidden sm:inline-block">
                      {proj.framework}
                    </span>
                  </div>

                  {/* Status & Live Telemetry Pill */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {proj.status}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono hidden md:inline-block">
                      {proj.telemetry.perf}
                    </span>
                  </div>
                </div>

                {/* Main Title & Role Category Pill */}
                <div className="mb-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold font-oswald text-white group-hover:text-[#e0002a] transition-colors tracking-tight uppercase leading-none">
                    {proj.title}
                  </h3>

                  {/* Subtitle / Role Bar */}
                  <div className="flex items-center gap-2 mt-2.5 font-mono text-xs sm:text-sm text-neutral-300">
                    <span className="w-1 h-3.5 bg-[#e0002a] rounded-full" />
                    <span className="text-[#ff3b5c] font-bold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-neutral-600 hidden sm:inline">•</span>
                    <span className="text-neutral-400 text-xs hidden sm:inline">
                      {proj.subtitle}
                    </span>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="text-sm sm:text-base text-neutral-300/95 font-sans leading-relaxed max-w-full mb-6">
                  {proj.summary}
                </p>

                {/* Key Highlights Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-7">
                  {proj.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-neutral-800/60 font-mono text-xs text-neutral-300"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: proj.accentColor, boxShadow: `0 0 6px ${proj.accentColor}` }}
                      />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips Row */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {proj.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-black/60 text-neutral-300 border border-neutral-800/90 hover:border-neutral-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions Bar */}
                <div className="pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  {/* Primary Action: Inspect Architecture */}
                  <button
                    onClick={() => handleInspect(proj)}
                    onMouseEnter={() => sfx.playHover()}
                    data-magnetic
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c40024] to-[#e0002a] text-white text-xs sm:text-sm font-mono font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(196,0,36,0.35)] cursor-pointer"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>INSPECT ARCHITECTURE</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Secondary Links: GitHub & Live Launch */}
                  <div className="flex items-center gap-3">
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sfx.playClick()}
                      onMouseEnter={() => sfx.playHover()}
                      data-magnetic
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/60 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>VIEW ON GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>

                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sfx.playClick()}
                      onMouseEnter={() => sfx.playHover()}
                      data-magnetic
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/60 hover:bg-[#c40024]/20 border border-neutral-800 hover:border-[#ff003c]/50 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      <Globe className="w-4 h-4 text-[#ff3b5c]" />
                      <span>LIVE PREVIEW</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#ff3b5c]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAILED PROJECT ARCHITECTURE MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] bg-black/85 backdrop-blur-2xl border border-[#ff003c]/60 rounded-2xl shadow-[0_0_60px_rgba(196,0,36,0.35)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Beam */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c40024] via-[#e0002a] to-amber-400 z-10"
              style={{ boxShadow: `0 0 20px ${selectedProject.accentColor}` }}
            />

            {/* Sticky Modal Header */}
            <div className="p-6 sm:p-7 pb-4 border-b border-neutral-800/80 relative shrink-0">
              {/* Close Button */}
              <button
                onClick={() => {
                  sfx.playClick();
                  setSelectedProject(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#ff003c] transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Metadata */}
              <div className="flex flex-wrap items-center gap-3 mb-2.5 pr-10">
                <span className="text-xs font-mono text-neutral-400 bg-black/60 px-3 py-1 rounded border border-neutral-800">
                  FRAMEWORK: {selectedProject.framework}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded border border-emerald-500/40 font-bold">
                  {selectedProject.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-oswald text-white tracking-wide uppercase leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#ff3b5c] mt-1">
                {selectedProject.subtitle} — {selectedProject.domain}
              </p>
            </div>

            {/* Scrollable Content Body with smooth scrolling and generous clearance */}
            <div className="overflow-y-auto p-6 sm:p-7 flex-1 space-y-6">
              {/* Metrics Dashboard */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">{m.label}</div>
                    <div className="text-sm font-mono font-bold text-white mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Architectural Highlights */}
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>CORE ENGINEERING IMPLEMENTATION:</span>
                </div>
                <div className="space-y-2.5 font-sans text-sm text-neutral-300">
                  {selectedProject.description.map((desc, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-neutral-800/80 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff003c] shrink-0 mt-2" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Full Grid */}
              <div className="pb-4">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>INTEGRATED SYSTEM STACK:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-800 text-xs font-mono text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pinned / Sticky Footer Uplink Buttons */}
            <div className="p-4 sm:p-5 border-t border-neutral-800 bg-[#090909]/95 backdrop-blur-md flex items-center justify-between gap-4 shrink-0">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sfx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#c40024] to-[#e0002a] text-white font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(196,0,36,0.35)] cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>LAUNCH {selectedProject.domain}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  sfx.playClick();
                  setSelectedProject(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono hover:text-white cursor-pointer transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
