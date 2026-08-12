"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiCloseLine } from "@remixicon/react";
import { Typewriter } from "@/components/animation";

export default function KnowledgeEventsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setRegisterSuccess(true);
      setTimeout(() => {
        setIsRegisterOpen(false);
        setRegisterSuccess(false);
        setEmail("");
      }, 2000);
    }
  };

  const isMainPage = pathname === "/knowledge-events" || pathname === "/knowledge";

  if (isMainPage) {
    return (
      <div className="bg-slate-50/50 min-h-screen pb-24">
        <section className="relative w-full min-h-[550px] lg:min-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden py-20 lg:py-28">
          <Image
            src="/assets/knowledge-page.png"
            alt="Knowledge and Event Background"
            fill
            priority
            className="object-cover object-center pointer-events-none -z-10"
          />
          <div className="absolute inset-0 bg-slate-950/70 z-0 pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full h-full flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="max-w-xl text-left text-white animate-fade-in-up">
              <span className="text-amber-200 font-extrabold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
                Knowledge Sharing
              </span>
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase mb-6 min-h-[2.4em]">
                Knowledge <br />
                <span className="text-amber-200"><Typewriter words={["& Event"]} loop={false} cursorStyle="|" cursorClassName="text-amber-200 animate-cursor-blink ml-1" /></span>
              </h1>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                We know how large objects will act, but things on a small scale. Stay updated with regulatory amendments, direct tax updates, and GST filing rules.
              </p>
            </div>

            <div className="w-full sm:max-w-md bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-[32px] shadow-2xl border border-white/40 z-10 hover:-translate-y-1 transition-transform duration-300 animate-fade-in-up">
              <h3 className="text-slate-900 text-2xl font-black tracking-tight mb-3">
                Join As Accountant
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mb-8 leading-relaxed">
                Register to receive our weekly direct tax summaries, articles, and invitations to premium virtual seminars.
              </p>
              <button 
                onClick={() => setIsRegisterOpen(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest py-4.5 rounded-xl transition-all active:scale-98 cursor-pointer shadow-md select-none"
              >
                Register Now
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-50/50 z-0 pointer-events-none" />
        </section>
        {children}

        {isRegisterOpen && (
          <div className="fixed inset-0 bg-slate-950/70 z-999 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-slate-100 shadow-2xl relative animate-fade-in-up">
              <button 
                onClick={() => setIsRegisterOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-800 transition-colors"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
              
              {registerSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-extrabold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Registered Successfully!</h4>
                  <p className="text-slate-400 text-sm">Thank you for joining our professional advisors portal.</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Join As Accountant</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Enter your business email below to join Your Company knowledge network.</p>
                  
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Email Address:</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest py-4.5 rounded-xl shadow-md transition-colors"
                  >
                    Submit Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  let activeTab = "Blogs";
  let bannerBg = "/assets/blog.png";
  if (pathname.includes("/careers")) {
    activeTab = "Careers";
    bannerBg = "/assets/careers.png";
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      <section 
        className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center bg-cover bg-center overflow-visible bg-slate-950"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <div className="absolute inset-0 bg-slate-950/75 z-0" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
          <h1 className="text-white text-5xl sm:text-7xl font-black tracking-wider uppercase mb-4 drop-shadow-sm min-h-[1.2em]">
            <Typewriter key={activeTab} words={[activeTab]} loop={false} cursorStyle="|" cursorClassName="text-amber-200 animate-cursor-blink ml-1" />
          </h1>
          <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-semibold tracking-wide bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xs">
            <Link href="/" className="hover:text-primary transition-colors duration-250">
              Home
            </Link>
            <span className="text-white/20 font-light">&gt;</span>
            <span className="text-slate-300">Knowledge &amp; Events</span>
            <span className="text-white/20 font-light">&gt;</span>
            <span className="text-white">{activeTab}</span>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
}
