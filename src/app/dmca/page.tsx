"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Copyright, ShieldCheck, Page, CheckCircle } from "iconoir-react";

export default function DmcaPage() {
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
            <Copyright className="w-3.5 h-3.5 text-cyan-400" />
            <span>Intellectual Property Governance // 17 U.S.C. § 512 Safe Harbor</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-normal uppercase tracking-wider text-white mb-4">
            DMCA Copyright Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Effective Date: November 17, 2026 | Last Updated: November 17, 2026 | New York, USA
          </p>
        </div>

        {/* White Contrast Designated Agent Card */}
        <div className="vortex-card-white p-6 sm:p-8 rounded-3xl mb-10 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black mb-2">
                Designated DMCA Copyright Agent
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-body mb-3">
                <strong>SJ INFOTECH SOLUTIONS LLC</strong> respects the intellectual property rights of creators and
                expects all users and contributors to do the same. In compliance with Title 17, United States Code,
                Section 512(c)(2), notifications of claimed copyright infringement must be submitted directly to our
                designated agent:
              </p>
              <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-300 text-xs font-mono text-black space-y-0.5">
                <p><strong>Designated Agent:</strong> Copyright &amp; Legal Compliance Officer</p>
                <p><strong>Entity:</strong> SJ Infotech Solutions LLC</p>
                <p><strong>Direct Inquiries:</strong> dmca@sjinfotechus.com</p>
                <p><strong>Jurisdiction:</strong> New York, NY, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Details in Vortex Glass Cards */}
        <div className="space-y-8">
          {/* Section: Statutory Notice Requirements */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <Page className="w-5 h-5 text-cyan-400" />
              <span>Filing a Formal Takedown Notice</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              To expedite processing under 17 U.S.C. § 512(c)(3), your written notice must include substantially the
              following:
            </p>
            <ol className="space-y-3 text-xs sm:text-sm text-neutral-300 font-body">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs text-cyan-400 font-bold shrink-0">A.</span>
                <span>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs text-cyan-400 font-bold shrink-0">B.</span>
                <span>Identification of the copyrighted work claimed to have been infringed, or a representative list of such works.</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs text-cyan-400 font-bold shrink-0">C.</span>
                <span>Identification of the material claimed to be infringing or to be the subject of infringing activity, including specific URLs.</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs text-cyan-400 font-bold shrink-0">D.</span>
                <span>Information reasonably sufficient to permit us to contact you, such as legal name, address, telephone number, and email.</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs text-cyan-400 font-bold shrink-0">E.</span>
                <span>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="font-display text-xs text-cyan-400 font-bold shrink-0">F.</span>
                <span>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</span>
              </li>
            </ol>
          </div>

          {/* Section: Counter-Notification & Repeat Infringer */}
          <div className="vortex-card p-6 sm:p-8 rounded-3xl">
            <h2 className="font-display text-lg uppercase tracking-wide text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Counter-Notification &amp; Repeat Infringer Policy</span>
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              If material you posted was removed pursuant to a DMCA notice and you believe it was mistakenly identified
              or non-infringing, you may submit a counter-notification pursuant to 17 U.S.C. § 512(g)(3) to our
              Designated Agent.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              <strong className="text-white">Repeat Infringer Policy:</strong> In accordance with Section 512(i) of the
              DMCA, SJ Infotech Solutions LLC maintains an explicit policy providing for the termination, in appropriate
              circumstances, of users, waitlist accounts, or partners who are determined to be repeat infringers of
              copyrighted works.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
