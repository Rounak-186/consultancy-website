"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactInfo, ContactForm } from "@/components/modules/contactpage/ContactForm";
import { FadeInUp, ScaleIn } from "@/components/animation";

export const Contact = () => {
  return (
    <section className="bg-white w-full">
      <FadeInUp>
        <NewsletterBanner />
      </FadeInUp>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 lg:py-32">
        <FadeInUp className="text-center mb-20">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
            REQUEST A <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CONSULTATION</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <FadeInUp delay={0.1} className="lg:col-span-5">
            <ContactInfo />
          </FadeInUp>
          <ScaleIn delay={0.2} className="lg:col-span-7">
            <ContactForm />
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="border-b border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold tracking-widest text-slate-900 uppercase mb-1">
            Sign Up For Insights
          </h3>
          <p className="text-xs text-slate-400 font-medium">
            Get our latest taxation alerts, filing due dates, and budget breakdowns.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL ADDRESS"
            required
            className="w-full md:w-64 bg-white border border-slate-200 px-5 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl shadow-xs"
          />
          <Button
            type="submit"
            variant="primary"
            className="px-6 py-3.5 text-xs font-extrabold uppercase shrink-0"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};
