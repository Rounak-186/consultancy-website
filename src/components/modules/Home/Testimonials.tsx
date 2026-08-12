"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { RiDoubleQuotesL } from "@remixicon/react";
import { FadeInUp } from "@/components/animation";

type testimonialType = {
  name: string;
  role: string;
  content: string;
};

const testimonialsList: testimonialType[] = [
  {
    name: "Mr. Simon Wise",
    role: "Karumba Consulting Ltd (London)",
    content: "With thanks to the team at Your Company. Their statutory compliance advisory and auditing guidance saved us time during international expansions.",
  },
  {
    name: "Diane Vance",
    role: "Director, Solis FinTech",
    content: "Your Company's transfer pricing advisors resolved our complex cross-border compliance cases smoothly. We highly recommend their tax consulting team.",
  },
  {
    name: "Kenneth Graham",
    role: "Managing Director, Nexa Corp",
    content: "An exceptional group of Chartered Accountants who bring absolute clarity to corporate filings, tax audit regulations, and financial planning.",
  },
  {
    name: "Elena Rostova",
    role: "Partner, Rostova Capital",
    content: "Prompt responses, thorough tax diligence audits, and reliable representations. Your Company has been an invaluable asset to our venture portfolio.",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const handleReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    setTimeout(() => {
      handleReInit();
      handleSelect();
    }, 0);

    emblaApi.on("reInit", handleReInit);
    emblaApi.on("select", handleSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section 
      className="relative py-24 lg:py-32 w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/testimonials-bg.png')" }}
    >
      <div className="absolute inset-0 bg-slate-950/85 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <FadeInUp className="text-center mb-16">
          <span className="text-secondary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Success Stories
          </span>
          <h2 className="text-white text-3xl sm:text-5xl font-black uppercase tracking-tight">
            WHAT OUR CLIENTS <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">SAY</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-teal-400 mx-auto mt-4 rounded-full" />
        </FadeInUp>

        <FadeInUp delay={0.1} className="relative px-2 sm:px-6">
          <div className="overflow-visible cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-8">
              {testimonialsList.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 pl-8 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] py-6"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={clsx(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === selectedIndex 
                  ? "bg-white w-8" 
                  : "bg-white/30 hover:bg-white/50 w-2.5"
              )}
              aria-label={`Go to testimonial slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, content }: testimonialType) => {
  return (
    <div className="bg-slate-900/40 border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between items-center text-center p-8 sm:p-10 rounded-[32px] shadow-lg relative min-h-[350px] text-white">
      <div className="text-primary mb-6 shrink-0">
        <RiDoubleQuotesL className="w-12 h-12 transform scale-x-[-1] fill-current opacity-80" />
      </div>

      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-6 flex-1 flex items-center">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-auto shrink-0">
        <h4 className="text-sm sm:text-base font-extrabold text-white">
          {name}
        </h4>
        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mt-1">
          {role}
        </span>
      </div>
    </div>
  );
};
