"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Xmark } from "iconoir-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About us", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#090b14]/90 border border-violet-500/20 backdrop-blur-xl shadow-2xl shadow-black/80"
            : "bg-[#0c0d1c]/60 border border-white/10 backdrop-blur-md"
        }`}
      >
        {/* Brand Wordmark (Middle Aligned Text, No Logo) */}
        <Link
          href="/"
          className="flex items-center justify-center text-center group focus:outline-none focus:ring-2 focus:ring-white rounded-full px-2 py-1"
        >
          <span className="font-display text-sm font-bold tracking-wider text-white uppercase text-center leading-none flex items-center justify-center">
            SJ INFOTECH
          </span>
        </Link>

        {/* Center Referral-Style Segmented Navigation Capsule (Middle Aligned Text) */}
        <div className="hidden md:inline-flex items-center p-1 rounded-full bg-[#0a0c1a]/80 border border-violet-500/25 backdrop-blur-xl shadow-inner font-body">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-4 py-1.5 h-8 rounded-full text-xs transition-all duration-200 flex items-center justify-center text-center whitespace-nowrap leading-none ${
                  isActive
                    ? "bg-white/[0.12] text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] border border-white/15"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span className="text-center">{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4 font-body">
          <a
            href="#contact"
            className="text-xs text-neutral-400 hover:text-white transition-colors duration-200 px-3 py-1.5 text-center flex items-center justify-center leading-none"
          >
            Login
          </a>
          <a
            href="#about"
            className="px-5 py-2 rounded-full bg-white/[0.1] hover:bg-white/[0.18] border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-md group leading-none"
          >
            <span>Get started now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <Xmark className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0a0c16]/95 border border-white/15 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl flex flex-col gap-4 font-body animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                {activeSection === link.name && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                )}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a href="#contact" className="text-xs text-neutral-400">
              Login
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs"
            >
              Get started now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
