'use client'

import PartnerForm from './PartnerForm'
import BackToTop from '@/components/layout/BackToTop'

export default function BecomePartnerPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* PAGE HEADER */}
      <div className="relative bg-orange-50 pt-48 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[1440px]">
          <div className="flex flex-col">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
              Become a Partner
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Leave your application to participate in Tyre Expo 2026 Conference as a partner.
            </p>
          </div>
        </div>
      </div>

      {/* FORM + CONTENT SECTION */}
      <div className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* LEFT — CONTENT */}
            <div className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#F08400] mb-6">
                  Tyre Expo 2026 Conference
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    <strong>Tyre Expo 2026 Conference</strong> is a premier annual business platform bringing together 
                    professionals from tyre manufacturing companies, raw material suppliers, machinery manufacturers, 
                    automation specialists, and OEMs across the tyre and rubber ecosystem.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    If you'd like to become a summit partner, present your solutions, or advertise at the event, 
                    please fill out the form on the right—our team will contact you as soon as possible.
                  </p>
                  
                  <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#F08400] mt-6">
                    <p className="text-gray-700 italic">
                      For any questions regarding participation, partnership, or additional advertising opportunities, 
                      please contact the Tyre Expo 2026 Conference management team.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-3xl font-bold text-[#F08400]">50+</p>
                    <p className="text-sm text-gray-600">Exhibitors</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-3xl font-bold text-[#F08400]">30+</p>
                    <p className="text-sm text-gray-600">Speakers</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-3xl font-bold text-[#F08400]">500+</p>
                    <p className="text-sm text-gray-600">Delegates</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-3xl font-bold text-[#F08400]">15+</p>
                    <p className="text-sm text-gray-600">Countries</p>
                  </div>
                </div>

                {/* Partnership Benefits */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-black mb-4">Partnership Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Premium visibility across all event marketing materials",
                      "Dedicated speaking slot in conference program",
                      "Logo placement on event website and banners",
                      "Exclusive networking opportunities with industry leaders",
                      "Complimentary delegate passes for your team",
                      "Post-event recognition and media coverage"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#F08400] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-32">
                <PartnerForm />
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <BackToTop />
    </main>
  )
}