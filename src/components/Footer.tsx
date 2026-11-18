"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Instagram,
  Youtube,
  Linkedin,
  ShieldCheck,
  EyeClosed,
  CheckCircle,
  Xmark,
} from "iconoir-react";

export default function Footer() {
  const [gpcActive, setGpcActive] = useState(false);
  const [showOptOutModal, setShowOptOutModal] = useState(false);
  const [optOutConfirmed, setOptOutConfirmed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const gpc = (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl;
      if (gpc) setGpcActive(true);
    }
  }, []);

  const handleConfirmOptOut = () => {
    setOptOutConfirmed(true);
    setTimeout(() => {
      setShowOptOutModal(false);
    }, 1800);
  };

  const socialLinks = [
    { name: "X", icon: <X className="w-4 h-4" />, href: "https://x.com" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com" },
    { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="w-full bg-[#000000] text-neutral-400 font-body border-t border-neutral-900 pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Exact Vortex Tagline + Socials & Vortex Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16 sm:mb-20">
          {/* Left Column: Exact Vortex Mission Statement & Social Buttons */}
          <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-8">
            <p className="text-white text-base sm:text-lg font-normal leading-relaxed max-w-sm mb-6">
              Secure, scalable infrastructure powering next-generation, human-centric AI.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns: Exact Vortex Columns (Platform, Quick Links, Resources) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Column 1: Platform (Exact Vortex Strings) */}
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white text-sm tracking-tight mb-1">
                Platform
              </span>
              <a href="#service" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Neural Infrastructure
              </a>
              <a href="#service" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Data Orchestration
              </a>
              <a href="#service" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Real-Time Analytics
              </a>
              <a href="/privacy-policy" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Security &amp; Compliance
              </a>
            </div>

            {/* Column 2: Quick Links (Exact Vortex Strings) */}
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white text-sm tracking-tight mb-1">
                Quick Links
              </span>
              <a href="#hero" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                About us
              </a>
              <a href="#service" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Our Service
              </a>
              <a href="#contact" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Plans
              </a>
            </div>

            {/* Column 3: Resources (Exact Vortex Strings) */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="font-semibold text-white text-sm tracking-tight mb-1">
                Resources
              </span>
              <a href="#faq" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Help Center
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors inline-flex items-center"
              >
                <span>Career</span>
                <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                  We&apos;re hiring
                </span>
              </a>
              <a href="#how-it-works" className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Middle Tier: Gigantic Outline Typographic Watermark */}
        <div className="w-full text-center py-6 sm:py-10 select-none overflow-hidden border-b border-neutral-900">
          <span
            className="font-display font-black tracking-widest uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[150px] leading-none inline-block text-transparent"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
              letterSpacing: "0.15em",
            }}
          >
            SJ INFOTECH
          </span>
        </div>

        {/* Bottom Tier: Copyright & Compliance Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 SJ Infotech Solutions LLC. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Security
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-neutral-300 transition-colors">
              Terms of service
            </Link>
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Privacy policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-neutral-300 transition-colors">
              Cookie policy
            </Link>
            <Link href="/accessibility" className="hover:text-neutral-300 transition-colors">
              Accessibility
            </Link>
            <Link href="/dmca" className="hover:text-neutral-300 transition-colors">
              DMCA
            </Link>
            <button
              onClick={() => setShowOptOutModal(true)}
              className="text-cyan-400 hover:text-cyan-300 underline focus:outline-none inline-flex items-center gap-1.5"
            >
              <EyeClosed className="w-3.5 h-3.5" />
              <span>Do Not Sell or Share</span>
            </button>
          </div>
        </div>

        {/* Compliance Badges Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] font-mono text-neutral-500">
          <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800">
            • HQ: New York, NY, USA
          </span>
          <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-400" />
            <span>GPC Signal: {gpcActive ? "Active" : "Supported"}</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800">
            AAA Arbitration: NY Jurisdiction
          </span>
        </div>
      </div>

      {/* Vortex Styled CCPA / CPRA "Do Not Sell or Share" Modal */}
      {showOptOutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#000000] max-w-lg w-full border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.95)]">
            {/* Close Button */}
            <button
              onClick={() => setShowOptOutModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] border border-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <Xmark className="w-4 h-4" />
            </button>

            {/* Vortex Pill Header */}
            <div className="vortex-pill mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Consumer Privacy Governance // CCPA &amp; CPRA</span>
            </div>

            {/* Modal Title in Michroma */}
            <h3 className="font-display text-lg sm:text-xl font-normal uppercase tracking-wider text-white mb-3">
              Do Not Sell or Share My Information
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body mb-5">
              Under the California Consumer Privacy Act (CCPA/CPRA) and comprehensive US state privacy frameworks,
              you have the affirmative right to direct businesses not to sell or share your personal data with third parties.
            </p>

            {/* High Contrast Vortex Policy Statement */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/15 mb-6 text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Our Non-Sale Pledge</span>
              </div>
              <p className="leading-relaxed text-neutral-400">
                SJ Infotech Solutions LLC does not sell, rent, or lease consumer personal information. We do not disclose
                personal data to data brokers or cross-context behavioral advertising exchanges.
              </p>
              <p className="leading-relaxed text-neutral-400">
                Global Privacy Control (GPC) signals broadcast by your browser are recognized and honored automatically.
              </p>
            </div>

            {optOutConfirmed ? (
              <div className="p-4 rounded-2xl bg-white/[0.08] border border-cyan-400/50 text-xs font-mono text-cyan-300 text-center flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Preference Recorded: Persistent Opt-Out Affirmative.</span>
              </div>
            ) : (
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowOptOutModal(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white border border-white/15 hover:border-white/30 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmOptOut}
                  className="vortex-btn-primary !text-xs !py-2.5 !px-6"
                >
                  <span>Confirm Opt-Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
