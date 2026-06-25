// app/conference-programme/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PartnersSection from "@/components/home/PartnersSection";
import BackToTop from "@/components/layout/BackToTop";
import Container from "@/components/ui/container";

const statsData = [
  { value: "60+", label: "Conference Speakers" },
  { value: "12", label: "Specialised Sessions" },
  { value: "3", label: "Days" },
];

const mainEventsData = [
  {
    title: "Tyre Manufacturing Leaders Forum – Strategic Insights for Industry Growth",
    content: (
      <ul className="list-disc space-y-3 pl-5 text-sm sm:text-base text-gray-700">
        <li>
          <strong>Main Plenary Session: </strong>Featuring top executives from leading tyre manufacturers, rubber processors, and equipment suppliers across Asia and beyond.
          <br />
          Focus: Digital transformation, sustainable manufacturing, and supply chain resilience in the tyre industry.
        </li>
        <li>
          <strong>Industry 4.0 in Tyre Manufacturing: </strong>A showcase of the most effective digital and automation projects transforming tyre production worldwide.
        </li>
      </ul>
    ),
  },
  {
    title: "New for 2026 – Exclusive Forums and Round Tables",
    content: (
      <ul className="list-disc space-y-3 pl-5 text-sm sm:text-base text-gray-700">
        <li>
          <strong>Sustainability Forum – Debut Edition: </strong>Carbon Neutrality and Circular Economy: New Standards for Tyre Manufacturing.
        </li>
        <li>
          <strong>Round Table: The Future of Raw Materials: </strong>In-depth dialogue on natural rubber sourcing, synthetic alternatives, and sustainable compounding strategies.
        </li>
        <li>
          <strong>Round Table: Smart Factory & Automation: </strong>AI-driven quality control, predictive maintenance, and IoT integration in tyre plants.
        </li>
        <li>
          <strong>Round Table: Testing & Quality Assurance: </strong>Advanced uniformity, durability, and X-ray inspection technologies.
        </li>
        <li>
          <strong>Round Table: Emerging Markets & Investment: </strong>Exploring growth opportunities in ASEAN, India, and Africa.
        </li>
      </ul>
    ),
  },
  {
    title: "Technical Conferences",
    content: (
      <ul className="list-disc space-y-3 pl-5 text-sm sm:text-base text-gray-700">
        <li>
          <strong>Rubber Processing & Compounding: </strong>Latest innovations in mixing, extrusion, and curing technologies from leading processing plant experts.
        </li>
        <li>
          <strong>Tyre Testing & Lab Equipment:</strong> New methods and instruments for quality assurance, regulatory compliance, and performance benchmarking.
        </li>
      </ul>
    ),
  },
];

const keyEventsData = [
  {
    title: "The Tyre Manufacturing Leaders' Forum",
    image: "https://cdn.itegroupnews.com/MW_24_2304_0005_G_i_1_0c28de356a.jpg",
  },
  {
    title: "Industry 4.0 in Tyre Manufacturing",
    image: "https://cdn.itegroupnews.com/mw2022_gi_31_fe2e3e372e.jpg",
  },
  {
    title: "Sustainability Forum",
    image: "https://cdn.itegroupnews.com/4_C4_A3872_1202c590ba.jpg",
  },
  {
    title: "Technical Conferences",
    image: "https://cdn.itegroupnews.com/4_C4_A5222_ad4a659bdc.jpg",
  },
];

const conferencePartners = [
  {
    name: "Zyfra",
    logo: "https://cdn.itegroupnews.com/2_48e8e636ac.png",
    type: "Technology Partner",
    url: "https://www.zyfra.com/",
  },
  {
    name: "Modern Tyre Industry",
    logo: "https://cdn.itegroupnews.com/3_c5c5637a9c.png",
    type: "Media Partner",
    url: "#",
  },
];

export default function ConferenceProgrammePage() {
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

          {/* Innovate Through Knowledge Section */}
          <Container>
            <div className="animated-block">
              <div className="animated-block-target">
                <div className="w-full grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                  <div className="order-2 lg:order-1">
                    <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                      <br />
                      Innovate Through Knowledge
                    </h2>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
                      A dynamic three-day conference featuring industry leaders from tyre manufacturers, rubber processing plants, and equipment suppliers. Designed for decision-makers, engineers, and specialists, the program tackles key challenges, innovations, and trends shaping the tyre manufacturing sector.
                      <br /><br />
                      Engage, collaborate, and stay ahead in the industry!
                    </p>
                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between bg-gray-100 px-4 sm:px-6 py-6 sm:py-8 rounded-md gap-4 sm:gap-0">
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
                    <div className="mt-8 sm:mt-10">
                      <Link href="https://cdn-ite.prismetic.com/CP_Agenda_ITS_Tyre_Expo_2026.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#F08400] px-8 sm:px-10 py-2.5 sm:py-3 text-lg sm:text-xl font-bebas text-white transition-all hover:bg-black">
                          View Agenda
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="https://cdn.itegroupnews.com/MW_24_2304_0005_G_i_1_0c28de356a.jpg"
                      alt="Conference"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Main Events Section */}
          <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
            <div className="animated-block-target">
              <div className="bg-[#FCF8F3] py-12 sm:py-16 lg:py-20">
                <Container>
                  <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                    Main Events of the Business Programme
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                    15 – 17 October 2026
                  </p>
                  <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {mainEventsData.map((event, idx) => (
                      <div key={idx} className="relative flex flex-col overflow-hidden rounded-lg bg-white p-5 sm:p-6 shadow-md">
                        <div className="flex flex-col flex-1 gap-3 sm:gap-4">
                          <h3 className="font-bebas text-xl sm:text-2xl text-black leading-tight">
                            {event.title}
                          </h3>
                          <div className="text-sm sm:text-base text-gray-600 flex-1">
                            {event.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Container>
              </div>
            </div>
          </div>

          {/* Key Events Carousel Section */}
          <Container>
            <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
              <div className="animated-block-target">
                <div className="mb-6 sm:mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-4">
                  <div className="lg:basis-2/3">
                    <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                      Key Events
                    </h3>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      The ITS Tyre Expo 2026 conference programme unites top experts and industry leaders for three days of in-depth discussions. Participants share valuable insights and explore sustainability in tyre manufacturing, with a focus on innovations, business processes, and management strategies vital for the sector's future.
                    </p>
                  </div>
                </div>
                <div className="relative mt-8 sm:mt-10 w-full">
                  <Carousel>
                    <CarouselContent className="-ml-4">
                      {keyEventsData.map((event, idx) => (
                        <CarouselItem
                          key={idx}
                          className="pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="group flex flex-col overflow-hidden rounded-lg bg-[#FCF8F3] shadow-md transition-shadow duration-300 hover:shadow-lg">
                            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                              <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                            </div>
                            <div className="flex flex-col gap-3 p-4 sm:p-5">
                              <h5 className="font-bebas text-lg sm:text-xl text-black">
                                {event.title}
                              </h5>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
          </Container>

          {/* Conference Partners Section */}
          <Container>
            <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
              <div className="animated-block-target">
                <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                  Conference Partners
                </h2>
                <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {conferencePartners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col overflow-hidden rounded-lg bg-[#FCF8F3] p-5 sm:p-6 shadow-md text-center"
                    >
                      <div className="relative h-20 sm:h-24 w-full overflow-hidden mx-auto">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="mt-4 sm:mt-5 font-bebas text-xl sm:text-2xl text-black">
                        {partner.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">{partner.type}</p>
                      <div className="mt-auto pt-4">
                        <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                          <button className="w-full bg-[#F08400] px-5 sm:px-6 py-1.5 sm:py-2 font-bebas text-lg sm:text-xl text-white transition-all hover:bg-black">
                            Visit Website
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
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