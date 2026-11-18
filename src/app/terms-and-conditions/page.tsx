"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, WarningTriangle, Page, Building, CheckCircle } from "iconoir-react";

export default function TermsAndConditionsPage() {
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
            <span>Legal Governance // State of New York Jurisdiction</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-normal uppercase tracking-wider text-white mb-4">
            Terms &amp; Conditions of Service
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Effective Date: November 17, 2026 | Last Updated: November 17, 2026 | New York, USA
          </p>
        </div>

        {/* White Contrast Binding Arbitration & Jurisdiction Card */}
        <div className="vortex-card-white p-6 sm:p-8 rounded-3xl mb-10 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black mb-2">
                Mandatory Binding Arbitration &amp; Class Action Waiver
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-body">
                Please review these terms carefully. Except for intellectual property infringement or equitable claims,
                any dispute arising under these terms shall be resolved exclusively through individual, confidential
                arbitration administered by the American Arbitration Association (AAA) in the County of New York, State
                of New York, USA. You agree to resolve disputes solely on an individual basis and waive any right to
                participate in class, collective, or representative actions.
              </p>
            </div>
          </div>
        </div>

        {/* Core Terms in Vortex Glass Cards */}
        <div className="space-y-8">
          {/* Section: Agreement to Terms */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Page className="w-5 h-5 text-cyan-400" />
              <span>Agreement to Terms &amp; Corporate Identity</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              These Terms and Conditions constitute a legally binding agreement between you and{" "}
              <strong>SJ INFOTECH SOLUTIONS LLC</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a New York limited
              liability enterprise headquartered in New York, NY.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              By accessing or using <strong>https://sjinfotechus.com</strong>, associated subdomains, or contacting our
              inquiry portals, you affirm that you have read, understood, and agree to be bound by these Terms and our
              Privacy Policy. If you do not agree, you must immediately discontinue all access to our digital property.
            </p>
          </div>

          {/* Section: Ynadan Venture Status */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl border-amber-500/30">
            <h2 className="font-display text-lg uppercase tracking-wide text-amber-300 mb-4 flex items-center gap-2">
              <WarningTriangle className="w-5 h-5 text-amber-400" />
              <span>Venture Status &amp; Ynadan Platform Disclaimer</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              SJ Infotech Solutions LLC is an independent technology venture studio that incubates proprietary software
              systems. Ynadan is an early-stage software concept in active architectural and prototype development.
            </p>
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-2">
              <p>
                <strong>No Financial Product or Security Offering:</strong> Nothing on this website constitutes an offer,
                solicitation, or recommendation to purchase securities, tokens, investment contracts, commodities, or
                financial instruments of any kind.
              </p>
              <p>
                Neither SJ Infotech Solutions LLC nor Ynadan is registered with the SEC, CFTC, FINRA, or state securities
                commissions. Joining our Development Dispatch conveys no equity, ownership interest, governance rights, or
                contractual claim.
              </p>
            </div>
          </div>

          {/* Section: Intellectual Property */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-cyan-400" />
              <span>Intellectual Property &amp; Proprietary Rights</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              The Site, including its source code, kinetic WebGL visual shaders, typography, graphic marks, technical
              documentation, and trademarks—specifically including the <strong>SJ Monogram</strong>, the{" "}
              <strong>SJ INFOTECH SOLUTIONS</strong> wordmark, and the <strong>YNADAN</strong> project mark—are the
              exclusive intellectual property of SJ Infotech Solutions LLC, protected under United States and
              international copyright, trademark, and trade secret laws.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              No portion of the Site may be copied, reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any
              commercial purpose without our prior express written permission.
            </p>
          </div>

          {/* Section: Disclaimers & Limitations */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Disclaimers &amp; Limitation of Liability</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono leading-relaxed mb-4 uppercase">
              THE SITE AND ALL VENTURE MATERIALS ARE PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">
              To the fullest extent permitted by New York State law, in no event shall SJ Infotech Solutions LLC, its
              officers, directors, members, employees, or agents be liable to you or any third party for any indirect,
              consequential, exemplary, incidental, special, or punitive damages arising from your use of the site or
              reliance on any technical architectural preview.
            </p>
          </div>

          {/* Section: Legal Inquiries */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4">
              Governing Law &amp; Legal Notices
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, USA,
              without giving effect to any principles of conflicts of law.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-mono space-y-1">
              <p><span className="text-neutral-500">Corporate Entity:</span> SJ Infotech Solutions LLC</p>
              <p><span className="text-neutral-500">Headquarters:</span> New York, NY, USA</p>
              <p><span className="text-neutral-500">Legal Counsel:</span> <a href="mailto:legal@sjinfotechus.com" className="text-cyan-400 hover:underline">legal@sjinfotechus.com</a></p>
              <p><span className="text-neutral-500">Arbitration Forum:</span> American Arbitration Association (AAA), New York County, NY</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
