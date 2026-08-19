"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeInUp, ScaleIn, NumberCounter } from "@/components/animation";

export const WhoIAm = () => {
  return (
    <section className="bg-white py-24 lg:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <ScaleIn className="lg:col-span-6 relative flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100/50 aspect-4/3 w-full">
              <Image 
                src="/hero-image.png" 
                alt="Your Company Leadership and Consultancy office" 
                fill
                sizes="(max-w-[1024px]) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">
                  Trusted Partner
                </span>
                <h4 className="text-white text-lg sm:text-xl font-bold">
                  Guiding corporate growth since 2008
                </h4>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center mt-2">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className="block text-2xl sm:text-3xl font-black text-primary">
                  <NumberCounter from={1} to={18} suffix="+" duration={1.5} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Years Active</span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className="block text-2xl sm:text-3xl font-black text-secondary">
                  <NumberCounter from={1} to={1000} suffix="+" duration={2} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Clients</span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className="block text-2xl sm:text-3xl font-black text-accent">
                  <NumberCounter from={1} to={99.8} decimals={1} suffix="%" duration={2} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Compliance</span>
              </div>
            </div>
          </ScaleIn>

          <FadeInUp delay={0.1} className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2.5 h-10 bg-primary/20 rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold text-primary uppercase tracking-[0.25em]">
                Who We Are
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
              PIONEERING FINANCIAL <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">INTEGRITY &amp; GROWTH</span>
            </h2>
            
            <div className="space-y-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-10">
              <p>
                We are a dedicated team of Chartered Accountants, Tax Advisors, and Corporate Compliance Auditors. We bring deep-seated financial experience, structural clarity, and foresight to complex corporate matters.
              </p>
              <p>
                Our mission is simple: to deliver precise, transparent, and proactive financial blueprints tailored to your company&apos;s growth milestones. Whether navigating statutory audits, preparing global transfer pricing, or advising on tax regulations, we support your progress with absolute integrity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/company/our-team"
                variant="primary"
                className="px-8 py-4"
              >
                Meet Partners
              </Button>
              <Button
                href="/company/achievements"
                variant="text"
                className="px-6 py-4"
              >
                Our Achievements &rarr;
              </Button>
            </div>
          </FadeInUp>

        </div>
      </div>
    </section>
  );
};
