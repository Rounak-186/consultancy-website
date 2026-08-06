"use client";

import React from "react";
import Link from "next/link";

export const AuditingDetails = () => {
  return (
    <section className="bg-white w-full py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B0EA8] mb-12 text-left">
          Audit and Assurance
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Card 1 */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Internal & Concurrent Audit
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              It is an independent, objectives assurance and consulting activity designed to add value 
              and improve an organization's operations. It helps organization to accomplish objectives 
              by bringing a systematic, disciplined approach to evaluate and improve the 
              effectiveness of risk management, control and government process.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Management & Operations Audit
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              It is an assessment of methods and policies of an organization's management in the 
              administration and the use of resources, tactical and strategic planning, and employee 
              and organizational improvement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Forensic Audit
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              It is an examination and evaluation of a entities financial records to derive evidence 
              that can be used in a court of law or legal proceeding in cases of fraud, embezzlement, 
              or other financial crimes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Statutory Audit
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              The audit which is mandated by a Law or a Statute to ensure the books of accounts 
              presented to the regulators and public are true and fair. Statutory audit is mandatory if 
              certain criteria are being met by the business.
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
