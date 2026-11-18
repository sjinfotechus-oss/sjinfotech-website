"use client";

import React from "react";
import { Github, GitlabFull, Google, Apple, Figma } from "iconoir-react";

export default function PartnerLogos() {
  const partners = [
    { name: "GitHub", icon: <Github className="w-6 h-6" /> },
    { name: "GitLab", icon: <GitlabFull className="w-6 h-6" /> },
    { name: "Google", icon: <Google className="w-6 h-6" /> },
    { name: "Apple", icon: <Apple className="w-6 h-6" /> },
    { name: "Figma", icon: <Figma className="w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 hover:opacity-100 transition-opacity text-neutral-400">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
          title={partner.name}
        >
          {partner.icon}
          <span className="font-display text-xs tracking-wider uppercase text-neutral-400 hover:text-white">
            {partner.name}
          </span>
        </div>
      ))}
    </div>
  );
}
