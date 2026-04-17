// app/exhibitor-resource-center/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "@/components/home/PartnersSection";

export default function ExhibitorResourceCenterPage() {
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      title: "Find New Prospects",
      description: "It should be easy to read the company's direction and name. Important details that you want to communicate to potential clients should be obvious and easy to remember.",
      icon: "/icons/prospects.png"
    },
    {
      title: "Improve Existing Relationships",
      description: "You need a spacious recreational area, negotiation tables, an enclosed utility room where you will display your products, and interactive demo areas to engage visitors effectively.",
      icon: "/icons/partnership.png"
    },
    {
      title: "Conduct Meetings",
      description: "Your stand should have an ideal meeting area. You can separate one 'meeting room' from another or plan a couple of closed rooms where the exhibition atmosphere will not distract from the business conversation.",
      icon: "/icons/meeting.png"
    },
    {
      title: "Increase Brand Identity",
      description: "In this case, an interesting stand design solution, supported by a high-quality demonstration of the best products will help.",
      icon: "/icons/branding.png"
    },
    {
      title: "Competitor Research",
      description: "A small stand is enough, but it is worth placing it next to the business program sites to be in the thick of industry events.",
      icon: "/icons/research.png"
    },
    {
      title: "Showcase New Launches",
      description: "An interesting and bright design solution, perhaps navigation in the hall, will help. The invitation and presentation schedule should be large, informative, and located in the most visible place.",
      icon: "/icons/launch.png"
    }
  ];

  const standOptions = [
    {
      title: "Individual Construction",
      description: "Choosing an individual project stand is highly recommended as it allows for an effective presentation of your company, highlights your high status, emphasizes your unique style, and attracts more clients.",
      image: "/images/individual-stand.jpg"
    },
    {
      title: "Standard Shell Scheme",
      description: "Standard Shell Scheme is suitable for the construction of the exhibition area from 11 to 60 sq. m. The stand kit depends on the construction area. Standard Shell Scheme may be amended with standard decorative elements.",
      image: "/images/standard-shell.jpg"
    },
    {
      title: "Premium Shell Scheme",
      description: "Premium Shell Scheme is suitable for the construction of the exhibition area from 12 to 60 sq. m. You can choose the color of decorative elements, and order additional equipment and furniture. The height of structures from 3.5 m to 5 m will make the stands look more voluminous and spacious.",
      image: "/images/premium-shell.jpg"
    }
  ];

  const faqItems = [
    {
      question: "How to get your products/equipments to Bangkok on time?",
      answer: "ITS Tyre Expo partners with DMW EXPO to handle all freight handling requests from exhibitors. We recommend DMW EXPO for shipment of any products, stand equipment, marketing materials, machinery, and/or displays you plan to send for your stand.\n\nFor any enquiries, contact:\nMarina Filippova\nHead of Exhibition Department\nP: +66-2-123-4567\nE: marina.filippova@dmw-expo.com"
    },
    {
      question: "How can you spread the word about your ITS Tyre Expo participation?",
      answer: "Make the most of your time at the exhibition by leveraging ITS Tyre Expo's partnership and exclusive advertising opportunities to boost your impact and visibility."
    },
    {
      question: "How can exhibitors order technical services?",
      answer: "Exhibitors can conveniently order construction and technical services via the Technical Services Order Forms. Simply download the form, select the required services, sign, and send the scanned document to your technical manager. For any questions or assistance, please contact your technical manager using the details provided below."
    },
    {
      question: "How can you order suspended structures for ceiling installations?",
      answer: "For any enquiries regarding the ordering of suspended structures, please reach out to your technical manager using the contact details provided below."
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
        {/* Explore Opportunities Section */}
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="container mx-auto grid items-center gap-10 overflow-hidden px-4 lg:grid-cols-5 lg:gap-20">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-5">
                  <h2 className="font-bebas text-5xl text-black md:text-6xl">Explore Opportunities</h2>
                  <p className="text-lg text-gray-700">
                    As a participant at ITS Tyre Expo, our team is dedicated to providing you with a variety of participation opportunities to make the most of your exhibition experience. From pre-event to post, we have created guides to help with the decision-making process and onboarding in a seamless manner.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="https://cdn-ite.prismetic.com/02_Manual_Forms_Mining_World_Russia_2026_EUR_0ddf1ecf29.pdf" target="_blank">
                    <button className="flex-center global-transition group w-fit gap-2 overflow-hidden border-2 border-orange-600 px-10 py-3 font-bebas text-2xl text-orange-600 transition-all hover:bg-black hover:text-white">Download Guide</button>
                  </Link>
                </div>
              </div>
              <div className="order-first h-full lg:col-span-2">
                <div className="h-80 w-full bg-gray-300 object-cover lg:h-96"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stands for Business Objectives Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="grid gap-5">
                <h2 className="font-bebas text-5xl text-black md:text-6xl">Stands for your Business Objectives</h2>
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

        {/* Explore Stand Options Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="container mx-auto px-4">
              <div className="mb-5 flex justify-between lg:items-end">
                <div className="lg:basis-2/3">
                  <h3 className="font-bebas text-5xl text-black md:text-6xl">Explore Our Stand Options</h3>
                  <p className="mt-3 text-lg text-gray-600">Selection Made Simple</p>
                </div>
              </div>
              <div className="relative mt-10 w-full">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {standOptions.map((option, idx) => (
                    <div key={idx} className="group flex flex-col overflow-hidden rounded-lg bg-orange-50 transition-shadow duration-300 ease-in-out hover:shadow-lg">
                      <div className="relative h-60 bg-gray-300"></div>
                      <div className="flex flex-col gap-4 p-5">
                        <h4 className="font-bebas text-2xl text-black">{option.title}</h4>
                        <p className="text-gray-600 line-clamp-3">{option.description}</p>
                        <Link href="/exhibiting-enquiry">
                          <button className="mt-2 w-fit bg-orange-600 px-6 py-2 font-bebas text-xl text-white transition-all hover:bg-black">Enquire Now</button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition Guide FAQ Section */}
        <div className="animated-block mt-20">
          <div className="animated-block-target">
            <div className="border-b border-orange-200 bg-orange-50 py-20">
              <div className="container mx-auto px-4">
                <h2 className="mb-10 border-b border-orange-300 pb-5 font-bebas text-5xl text-black md:text-6xl">Exhibition Guide</h2>
                <div className="space-y-4">
                  {faqItems.map((item, idx) => (
                    <div key={idx} className="border-b border-orange-200 pb-4">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="flex w-full items-center justify-between py-4 text-left transition-all group"
                      >
                        <h4 className="text-xl font-semibold text-black md:text-2xl">{item.question}</h4>
                        <div className="relative ml-auto">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`size-5 shrink-0 transition-transform duration-200 ${openFaqIndex === idx ? "invisible" : ""}`}
                          >
                            <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                          </svg>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`absolute top-0 size-5 shrink-0 transition-transform duration-200 ${openFaqIndex === idx ? "visible" : "invisible"}`}
                          >
                            <path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </button>
                      {openFaqIndex === idx && (
                        <div className="mt-2 pb-4 text-gray-700 whitespace-pre-line">
                          {item.answer}
                        </div>
                      )}
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