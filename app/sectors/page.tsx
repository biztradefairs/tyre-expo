// app/sectors/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";

export default function SectorsPage() {
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
      description: "Natural rubber, synthetic rubber, carbon black, silica, processing oils, and specialty chemicals for tyre manufacturing.",
      image: "/images/sectors/raw-materials.jpg"
    },
    {
      title: "Tyre Manufacturing Machinery",
      slug: "tyre-manufacturing-machinery",
      description: "Banbury mixers, calenders, extruders, tyre building machines, curing presses, and finishing equipment.",
      image: "/images/sectors/manufacturing-machinery.jpg"
    },
    {
      title: "Rubber Processing Equipment",
      slug: "rubber-processing-equipment",
      description: "Two-roll mills, internal mixers, strainers, pelletizers, and rubber bale cutters for efficient processing.",
      image: "/images/sectors/processing-equipment.jpg"
    },
    {
      title: "Tyre Testing & Quality Control",
      slug: "tyre-testing-and-quality-control",
      description: "Durability testers, uniformity machines, balance testers, X-ray inspection, and laboratory testing equipment.",
      image: "/images/sectors/testing-equipment.jpg"
    },
    {
      title: "Retreading & Repair Materials",
      slug: "retreading-and-repair-materials",
      description: "Pre-cure and mold cure tread rubber, cushion gum, repair patches, and retreading machinery and accessories.",
      image: "/images/sectors/retreading.jpg"
    },
    {
      title: "Recycling & Sustainability Solutions",
      slug: "recycling-and-sustainability-solutions",
      description: "Tyre recycling machinery, crumb rubber production, pyrolysis systems, and sustainable material innovations.",
      image: "/images/sectors/recycling.jpg"
    },
    {
      title: "Mold & Tooling Solutions",
      slug: "mold-and-tooling-solutions",
      description: "Tyre molds, bladder molds, engraving services, and precision tooling for tyre manufacturing.",
      image: "/images/sectors/molds.jpg"
    },
    {
      title: "Tyre Reinforcement Materials",
      slug: "tyre-reinforcement-materials",
      description: "Steel cord, textile cord (nylon, polyester, rayon), bead wire, and fabric for tyre reinforcement.",
      image: "/images/sectors/reinforcement.jpg"
    },
    {
      title: "Additives & Performance Chemicals",
      slug: "additives-and-performance-chemicals",
      description: "Antioxidants, antiozonants, accelerators, activators, adhesion promoters, and specialty additives.",
      image: "/images/sectors/additives.jpg"
    },
    {
      title: "Automation & Industry 4.0",
      slug: "automation-and-industry-40",
      description: "MES systems, AI quality inspection, predictive maintenance, and smart factory solutions for tyre plants.",
      image: "/images/sectors/automation.jpg"
    },
    {
      title: "Material Handling & Logistics",
      slug: "material-handling-and-logistics",
      description: "Conveyor systems, automated guided vehicles (AGVs), warehouse solutions, and tyre handling equipment.",
      image: "/images/sectors/material-handling.jpg"
    },
    {
      title: "Curing & Vulcanization Systems",
      slug: "curing-and-vulcanization-systems",
      description: "Curing presses, bladder systems, hot water circulation units, and vulcanization control systems.",
      image: "/images/sectors/curing.jpg"
    }
  ];

  const quickGuideItems = [
    {
      title: "Become an Exhibitor",
      description: "Connect with 8,000+ tyre industry professionals across 3 days for unparalleled networking and business opportunities.",
      buttonText: "Book A Stand",
      buttonLink: "/exhibiting-enquiry",
      image: "/images/exhibitor.jpg"
    },
    {
      title: "Download Your Event Brochure",
      description: "Find out who we are, what we do, and how best we can help you achieve your strategic business goals.",
      buttonText: "Download Now",
      buttonLink: "/event-brochure",
      image: "/images/brochure.jpg"
    },
    {
      title: "Become a Visitor",
      description: "Not ready to exhibit? Register for free and discover the latest innovations in tyre manufacturing.",
      buttonText: "Register Now",
      buttonLink: "/visitor-registration",
      image: "/images/visitor.jpg"
    }
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
        {/* Sectors Grid Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h2 className="font-bebas text-5xl text-black md:text-6xl">Sectors Showcased at ITS Tyre Expo</h2>
              <p className="mt-5 text-lg text-gray-700 max-w-4xl">
                The event highlights key sectors including raw materials, tyre manufacturing machinery, testing equipment, and automation technologies tailored for the tyre industry. Whether you're seeking innovative solutions for rubber processing, cutting-edge machinery, or tools for optimizing tyre production, ITS Tyre Expo offers a platform for every professional in the tyre manufacturing and rubber processing sectors.
              </p>

              <div className="my-20 flex flex-wrap justify-center gap-8">
                {sectors.map((sector, idx) => (
                  <Link key={idx} href={`/sectors/${sector.slug}`} className="group relative w-72 overflow-hidden rounded-xl text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div className="h-72 w-full bg-gray-300"></div>
                    <h3 className="title-20 absolute -bottom-px w-full bg-orange-50 py-5 font-bebas text-black duration-300 ease-in-out group-hover:bg-orange-100">
                      {sector.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Guide Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="mb-5 flex justify-between lg:items-end">
                <div className="lg:basis-2/3">
                  <p className="font-bold text-orange-600">Quick Guide</p>
                  <h3 className="my-3 font-bebas text-5xl text-black md:text-6xl">Simplifying Your Participation Journey</h3>
                </div>
              </div>

              <div className="relative mt-10 w-full">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {quickGuideItems.map((item, idx) => (
                    <div key={idx} className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                      <div className="relative h-60 bg-gray-300"></div>
                      <div className="flex flex-col gap-4 p-5">
                        <h4 className="font-bebas text-2xl text-black">{item.title}</h4>
                        <p className="text-gray-600 line-clamp-3">{item.description}</p>
                        <Link href={item.buttonLink}>
                          <button className="mt-2 w-fit bg-orange-600 px-6 py-2 font-bebas text-xl text-white transition-all hover:bg-black">
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
        </div>
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