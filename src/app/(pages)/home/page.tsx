import React from "react";
import { Hero } from "@/components/modules/Home/Hero";
import { ServicesSlider } from "@/components/modules/Home/ServicesSlider";
import { WhoIAm } from "@/components/modules/Home/WhoIAm";
import { Capabilities } from "@/components/modules/Home/Capabilities";
import { Testimonials } from "@/components/modules/Home/Testimonials";
import { Contact } from "@/components/modules/Home/Contact";

const HomePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero />
      <ServicesSlider />
      <WhoIAm />
      <Capabilities />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;
