import React from "react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section 
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      <div className="absolute inset-0 bg-slate-900/60 z-0" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-white/80 text-base sm:text-lg font-semibold tracking-[0.35em] uppercase mb-6 block">
          We Provide Real
        </span>
        <h1 className="text-white text-6xl sm:text-8xl md:text-9xl font-black tracking-wider uppercase mb-14 leading-none drop-shadow-sm">
          World Solution
        </h1>
        <Button
          href="/services"
          variant="outline"
        >
          About More
        </Button>
      </div>
    </section>
  );
};
