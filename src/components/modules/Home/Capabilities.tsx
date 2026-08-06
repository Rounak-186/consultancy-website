"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { RiCustomerService2Line, RiFileTextLine, RiSunLine } from "@remixicon/react";

type capabilityType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const capabilitiesList: capabilityType[] = [
  {
    icon: <RiCustomerService2Line />,
    title: "24/7 Support",
    description: "We provide round-the-clock client assistance to resolve your compliance queries and urgent auditing issues anytime.",
  },
  {
    icon: <RiFileTextLine />,
    title: "Plannings",
    description: "We offer strategic planning services that help you organize, prioritize, and execute your goals efficiently with a clear roadmap for success.",
  },
  {
    icon: <RiSunLine />,
    title: "Quality Control",
    description: "Rigorous quality control processes to ensure tax advisory and statutory reports meet the highest international standards.",
  },
];

export const Capabilities = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  return (
    <section className="bg-services-bg py-32 lg:py-40 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-10">
          <div className="relative inline-block px-12 py-4.5 font-extrabold text-3xl tracking-widest text-slate-950 uppercase bg-white mb-6">
            Our Capabilities
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
            <div className="absolute top-3 bottom-3 left-3 w-[3px] bg-primary" />
            <div className="absolute top-3 bottom-3 right-3 w-[3px] bg-primary" />
          </div>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive range of services designed to meet your business needs with precision and excellence. Our strengths lie in delivering dependable solutions that help you grow and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-20 px-4 sm:px-10 lg:px-16">
          {capabilitiesList.map((capability, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCardIndex(index)}
              className="relative group min-h-[300px]"
            >
              <div 
                className={clsx(
                  "absolute inset-0 border-l-2 border-b-2 transition-all duration-300 -translate-x-3.5 translate-y-3.5",
                  index === activeCardIndex ? "border-primary" : "border-gray-400/80"
                )}
              />
              
              <div className="relative bg-white p-10 h-full flex flex-col items-center justify-center shadow-sm select-none transition-all duration-300">
                <div 
                  className={clsx(
                    "w-14 h-14 flex items-center justify-center transition-colors duration-300 mb-6 [&_svg]:w-10 [&_svg]:h-10",
                    index === activeCardIndex ? "text-primary" : "text-slate-950"
                  )}
                >
                  {capability.icon}
                </div>
                
                <h3 className="text-lg font-bold tracking-wider text-slate-900 uppercase text-center">
                  {capability.title}
                </h3>
                
                <div 
                  className={clsx(
                    "w-full transition-all duration-300 ease-in-out overflow-hidden text-center",
                    index === activeCardIndex 
                      ? "max-h-36 opacity-100 mt-5" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[240px] mx-auto">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
