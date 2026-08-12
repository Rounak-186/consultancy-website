"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiSettings4Fill } from "@remixicon/react";
import { FadeInUp, ScaleIn, Typewriter } from "@/components/animation";

export const ServicesHero = () => {
  const pathname = usePathname();
  
  const isAuditing = pathname?.startsWith("/services/auditing");
  const isCorporate = pathname?.startsWith("/services/corporate-compliance");
  const isTax = pathname?.startsWith("/services/tax-consultancy");
  const isSpecialized = pathname?.startsWith("/services/specialized-services");

  let title = "Services";
  let subPageName = "Special Services";
  
  if (isAuditing) {
    title = "Auditing & Assurance";
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
      className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center bg-cover bg-center overflow-visible bg-slate-950"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950 z-0" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />
 
      <FadeInUp className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-secondary text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase mb-4 block">
          Our Specializations
        </span>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase mb-6 drop-shadow-sm min-h-[1.2em]">
          <Typewriter key={title} words={[title]} loop={false} cursorStyle="|" cursorClassName="text-indigo-400 animate-cursor-blink ml-1" />
        </h1>
        <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-semibold tracking-wide bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xs">
          <Link href="/" className="hover:text-primary transition-colors duration-250">
            Home
          </Link>
          <span className="text-white/20 font-light">&gt;</span>
          <Link href="/services" className="hover:text-primary transition-colors duration-250">
            Services
          </Link>
          <span className="text-white/20 font-light">&gt;</span>
          <span className="text-white">{subPageName}</span>
        </div>
      </FadeInUp>

      <ScaleIn delay={0.2} className="absolute bottom-0 right-8 sm:right-16 md:right-24 lg:right-32 xl:right-40 translate-y-1/2 z-20">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-full flex items-center justify-center shadow-xl hover:shadow-[0_15px_35px_rgba(79,70,229,0.3)] transition-all duration-300 hover:scale-105 group cursor-pointer border-4 border-slate-950 select-none relative overflow-hidden">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-secondary">
            <div className="absolute bottom-1.5 left-1.5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-[2000ms] ease-in-out group-hover:rotate-180 text-primary">
              <RiSettings4Fill className="w-full h-full" />
            </div>
            <div className="absolute top-1.5 right-1.5 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-[2000ms] ease-in-out group-hover:-rotate-180 text-secondary">
              <RiSettings4Fill className="w-full h-full" />
            </div>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
};
