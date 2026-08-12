"use client";

import Image from "next/image";
import { RiDoubleQuotesL } from "@remixicon/react";
import { FadeInUp, ScaleIn } from "@/components/animation";

export default function FindAccountant() {
  return (
    <section className="w-full flex justify-center py-20 bg-slate-50/50">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row w-full overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100/50">
          
          <ScaleIn className="relative w-full lg:w-1/2 h-96 sm:h-120 lg:h-140 shrink-0">
            <Image
              src="/assets/contact-page.png"
              alt="Professional accounting advisory team"
              fill
              className="object-cover"
              sizes="(max-w-[1024px]) 100vw, 50vw"
              priority
            />
          </ScaleIn>

          <FadeInUp className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:w-1/2 bg-slate-50/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4 block">
              Professional Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
              Appoint Regulated Chartered Advisors
            </h2>

            <div className="relative pl-6 border-l-4 border-primary">
              <div className="text-primary/20 absolute -left-2 -top-6 pointer-events-none">
                <RiDoubleQuotesL className="w-12 h-12 fill-current" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed italic font-medium relative z-10">
                &ldquo;If you are appointing the services of a corporate financial advisor, 
                ensure they carry professional regulatory certifications. A registered 
                Chartered Accountant guarantees your files are handled with extreme 
                compliance, integrity, and operational accountability.&rdquo;
              </p>
            </div>
          </FadeInUp>
          
        </div>
      </div>
    </section>
  );
}