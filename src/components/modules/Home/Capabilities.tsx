"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { RiCustomerService2Line, RiFileTextLine, RiSunLine } from "@remixicon/react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animation";

type capabilityType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const capabilitiesList: capabilityType[] = [
  {
    icon: <RiCustomerService2Line />,
    title: "24/7 Support Desk",
    description: "We provide round-the-clock advisory assistance to address statutory queries and critical filing reviews.",
  },
  {
    icon: <RiFileTextLine />,
    title: "Strategic Advisory",
    description: "Tailored financial planning structures and regulatory checklists to keep your company compliant as it scales.",
  },
  {
    icon: <RiSunLine />,
    title: "Vigilant Quality Control",
    description: "Multi-tier auditing reviews to ensure tax declarations and statutory balances meet international standards.",
  },
];

export const Capabilities = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  return (
    <section className="bg-slate-50 py-24 lg:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
            WHY PARTNER WITH <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">YOUR COMPANY</span>
          </h2>
          <p className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed">
            Our capabilities are designed to handle complex direct tax assessments, transfer pricing compliance, and corporate filings with high efficiency.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 px-2 sm:px-6">
          {capabilitiesList.map((capability, index) => {
            const isSelected = index === activeCardIndex;
            return (
              <StaggerItem
                key={index}
                onMouseEnter={() => setActiveCardIndex(index)}
                className="relative group min-h-[280px] cursor-default select-none"
              >
                <div 
                  className={clsx(
                    "absolute inset-0 rounded-3xl border-l-2 border-b-2 transition-all duration-300 -translate-x-3 translate-y-3",
                    isSelected ? "border-primary bg-indigo-50/20" : "border-slate-200"
                  )}
                />
                
                <div className="relative bg-white rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-center items-center shadow-sm transition-all duration-300 hover:shadow-md border border-slate-100">
                  <div 
                    className={clsx(
                      "w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6 [&_svg]:w-8 [&_svg]:h-8",
                      isSelected ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-800"
                    )}
                  >
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-lg font-extrabold tracking-wide text-slate-900 uppercase text-center mb-4">
                    {capability.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-center font-medium max-w-[260px] mx-auto">
                    {capability.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
