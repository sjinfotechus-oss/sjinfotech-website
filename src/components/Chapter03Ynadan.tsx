"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, WarningTriangle, Send, Database, Cpu, Activity, Spark } from 'iconoir-react';

export default function Chapter03Ynadan() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    roleType: "Community Leader",
    organizationName: "",
    consent: true,
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const services = [
    {
      title: "Data Orchestration",
      tag: "Automated Pipelines",
      icon: Database,
      desc: "Streamline your data flow with automated pipelines that collect, clean, and unify multi-currency treasury data from any source.",
    },
    {
      title: "Neural Infrastructure",
      tag: "Autonomous Layer",
      icon: Cpu,
      desc: "Architect an autonomous operating layer combining intelligent multi-agent treasury coordination and composable community primitives.",
      elevated: true,
    },
    {
      title: "Real-Time Analytics",
      tag: "Ultra-Low Latency",
      icon: Activity,
      desc: "Transform live streaming data into real-time, actionable insights with ultra-low latency analytics and conditional execution triggers.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/ynadan/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMessage("Transmission confirmed. You have been added to the Development Dispatch.");
        setFormData({
          fullName: "",
          email: "",
          roleType: "Community Leader",
          organizationName: "",
          consent: true,
        });
      } else {
        setStatusMessage(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setStatusMessage("Transmission error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="service" className="relative py-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ================= VORTEX "SERVICE" SECTION ================= */}
        <div className="flex flex-col items-start mb-16">
          <div className="vortex-pill mb-4">
            <span>Our Service</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wider text-white max-w-4xl leading-tight">
            Comprehensive Solutions <br />
            for the Intelligence Era
          </h2>
          <p className="font-body text-neutral-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
            We provide the end-to-end tools and infrastructure needed to turn complex data streams into high-performing
            autonomous software ventures.
          </p>
        </div>

        {/* 3 Service Cards (Exact Vortex Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {services.map((item, idx) => (
            <div
              key={item.title}
              className={`p-8 rounded-3xl flex flex-col justify-between group transition-all ${
                item.elevated
                  ? "bg-[#11141b] border border-white/30 shadow-2xl"
                  : "vortex-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/40" />
                </div>

                <span className="text-[11px] font-body uppercase tracking-wider text-neutral-400 block mb-2">
                  {item.tag}
                </span>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-3">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-body text-white group-hover:text-neutral-200">
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* ================= FLAGSHIP SHOWCASE: YNADAN ================= */}
        <div className="p-8 sm:p-12 rounded-3xl vortex-card border-white/20 relative">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-body text-neutral-300 mb-4">
              <Spark className="w-3.5 h-3.5 text-white" />
              <span>Flagship Incubation // Ynadan Platform</span>
            </div>

            <h3 className="font-display text-xl sm:text-3xl font-bold uppercase tracking-wide text-white mb-3">
              Ynadan Financial Operating System
            </h3>
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              An AI-native operating system for modern digital communities. Combining plain-language financial
              intelligence, rule-driven automated treasuries, and composable Web3 governance without manual overhead.
            </p>
          </div>

          {/* Legal Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3 text-xs text-neutral-400 leading-relaxed">
            <WarningTriangle className="w-4 h-4 text-white shrink-0 mt-0.5" />
            <span>
              <strong>Notice:</strong> Ynadan is an early-stage software concept in active development. No financial
              products, tokens, yields, or investment securities are offered or solicited.
            </span>
          </div>

          {/* Development Dispatch Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 font-body">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ynadan-name" className="block text-xs text-neutral-400 mb-1">
                  Full Name
                </label>
                <input
                  id="ynadan-name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="ynadan-email" className="block text-xs text-neutral-400 mb-1">
                  Email Address
                </label>
                <input
                  id="ynadan-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="vortex-btn-primary !text-xs !py-3 !px-6"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{loading ? "Transmitting..." : "Join Development Dispatch"}</span>
              </button>
            </div>

            {statusMessage && (
              <p className="text-xs text-neutral-300 font-mono mt-2">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
