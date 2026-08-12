"use client";

import React from "react";
import { RiAwardFill, RiCompass3Fill, RiGroupFill, RiGlobalLine } from "@remixicon/react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animation";

type AchievementType = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const achievements: AchievementType[] = [
  {
    year: "2008",
    title: "Firm Foundation",
    description: "Your Company established with a vision to provide institutional-grade tax advisory and audit services to local companies.",
    icon: <RiCompass3Fill className="w-8 h-8 text-primary" />,
  },
  {
    year: "2014",
    title: "Expanded Cross-Border Desk",
    description: "Launched our dedicated International Tax & Transfer Pricing division, advising on overseas foreign direct investments.",
    icon: <RiGlobalLine className="w-8 h-8 text-primary" />,
  },
  {
    year: "2020",
    title: "1000+ Clients Served",
    description: "Reached a major milestone of handling financial compliance, auditing, and corporate filings for over 1000 businesses.",
    icon: <RiGroupFill className="w-8 h-8 text-primary" />,
  },
  {
    year: "2025",
    title: "Advisory Excellence Award",
    description: "Recognized as a top-tier regional advisory firm for outstanding transparency, compliance rates, and client advocacy.",
    icon: <RiAwardFill className="w-8 h-8 text-primary" />,
  },
];

export default function AchievementsPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <FadeInUp className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Our Journey
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 uppercase">
            Milestones &amp; <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Awards</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
            For nearly two decades, we have partnered with businesses of all scales, navigating tax complexities, ensuring audit excellence, and earning client trust.
          </p>
        </FadeInUp>

        <StaggerContainer className="relative border-l border-slate-200 ml-4 md:ml-32 py-4 space-y-12">
          {achievements.map((item, index) => (
            <StaggerItem key={index} className="relative pl-8 md:pl-12 group">
              <div className="hidden md:block absolute right-full mr-12 top-1.5 text-right">
                <span className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">
                  {item.year}
                </span>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  Milestone
                </span>
              </div>

              <div className="absolute -left-4 md:-left-5 top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="md:hidden inline-block text-sm font-extrabold text-primary mb-2">
                  {item.year} – Milestone
                </span>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-3 bg-indigo-50 rounded-2xl shrink-0 group-hover:bg-primary/10 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </div>
  );
}
