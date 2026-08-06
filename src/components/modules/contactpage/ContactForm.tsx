"use client";
import React, { useState } from "react";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "@remixicon/react";
import { Input } from "@/components/ui/Input";

export const ContactFormSection = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-28 lg:py-36">
        <div className="text-center mb-24">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-indigo-950 block mb-2">
            We'd Love
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider text-primary uppercase">
            To Hear From You
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-indigo-950 leading-snug mb-4">
          Call us on 111222333444 or send us a message.
        </h3>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          Do you need NDIS services? Do you have a question that we can help you
          with. Please feel free to contact us via phone, or leave a message on
          the form. Alternatively, you can visit our North Lakes office.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
            <RiMapPinLine className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">Our Office</h4>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              416 Churchill Rd, Kilburn 5082
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
            <RiPhoneLine className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-rose-500">Call Us</h4>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              +91 (033) 668 33333
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
            <RiMailLine className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-indigo-950">Email Us</h4>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              info@ABCgmail.com
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
    <div className="bg-indigo-50/40 border border-indigo-100/50 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-indigo-950 mb-8">
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
        <Input
          label="Email:"
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
        <Input
          label="Select the service you are interested in:"
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
          label="Company you are interested in:"
          type="select"
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          placeholder="Please Select"
          options={["Startups", "SMEs", "Multinationals"]}
          required
        />
        <Input
          label="How can we help you ?"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-12 py-3.5 bg-gradient-to-r from-teal-600 to-primary text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-md hover:from-teal-700 hover:to-indigo-600 transition-all select-none cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
