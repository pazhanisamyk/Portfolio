"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const services = PORTFOLIO_DATA.services;
  const currentService = services[activeIndex] || services[0];

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-between max-w-[104rem] w-full mx-auto z-10 select-none"
    >
      {/* Top Header: Left Title & Right Telemetry Badge */}
      <div className="pt-4 sm:pt-8 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Tracking Monospace Subtitle */}
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // SYSTEM DOMAINS //
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none text-left">
              <span>SPECIALIZED </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                SERVICES<span className="text-[#ff003c] drop-shadow-[0_0_20px_#ff003c]">.</span>
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">03 // SERVICES</span>
          </div>
        </div>
      </div>

      {/* Main 3-Column Layout: Left Services List | Center (Video Framing Spacer) | Right Technical Details Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto py-8 w-full max-w-[94rem] mx-auto">
        {/* Left Column: Interactive Service Items */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col space-y-4 sm:space-y-5 lg:space-y-6 z-10">
          {services.map((srv, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={srv.id}
                onClick={() => {
                  sfx.playClick();
                  setActiveIndex(idx);
                }}
                onMouseEnter={() => {
                  sfx.playHover();
                  setActiveIndex(idx);
                }}
                data-magnetic
                className={`relative p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer group flex items-start gap-4 backdrop-blur-2xl border overflow-hidden ${isActive
                    ? "bg-gradient-to-r from-white/[0.07] via-white/[0.01] to-black/25 border-[#ff003c]/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_30px_rgba(255,0,60,0.2)] translate-x-1"
                    : "bg-gradient-to-r from-white/[0.03] via-transparent to-black/15 border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_20px_rgba(255,0,60,0.18)]"
                  }`}
              >
                {/* Top Specular Glare Line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                {/* Left Active Laser Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#e0002a] rounded-r shadow-[0_0_10px_#e0002a]" />
                )}

                {/* Monospace Numbering (01, 02, 03, 04) */}
                <span
                  className={`font-mono text-sm sm:text-base font-bold transition-colors duration-300 shrink-0 mt-0.5 ${isActive
                      ? "text-[#ff3b5c] drop-shadow-[0_0_8px_#ff003c]"
                      : "text-neutral-500 group-hover:text-neutral-300"
                    }`}
                >
                  {srv.num}
                </span>

                {/* Service Title & Short Description */}
                <div className="flex flex-col min-w-0">
                  <h3
                    className={`text-xl sm:text-2xl md:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] font-bold font-oswald tracking-wide transition-all duration-300 leading-tight truncate sm:whitespace-normal ${isActive
                        ? "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        : "text-neutral-400 group-hover:text-white"
                      }`}
                  >
                    {srv.title}
                  </h3>
                  <p
                    className={`text-xs font-sans tracking-normal transition-opacity duration-300 mt-1 line-clamp-2 ${isActive
                        ? "text-neutral-300 opacity-90"
                        : "text-neutral-500 opacity-60 group-hover:opacity-80"
                      }`}
                  >
                    {srv.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Spacer for 3D Video Character Framing */}
        <div className="hidden lg:block lg:col-span-2 pointer-events-none" />

        {/* Right Column: Active Service Technical Specifications Card */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center z-10">
          <div className="group relative rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 p-6 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_40px_rgba(255,0,60,0.25)] overflow-hidden transition-all duration-300">
            {/* Top Specular Glare Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Glowing Laser Top Beam Accent */}
            <div className="absolute top-0 left-6 right-6 h-[2.5px] rounded-full bg-[#e0002a] shadow-[0_0_14px_#e0002a] transition-all duration-300 group-hover:left-3 group-hover:right-3" />

            {/* Corner Neon Cyber Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#e0002a]/60 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#e0002a]/40 rounded-bl-3xl pointer-events-none" />

            {/* Header info */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e0002a] animate-pulse shadow-[0_0_8px_#e0002a]" />
                <span className="text-white font-bold">{currentService.num} // SPEC_TELEMETRY</span>
              </div>
              <div className="text-[10px] text-[#ff3b5c] bg-[#e0002a]/10 px-2.5 py-1 rounded-full border border-[#e0002a]/30 uppercase font-bold tracking-wider">
                ACTIVE SPEC
              </div>
            </div>

            {/* Title & Category */}
            <h4 className="text-xl sm:text-2xl font-bold font-oswald text-white tracking-wide uppercase">
              {currentService.title}
            </h4>
            <p className="text-xs text-neutral-300/90 font-sans mt-1.5 mb-4 leading-relaxed">
              {currentService.shortDesc}
            </p>

            {/* Main Technical Spec Summary */}
            <div className="bg-white/[0.04] border-l-2 border-[#e0002a] p-3.5 rounded-r-xl mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
              <p className="text-[11px] sm:text-xs font-mono text-neutral-200 uppercase leading-relaxed tracking-wider">
                {currentService.specText}
              </p>
            </div>

            {/* Sub-spec items with glowing red bullets */}
            <div className="space-y-2 font-mono">
              {currentService.subSpecs.map((sub, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0002a] shadow-[0_0_6px_#e0002a] shrink-0 mt-1" />
                  <span className="text-[11px] tracking-wide text-neutral-200">{sub}</span>
                </div>
              ))}
            </div>

            {/* Quick Service Pagination Dots */}
            <div className="flex items-center justify-between pt-4 mt-5 border-t border-neutral-800/60 font-mono text-[11px] text-neutral-500">
              <span>MODULE {activeIndex + 1} OF {services.length}</span>
              <div className="flex items-center gap-1.5">
                {services.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      sfx.playClick();
                      setActiveIndex(dotIdx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === dotIdx
                        ? "w-6 bg-[#e0002a] shadow-[0_0_8px_#e0002a]"
                        : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
                      }`}
                    aria-label={`Select service ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="pt-6 pb-2 border-t border-neutral-800/40 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <div>CORE ENGINEERING CAPABILITIES // PRODUCTION VERIFIED</div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS_READY // ACCEPTING CONTRACTS</span>
        </div>
      </div>
    </section>
  );
}

