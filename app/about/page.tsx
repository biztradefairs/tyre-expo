// app/about-its-tyre-expo/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";
import SectorsSection from "@/components/home/SectorsSection";
import BackToTop from "@/components/layout/BackToTop";

export default function AboutPage() {
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

  const sectors = [
    {
      title: "Raw Materials & Rubber Compounds",
      slug: "raw-materials-and-rubber-compounds",
      description: "Natural rubber, synthetic rubber, carbon black, silica, processing oils, and specialty chemicals.",
      image: "/images/sectors/raw-materials.jpg"
    },
    {
      title: "Tyre Manufacturing Machinery",
      slug: "tyre-manufacturing-machinery",
      description: "Banbury mixers, calenders, extruders, tyre building machines, curing presses, and finishing equipment.",
      image: "/images/sectors/manufacturing.jpg"
    },
    {
      title: "Rubber Processing Equipment",
      slug: "rubber-processing-equipment",
      description: "Two-roll mills, internal mixers, strainers, pelletizers, and rubber bale cutters.",
      image: "/images/sectors/processing.jpg"
    },
    {
      title: "Tyre Testing & Quality Control",
      slug: "tyre-testing-and-quality-control",
      description: "Durability testers, uniformity machines, balance testers, X-ray inspection, and lab equipment.",
      image: "/images/sectors/testing.jpg"
    }
  ];

  const ecosystemItems = [
    {
      title: "The Exhibition",
      description: "At the heart of the ecosystem is the annual ITS Tyre Expo exhibition in Bangkok. It brings together the full spectrum of the tyre manufacturing industry, offering a high-impact platform to:",
      points: [
        "Establish direct, face-to-face business connections.",
        "Showcase machinery, equipment, technologies, and tyre solutions.",
        "Meet thousands of procurement decision-makers and industry specialists in one place."
      ],
      buttonText: "Why Exhibit",
      buttonLink: "/why-exhibit"
    },
    {
      title: "Conference",
      description: "Throughout the exhibition and beyond, the ecosystem includes a robust program of conferences, forums, and summits. These events are curated to foster dialogue around tyre innovation, sustainability, and market development.",
      points: [
        "Gain insights from top-level speakers and tyre industry leaders.",
        "Discuss emerging challenges, regulations, and best practices in tyre manufacturing.",
        "Participate in sector-specific sessions for materials, equipment, testing, and digital technologies."
      ],
      buttonText: "Explore Agenda",
      buttonLink: "/conference-programme"
    },
    {
      title: "ITS Tyre Expo Connect",
      description: "ITS Tyre Expo Connect is the ecosystem's digital layer – an online platform designed to keep the conversation going before, during, and after the exhibition. Through Connect, participants can:",
      points: [
        "Network with buyers, suppliers, and industry peers 365 days a year.",
        "Access curated content, market news, and exhibitor updates.",
        "Schedule meetings and follow up on new business leads online."
      ],
      buttonText: "Explore Connect",
      buttonLink: "/leadscanning"
    }
  ];

  const keyEvents = [
    {
      title: "Conference Programme",
      description: "Each year, ITS Tyre Expo hosts a comprehensive three-day conference programme featuring industry forums, analytical sessions, plenary discussions, and expert lectures. The agenda brings together leading professionals, government representatives, and technical experts to share insights, explore industry challenges, and discuss the latest trends shaping the tyre manufacturing sector.",
      image: "https://cdn.itegroupnews.com/MW_24_2304_0005_G_i_1_0c28de356a.jpg",
      buttonText: "Learn More",
      buttonLink: "/conference-programme"
    },
    {
      title: "LeadScanning",
      description: "ITS Tyre Expo Connect is the exhibition's dedicated business networking platform, designed to facilitate meaningful connections between exhibitors, visitors, media, professional associations, and industry experts from across Asia and beyond.",
      image: "https://cdn.itegroupnews.com/Untitled_400_x_490_px_400_x_250_px_13b6d04f0b.png",
      buttonText: "Join Now",
      buttonLink: "/leadscanning"
    },
    {
      title: "Awards",
      description: "The Tyre Innovation Awards, part of ITS Tyre Expo since 2021, recognize digital and sustainable projects that improve tyre manufacturing efficiency and sustainability. An independent jury selects the most innovative projects addressing key industry challenges.",
      image: "https://cdn.itegroupnews.com/mw2022_gi_5d2b509b31.jpg",
      buttonText: "",
      buttonLink: ""
    }
  ];

  const quickLinks = [
    { label: "Enquire to Exhibit", link: "/exhibiting-enquiry", icon: "https://cdn.itegroupnews.com/Vector_1_440f5852b9.png" },
    { label: "Download Event Brochure", link: "/event-brochure", icon: "https://cdn.itegroupnews.com/Group_e024d13500.png" },
    { label: "Exhibitor List", link: "/exhibitor-list", icon: "https://cdn.itegroupnews.com/Vector_ceea3d1488.png" },
    { label: "Plan Your Travel", link: "/plan-your-travel", icon: "https://cdn.itegroupnews.com/Vector_1_b2c1ab92d0.png" },
    { label: "Why Visit", link: "/why-visit", icon: "https://cdn.itegroupnews.com/Vector_2_9be2b98909.png" }
  ];

  return (
    <div className="intro-animation">
      <div className="page-spacing-wrapper">
        {/* Add margin-top to account for fixed header */}
        <div className="pt-[100px] sm:pt-[120px] lg:pt-[140px]">

          {/* Transforming Tyre Operations Section */}
          <div className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto grid items-center gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* LEFT IMAGE */}
              <div className="w-full h-[280px] sm:h-[350px] lg:h-[450px] xl:h-[500px] overflow-hidden rounded-sm order-1 lg:order-1">
                <img
                  src="/images/image1.png"
                  alt="expo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="order-2 lg:order-2">
                <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                  Transforming Tyre Operations <br className="hidden sm:block" /> for Over 10 Years
                </h2>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
                  ITS Tyre Expo is the premier international exhibition for tyre
                  manufacturing machinery, equipment, and technologies, covering the full
                  cycle of rubber processing, tyre production, and quality testing.
                  <br /><br />
                  Each year, leading Asian and global companies in tyre manufacturing,
                  rubber processing, equipment manufacturing, and logistics gather to
                  present the latest innovations shaping the industry's future.
                </p>

                {/* STATS SECTION */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between bg-gray-100 px-4 sm:px-6 py-6 sm:py-8 rounded-md gap-4 sm:gap-0">
                  <div className="text-center flex-1 min-w-[80px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[#F08400]">10th</h3>
                    <p className="text-xs sm:text-sm tracking-wide text-black mt-1 sm:mt-2">EDITION</p>
                  </div>

                  <div className="hidden md:block h-12 w-px bg-gray-300"></div>

                  <div className="text-center flex-1 min-w-[80px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[#F08400]">8,500+</h3>
                    <p className="text-xs sm:text-sm tracking-wide text-black mt-1 sm:mt-2">VISITORS</p>
                  </div>

                  <div className="hidden md:block h-12 w-px bg-gray-300"></div>

                  <div className="text-center flex-1 min-w-[80px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[#F08400]">350+</h3>
                    <p className="text-xs sm:text-sm tracking-wide text-black mt-1 sm:mt-2">EXHIBITORS</p>
                  </div>

                  <div className="hidden md:block h-12 w-px bg-gray-300"></div>

                  <div className="text-center flex-1 min-w-[80px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[#F08400]">60+</h3>
                    <p className="text-xs sm:text-sm tracking-wide text-black mt-1 sm:mt-2">CONFERENCE SPEAKERS</p>
                  </div>
                </div>

                <div className="mt-8 sm:mt-10">
                  <Link href="/why-exhibit">
                    <button className="bg-[#F08400] px-8 sm:px-10 py-2.5 sm:py-3 text-lg sm:text-xl font-bebas text-white transition-all hover:bg-black">
                      Why Exhibit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Our Event Sectors Section */}
          <SectorsSection />
          
          {/* Year-Round Industry Ecosystem Section */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">ITS Tyre Expo: A Year-Round Industry Ecosystem</h3>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-700">
                  ITS Tyre Expo is the region's leading international exhibition for tyre manufacturing technologies. With 10 years of reputation and trust, it plays a pivotal role in connecting equipment manufacturers, technology providers, tyre companies, and procurement leaders from across Asia and abroad.
                  <br /><br />
                  But ITS Tyre Expo is more than just a three-day exhibition – it's part of the broader ITE Tyre Ecosystem, delivering ongoing value to industry professionals through multiple touchpoints across the year:
                </p>

                <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {ecosystemItems.map((item, idx) => (
                    <div key={idx} className="relative flex flex-col overflow-hidden rounded-lg bg-[#FCF8F3] p-5 sm:p-6 shadow-md min-h-[450px] sm:min-h-[480px]">
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-black">{item.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                        <ul className="list-disc space-y-1.5 sm:space-y-2 pl-5 text-sm sm:text-base text-gray-600">
                          {item.points.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>
                        <Link href={item.buttonLink}>
                          <button className="mt-3 sm:mt-4 w-fit bg-[#F08400] px-5 sm:px-6 py-1.5 sm:py-2 font-bebas text-lg sm:text-xl text-white transition-all hover:bg-black">
                            {item.buttonText}
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Brochure Section */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="relative mx-auto overflow-hidden py-12 sm:py-16 lg:py-20 text-white">
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src="https://cdn.itegroupnews.com/img_3_4b6edc76d1.jpg"
                    alt="Event Background"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* CONTENT */}
                <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                  <div className="grid items-center gap-8 md:grid-cols-12">
                    {/* LEFT IMAGE / MOCKUP */}
                    <div className="flex justify-center md:col-span-5 lg:col-span-4">
                      <img
                        src="https://cdn.itegroupnews.com/Sales_Brochure_84b3c56f9d.png"
                        alt="Brochure"
                        className="h-48 sm:h-56 lg:h-64 w-auto object-contain"
                      />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col gap-4 sm:gap-5 md:col-span-7 lg:col-span-8">
                      <h3 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Download Your Event Brochure
                      </h3>

                      <p className="max-w-[700px] text-base sm:text-lg text-gray-200">
                        Make sure you grab your copy of the event brochure to learn more
                        about the show and explore your participation opportunities.
                      </p>

                      <Link href="/event-brochure">
                        <button className="bg-[#F08400] px-8 sm:px-10 py-2.5 sm:py-3 font-bebas text-xl sm:text-2xl text-white transition-all hover:bg-black w-fit">
                          Download Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leading Exhibitors Section */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* HEADING */}
                <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                  Meet the Leading Exhibitors of 2026
                </h3>

                {/* CARD */}
                <div className="mt-6 sm:mt-8 lg:mt-10 rounded-lg bg-orange-50 p-5 sm:p-6 lg:p-8">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
                    Exhibiting at ITS Tyre Expo Elevates Your Brand and Expands Your Network
                  </h4>

                  {/* BIG IMAGE */}
                  <div className="mt-6 sm:mt-8 w-full overflow-hidden rounded-lg">
                    <img
                      src="/images/image2.png"
                      alt="Exhibitors"
                      className="h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* BUTTON */}
                  <div className="mt-6 sm:mt-8 flex justify-start">
                    <Link href="/exhibition-directory" target="_blank">
                      <button className="bg-[#F08400] px-6 sm:px-8 py-2.5 sm:py-3 font-bebas text-lg sm:text-xl text-white transition-all hover:bg-black">
                        View Full Exhibitor List
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Section */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto flex flex-col gap-6 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-black">
                <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">Here's Where You Can Find Us!</h3>
                <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
                  <div className="rounded-xl bg-orange-50 p-5 sm:p-6">
                    <p className="mb-2 font-bold text-sm sm:text-base">Opening Hours</p>
                    <h4 className="text-xl sm:text-2xl font-bold">15 October 2026: 10:00 - 18:00</h4>
                    <h4 className="text-xl sm:text-2xl font-bold">16 October 2026: 10:00 - 18:00</h4>
                    <h4 className="text-xl sm:text-2xl font-bold">17 October 2026: 10:00 - 16:00</h4>
                  </div>
                  <div className="rounded-xl bg-orange-50 p-5 sm:p-6">
                    <p className="mb-2 font-bold text-sm sm:text-base">Venue</p>
                    <h4 className="text-xl sm:text-2xl font-bold">BITEC, Bangkok, Thailand</h4>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps?q=Crocus%20Expo%20IEC%20Moscow&output=embed"
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] border-0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Key Events Section */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="mb-6 sm:mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-4">
                  <div className="lg:basis-2/3">
                    <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">Key Events</h3>
                    <p className="mt-3 text-base sm:text-lg text-gray-600">
                      Connect is a community platform designed for business networking between exhibitors, visitors from across Asia, media, professional associations, and industry experts.
                    </p>
                  </div>
                </div>
                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {keyEvents.map((event, idx) => (
                    <div key={idx} className="group flex flex-col overflow-hidden bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5">
                        <h4 className="text-lg sm:text-xl font-bold text-black">{event.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 line-clamp-4">{event.description}</p>
                        {event.buttonText && (
                          <Link href={event.buttonLink}>
                            <button className="mt-2 w-fit bg-[#F08400] px-5 sm:px-6 py-1.5 sm:py-2 font-bebas text-lg sm:text-xl text-white transition-all hover:bg-black">
                              {event.buttonText}
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <PartnersSection />

          {/* Quick Navigation */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="border-t-8 border-orange-600 bg-black py-12 sm:py-16 lg:py-20 text-white">
                <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                  {/* HEADING */}
                  <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Quick Navigation
                  </h2>

                  {/* NAV ITEMS */}
                  <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 sm:gap-y-10 gap-x-4">
                    {quickLinks.map((item, idx) => (
                      <div key={idx} className="relative flex flex-col items-center justify-center text-center">
                        <Link href={item.link} className="flex flex-col items-center group">
                          {/* ICON CIRCLE */}
                          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gray-800 overflow-hidden transition-transform group-hover:scale-110">
                            <Image
                              src={item.icon}
                              alt={item.label}
                              width={28}
                              height={28}
                              className="object-contain sm:w-8 sm:h-8"
                            />
                          </div>

                          {/* LABEL */}
                          <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition">
                            {item.label}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="border-t-6 border-[#F08400]" />
        </div>
        <BackToTop/>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}