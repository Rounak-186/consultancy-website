"use client";

import React, { useState } from "react";
import { FadeInUp, ScaleIn } from "@/components/animation";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    resume: null as File | null,
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        resume: null,
        message: "",
      });
    }, 2500);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <FadeInUp className="lg:col-span-5 text-left">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-100 select-none uppercase tracking-wide leading-none">
            Careers
          </h2>
          <div className="w-16 h-1.5 bg-primary mt-6 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base font-medium mt-8 leading-relaxed max-w-sm">
            Build your professional future at Your Company. We are always searching for talented CAs, legal consultants, and administrative experts.
          </p>
        </FadeInUp>

        <ScaleIn delay={0.1} className="lg:col-span-7">
          <div className="bg-slate-50 border border-slate-100 rounded-4xl p-8 sm:p-12 shadow-xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                For Career Opportunities
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase">
                Please Fill The Form
              </h3>
            </div>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-extrabold">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Application Received!</h4>
                <p className="text-slate-400 text-sm">Our HR desk will review your details and resume shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Full Name:</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Email Address:</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Phone Number:</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 999 999 999"
                      className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Target Designation:</label>
                    <input 
                      type="text" 
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      placeholder="Senior Audit Associate"
                      className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Attach Resume (PDF/Word):</label>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-all shadow-xs file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary file:cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">Cover Letter / Message:</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-xs"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-16 py-4 bg-primary hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer select-none"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScaleIn>

      </div>
    </section>
  );
}
