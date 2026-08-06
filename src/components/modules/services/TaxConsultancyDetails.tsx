"use client";

import React from "react";
import Link from "next/link";

export const TaxConsultancyDetails = () => {
  return (
    <section className="bg-white w-full py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0EA8]">
            Tax Consultancy
          </h2>
          <span className="text-[#6366F1] italic font-semibold text-sm sm:text-base mt-2 block">
            Compliance for Companies and Limitedliability Partnership
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Left Column - Corporate & Non-Corporate Tax Planning */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Corporate & Non-Corporate Tax Planning
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              It is an analysis of the financial situation from a tax perspective. We try ensuring tax 
              efficiency and maximizing the ability to contribute to retirement plans.
            </p>
          </div>

          {/* Right Column - Representation Services */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Representation Services
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Representation of tax cases in front of Tax Authorities like the ITO, CIT(A) and ITAT.
            </p>
          </div>

        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-16 sm:mt-20">
          <Link 
            href="/contact"
            className="inline-block text-center bg-[#2B0EA8] hover:bg-[#1E0880] text-white font-bold py-3.5 px-16 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 text-sm sm:text-base tracking-wide"
          >
            Contact
          </Link>
        </div>

      </div>
    </section>
  );
};
