"use client";

import React from "react";
import Link from "next/link";
import { ServicesAccordion } from "./ServicesAccordion";

export const ServicesDetails = () => {
  return (
    <section className="bg-[#FAF6FB] w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Text Content and Button */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 mb-6 leading-tight tracking-tight">
                Stock & Commodity Broker Related Services
              </h2>
              <ul className="space-y-4.5 text-gray-600 font-medium text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Company Incorporation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Trading Membership Application of NSE, BSE and other Exchanges</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Depository Participant Registration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>System Planning & Development</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Statutory, Internal & Concurrent Audit</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Certifications and other Compliances</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 mb-6 leading-tight tracking-tight">
                EB-5 Immigration Application
              </h2>
              <ul className="space-y-4.5 text-gray-600 font-medium text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Analysis & Preparation of Source of Fund for Investment based United States Immigration VISA.</span>
                </li>
              </ul>
            </div>

            {/* Contact Button */}
            <div>
              <Link 
                href="/contact"
                className="inline-block text-center bg-[#2B0EA8] hover:bg-[#1E0880] text-white font-bold py-4 px-16 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base tracking-wide"
              >
                Contact
              </Link>
            </div>
            
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-24">
            <ServicesAccordion />
          </div>
          
        </div>
      </div>
    </section>
  );
};
