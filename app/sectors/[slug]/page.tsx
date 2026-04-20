// app/sectors/[slug]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSectorBySlug, getAllSectorSlugs, Sector } from "@/data/sectors";
import PartnersSection from "@/components/home/PartnersSection";

// Generate static paths for all sectors (for static export)


export default function SectorPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [loading, setLoading] = useState(true);
  const [sector, setSector] = useState<Sector | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    const foundSector = getSectorBySlug(slug);
    setSector(foundSector || null);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-100 grid place-content-center bg-black">
        <div className="flex size-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-500 text-4xl">
          <div className="flex size-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-300 text-2xl"></div>
        </div>
      </div>
    );
  }

  if (!sector) {
    return (
      <div className="page-spacing-wrapper pt-[120px] lg:pt-[140px]">
        <div className="px-6 md:px-10 lg:px-12 py-20 text-center">
          <h1 className="font-bebas text-5xl text-black md:text-6xl lg:text-7xl">
            Sector Not Found
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            The sector you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/sectors">
            <button className="mt-8 bg-[#F08400] px-8 py-3 font-bebas text-xl text-white transition-all hover:bg-black">
              Back to All Sectors
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const quickGuideItems = [
    {
      title: "Become an Exhibitor",
      description: "Connect with 8,000+ tyre industry professionals across 3 days for unparalleled networking opportunities.",
      buttonText: "Book A Stand",
      buttonLink: "/exhibiting-enquiry",
      image: "https://cdn.itegroupnews.com/mw24_1062_min_91b90d653f.jpg"
    },
    {
      title: "Download Your Event Brochure",
      description: "Not ready to become an exhibitor? Visit the exhibition for free and find out what to expect for the following edition.",
      buttonText: "Download Now",
      buttonLink: "/event-brochure",
      image: "https://cdn.itegroupnews.com/Untitled_500_x_500_px_cd8f081eec.png"
    },
    {
      title: "Become a Visitor",
      description: "Find out who we are, what we do, and how best we can help you achieve your strategic business goals all wrapped up in our concise event brochure.",
      buttonText: "Register Now",
      buttonLink: "/visitor-registration",
      image: "https://cdn.itegroupnews.com/mw24_1077_min_75a8122d24.jpg"
    }
  ];

  return (
    <div className="intro-animation">
      {/* Mobile Header */}
      <div className="fixed left-0 top-0 z-50 w-full bg-black px-5 py-2 lg:hidden">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/imgs/logo-its.png" alt="ITS Tyre Expo" width={140} height={40} className="h-auto w-auto object-contain" />
          </Link>
          <button className="z-10" aria-label="Menu">
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66667 20C0.746193 20 0 19.2538 0 18.3333C0 17.4129 0.746193 16.6667 1.66667 16.6667H30.3333C31.2538 16.6667 32 17.4129 32 18.3333C32 19.2538 31.2538 20 30.3333 20H1.66667ZM1.66667 11.6667C0.746193 11.6667 0 10.9205 0 10C0 9.07952 0.746192 8.33333 1.66667 8.33333H30.3333C31.2538 8.33333 32 9.07952 32 10C32 10.9205 31.2538 11.6667 30.3333 11.6667H1.66667ZM1.66667 3.33333C0.746193 3.33333 0 2.58714 0 1.66667C0 0.746192 0.746192 0 1.66667 0H30.3333C31.2538 0 32 0.746192 32 1.66667C32 2.58714 31.2538 3.33333 30.3333 3.33333H1.66667Z" fill="#F08400"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-3 right-3 z-50 opacity-0 transition-all duration-300 lg:bottom-10 lg:right-2">
        <button className="m-0 rounded-full border-none bg-white p-0 outline-hidden drop-shadow-lg" aria-label="Back to top">
          <svg className="size-10 fill-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.476-10-10-10C6.479 2 2 6.479 2 12c0 5.524 4.478 10 10 10c5.524 0 10-4.476 10-10zm-14.53.28a.75.75 0 0 1-.073-.976l.073-.084l4-4a.75.75 0 0 1 .977-.073l.085.072l4 4.002a.75.75 0 0 1-.977 1.133l-.084-.073l-2.72-2.721v6.691a.75.75 0 0 1-.649.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102v-6.69l-2.72 2.72a.75.75 0 0 1-.976.072l-.084-.072z"></path>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="page-spacing-wrapper pt-[120px] lg:pt-[140px]">
        {/* Hero Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="px-6 md:px-10 lg:px-12">
              <div className="space-y-5 py-10">
                <h1 className="font-bebas text-5xl text-black md:text-6xl lg:text-7xl">
                  {sector.title}
                </h1>
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px] lg:h-[500px]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-lg leading-relaxed text-gray-700 lg:text-xl">
                  {sector.content || sector.description}
                </p>
                {sector.buttonText && (
                  <Link href={sector.buttonLink || "/exhibiting-enquiry"}>
                    <button className="bg-[#F08400] px-8 py-3 font-bebas text-xl text-white transition-all hover:bg-black">
                      {sector.buttonText}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Sectors Section */}
        {sector.subSectors && sector.subSectors.length > 0 && (
          <div className="animated-block mt-12">
            <div className="animated-block-target">
              <div className="px-6 md:px-10 lg:px-12">
                <h2 className="mb-8 font-bebas text-4xl text-black md:text-5xl">
                  Sub-Sectors Within <span className="text-[#F08400]">{sector.title}</span>
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sector.subSectors.map((sub, idx) => (
                    <div key={idx} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                      <h3 className="mb-3 font-bebas text-2xl text-[#F08400]">
                        {sub.title}
                      </h3>
                      <p className="text-gray-600">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Products Section */}
        {sector.keyProducts && sector.keyProducts.length > 0 && (
          <div className="animated-block mt-12">
            <div className="animated-block-target">
              <div className="px-6 md:px-10 lg:px-12">
                <h2 className="mb-8 font-bebas text-4xl text-black md:text-5xl">
                  Key Products & Solutions
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {sector.keyProducts.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-lg bg-gray-50 p-3">
                      <span className="text-xl text-[#F08400]">✓</span>
                      <span className="text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Guide Section */}
        <div className="animated-block mt-12 lg:mt-20">
          <div className="animated-block-target">
            <div className="px-6 md:px-10 lg:px-12">
              <div className="mb-10 text-center lg:mb-12 lg:text-left">
                <p className="font-bold text-[#F08400]">Quick Guide</p>
                <h3 className="mt-2 font-bebas text-5xl text-black md:text-6xl lg:text-7xl">
                  Simplifying Your <span className="text-[#F08400]">Participation Journey</span>
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {quickGuideItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-all duration-300 ease-in-out hover:shadow-lg"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-start">
                        <Link href={item.buttonLink}>
                          <button className="bg-[#F08400] px-6 py-2.5 font-bebas text-xl text-white transition-all duration-300 hover:bg-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                            {item.buttonText}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <h4 className="font-bebas text-2xl text-black md:text-3xl">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* Back to Sectors Link */}
        <div className="animated-block mt-8">
          <div className="px-6 md:px-10 lg:px-12">
            <Link href="/sectors">
              <button className="flex items-center gap-2 text-[#F08400] transition-all hover:gap-3 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to All Sectors
              </button>
            </Link>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-12 lg:mt-20">
          <PartnersSection />
        </div>
      </div>

      <style jsx>{`
        .global-transition {
          transition: all 0.3s ease;
        }
        .flex-between {
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        
        .animated-block {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animated-block:nth-child(1) { animation-delay: 0.1s; }
        .animated-block:nth-child(2) { animation-delay: 0.3s; }
        .animated-block:nth-child(3) { animation-delay: 0.5s; }
        .animated-block:nth-child(4) { animation-delay: 0.6s; }
        .animated-block:nth-child(5) { animation-delay: 0.7s; }
        .animated-block:nth-child(6) { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}