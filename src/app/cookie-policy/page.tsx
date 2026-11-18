"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle } from "iconoir-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-neutral-300 flex flex-col font-body selection:bg-cyan-400 selection:text-black">
      <Navbar />

      <main id="main-content" className="flex-1 pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Back Link Pill */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 hover:border-cyan-400/50 text-xs text-neutral-300 hover:text-white transition-all mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Flagship</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <div className="vortex-pill mb-4">
            <Cookie className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Telemetry &amp; Cookie Architecture</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-normal uppercase tracking-wider text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Effective Date: November 17, 2026 | Last Updated: November 17, 2026 | New York, USA
          </p>
        </div>

        {/* White Contrast Policy Overview Card */}
        <div className="vortex-card-white p-6 sm:p-8 rounded-3xl mb-10 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black mb-2">
                Privacy-First Technical Architecture
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-body">
                We believe in architectural data minimization. SJ Infotech Solutions LLC does not deploy invasive
                surveillance pixels, cross-domain behavioral advertising cookies, or third-party tracking scripts.
                Only essential technical tokens and opt-in telemetry are utilized.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections in Vortex Glass Cards */}
        <div className="space-y-8">
          {/* Section: What Are Cookies */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              What Are Cookies and Local Storage
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Cookies and local storage identifiers are compact data units placed on your device by websites to enable
              secure network routing, session state persistence, and client-side preference retention.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We operate strictly under opt-in privacy frameworks, ensuring non-essential cookies remain inactive until
              explicit affirmative consent is granted.
            </p>
          </div>

          {/* Section: Categories of Cookies Used */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-6">
              Categories of Cookies Deployed
            </h2>

            <div className="space-y-4">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-xs uppercase tracking-wider text-white font-bold">Strictly Necessary Cookies</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">Always Active</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Required for core infrastructure security, Cloudflare edge DDoS mitigation, bot challenge resolution,
                  and cookie consent persistence (`sj_cookie_consent`). These cookies cannot be switched off in our systems.
                </p>
              </div>

              {/* Performance */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-xs uppercase tracking-wider text-white font-bold">Functional &amp; Telemetry Cookies</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">Configurable</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Used solely for aggregated, privacy-preserving performance monitoring, verifying edge routing latencies,
                  and rendering fluid WebGL physics appropriately based on client capabilities.
                </p>
              </div>

              {/* Advertising */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-xs uppercase tracking-wider text-white font-bold">Targeting &amp; Advertising Cookies</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">None Deployed</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  We do not use advertising or marketing cookies, tracking pixels, or cross-device profiling algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Managing Preferences */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              Managing Your Preferences &amp; GPC Signals
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              You can adjust or revoke your cookie choices at any time through our footer consent link or directly in your
              browser settings. If your browser broadcasts a Global Privacy Control (GPC) signal, our servers detect
              and honor it automatically.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-mono space-y-1">
              <p><span className="text-neutral-500">Security Desk:</span> <a href="mailto:privacy@sjinfotechus.com" className="text-cyan-400 hover:underline">privacy@sjinfotechus.com</a></p>
              <p><span className="text-neutral-500">Jurisdiction:</span> New York, USA</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
