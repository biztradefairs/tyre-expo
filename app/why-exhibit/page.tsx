
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";

export default function WhyExhibitPage() {
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


      {/* Main Content */}
      <div className="page-spacing-wrapper pt-32">
        {/* Powering Progress Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container relative z-1 mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-5">
                <div className="flex flex-col gap-5">
                  <p className="font-bold text-orange-600">Your Gateway to Tyre Manufacturing Growth in ASEAN</p>
                  <h2 className="font-bebas text-6xl text-black md:text-7xl">Powering Progress in the Global Rubber & Tyre Industry</h2>
                  <p className="text-lg text-gray-700">
                    As the global tyre industry shifts toward sustainability, automation, and high-performance materials, Southeast Asia's tyre manufacturing sector is experiencing unprecedented growth. ITS Tyre Expo connects you directly with the region's leading tyre manufacturers, rubber processors, OEMs, and government agencies driving this transformation.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-10 2xl:gap-20">
                  <div className="flex w-fit flex-col justify-center border-r border-gray-300 pr-10 font-bebas last-of-type:border-none 2xl:pr-20">
                    <h3 className="mb-3 text-6xl font-bold text-orange-600 md:text-7xl">10th</h3>
                    <p className="text-xl text-black">Edition</p>
                  </div>
                  <div className="flex w-fit flex-col justify-center border-r border-gray-300 pr-10 font-bebas last-of-type:border-none 2xl:pr-20">
                    <h3 className="mb-3 text-6xl font-bold text-orange-600 md:text-7xl">8,500+</h3>
                    <p className="text-xl text-black">Trade Visitors</p>
                  </div>
                  <div className="flex w-fit flex-col justify-center border-r border-gray-300 pr-10 font-bebas last-of-type:border-none 2xl:pr-20">
                    <h3 className="mb-3 text-6xl font-bold text-orange-600 md:text-7xl">350+</h3>
                    <p className="text-xl text-black">Exhibitors</p>
                  </div>
                  <div className="flex w-fit flex-col justify-center font-bebas last-of-type:border-none lg:border-r lg:pr-10 2xl:pr-20">
                    <h3 className="mb-3 text-6xl font-bold text-orange-600 md:text-7xl">60+</h3>
                    <p className="text-xl text-black">Conference Speakers</p>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/about-its-tyre-expo">
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">About ITS Tyre Expo</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Exhibit Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="grid gap-5">
                <h2 className="font-bebas text-6xl text-black md:text-7xl">Why Exhibit at ITS Tyre Expo</h2>
                <p className="text-lg text-gray-700">
                  Exhibiting at ITS Tyre Expo puts you at the center of Southeast Asia's fastest-growing tyre manufacturing hub. Connect directly with over 8,500 professionals with real purchasing power, showcase your solutions to a USD 45 billion industry, and expand your network across 50+ countries. This is your chance to generate high-quality leads, forge valuable partnerships, and position your brand as a leader in the region's rapidly modernizing rubber and tyre sector.
                </p>
              </div>

              <div className="my-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* Benefit Cards */}
                {[
                  {
                    title: "Struggling to find qualified buyers?",
                    desc: "Meet a verified audience where 68% of visitors hold purchasing power including tyre manufacturers, rubber processors, and industrial buyers actively sourcing new suppliers.",
                    icon: "/icons/recruitment.png"
                  },
                  {
                    title: "Facing challenges entering the ASEAN market?",
                    desc: "Gain direct access to the companies driving demand across passenger, truck, OTR, and specialty tyre segments throughout the region.",
                    icon: "/icons/goal.png"
                  },
                  {
                    title: "Worried about standing out in a competitive market?",
                    desc: "Stand out by showcasing your innovative, sustainable, and high-performance solutions to buyers looking for trusted technologies.",
                    icon: "/icons/marketing.png"
                  },
                  {
                    title: "Looking for buyers ready to invest?",
                    desc: "Tap into ASEAN's USD 12 billion tyre manufacturing equipment market, where demand for automation, raw materials, and testing equipment is rapidly growing.",
                    icon: "/icons/contract.png"
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-5">
                    <div className="flex-center h-20 w-20 rounded-full bg-orange-50">
                      <div className="h-10 w-10 rounded-full bg-orange-200"></div>
                    </div>
                    <h3 className="font-bebas text-2xl text-black">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/exhibiting-enquiry">
                <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Book A Stand</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Event Sectors Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container relative mx-auto px-4">
              <p className="font-bold text-orange-600">Event Sectors</p>
              <h3 className="my-3 font-bebas text-6xl text-black md:text-7xl">Target the Right Sectors to Fuel Your Business Growth</h3>
              <Link href="/sectors">
                <button className="flex-center global-transition group mb-10 w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Explore Our Sectors</button>
              </Link>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Raw Materials & Compounds",
                  "Tyre Manufacturing Machinery",
                  "Rubber Processing Equipment",
                  "Tyre Testing & Quality Control",
                  "Retreading & Repair Materials",
                  "Recycling & Sustainability Solutions"
                ].map((sector, idx) => (
                  <div key={idx} className="flex flex-col overflow-hidden rounded-lg bg-gray-100 transition-shadow hover:shadow-lg">
                    <div className="h-48 bg-gray-300"></div>
                    <div className="flex flex-1 flex-col gap-4 p-5">
                      <h4 className="text-xl font-semibold text-black">{sector}</h4>
                      <Link href={`/sectors/${sector.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                        <button className="flex-center group gap-2 font-bebas text-xl text-orange-600">Read More →</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Breakdown Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-5">
                  <p className="font-bold text-orange-600">Visitor Breakdown</p>
                  <h3 className="font-bebas text-6xl text-black md:text-7xl">Connecting You to Global Tyre Industry Decision-Makers</h3>
                  <p className="text-lg text-gray-700">
                    From tyre manufacturing executives and procurement specialists to R&D engineers and distributors, our visitors are key players driving growth, innovation, and modernization across the ASEAN rubber industry.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 bg-orange-50 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">48%</h3>
                    <p className="text-xl text-black">First Time Exhibitors</p>
                  </div>
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">52%</h3>
                    <p className="text-xl text-black">First Time Visitors</p>
                  </div>
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">35%</h3>
                    <p className="text-xl text-black">With Budgets Over $5 Million</p>
                  </div>
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">28%</h3>
                    <p className="text-xl text-black">C-Level Decision Makers</p>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/exhibiting-enquiry">
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Enquire to Exhibit</button>
                  </Link>
                </div>
              </div>
              <div className="order-first h-full lg:col-span-2">
                <div className="h-96 w-full bg-gray-300 object-cover"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Brochure Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="relative z-1 mx-auto overflow-hidden bg-orange-900 py-20 text-white">
              <div className="absolute inset-0 z-1 bg-black/50"></div>
              <div className="container relative z-10 mx-auto px-4">
                <div className="grid items-center gap-10 md:grid-cols-12">
                  <div className="flex-center md:col-span-4">
                    <div className="h-64 w-64 bg-white/20"></div>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-8">
                    <h3 className="font-bebas text-6xl md:text-7xl">Download Your Event Brochure</h3>
                    <p className="max-w-[700px] text-lg">
                      Discover how ITS Tyre Expo can unlock new opportunities for your business. Our brochure provides everything you need to know — from visitor profiles and key industry sectors to exhibitor benefits and ROI-driven results.
                    </p>
                    <Link href="/event-brochure">
                      <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Download Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why ASEAN Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h2 className="mb-10 font-bebas text-6xl text-black md:text-7xl">Why Southeast Asia?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Rapid Tyre Manufacturing Expansion",
                    desc: "ASEAN is the world's 2nd largest natural rubber producer, with Thailand, Indonesia, and Vietnam leading global tyre exports. Major investments in new manufacturing facilities are driving demand for advanced machinery and technology."
                  },
                  {
                    title: "Government Support for EV & Automotive",
                    desc: "Governments across the region are offering incentives for EV manufacturing, boosting demand for high-performance tyres and sustainable rubber solutions. Thailand's 'EV 3.5' package is accelerating industry transformation."
                  },
                  {
                    title: "Growing Demand for Sustainable Solutions",
                    desc: "The push for eco-friendly tyres and circular economy practices is creating massive opportunities for suppliers of recycled rubber, green materials, and energy-efficient manufacturing equipment."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex min-h-[400px] flex-col overflow-hidden rounded-lg bg-gray-800 p-6 text-white">
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                      <h3 className="text-3xl font-bold">{item.title}</h3>
                      <p className="text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container relative mx-auto px-4">
              <div className="mb-10 flex justify-between max-lg:flex-col lg:items-end">
                <div className="lg:basis-2/3">
                  <p className="font-bold text-orange-600">Testimonials</p>
                  <h3 className="my-3 font-bebas text-6xl text-black md:text-7xl">Why the Industry Chooses ITS Tyre Expo</h3>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Somchai Wongsuwan", title: "VP of Manufacturing", company: "Bridgestone Thailand", quote: "ITS Tyre Expo provides unparalleled access to the ASEAN tyre manufacturing ecosystem. Over three days, we connected with key suppliers and signed three major contracts." },
                  { name: "Lisa Tan", title: "Regional Director", company: "Continental Tyres", quote: "We've exhibited for 5 consecutive years, and ITS remains our most valuable platform for launching new products and networking with industry leaders across Southeast Asia." },
                  { name: "Nguyen Van Hieu", title: "Procurement Manager", company: "Casumina", quote: "The quality of visitors and exhibitors is exceptional. We found new raw material suppliers and advanced testing equipment that significantly improved our production efficiency." }
                ].map((testimonial, idx) => (
                  <div key={idx} className="relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-100 p-6">
                    <p className="mb-auto text-lg italic text-gray-700">"{testimonial.quote}"</p>
                    <div className="mt-6 flex items-center gap-4 border-t border-gray-300 pt-5">
                      <div className="h-14 w-14 rounded-full bg-gray-400"></div>
                      <div>
                        <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                        <p className="text-sm text-gray-600">{testimonial.title}<br />{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* When and Where Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto flex flex-col gap-6 px-4 text-black">
              <h2 className="mb-5 font-bebas text-6xl text-black md:text-7xl">When and Where</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-orange-50 p-6">
                  <p className="mb-2 font-bold">Opening Hours</p>
                  <h4 className="text-2xl font-bold">15 October 2026: 10:00 - 18:00</h4>
                  <h4 className="text-2xl font-bold">16 October 2026: 10:00 - 18:00</h4>
                  <h4 className="text-2xl font-bold">17 October 2026: 10:00 - 16:00</h4>
                </div>
                <div className="rounded-xl bg-orange-50 p-6">
                  <p className="mb-2 font-bold">Venue</p>
                  <h4 className="text-2xl font-bold">Hall 101-104, BITEC, Bangkok, Thailand</h4>
                </div>
              </div>
              <div className="h-96 w-full rounded-xl bg-gray-200"></div>
            </div>
          </div>
        </div>
        <PartnersSection/>

        {/* Quick Navigation Footer */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="-mt-px border-t-8 border-orange-600 bg-black py-20 text-white">
              <div className="container relative z-1 mx-auto w-full space-y-8 overflow-hidden px-4">
                <h2 className="font-bebas text-6xl md:text-7xl">Quick Navigation</h2>
                <div className="flex flex-wrap gap-12">
                  {[
                    { label: "Enquire to Exhibit", link: "/exhibiting-enquiry" },
                    { label: "Download Event Brochure", link: "/event-brochure" },
                    { label: "Exhibitor List", link: "/exhibitor-list" },
                    { label: "Plan Your Travel", link: "/plan-your-travel" },
                    { label: "About ITS Tyre Expo", link: "/about-its-tyre-expo" }
                  ].map((item, idx) => (
                    <Link key={idx} href={item.link}>
                      <div className="flex-center h-20 w-20 rounded-full bg-gray-800">
                        <div className="h-8 w-8 bg-gray-600"></div>
                      </div>
                      <p className="mt-3 text-center text-sm font-bold">{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
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