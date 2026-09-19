"use client";

import React, { useEffect, useState } from "react";

export default function CyberCursor() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer");
        setIsPointer(Boolean(isClickable));
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

    // Smooth trailing ring with RAF
    let animationFrameId: number;
    let trailX = -100;
    let trailY = -100;

    const follow = () => {
      trailX += (pos.x - trailX) * 0.15;
      trailY += (pos.y - trailY) * 0.15;
      setTrailingPos({ x: trailX, y: trailY });
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Laser Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicking ? 0.7 : 1})`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ff003c,0_0_16px_#ff003c]" />
      </div>

      {/* Trailing Cyber Crosshair Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) scale(${
            isPointer ? 1.4 : isClicking ? 0.85 : 1
          })`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`relative w-8 h-8 rounded-full border transition-all duration-200 ${
            isPointer
              ? "border-red-400 bg-red-500/10 shadow-[0_0_15px_rgba(255,0,60,0.5)] rotate-45"
              : "border-red-500/40"
          }`}
        >
          {/* Cybernetic tick marks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1 bg-red-400" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-1 bg-red-400" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-0.5 bg-red-400" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-0.5 bg-red-400" />
        </div>
      </div>
    </>
  );
}
