"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const posRef = useRef({ x: -100, y: -100 });
  const lerpRef = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for magnetic or clickable targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const magneticEl = target.closest("[data-magnetic]") as HTMLElement | null;
        const clickableEl = target.closest("button, a, input, textarea, [role='button'], .cursor-pointer");

        if (magneticEl) {
          setIsHovered(true);
          const label = magneticEl.getAttribute("data-cursor-text") || "";
          setCursorText(label);
        } else if (clickableEl) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    const tick = () => {
      lerpRef.current.x += (posRef.current.x - lerpRef.current.x) * 0.15;
      lerpRef.current.y += (posRef.current.y - lerpRef.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${lerpRef.current.x}px, ${lerpRef.current.y}px, 0) scale(${
          isClicking ? 0.75 : isHovered ? 1.6 : 1
        })`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isClicking]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Laser Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ff003c,0_0_16px_#ff003c]" />
      </div>

      {/* Trailing LERP Cyber Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-all duration-150 ease-out flex items-center justify-center"
      >
        <div
          className={`w-9 h-9 rounded-full border transition-colors duration-200 flex items-center justify-center ${
            isHovered
              ? "border-[#ff003c] bg-[#ff003c]/15 shadow-[0_0_20px_rgba(255,0,60,0.5)]"
              : "border-[#ff003c]/40 bg-transparent"
          }`}
        >
          {cursorText && (
            <span className="text-[8px] font-mono font-bold text-white tracking-widest uppercase">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
