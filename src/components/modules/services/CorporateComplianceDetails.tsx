"use client";

import React from "react";
import Link from "next/link";

export const CorporateComplianceDetails = () => {
  return (
    <section className="bg-white w-full py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0EA8]">
            Corporate Compliance
          </h2>
          <span className="text-[#6366F1] italic font-semibold text-sm sm:text-base mt-2 block">
            Compliance for Companies and Limitedliability Partnership
          </span>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            {/* Corporate Due Diligence */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Corporate Due Diligence
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                It is an investigation or audit of a potential investment or product to confirm all facts, 
                that might include the review of financial records. Due diligence refers to the research 
                done before entering into an agreement or a financial transaction with another party.
              </p>
            </div>

            {/* Mergers & Acquisitions */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Mergers & Acquisitions
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                It Includes Representation and Compliance for the entire Mergers & Acquisitions process.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Annual Fillings & Other Compliance
            </h3>
            <span className="text-gray-600 font-semibold text-sm sm:text-base mb-3 block">
              It Includes -
            </span>
            <ul className="space-y-3.5 text-gray-500 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Annual and Incidental Fillings</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Drafting of Minutes of Meetings, etc.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Incorporation of Companies & LLPs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Sourcing of Funds</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>etc.</span>
              </li>
            </ul>
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
