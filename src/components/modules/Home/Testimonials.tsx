"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { RiDoubleQuotesL } from "@remixicon/react";

type testimonialType = {
  name: string;
  role: string;
  content: string;
};

const testimonialsList: testimonialType[] = [
  {
    name: "Mr. Simon Wise",
    role: "Karumba Consulting Ltd (London)",
    content: "With thanks to the team NBC team in Delhi. Thanks for all your support, We look forward to working further with you.",
  },
  {
    name: "Mr. Simon Wise",
    role: "Karumba Consulting Ltd (London)",
    content: "With thanks to the team NBC team in Delhi. Thanks for all your support, We look forward to working further with you.",
  },
  {
    name: "Mr. Simon Wise",
    role: "Karumba Consulting Ltd (London)",
    content: "With thanks to the team NBC team in Delhi. Thanks for all your support, We look forward to working further with you.",
  },
  {
    name: "Mr. Simon Wise",
    role: "Karumba Consulting Ltd (London)",
    content: "With thanks to the team NBC team in Delhi. Thanks for all your support, We look forward to working further with you.",
  },
  {
    name: "Mr. Simon Wise",
    role: "Karumba Consulting Ltd (London)",
    content: "With thanks to the team NBC team in Delhi. Thanks for all your support, We look forward to working further with you.",
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

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section 
      className="relative py-32 lg:py-40 w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/testimonials-bg.png')" }}
    >
      <div className="absolute inset-0 bg-slate-950/75 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase mb-6 tracking-wide">
            What Our Clients Say About Us
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We offer strategic planning services that help you organize, prioritize, and execute your goals efficiently with a clear roadmap for success.
          </p>
        </div>

        <div className="relative px-6">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
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
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={clsx(
                "w-3.5 h-3.5 rounded-full transition-all duration-300",
                idx === selectedIndex 
                  ? "bg-white w-7" 
                  : "bg-white/40 hover:bg-white/60"
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
    <div className="bg-yellow-500/45 border border-yellow-400/20 backdrop-blur-md h-full flex flex-col justify-between items-center text-center p-10 rounded-[32px] shadow-lg relative min-h-[350px] text-white">
      <div className="text-white mb-6">
        <RiDoubleQuotesL className="w-14 h-14 transform scale-x-[-1] fill-current" />
      </div>

      <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium mb-8">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-auto">
        <h4 className="text-lg font-bold text-white">
          {name}
        </h4>
        <span className="text-xs font-semibold text-white/60 tracking-wider uppercase block mt-1">
          {role}
        </span>
      </div>
    </div>
  );
};
