"use client";

import React from "react";
import { RiFileList3Line, RiShieldUserLine, RiLineChartLine } from "@remixicon/react";
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animation";

type TaxSlabType = {
  regime: string;
  rates: { bracket: string; rate: string }[];
};

const incomeTaxSlabs: TaxSlabType[] = [
  {
    regime: "New Tax Regime (Default)",
    rates: [
      { bracket: "Up to ₹3,00,000", rate: "Nil" },
      { bracket: "₹3,00,001 - ₹7,00,000", rate: "5%" },
      { bracket: "₹7,00,001 - ₹10,00,000", rate: "10%" },
      { bracket: "₹10,00,001 - ₹12,00,000", rate: "15%" },
      { bracket: "₹12,00,001 - ₹15,00,000", rate: "20%" },
      { bracket: "Above ₹15,00,000", rate: "30%" },
    ],
  },
];

export default function IncomeTaxPublicationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16">
      <FadeInUp className="max-w-3xl mb-12">
        <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-2 block">
          Direct Taxation
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase">
          Income Tax <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Slabs &amp; Rates</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Quick reference handbook for current individual tax slabs, corporate tax rates, and regulatory compliance deadlines for filing direct returns.
        </p>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <ScaleIn className="lg:col-span-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
              <RiFileList3Line className="text-primary w-6 h-6" />
              Individual Slab Rates
            </h3>
            <span className="text-xs font-semibold text-slate-400 block mb-6 uppercase tracking-wider">
              Current Fiscal Financial Year Slabs
            </span>
            
            <StaggerContainer className="space-y-4">
              {incomeTaxSlabs[0].rates.map((slab, index) => (
                <StaggerItem key={index} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                  <span className="text-slate-700 text-sm font-semibold">{slab.bracket}</span>
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-900 text-xs font-black">
                    {slab.rate}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScaleIn>

        <div className="lg:col-span-6 space-y-8">
          <ScaleIn delay={0.1}>
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <RiShieldUserLine className="text-secondary w-6 h-6" />
                Corporate Direct Tax Rates
              </h3>
              <div className="space-y-4 text-sm text-gray-500">
                <p>
                  <strong>Domestic Companies:</strong> Tax rate of 22% (plus applicable surcharge &amp; cess) if company opts for special sections, or 25% if total turnover does not exceed thresholds.
                </p>
                <p>
                  <strong>New Manufacturing Units:</strong> Tax rate of 15% under section 115BAB for newly set up manufacturing entities commencing production within limits.
                </p>
              </div>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.2}>
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <RiLineChartLine className="text-accent w-6 h-6" />
                Direct Tax Representation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Filing your returns is only half the battle. Our team provides professional audit assistance, replies to assessment notices, and represents your case before high-level Direct Tax authorities including the Commissioner (Appeals) and Appellate Tribunal.
              </p>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
