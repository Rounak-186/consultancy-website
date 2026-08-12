"use client";

import React from "react";
import { RiCalendarEventLine, RiCheckboxCircleLine, RiFolderInfoLine } from "@remixicon/react";
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animation";

type DeadlineType = {
  form: string;
  desc: string;
  dueDate: string;
  frequency: string;
};

const gstDeadlines: DeadlineType[] = [
  {
    form: "GSTR-1",
    desc: "Details of outward supplies of goods or services.",
    dueDate: "11th of succeeding month",
    frequency: "Monthly / Quarterly",
  },
  {
    form: "GSTR-3B",
    desc: "Summary return of outward supplies, input tax credit claimed and payment of tax.",
    dueDate: "20th of succeeding month",
    frequency: "Monthly",
  },
  {
    form: "GSTR-9 & GSTR-9C",
    desc: "Annual GST return and reconciliation statement audit.",
    dueDate: "31st December (of subsequent fiscal year)",
    frequency: "Annually",
  },
];

export default function GSTPublicationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16">
      <FadeInUp className="max-w-3xl mb-12">
        <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-2 block">
          Indirect Taxation
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase">
          GST <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Compliance &amp; Deadlines</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Stay informed with our structured overview of Goods and Services Tax compliance protocols, upcoming return filing deadlines, and key notifications.
        </p>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <ScaleIn className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <RiCalendarEventLine className="text-primary w-6 h-6 animate-pulse" />
               Filer Deadline Checklist
            </h3>
            
            <StaggerContainer className="divide-y divide-slate-100">
              {gstDeadlines.map((item, index) => (
                <StaggerItem key={index} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg font-extrabold text-slate-900">{item.form}</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase">
                        {item.frequency}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Due Date</span>
                    <span className="text-sm font-bold text-secondary">{item.dueDate}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScaleIn>

        <div className="lg:col-span-5 space-y-6">
          <ScaleIn delay={0.1}>
            <div className="bg-gradient-to-br from-primary to-indigo-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2.5">
                <RiCheckboxCircleLine className="text-teal-300 w-6 h-6" />
                Input Tax Credit Tips
              </h3>
              <ul className="space-y-4 text-sm text-indigo-100">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 shrink-0" />
                  <span>Always reconcile GSTR-2B with your purchase logs before filing GSTR-3B to prevent credit leaks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 shrink-0" />
                  <span>Verify vendor compliance reports quarterly. Non-filing vendors will cause your Input Tax Credit to block.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 shrink-0" />
                  <span>Review reverse charge mechanism (RCM) liabilities regularly to avoid compound interest penalties.</span>
                </li>
              </ul>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.2}>
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-2xl text-primary shrink-0">
                <RiFolderInfoLine className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Audit Advisory</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Companies exceeding aggregate turnover thresholds are required to prepare reconciliation files. Contact our advisors for automated audit reconciliation.
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
