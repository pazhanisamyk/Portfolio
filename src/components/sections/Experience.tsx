"use client";

import React, { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Sparkles,
  Award,
  Layers,
  ChevronRight
} from "lucide-react";

interface Milestone {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  status: "ACTIVE" | "COMPLETED";
  badge: string;
  summary: string;
  points: string[];
  technologies: string[];
  accentColor: string;
}

function ExperienceCard({ item }: { item: Milestone }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, spotlightX: 50, spotlightY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = ((y - centerY) / centerY) * -4;
    const ry = ((x - centerX) / centerX) * 4;
    const spotlightX = (x / rect.width) * 100;
    const spotlightY = (y / rect.height) * 100;

    setTilt({ rx, ry, spotlightX, spotlightY });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, spotlightX: 50, spotlightY: 50 });
  };

  const isWork = item.type === "work";
  const isActive = item.status === "ACTIVE";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sfx.playHover()}
      data-magnetic
      className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_40px_rgba(255,0,60,0.25)] transition-all duration-300 overflow-hidden select-none"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Top Specular Glare Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      {/* Top Laser Accent Beam */}
      <div
        className="absolute top-0 left-8 right-8 h-[2.5px] rounded-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
        style={{
          backgroundColor: item.accentColor,
          boxShadow: `0 0 14px ${item.accentColor}`,
        }}
      />

      {/* Dynamic Cursor Ambient Radial Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 280px at ${tilt.spotlightX}% ${tilt.spotlightY}%, ${item.accentColor}20, transparent 70%)`,
        }}
      />

      {/* Card Header: Type Badge, Period & Live Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 font-mono text-xs">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px]"
          style={{
            color: item.accentColor,
            backgroundColor: `${item.accentColor}18`,
            border: `1px solid ${item.accentColor}40`,
          }}
        >
          {isWork ? (
            <Briefcase className="w-3.5 h-3.5" />
          ) : (
            <GraduationCap className="w-3.5 h-3.5" />
          )}
          <span>{item.badge}</span>
        </span>

        <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{item.period}</span>
        </div>
      </div>

      {/* Title & Organization */}
      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff3b5c] transition-colors leading-snug font-oswald tracking-wide mb-1">
        {item.title}
      </h3>

      <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 mb-4">
        <span className="text-white font-semibold">{item.organization}</span>
        <span className="text-neutral-600">•</span>
        <span className="text-neutral-400 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-[#ff2a51]" />
          {item.location}
        </span>
      </div>

      {/* Summary */}
      <p className="text-xs sm:text-sm text-neutral-300/90 font-sans leading-relaxed mb-5">
        {item.summary}
      </p>

      {/* Deliverables / Key Points */}
      <div className="space-y-2 mb-5">
        {item.points.map((pt, pIdx) => (
          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
            <CheckCircle2
              className="w-3.5 h-3.5 shrink-0 mt-0.5"
              style={{ color: item.accentColor }}
            />
            <span>{pt}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack Chips */}
      <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
        {item.technologies.map((tech, tIdx) => (
          <span
            key={tIdx}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-neutral-300 border border-neutral-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const milestones: Milestone[] = [
    {
      id: "agile-softlabs",
      type: "work",
      title: "Full Stack Developer",
      organization: "Agile Softlabs Pvt Ltd",
      location: "Pondicherry, India",
      period: "DECEMBER 2024 – PRESENT",
      status: "ACTIVE",
      badge: "CURRENT CORE ROLE",
      summary: "Full Stack Developer engineering modern web and mobile applications with React, React Native, Node.js, and Express.js with high performance and scalable REST APIs.",
      points: [
        "Leading the development of responsive web applications and cross-platform mobile apps using React and React Native.",
        "Designing scalable RESTful APIs and backend microservices with Node.js and Express.js.",
        "Implementing optimized database schemas and queries in MongoDB and MySQL for fast data retrieval.",
        "Collaborating in Agile team sprints to deliver user-centric, high-quality production software."
      ],
      technologies: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "MySQL", "TypeScript", "RESTful APIs", "Git"],
      accentColor: "#e0002a"
    },
    {
      id: "redblox-tech",
      type: "work",
      title: "Software Developer",
      organization: "Redblox Technologies Pvt Ltd",
      location: "Pondicherry, India",
      period: "JULY 2022 – NOVEMBER 2024",
      status: "COMPLETED",
      badge: "2+ YEARS PRODUCTION",
      summary: "Software Developer delivering high-impact production applications including Spryntz food delivery (React Native), My Bhima e-commerce (Next.js), and Swypatune music streaming (Ionic/Angular).",
      points: [
        "Developed and maintained full-scale mobile and web interfaces with React, React Native, Next.js, Ionic, and Angular.",
        "Built real-time delivery tracking, payment gateway integrations, and push notifications for Spryntz food delivery.",
        "Implemented online jewellery scheme enrollment and SSR catalog browsing for My Bhima e-commerce.",
        "Created custom swipe gesture video playback, gamified contest voting, and SEO optimization for Swypatune."
      ],
      technologies: ["React.js", "React Native", "Ionic", "Angular", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB", "MySQL", "Postman", "Figma"],
      accentColor: "#00f0ff"
    },
    {
      id: "msc-cs",
      type: "education",
      title: "Master of Science in Computer Science (M.Sc.)",
      organization: "University Postgraduate Program",
      location: "Tamil Nadu, India",
      period: "2020 – 2022",
      status: "COMPLETED",
      badge: "POSTGRADUATE DEGREE",
      summary: "Completed Master of Science in Computer Science (2020 - 2022), establishing deep foundations in algorithmic problem solving, database management, and distributed architectures.",
      points: [
        "Specialized in Data Structures, Algorithms, Database Management Systems, and Web Technologies.",
        "Engineered full-stack capstone projects and computational prototypes.",
        "Graduated with comprehensive proficiency in software engineering paradigms."
      ],
      technologies: ["Data Structures & Algorithms", "Database Systems (DBMS)", "Distributed Architecture", "Software Engineering"],
      accentColor: "#f59e0b"
    },
    {
      id: "flutter-scode",
      type: "education",
      title: "Flutter Internship Completion",
      organization: "Scode Software Solutions",
      location: "Pondicherry, India",
      period: "2022",
      status: "COMPLETED",
      badge: "INDUSTRY INTERNSHIP",
      summary: "Completed Flutter Mobile Development internship at Scode Software Solutions (2022), building cross-platform mobile apps with Dart, custom UI widgets, and mobile device integrations.",
      points: [
        "Completed Flutter Internship at Scode Software Solutions (2022).",
        "Developed cross-platform mobile UI widgets and state management in Dart.",
        "Integrated mobile APIs and responsive layout structures."
      ],
      technologies: ["Flutter", "Dart", "Mobile App Development", "State Management", "UI/UX"],
      accentColor: "#00ff9d"
    }
  ];

  const filteredMilestones =
    filter === "all"
      ? milestones
      : milestones.filter((m) => m.type === filter);

  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[104rem] w-full mx-auto z-10 select-none flex flex-col justify-between"
    >
      {/* Top Header: Left Title & Right Telemetry Badge */}
      <div className="pt-4 sm:pt-8 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none">
              <span>EXPERIENCE & </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                EDUCATION
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-mono max-w-2xl">
              My academic path & engineering milestones across modern web, mobile architectures, and present journey.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">08 // CHRONOLOGICAL TIMELINE</span>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-6 inline-flex flex-wrap items-center p-1.5 rounded-2xl bg-black/35 border border-white/[0.08] backdrop-blur-xl shadow-lg gap-1">
          {[
            { id: "all", label: "ALL MILESTONES" },
            { id: "work", label: "WORK EXPERIENCE" },
            { id: "education", label: "EDUCATION & INTERNSHIP" }
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sfx.playClick();
                  setFilter(tab.id as typeof filter);
                }}
                onMouseEnter={() => sfx.playHover()}
                data-magnetic
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#c40024] to-[#e0002a] text-white shadow-[0_0_15px_rgba(196,0,36,0.4)]"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* BILATERAL ALTERNATING TIMELINE FRAMING CENTRAL 3D CHARACTER */}
      <div className="relative mt-12 mb-auto">
        {/* Central Glowing Neon Laser Spine */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#e0002a] via-[#ff003c] to-transparent shadow-[0_0_12px_#ff003c,0_0_24px_#c40024]" />

        <div className="space-y-12 md:space-y-20">
          {filteredMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isActive = item.status === "ACTIVE";

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Glowing Waypoint Reticle Node */}
                <div
                  className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-[#030303] border-2 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125"
                  style={{
                    borderColor: item.accentColor,
                    boxShadow: `0 0 16px ${item.accentColor}`
                  }}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isActive ? "bg-[#e0002a] animate-ping" : "bg-white"
                    }`}
                    style={{ backgroundColor: item.accentColor }}
                  />
                </div>

                {/* Left/Right Card Container */}
                <div className="w-full md:w-[46%] pl-12 md:pl-0">
                  <ExperienceCard item={item} />
                </div>

                {/* Empty spacer on opposing side to balance grid */}
                <div className="hidden md:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-8 pb-2 border-t border-neutral-800/40 flex items-center justify-between text-[11px] font-mono text-neutral-500 mt-12">
        <div>CHRONOLOGICAL ENGINEERING MILESTONES // VERIFIED</div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>4+ YEARS PRODUCTION LEADERSHIP</span>
        </div>
      </div>
    </section>
  );
}
