"use client";

import React from "react";
import { ArrowUpRight, Cpu, Shield, Network, NavArrowRight } from 'iconoir-react';

export default function Chapter02Engine() {
  return (
    <section id="about" className="relative py-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ================= VORTEX "ABOUT US" ================= */}
        <div className="mb-28">
          <div className="flex flex-col items-start mb-12">
            <div className="vortex-pill mb-4">
              <span>About us</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wider text-white max-w-4xl leading-tight">
              Architecting the Future of <br />
              Human-Centric Intelligence
            </h2>
            <p className="font-body text-neutral-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
              Empowering every decision with real-time, ethical intelligence. We engineer high-performance platforms
              that operate independently on a global backbone.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-body text-white">
                High Performance
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-body text-white">
                Global Backbone for Data
              </span>
            </div>
          </div>

          {/* 3 Metric Cards (Exact Vortex Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* White Contrast Card (Signature Vortex Style) */}
            <div className="vortex-card-white p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-body uppercase tracking-wider text-neutral-600 block mb-2">
                  Data Volume
                </span>
                <p className="font-display text-4xl sm:text-5xl font-normal text-black mb-4">
                  500TB+
                </p>
                <h3 className="font-display text-sm font-bold text-black uppercase tracking-wide mb-2">
                  Data Orchestrated
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  Streamline your data flow with automated pipelines that collect, clean, and unify data from any
                  source.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-300 flex items-center justify-between text-xs font-body font-semibold text-black mt-6">
                <span>Explore Pipeline</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Dark Card 2: 99.9% */}
            <div className="vortex-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-body uppercase tracking-wider text-neutral-400 block mb-2">
                  Reliability
                </span>
                <p className="font-display text-4xl sm:text-5xl font-normal text-white mb-4">
                  99.9%
                </p>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-2">
                  Uptime Reliability
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Automatically scaling cloud-native edge infrastructure for consistent performance under intense
                  demands.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-body text-neutral-300 mt-6">
                <span>Enterprise SLA</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Dark Card 3: 40% */}
            <div className="vortex-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-body uppercase tracking-wider text-neutral-400 block mb-2">
                  Speed
                </span>
                <p className="font-display text-4xl sm:text-5xl font-normal text-white mb-4">
                  40%
                </p>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-2">
                  Latency Reduction
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Transform live streaming data into real-time, actionable insights with ultra-low latency analytics.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-body text-neutral-300 mt-6">
                <span>Zero Cold Start</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= VORTEX "WHY CHOOSE US" (BENTO GRID) ================= */}
        <div>
          <div className="flex flex-col items-start mb-12">
            <div className="vortex-pill mb-4">
              <span>Why Choose Us</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-normal uppercase tracking-wider text-white max-w-3xl">
              Scale Without Limits
            </h2>
            <p className="font-body text-neutral-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
              Discover why leading companies trust our infrastructure to power their most critical initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Card 1: Scale Without Limits */}
            <div className="md:col-span-6 p-8 rounded-3xl vortex-card flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-3">
                  Scale Without Limits
                </h3>
                <p className="font-body text-neutral-400 text-sm leading-relaxed mb-6">
                  Automatically scaling cloud-native architecture for consistent performance across distributed edge
                  nodes.
                </p>
              </div>
              <a
                href="#service"
                className="inline-flex items-center gap-2 text-xs font-body text-white hover:underline"
              >
                <span>Explore Scalability</span>
                <NavArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bento Card 2: Enterprise-Grade Security */}
            <div className="md:col-span-6 p-8 rounded-3xl vortex-card flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-3">
                  Enterprise-Grade Security
                </h3>
                <p className="font-body text-neutral-400 text-sm leading-relaxed mb-6">
                  Protect sensitive assets with end-to-end encryption, automated compliance, and rigorous audit trails.
                </p>
              </div>
              <a
                href="/privacy-policy"
                className="inline-flex items-center gap-2 text-xs font-body text-white hover:underline"
              >
                <span>Explore Compliance</span>
                <NavArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bento Card 3: 150+ Easy Integration */}
            <div className="md:col-span-12 p-8 rounded-3xl vortex-card flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
                  <Network className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">150+</span>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide mt-0.5">
                    Easy Integration Supported
                  </h4>
                  <p className="font-body text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed">
                    Connect instantly with pre-built integrations into databases, cloud storage, and live protocols.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="vortex-btn-secondary !text-xs shrink-0"
              >
                Explore Integrations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
