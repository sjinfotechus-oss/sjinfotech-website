"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, NavArrowRight, Activity, User } from "iconoir-react";
import GradientASCII from "./GradientASCII";
import PartnerLogos from "./PartnerLogos";

export default function Chapter01Thesis() {
  return (
    <section
      id="hero"
      className="relative min-h-[920px] pt-32 pb-20 flex flex-col items-center justify-between overflow-hidden border-b border-white/10"
    >
      {/* Interactive GradientASCII Hero Background (React Bits Exact Palette) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto z-0">
        <GradientASCII
          colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.85}
          gradientOpacity={0.9}
          glow={0.25}
          mouseInteraction={true}
          clickEffect="wave"
        />
      </div>

      {/* Seamless Base Blend to Next Chapter */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" />

      {/* Symmetrical Left Cybernetic HUD Bracket (Vortex signature style) */}
      <div className="hidden xl:block absolute left-8 top-32 bottom-32 w-48 pointer-events-none z-10 opacity-30">
        <svg viewBox="0 0 160 700" fill="none" className="w-full h-full stroke-white/40">
          <path d="M 140 0 L 20 0 L 20 280 L 80 340 L 20 400 L 20 700 L 140 700" strokeWidth="1" />
          <circle cx="20" cy="280" r="2.5" fill="#ffffff" />
          <circle cx="80" cy="340" r="3" fill="#ffffff" />
          <circle cx="20" cy="400" r="2.5" fill="#ffffff" />
          <line x1="10" y1="20" x2="30" y2="20" strokeWidth="1.5" stroke="#ffffff" />
          <line x1="10" y1="35" x2="25" y2="35" strokeWidth="1" stroke="#ffffff" />
          <line x1="10" y1="50" x2="20" y2="50" strokeWidth="1" stroke="#ffffff" />
        </svg>
      </div>

      {/* Symmetrical Right Cybernetic HUD Bracket (Vortex signature style) */}
      <div className="hidden xl:block absolute right-8 top-32 bottom-32 w-48 pointer-events-none z-10 opacity-30">
        <svg viewBox="0 0 160 700" fill="none" className="w-full h-full stroke-white/40">
          <path d="M 20 0 L 140 0 L 140 280 L 80 340 L 140 400 L 140 700 L 20 700" strokeWidth="1" />
          <circle cx="140" cy="280" r="2.5" fill="#ffffff" />
          <circle cx="80" cy="340" r="3" fill="#ffffff" />
          <circle cx="140" cy="400" r="2.5" fill="#ffffff" />
          <line x1="130" y1="20" x2="150" y2="20" strokeWidth="1.5" stroke="#ffffff" />
          <line x1="135" y1="35" x2="150" y2="35" strokeWidth="1" stroke="#ffffff" />
          <line x1="140" y1="50" x2="150" y2="50" strokeWidth="1" stroke="#ffffff" />
        </svg>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* 3D Monogram Glowing Monogram (Clean Floating Style) */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:opacity-100 transition-opacity opacity-75" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <Image
              src="/assets/sj-logo-3d.png?v=3"
              alt="SJ Monogram"
              width={96}
              height={96}
              unoptimized
              className="w-full h-full object-contain filter drop-shadow-[0_8px_32px_rgba(0,229,255,0.45)]"
              priority
            />
          </div>
        </div>

        {/* Headline in Michroma Font (Vortex Typography with sharp contrast) */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-wider text-white leading-[1.15] max-w-4xl mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          Engineering Intelligent Systems <br className="hidden sm:inline" />
          Into Independent Ventures
        </h1>

        {/* Subtitle in Clean Poppins */}
        <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Eliminate algorithmic prejudice with our proprietary bias-detection engine. We ensure every data point is
          processed fairly and transparently into autonomous enterprise architectures.
        </p>

        {/* Referral Pill Capsule Button Group (Exact Match to User's Referral Image) */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-[#0c0d1c]/80 border border-violet-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] mb-16">
          <a
            href="#about"
            className="group px-6 py-2.5 rounded-full bg-white/[0.12] hover:bg-white/[0.18] border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center gap-2.5 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
          >
            <span>Get started now</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#service"
            className="px-6 py-2.5 rounded-full text-neutral-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
          >
            Explore Services
          </a>
        </div>

        {/* Floating Social Proof Widgets (Vortex Hero Elements with Iconoir) */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-16">
          {/* Left Widget: 200+ Trusted by Clients */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full ring-2 ring-black bg-neutral-900 border border-white/20 flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-neutral-300" />
                </div>
                <div className="h-8 w-8 rounded-full ring-2 ring-black bg-neutral-800 border border-white/20 flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-neutral-200" />
                </div>
                <div className="h-8 w-8 rounded-full ring-2 ring-black bg-neutral-900 border border-white/20 flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-neutral-300" />
                </div>
              </div>
              <div>
                <p className="font-display text-xs font-bold text-white tracking-wide">200+</p>
                <p className="text-[11px] font-body text-neutral-400">Trusted by Clients Worldwide</p>
              </div>
            </div>
            <a href="#about" className="text-xs font-body text-neutral-400 hover:text-white flex items-center gap-1">
              <span>See More</span>
              <NavArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Widget: High Performance Telemetry */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                <Activity className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="font-display text-xs font-bold text-white tracking-wide">US-EAST (NYC)</p>
                <p className="text-[11px] font-body text-neutral-400">Global Edge Architecture</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
              99.9% Uptime
            </span>
          </div>
        </div>

        {/* Bottom Client Logos (Authentic Vector Partner Badges) */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col items-center">
          <p className="text-[11px] font-body text-neutral-500 mb-6 tracking-wider uppercase">
            Trusted by innovative teams worldwide
          </p>
          <PartnerLogos />
        </div>
      </div>
    </section>
  );
}
