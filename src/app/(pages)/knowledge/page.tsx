"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiFilePdfFill, RiArrowRightSLine, RiCloseLine } from "@remixicon/react";

type DocCardType = {
  title: string;
  description: string;
  link: string;
};

const documentCards: DocCardType[] = [
  {
    title: "GST Extension Notifications",
    description: "It is a widely held view that every crisis also presents an opportunity. Given the prevalence of inequality in Indian economy, the implementation of statutory extensions provides crucial support.",
    link: "/publications/gst",
  },
  {
    title: "India's Growth Projected at 10.1%",
    description: "Detailed financial research forecasts a robust recovery and expansion of Indian industries, backed by increased direct investments and structural economic reforms.",
    link: "/company/achievements",
  },
  {
    title: "16th - 31st March GST Ledger Rules",
    description: "Taxpayers are free to utilise ITC available in their credit ledger as permissible by law: Press Release. Important clarifications on reconciliation calculations.",
    link: "/publications/gst",
  },
  {
    title: "Corporate Tax Filing Compliance Checklists",
    description: "A comprehensive walk-through of the necessary corporate direct tax declarations, audit certificates, and board authorization registers due this fiscal quarter.",
    link: "/publications/income-tax",
  },
  {
    title: "FDI Policy Modifications in Fintech Sector",
    description: "Understanding the latest structural compliance rules and reporting checklists for foreign entities investing in Indian digital payment structures.",
    link: "/services/specialized-services",
  },
  {
    title: "Revised Personal Income Tax Slabs Summary",
    description: "Summary table of direct tax tax slab amendments under the new tax regime, outlining deduction limits and net tax savings calculations.",
    link: "/publications/income-tax",
  },
  {
    title: "Statutory Audit Reconciliation Measures",
    description: "Steps for financial directors to streamline ledger audits, verify asset valuations, and draft compliant statements for concurrent statutory audits.",
    link: "/services/auditing",
  },
  {
    title: "Transfer Pricing Benchmarking Rules",
    description: "Essential benchmarking methodologies for specified domestic transaction valuations. Keeping compliance files aligned with international transfer pricing standards.",
    link: "/services/specialized-services",
  },
  {
    title: "Digital Signature Certificate Guide",
    description: "A complete walkthrough of registering, validating, and submitting corporate regulatory returns using e-signing and secure digital signature frameworks.",
    link: "/services/corporate-compliance",
  },
];

export default function KnowledgePage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setRegisterSuccess(true);
      setTimeout(() => {
        setIsRegisterOpen(false);
        setRegisterSuccess(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24">
      <section className="relative w-full min-h-137.5 lg:min-h-[70vh] flex items-center justify-center bg-slate-950 py-20 lg:py-28">
        <Image
          src="/assets/knowledge-page.png"
          alt="Knowledge and Event Background"
          fill
          priority
          className="object-cover object-center pointer-events-none -z-10"
        />

        <div className="absolute inset-0 bg-slate-950/70 z-0 pointer-events-none h-50!" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full h-full flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Text details */}
          <div className="max-w-xl text-left text-white animate-fade-in-up">
            <span className="text-amber-200 font-extrabold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
              Knowledge Sharing
            </span>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase mb-6">
              Knowledge <br />
              <span className="text-amber-200">&amp; Event</span>
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              We know how large objects will act, but things on a small scale. Stay updated with regulatory amendments, direct tax updates, and GST filing rules.
            </p>
          </div>

          {/* Right Floating Register Card */}
          <div className="w-full sm:max-w-md bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-[32px] shadow-2xl border border-white/40 z-10 hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up">
            <h3 className="text-slate-900 text-2xl font-black tracking-tight mb-3">
              Join As Accountant
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mb-8 leading-relaxed">
              Register to receive our weekly direct tax summaries, articles, and invitations to premium virtual seminars.
            </p>
            <button 
              onClick={() => setIsRegisterOpen(true)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest py-4.5 rounded-xl transition-all active:scale-98 cursor-pointer shadow-md select-none"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Diagonal paper sheets overlap mockup at bottom (CSS representation matching mockup) */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-50/50 z-0 pointer-events-none" />
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-20 relative z-20">
        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {documentCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* PDF blue Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-100/50">
                  <RiFilePdfFill className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                  {card.description}
                </p>
              </div>

              <div className="border-t border-slate-50 pt-5 mt-auto">
                <Link 
                  href={card.link}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:text-primary-hover uppercase tracking-wider group/link cursor-pointer"
                >
                  Know More
                  <RiArrowRightSLine className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Register Modal Form */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-slate-950/70 z-999 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-slate-100 shadow-2xl relative animate-fade-in-up">
            <button 
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <RiCloseLine className="w-5 h-5" />
            </button>
            
            {registerSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-extrabold">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Registered Successfully!</h4>
                <p className="text-slate-400 text-sm">Thank you for joining our professional advisors portal.</p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Join As Accountant</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Enter your business email below to join Vanguard Advisors knowledge network.</p>
                
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Email Address:</label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest py-4.5 rounded-xl shadow-md transition-colors"
                >
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
