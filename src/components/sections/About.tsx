"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const metrics = [
    {
      value: "4+",
      unit: "YEARS",
      title: "PROD EXPERIENCE",
      subtitle: "REACT, REACT NATIVE, NODE.JS",
    },
    {
      value: "M.Sc.",
      unit: "CS",
      title: "COMPUTER SCIENCE",
      subtitle: "POSTGRADUATE DEGREE (2020-2022)",
    },
    {
      value: "3+",
      unit: "CORE APPS",
      title: "PRODUCTION PLATFORMS",
      subtitle: "SPRYNTZ, MY BHIMA, SWYPATUNE",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-between max-w-[104rem] w-full mx-auto z-10 select-none"
    >
      {/* Top Title: About Me */}
      <div className="pt-6 sm:pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Tracking Monospace Subtitle */}
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // PROFILE MATRIX //
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none text-left">
              <span>ABOUT </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                ME<span className="text-[#ff003c] drop-shadow-[0_0_20px_#ff003c]">.</span>
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">02 // ABOUT ME</span>
          </div>
        </div>

        {/* Bio Paragraph directly from resume */}
        <p className="mt-8 max-w-7xl xl:max-w-[88rem] text-base sm:text-lg md:text-xl text-neutral-300 font-sans leading-relaxed drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          Experienced Full Stack Developer with 4+ years of expertise in building dynamic web and mobile applications. Skilled in React, React Native, Node.js, and Express.js, with strong proficiency in MongoDB, MySQL, and RESTful APIs. Passionate about delivering responsive, scalable, and user-centric solutions.
        </p>
      </div>

      {/* Bottom Metrics Cards with Signature Glassmorphism */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-16 pb-12 w-full">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sfx.playHover()}
            data-magnetic
            className="group relative flex items-start gap-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_40px_rgba(255,0,60,0.25)] transition-all duration-300 overflow-hidden"
          >
            {/* Top Specular Glare Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Glowing Laser Top Beam Accent */}
            <div className="absolute top-0 left-6 right-6 h-[2.5px] rounded-full bg-[#e0002a] shadow-[0_0_14px_#e0002a] transition-all duration-300 group-hover:left-3 group-hover:right-3" />

            {/* Glowing Vertical Red Accent Bar */}
            <div className="w-1.5 h-12 bg-[#e0002a] rounded-full shadow-[0_0_12px_#e0002a] shrink-0 mt-1" />

            {/* Metric Content */}
            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-white tracking-tight group-hover:text-[#ff3b5c] transition-colors flex items-baseline gap-1.5">
                <span>{item.value}</span>
                {item.unit && (
                  <span className="text-xs sm:text-sm font-mono text-[#ff3b5c] font-bold">
                    {item.unit}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-neutral-200 uppercase tracking-wider mt-1">
                {item.title}
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
