"use client";

import Image from "next/image";
import { RiMapPinFill } from "@remixicon/react";
import { FadeInUp, ScaleIn } from "@/components/animation";

export default function MapBanner() {
  return (
    <section className="w-full py-20 bg-white border-t border-slate-100/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <ScaleIn className="relative w-full h-[450px] sm:h-[550px] overflow-hidden rounded-3xl shadow-xl border border-slate-100/50 group">
          <Image
            src="/assets/location.png" 
            alt="Google Map Location of Your Company headquarters"
            fill
            priority
            className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-[1.03]"
            sizes="100vw"
          />
          
          <FadeInUp delay={0.2} className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/65 z-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <RiMapPinFill className="w-4 h-4 text-primary shrink-0" />
              <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase block">
                Headquarters
              </span>
            </div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-2">Our Corporate Office</h4>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed font-medium">
              We look forward to meeting with you. Please schedule an appointment prior to visiting.
            </p>
            <div className="border-t border-slate-100 pt-4">
              <span className="text-[10px] text-slate-400 font-extrabold block mb-1 uppercase tracking-wider">Office Location</span>
              <p className="text-xs sm:text-sm font-bold text-slate-800">416 Churchill Rd, Kilburn 5082</p>
            </div>
          </FadeInUp>
        </ScaleIn>
      </div>
    </section>
  );
}