"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { PORTFOLIO_DATA, Certification } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Copy,
  ExternalLink,
  Sparkles,
  X,
  Cpu,
  ArrowUpRight,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  RotateCw
} from "lucide-react";

export default function Certifications() {
  const certifications = PORTFOLIO_DATA.certifications;
  const totalCards = certifications.length;
  const stepAngle = 360 / totalCards;

  const [radius, setRadius] = useState<number>(420);
  const [currentAngle, setCurrentAngle] = useState<number>(0);
  const [autoSpin, setAutoSpin] = useState<boolean>(true);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const angleRef = useRef<number>(0);
  const inertiaRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const autoSpinRef = useRef<boolean>(true);
  const lastPointerXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const velocityHistoryRef = useRef<{ dx: number; dt: number }[]>([]);
  const targetAngleRef = useRef<number | null>(null);

  // Dynamically calculate cylinder radius with balanced card spacing
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadius(290);
      } else if (w < 1024) {
        setRadius(370);
      } else {
        setRadius(440);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Sync state with refs
  useEffect(() => {
    autoSpinRef.current = autoSpin;
  }, [autoSpin]);

  // Main RAF Physics & 3D Auto-Spin Loop
  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      // 1. If targetAngle is set (from click-to-center or pagination)
      if (targetAngleRef.current !== null) {
        const diff = targetAngleRef.current - angleRef.current;
        if (Math.abs(diff) > 0.05) {
          angleRef.current += diff * 0.12;
        } else {
          angleRef.current = targetAngleRef.current;
          targetAngleRef.current = null;
        }
      }
      // 2. Else apply Drag Inertia
      else if (!isDraggingRef.current) {
        if (Math.abs(inertiaRef.current) > 0.005) {
          angleRef.current += inertiaRef.current;
          inertiaRef.current *= 0.945; // Friction damping
        } else {
          inertiaRef.current = 0;
          // 3. Auto-spin when idle (spins from right to left)
          if (autoSpinRef.current) {
            angleRef.current -= 0.06;
          }
        }
      }

      setCurrentAngle(angleRef.current);

      // Determine front card index
      let closestIdx = 0;
      let minDiff = 999;
      for (let i = 0; i < totalCards; i++) {
        const cardAngle = i * stepAngle;
        const total = (cardAngle + angleRef.current) % 360;
        const norm = ((total + 180) % 360 + 360) % 360 - 180;
        const absDiff = Math.abs(norm);
        if (absDiff < minDiff) {
          minDiff = absDiff;
          closestIdx = i;
        }
      }
      setActiveIndex(closestIdx);

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [totalCards, stepAngle]);

  // Spin to specific card
  const rotateToCard = useCallback(
    (index: number) => {
      sfx.playClick();
      const cardAngle = index * stepAngle;
      const total = (cardAngle + angleRef.current) % 360;
      const normalizedDelta = ((total + 180) % 360 + 360) % 360 - 180;
      targetAngleRef.current = angleRef.current - normalizedDelta;
      inertiaRef.current = 0;
    },
    [stepAngle]
  );

  // Pointer Drag Handlers for 3D Cube Rotation
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    targetAngleRef.current = null;
    inertiaRef.current = 0;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    lastPointerXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityHistoryRef.current = [];

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch { }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = e.clientX - lastPointerXRef.current;

    // Drag sensitivity factor
    const degChange = dx * 0.22;
    angleRef.current += degChange;

    velocityHistoryRef.current.push({ dx: degChange, dt });
    if (velocityHistoryRef.current.length > 5) {
      velocityHistoryRef.current.shift();
    }

    lastPointerXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch { }

    // Compute release velocity for natural momentum
    if (velocityHistoryRef.current.length > 0) {
      const recent = velocityHistoryRef.current;
      const totalDx = recent.reduce((sum, item) => sum + item.dx, 0);
      const totalDt = recent.reduce((sum, item) => sum + item.dt, 0);
      const avgVelocity = totalDt > 0 ? (totalDx / totalDt) * 16.67 : 0;
      inertiaRef.current = Math.max(-3.5, Math.min(3.5, avgVelocity * 0.85));
    }
  };

  // Card click behavior
  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      sfx.playModalOpen();
      setSelectedCert(certifications[index]);
    } else {
      rotateToCard(index);
    }
  };

  const handleInspectClick = (e: React.MouseEvent, cert: Certification, index: number) => {
    e.stopPropagation();
    sfx.playModalOpen();
    setSelectedCert(cert);
    if (index !== activeIndex) {
      rotateToCard(index);
    }
  };

  const handleCopyHash = (hash: string) => {
    sfx.playBeep(1100, 0.06);
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2400);
  };

  return (
    <section
      id="certifications"
      className="relative min-h-[920px] py-20 sm:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[116rem] w-full mx-auto flex flex-col justify-between overflow-hidden z-10 select-none"
    >
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header: Left Title & Right Telemetry Badge */}
      <div className="pt-4 sm:pt-8 mb-6 sm:mb-10 z-10 w-full text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // VERIFIED CREDENTIALS //
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none text-left">
              <span>CERTIFIED </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                SPECIALIZATIONS
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="text-white font-bold tracking-wider">06 // CERTIFIED SPECIALIZATIONS</span>
          </div>
        </div>
      </div>

      {/* 3D DRAGGABLE ROTATING CUBE / CYLINDER SCENE */}
      <div
        className="relative w-full h-[520px] sm:h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y select-none z-10"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          perspective: "1350px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Revolving 3D Cube / Cylinder Center Hub */}
        <div
          className="relative w-full h-full pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${currentAngle}deg)`,
            transition: isDraggingRef.current ? "none" : "transform 0.05s linear",
          }}
        >
          {certifications.map((cert, index) => {
            const cardAngle = index * stepAngle;
            const totalAngle = (cardAngle + currentAngle) % 360;
            const normalizedPhi = ((totalAngle + 180) % 360 + 360) % 360 - 180;
            const rad = (normalizedPhi * Math.PI) / 180;
            const cosVal = Math.cos(rad);

            // Backface culling: hide cards facing away from camera
            const isVisible = cosVal >= 0.05;
            const opacity = isVisible ? Math.max(0.25, Math.pow(cosVal, 1.2)) : 0;
            const isFrontCard = index === activeIndex;

            return (
              <div
                key={cert.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(index);
                }}
                onMouseEnter={() => sfx.playHover()}
                className={`absolute top-1/2 left-1/2 w-[310px] sm:w-[360px] md:w-[390px] lg:w-[410px] h-[395px] sm:h-[420px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-2xl border transition-all duration-300 pointer-events-auto cursor-pointer group select-none overflow-hidden ${isFrontCard
                    ? "bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-black/25 border-[#ff003c]/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_40px_rgba(255,0,60,0.3),0_15px_35px_rgba(0,0,0,0.5)] ring-1 ring-[#ff2a51]/50 scale-[1.03]"
                    : "bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)]"
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  opacity: opacity,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                {/* Top Specular Glare Line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                {/* Laser Top Beam Accent */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2.5px] rounded-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
                  style={{
                    backgroundColor: cert.accentColor,
                    boxShadow: `0 0 14px ${cert.accentColor}`,
                  }}
                />

                {/* Card Top Row: Circular Badge Emblem & Code */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    {/* Glowing Shield Badge Seal */}
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center border shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${cert.accentColor}18`,
                        borderColor: `${cert.accentColor}60`,
                        boxShadow: `0 0 20px ${cert.accentColor}35`,
                      }}
                    >
                      <ShieldCheck
                        className="w-5 h-5"
                        style={{ color: cert.accentColor }}
                      />
                    </div>

                    {/* Right Status Pill */}
                    <div className="flex flex-col items-end">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold"
                        style={{
                          color: cert.accentColor,
                          backgroundColor: `${cert.accentColor}18`,
                          border: `1px solid ${cert.accentColor}40`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: cert.accentColor }}
                        />
                        <span>{cert.status}</span>
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                        {cert.code}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-oswald text-white tracking-wide leading-tight group-hover:text-[#ff3b5c] transition-colors mb-1.5">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span
                      className="font-bold tracking-wide"
                      style={{ color: cert.accentColor }}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400">{cert.issueDate}</span>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs font-sans text-neutral-300/90 leading-relaxed line-clamp-3 mb-3">
                    {cert.description}
                  </p>
                </div>

                {/* Card Bottom: Competencies Chips & Action Button */}
                <div className="pt-3 border-t border-neutral-800/80">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-neutral-800/80"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-neutral-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {isFrontCard ? (
                    <button
                      onClick={(e) => handleInspectClick(e, cert, index)}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#c40024] to-[#e0002a] text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(196,0,36,0.35)] hover:brightness-110 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      <span>INSPECT CREDENTIAL & HASH</span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        rotateToCard(index);
                      }}
                      className="w-full text-center text-[10px] font-mono text-neutral-400 hover:text-white py-1.5 transition-colors cursor-pointer"
                    >
                      Click to rotate to center &rarr;
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Centered Gallery Controls HUD: Auto-Spin Toggle, Navigation, & Indicator Track */}
      <div className="relative z-10 mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mx-auto">
        {/* Auto-Spin Toggle & Prev/Next */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              const prevIdx = (activeIndex - 1 + totalCards) % totalCards;
              rotateToCard(prevIdx);
            }}
            className="p-2.5 rounded-xl bg-black/60 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#ff003c]/60 transition-all shadow-md cursor-pointer"
            title="Previous Credential"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Auto-Spin Toggle */}
          <button
            onClick={() => {
              sfx.playClick();
              setAutoSpin((prev) => !prev);
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-xs font-bold transition-all cursor-pointer ${autoSpin
                ? "bg-red-950/40 border-red-500/50 text-[#ff3b5c] shadow-[0_0_15px_rgba(255,0,60,0.25)]"
                : "bg-black/60 border-neutral-800 text-neutral-400 hover:text-white"
              }`}
          >
            {autoSpin ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
            <span>3D ROTATION: {autoSpin ? "ACTIVE" : "PAUSED"}</span>
          </button>

          <button
            onClick={() => {
              const nextIdx = (activeIndex + 1) % totalCards;
              rotateToCard(nextIdx);
            }}
            className="p-2.5 rounded-xl bg-black/60 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#ff003c]/60 transition-all shadow-md cursor-pointer"
            title="Next Credential"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Track Indicators */}
        <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-neutral-800/80 backdrop-blur-md">
          {certifications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => rotateToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                  ? "w-8 bg-gradient-to-r from-[#c40024] to-[#ff003c] shadow-[0_0_10px_#ff003c]"
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
              title={`Credential ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CRYPTOGRAPHIC VERIFICATION MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] bg-gradient-to-br from-neutral-900/80 via-black/85 to-neutral-950/80 backdrop-blur-3xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Specular Glare Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Modal Laser Beam Header Accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c40024] via-[#e0002a] to-amber-400"
              style={{ boxShadow: `0 0 20px ${selectedCert.accentColor}` }}
            />

            {/* Background Holographic Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => {
                sfx.playClick();
                setSelectedCert(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#ff003c] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: Verified Seal & Code */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-[#ff2a51]" />
                <span>CRYPTOGRAPHICALLY AUTHENTICATED</span>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                CODE: {selectedCert.code}
              </span>
            </div>

            {/* Title & Issuer */}
            <h3 className="text-2xl sm:text-3xl font-black font-oswald text-white tracking-wide uppercase">
              {selectedCert.title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Award className="w-4 h-4" />
                {selectedCert.issuer}
              </span>
              <span>|</span>
              <span>ISSUED: {selectedCert.issueDate}</span>
              <span>|</span>
              <span className="text-emerald-400 font-bold">{selectedCert.expiryDate}</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-sans">
              {selectedCert.description}
            </p>

            {/* Cryptographic SHA-256 Hash Box */}
            <div className="mt-6 p-4 rounded-xl bg-black/60 border border-neutral-800 relative group">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                <span className="flex items-center gap-1.5 text-[#ff2a51] font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  SHA-256 VERIFICATION HASH
                </span>
                <span className="text-emerald-400 font-bold">{selectedCert.score}</span>
              </div>
              <div className="text-xs font-mono text-neutral-200 break-all bg-black/80 p-2.5 rounded border border-neutral-800 select-all">
                {selectedCert.sha256}
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopyHash(selectedCert.sha256)}
                className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/35 border border-red-500/40 text-red-300 text-xs font-mono font-bold transition-all cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedHash ? "HASH COPIED TO CLIPBOARD!" : "COPY VERIFICATION HASH"}</span>
              </button>
            </div>

            {/* Validated Competencies Grid */}
            <div className="mt-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>VALIDATED SYSTEM COMPETENCIES:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-black/60 border border-neutral-800 text-neutral-200 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff003c]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-neutral-500">
                AUDITED BY: {selectedCert.issuerBadge}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#c40024] to-[#e0002a] text-white font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,0,60,0.3)] cursor-pointer"
              >
                CLOSE INSPECTOR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
