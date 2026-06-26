'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '../ui/container';
import Link from 'next/link';

const slides = [
  { id: 1, image: 'https://rubber-tyre.com.vn/wp-content/uploads/2025/07/CTHE0129-min-scaled.webp' },
  { id: 2, image: 'https://global.divhunt.com/3ed74ea1f32f6d8d53c3acfec927b4bc_113152.webp' },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative flex h-screen items-end justify-center overflow-hidden text-white w-full">
      {/* Gradient overlay — strong at bottom for text legibility */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Slideshow background */}
      <div className="absolute inset-0 z-[-2] size-full bg-black">
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {!imageErrors[slide.id] ? (
                <Image
                  src={slide.image}
                  alt="India Tyre Show"
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onError={() => handleImageError(slide.id)}
                  unoptimized
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-800 to-black" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom content */}
      <div className="w-full pb-10 md:pb-14 relative z-10">
        <Container>
          {/* HEADING — single line, full width spanning */}
          <h1 className="font-bebas uppercase leading-none tracking-tight whitespace-nowrap text-[10vw]">
            <span className="text-white">MININGWORLD </span>
            <span className="text-[#F08400]">2027</span>
          </h1>

          {/* BOTTOM ROW — description left, button right */}
          <div className="mt-4 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            {/* Description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 text-[10vw] leading-relaxed max-w-3xl">
              Celebrating 30 Years of Driving Mining Innovation and Business Growth. 
              MiningWorld Russia unites equipment manufacturers, technology pioneers, 
              and buyers from across the CIS to accelerate the future of mining and mineral processing.
            </p>

            {/* Exhibit button */}
            <div className="flex-shrink-0">
              <Link
                href="/exhibiting-enquiry/"
                className="inline-block bg-[#F08400] hover:bg-[#d67300] text-white px-10 py-4 text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap rounded-sm shadow-lg hover:scale-105"
              >
                Exhibit
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}