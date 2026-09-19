"use client";

import React, { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Trophy,
  Award,
  Code2,
  Cpu,
  Sparkles,
  ExternalLink,
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
  Flame,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface AchievementCardItem {
  id: string;
  value: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  filter: "competitive" | "production";
  link?: string;
  showRadar?: boolean;
}

function AchievementCard({ item }: { item: AchievementCardItem }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, spotlightX: 50, spotlightY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = ((y - centerY) / centerY) * -5;
    const ry = ((x - centerX) / centerX) * 5;
    const spotlightX = (x / rect.width) * 100;
    const spotlightY = (y / rect.height) * 100;

    setTilt({ rx, ry, spotlightX, spotlightY });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, spotlightX: 50, spotlightY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sfx.playHover()}
      data-magnetic
      className="group relative w-[310px] sm:w-[360px] md:w-[390px] min-h-[390px] sm:min-h-[410px] shrink-0 snap-start rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_40px_rgba(255,0,60,0.25)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden select-none"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Top Specular Glare Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      {/* Dynamic Cursor Ambient Radial Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 280px at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(255, 0, 60, 0.16), transparent 70%)`,
        }}
      />

      {/* Top Background Ambient Glow */}
      <div className="absolute -top-24 -left-24 w-52 h-52 rounded-full bg-red-600/10 blur-3xl pointer-events-none group-hover:bg-red-600/25 transition-all duration-500" />

      {/* Card Content Top */}
      <div className="relative z-10">
        {/* Big Crimson Hero Metric Number matching screenshot */}
        <div className="text-5xl sm:text-6xl lg:text-[4.4rem] font-black font-oswald text-[#ff2a51] drop-shadow-[0_0_30px_rgba(255,42,81,0.6)] leading-none tracking-tight mb-3">
          {item.value}
        </div>

        {/* Monospace Sub-Category Label */}
        <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2.5">
          {item.category}
        </div>

        {/* Bold Subtitle / Metric Heading */}
        <h3 className="text-xl sm:text-2xl font-bold font-oswald text-white tracking-wide group-hover:text-[#ff3b5c] transition-colors leading-tight mb-3">
          {item.title}
        </h3>

        {/* Description Paragraph */}
        <p className="text-xs sm:text-sm font-sans text-neutral-300/90 leading-relaxed mb-6">
          {item.description}
        </p>
      </div>

      {/* Card Bottom: Laser Accent Line with Target Radar Pulse */}
      <div className="relative z-10 pt-4 mt-auto">
        {/* Metric Tag Badge & Link */}
        <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-neutral-800/90 text-neutral-300">
            <CheckCircle2 className="w-3 h-3 text-[#ff2a51]" />
            <span>{item.metric}</span>
          </span>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sfx.playClick()}
              className="text-neutral-500 hover:text-white transition-colors p-1"
              title="Inspect Credential"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Glowing Red Laser Accent Line with Target Crosshair Reticle */}
        <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff003c]/85 to-transparent rounded-full shadow-[0_0_12px_#ff003c]">
          {/* Pulsing Crosshair Radar Center Reticle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Outer radar ping ring */}
            <span className="w-4 h-4 rounded-full border border-[#ff003c]/60 animate-ping opacity-60 pointer-events-none" />
            {/* Middle radar static ring */}
            <span className="absolute w-2.5 h-2.5 rounded-full border border-[#ff2a51] bg-[#ff003c]/20" />
            {/* Center bright neon core */}
            <span className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState<"competitive" | "production" | "all">("all");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Ensure scroll is strictly pinned to the first card (left: 0) on mount
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  // Reset scroll to first card whenever active filter changes
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeFilter]);

  const handleScroll = (direction: "left" | "right") => {
    sfx.playClick();
    if (scrollContainerRef.current) {
      const scrollDistance = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  const achievementsData: AchievementCardItem[] = [
    {
      id: "leetcode",
      value: "450+",
      category: "COMPETITIVE PROGRAMMING",
      title: "LeetCode Problems",
      description: "450+ problems solved on LeetCode, building strong fundamentals in DSA.",
      metric: "TOP 15% GLOBAL DSA",
      filter: "competitive",
      link: "https://leetcode.com",
      showRadar: true
    },
    {
      id: "codechef",
      value: "500+",
      category: "COMPETITIVE PROGRAMMING",
      title: "CodeChef Problems",
      description: "500+ problems solved on CodeChef alongside 280+ on GeeksforGeeks.",
      metric: "3★ RATED ALGORITHMIC CODER",
      filter: "competitive",
      link: "https://codechef.com",
      showRadar: true
    },
    {
      id: "hackerrank",
      value: "20+",
      category: "COMPETITIVE PROGRAMMING",
      title: "HackerRank Stars",
      description: "20+ stars earned across HackerRank skill tracks.",
      metric: "5★ GOLD PROBLEM SOLVING",
      filter: "competitive",
      link: "https://hackerrank.com",
      showRadar: true
    },
    {
      id: "commits",
      value: "950+",
      category: "PRODUCTION IMPACT",
      title: "Sprint Commits & PRs",
      description: "950+ production commits and sprint deliverables shipped across scalable web, hybrid mobile, and cloud backends.",
      metric: "AGILE 2-WEEK CADENCE",
      filter: "production",
      link: "https://github.com/pazhanisamyk"
    },
    {
      id: "apps",
      value: "10+",
      category: "PRODUCTION IMPACT",
      title: "Enterprise Deployments",
      description: "10+ client-facing and enterprise web/mobile applications architected across React, React Native, and Node.js.",
      metric: "100K+ USER CATALOGS",
      filter: "production",
      link: "#projects"
    },
    {
      id: "uptime",
      value: "99.9%",
      category: "SYSTEM RELIABILITY",
      title: "Uptime & Low Latency SLA",
      description: "Engineered resilient APIs and WebSocket streaming gateways maintaining 99.9% uptime SLA under concurrency.",
      metric: "<150ms LATENCY PIPELINE",
      filter: "production",
      link: "#projects"
    }
  ];

  const filteredItems =
    activeFilter === "all"
      ? achievementsData
      : achievementsData.filter((item) => item.filter === activeFilter);

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[104rem] w-full mx-auto z-10 select-none flex flex-col justify-between overflow-hidden"
    >
      {/* Top Header: Left Title & Right Telemetry Pill */}
      <div className="pt-4 sm:pt-8 mb-6 sm:mb-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Tracking Monospace Subtitle */}
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // RECOGNITION MATRIX //
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none text-left">
              <span>KEY </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                ACHIEVEMENTS<span className="text-[#ff003c] drop-shadow-[0_0_20px_#ff003c]">.</span>
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">05 // ACHIEVEMENTS</span>
          </div>
        </div>

        {/* Filter Pills & Scroll Controls Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 w-full">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "ALL ACHIEVEMENTS" },
              { id: "competitive", label: "COMPETITIVE PROGRAMMING" },
              { id: "production", label: "PRODUCTION IMPACT" }
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sfx.playClick();
                    setActiveFilter(tab.id as typeof activeFilter);
                  }}
                  onMouseEnter={() => sfx.playHover()}
                  data-magnetic
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#c40024] via-[#e0002a] to-[#ff003c] text-white shadow-[0_0_20px_rgba(255,0,60,0.4)]"
                      : "bg-black/30 backdrop-blur-md text-neutral-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.08]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Horizontal Scroll Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              onMouseEnter={() => sfx.playHover()}
              className="p-2.5 rounded-xl bg-black/40 hover:bg-neutral-900 border border-white/10 hover:border-[#ff003c]/60 text-neutral-300 hover:text-white transition-all shadow-md cursor-pointer"
              title="Scroll Left"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              onMouseEnter={() => sfx.playHover()}
              className="p-2.5 rounded-xl bg-black/40 hover:bg-neutral-900 border border-white/10 hover:border-[#ff003c]/60 text-neutral-300 hover:text-white transition-all shadow-md cursor-pointer"
              title="Scroll Right"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Cards Single Horizontal Scroll Row */}
      <div className="relative w-full max-w-full min-w-0 my-auto py-2 overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch justify-start gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-1 snap-x snap-mandatory scroll-smooth w-full max-w-full min-w-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredItems.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="pt-6 pb-2 border-t border-neutral-800/40 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <div>ALGORITHMIC RIGOR & PRODUCTION VALIDATION // VERIFIED</div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>STATUS // 950+ COMMITS DEPLOYED</span>
        </div>
      </div>
    </section>
  );
}
