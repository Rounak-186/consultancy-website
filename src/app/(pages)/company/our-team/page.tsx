"use client";

import React from "react";
import { RiLinkedinBoxFill, RiMailFill, RiTwitterXFill } from "@remixicon/react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animation";

type MemberType = {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  email: string;
  linkedin: string;
};

const teamMembers: MemberType[] = [
  {
    name: "Vikram Malhotra",
    role: "Managing Partner",
    qualifications: "FCA, DISA (ICA)",
    bio: "Over 18 years of expertise in statutory audit, corporate structuring, and strategic financial planning for multinational clients.",
    email: "vikram@yourcompany.com",
    linkedin: "#",
  },
  {
    name: "Sarah Jenkins",
    role: "Partner – International Tax",
    qualifications: "CPA, LL.M. (Taxation)",
    bio: "Ex-Big 4 director specializing in cross-border tax advisories, transfer pricing structures, and double taxation treaty agreements.",
    email: "sarah@yourcompany.com",
    linkedin: "#",
  },
  {
    name: "Rajesh Mehta",
    role: "Senior Consultant",
    qualifications: "FCA, Insolvency Professional",
    bio: "Advises corporate boards on mergers, acquisitions, regulatory compliances, and represents clients before the NCLT and tax authorities.",
    email: "rajesh@yourcompany.com",
    linkedin: "#",
  },
  {
    name: "Aishwarya Roy",
    role: "Manager – Indirect Taxes",
    qualifications: "ACA, GST Consultant",
    bio: "Expert in GST planning, compliance audits, reconciliation audits, and representing entities before appellate authorities.",
    email: "aishwarya@yourcompany.com",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <FadeInUp className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Our Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 uppercase">
            Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
            Our team comprises seasoned chartered accountants, tax attorneys, and business analysts dedicated to securing your company&apos;s fiscal future with precision and compliance.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <StaggerItem 
              key={index} 
              className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary to-indigo-600 shadow-lg flex items-center justify-center text-white text-3xl font-extrabold select-none transition-transform duration-300 group-hover:scale-105">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {member.role}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="text-xs text-slate-500 font-medium italic">
                      {member.qualifications}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 rounded-lg bg-slate-50 hover:bg-primary/10 text-slate-500 hover:text-primary transition-all"
                    title="Send Email"
                  >
                    <RiMailFill className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.linkedin} 
                    className="p-2 rounded-lg bg-slate-50 hover:bg-primary/10 text-slate-500 hover:text-primary transition-all"
                    title="LinkedIn Profile"
                  >
                    <RiLinkedinBoxFill className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-slate-50 hover:bg-primary/10 text-slate-500 hover:text-primary transition-all"
                    title="Twitter Profile"
                  >
                    <RiTwitterXFill className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </div>
  );
}
