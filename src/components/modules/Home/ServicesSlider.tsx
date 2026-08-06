"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { RiArrowLeftSLine, RiArrowRightSLine, RiMicLine, RiPriceTag3Line, RiTargetLine, RiShieldLine, RiBookOpenLine, RiStackLine } from "@remixicon/react";
import { Button } from "@/components/ui/Button";

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
    description: "LOREM IPSUM gcjcjgchvhvhhjvhkjbkbj fcghcgcgcjcgj hgvhvh ghvhvh bgjkbkjb",
    href: "/services/auditing",
  },
  {
    icon: <RiPriceTag3Line className="rotate-45" />,
    title: "Transfer Pricing",
    description: "LOREM IPSUM gcjcjgchvhvhhjvhkjbkbj fcghcgcgcjcgj hgvhvh ghvhvh bgjkbkjb",
    href: "/services/specialized-services",
  },
  {
    icon: <RiTargetLine />,
    title: "Foreign Investment",
    description: "LOREM IPSUM gcjcjgchvhvhhjvhkjbkbj fcghcgcgcjcgj hgvhvh ghvhvh bgjkbkjb",
    href: "/services/specialized-services",
  },
  {
    icon: <RiShieldLine />,
    title: "Corporate Compliance",
    description: "LOREM IPSUM gcjcjgchvhvhhjvhkjbkbj fcghcgcgcjcgj hgvhvh ghvhvh bgjkbkjb",
    href: "/services/corporate-compliance",
  },
  {
    icon: <RiBookOpenLine />,
    title: "Tax Consultancy",
    description: "LOREM IPSUM gcjcjgchvhvhhjvhkjbkbj fcghcgcgcjcgj hgvhvh ghvhvh bgjkbkjb",
    href: "/services/tax-consultancy",
  },
  {
    icon: <RiStackLine />,
    title: "Specialized Services",
    description: "LOREM IPSUM gcjcjgchvhvhhjvhkjbkbj fcghcgcgcjcgj hgvhvh ghvhvh bgjkbkjb",
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

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="bg-services-bg py-32 lg:py-40 w-full overflow-hidden">
      <div className="text-center mb-28">
        <div className="relative inline-block px-12 py-4.5 font-extrabold text-3xl tracking-widest text-slate-950 uppercase bg-white">
          Our Services
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
          <div className="absolute top-3 bottom-3 left-3 w-[3px] bg-primary" />
          <div className="absolute top-3 bottom-3 right-3 w-[3px] bg-primary" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-20 relative">
        <div className="relative px-6">
          <div className="overflow-hidden" ref={emblaRef}>
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
            className="absolute top-1/2 -left-6 sm:-left-10 lg:-left-12 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-600 hover:bg-gray-800 text-white flex items-center justify-center shadow-md transition-colors z-10"
            aria-label="Previous service"
          >
            <RiArrowLeftSLine className="w-7 h-7" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 sm:-right-10 lg:-right-12 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-600 hover:bg-gray-800 text-white flex items-center justify-center shadow-md transition-colors z-10"
            aria-label="Next service"
          >
            <RiArrowRightSLine className="w-7 h-7" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={clsx(
                "w-3.5 h-3.5 rounded-full transition-all duration-300",
                idx === selectedIndex 
                  ? "bg-gray-700 w-7" 
                  : "bg-gray-300 hover:bg-gray-400"
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
        "bg-white h-full flex flex-col justify-between items-center px-10 pt-16 pb-10 rounded-none relative transition-all duration-300 min-h-[380px]",
        isActive 
          ? "border-[3px] border-primary shadow-xl scale-[1.03] z-10" 
          : "border border-gray-200/60 shadow-sm"
      )}
    >
      <div 
        className={clsx(
          "absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300",
          isActive 
            ? "border-[3px] border-primary text-primary scale-110 shadow-sm" 
            : "border border-gray-200/80 text-slate-800"
        )}
      >
        <div className="w-7 h-7 flex items-center justify-center [&_svg]:w-7 [&_svg]:h-7">
          {icon}
        </div>
      </div>

      <div className="text-center w-full mt-4">
        <h3 className="text-xl font-bold tracking-wider text-slate-900 uppercase mb-5">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-[280px] mx-auto">
          {description}
        </p>
      </div>

      <Button
        href={href}
        variant="text"
        className="mt-8 group/link"
      >
        Read More
        <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-200 ml-1.5 text-lg">
          &rarr;
        </span>
      </Button>
    </div>
  );
};
