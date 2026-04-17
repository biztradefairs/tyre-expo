// app/advertising-details/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdvertisingDetailsPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

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

  const benefits = [
    {
      title: "Reach Your Target Audience",
      description: "Communicate directly with industry specialists and decision-makers.",
      icon: "/icons/target.png"
    },
    {
      title: "Increase Stand Traffic",
      description: "Drive more visitors to your booth and create meaningful connections.",
      icon: "/icons/traffic.png"
    },
    {
      title: "Gain a Competitive Edge",
      description: "Stand out among exhibitors and position your brand as an industry leader.",
      icon: "/icons/edge.png"
    },
    {
      title: "Boost Brand Awareness",
      description: "Strengthen your company's image and market visibility.",
      icon: "/icons/brand.png"
    },
    {
      title: "Showcase Innovations",
      description: "Highlight new products and services to a highly relevant audience.",
      icon: "/icons/innovation.png"
    },
    {
      title: "Drive Sales & Business Growth",
      description: "Convert exhibition exposure into direct sales opportunities.",
      icon: "/icons/sales.png"
    }
  ];

  const sponsorshipTabs = [
    {
      title: "Advertising Options",
      description: "Enhance brand awareness and maximize visitor engagement by leveraging a range of advertising services designed to increase your company's visibility and commercial success.",
      buttonText: "Download Marketing Manual",
      buttonLink: "/sponsorship-enquiry",
      image: "/images/advertising.jpg"
    },
    {
      title: "Affiliate Sponsorship Packages",
      description: "Choose from a variety of sponsorship packages tailored to meet your marketing objectives, or request a customized package that aligns with your brand strategy.",
      buttonText: "Enquire Now",
      buttonLink: "/sponsorship-enquiry",
      image: "/images/sponsorship.jpg"
    },
    {
      title: "Advertising Surfaces at BITEC",
      description: "Secure prime advertising locations both indoors and outdoors at the ITS Tyre Expo exhibition site to ensure maximum exposure for your brand.",
      buttonText: "Enquire Now",
      buttonLink: "/sponsorship-enquiry",
      image: "/images/advertising-surfaces.jpg"
    },
    {
      title: "New Product Announcements",
      description: "Take advantage of free marketing support and exclusive promotional packages to introduce and highlight your latest products effectively.",
      buttonText: "Enquire Now",
      buttonLink: "/sponsorship-enquiry",
      image: "/images/product-announcement.jpg"
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
        {/* Hero Section */}
        <article className="container mx-auto space-y-5 px-4 py-20">
          <h1 className="text-center font-bebas text-6xl font-bold text-black md:text-7xl lg:text-8xl">Maximize Your Brand Impact at ITS Tyre Expo 2026</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your company's presence and visibility at ITS Tyre Expo 2026 with exclusive advertising and sponsorship opportunities. Whether before, during, or after the exhibition, these opportunities provide a powerful platform to amplify your brand and engage with key industry professionals.
          </p>
        </article>

        {/* Benefits Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="grid gap-5">
                <h2 className="font-bebas text-5xl text-black md:text-6xl">By leveraging these promotional options, you can:</h2>
                <p className="text-lg text-gray-600">Please review the requirements carefully to ensure timely submission.</p>
              </div>
              <div className="my-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col gap-5">
                    <div className="flex-center h-20 w-20 rounded-full bg-orange-50">
                      <div className="h-10 w-10 rounded-full bg-orange-200"></div>
                    </div>
                    <h3 className="font-bebas text-2xl text-black">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advertising & Sponsorship Options Section */}
        <div className="animated-block mt-10">
          <div className="animated-block-target">
            <div className="container mx-auto px-4 py-10">
              <div className="flex-between mb-10 flex-wrap items-end gap-5 border-b border-gray-300 pb-10">
                <div>
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Advertising & Sponsorship Options</h3>
                </div>
              </div>

              <div className="space-y-10">
                {sponsorshipTabs.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 items-center gap-5 xl:grid-cols-7">
                    <div className="h-32 w-32 bg-gray-300 xl:col-span-2"></div>
                    <h5 className="text-2xl font-bold text-black xl:col-span-2">{item.title}</h5>
                    <p className="text-gray-600 xl:col-span-2">{item.description}</p>
                    <div className="grid xl:place-content-center">
                      <Link href={item.buttonLink}>
                        <button className="flex-center aspect-square rounded-full bg-orange-600 p-3 text-white transition-all hover:bg-black">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="animated-block mt-10">
          <div className="animated-block-target">
            <div className="bg-orange-50 py-20">
              <div className="container relative mx-auto px-4">
                <div className="mb-10">
                  <h4 className="font-bebas text-5xl text-black md:text-6xl">Partners and Sponsors</h4>
                </div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {partners.map((partner, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="overflow-hidden rounded-lg bg-white px-6 py-4 shadow-lg">
                        <div className="h-20 w-32 bg-gray-200"></div>
                      </div>
                      <small className="mt-3 text-center text-sm text-gray-600">{partner}</small>
                    </div>
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