import React from "react";
import Link from "next/link";
import { RiFilePdfFill, RiArrowRightSLine } from "@remixicon/react";

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

export default function KnowledgeEventsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {documentCards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
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
  );
}
