"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  ArrowUp,
  Terminal,
  Shield,
  Globe,
  Mail,
  FileText,
  Radio
} from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.36.06-.55.27-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.11.14 1.44 2.2 3.5 3.08.49.21.87.33 1.17.43.49.16.94.13 1.29.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.97-.05-.09-.19-.14-.39-.24s-1.2-.59-1.39-.66c-.19-.07-.33-.1-.47.1-.14.21-.55.69-.67.83-.12.14-.24.16-.44.06-.2-.1-.85-.31-1.63-1-.6-.53-1.01-1.19-1.13-1.39-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.35.1-.12.14-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.64-1.55-.17-.41-.34-.35-.47-.36h-.4z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-neutral-900 bg-black/90 backdrop-blur-2xl text-neutral-400 py-12 px-6 sm:px-8 lg:px-12 xl:px-16 select-none">
      <div className="max-w-[104rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Telemetry */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ff003c]" />
            <span className="font-mono text-sm font-black text-white tracking-wider">
              {personal.codename}
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-xs font-mono text-neutral-400">
              {personal.role}
            </span>
          </div>
          <div className="text-[11px] font-mono text-neutral-500">
            LOCATED AT: {personal.coordinates} // TAMIL NADU, IN
          </div>
          <div className="text-[10px] font-mono text-neutral-600">
            © {new Date().getFullYear()} PAZHANISAMY K. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Center: Social Matrix Links */}
        <div className="flex items-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-blue-500/50 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-red-500/50 transition-all hover:shadow-[0_0_15px_rgba(255,0,60,0.3)]"
            title="GitHub Repository"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href={personal.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            title="Live Netlify Portfolio"
          >
            <Globe className="w-4 h-4" />
          </a>

          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-emerald-500/50 transition-all hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]"
            title="WhatsApp Direct Uplink"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-red-500/50 transition-all hover:shadow-[0_0_15px_rgba(255,0,60,0.3)]"
            title="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-500/50 transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            title="Official Resume PDF"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Return To Top Button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sfx.playHover()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/80 hover:bg-red-950/40 border border-neutral-800 hover:border-red-500/50 text-xs font-mono text-neutral-300 hover:text-white transition-all shadow-md group"
        >
          <span>RETURN TO TOP</span>
          <ArrowUp className="w-4 h-4 text-red-400 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
