"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
  BookOpen,
  Cpu
} from "lucide-react";

export default function Education() {
  const educationList = PORTFOLIO_DATA.education;

  return (
    <section
      id="education"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 backdrop-blur-md text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          <span>ACADEMIC FOUNDATION & COMPUTATIONAL THEORY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Education</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-400 font-mono">
          Rigorous master-level foundation in computer science and algorithmic engineering.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sfx.playHover()}
            className="p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-xl relative overflow-hidden shadow-xl"
          >
            {/* Top Accent Beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-transparent" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-800/80 gap-3">
              <div>
                <span className="text-xs font-mono text-red-400 font-bold uppercase">
                  {edu.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-mono text-neutral-400 mt-0.5">
                  {edu.institution}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs self-start sm:self-auto">
                <span className="flex items-center gap-1.5 text-neutral-300 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{edu.period}</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-bold">
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {edu.highlights.map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="flex items-start gap-2.5 text-sm text-neutral-300 font-sans"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Core Subjects */}
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>CORE COMPUTATIONAL TOPICS:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.coreSubjects.map((subject, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
