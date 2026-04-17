// app/conference-programme/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PartnersSection from "@/components/home/PartnersSection";

// Mock Data (Replace with actual data fetching)
const statsData = [
  { value: "100+", label: "Speakers" },
  { value: "14", label: "Conference Events" },
  { value: "3", label: "Days" },
];

const mainEventsData = [
  {
    title:
      "Mining Leaders Forum – 3 Days of High-Level Discussions and Insightful Sessions",
    content: (
      <ul className="title-20 list-bullet-style">
        <li>
          <strong>Main Plenary Session: </strong>Featuring top executives from
          Norilsk Nickel, EVRAZ, Mikhailovsky GOK (named after A. V. Varichev),
          and ALROSA.
          <br />
          Focus: The impact of industrial technologies – how mining enterprises
          are accelerating growth, improving efficiency, and boosting
          profitability.
          <br />&nbsp;
        </li>
        <li>
          <strong>Mining Industry 4.0" Competition: </strong>A showcase of the
          most effective digital projects in the mining sector.
        </li>
      </ul>
    ),
  },
  {
    title: "New for This Year – Exclusive Forums and Round Tables",
    content: (
      <ul className="title-20 list-bullet-style">
        <li>
          <strong>MINGEO Forum – Debut Edition: </strong>Mineral Resources in a
          Multipolar World: Investments. Knowledge. Technologies.
          <br />&nbsp;
        </li>
        <li>
          <strong>Round Table: The Future of Procurement in Mining and Metallurgy: </strong>
          In-depth dialogue on modernising procurement strategies and
          partnerships.
          <br />&nbsp;
        </li>
        <li>
          <strong>Round Table: Coal Industry Perspectives: </strong>Energy of
          Change: New Paths and Solutions for the Coal Industry. Held in
          collaboration with TeDo and featuring SUEK representatives.
          <br />&nbsp;
        </li>
        <li>
          <strong>Round Table: Safety in the Workplace: </strong>From Theory to
          Practice – actionable strategies for operational safety in mining.
          <br />&nbsp;
        </li>
        <li>
          <strong>Round Table: Engineering Skills &amp; Innovation: </strong>
          Exploring the evolving demands for engineering expertise and the
          realities of innovation adoption in the mining sector.
        </li>
      </ul>
    ),
  },
  {
    title: "Technical Conferences",
    content: (
      <ul className="title-20 list-bullet-style">
        <li>
          <strong>Processing &amp; Enrichment of Mineral Raw Materials: </strong>
          Featuring mining and processing plant experts and presentations of
          cutting-edge technologies.
          <br />&nbsp;
        </li>
        <li>
          <strong>Gold &amp; Technology Conference:</strong> Latest innovations,
          methods, and insights at the intersection of gold mining and
          technology.
        </li>
      </ul>
    ),
  },
];

const keyEventsData = [
  {
    title: "The Mining Industry Leaders' Forum",
    image:
      "https://cdn.itegroupnews.com/MW_24_2304_0005_G_i_2_6f286bd05f.jpg",
  },
  {
    title: "Mining Industry 4.0",
    image: "https://cdn.itegroupnews.com/mw2022_gi_31_fe2e3e372e.jpg",
  },
  {
    title: "Expert conferences",
    image: "https://cdn.itegroupnews.com/4_C4_A3872_1202c590ba.jpg",
  },
  {
    title: "Round Tables",
    image: "https://cdn.itegroupnews.com/4_C4_A5222_ad4a659bdc.jpg",
  },
];

const conferencePartners = [
  {
    name: "Zyfra",
    logo: "https://cdn.itegroupnews.com/2_48e8e636ac.png",
    type: "Co-organiser",
    url: "https://www.zyfra.com/ru/",
  },
  {
    name: "Modern Women in Industries",
    logo: "https://cdn.itegroupnews.com/3_c5c5637a9c.png",
    type: "Strategic Partner",
    url: "https://wim-industries.ru/",
  },
];

const partnersSponsors = [
  { name: "ProfiMiner", logo: "https://cdn.itegroupnews.com/Profi_Miner_5d476ae93b.webp" },
  { name: "Times International", logo: "https://cdn.itegroupnews.com/1_c80a02899c.png" },
  { name: "TotalExpo.ru", logo: "https://cdn.itegroupnews.com/Total_Expo_ru_26b429a05b.webp" },
  { name: "Vedomosti", logo: "https://cdn.itegroupnews.com/Vedomosti_7814bd5d9d.webp" },
  { name: "Industry of Eurasia: Mining", logo: "https://cdn.itegroupnews.com/Industry_of_Eurasia_Mining_158b39f188.webp" },
  { name: "Miners of Russia", logo: "https://cdn.itegroupnews.com/miners_of_russia_78f659f949.webp" },
];

export default function ConferenceProgrammePage() {
  return (
    <div className="page-spacing-wrapper">


      {/* Innovate Through Knowledge Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="">
            <div className="container z-1 grid items-center gap-10 overflow-hidden lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-5">
                <div className="flex flex-col gap-5">
                  <h5 className="title-70 text-black">Innovate Through Knowledge</h5>
                  <p>
                    A dynamic three-day conference featuring industry leaders
                    from mining companies, processing plants, and geological
                    exploration firms. Designed for decision-makers, engineers,
                    and specialists, the program tackles key challenges,
                    innovations, and trends shaping the mining sector.
                    <br />
                    <br />
                    Engage, collaborate, and stay ahead in the industry!
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-10 2xl:gap-20">
                  {statsData.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex w-fit flex-col justify-center font-bebas last-of-type:border-none lg:border-r lg:pr-10 2xl:pr-20"
                    >
                      <h3 className="title-70 mb-3 font-bold text-mainColor1">
                        {stat.value}
                      </h3>
                      <p className="title-20 text-black">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    href="https://cdn-ite.prismetic.com/CP_Agenda_MWR_2025_f934b33dd5.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden bg-mainColor1 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">
                      View Agenda
                    </button>
                  </Link>
                </div>
              </div>
              <img
                alt="Mining World"
                loading="lazy"
                width="500"
                height="500"
                decoding="async"
                className="absolute top-1/2 size-[400px] -translate-y-1/2 object-cover opacity-10 lg:right-[-15vw] lg:size-[30vw] lg:opacity-20"
                src="/imgs/shape-1.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Events Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <h2 className="title-70 py-10 text-black">
              Main events of the business program April 23-25, 2025
            </h2>
            <div className="grid size-full grid-cols-1 gap-5 md:grid-cols-2">
              {mainEventsData.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-mainColor2 relative flex size-full min-h-[500px] flex-col p-5 text-black lg:p-10"
                >
                  <div className="z-10 flex flex-col gap-5">
                    <h2 className="title-40 font-semibold">{event.title}</h2>
                    <div className="title-20">{event.content}</div>
                    <div className="flex w-full flex-wrap gap-5"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Events Carousel Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <div className="mb-5 flex justify-between lg:items-end">
              <div className="lg:basis-2/3">
                <h4 className="title-70 my-3 text-black">Key Events</h4>
                <p>
                  The MiningWorld 2025 conference program united top experts and
                  industry leaders for three days of in-depth discussions.
                  Participants shared valuable insights and explored
                  sustainability in mining, with a focus on innovations,
                  business processes, and management strategies vital for the
                  sector’s future.
                </p>
              </div>
            </div>
            <div className="relative mt-10 w-full" role="region">
              <Carousel>
                <CarouselContent className="-ml-4">
                  {keyEventsData.map((event, idx) => (
                    <CarouselItem
                      key={idx}
                      className="pl-4 group lg:basis-1/2 xl:basis-1/3"
                    >
                      <div className="flex flex-col bg-mainColor5 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                        <div className="relative lg:h-60">
                          <Image
                            alt={event.title}
                            width={500}
                            height={500}
                            className="size-full object-cover"
                            src={event.image}
                          />
                        </div>
                        <div className="flex flex-col gap-4 p-5">
                          <h5 className="title-30 font-bebas text-black">
                            {event.title}
                          </h5>
                          <p className="line-clamp-3"> </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Partners Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <h2 className="title-70 mb-10 text-black lg:mb-20">
              Conference Partners
            </h2>
            <div className="flex flex-wrap gap-5">
              {conferencePartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex w-full max-w-[300px] flex-col items-center gap-5 border border-mainColor1 p-5 text-center"
                >
                  <Image
                    alt={partner.name}
                    width={500}
                    height={500}
                    className="object-fit h-40 w-auto"
                    src={partner.logo}
                  />
                  <h3 className="title-20 font-semibold text-black">
                    {partner.name}
                  </h3>
                  <p className=" ">{partner.type}</p>
                  <Link
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-auto w-full"
                  >
                    <button className="flex-center global-transition group w-full gap-2 overflow-hidden bg-mainColor1 px-10 py-3 font-bebas text-2xl text-white hover:bg-black">
                      Visit Website
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PartnersSection/>

    </div>
  );
}