"use client";

import React, { useState } from "react";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "@remixicon/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FadeInUp, ScaleIn } from "@/components/animation";

export const ContactFormSection = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 lg:py-32">
        <FadeInUp className="text-center mb-20">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
            Request Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
            SEND US A <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MESSAGE</span>
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

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-slate-900 leading-snug mb-4">
          Connect with our advisors today or drop us a message.
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
          Do you need expert statutory auditing or transfer pricing advice? Have queries about newly proposed direct tax slab rates? Feel free to contact our partners via email or phone, or submit the consultation request form.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
            <RiMapPinLine className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Our Office</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed font-medium">
              416 Churchill Rd, Kilburn 5082
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="p-3 bg-secondary/10 rounded-xl text-secondary mt-1">
            <RiPhoneLine className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Call Us</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed font-medium">
              +1 90898718876
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="p-3 bg-accent/10 rounded-xl text-accent mt-1">
            <RiMailLine className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Us</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed font-medium">
              info@yourcompany.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    companyType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      companyType: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xs">
      <h3 className="text-lg sm:text-xl font-bold tracking-wide text-slate-900 uppercase mb-8">
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input
          label="Full Name:"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Email Address:"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone Number:"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Service Selection:"
            type="select"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Please Select"
            options={[
              "Auditing & Assurance",
              "Transfer Pricing",
              "Foreign Investment",
              "Corporate Compliance",
              "Tax Consultancy",
              "Specialized Services",
            ]}
            required
          />
          <Input
            label="Company Type:"
            type="select"
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            placeholder="Please Select"
            options={["Startups", "SMEs", "Multinationals"]}
            required
          />
        </div>
        <Input
          label="How can we help you?"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="flex justify-start mt-4">
          <Button
            type="submit"
            variant="gradient"
            className="px-12 py-4.5 font-bold shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
};
