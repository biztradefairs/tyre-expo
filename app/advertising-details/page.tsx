// app/advertising-details/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import PartnersSection from "@/components/home/PartnersSection";
import BackToTop from "@/components/layout/BackToTop";

export default function AdvertisingDetailsPage() {
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

  const benefits = [
    {
      title: "Reach Your Target Audience",
      description: "Communicate directly with industry specialists and decision-makers.",
      icon: "https://cdn.itegroupnews.com/4_7579e3b4df.png",
      fallbackIcon: "🎯"
    },
    {
      title: "Increase Stand Traffic",
      description: "Drive more visitors to your booth and create meaningful connections.",
      icon: "https://cdn.itegroupnews.com/5_e69e2d6c8b.png",
      fallbackIcon: "📊"
    },
    {
      title: "Gain a Competitive Edge",
      description: "Stand out among exhibitors and position your brand as an industry leader.",
      icon: "https://cdn.itegroupnews.com/6_1234567890.png",
      fallbackIcon: "⚡"
    },
    {
      title: "Boost Brand Awareness",
      description: "Strengthen your company's image and market visibility.",
      icon: "https://cdn.itegroupnews.com/7_93579318f2.png",
      fallbackIcon: "🏷️"
    },
    {
      title: "Showcase Innovations",
      description: "Highlight new products and services to a highly relevant audience.",
      icon: "https://cdn.itegroupnews.com/8_fa2729f754.png",
      fallbackIcon: "💡"
    },
    {
      title: "Drive Sales & Business Growth",
      description: "Convert exhibition exposure into direct sales opportunities.",
      icon: "https://cdn.itegroupnews.com/9_1c550dbab6.png",
      fallbackIcon: "📈"
    }
  ];

  const sponsorshipTabs = [
    {
      title: "Advertising Options",
      description: "Enhance brand awareness and maximize visitor engagement by leveraging a range of advertising services designed to increase your company's visibility and commercial success.",
      buttonText: "Download Marketing Manual",
      buttonLink: "/sponsorship-enquiry",
      image: "https://cdn.itegroupnews.com/1_9622597897.png",
      fallbackIcon: "📢"
    },
    {
      title: "Affiliate Sponsorship Packages",
      description: "Choose from a variety of sponsorship packages tailored to meet your marketing objectives, or request a customized package that aligns with your brand strategy.",
      buttonText: "Enquire Now",
      buttonLink: "/sponsorship-enquiry",
      image: "https://cdn.itegroupnews.com/2_af03062734.png",
      fallbackIcon: "🤝"
    },
    {
      title: "Advertising Surfaces at BITEC",
      description: "Secure prime advertising locations both indoors and outdoors at the ITS Tyre Expo exhibition site to ensure maximum exposure for your brand.",
      buttonText: "Enquire Now",
      buttonLink: "/sponsorship-enquiry",
      image: "https://cdn.itegroupnews.com/3_065bb10e11.png",
      fallbackIcon: "📍"
    },
    {
      title: "New Product Announcements",
      description: "Take advantage of free marketing support and exclusive promotional packages to introduce and highlight your latest products effectively.",
      buttonText: "Enquire Now",
      buttonLink: "/sponsorship-enquiry",
      image: "https://cdn.itegroupnews.com/4_b530561fa3.png",
      fallbackIcon: "🎉"
    }
  ];

  const ImageWithFallback = ({
    src,
    alt,
    fallbackIcon,
    className = "",
    objectFit = "contain"
  }: {
    src: string;
    alt: string;
    fallbackIcon?: string;
    className?: string;
    objectFit?: "cover" | "contain";
  }) => {
    const [error, setError] = useState(false);

    if (error || !src) {
      return (
        <div className={`flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 ${className}`}>
          <span className="text-3xl sm:text-4xl">{fallbackIcon || "🏨"}</span>
        </div>
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`}
        onError={() => setError(true)}
      />
    );
  };

  return (
    <div className="intro-animation">
      <div className="page-spacing-wrapper">
        <div className="pt-[100px] sm:pt-[120px] lg:pt-[140px]">

          {/* Header Section */}
          <Container>
            <div className="animated-block">
              <div className="animated-block-target">
                <div className="text-center lg:text-left py-8 sm:py-10 lg:py-12">
                  <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                    Advertising & <span className="text-[#F08400]">Sponsorship</span>
                  </h1>
                  <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-gray-700 max-w-3xl">
                    Maximize your brand exposure and reach key decision-makers through our comprehensive 
                    advertising and sponsorship opportunities at ITS Tyre Expo 2026.
                  </p>
                </div>
              </div>
            </div>
          </Container>

          {/* Benefits Section */}
          <Container>
            <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
              <div className="animated-block-target">
                <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                  By leveraging these promotional options, you can:
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">Please review the requirements carefully to ensure timely submission.</p>
                
                <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="relative flex flex-col overflow-hidden rounded-lg bg-[#FCF8F3] p-5 sm:p-6 shadow-md transition-all hover:shadow-lg">
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden">
                        <ImageWithFallback
                          src={benefit.icon}
                          alt={benefit.title}
                          fallbackIcon={benefit.fallbackIcon}
                          objectFit="contain"
                          className="h-full w-full bg-transparent from-transparent to-transparent"
                        />
                      </div>
                      <h3 className="mt-4 sm:mt-5 font-bebas text-xl sm:text-2xl text-black">{benefit.title}</h3>
                      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>

          {/* Advertising & Sponsorship Options Section */}
          <Container>
            <div className="animated-block mt-12 sm:mt-16 lg:mt-20">
              <div className="animated-block-target">
                <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
                  Advertising & <span className="text-[#F08400]">Sponsorship Options</span>
                </h3>
                <div className="mt-2 h-px w-full bg-gray-200"></div>

                <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
                  {sponsorshipTabs.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 items-center rounded-lg bg-[#FCF8F3] p-4 sm:p-5 lg:p-6 shadow-md transition-all hover:shadow-lg lg:grid-cols-12">
                      {/* Image */}
                      <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center overflow-hidden rounded-lg bg-white mx-auto lg:mx-0 lg:col-span-2">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          fallbackIcon={item.fallbackIcon}
                          objectFit="contain"
                          className="h-full w-full"
                        />
                      </div>
                      
                      {/* Title */}
                      <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-black text-center lg:text-left lg:col-span-3">
                        {item.title}
                      </h5>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 text-center lg:text-left lg:col-span-5">
                        {item.description}
                      </p>
                      
                      {/* Button */}
                      <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <Link href={item.buttonLink}>
                          <button className="w-fit bg-[#F08400] px-5 sm:px-6 py-1.5 sm:py-2 font-bebas text-lg sm:text-xl text-white transition-all hover:bg-black">
                            {item.buttonText}
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