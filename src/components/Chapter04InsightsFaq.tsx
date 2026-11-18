"use client";

import React, { useState } from "react";
import { NavArrowDown, NavArrowRight, Star } from 'iconoir-react';

export default function Chapter04InsightsFaq() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: "01",
      title: "Connect Your Sources",
      desc: "Seamlessly connect databases, cloud storage, and live streams into a centralized hub with minimal code.",
    },
    {
      num: "02",
      title: "Automated Processing",
      desc: "Streamline data flow with automated pipelines that collect, clean, and validate data from any source.",
    },
    {
      num: "03",
      title: "Model Training",
      desc: "Train enterprise-grade machine learning models and intelligent multi-agent systems with verified datasets.",
    },
    {
      num: "04",
      title: "Deployment & Insight",
      desc: "Deploy sovereign services and monitor real-time outputs with enterprise governance and ultra-low latency.",
    },
  ];

  const testimonials = [
    {
      stars: 5,
      title: "Game Changer for Big Data",
      quote:
        "Integrating this infrastructure allowed us to process massive datasets in half the time. The scalability is unmatched for enterprise-level demands.",
      author: "Marcus Chen",
      role: "CTO at TechVanguard",
    },
    {
      stars: 5,
      title: "Seamless Implementation",
      quote:
        "We saved hundreds of hours and cut overhead with automated cleaning and transparent treasury coordination.",
      author: "David Miller",
      role: "Manager at CloudScale",
      highlight: true,
    },
    {
      stars: 5,
      title: "Autonomous Velocity",
      quote:
        "Our development velocity tripled within the first quarter of deployment. The modular architecture is exceptional.",
      author: "Elena Rostova",
      role: "Lead Architect at Nexus Systems",
    },
  ];

  const faqs = [
    {
      q: "What differentiates SJ Infotech Solutions LLC from an IT consulting firm or dev agency?",
      a: "SJ Infotech Solutions LLC is an independent technology venture studio and digital product enterprise, not an outsourcing or services vendor. We do not sell developer hours or take on client work for hire. We conceive, architect, and incubate our own proprietary software products and autonomous companies, such as our flagship venture Ynadan.",
    },
    {
      q: "What is Ynadan, and when will it be commercially available?",
      a: "Ynadan is an AI-native financial operating system and micro-community coordination platform designed for decentralized groups, DAOs, and creator networks. It is currently in active closed architectural prototyping. Interested community leaders, builders, and strategic partners can join our Development Dispatch to receive technical updates and early access invitations.",
    },
    {
      q: "Is Ynadan offering a token, cryptocurrency, or investment opportunity?",
      a: "No. Ynadan is strictly a software architecture project in active development. We make no offers of tokens, cryptocurrencies, financial securities, or promises of investment yields or APY. All materials on this site are for conceptual and informational evaluation.",
    },
    {
      q: "Where is SJ Infotech Solutions LLC based, and how can we partner?",
      a: "The enterprise is incorporated as a Limited Liability Company (LLC) in the State of New York, USA. We welcome strategic dialogues with institutional research labs, distributed community leaders, and prospective technical EIRs through our secure inquiry portal.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ================= VORTEX "HOW IT WORKS" ================= */}
        <div className="mb-28">
          <div className="flex flex-col items-start mb-12">
            <div className="vortex-pill mb-4">
              <span>How It Work</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wider text-white max-w-4xl leading-tight">
              From Raw Data to Intelligence <br />
              in Four Steps
            </h2>
            <p className="font-body text-neutral-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
              Our streamlined process removes technical complexity, enabling faster deployment of powerful AI
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 4 Interactive Step Accordions */}
            <div className="lg:col-span-7 space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                    activeStep === idx
                      ? "bg-[#11141b] border-white/40 shadow-xl"
                      : "bg-[#07090d] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-display text-base font-bold ${
                        activeStep === idx ? "text-white" : "text-neutral-500"
                      }`}
                    >
                      {step.num}
                    </span>
                    <NavArrowRight
                      className={`w-4 h-4 transition-transform ${
                        activeStep === idx ? "rotate-90 text-white" : "text-neutral-600"
                      }`}
                    />
                  </div>

                  <h3 className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>

                  {activeStep === idx && (
                    <p className="font-body text-neutral-400 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200">
                      {step.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Sleek Telemetry Stage */}
            <div className="lg:col-span-5 p-8 rounded-3xl vortex-card flex flex-col justify-between aspect-square max-h-[420px]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="font-display text-xs text-white uppercase tracking-wider">Pipeline Node</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                    STEP {steps[activeStep].num} ACTIVE
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-3">
                  {steps[activeStep].title}
                </h4>
                <p className="font-body text-xs text-neutral-400 leading-relaxed mb-6">
                  {steps[activeStep].desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-xs font-body text-neutral-400">
                  <span>Execution Stream</span>
                  <span className="text-white font-medium font-mono">{(activeStep + 1) * 25}% Complete</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-300"
                    style={{ width: `${(activeStep + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= VORTEX "TESTIMONIALS" ================= */}
        <div id="testimonial" className="mb-28">
          <div className="flex flex-col items-start mb-12">
            <div className="vortex-pill mb-4">
              <span>Testimonial</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wider text-white max-w-4xl leading-tight">
              Trusted by Innovators <br />
              Around the Globe
            </h2>
            <p className="font-body text-neutral-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
              Hear from engineering teams and business leaders transforming operations with our AI data
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all ${
                  t.highlight
                    ? "vortex-card-white"
                    : "vortex-card"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 fill-current ${t.highlight ? "text-black" : "text-white"}`}
                      />
                    ))}
                    <span
                      className={`text-xs font-mono font-bold ml-2 ${
                        t.highlight ? "text-neutral-800" : "text-white"
                      }`}
                    >
                      5.0
                    </span>
                  </div>

                  <h3
                    className={`font-display text-sm font-bold uppercase tracking-wide mb-3 ${
                      t.highlight ? "text-black" : "text-white"
                    }`}
                  >
                    {t.title}
                  </h3>

                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed mb-6 ${
                      t.highlight ? "text-neutral-700" : "text-neutral-400"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div
                  className={`pt-4 border-t flex flex-col ${
                    t.highlight ? "border-neutral-300" : "border-white/10"
                  }`}
                >
                  <span
                    className={`font-display text-xs font-bold uppercase tracking-wider ${
                      t.highlight ? "text-black" : "text-white"
                    }`}
                  >
                    {t.author}
                  </span>
                  <span
                    className={`font-body text-[11px] ${t.highlight ? "text-neutral-600" : "text-neutral-500"}`}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="vortex-pill mb-4">
              <span>FAQ</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal uppercase tracking-wider text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-2xl vortex-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <NavArrowDown
                    className={`w-4 h-4 text-white shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 font-body text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
