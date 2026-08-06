"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiSettings4Fill, RiPhoneFill } from "@remixicon/react";

export const ServicesHero = () => {
  const pathname = usePathname();
  
  // Check active route
  const isAuditing = pathname?.startsWith("/services/auditing");
  const isCorporate = pathname?.startsWith("/services/corporate-compliance");
  const isTax = pathname?.startsWith("/services/tax-consultancy");
  const isSpecialized = pathname?.startsWith("/services/specialized-services");

  // Determine Title, Breadcrumb and Icon styling based on route
  let title = "Services";
  let subPageName = "Special Services";
  
  if (isAuditing) {
    title = "Auditing";
    subPageName = "Auditing";
  } else if (isCorporate) {
    title = "Corporate Compliance";
    subPageName = "Corporate Compliance";
  } else if (isTax) {
    title = "Tax Consultancy";
    subPageName = "Tax Consultancy";
  } else if (isSpecialized) {
    title = "Specialized Services";
    subPageName = "Specialized Services";
  }

  return (
    <section 
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-cover bg-center overflow-visible"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider uppercase mb-4 drop-shadow-sm">
          {title}
        </h1>
        <div className="flex items-center gap-2.5 text-white/80 text-sm sm:text-base font-semibold tracking-wide">
          <Link href="/" className="hover:text-primary transition-colors duration-250">
            Home
          </Link>
          <span className="text-white/40 font-light">&gt;</span>
          <Link href="/services" className="hover:text-primary transition-colors duration-250">
            Services
          </Link>
          <span className="text-white/40 font-light">&gt;</span>
          <span className="text-white">{subPageName}</span>
        </div>
      </div>

      {/* Overlapping circular icon at the bottom right */}
      <div className="absolute bottom-0 right-8 sm:right-16 md:right-24 lg:right-32 xl:right-40 translate-y-1/2 z-20">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.25)] transition-all duration-300 hover:scale-105 group cursor-pointer border-4 border-white select-none relative overflow-hidden">
            {/* Render Orange Cogs (statically for all services pages) */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-orange-500">
              {/* Large Cog */}
              <div className="absolute bottom-1.5 left-1.5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-[2000ms] ease-in-out group-hover:rotate-180">
                <RiSettings4Fill className="w-full h-full" />
              </div>
              {/* Small Cog */}
              <div className="absolute top-1.5 right-1.5 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-transform duration-[2000ms] ease-in-out group-hover:-rotate-180">
                <RiSettings4Fill className="w-full h-full" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
