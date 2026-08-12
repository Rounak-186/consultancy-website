"use client";
import React from "react";
import Link from "next/link";
import { 
  RiFacebookFill, 
  RiTwitterFill, 
  RiLinkedinFill, 
  RiInstagramFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine
} from "@remixicon/react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900/60 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className="text-2xl font-extrabold text-white tracking-tight"
            >
              YOUR COMPANY
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              We provide dependable audit, statutory compliance, transfer pricing, and corporate tax advisory solutions to help companies scale.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <RiFacebookFill className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <RiTwitterFill className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <RiLinkedinFill className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                <RiInstagramFill className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/company/our-team" className="hover:text-white transition-colors duration-200">
                Our Team
              </Link>
              <Link href="/services" className="hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Services
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/services/auditing" className="hover:text-white transition-colors duration-200">
                Auditing
              </Link>
              <Link href="/services/corporate-compliance" className="hover:text-white transition-colors duration-200">
                Corporate Compliance
              </Link>
              <Link href="/services/tax-consultancy" className="hover:text-white transition-colors duration-200">
                Tax Consultancy
              </Link>
              <Link href="/services/specialized-services" className="hover:text-white transition-colors duration-200">
                Specialized Services
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-3 items-start">
                <RiMapPinLine className="w-5 h-5 text-primary shrink-0" />
                <span className="leading-relaxed">416 Churchill Rd, Kilburn 5082</span>
              </div>
              <div className="flex gap-3 items-center">
                <RiPhoneLine className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+190898718876" className="hover:text-white transition-colors duration-200">
                  +1 90898718876
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <RiMailLine className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@yourcompany.com" className="hover:text-white transition-colors duration-200">
                  info@yourcompany.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} YOUR COMPANY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
