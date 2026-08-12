"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animation";

export const AuditingDetails = () => {
  return (
    <section className="bg-slate-50/50 w-full py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        <FadeInUp className="mb-16 text-center">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Core Service
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
            AUDIT &amp; <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ASSURANCE</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Internal &amp; Concurrent Audit
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              An independent, objective assurance and consulting activity designed to add value 
              and improve operations. We help your organization accomplish key objectives 
              by bringing a systematic, disciplined approach to evaluate and improve the 
              effectiveness of risk management, controls, and corporate governance.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Management &amp; Operations Audit
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              An detailed assessment of methods and policies of management in corporate 
              administration, allocation of capital resources, tactical and strategic planning, and overall 
              organizational and employee workflow improvement.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Forensic Audit
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              A precise examination and evaluation of an entity&apos;s financial records to derive concrete evidence 
              that can be presented in courtrooms or legal proceedings during disputes involving financial crimes, 
              embezzlement, or administrative fraud.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Statutory Audit
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Mandatory audits required by law to certify that presented books of accounts and balances 
              give a true and fair view to regulators and the public. We manage statutory audit schedules 
              for companies meeting legal threshold criteria.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <ScaleIn className="flex justify-center mt-16">
          <Button
            href="/contact"
            variant="gradient"
            className="px-12 py-4.5 font-bold shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Request Audit
          </Button>
        </ScaleIn>

      </div>
    </section>
  );
};
