"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animation";

export const TaxConsultancyDetails = () => {
  return (
    <section className="bg-slate-50/50 w-full py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        <FadeInUp className="mb-16 text-center">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Direct &amp; Indirect Taxation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
            TAX <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CONSULTANCY</span>
          </h2>
          <span className="text-secondary font-semibold text-xs sm:text-sm mt-3 block uppercase tracking-wider">
            TAX MINIMIZATION &amp; COMPLIANCE BLUEPRINTS
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Corporate &amp; Non-Corporate Tax Planning
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Detailed assessment of corporate and individual income metrics from a direct tax perspective. 
              We structure legal compliance workflows to maximize tax efficiency, secure applicable exemptions, 
              and organize long-term wealth assets.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Representation Services
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Expert legal and audit representation of direct and indirect tax litigation cases in front of 
              key Indian tax administrative authorities, including direct IT officers, Commissioner of Appeals CIT(A), 
              and Appellate Tribunals (ITAT).
            </p>
          </StaggerItem>
        </StaggerContainer>

        <ScaleIn className="flex justify-center mt-16">
          <Button
            href="/contact"
            variant="gradient"
            className="px-12 py-4.5 font-bold shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Consult Tax Partner
          </Button>
        </ScaleIn>

      </div>
    </section>
  );
};
