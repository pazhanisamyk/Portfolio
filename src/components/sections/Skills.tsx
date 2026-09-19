"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Code2,
  Database,
  Layers,
  Terminal,
  Server,
  Cpu,
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface SkillCategoryPanel {
  id: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  skills: string[];
}

export default function Skills() {
  const panels: SkillCategoryPanel[] = [
    // Column 1 Panels
    {
      id: "languages",
      category: "LANGUAGES",
      icon: Code2,
      accentColor: "#ff003c",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML & CSS", "SQL", "Dart", "C++", "Java", "Python"]
    },
    {
      id: "databases",
      category: "DATABASES",
      icon: Database,
      accentColor: "#e0002a",
      skills: ["MongoDB", "MySQL", "MongoDB Atlas", "Mongoose", "NoSQL Schemas", "Relational Queries"]
    },

    // Column 2 Panels (Center)
    {
      id: "frontend-mobile",
      category: "FRONTEND & MOBILE",
      icon: Layers,
      accentColor: "#ff3b5c",
      skills: ["React.js", "React Native", "Next.js", "Angular", "Ionic", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      id: "tools",
      category: "DEVELOPMENT TOOLS",
      icon: Terminal,
      accentColor: "#f59e0b",
      skills: ["VS Code", "Git & GitHub", "Postman", "Jira", "Figma", "REST Client"]
    },

    // Column 3 Panels
    {
      id: "backend",
      category: "BACKEND",
      icon: Server,
      accentColor: "#00f0ff",
      skills: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "WebSockets", "Middleware"]
    },
    {
      id: "core-competencies",
      category: "CORE COMPETENCIES",
      icon: Cpu,
      accentColor: "#00ff9d",
      skills: ["Data Structures & DSA", "System Architecture", "Responsive UI/UX", "Database Modeling", "Agile Sprints"]
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[116rem] w-full mx-auto z-10 select-none flex flex-col justify-between"
    >
      {/* Top Header: Left Title & Right Telemetry Badge */}
      <div className="pt-4 sm:pt-8 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Tracking Monospace Subtitle */}
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // TECHNICAL MATRIX //
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none text-left">
              <span>CORE </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                SKILLS<span className="text-[#ff003c] drop-shadow-[0_0_20px_#ff003c]">.</span>
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">07 // TECHNICAL CAPABILITIES</span>
          </div>
        </div>
      </div>

      {/* 3-Column Symmetrical Cyberpunk Grid Framing Central Video Character */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-auto py-4 w-full">
        {/* Left Column (Languages & Databases) */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {panels.slice(0, 2).map((panel) => (
            <div
              key={panel.id}
              className="group relative rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_35px_rgba(255,0,60,0.25)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 overflow-hidden"
            >
              {/* Top Specular Glare Line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
                style={{
                  backgroundColor: panel.accentColor,
                  boxShadow: `0 0 10px ${panel.accentColor}`,
                }}
              />

              {/* Panel Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-[#ff2a51] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                  <panel.icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#ff3b5c] uppercase">
                  {panel.category}
                </span>
              </div>

              {/* Skill Pill Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {panel.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={() => sfx.playHover()}
                    data-magnetic
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-[#ff003c]/20 border border-white/[0.1] hover:border-[#ff003c]/60 text-neutral-200 hover:text-white font-mono text-xs sm:text-sm font-bold transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center Column (Frontend & Mobile + Development Tools - Positioned below chin) */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {panels.slice(2, 4).map((panel) => (
            <div
              key={panel.id}
              className="group relative rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_35px_rgba(255,0,60,0.25)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 overflow-hidden"
            >
              {/* Top Specular Glare Line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
                style={{
                  backgroundColor: panel.accentColor,
                  boxShadow: `0 0 10px ${panel.accentColor}`,
                }}
              />

              {/* Panel Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-[#ff2a51] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                  <panel.icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#ff3b5c] uppercase">
                  {panel.category}
                </span>
              </div>

              {/* Skill Pill Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {panel.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={() => sfx.playHover()}
                    data-magnetic
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-[#ff003c]/20 border border-white/[0.1] hover:border-[#ff003c]/60 text-neutral-200 hover:text-white font-mono text-xs sm:text-sm font-bold transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Backend & Core Competencies) */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {panels.slice(4, 6).map((panel) => (
            <div
              key={panel.id}
              className="group relative rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_35px_rgba(255,0,60,0.25)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 overflow-hidden"
            >
              {/* Top Specular Glare Line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
                style={{
                  backgroundColor: panel.accentColor,
                  boxShadow: `0 0 10px ${panel.accentColor}`,
                }}
              />

              {/* Panel Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-[#ff2a51] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                  <panel.icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#ff3b5c] uppercase">
                  {panel.category}
                </span>
              </div>

              {/* Skill Pill Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {panel.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={() => sfx.playHover()}
                    data-magnetic
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-[#ff003c]/20 border border-white/[0.1] hover:border-[#ff003c]/60 text-neutral-200 hover:text-white font-mono text-xs sm:text-sm font-bold transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="pt-6 pb-2 border-t border-neutral-800/40 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <div>FULL STACK & CROSS-PLATFORM PROFICIENCY // AUDITED</div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>REACT, REACT NATIVE, NODE.JS & MODERN WEB</span>
        </div>
      </div>
    </section>
  );
}
