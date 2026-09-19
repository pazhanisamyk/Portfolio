"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sfx } from "@/lib/cyber-sfx";
import {
  Terminal,
  Send,
  Mail,
  Phone,
  Globe,
  Copy,
  CheckCircle2,
  FileText,
  MapPin,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Radio,
  ExternalLink
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

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  const handleCopyEmail = () => {
    sfx.playBeep(1100, 0.06);
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sfx.playModalOpen();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setTransmissionSuccess(true);
      sfx.playBeep(880, 0.15);
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        `[OPPORTUNITY] ${formData.subject || "Full Stack Engineering Role"}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-22 sm:py-26 px-6 sm:px-8 lg:px-10 xl:px-16 max-w-[104rem] w-full mx-auto z-10 select-none flex flex-col justify-between overflow-hidden"
    >
      {/* 1. SEPARATE TOP SECTION HEADER (Standardized with all other sections) */}
      <div className="pt-4 sm:pt-8 mb-8 sm:mb-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Tracking Monospace Subtitle */}
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#ff2a51] animate-pulse shadow-[0_0_8px_#ff003c]" />
              <span className="text-[#ff3b5c] font-bold tracking-[0.25em] uppercase">
                // CONTACT //
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-oswald text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] uppercase leading-none">
              <span>LET&apos;S WORK </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ff8a00 45%, #ff3b5c 80%, #e0002a 100%)",
                }}
              >
                TOGETHER<span className="text-[#ff003c] drop-shadow-[0_0_20px_#ff003c]">.</span>
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff9d]" />
            <span className="text-white font-bold tracking-wider">09 // DIRECT UPLINK MATRIX</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTACT MATRIX (Left Stacked Glass Rows + Right Encrypted Terminal) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 my-auto py-4 items-start w-full">
        {/* Left Column: Stacked Cyber Contact Detail Rows */}
        <div className="lg:col-span-6 space-y-3 font-mono text-xs w-full">
          {/* EMAIL ROW */}
          <div
            onMouseEnter={() => sfx.playHover()}
            className="group p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-white/[0.06] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_25px_rgba(255,0,60,0.2)] w-full"
          >
            <div className="flex items-center gap-3.5 truncate">
              <span className="text-[#ff3b5c] font-bold tracking-wider uppercase text-[10px] sm:text-[11px] w-20 shrink-0 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff2a51]" />
                <span>EMAIL</span>
              </span>
              <a
                href={`mailto:${personal.email}`}
                onClick={() => sfx.playClick()}
                className="text-neutral-200 hover:text-white font-semibold text-xs sm:text-[13px] truncate transition-colors"
              >
                {personal.email}
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              data-magnetic
              className="p-1.5 sm:p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white shrink-0 transition-colors cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* WHATSAPP ROW */}
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="group p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-white/[0.06] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_25px_rgba(0,255,157,0.2)] cursor-pointer block w-full"
          >
            <div className="flex items-center gap-3.5 truncate">
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-[10px] sm:text-[11px] w-20 shrink-0 flex items-center gap-1.5">
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>WHATSAPP</span>
              </span>
              <span className="text-neutral-200 group-hover:text-emerald-400 font-semibold text-xs sm:text-[13px] truncate transition-colors">
                {personal.phone}
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 group-hover:underline flex items-center gap-1 shrink-0">
              <span>CHAT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </span>
          </a>

          {/* GITHUB ROW */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="group p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-white/[0.06] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_25px_rgba(255,0,60,0.2)] cursor-pointer block w-full"
          >
            <div className="flex items-center gap-3.5 truncate">
              <span className="text-[#ff3b5c] font-bold tracking-wider uppercase text-[10px] sm:text-[11px] w-20 shrink-0 flex items-center gap-1.5">
                <GitHubIcon className="w-3.5 h-3.5 text-[#ff2a51]" />
                <span>GITHUB</span>
              </span>
              <span className="text-neutral-200 group-hover:text-white font-semibold text-xs sm:text-[13px] truncate transition-colors">
                github.com/pazhanisamyk
              </span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* LINKEDIN ROW */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="group p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-white/[0.06] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-blue-500/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_25px_rgba(59,130,246,0.2)] cursor-pointer block w-full"
          >
            <div className="flex items-center gap-3.5 truncate">
              <span className="text-blue-400 font-bold tracking-wider uppercase text-[10px] sm:text-[11px] w-20 shrink-0 flex items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LINKEDIN</span>
              </span>
              <span className="text-neutral-200 group-hover:text-blue-400 font-semibold text-xs sm:text-[13px] truncate transition-colors">
                linkedin.com/in/pazhanik
              </span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* PHONE CALL ROW */}
          <div
            onMouseEnter={() => sfx.playHover()}
            className="group p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-white/[0.06] via-white/[0.01] to-black/25 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_25px_rgba(0,255,157,0.18)] w-full"
          >
            <div className="flex items-center gap-3.5 truncate">
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-[10px] sm:text-[11px] w-20 shrink-0 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>PHONE</span>
              </span>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="text-neutral-200 hover:text-emerald-400 font-semibold text-xs sm:text-[13px] truncate transition-colors"
              >
                {personal.phone}
              </a>
            </div>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              data-magnetic
              className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold shrink-0 hover:bg-emerald-900/60 transition-colors"
            >
              CALL
            </a>
          </div>

          {/* RESUME DOWNLOAD ROW */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
            onMouseEnter={() => sfx.playHover()}
            className="group p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#c40024]/20 via-[#e0002a]/15 to-black/25 backdrop-blur-2xl border border-[#ff003c]/50 hover:border-[#ff003c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,0,60,0.3)] cursor-pointer block w-full"
          >
            <div className="flex items-center gap-3.5 truncate">
              <span className="text-amber-400 font-bold tracking-wider uppercase text-[10px] sm:text-[11px] w-20 shrink-0 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>RÉSUMÉ</span>
              </span>
              <span className="text-white font-bold text-xs sm:text-[13px] truncate">
                DOWNLOAD OFFICIAL RESUME (PDF)
              </span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a51] group-hover:scale-110 transition-transform shrink-0" />
          </a>
        </div>

        {/* Right Column: Encrypted Transmission Terminal Form */}
        <div className="lg:col-span-6 bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/25 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-white/20 p-5 sm:p-6 lg:p-7 relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_15px_35px_rgba(0,0,0,0.45)] transition-all duration-300 w-full overflow-hidden">
          {/* Top Specular Glare Line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-neutral-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <Terminal className="w-3.5 h-3.5 text-[#ff2a51]" />
              <span className="font-bold text-[11px] sm:text-xs">ENCRYPTED MESSAGE PROTOCOL</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE // DISPATCH READY</span>
            </div>
          </div>

          {transmissionSuccess ? (
            <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3.5 animate-in fade-in duration-300">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-oswald text-white uppercase">
                TRANSMISSION DISPATCHED
              </h4>
              <p className="text-xs text-neutral-300 font-sans max-w-md mx-auto">
                Your message payload has been forwarded to Pazhanisamy K. You will receive an acknowledgment shortly.
              </p>
              <button
                onClick={() => {
                  setTransmissionSuccess(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                data-magnetic
                className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white cursor-pointer"
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-mono text-neutral-400 mb-1 uppercase">
                    YOUR NAME // IDENTIFIER *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-[#ff003c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-mono text-neutral-400 mb-1 uppercase">
                    YOUR EMAIL // RETURN ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-[#ff003c] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-mono text-neutral-400 mb-1 uppercase">
                  TRANSMISSION SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full Stack & Mobile Engineering Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-[#ff003c] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-mono text-neutral-400 mb-1 uppercase">
                  MESSAGE BODY // PAYLOAD *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project requirements, architecture scope, or role specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-[#ff003c] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                onMouseEnter={() => sfx.playHover()}
                data-magnetic
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c40024] via-[#e0002a] to-[#ff003c] text-white font-mono text-xs font-bold tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,60,0.35)] disabled:opacity-50 cursor-pointer"
              >
                {isSending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>TRANSMITTING PAYLOAD...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT ENCRYPTED MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-6 pb-2 border-t border-neutral-800/40 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500">
        <div>COMMUNICATION MATRIX // 24H SLA DISPATCH</div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>STATUS // AVAILABLE FOR IMPACT ROLES</span>
        </div>
      </div>
    </section>
  );
}
