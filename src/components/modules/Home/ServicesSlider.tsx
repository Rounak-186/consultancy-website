"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { 
  RiArrowLeftSLine, 
  RiArrowRightSLine, 
  RiMicLine, 
  RiPriceTag3Line, 
  RiTargetLine, 
  RiShieldLine, 
  RiBookOpenLine, 
  RiStackLine 
} from "@remixicon/react";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/animation";

type serviceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

const servicesList: serviceType[] = [
  {
    icon: <RiMicLine />,
    title: "Auditing",
    description: "Statutory audits, concurrent reviews, forensic investigations, and internal compliance checking to ensure operational integrity.",
    href: "/services/auditing",
  },
  {
    icon: <RiPriceTag3Line className="rotate-45" />,
    title: "Transfer Pricing",
    description: "Expert transaction benchmarking, compliance documentation, and advisory under standard arm's length regulations.",
    href: "/services/specialized-services",
  },
  {
    icon: <RiTargetLine />,
    title: "Foreign Investment",
    description: "End-to-end guidance on FDI rules, cross-border corporate structure mapping, and compliance for overseas entries.",
    href: "/services/specialized-services",
  },
  {
    icon: <RiShieldLine />,
    title: "Corporate Compliance",
    description: "Fast-track company incorporation, minutes documentation, annual filings, and due diligence auditing.",
    href: "/services/corporate-compliance",
  },
  {
    icon: <RiBookOpenLine />,
    title: "Tax Consultancy",
    description: "Strategic tax planning, assessment representations, wealth audits, and GST compliance advisory.",
    href: "/services/tax-consultancy",
  },
  {
    icon: <RiStackLine />,
    title: "Specialized Services",
    description: "Asset evaluations, stock broker operations auditing, and custom corporate financing consultancies.",
    href: "/services/specialized-services",
  },
];

export const ServicesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section className="bg-services-bg py-24 lg:py-32 w-full overflow-hidden">
      
      <FadeInUp className="text-center mb-20">
        <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
          Specializations
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
          OUR CONSULTING <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SERVICES</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </FadeInUp>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative">
        <FadeInUp delay={0.1} className="relative px-2 sm:px-6">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-8">
              {servicesList.map((service, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 pl-8 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] py-10"
                >
                  <ServiceCard 
                    {...service} 
                    isActive={index === activeCardIndex} 
                    onMouseEnter={() => setActiveCardIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -left-5 sm:-left-9 lg:-left-14 -translate-y-1/2 w-14 h-14 rounded-2xl bg-slate-900 hover:bg-primary text-white flex items-center justify-center border border-slate-950 shadow-[0_8px_24px_rgba(0,0,0,0.16)] hover:-translate-x-0.5 active:scale-95 hover:scale-105 transition-all z-20 cursor-pointer"
            aria-label="Previous service"
          >
            <RiArrowLeftSLine className="w-7 h-7" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-5 sm:-right-9 lg:-right-14 -translate-y-1/2 w-14 h-14 rounded-2xl bg-slate-900 hover:bg-primary text-white flex items-center justify-center border border-slate-950 shadow-[0_8px_24px_rgba(0,0,0,0.16)] hover:translate-x-0.5 active:scale-95 hover:scale-105 transition-all z-20 cursor-pointer"
            aria-label="Next service"
          >
            <RiArrowRightSLine className="w-7 h-7" />
          </button>
        </FadeInUp>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={clsx(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                idx === selectedIndex 
                  ? "bg-primary w-8" 
                  : "bg-slate-200 hover:bg-slate-300 w-2.5"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  href, 
  isActive, 
  onMouseEnter 
}: serviceType & { 
  isActive: boolean; 
  onMouseEnter: () => void;
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={clsx(
        "bg-white h-full flex flex-col justify-between items-center px-8 pt-16 pb-10 rounded-3xl relative transition-all duration-350 min-h-[390px] border cursor-default select-none",
        isActive 
          ? "border-primary shadow-[0_12px_36px_rgba(79,70,229,0.12)] scale-[1.03] z-10" 
          : "border-slate-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
      )}
    >
      <div 
        className={clsx(
          "absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md",
          isActive 
            ? "bg-gradient-to-br from-primary to-indigo-600 text-white scale-110 shadow-[0_6px_20px_rgba(79,70,229,0.3)]" 
            : "bg-slate-50 text-slate-800 border border-slate-100"
        )}
      >
        <div className="w-6 h-6 flex items-center justify-center [&_svg]:w-6 [&_svg]:h-6">
          {icon}
        </div>
      </div>

      <div className="text-center w-full mt-4">
        <h3 className="text-lg font-extrabold tracking-wide text-slate-900 uppercase mb-4">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[260px] mx-auto font-medium">
          {description}
        </p>
      </div>

      <Button
        href={href}
        variant="text"
        className="mt-6 group/link text-xs uppercase tracking-wider font-bold"
      >
        Read More
        <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-200 ml-1.5 text-base">
          &rarr;
        </span>
      </Button>
    </div>
  );
};
