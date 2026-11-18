"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Mail, Pin, Building, Send, ArrowRight, ShieldCheck } from 'iconoir-react';

export default function Chapter05ContactGlobe() {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaStatus, setCtaStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !globeContainerRef.current) return;

    const container = globeContainerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const radius = 6.5;
    const sphereGeo = new THREE.SphereGeometry(radius, 36, 36);
    const wireframeMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.45,
    });
    const globePoints = new THREE.Points(sphereGeo, wireframeMat);
    scene.add(globePoints);

    // New York Coordinates (~40.7° N, -74.0° W)
    const lat = 40.7128 * (Math.PI / 180);
    const lon = -74.006 * (Math.PI / 180);
    const x = radius * Math.cos(lat) * Math.sin(lon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.cos(lon);

    const beaconGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(x, y, z);
    globePoints.add(beacon);

    globePoints.rotation.y = -1.2;
    globePoints.rotation.x = 0.3;

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      globePoints.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      wireframeMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
      renderer.dispose();
    };
  }, []);

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaEmail) return;
    setCtaStatus("Transmitted. Our executive team will reach out shortly.");
    setCtaEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMsg("Inquiry transmitted securely. Our team will respond promptly.");
        setFormData({
          fullName: "",
          email: "",
          organization: "",
          message: "",
        });
      } else {
        setResponseMsg(data.error || "Failed to transmit message.");
      }
    } catch {
      setResponseMsg("Network communication error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ================= VORTEX EXACT CTA BOX ================= */}
        <div id="cta" className="mb-28 relative">
          {/* Subtle Backlight */}
          <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl pointer-events-none" />

          {/* Chamfered Box (Vortex Signature) */}
          <div className="relative p-8 sm:p-16 rounded-3xl bg-[#080a0e] border border-white/20 shadow-2xl flex flex-col items-center text-center">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wider text-white max-w-4xl leading-tight mb-4">
              Take the decisive step toward <br />
              data sovereignty and next-gen AI.
            </h2>

            <p className="font-body text-neutral-400 max-w-2xl text-xs sm:text-sm leading-relaxed mb-8">
              Leave fragmented data behind. Lead the intelligence revolution with a high-performance,
              enterprise-ready neural backbone.
            </p>

            <form onSubmit={handleCtaSubmit} className="w-full max-w-lg flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 rounded-full bg-black border border-white/20 text-white text-sm focus:outline-none focus:border-white font-body placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="vortex-btn-primary !px-7 !py-3.5 !text-xs uppercase tracking-wider shrink-0 w-full sm:w-auto"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {ctaStatus && (
              <p className="text-xs font-mono text-white mt-4 animate-in fade-in">{ctaStatus}</p>
            )}
          </div>
        </div>

        {/* ================= NEW YORK CORPORATE FOOTPRINT & CONTACT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3D Globe & HQ Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full aspect-square max-h-[360px] rounded-3xl p-1 bg-[#0a0c10] border border-white/10 overflow-hidden">
              <div
                ref={globeContainerRef}
                aria-hidden="true"
                className="w-full h-full rounded-[22px] overflow-hidden"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>NEW YORK, NY [40.7128° N, 74.0060° W]</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl vortex-card space-y-4 font-body">
              <div className="flex items-start gap-4">
                <Building className="w-5 h-5 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">Corporate Entity</h3>
                  <p className="font-mono text-xs text-neutral-300 mt-0.5">SJ INFOTECH SOLUTIONS LLC</p>
                  <p className="text-xs text-neutral-500">Registered Limited Liability Company (New York, USA)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <Pin className="w-5 h-5 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">Headquarters</h3>
                  <p className="text-xs text-neutral-300">New York City, New York, United States</p>
                  <p className="font-mono text-[11px] text-neutral-500">Eastern Standard Time (EST)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <Mail className="w-5 h-5 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">Direct Transmission</h3>
                  <p className="font-mono text-xs text-white hover:underline">
                    <a href="mailto:contact@sjinfotechus.com">contact@sjinfotechus.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Direct Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl vortex-card">
            <div className="mb-6 pb-4 border-b border-white/10">
              <span className="vortex-pill mb-3">
                <span>Direct Line</span>
              </span>
              <h3 className="font-display text-lg sm:text-xl font-normal uppercase text-white mt-2">
                Initiate Executive Dialogue
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs text-neutral-400 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-org" className="block text-xs text-neutral-400 mb-1">
                  Organization
                </label>
                <input
                  id="contact-org"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Company or Venture Name"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-neutral-400 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your proposal or partnership inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="vortex-btn-primary !w-full !py-3.5 !text-xs uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Transmitting..." : "Send Message"}</span>
              </button>

              {responseMsg && (
                <p className="text-xs font-mono text-center text-white pt-2">{responseMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
