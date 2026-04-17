// app/why-visit/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";

export default function WhyVisitPage() {
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

  const stats = [
    { value: "8,500+", label: "Visitors" },
    { value: "350+", label: "Exhibitors" },
    { value: "30+", label: "Visiting Countries" },
    { value: "12", label: "Event Sectors" }
  ];

  const countries = [
    { name: "Thailand", flag: "/flags/thailand.png" },
    { name: "Vietnam", flag: "/flags/vietnam.png" },
    { name: "Indonesia", flag: "/flags/indonesia.png" },
    { name: "Malaysia", flag: "/flags/malaysia.png" },
    { name: "Singapore", flag: "/flags/singapore.png" },
    { name: "Japan", flag: "/flags/japan.png" }
  ];

  const attendeeCategories = [
    {
      title: "See What's Powering Asia's Tyre Manufacturing Boom",
      description: "Experience the latest machinery, automation systems, and processing technologies driving large-scale tyre plant modernisation and expansion across the region.",
      image: "/images/attendee-1.jpg"
    },
    {
      title: "Meet the Buyers Behind Multi-Million Projects",
      description: "Engage directly with procurement heads, plant managers, and investors responsible for sourcing equipment and solutions for new and existing tyre manufacturing operations.",
      image: "/images/attendee-2.jpg"
    },
    {
      title: "Benchmark Against Global Industry Leaders",
      description: "Explore innovations from 350+ exhibitors across 15 countries and understand how leading international manufacturers are redefining performance, efficiency, and sustainability.",
      image: "/images/attendee-3.jpg"
    },
    {
      title: "Gain a Front-Row View of Market Trends",
      description: "Stay ahead of industry shifts from automation and Industry 4.0 to sustainability, circular economy, and digital transformation shaping the future of tyre manufacturing.",
      image: "/images/attendee-4.jpg"
    }
  ];

  const businessAreas = [
    { percentage: "28%", label: "Tyre Manufacturing operations" },
    { percentage: "22%", label: "Components & spare parts supply" },
    { percentage: "25%", label: "Machinery & equipment supply" }
  ];

  const visitorIndustries = [
    "Design and construction of tyre plants",
    "Raw material processing",
    "Quality control and testing",
    "Media related to tyre industry",
    "Rubber compounding",
    "Tyre manufacturing operations",
    "Distribution and logistics"
  ];

  const supplierIndustries = [
    "Suppliers of components and spare parts",
    "Suppliers of machines and equipment",
    "Suppliers of power supply equipment",
    "Companies involved in tyre transportation",
    "Automation and software providers"
  ];

  const sectors = [
    {
      title: "Raw Materials & Rubber Compounds",
      slug: "raw-materials",
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
      slug: "tyre-testing",
      description: "Durability testers, uniformity machines, balance testers, X-ray inspection, and lab equipment.",
      image: "/images/sectors/testing.jpg"
    },
    {
      title: "Recycling & Sustainability",
      slug: "recycling",
      description: "Tyre recycling machinery, crumb rubber production, pyrolysis systems, and sustainable material innovations.",
      image: "/images/sectors/recycling.jpg"
    },
    {
      title: "Automation & Industry 4.0",
      slug: "automation",
      description: "MES systems, AI quality inspection, predictive maintenance, and smart factory solutions.",
      image: "/images/sectors/automation.jpg"
    }
  ];

  const beyondExhibition = [
    {
      title: "Conference Programme",
      description: "Join 12 specialised sessions tackling the industry's most pressing challenges from technological innovation to sustainability and market dynamics. Gain actionable insights to enhance efficiency and strengthen your operations.",
      image: "/images/conference.jpg",
      buttonText: "Learn More",
      buttonLink: "/conference-programme"
    },
    {
      title: "ITS Tyre Expo Connect",
      description: "Connect with peers, explore opportunities, and access event schedules, exhibitor deals, and floor plans with the official ITS Tyre Expo app – your year-round networking tool.",
      image: "/images/connect.jpg",
      buttonText: "Learn More",
      buttonLink: "/connect"
    },
    {
      title: "Awards",
      description: "The Tyre Innovation Awards honor innovative projects that boost safety, efficiency, and sustainability, setting benchmarks for excellence in tyre manufacturing.",
      image: "/images/awards.jpg",
      buttonText: "Learn More",
      buttonLink: "/awards"
    }
  ];

  const quickLinks = [
    { label: "Become an Exhibitor", link: "/exhibiting-enquiry", icon: "/icons/exhibit.png" },
    { label: "Become a Visitor", link: "/visitor-registration", icon: "/icons/visit.png" },
    { label: "Download Your Event Brochure", link: "/event-brochure", icon: "/icons/brochure.png" },
    { label: "Plan your Travel", link: "/plan-your-travel", icon: "/icons/travel.png" }
  ];

  const partners = [
    "ProfiMiner", "Times International", "TotalExpo.ru", "Vedomosti",
    "Industry of Eurasia", "Miners of Russia", "Zyfra", "Market and Business Analysis"
  ];

  return (
    <div className="intro-animation">
      {/* Mobile Header */}
      <div className="fixed left-0 top-0 z-50 w-full bg-black px-5 py-2 lg:hidden">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/imgs/logo-its.png" alt="ITS Tyre Expo" width="140" height="40" className="h-auto w-auto object-contain" />
          </Link>
          <button className="z-10">
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66667 20C0.746193 20 0 19.2538 0 18.3333C0 17.4129 0.746193 16.6667 1.66667 16.6667H30.3333C31.2538 16.6667 32 17.4129 32 18.3333C32 19.2538 31.2538 20 30.3333 20H1.66667ZM1.66667 11.6667C0.746193 11.6667 0 10.9205 0 10C0 9.07952 0.746192 8.33333 1.66667 8.33333H30.3333C31.2538 8.33333 32 9.07952 32 10C32 10.9205 31.2538 11.6667 30.3333 11.6667H1.66667ZM1.66667 3.33333C0.746193 3.33333 0 2.58714 0 1.66667C0 0.746192 0.746192 0 1.66667 0H30.3333C31.2538 0 32 0.746192 32 1.66667C32 2.58714 31.2538 3.33333 30.3333 3.33333H1.66667Z" fill="#F08400"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-3 right-3 z-50 opacity-0 transition-all duration-300 lg:bottom-10 lg:right-2">
        <button className="m-0 rounded-full border-none bg-white p-0 outline-hidden drop-shadow-lg">
          <svg className="size-10 fill-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.476-10-10-10C6.479 2 2 6.479 2 12c0 5.524 4.478 10 10 10c5.524 0 10-4.476 10-10zm-14.53.28a.75.75 0 0 1-.073-.976l.073-.084l4-4a.75.75 0 0 1 .977-.073l.085.072l4 4.002a.75.75 0 0 1-.977 1.133l-.084-.073l-2.72-2.721v6.691a.75.75 0 0 1-.649.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102v-6.69l-2.72 2.72a.75.75 0 0 1-.976.072l-.084-.072z"></path>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="page-spacing-wrapper pt-32">

        {/* Heart of Industry Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-5">
                  <h2 className="font-bebas text-5xl text-black md:text-6xl">The Heart of the Tyre Manufacturing Industry</h2>
                  <p className="text-lg text-gray-700">
                    Experience the complete tyre manufacturing value chain in one place. ITS Tyre Expo brings together technology leaders, equipment manufacturers, and industry professionals to exchange ideas, discover innovations, and drive the next phase of growth in global tyre manufacturing.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 bg-orange-50 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex w-fit flex-col font-bebas">
                      <h3 className="mb-3 text-5xl font-bold text-orange-600">{stat.value}</h3>
                      <p className="text-xl text-black">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link href="/visitor-registration">
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden border-2 border-orange-600 px-10 py-3 font-bebas text-2xl text-orange-600 transition-all hover:bg-black hover:text-white">Get your Badge Today</button>
                  </Link>
                </div>
              </div>
              <div className="order-first h-full lg:col-span-2">
                <div className="h-80 w-full bg-gray-300 object-cover lg:h-96"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="relative overflow-hidden bg-gray-800 py-20 text-white">
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="container relative z-10 px-4">
                <div className="grid gap-5">
                  <p className="font-bold text-orange-400">Connect with the Global Tyre Network at ITS Tyre Expo</p>
                  <h3 className="max-w-[1000px] font-bebas text-5xl text-white md:text-6xl">Where Tyre Manufacturing's Key Players Meet and Opportunities Take Shape</h3>
                  <Link href="/exhibitor-list" target="_blank">
                    <button className="w-fit bg-orange-600 px-8 py-3 font-bebas text-xl text-white transition-all hover:bg-black">Explore the Exhibitors List</button>
                  </Link>
                  <div className="mt-10 flex flex-wrap items-center gap-6 rounded-l-3xl bg-black/70 py-5 pl-5 font-bebas text-white">
                    {countries.map((country, idx) => (
                      <div key={idx} className="flag flex-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-500 lg:h-10 lg:w-10"></div>
                        <h5 className="text-xl lg:text-2xl">{country.name}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Why Attend ITS Tyre Expo</h3>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {attendeeCategories.map((item, idx) => (
                  <div key={idx} className="relative flex min-h-[300px] flex-col overflow-hidden rounded-lg bg-gray-100 p-6">
                    <div className="relative z-10 flex flex-col gap-4">
                      <h4 className="text-2xl font-bold text-black">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
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
                      See why the industry's leading buyers and suppliers choose ITS Tyre Expo. Download the brochure to uncover the facts, figures, and growth potential.
                    </p>
                    <Link href="/event-brochure">
                      <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Download Event Brochure</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Areas Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-5">
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Discover the Key Business Areas of Our Attendees</h3>
                  <p className="text-lg text-gray-700">
                    ITS Tyre Expo attracts a diverse audience from industries such as manufacturing, distribution, technology, and services. Understanding their business focus allows you to identify potential partners, customise your offerings, and engage directly with decision-makers driving innovation.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 bg-orange-50 p-8 sm:grid-cols-2 lg:grid-cols-3">
                  {businessAreas.map((area, idx) => (
                    <div key={idx} className="flex w-fit flex-col font-bebas">
                      <h3 className="mb-3 text-5xl font-bold text-orange-600">{area.percentage}</h3>
                      <p className="text-xl text-black">{area.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link href="/post-show-report">
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Download Your Post-Show Report</button>
                  </Link>
                </div>
              </div>
              <div className="order-first h-full lg:col-span-2">
                <div className="h-80 w-full bg-gray-300 object-cover lg:h-96"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Who is it for Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Who is ITS Tyre Expo for?</h3>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-lg bg-gray-800 p-6 text-white">
                  <div className="relative z-10">
                    <ul className="list-disc space-y-2 pl-5">
                      {visitorIndustries.map((industry, idx) => (
                        <li key={idx}>{industry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-lg bg-gray-800 p-6 text-white">
                  <div className="relative z-10">
                    <ul className="list-disc space-y-2 pl-5">
                      {supplierIndustries.map((industry, idx) => (
                        <li key={idx}>{industry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Exhibitors Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Have a Look at Our Past Exhibitors</h3>
              <div className="mt-10 rounded-lg bg-orange-50 p-8">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="h-16 w-32 bg-gray-300"></div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Link href="https://catalogue.ite-expo.ru/en-GB/exhibitorlist.aspx?project_id=541" target="_blank">
                    <button className="bg-orange-600 px-8 py-3 font-bebas text-xl text-white transition-all hover:bg-black">View the Exhibitor List</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Sectors Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container relative mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Event Sectors On Display At The Event</h3>
              <Link href="/sectors">
                <button className="flex-center global-transition group mb-10 w-fit gap-2 overflow-hidden border-2 border-orange-600 px-10 py-3 font-bebas text-2xl text-orange-600 transition-all hover:bg-black hover:text-white">Explore All the Event Sectors</button>
              </Link>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sectors.map((sector, idx) => (
                  <div key={idx} className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                    <div className="relative h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-4 p-5">
                      <h4 className="text-xl font-semibold text-black">{sector.title}</h4>
                      <p className="text-gray-600 line-clamp-2">{sector.description}</p>
                      <Link href={`/sectors/${sector.slug}`}>
                        <button className="flex-center group gap-2 font-bebas text-xl text-orange-600">Read More →</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Beyond an Exhibition Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="mb-5 flex justify-between lg:items-end">
                <div className="lg:basis-2/3">
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Beyond an Exhibition</h3>
                  <p className="mt-3 text-lg text-gray-600">
                    Experience the forefront of tyre manufacturing innovation through live technology showcases, expert-led discussions, and actionable insights. Discover opportunities to shape the future of the industry and stay ahead in a rapidly evolving market.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {beyondExhibition.map((item, idx) => (
                  <div key={idx} className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                    <div className="relative h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-4 p-5">
                      <h4 className="text-2xl font-bold text-black">{item.title}</h4>
                      <p className="text-gray-600 line-clamp-3">{item.description}</p>
                      <Link href={item.buttonLink}>
                        <button className="mt-2 w-fit bg-orange-600 px-6 py-2 font-bebas text-xl text-white transition-all hover:bg-black">{item.buttonText}</button>
                      </Link>
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
              <h3 className="font-bebas text-5xl text-black md:text-6xl">When and Where</h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-orange-50 p-6">
                  <p className="mb-2 font-bold">Venue</p>
                  <h4 className="text-2xl font-bold">BITEC, Bangkok, Thailand</h4>
                </div>
                <div className="rounded-xl bg-orange-50 p-6">
                  <p className="mb-2 font-bold">Opening Hours</p>
                  <h4 className="text-2xl font-bold">15 October 2026: 10:00 - 18:00</h4>
                  <h4 className="text-2xl font-bold">16 October 2026: 10:00 - 18:00</h4>
                  <h4 className="text-2xl font-bold">17 October 2026: 10:00 - 16:00</h4>
                </div>
              </div>
              <div className="h-96 w-full rounded-xl bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="-mt-px border-t-8 border-orange-600 bg-black py-20 text-white">
              <div className="container relative z-1 mx-auto w-full space-y-8 overflow-hidden px-4">
                <h2 className="font-bebas text-6xl md:text-7xl">Quick Navigation</h2>
                <div className="flex flex-wrap gap-12">
                  {quickLinks.map((item, idx) => (
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

        {/* Partners Section */}
        <PartnersSection/>
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}