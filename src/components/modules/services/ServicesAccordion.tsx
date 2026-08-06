"use client";

import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import clsx from "clsx";

type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    title: "Auditing Overview",
    content: "Comprehensive examination and verification of your organization's financial books and records to ensure accuracy, compliance, and credibility.",
  },
  {
    title: "Internal Audit",
    content: "Objective evaluation of financial and operational systems, ensuring internal controls are robust, risk management is sound, and corporate policies are followed.",
  },
  {
    title: "Service Tax Audit",
    content: "Detailed review of service tax compliance, liability calculations, and documentation to identify and rectify errors before official assessments.",
  },
  {
    title: "Transfer Pricing Audit",
    content: "Verification of international transaction pricing between associated enterprises to confirm arm's length standards and compliance with tax laws.",
  },
  {
    title: "Transfer Pricing FAQ'S",
    content: "Common questions and answers regarding compliance requirements, documentation standards, and methodologies for transfer pricing audits.",
  },
  {
    title: "Domestic Transfer Pricing",
    content: "Regulation check and documentation services for specified domestic transactions to satisfy local tax compliance thresholds.",
  },
  {
    title: "Business Taxation Overview",
    content: "Corporate tax advisory, planning, and compliance services tailored to match your business structure and reduce your overall tax liabilities.",
  },
  {
    title: "Direct Taxation",
    content: "End-to-end support for income tax, wealth tax, and corporate tax filings, including representation during tax assessments and disputes.",
  },
  {
    title: "Indirect Taxation",
    content: "Advisory and compliance services for indirect taxes, including customs duties, excise, sales tax, and service tax matters.",
  },
  {
    title: "Capital Gains",
    content: "Expert tax calculations, advisory, and planning for assets transfer, minimizing tax impact on long-term and short-term capital gains.",
  },
  {
    title: "GST",
    content: "Comprehensive Goods and Services Tax compliance, including GST registration, monthly filings, refund processing, reconciliation, and audit support.",
  },
];

export const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden flex">
      <div className="w-2.5 bg-linear-to-b from-primary to-indigo-600 shrink-0" />
      
      {/* Accordion Content */}
      <div className="flex-1 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 mb-6 leading-tight">
          Learn More About Our Services
        </h3>
        
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {accordionData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className={clsx(
                      "text-sm sm:text-base font-bold transition-colors duration-250",
                      isOpen ? "text-primary" : "text-gray-700 group-hover:text-primary"
                    )}>
                      {item.title}
                    </span>
                  </div>
                  <span className={clsx(
                    "p-1 rounded-full bg-gray-50 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-200",
                    isOpen && "text-primary bg-primary/10"
                  )}>
                    {isOpen ? (
                      <RiSubtractLine className="w-4 h-4" />
                    ) : (
                      <RiAddLine className="w-4 h-4" />
                    )}
                  </span>
                </button>
                
                {/* Expandable Panel */}
                <div className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out pl-4.5",
                  isOpen ? "max-h-40 opacity-100 mt-3 mb-1" : "max-h-0 opacity-0"
                )}>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
