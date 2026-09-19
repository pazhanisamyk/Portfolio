"use client";

import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  FileText,
  ChevronRight
} from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      // 1. Top of page -> Always show header
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY.current;

        // 2. Scrolling top to bottom (down) -> Hide header
        if (diff > 8) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        }
        // 3. Scrolling bottom to top (up) -> Show header
        else if (diff < -8) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;

      // Active Section highlight
      const sections = ["hero", "about", "services", "projects", "achievements", "certifications", "skills", "experience", "contact"];
      const scrollPos = currentScrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const state = sfx.toggle();
    setIsSoundOn(state);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certs", href: "#certifications" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    sfx.playClick();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 transition-all duration-300 pointer-events-none ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-black/65 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[104rem] mx-auto flex items-center justify-between">
        {/* Left: Brand Logo ("Pazhani.") with red period */}
        <a
          href="#hero"
          onClick={() => sfx.playClick()}
          data-magnetic
          className="pointer-events-auto font-oswald text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase flex items-center select-none cursor-pointer group"
        >
          <span>Pazhani</span>
          <span className="text-[#e0002a] drop-shadow-[0_0_10px_#e0002a] group-hover:scale-125 transition-transform">.</span>
        </a>

        {/* Right: Clean Minimalist Text Navigation Links */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-6 lg:gap-8 text-sm font-sans tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                onMouseEnter={() => sfx.playHover()}
                data-magnetic
                className={`transition-colors duration-200 cursor-pointer ${isActive
                    ? "text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    : "text-neutral-400 hover:text-white"
                  }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Audio SFX Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sfx.playHover()}
            data-magnetic
            className={`p-2 rounded-full transition-colors cursor-pointer ${isSoundOn
                ? "text-[#e0002a] drop-shadow-[0_0_8px_#e0002a]"
                : "text-neutral-500 hover:text-neutral-300"
              }`}
            title={isSoundOn ? "Mute SFX" : "Enable SFX"}
          >
            {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="pointer-events-auto flex items-center gap-2 md:hidden">
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full ${isSoundOn ? "text-[#e0002a]" : "text-neutral-400"
              }`}
          >
            {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              sfx.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-black/60 border border-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-3 max-w-md mx-auto bg-[#090909]/98 backdrop-blur-2xl border border-neutral-800 rounded-2xl p-5 flex flex-col gap-2.5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 hover:bg-[#c40024]/20 border border-neutral-800/80 text-sm font-sans text-neutral-200 hover:text-[#e0002a] transition-colors"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            className="mt-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-[#c40024] to-[#e0002a] text-white font-mono text-xs font-bold shadow-[0_0_20px_rgba(196,0,36,0.3)]"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD RÉSUMÉ</span>
          </a>
        </div>
      )}
    </header>
  );
}
