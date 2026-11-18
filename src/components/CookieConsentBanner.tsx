"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check } from 'iconoir-react';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sj_cookie_consent");
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: "all" | "essential") => {
    localStorage.setItem("sj_cookie_consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="p-5 rounded-2xl sj-glass-card border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#070b14]/95 backdrop-blur-2xl">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Privacy-First Architecture</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              We use strictly necessary edge security tokens and cookieless Cloudflare telemetry. We never deploy
              advertising cookies or sell consumer personal data.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
          <Link href="/cookie-policy" className="text-[11px] font-mono text-cyan-400 hover:underline">
            Read Cookie Policy
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleAccept("essential")}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={() => handleAccept("all")}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500 text-black font-bold hover:bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.4)] transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
