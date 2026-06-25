// app/contact-us/page.tsx
"use client";

import { useState, useEffect } from "react";
import PartnersSection from "@/components/home/PartnersSection";
import BackToTop from "@/components/layout/BackToTop";
import Container from "@/components/ui/container";
import Link from "next/link";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-100 grid place-content-center bg-black">
        <div className="flex size-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-500 text-4xl">
          <div className="flex size-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-300 text-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="intro-animation">
      <div className="page-spacing-wrapper">
        <div className="pt-[100px] sm:pt-[120px] lg:pt-[140px]">

          {/* Main Contact Section */}
          <Container>
            <div className="animated-block">
              <div className="animated-block-target">
                <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
                  <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                    <br />
                    Contact Us
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Have questions or need help? Contact us using the details below.
                  </p>
                </div>

                <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
                  {/* Organised By Card */}
                  <div className="lg:col-span-1">
                    <div className="relative flex flex-col overflow-hidden rounded-lg bg-[#FCF8F3] p-5 sm:p-6 shadow-md h-full">
                      <div className="mb-4 sm:mb-5">
                        <h2 className="font-bebas text-xl sm:text-2xl text-[#F08400]">ORGANISED BY</h2>
                        <div className="mt-2 h-1 w-16 bg-[#F08400]"></div>
                      </div>
                      <div className="flex flex-col flex-1 gap-3 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-bold text-black">
                          Maxx Business Media Pvt. Ltd.
                        </h3>
                        <div className="text-sm sm:text-base text-gray-600 space-y-2">
                          <p>T9, 3rd Floor, Swastik Manandi Arcade,</p>
                          <p>Seshadripuram, Bangalore 560020</p>
                        </div>
                        <div className="mt-auto pt-3 sm:pt-4 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <svg className="w-5 h-5 text-[#F08400]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                            </div>
                            <span className="font-medium text-sm sm:text-base text-gray-700">+91 91483 19993</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <svg className="w-5 h-5 text-[#F08400]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </div>
                            <span className="font-medium text-sm sm:text-base text-gray-700">pad@diemex.in</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Venue & Map Card */}
                  <div className="lg:col-span-2">
                    <div className="relative flex flex-col overflow-hidden rounded-lg bg-[#FCF8F3] shadow-md">
                      <div className="p-5 sm:p-6">
                        <div className="mb-4 sm:mb-5">
                          <h2 className="font-bebas text-xl sm:text-2xl text-[#F08400]">VENUE</h2>
                          <div className="mt-2 h-1 w-16 bg-[#F08400]"></div>
                        </div>
                        <div className="mb-4 sm:mb-5">
                          <h3 className="text-lg sm:text-xl font-bold text-black">
                            Auto Cluster Exhibition Centre
                          </h3>
                          <div className="mt-2 text-sm sm:text-base text-gray-600 space-y-1">
                            <p>MIDC, Chinchwad,</p>
                            <p>Pimpri-Chinchwad,</p>
                            <p>Pune, Maharashtra 411019.</p>
                          </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="overflow-hidden rounded-lg">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.374496455856!2d73.7990458754672!3d18.638844465550328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84992d04bbd%3A0x9f1c44fb853ba461!2sAuto%20Cluster%20Exhibition%20Center%2C%20Chinchwad%2C%20Pune!5e1!3m2!1sen!2sin!4v1770050921314!5m2!1sen!2sin"
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Auto Cluster Exhibition Centre Location"
                          ></iframe>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#F08400]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Interactive map - Zoom & explore</span>
                          </div>
                          <Link
                            href="https://www.google.com/maps/place/Auto+Cluster+Exhibition+Center,+Chinchwad,+Pune/@18.6388445,73.7990459,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F08400] hover:text-black font-medium transition-colors"
                          >
                            Open in Google Maps →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours & Info */}
                <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
                  <div className="inline-flex items-center gap-2 sm:gap-3 text-gray-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg className="w-5 h-5 text-[#F08400]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">Business Hours: Mon-Sat, 10AM-6PM IST</span>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                    For exhibition bookings, partnership opportunities, or general enquiries,
                    please reach out to us during business hours.
                  </p>
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