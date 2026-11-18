"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Lock, Page, CheckCircle } from "iconoir-react";

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>US Regulatory & Consumer Privacy Governance</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-normal uppercase tracking-wider text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Effective Date: November 17, 2026 | Last Updated: November 17, 2026 | Jurisdiction: New York, USA
          </p>
        </div>

        {/* Key Statutory Disclosure (Vortex White Contrast Card) */}
        <div className="vortex-card-white p-6 sm:p-8 rounded-3xl mb-10 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black mb-2">
                Consumer Privacy & Non-Sale Pledge
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-body">
                SJ Infotech Solutions LLC does not sell, rent, or trade consumer personal information. We do not share
                personal data with third-party data brokers or across cross-context behavioral advertising networks.
                Global Privacy Control (GPC) signals are automatically honored as affirmative opt-out requests.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections in Vortex Glass Cards */}
        <div className="space-y-8">
          {/* Section: Introduction */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Page className="w-4 h-4 text-cyan-400" />
              <span>Introduction and Entity Scope</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              <strong>SJ INFOTECH SOLUTIONS LLC</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a New York limited
              liability enterprise headquartered in New York, NY, operates <strong>https://sjinfotechus.com</strong>.
              This Privacy Policy explains our practices regarding the collection, processing, and safeguarding of
              personal information in compliance with United States consumer privacy laws, including the California
              Consumer Privacy Act (CCPA/CPRA), Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Texas TDPSA, and COPPA.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              This policy applies to all visitors, commercial partners, waitlist participants, and prospective enterprise
              collaborators interacting with our digital flagship, API endpoints, or venture pipelines.
            </p>
          </div>

          {/* Section: Data Categories */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Categories of Data Collected</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="font-semibold text-white block mb-1">Identifiers</span>
                <p className="text-neutral-400 leading-relaxed">
                  Name, professional email address, and entity affiliation provided voluntarily through our waitlist and
                  executive dispatch portals.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="font-semibold text-white block mb-1">Network Telemetry</span>
                <p className="text-neutral-400 leading-relaxed">
                  Pseudonymized IP address, user-agent, referrers, and basic session diagnostics processed at Cloudflare
                  Edge points-of-presence for DDoS protection.
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-neutral-400">
              <strong className="text-white">Strict Sensitive Data Exclusion:</strong> We never collect Social Security
              numbers, government identifications, genetic or biometric data, precise geolocation, financial payment cards,
              or health records.
            </div>
          </div>

          {/* Section: US State Rights */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              Your United States Statutory Rights
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Under applicable US state privacy legislation (including California, Virginia, Colorado, Connecticut, Utah,
              and Texas), consumers hold specific rights regarding their personal data:
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span><strong>Right to Know &amp; Access:</strong> You may request disclosure of the specific categories of personal information collected and retained.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span><strong>Right to Deletion:</strong> You may request permanent erasure of personal data held within our systems, subject to legal recordkeeping obligations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span><strong>Right to Non-Discrimination:</strong> We will never deny services, charge differentiated pricing, or degrade system access for exercising statutory privacy rights.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span><strong>Universal Opt-Out Mechanisms (GPC):</strong> We recognize and automatically honor Global Privacy Control (GPC) signals emitted by modern browsers.</span>
              </li>
            </ul>
          </div>

          {/* Section: Contact & Inquiries */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              Privacy Officer &amp; Regulatory Inquiries
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              To exercise any statutory right, submit a verified consumer request, or communicate with our governance
              team:
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-mono space-y-1">
              <p><span className="text-neutral-500">Entity:</span> SJ Infotech Solutions LLC</p>
              <p><span className="text-neutral-500">Corporate Address:</span> New York, NY, USA</p>
              <p><span className="text-neutral-500">Privacy Desk:</span> <a href="mailto:privacy@sjinfotechus.com" className="text-cyan-400 hover:underline">privacy@sjinfotechus.com</a></p>
              <p><span className="text-neutral-500">Executive Office:</span> <a href="mailto:contact@sjinfotechus.com" className="text-cyan-400 hover:underline">contact@sjinfotechus.com</a></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
