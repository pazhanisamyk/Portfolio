"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import { ArrowRight, Download, Activity, Code2, Layers, Cpu } from "lucide-react";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    sfx.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-12 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-between overflow-hidden z-10 w-full"
    >
      {/* High-Intensity Background Watermark with Candidate's First Name */}
      <div
        className="absolute left-[35%] sm:left-[40%] md:left-[35%] top-[52%] sm:top-[60%] lg:top-[62%] -translate-y-1/2 font-oswald text-[26vw] sm:text-[22vw] lg:text-[19vw] font-black uppercase tracking-tight text-transparent select-none pointer-events-none z-0 opacity-85 leading-none watermark-text whitespace-nowrap"
        aria-hidden="true"
      >
        PAZHANI
      </div>

      {/* Main Hero Body: Left-Aligned Editorial Layout */}
      <div className="relative z-10 max-w-[104rem] w-full mx-auto my-auto pt-6 sm:pt-10">
        <div className="w-full lg:w-[58%] xl:w-[54%] flex flex-col">
          {/* Main Headline with Oswald Typography - Strictly 2 Lines */}
          <div className="font-oswald uppercase tracking-tight leading-[0.9] select-none">
            <h1 className="text-[clamp(2.4rem,6.2vw,5.6rem)] font-bold text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] whitespace-nowrap">
              BUILDING IDEAS
            </h1>
            <h2
              className="text-[clamp(2.4rem,6.2vw,5.6rem)] font-bold text-transparent bg-clip-text mt-1 drop-shadow-[0_0_30px_rgba(224,0,42,0.5)] whitespace-nowrap"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff3b5c 40%, #e0002a 75%, #c40024 100%)",
              }}
            >
              INTO EXPERIENCES<span className="text-[#e0002a] drop-shadow-[0_0_20px_#e0002a]">.</span>
            </h2>
          </div>

          {/* Bio Paragraph directly reflecting resume */}
          <p className="mt-7 max-w-lg text-sm sm:text-base md:text-lg text-neutral-300/90 font-sans leading-relaxed">
            Full Stack Developer with 4+ years of expertise in building dynamic web and mobile applications across React, React Native, Node.js, and Express.js.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary Glowing Red Pill Button */}
            <button
              onClick={() => scrollToSection("projects")}
              onMouseEnter={() => sfx.playHover()}
              data-magnetic
              data-cursor-text="VIEW"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c40024] via-[#e0002a] to-[#ff003c] text-white font-sans text-xs sm:text-sm font-bold tracking-wide hover:brightness-110 transition-all flex items-center gap-2.5 shadow-[0_0_30px_rgba(224,0,42,0.55)] cursor-pointer group"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Outlined Dark Glass Pill Button */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              data-magnetic
              data-cursor-text="PDF"
              className="px-7 py-3.5 rounded-full bg-black/40 hover:bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 text-neutral-300 hover:text-white font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all backdrop-blur-md cursor-pointer"
            >
              <span>DOWNLOAD RÉSUMÉ</span>
            </a>
          </div>
        </div>

        {/* Live Opportunity Beacon (Right-aligned in middle/lower viewport) */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-4 lg:bottom-12 flex justify-start lg:justify-end">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/60 border border-neutral-800/80 backdrop-blur-xl text-xs font-mono text-neutral-300 shadow-xl select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff9d]" />
            <span className="font-bold text-white uppercase tracking-wider">OPEN TO OPPORTUNITIES</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400 text-[11px]">PANRUTI, TAMIL NADU</span>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Telemetry Counters Row */}
      <div className="relative z-10 max-w-[104rem] w-full mx-auto mt-12 pt-6 border-t border-neutral-800/50">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 select-none">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white flex items-baseline gap-1">
              <span>4+</span>
              <span className="text-xs font-mono text-[#e0002a]">YEARS</span>
            </div>
            <div className="text-xs font-sans text-neutral-400 mt-0.5">
              Full Stack Dev
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white flex items-baseline gap-1">
              <span>React</span>
              <span className="text-xs font-mono text-cyan-400">& Native</span>
            </div>
            <div className="text-xs font-sans text-neutral-400 mt-0.5">
              Web & Mobile Apps
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white flex items-baseline gap-1">
              <span>Node.js</span>
              <span className="text-xs font-mono text-amber-400">& Express</span>
            </div>
            <div className="text-xs font-sans text-neutral-400 mt-0.5">
              RESTful APIs
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white flex items-baseline gap-1">
              <span>M.Sc.</span>
              <span className="text-xs font-mono text-emerald-400">CS</span>
            </div>
            <div className="text-xs font-sans text-neutral-400 mt-0.5">
              Computer Science (2022)
            </div>
          </div>

          <div className="hidden lg:flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white flex items-baseline gap-1">
              <span>DB</span>
              <span className="text-xs font-mono text-rose-400">STACK</span>
            </div>
            <div className="text-xs font-sans text-neutral-400 mt-0.5">
              MongoDB & MySQL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
