// app/exhibiting-enquiry/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import BackToTop from "@/components/layout/BackToTop";
import PartnersSection from "@/components/home/PartnersSection";

const productSectors = [
  "Raw Materials & Rubber Compounds",
  "Tyre Manufacturing Machinery",
  "Rubber Processing Equipment",
  "Tyre Testing & Quality Control",
  "Retreading & Repair Materials",
  "Recycling & Sustainability Solutions",
  "Mold & Tooling Solutions",
  "Tyre Reinforcement Materials",
  "Additives & Performance Chemicals",
  "Automation & Industry 4.0",
  "Material Handling & Logistics",
  "Curing & Vulcanization Systems",
];

const statsData = [
  { value: "8,500+", label: "Trade Visitors" },
  { value: "350+", label: "Exhibitors" },
  { value: "50+", label: "Visiting Countries" },
  { value: "10th", label: "Edition" },
];

export default function ExhibitingEnquiryPage() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    interestLevel: "",
    firstName: "",
    lastName: "",
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    country: "",
    phone: "",
    workEmail: "",
    productSector: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.interestLevel || !formData.firstName || !formData.lastName || !formData.companyName || 
        !formData.companyWebsite || !formData.jobTitle || !formData.country || !formData.phone || 
        !formData.workEmail || !formData.productSector) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    if (!formData.agreeToTerms) {
      setSubmitError('Please verify your request');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-100 grid place-content-center bg-black">
        <div className="flex size-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-500 text-4xl">
          <div className="flex size-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-300 text-2xl"></div>
        </div>
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="intro-animation">
        <div className="page-spacing-wrapper pt-[120px] lg:pt-[140px]">
          <Container>
            <div className="min-h-[60vh] flex items-center justify-center py-12">
              <div className="bg-[#FCF8F3] rounded-sm p-8 max-w-md text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-white border border-gray-150 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#F08400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-bebas text-4xl text-black mb-3 uppercase tracking-wide">Thank You!</h2>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                <Link href="/">
                  <button className="bg-[#F08400] hover:bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }

  return (
    <div className="intro-animation font-sans">
      <div className="page-spacing-wrapper pt-[120px] lg:pt-[140px]">

        <Container className="py-10">
          <div className="animated-block">
            <div className="animated-block-target">
              <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-10 lg:gap-16 xl:gap-20">
                
                {/* LEFT SECTION - Content */}
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="space-y-4">
                    <p className="text-[#F08400] text-xs font-bold uppercase tracking-wider">
                      Become an Exhibitor
                    </p>
                    <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl leading-tight text-black uppercase">
                      Exhibit at <span className="text-[#F08400]">ITS Tyre Expo 2026</span>
                    </h1>
                  </div>
                  
                  {/* Why Exhibit */}
                  <div className="space-y-4">
                    <h2 className="font-bebas text-3xl text-black uppercase">
                      Why <span className="text-[#F08400]">Exhibit?</span>
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Showcase your solutions to senior buyers across the full tyre manufacturing value chain.
                    </p>
                    <p className="text-sm text-gray-800 font-bold">
                      ITS Tyre Expo is the leading platform to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Connect with decision-makers from 50+ countries",
                        "Launch new products to buyers actively sourcing equipment",
                        "Build relationships with procurement heads and engineers",
                        "Grow your presence in one of the world's fastest-growing tyre markets"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#F08400] mt-0.5">✓</span>
                          <span className="text-sm text-gray-650 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#FCF8F3] border border-gray-100 p-6 rounded-sm shadow-sm">
                    {statsData.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <h3 className="text-3xl font-bebas text-[#F08400] uppercase font-bold">{stat.value}</h3>
                        <p className="text-xs uppercase font-bold text-gray-600 mt-1 tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Who You'll Meet */}
                  <div className="space-y-4">
                    <h2 className="font-bebas text-3xl text-black uppercase">
                      Who You'll <span className="text-[#F08400]">Meet:</span>
                    </h2>
                    <ul className="space-y-2">
                      {[
                        "Owners, CEOs, and Senior Executives",
                        "Plant Directors, Division Managers, and Procurement Heads",
                        "Tyre Manufacturing and Rubber Processing Engineers",
                        "Operations and Maintenance Specialists",
                        "IT and Automation Experts",
                        "Buyers sourcing machinery, spare parts, and digital solutions"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#F08400]">•</span>
                          <span className="text-sm text-gray-650 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT SECTION - Form */}
                <div className="bg-[#FCF8F3] border border-gray-100 rounded-sm p-6 sm:p-8 shadow-sm">
                  <h2 className="font-bebas text-4xl text-black mb-6 uppercase tracking-wide">
                    Enquiry to <span className="text-[#F08400]">Exhibit</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Interest Level */}
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Your level of interest <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        {["Ready to book my stand", "Looking for more information", "Looking for sponsorship opportunities"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="interestLevel"
                              value={option}
                              checked={formData.interestLevel === option}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#F08400] focus:ring-[#F08400]"
                              required
                            />
                            <span className="text-gray-700 text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                        required
                      />
                    </div>

                    {/* Company Website */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Company Website <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        placeholder="www.yourcompany.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                        required
                      />
                    </div>

                    {/* Job Title & Country */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Job Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          placeholder="Job title"
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Country"
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          value={formData.workEmail}
                          onChange={handleChange}
                          placeholder="email@company.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Product Sector */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Product Sector <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="productSector"
                        value={formData.productSector}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm cursor-pointer"
                        required
                      >
                        <option value="">Select a product sector</option>
                        {productSectors.map((sector) => (
                          <option key={sector} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Verify Request */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Please verify your request <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#F08400] focus:ring-[#F08400] rounded-sm border-gray-300 cursor-pointer"
                          required
                        />
                        <span className="text-sm text-gray-650">I agree to fill out this form</span>
                      </div>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-sm p-3">
                        <p className="text-red-650 text-xs font-semibold text-center">{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#F08400] hover:bg-black text-white py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                      </button>
                    </div>

                    {/* Terms */}
                    <p className="text-xs text-gray-500 text-center leading-relaxed mt-4">
                      By submitting this form, you agree to receive marketing communications, 
                      updates, and promotional materials from us. You can unsubscribe anytime. 
                      For more information on how we handle your data, please refer to our 
                      <Link href="/privacy-policy" className="text-[#F08400] hover:underline ml-1">Privacy Policy</Link>.
                    </p>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </Container>

        <div className="mt-12 lg:mt-16">
          <PartnersSection />
        </div>
      </div>
      <BackToTop />

      <style jsx>{`
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .animated-block {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animated-block:nth-child(1) { animation-delay: 0.1s; }
      `}</style>
    </div>
  );
}