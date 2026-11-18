import React from "react";
import Navbar from "@/components/Navbar";
import Chapter01Thesis from "@/components/Chapter01Thesis";
import Chapter02Engine from "@/components/Chapter02Engine";
import Chapter03Ynadan from "@/components/Chapter03Ynadan";
import Chapter04InsightsFaq from "@/components/Chapter04InsightsFaq";
import Chapter05ContactGlobe from "@/components/Chapter05ContactGlobe";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-black">
      {/* Global Glass Floating Navbar */}
      <Navbar />

      {/* Main Chaptered Content */}
      <main id="main-content" className="flex-1">
        {/* Chapter 01: The Venture Thesis */}
        <Chapter01Thesis />

        {/* Chapter 02: Vision, Mission & The Venture Engine */}
        <Chapter02Engine />

        {/* Chapter 03: Flagship Venture Showcase — YNADAN */}
        <Chapter03Ynadan />

        {/* Chapter 04: Studio Insights, Visual Vault & FAQ */}
        <Chapter04InsightsFaq />

        {/* Chapter 05: New York Global Footprint & Executive Dispatch */}
        <Chapter05ContactGlobe />
      </main>

      {/* Global Legal & Telemetry Footer */}
      <Footer />

      {/* Privacy-Preserving Cookie Banner */}
      <CookieConsentBanner />
    </div>
  );
}
