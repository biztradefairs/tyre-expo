// app/about-its-tyre-expo/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";

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
      image: "/images/conference.jpg",
      buttonText: "Learn More",
      buttonLink: "/conference-programme"
    },
    {
      title: "LeadScanning",
      description: "ITS Tyre Expo Connect is the exhibition's dedicated business networking platform, designed to facilitate meaningful connections between exhibitors, visitors, media, professional associations, and industry experts from across Asia and beyond.",
      image: "/images/leadscanning.jpg",
      buttonText: "Join Now",
      buttonLink: "/leadscanning"
    },
    {
      title: "Awards",
      description: "The Tyre Innovation Awards, part of ITS Tyre Expo since 2021, recognize digital and sustainable projects that improve tyre manufacturing efficiency and sustainability. An independent jury selects the most innovative projects addressing key industry challenges.",
      image: "/images/awards.jpg",
      buttonText: "",
      buttonLink: ""
    }
  ];

  const partners = [
    "ProfiMiner", "Times International", "TotalExpo.ru", "Vedomosti",
    "Industry of Eurasia", "Miners of Russia", "Zyfra", "Market and Business Analysis"
  ];

  const quickLinks = [
    { label: "Enquire to Exhibit", link: "/exhibiting-enquiry", icon: "/icons/enquire.png" },
    { label: "Download Event Brochure", link: "/event-brochure", icon: "/icons/brochure.png" },
    { label: "Exhibitor List", link: "/exhibitor-list", icon: "/icons/list.png" },
    { label: "Plan Your Travel", link: "/plan-your-travel", icon: "/icons/travel.png" },
    { label: "Why Visit", link: "/why-visit", icon: "/icons/visit.png" }
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


        {/* Transforming Tyre Operations Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-5">
                  <h2 className="font-bebas text-5xl text-black md:text-6xl">Transforming Tyre Operations for Over 10 Years</h2>
                  <p className="text-lg text-gray-700">
                    ITS Tyre Expo is the premier international exhibition for tyre manufacturing machinery, equipment, and technologies, covering the full cycle of rubber processing, tyre production, and quality testing.
                    Each year, leading Asian and global companies in tyre manufacturing, rubber processing, equipment manufacturing, and logistics gather to present the latest innovations shaping the industry's future.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 bg-orange-50 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">10th</h3>
                    <p className="text-xl text-black">Edition</p>
                  </div>
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">8,500+</h3>
                    <p className="text-xl text-black">Visitors</p>
                  </div>
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">350+</h3>
                    <p className="text-xl text-black">Exhibitors</p>
                  </div>
                  <div className="flex w-fit flex-col font-bebas">
                    <h3 className="mb-3 text-5xl font-bold text-orange-600">60+</h3>
                    <p className="text-xl text-black">Conference Speakers</p>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/why-exhibit">
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">Why Exhibit</button>
                  </Link>
                </div>
              </div>
              <div className="order-first h-full lg:col-span-2">
                <div className="h-80 w-full bg-gray-300 object-cover lg:h-96"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Our Event Sectors Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container relative mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Explore Our Event Sectors</h3>
              <Link href="/sectors">
                <button className="flex-center global-transition group mb-10 w-fit gap-2 overflow-hidden bg-orange-600 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">See All Sectors</button>
              </Link>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        {/* Year-Round Industry Ecosystem Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">ITS Tyre Expo: A Year-Round Industry Ecosystem</h3>
              <p className="mt-5 text-lg text-gray-700">
                ITS Tyre Expo is the region's leading international exhibition for tyre manufacturing technologies. With 10 years of reputation and trust, it plays a pivotal role in connecting equipment manufacturers, technology providers, tyre companies, and procurement leaders from across Asia and abroad.
                <br /><br />
                But ITS Tyre Expo is more than just a three-day exhibition – it's part of the broader ITE Tyre Ecosystem, delivering ongoing value to industry professionals through multiple touchpoints across the year:
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ecosystemItems.map((item, idx) => (
                  <div key={idx} className="relative flex min-h-[450px] flex-col overflow-hidden rounded-lg bg-gray-100 p-6 shadow-md">
                    <div className="flex flex-col gap-4">
                      <h4 className="text-2xl font-bold text-black">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                      <ul className="list-disc space-y-2 pl-5 text-gray-600">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                      <Link href={item.buttonLink}>
                        <button className="mt-4 w-fit bg-orange-600 px-6 py-2 font-bebas text-xl text-white transition-all hover:bg-black">{item.buttonText}</button>
                      </Link>
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
                      Make sure you grab your copy of the event brochure to learn more about the show and explore your participation opportunities.
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

        {/* Leading Exhibitors Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Meet the Leading Exhibitors of 2026</h3>
              <div className="mt-10 rounded-lg bg-orange-50 p-8">
                <h4 className="text-2xl font-bold text-black">Exhibiting at ITS Tyre Expo Elevates Your Brand and Expands Your Network</h4>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-16 w-32 bg-gray-300"></div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Link href="https://catalogue.ite-expo.ru/en-GB/exhibitorlist.aspx?project_id=522" target="_blank">
                    <button className="bg-orange-600 px-8 py-3 font-bebas text-xl text-white transition-all hover:bg-black">View Full Exhibitor List</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto flex flex-col gap-6 px-4 text-black">
              <h3 className="font-bebas text-5xl text-black md:text-6xl">Here's Where You Can Find Us!</h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-orange-50 p-6">
                  <p className="mb-2 font-bold">Opening Hours</p>
                  <h4 className="text-2xl font-bold">15 October 2026: 10:00 - 18:00</h4>
                  <h4 className="text-2xl font-bold">16 October 2026: 10:00 - 18:00</h4>
                  <h4 className="text-2xl font-bold">17 October 2026: 10:00 - 16:00</h4>
                </div>
                <div className="rounded-xl bg-orange-50 p-6">
                  <p className="mb-2 font-bold">Venue</p>
                  <h4 className="text-2xl font-bold">BITEC, Bangkok, Thailand</h4>
                </div>
              </div>
              <div className="h-96 w-full rounded-xl bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Key Events Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="mb-5 flex justify-between lg:items-end">
                <div className="lg:basis-2/3">
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Key Events</h3>
                  <p className="mt-3 text-lg text-gray-600">
                    Connect is a community platform designed for business networking between exhibitors, visitors from across Asia, media, professional associations, and industry experts.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {keyEvents.map((event, idx) => (
                  <div key={idx} className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                    <div className="relative h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-4 p-5">
                      <h4 className="text-xl font-bold text-black">{event.title}</h4>
                      <p className="text-gray-600 line-clamp-4">{event.description}</p>
                      {event.buttonText && (
                        <Link href={event.buttonLink}>
                          <button className="mt-2 w-fit bg-orange-600 px-6 py-2 font-bebas text-xl text-white transition-all hover:bg-black">{event.buttonText}</button>
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
<PartnersSection/>

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