"use client";

import React from "react";
import { ServicesAccordion } from "./ServicesAccordion";
import { Button } from "@/components/ui/Button";
import { RiCheckLine } from "@remixicon/react";
import { FadeInUp, ScaleIn } from "@/components/animation";

export const ServicesDetails = () => {
  return (
    <section className="bg-slate-50/50 w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <FadeInUp className="lg:col-span-6 flex flex-col justify-start">
            <div className="mb-12">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-2">
                Broker Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                Stock &amp; Commodity Broker Related Services
              </h2>
              <ul className="space-y-4 text-slate-500 font-medium text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>Company Incorporation &amp; Structural Planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>Trading Membership Application of NSE, BSE and other Exchanges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>Depository Participant Registration and setups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>System Planning, Risk Development &amp; Security Auditing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>Statutory, Internal &amp; Concurrent operations Auditing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>Certifications and other exchange compliance filings</span>
                </li>
              </ul>
            </div>

            <div className="mb-14">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-2">
                Cross-Border Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                EB-5 Immigration Application
              </h2>
              <ul className="space-y-4 text-slate-500 font-medium text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <RiCheckLine className="w-4 h-4" />
                  </div>
                  <span>Detailed analysis &amp; preparation of Source of Fund statements for Investment-based United States Immigration VISA programs.</span>
                </li>
              </ul>
            </div>

            <div>
              <Button
                href="/contact"
                variant="gradient"
                className="px-12 py-4.5 font-bold shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Contact Advisors
              </Button>
            </div>
          </FadeInUp>

          <ScaleIn delay={0.1} className="lg:col-span-6 w-full lg:sticky lg:top-28">
            <ServicesAccordion />
          </ScaleIn>
          
        </div>
      </div>
    </section>
  );
};
