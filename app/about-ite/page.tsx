// app/about-ite/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";

export default function AboutITEPage() {
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
    { value: "4 Mil+", label: "Database" },
    { value: "500,000+", label: "Visitors Per Year" },
    { value: "10,000+", label: "Exhibitors Per Year" },
    { value: "1,700+", label: "Media in Attendance" },
    { value: "30", label: "Events" },
    { value: "12+", label: "Industry Sectors" }
  ];

  const missionVisionValues = [
    {
      title: "The Mission",
      content: "To create unique and valuable events for the success of your business and the development of industries and economies.",
      image: "/images/mission.jpg"
    },
    {
      title: "The Vision",
      content: "Connecting businesses year-round, both online and in person, allowing professionals to establish long-term business partnerships.",
      image: "/images/vision.jpg"
    },
    {
      title: "Our Values",
      content: "Entrepreneurship, Integrity, Excellence, Positive Thinking, Commitment to Result",
      image: "/images/values.jpg"
    }
  ];

  const exhibitions = [
    {
      title: "MITT",
      venue: "Crocus Expo, Moscow",
      description: "The international travel & hospitality show.",
      siteLink: "https://expomitt.com",
      startDate: "Mar 11th, 2026",
      endDate: "Mar 13th, 2026",
      image: "/images/mitt.jpg"
    },
    {
      title: "TranRussia",
      venue: "Crocus Expo, Moscow",
      description: "The international event for transportation and logistics market experts.",
      siteLink: "https://trstexpo.com/",
      startDate: "Mar 17th, 2026",
      endDate: "Mar 19th, 2026",
      image: "/images/transrussia.jpg"
    },
    {
      title: "SkladTech",
      venue: "Crocus Expo, Moscow",
      description: "The special exposition for warehouse and handling equipment, automation systems and solutions.",
      siteLink: "https://trstexpo.com/",
      startDate: "Mar 17th, 2026",
      endDate: "Mar 19th, 2026",
      image: "/images/skladtech.jpg"
    },
    {
      title: "MosHome",
      venue: "Crocus Expo, Moscow",
      description: "The International exhibition of consumer goods for house, garden, sports and leisure MosHome.",
      siteLink: "https://moshomeexpo.com",
      startDate: "Mar 31st, 2026",
      endDate: "Apr 3rd, 2026",
      image: "/images/moshome.jpg"
    },
    {
      title: "MosBuild",
      venue: "Crocus Expo, Moscow",
      description: "The international building and interiors trade show.",
      siteLink: "https://mosbuildexpo.com/",
      startDate: "Mar 31st, 2026",
      endDate: "Apr 3rd, 2026",
      image: "/images/mosbuild.jpg"
    },
    {
      title: "ExpoElectronica",
      venue: "Pavilion 3, Halls 13, 14, 15, Crocus Expo",
      description: "The international exhibition of electronica, components and technologies, materials and equipment, embedded systems and turnkey solutions.",
      siteLink: "https://electronicaexpo.com/",
      startDate: "Apr 14th, 2026",
      endDate: "Apr 16th, 2026",
      image: "/images/electronica.jpg"
    },
    {
      title: "ExpoCifra",
      venue: "Crocus Expo, Pavillion 3, Hall 13",
      description: "The international exhibition of information technologies and digital transformation solutions. Co-located with ExpoElectronica",
      siteLink: "https://expocifra.com/en/",
      startDate: "Apr 14th, 2026",
      endDate: "Apr 16th, 2026",
      image: "/images/expocifra.jpg"
    },
    {
      title: "Analitika Expo",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of laboratory equipment and chemical reagents.",
      siteLink: "https://analitikaexpo.com/en/",
      startDate: "Apr 22nd, 2026",
      endDate: "Apr 24th, 2026",
      image: "/images/analitika.jpg"
    },
    {
      title: "MiningWorld",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of machines and equipment for mining, processing, and transportation of minerals.",
      siteLink: "https://miningworldexpo.com",
      startDate: "Apr 22nd, 2026",
      endDate: "Apr 24th, 2026",
      image: "/images/miningworld.jpg"
    },
    {
      title: "Securika Moscow",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of security and fire protection equipment and products.",
      siteLink: "https://securika-moscow.ru/en/",
      startDate: "Apr 22nd, 2026",
      endDate: "Apr 24th, 2026",
      image: "/images/securika.jpg"
    },
    {
      title: "Printech",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of equipment, technologies and supplies for printing and advertising production. Co-located with RosUpack.",
      siteLink: "https://printech-expo.ru/en/",
      startDate: "Jun 16th, 2026",
      endDate: "Jun 19th, 2026",
      image: "/images/printech.jpg"
    },
    {
      title: "RosUpack",
      venue: "Crocus Expo, Moscow",
      description: "The international event for package manufacturers and consumers. Co-located with Printech.",
      siteLink: "https://rosupackexpo.com/",
      startDate: "Jun 16th, 2026",
      endDate: "Jun 19th, 2026",
      image: "/images/rosupack.jpg"
    },
    {
      title: "WorldFood Moscow",
      venue: "Crocus Expo, Moscow",
      description: "The international food and drink exhibition.",
      siteLink: "https://expoworldfood.com/",
      startDate: "Sep 15th, 2026",
      endDate: "Sep 18th, 2026",
      image: "/images/worldfood.jpg"
    },
    {
      title: "Weldex",
      venue: "Pavilion 1, Hall 4, Crocus Expo",
      description: "The international exhibition of welding materials, equipment and technologies.",
      siteLink: "https://weldex.ru/en/",
      startDate: "Oct 6th, 2026",
      endDate: "Oct 9th, 2026",
      image: "/images/weldex.jpg"
    },
    {
      title: "Comtrans",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of commercial vehicles.",
      siteLink: "https://www.comtransexpo.ru/en/",
      startDate: "Oct 6th, 2026",
      endDate: "Oct 9th, 2026",
      image: "/images/comtrans.jpg"
    },
    {
      title: "Fastenex",
      venue: "Hall 4, Pavilion 1, Crocus Expo, Moscow",
      description: "The international exhibition of fasteners and industrial supply.",
      siteLink: "https://fastenex.ru/en/",
      startDate: "Oct 6th, 2026",
      endDate: "Oct 9th, 2026",
      image: "/images/fastenex.jpg"
    },
    {
      title: "YugAgro",
      venue: "Expograd Yug, Krasnodar",
      description: "The international exhibition of agricultural machinery, equipment, and materials for crop production.",
      siteLink: "https://yugagro.org/en/",
      startDate: "Nov 17th, 2026",
      endDate: "Nov 20th, 2026",
      image: "/images/yugagro.jpg"
    },
    {
      title: "Pharmtech & Ingredients",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition for equipment, raw materials and technologies for pharmaceutical production.",
      siteLink: "https://expopharmtech.com/",
      startDate: "Nov 24th, 2026",
      endDate: "Nov 27th, 2026",
      image: "/images/pharmtech.jpg"
    },
    {
      title: "Woodex",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of equipment, materials and components for woodworking and furniture industry",
      siteLink: "https://woodexpo.ru/en/",
      startDate: "Dec 1st, 2026",
      endDate: "Dec 4th, 2026",
      image: "/images/woodex.jpg"
    },
    {
      title: "ToolMash",
      venue: "Pavilion 1, Crocus Expo, Moscow",
      description: "The international hardware exhibition. Co-located with Woodex",
      siteLink: "https://toolmash.ru/en/",
      startDate: "Dec 1st, 2026",
      endDate: "Dec 4th, 2026",
      image: "/images/toolmash.jpg"
    },
    {
      title: "DairyTech",
      venue: "Pavilion 1, Hall 4, Crocus Expo, Moscow",
      description: "The international exhibition of equipment for milk and dairy production.",
      siteLink: "https://dairytechexpo.com/",
      startDate: "Jan 26th, 2027",
      endDate: "Jan 28th, 2027",
      image: "/images/dairytech.jpg"
    },
    {
      title: "Aquaflame by Aquatherm",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition for domestic and industrial heating, water supply, engineering systems, and equipment for swimming pools and spas.",
      siteLink: "https://aquaflameexpo.com",
      startDate: "Feb 1st, 2027",
      endDate: "Feb 4th, 2027",
      image: "/images/aquaflame.jpg"
    },
    {
      title: "AirVent",
      venue: "Crocus Expo, Moscow",
      description: "The international exhibition of ventilation, air conditioning, and refrigeration equipment.",
      siteLink: "https://airventexpo.com/",
      startDate: "Feb 1st, 2027",
      endDate: "Feb 4th, 2027",
      image: "/images/airvent.jpg"
    }
  ];

  const partners = [
    "ProfiMiner", "Times International", "TotalExpo.ru", "Vedomosti",
    "Industry of Eurasia", "Miners of Russia", "Zyfra", "Market and Business Analysis",
    "SteelRadar", "Mining Magazine", "Comnews", "Business Russia"
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
        {/* About Us Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-5">
                  <h2 className="font-bebas text-5xl text-black md:text-6xl">About Us</h2>
                  <p className="text-lg text-gray-700">
                    ITE Group is a business events organiser that has been operating in the Asian market since 1991. Every year, we host more than 30 of the largest industry events, including exhibitions, summits, and conferences. Powered by the Connect digital platform, the ITE ecosystem offers unique hybrid solutions for industry communities across Asia, the ASEAN countries, and beyond.
                    <br /><br />
                    With over 100 agents and hundreds of associations and partners spanning 150 countries and 5 continents, our global network seamlessly connects clients to opportunities around the world.
                    <br /><br />
                    ITE events contribute to business success and development, unlock the export potential of countries and regions, provide access to a broad target audience, and offer effective, innovative solutions for networking, growth, and professional development. They ensure dialogue between the business community and government.
                    <br /><br />
                    ITE offices are located in Bangkok, Dubai, Beijing, and New Delhi.
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
              </div>
              <div className="order-first h-full lg:col-span-2">
                <div className="h-80 w-full bg-gray-300 object-cover lg:h-96"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="mb-5 flex justify-between lg:items-end">
                <div className="lg:basis-2/3">
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Working for Your Success</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    At ITE Group, our goal is to empower businesses by creating impactful events that drive industry growth and foster valuable connections. We are dedicated to supporting our clients' success and facilitating meaningful opportunities for professionals worldwide.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {missionVisionValues.map((item, idx) => (
                  <div key={idx} className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                    <div className="relative h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-4 p-5">
                      <h4 className="text-2xl font-bold text-black">{item.title}</h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exhibitions at a Glance Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="flex w-full items-end justify-between gap-10 max-lg:flex-wrap lg:gap-20 2xl:gap-40">
                <div>
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Our Exhibitions at a Glance</h3>
                  <p className="mt-3 text-gray-700">
                    Each year, we organise and host over 30 leading industry events across key sectors, including exhibitions, summits, and conferences.
                    <br /><br />
                    Supported by the Connect digital platform, the ITE ecosystem offers innovative hybrid solutions for industry communities across Asia and beyond.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {exhibitions.map((exhibition, idx) => (
                  <div key={idx} className="group flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-all hover:shadow-md xl:p-7">
                    <div className="h-32 w-full bg-gray-200 object-contain"></div>
                    <p className="text-gray-600">{exhibition.description}</p>
                    <p>Start Date: <span className="font-bold">{exhibition.startDate}</span></p>
                    <p>End Date: <span className="font-bold">{exhibition.endDate}</span></p>
                    <p>Venue: <span className="font-bold">{exhibition.venue}</span></p>
                    <Link href={exhibition.siteLink} target="_blank" className="mt-auto block">
                      <button className="flex-center group gap-2 font-bebas text-2xl text-orange-600 transition-all hover:text-black">
                        Visit Website
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                ))}
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
      `}</style>
    </div>
  );
}