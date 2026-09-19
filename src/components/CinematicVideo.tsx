"use client";

import React, { useEffect, useRef, useState } from "react";

interface CinematicVideoProps {
  videoSrc?: string;
}

export default function CinematicVideo({
  videoSrc = "/video/portfolio-background.mp4"
}: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const readyRef = useRef<boolean>(true);
  const durationRef = useRef<number>(6.0);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);

  const latestCursorXRef = useRef<number>(typeof window !== "undefined" ? window.innerWidth * 0.5 : 500);
  const latestCursorYRef = useRef<number>(typeof window !== "undefined" ? window.innerHeight * 0.5 : 500);

  const targetTiltRef = useRef<{ dx: number; dy: number; xp: number; yp: number }>({
    dx: 0,
    dy: 0,
    xp: 50,
    yp: 50
  });
  const currentTiltRef = useRef<{ dx: number; dy: number }>({ dx: 0, dy: 0 });

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Immediately attempt to pause and prep video
    video.pause();
    try {
      video.currentTime = 0;
    } catch { }

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        durationRef.current = video.duration;
      }
      readyRef.current = true;
      video.pause();
      try {
        video.currentTime = 0;
      } catch { }
      setIsVideoLoaded(true);
    };

    const handleCanPlay = () => {
      readyRef.current = true;
      video.pause();
      setIsVideoLoaded(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);

    // Initial check if video is already ready
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    const handleMouseMove = (e: MouseEvent) => {
      const xp = (e.clientX / window.innerWidth) * 100;
      const yp = (e.clientY / window.innerHeight) * 100;
      const dx = ((e.clientX / window.innerWidth) - 0.5) * 2; // -1 to 1
      const dy = ((e.clientY / window.innerHeight) - 0.5) * 2; // -1 to 1

      targetTiltRef.current = { dx, dy, xp, yp };

      // Update dynamic cursor spotlight
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(circle 550px at ${xp.toFixed(1)}% ${yp.toFixed(1)}%, rgba(196, 0, 36, 0.18), rgba(196, 0, 36, 0.06) 40%, transparent 70%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Main RAF Loop for Butter-Smooth Video Scrubbing & 3D Tilt LERP
    let animationFrameId: number;

    const tick = () => {
      const scrollHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));

      // Video Duration handling
      const duration = (video.duration && !isNaN(video.duration) && video.duration > 0)
        ? video.duration
        : durationRef.current;
      durationRef.current = duration;

      // Pure scroll-driven scrubbing (cursor movement does NOT scrub or play video)
      const maxSeek = Math.max(0.01, duration - 0.02);
      targetTimeRef.current = Math.min(maxSeek, Math.max(0, scrollProgress * duration));

      // 1. Time LERP interpolation toward target
      currentTimeRef.current += (targetTimeRef.current - currentTimeRef.current) * 0.10;

      // Seek video if difference is meaningful
      const diff = Math.abs(currentTimeRef.current - video.currentTime);
      if (diff > 0.001) {
        try {
          video.currentTime = currentTimeRef.current;
        } catch {
          // Never throw on seek queue collisions
        }
      }

      // 2. 3D Tilt Parallax LERP (Cursor only controls subtle 3D tilt)
      currentTiltRef.current.dx += (targetTiltRef.current.dx - currentTiltRef.current.dx) * 0.08;
      currentTiltRef.current.dy += (targetTiltRef.current.dy - currentTiltRef.current.dy) * 0.08;

      if (containerRef.current) {
        const { dx, dy } = currentTiltRef.current;
        const tx = dx * -12;
        const ty = dy * -12;
        const rx = dy * -2;
        const ry = dx * 2;
        containerRef.current.style.transform = `scale(1.0) translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }

      // 3. Update top glowing scroll progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${scrollProgress * 100}%`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <>
      {/* Ambient Red Glowing Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2px] bg-neutral-900/60">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#c40024] via-[#e0002a] to-[#ff003c] transition-all duration-75 ease-out shadow-[0_0_12px_#e0002a,0_0_24px_#c40024]"
          style={{ width: "0%" }}
        />
      </div>

      {/* Fixed Video Viewport Container (Centered) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303] flex items-center justify-center">
        {/* 3D Parallax Centered Video Wrapper with Constrained Proportions */}
        <div
          ref={containerRef}
          className="relative w-[92vw] sm:w-[85vw] lg:w-[75vw] max-w-[1200px] h-[75vh] sm:h-[82vh] lg:h-[88vh] max-h-[900px] flex items-center justify-center will-change-transform transition-opacity duration-700"
          style={{
            transformStyle: "preserve-3d",
            opacity: isVideoLoaded ? 1 : 0.85,
            maskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, black 75%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, black 75%, transparent 100%)",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            muted
            preload="auto"
            className="w-full h-full object-contain object-center filter brightness-[0.82] contrast-[1.18] saturate-[1.12]"
          />
        </div>

        {/* Cinematic Layered Overlays */}
        {/* 1. Dynamic Cursor Spotlight Glow */}
        <div
          ref={glowRef}
          id="cine-glow"
          className="cine-glow absolute inset-0 pointer-events-none mix-blend-screen"
        />

        {/* 2. Dark Radial Vignette Falloff */}
        <div className="cine-vignette absolute inset-0 pointer-events-none" />

        {/* 3. Cyber Scanlines Overlay */}
        <div className="cine-scan absolute inset-0 pointer-events-none opacity-40" />

        {/* 4. Film / Noise Grain Overlay */}
        <div className="cine-grain absolute inset-0 pointer-events-none opacity-20" />

        {/* 5. Subtle Cyber Grid Backdrop */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>
    </>
  );
}
