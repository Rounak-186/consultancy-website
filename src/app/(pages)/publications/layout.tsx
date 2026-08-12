"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typewriter } from "@/components/animation";

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  let activeTab = "Budget News";
  if (pathname.includes("/gst")) {
    activeTab = "GST Compliance";
  } else if (pathname.includes("/income-tax")) {
    activeTab = "Income Tax Rates";
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24">
      <div 
        className="relative bg-cover bg-center h-80 sm:h-96 flex items-center justify-center pt-20"
        style={{ backgroundImage: "url('/assets/budget_banner.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
        
        <div className="relative text-center z-10 max-w-3xl mx-auto px-6 mt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-widest mb-4 uppercase min-h-[1.2em]">
            <Typewriter words={["Publications"]} loop={false} cursorStyle="|" cursorClassName="text-indigo-400 animate-cursor-blink ml-1" />
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">Publications</span>
            <span className="text-slate-500">/</span>
            <span className="text-primary font-extrabold">{activeTab}</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
