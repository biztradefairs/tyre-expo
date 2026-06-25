// app/exhibiting-enquiry/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="page-spacing-wrapper pt-[100px] sm:pt-[120px] lg:pt-[140px]">
          <Container>
            <div className="min-h-[60vh] flex items-center justify-center py-12 sm:py-16 lg:py-20">
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md text-center border border-gray-200">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#F08400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-black mb-2">Thank You!</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6">Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                <Link href="/">
                  <button className="bg-[#F08400] px-8 sm:px-10 py-2.5 sm:py-3 text-lg sm:text-xl font-bebas text-white transition-all hover:bg-black">
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
    <div className="intro-animation">
      <div className="page-spacing-wrapper">
        {/* Account for fixed header */}
        <div className="pt-[100px] sm:pt-[120px] lg:pt-[140px]">

          <Container>
            <div className="animated-block">
              <div className="animated-block-target">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
                  
                  {/* LEFT SECTION - Content */}
                  <div className="flex flex-col gap-5 sm:gap-6">
                    <p className="text-[#F08400] text-xs sm:text-sm font-semibold uppercase tracking-[1.5px]">
                      Become an Exhibitor
                    </p>
                    <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                      Exhibit at ITS Tyre Expo 2026
                    </h1>
                    
                    {/* Why Exhibit */}
                    <div>
                      <h2 className="font-bebas text-xl sm:text-2xl text-black mb-3">
                        Why <span className="text-[#F08400]">Exhibit?</span>
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                        Showcase your solutions to senior buyers across the full tyre manufacturing value chain.
                      </p>
                      <p className="text-sm sm:text-base text-gray-800 font-semibold mb-3">
                        ITS Tyre Expo is the leading platform to:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Connect with decision-makers from 50+ countries",
                          "Launch new products to buyers actively sourcing equipment",
                          "Build relationships with procurement heads and engineers",
                          "Grow your presence in one of the world's fastest-growing tyre markets"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-[#F08400] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs sm:text-sm text-gray-500 mt-3 italic">
                        With sustainability, automation, and digitalization fueling demand, 
                        ITS Tyre Expo is where global suppliers find their next growth opportunity.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-between bg-gray-100 px-4 sm:px-6 py-6 sm:py-8 rounded-md gap-4 sm:gap-0">
                      {statsData.map((stat, idx) => (
                        <React.Fragment key={idx}>
                          <div className="text-center flex-1 min-w-[80px]">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[#F08400]">{stat.value}</h3>
                            <p className="text-xs sm:text-sm tracking-wide text-black mt-1 sm:mt-2">{stat.label}</p>
                          </div>
                          {idx < statsData.length - 1 && (
                            <div className="hidden md:block h-12 w-px bg-gray-300"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Who You'll Meet */}
                    <div>
                      <h2 className="font-bebas text-xl sm:text-2xl text-black mb-3">
                        Who You'll <span className="text-[#F08400]">Meet:</span>
                      </h2>
                      <ul className="space-y-1.5">
                        {[
                          "Owners, CEOs, and Senior Executives",
                          "Plant Directors, Division Managers, and Procurement Heads",
                          "Tyre Manufacturing and Rubber Processing Engineers",
                          "Operations and Maintenance Specialists",
                          "IT and Automation Experts",
                          "Buyers sourcing machinery, spare parts, and digital solutions"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#F08400] text-sm">•</span>
                            <span className="text-sm sm:text-base text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT SECTION - Form */}
                  <div className="bg-[#FCF8F3] rounded-lg p-5 sm:p-6 lg:p-8 shadow-md">
                    <h2 className="font-bebas text-2xl sm:text-3xl text-[#F08400] mb-6">
                      Enquiry to Exhibit
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Interest Level */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                            required
                          />
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>

                      {/* Company Website */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Website <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          name="companyWebsite"
                          value={formData.companyWebsite}
                          onChange={handleChange}
                          placeholder="www.yourcompany.com"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                          required
                        />
                      </div>

                      {/* Job Title & Country */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder="Job title"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="workEmail"
                            value={formData.workEmail}
                            onChange={handleChange}
                            placeholder="email@company.com"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                            required
                          />
                        </div>
                      </div>

                      {/* Product Sector */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Sector <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="productSector"
                          value={formData.productSector}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Please verify your request <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#F08400] focus:ring-[#F08400] rounded border-gray-300"
                            required
                          />
                          <span className="text-sm text-gray-600">I agree to fill out this form</span>
                        </div>
                      </div>

                      {/* Error Message */}
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-3">
                          <p className="text-red-600 text-sm text-center">{submitError}</p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#F08400] px-8 py-3 text-lg font-bebas text-white transition-all hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                      </button>

                      {/* Terms */}
                      <p className="text-xs text-gray-500 text-center mt-4">
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

          <PartnersSection />
          <BackToTop />
        </div>
      </div>

      <style jsx>{`
        .global-transition {
          transition: all 0.3s ease;
        }
        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
      `}</style>
    </div>
  );
}