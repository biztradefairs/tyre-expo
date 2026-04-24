// app/visitor-registration/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";
import BackToTop from "@/components/layout/BackToTop";
import PartnersSection from "@/components/home/PartnersSection";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

// // Dynamically import ReCAPTCHA to avoid SSR issues
// const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
//   ssr: false,
//   loading: () => <div className="h-20 w-full bg-gray-100 rounded-lg animate-pulse"></div>,
// });

interface Country {
  name: string;
}

export default function VisitorRegistrationPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesLoading, setCountriesLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    email: "",
    mobile: "",
    profile: "",
    promocode: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setCountriesLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
        const data = await res.json();
        const sortedCountries = data
          .map((c: any) => ({ name: c.name.common }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Failed to fetch countries", error);
        toast.error("Failed to load countries");
      } finally {
        setCountriesLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !captchaToken) {
      toast.error("Please complete the CAPTCHA verification");
      return;
    }

    setLoading(true);

    // Simulate API call - Replace with actual API endpoint
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmittedName(formData.name.split(" ")[0] || "Visitor");
      setSubmitSuccess(true);
      setLoading(false);

      // Reset form
      setFormData({
        name: "",
        designation: "",
        company: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        email: "",
        mobile: "",
        profile: "",
        promocode: "",
      });
      setTermsAccepted(false);
      setCaptchaToken(null);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {submittedName}!</h2>
          <p className="text-gray-600 mb-6">
            Your visitor registration for ITS Tyre Expo 2026 has been submitted successfully.
            A confirmation email has been sent to your registered email address.
          </p>
          <Link href="/" className="inline-block bg-[#F08400] text-white px-6 py-2 rounded-lg hover:bg-black transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      
      <section className="bg-white py-20">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#F08400] font-sans text-[14px] font-semibold uppercase tracking-[1.5px]">
              Get Your Visitor Pass
            </p>
            <h1 className="font-bebas font-bold text-[38px] lg:text-[48px] leading-[1.15] tracking-[1px] uppercase text-black">
              Register for ITS Tyre Expo 2026
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
              Join 8,500+ industry professionals and 350+ exhibitors at India's premier tyre manufacturing exhibition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12">
            {/* LEFT SECTION - Info */}
            <div className="flex flex-col gap-6 sticky top-24 h-fit">
              <div className="bg-[#f5f5f5] rounded-2xl p-6">
                <h3 className="font-bebas text-2xl text-black mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#F08400] font-semibold text-sm">Dates</p>
                    <p className="text-gray-700">15-17 October 2026</p>
                  </div>
                  <div>
                    <p className="text-[#F08400] font-semibold text-sm">Venue</p>
                    <p className="text-gray-700">Auto Cluster Exhibition Centre, Pune</p>
                  </div>
                  <div>
                    <p className="text-[#F08400] font-semibold text-sm">Timings</p>
                    <p className="text-gray-700">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f5] rounded-2xl p-6">
                <h3 className="font-bebas text-2xl text-black mb-4">Why Visit?</h3>
                <ul className="space-y-3">
                  {[
                    "Meet 350+ leading tyre manufacturers and suppliers",
                    "Discover the latest tyre manufacturing technologies",
                    "Network with industry experts and decision-makers",
                    "Explore innovative solutions for tyre production",
                    "Attend technical conferences and workshops"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F08400] text-sm">✓</span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#F08400] to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="font-bebas text-2xl mb-2">Free Registration</h3>
                <p className="text-sm text-white/90 mb-4">
                  Register now to get free entry to the exhibition and conference sessions.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Limited badges available</span>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION - Form */}
            <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-8">
              <h2 className="text-[#F08400] font-bold text-2xl mb-6 font-bebas">
                Visitor Registration Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                    placeholder="Your job title/position"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Your company/organization name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="ex: #20, 4th cross, RK Road"
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm resize-none"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  >
                    <option value="">
                      {countriesLoading ? "Loading countries..." : "Select Country"}
                    </option>
                    {countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* State and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your state"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your city"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pin Code / Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your postal code"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    We'll send your registration confirmation and updates to this email.
                  </p>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-2.5 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                      <span className="text-gray-700 text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Profile Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Please choose your Profile <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="profile"
                    value={formData.profile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  >
                    <option value="">Select your industry profile</option>
                    <option value="Tyre Manufacturing">Tyre Manufacturing</option>
                    <option value="Rubber Processing">Rubber Processing</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Machinery">Machinery & Equipment</option>
                    <option value="Raw Materials">Raw Materials Supply</option>
                    <option value="Logistics">Logistics & Supply Chain</option>
                    <option value="Research">Research & Development</option>
                    <option value="Consulting">Consulting Services</option>
                    <option value="Trading">Trading & Distribution</option>
                    <option value="Media">Media & Publications</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Promocode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Promocode (Optional)
                  </label>
                  <input
                    type="text"
                    name="promocode"
                    value={formData.promocode}
                    onChange={handleInputChange}
                    placeholder="Enter promo code if you have one"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F08400] focus:border-[#F08400] outline-none transition bg-white text-sm"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 text-[#F08400] rounded border-gray-300 focus:ring-[#F08400]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                    I agree to receive marketing communications, updates, and promotional materials from ITS Tyre Expo.
                    I can unsubscribe anytime. For more information, please refer to our{" "}
                    <Link href="/privacy-policy" className="text-[#F08400] hover:underline">
                      Privacy Policy
                    </Link>.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    loading ||
                    !termsAccepted ||
                    (Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) && !captchaToken)
                  }
                  className="w-full bg-[#F08400] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Complete Registration"
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Need assistance? Contact us at{" "}
                  <a href="mailto:support@tyre-expo.com" className="text-[#F08400] hover:underline">
                    support@tyre-expo.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
      
      <PartnersSection />
      <BackToTop />
    </>
  );
}