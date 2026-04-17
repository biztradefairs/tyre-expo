// app/exhibiting-enquiry/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ExhibitingEnquiryPage() {
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

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const productSectors = [
    "Mining Equipment and Machinery",
    "Production and Processing Equipment and Machinery",
    "Moving and Transportation Equipment and Machinery",
    "Explosives Equipment",
    "Spare Parts, Supplements and Components",
    "Mine Safety Equipment",
    "Power Supply Equipment for Mining Enterprises",
    "I.T. Technologies, Automation and Robotics in Mining Industry",
    "Laboratory Equipment and Materials",
    "Systems for Water and Air Purification, Environmental Monitoring",
    "Construction Materials and Equipment for Mining",
    "Engineering, Design and Service",
    "Industrial Optics & Media",
    "Other",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your enquiry has been submitted successfully. Our team will contact you shortly.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#F15A24] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#d44a18] transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            {/* Why Exhibit */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Why <span className="text-[#F15A24]">Exhibit?</span>
              </h2>
              <p className="text-gray-600 mb-5">
                Showcase your solutions to senior buyers across the full mining value chain.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                MiningWorld is the leading platform to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#F15A24] mt-1"></i>
                  <span className="text-gray-700">Connect with decision-makers from 39 countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#F15A24] mt-1"></i>
                  <span className="text-gray-700">Launch new products to buyers actively sourcing equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#F15A24] mt-1"></i>
                  <span className="text-gray-700">Build relationships with procurement heads and engineers</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#F15A24] mt-1"></i>
                  <span className="text-gray-700">Grow your presence in one of the world's richest resource markets.</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4 italic">
                With modernization, import substitution, and digitalization fueling demand, MiningWorld is where global suppliers find their next growth opportunity.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F15A24]">10,500+</div>
                <div className="text-gray-500 text-sm">Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F15A24]">550+</div>
                <div className="text-gray-500 text-sm">Exhibitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F15A24]">39</div>
                <div className="text-gray-500 text-sm">Visiting Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F15A24]">30,200</div>
                <div className="text-gray-500 text-sm">SQM</div>
              </div>
            </div>

            {/* Who You'll Meet */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Who You'll <span className="text-[#F15A24]">Meet:</span>
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Owners, CEOs, and Senior Executives</li>
                <li>• Plant Directors, Division Managers, and Procurement Heads</li>
                <li>• Mining and Mineral Processing Engineers</li>
                <li>• Operations and Maintenance Specialists</li>
                <li>• IT and Automation Experts</li>
                <li>• Buyers sourcing machinery, spare parts, and digital solutions across exploration, processing, transport, and safety</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-sm shadow-lg overflow-hidden">
              <div className="bg-[#F15A24] px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Enquiry to Exhibit</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Interest Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your level of interest
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
                          className="w-4 h-4 text-[#F15A24] focus:ring-[#F15A24]"
                          required
                        />
                        <span className="text-gray-700 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    First Name <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Type your first name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Last Name <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Type your last name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Company Name <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Type your Company Name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Company Website */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Company Website <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="Type your website URL"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Job Title <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Type your Job Title"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Country <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Type your country"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 201 555-0123"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Work Email <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="Type your email"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm"
                    required
                  />
                </div>

                {/* Product Sector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Product Sector <span className="text-[#F15A24]">*</span>
                  </label>
                  <select
                    name="productSector"
                    value={formData.productSector}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F15A24] focus:border-[#F15A24] text-sm bg-white"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Please verify your request.
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#F15A24] focus:ring-[#F15A24] rounded"
                      required
                    />
                    <span className="text-sm text-gray-600">Fill out a form</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#F15A24] hover:bg-[#d44a18] text-white font-semibold py-3 rounded-md transition-colors text-sm"
                >
                  Submit
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  T&C's by submitting the Newsletter form you agree to receive marketing communications, 
                  updates, and promotional materials from us. You can unsubscribe anytime by clicking the 
                  "unsubscribe" link on emails. For more information on how we handle your data, please 
                  refer to our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}