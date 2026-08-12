import React from "react";
import { Button } from "@/components/ui/Button";
import { FadeInUp, Typewriter } from "@/components/animation";

export const Hero = () => {
  return (
    <section 
      className="relative h-screen min-h-[750px] w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom opacity-45 pointer-events-none"
        style={{ backgroundImage: "url('/hero-image.png')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950 z-0" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <FadeInUp 
        duration={0.8}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
      >
        <span className="text-secondary text-sm sm:text-base font-extrabold tracking-[0.35em] uppercase mb-6 block">
          Your Company Tax &amp; Audit Advisors
        </span>
        
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase mb-8 leading-none max-w-4xl drop-shadow-md min-h-[1.2em]">
          Precision <span className="bg-gradient-to-r from-primary via-indigo-400 to-teal-400 bg-clip-text text-transparent"><Typewriter words={["Compliance", "Tax Advisory", "Auditing", "Assurance", "Consultancy"]} loop={true} cursorStyle="|" cursorClassName="text-teal-400 animate-cursor-blink ml-1" /></span>
        </h1>
        
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          Empowering enterprise scaling, statutory audits, transfer pricing documentation, and corporate tax advisory with integrity, clarity, and excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          <Button
            href="/services"
            variant="gradient"
            className="w-full sm:w-auto px-10 py-5"
          >
            Our Services
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="w-full sm:w-auto px-10 py-5 border-white/60 text-white hover:bg-white hover:text-slate-950"
          >
            Get In Touch
          </Button>
        </div>
      </FadeInUp>
    </section>
  );
};
