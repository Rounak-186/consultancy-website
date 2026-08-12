"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { RiCheckLine } from "@remixicon/react";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animation";

export const CorporateComplianceDetails = () => {
  return (
    <section className="bg-slate-50/50 w-full py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        <FadeInUp className="mb-16 text-center">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Regulatory Compliance
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
            CORPORATE <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">COMPLIANCE</span>
          </h2>
          <span className="text-secondary font-semibold text-xs sm:text-sm mt-3 block uppercase tracking-wider">
            FILINGS &amp; DUE DILIGENCE FOR COMPANIES &amp; LLPs
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Corporate Due Diligence
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Comprehensive auditing of potential investments or corporate products to confirm structural facts. 
              Due diligence covers rigorous pre-agreement financial research, checking asset ledgers, and resolving 
              risk areas prior to executing mergers or transactions.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Mergers &amp; Acquisitions
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Your Company offers legal representation, structural planning, and corporate filing 
              compliance checks throughout the entire corporate Merger &amp; Acquisition lifecycle.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-md transition-shadow md:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Annual Filings &amp; Other Compliance
            </h3>
            <span className="text-slate-700 font-bold text-xs sm:text-sm mb-4 block uppercase tracking-wider">
              Comprehensive filing services including:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-500 text-xs sm:text-sm font-medium">
              <li className="flex items-center gap-3">
                <div className="p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                  <RiCheckLine className="w-4 h-4" />
                </div>
                <span>Annual and incidental registrar filings</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                  <RiCheckLine className="w-4 h-4" />
                </div>
                <span>Drafting of Minutes of Meetings</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                  <RiCheckLine className="w-4 h-4" />
                </div>
                <span>Incorporation of Companies and LLPs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                  <RiCheckLine className="w-4 h-4" />
                </div>
                <span>Sourcing of Funds &amp; Board Resolutions</span>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <ScaleIn className="flex justify-center mt-16">
          <Button
            href="/contact"
            variant="gradient"
            className="px-12 py-4.5 font-bold shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Request Compliance Desk
          </Button>
        </ScaleIn>

      </div>
    </section>
  );
};
