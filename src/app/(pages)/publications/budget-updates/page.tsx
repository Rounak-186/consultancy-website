"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  RiShareLine, 
  RiBookmarkLine, 
  RiPrinterLine, 
  RiText, 
  RiArrowRightLine,
  RiMailLine
} from "@remixicon/react";
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animation";

export default function BudgetUpdatesPage() {
  const leftNewsItems = [
    "Union Budget 2025: Upper hand to middle class",
    "Empowerment, growth, and tax relief: Economists cheer Union budget",
    "Budget touches all four key engines of growth: India Inc",
    "Income tax salary-wise details: How to calculate tax if pay is over ₹12.75 lac",
    "Homeowners get simpler tax rules, higher limits in Sitharaman's budget"
  ];

  const rightNewsItems = [
    "Relief for senior citizens earning interest, but queries remain",
    "Thumbs up or down? How India Inc reacted to Nirmala Sitharaman's Budget 2025",
    "What the Budget 2025 means for economic reforms",
    "Finance minister snips import tariffs to boost local manufacturing"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-12 sm:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        <ScaleIn className="lg:col-span-4 flex">
          <div className="w-full bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-md border border-slate-800 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[360px] lg:min-h-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
            
            <div className="z-10">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                Union Budget
              </span>
            </div>

            <div className="z-10 mt-auto">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2 uppercase leading-tight group-hover:text-indigo-200 transition-colors">
                Tax Reforms:<br />A Closer Look
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Analysis of tax policy transformations and key highlights.
              </p>
            </div>
          </div>
        </ScaleIn>

        <ScaleIn delay={0.1} className="lg:col-span-8 flex">
          <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {leftNewsItems.map((item, idx) => (
                  <StaggerItem key={idx} className="flex gap-2 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-slate-700 hover:text-primary text-xs sm:text-sm font-semibold transition-colors duration-200 leading-snug">
                      {item}
                    </p>
                  </StaggerItem>
                ))}
              </div>

              <div className="space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {rightNewsItems.map((item, idx) => (
                    <StaggerItem key={idx} className="flex gap-2 group cursor-pointer">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-slate-700 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-200 leading-snug">
                        {item}
                      </p>
                    </StaggerItem>
                  ))}
                </div>

                <div className="pt-4 md:pt-0">
                  <Link 
                    href="#more-news" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wider group"
                  >
                    More News 
                    <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </StaggerContainer>
          </div>
        </ScaleIn>
      </div>

      <FadeInUp className="border-b border-slate-200 pb-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Union Budget 2025: Upper hand to middle class
        </h2>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <FadeInUp className="lg:col-span-8 bg-white border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            3.5% remittance tax: Sending money from US to India to upset many
          </h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-slate-100 py-4 gap-4 mb-6">
            <div className="text-slate-400 text-xs font-semibold">
              By: <span className="text-slate-700 font-bold">Kayzard E. Adajania, ET Bureau</span> · Last Updated: May 28, 2025, 03:45 PM IST
            </div>
            <div className="flex items-center gap-2">
              <button title="Share" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <RiShareLine className="w-4 h-4" />
              </button>
              <button title="Bookmark" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <RiBookmarkLine className="w-4 h-4" />
              </button>
              <button title="Print" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <RiPrinterLine className="w-4 h-4" />
              </button>
              <button title="Font Size" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                <RiText className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-amber-50/40 border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-2xl mb-8">
            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
              <strong className="text-amber-800 uppercase tracking-wider text-xs block mb-1">Synopsis</strong>
              An upcoming US bill proposes a 3.5% tax on remittances sent by non-citizens, impacting Indians who are a significant portion of the US immigrant population. This tax, aimed at protecting US dollar outflows, may affect investments and corporate mobility programs. Experts suggest it could discourage remittances to India and prompt increased US investments.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-100">
            <Image 
              src="/assets/remittance.png" 
              alt="Currency Remittance" 
              width={800} 
              height={550} 
              className="w-full h-[320px] sm:h-[480px] lg:h-[550px] object-cover"
            />
            <div className="bg-slate-900/50 absolute bottom-0 inset-x-0 p-3 text-white text-[11px] font-medium backdrop-blur-xs">
              Proposed US tax on cross-border transactions raises compliance concerns for NRI assets.
            </div>
          </div>

          <div className="prose max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Sending money from the US to India could get costlier in 2026 if President Donald Trump&apos;s proposal goes through. 
              The 1,116-page <strong className="text-slate-900 font-bold italic">“Big Beautiful Bill”</strong>—which outlines tax reforms and spending cuts—has cleared the House of Representatives and now moves to the Senate. A vote is likely in late June or July. If passed, the bill will become law.
            </p>
            <p>
              The provision has sparked significant concern among foreign workers and tax strategists. Under Section 804 of the proposed bill, any international outbound wire transfer or remittance executed by a non-citizen resident would be subject to a flat 3.5% processing surcharge. The funds generated are proposed to be diverted towards local infrastructure projects.
            </p>
            <p>
              India, being the largest recipient of global remittances (surpassing $100 billion annually, with a major chunk originating from the United States), stands to face a significant structural impact. Families relying on domestic maintenance funds, as well as high-net-worth NRI investments in Indian securities and real estate, will see immediate friction.
            </p>
            <p>
              “This is a double whammy for corporate mobility teams,” explains Sarah Jenkins, Partner at Your Company. “Not only will it increase the cost of talent relocation and inter-company transfers, but it also creates compliance overheads regarding who qualifies as a tax citizen under double-taxation treaties.”
            </p>
          </div>
        </FadeInUp>

        <div className="lg:col-span-4 space-y-8">
          <ScaleIn delay={0.2}>
            <div className="bg-[#121c2c] border border-amber-500/20 text-white rounded-3xl p-8 relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[320px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent)] pointer-events-none" />
              
              <div className="text-center py-4 border-b border-amber-500/10">
                <span className="font-serif italic text-amber-400 text-lg tracking-[0.2em] uppercase block">
                  The Leela
                </span>
                <span className="text-[10px] text-slate-400 tracking-[0.3em] uppercase block mt-1">
                  Residences &amp; Hotels
                </span>
              </div>

              <div className="text-center my-6">
                <h4 className="text-amber-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
                  Bid/Offer Open
                </h4>
                <p className="text-xl sm:text-2xl font-serif text-slate-100 font-light mb-1">
                  BID/OFFER CLOSES ON
                </p>
                <p className="text-lg font-bold text-amber-400">
                  WEDNESDAY, MAY 28, 2025
                </p>
                <p className="text-[11px] text-slate-500 mt-2 max-w-[240px] mx-auto">
                  *Subject to SEBI guidelines. Read all scheme related documents carefully.
                </p>
              </div>

              <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-colors duration-200 cursor-pointer select-none">
                Submit Bid Proposal
              </button>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.3}>
            <div className="bg-rose-50/50 border border-rose-100/60 rounded-3xl p-8 shadow-sm">
              <span className="text-xs font-extrabold text-rose-500 uppercase tracking-widest block mb-1">
                Newsletter
              </span>
              <h4 className="text-xl font-black text-slate-900 mb-3">
                SUBSCRIBE TO YOUR COMPANY WEALTH
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                The week&apos;s best and most critical financial advisory and tax-saving advice tailored for all your personal and corporate needs.
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 bg-white border border-rose-100 focus:border-rose-400 focus:outline-none rounded-xl text-slate-800 text-xs sm:text-sm transition-colors"
                  />
                  <RiMailLine className="absolute right-3.5 top-3.5 text-slate-400 w-4 h-4" />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
