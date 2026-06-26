// app/event-brochure/page.tsx
"use client";

import { useState } from "react";
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

const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahrain", "Bangladesh", "Belarus", "Belgium", "Bolivia", "Botswana", "Brazil", "Bulgaria",
  "Canada", "Chile", "China", "Colombia", "Congo", "Croatia", "Czech Republic", "Denmark",
  "Ecuador", "Egypt", "Estonia", "Finland", "France", "Georgia", "Germany", "Ghana",
  "Greece", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan",
  "Latvia", "Lebanon", "Lithuania", "Luxembourg", "Malaysia", "Mexico", "Mongolia", "Morocco",
  "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman", "Pakistan", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Serbia", "Singapore",
  "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden",
  "Switzerland", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Turkey", "Turkmenistan", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vietnam", "Zambia", "Zimbabwe"
];

export default function MiningFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    jobTitle: "",
    country: "",
    phone: "",
    email: "",
    productSectors: [] as string[],
    confirm: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleSectorToggle = (sector: string) => {
    setFormData(prev => ({
      ...prev,
      productSectors: prev.productSectors.includes(sector)
        ? prev.productSectors.filter(s => s !== sector)
        : [...prev.productSectors, sector]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.jobTitle || !formData.country || !formData.phone || !formData.email) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    if (!formData.confirm) {
      setSubmitError('Please confirm that you are not a robot');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          website: "",
          jobTitle: "",
          country: "",
          phone: "",
          email: "",
          productSectors: [],
          confirm: false,
        });
      }, 3000);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20 font-sans">
        <Container>
          <div className="bg-[#FCF8F3] border border-gray-100 rounded-sm p-8 max-w-md text-center shadow-sm mx-auto">
            <div className="w-16 h-16 bg-white border border-gray-150 rounded-sm flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#F08400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-bebas text-4xl text-black mb-3 uppercase tracking-wide">Thank You!</h2>
            <p className="text-sm text-gray-655 mb-6 leading-relaxed">Your brochure request has been submitted successfully. Download link will be sent to your email.</p>
            <Link href="/">
              <button className="bg-[#F08400] hover:bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer">
                Back to Home
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="intro-animation font-sans">
      <section className="bg-white pt-[120px] lg:pt-[140px] pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 items-start">
            
            {/* LEFT SECTION */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-44 h-fit">
              <div className="space-y-3">
                <p className="text-[#F08400] text-xs font-bold uppercase tracking-wider">
                  Plan Your Participation
                </p>
                <h1 className="font-bebas text-5xl sm:text-6xl leading-[1.05] tracking-tight uppercase text-black">
                  ITS TYRE EXPO <span className="text-[#F08400]">2026</span>
                </h1>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Step into Asia's most influential tyre manufacturing & rubber processing exhibition. 
                ITS Tyre Expo connects global suppliers of raw materials, manufacturing machinery, 
                testing tools, and automated systems with thousands of qualified buyers from 50+ countries.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#FCF8F3] border border-gray-100 p-6 rounded-sm shadow-sm">
                {[
                  { value: "8,500+", label: "Visitors" },
                  { value: "350+", label: "Exhibitors" },
                  { value: "50+", label: "Countries" },
                  { value: "10th", label: "Edition" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <h3 className="text-3xl font-bebas text-[#F08400] uppercase font-bold">
                      {item.value}
                    </h3>
                    <p className="text-[10px] uppercase font-bold text-gray-600 mt-1 tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* WHY DOWNLOAD */}
              <div className="space-y-4 pt-4 border-t border-gray-200"> 
                <h3 className="font-bebas text-2xl text-black uppercase font-bold">
                  Why Download the Brochure?
                </h3>
                <ul className="text-xs text-gray-650 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F08400]">•</span>
                    <span>Engage directly with decision-makers – 85% influence or approve purchasing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F08400]">•</span>
                    <span>Showcase solutions to buyers seeking machinery and processing technology.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F08400]">•</span>
                    <span>Build year-round visibility through our digital platform.</span>
                  </li>
                </ul>
              </div>

              {/* BROCHURE IMAGE */}
              <div className="pt-4 border-t border-gray-200 flex justify-center lg:justify-start">
                <div className="relative w-40 h-52 rotate-[-4deg] shadow-md rounded-sm overflow-hidden border border-gray-150">
                  <Image
                    src="https://cdn.itegroupnews.com/Sales_Brochure_84b3c56f9d.png"
                    alt="Event Brochure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-[#FCF8F3] border border-gray-100 rounded-sm p-6 md:p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-black font-bebas text-3xl font-bold uppercase tracking-wide">
                  Download Event <span className="text-[#F08400]">Brochure</span>
                </h2>
                <p className="text-xs text-gray-600 font-sans">Fill in the details to download our concise event brochure.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
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
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                    required
                  />
                </div>

                {/* Company Website */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Company Website
                  </label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                </div>

                {/* Job Title */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                    required
                  />
                </div>

                {/* Country */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm cursor-pointer"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Product Sector */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Product Sector <span className="text-red-500">*</span>
                  </label>
                  <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-sm p-3 bg-white shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {productSectors.map((sector, index) => (
                        <label key={index} className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded-sm">
                          <input
                            type="checkbox"
                            checked={formData.productSectors.includes(sector)}
                            onChange={() => handleSectorToggle(sector)}
                            className="mt-0.5 w-4 h-4 text-[#F08400] rounded-sm border-gray-300 focus:ring-[#F08400]"
                          />
                          <span className="text-xs text-gray-650 font-medium">{sector}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CAPTCHA / Confirm */}
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-sm">
                  <input
                    type="checkbox"
                    name="confirm"
                    checked={formData.confirm}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#F08400] rounded-sm border-gray-300 focus:ring-[#F08400] cursor-pointer"
                    required
                  />
                  <span className="text-sm text-gray-650">I'm not a robot</span>
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
                    {isSubmitting ? 'Submitting...' : 'DOWNLOAD BROCHURE'}
                  </button>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center leading-relaxed mt-4">
                  T&C: By submitting this form, you agree to receive marketing communications, updates, 
                  and promotional materials from us. You can unsubscribe anytime. For more information, 
                  please refer to our 
                  <Link href="/privacy-policy" className="text-[#F08400] hover:underline ml-1 font-semibold">Privacy Policy</Link>.
                </p>
              </form>
            </div>

          </div>
        </Container>
      </section>
      <PartnersSection />
      <BackToTop />
    </div>
  );
}