"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, ShieldCheck, Eye, HelpCircle } from "iconoir-react";

export default function AccessibilityPage() {
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
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Accessibility Architecture // WCAG 2.2 Level AA &amp; ADA Title III Standard</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-normal uppercase tracking-wider text-white mb-4">
            Digital Accessibility Statement
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Effective Date: November 17, 2026 | Last Updated: November 17, 2026 | New York, USA
          </p>
        </div>

        {/* White Contrast Commitment Card */}
        <div className="vortex-card-white p-6 sm:p-8 rounded-3xl mb-10 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black mb-2">
                Commitment to Universal Digital Access
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-body">
                <strong>SJ INFOTECH SOLUTIONS LLC</strong> is dedicated to ensuring equal digital access and seamless
                usability for all visitors, including individuals with disabilities. We actively conform our web
                experience to the <strong>Americans with Disabilities Act (ADA Title III)</strong> and the{" "}
                <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Capabilities in Vortex Glass Cards */}
        <div className="space-y-8">
          {/* Section: Core Features */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Core Accessibility Capabilities</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs uppercase tracking-wider text-white font-bold block mb-1">
                  Full Keyboard Operability
                </span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Every interactive control, navigation link, modal dialog, and input element is fully operable via
                  standard Tab, Enter, Spacebar, and Escape keys with high-visibility focus indicators.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs uppercase tracking-wider text-white font-bold block mb-1">
                  Reduced Motion Honored
                </span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  We strictly respect the <code>prefers-reduced-motion</code> operating system setting. Fluid cursor
                  simulations, background ASCII animations, and kinetic transitions gracefully degrade to static states.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs uppercase tracking-wider text-white font-bold block mb-1">
                  Contrast Ratio Standards
                </span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Body copy, UI labels, and navigational tokens exceed the WCAG 2.2 Level AA 4.5:1 minimum contrast
                  threshold against our pure black (#000000) obsidian canvas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs uppercase tracking-wider text-white font-bold block mb-1">
                  Screen Reader Semantics
                </span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Constructed with semantic HTML5 landmarks, WAI-ARIA labels, live region announcements, and meaningful
                  image alternative text for screen readers including NVDA, JAWS, and VoiceOver.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Continuous Auditing */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              <span>Continuous Auditing &amp; Testing Methodology</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Our engineering lifecycle includes regular automated accessibility test suites alongside manual keyboard
              walkthroughs and assistive technology validation across major browsers and operating systems.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We proactively test dynamic elements, such as our consent modals and interactive data accordions, to ensure
              focus management and screen reader compatibility are never compromised during site updates.
            </p>
          </div>

          {/* Section: Feedback & Contact */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span>Accessibility Feedback &amp; Assistance</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              If you encounter any accessibility barrier on our website, or need documentation provided in an alternative
              format, our Digital Accessibility Coordinator is ready to assist:
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-mono space-y-1">
              <p><span className="text-neutral-500">Coordinator:</span> Digital Accessibility Officer</p>
              <p><span className="text-neutral-500">Direct Email:</span> <a href="mailto:accessibility@sjinfotechus.com" className="text-cyan-400 hover:underline">accessibility@sjinfotechus.com</a></p>
              <p><span className="text-neutral-500">Entity:</span> SJ Infotech Solutions LLC</p>
              <p><span className="text-neutral-500">Service Hours:</span> Monday through Friday, 9:00 AM – 6:00 PM EST (Response within 48 business hours)</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
