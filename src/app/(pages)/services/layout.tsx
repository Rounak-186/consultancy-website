import React from "react";
import { ServicesHero } from "@/components/modules/services/ServicesHero";

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden">
      <ServicesHero />
      {children}
    </main>
  );
}
