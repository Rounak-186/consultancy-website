import React from "react";
import { ContactHero } from "@/components/modules/contactpage/ContactHero";
import FindAccountant from "@/components/modules/contactpage/ContactDetails";
import { ContactFormSection } from "@/components/modules/contactpage/ContactForm";
import MapBanner from "@/components/modules/contactpage/MapBanner";

export default function ContactPage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden">
      <ContactHero />
      <FindAccountant />
      <MapBanner />
      <ContactFormSection />
    </main>
  );
}
