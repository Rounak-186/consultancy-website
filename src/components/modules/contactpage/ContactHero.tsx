"use client";

import React from "react";
import Link from "next/link";
import { RiPhoneFill } from "@remixicon/react";

export const ContactHero = () => {
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
          Contact Us
        </h1>
        <div className="flex items-center gap-2.5 text-white/80 text-sm sm:text-base font-semibold tracking-wide">
          <Link href="/" className="hover:text-primary transition-colors duration-250">
            Home
          </Link>
          <span className="text-white/40 font-light">&gt;</span>
          <span className="text-white">Contact Us</span>
        </div>
      </div>

      {/* Overlapping circular phone icon at the bottom right */}
      <div className="absolute bottom-0 right-8 sm:right-16 md:right-24 lg:right-32 xl:right-40 translate-y-1/2 z-20">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.25)] transition-all duration-300 hover:scale-105 group cursor-pointer border-4 border-white select-none">
          <div className="text-[#8B00FF] transition-transform duration-300 group-hover:rotate-12">
            <RiPhoneFill className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
