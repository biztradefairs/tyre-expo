'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import MobileMenu from '../common/MobileMenu';
import Navbar from '../common/Navbar';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <>
      <header className="w-full text-white">

        {/* Main Header - Desktop */}
        <div
          className={`hidden lg:block transition-all duration-300 ${
            isScrolled
              ? '-translate-y-full opacity-0'
              : 'translate-y-0 opacity-100 bg-[#1e1e1e]/95 backdrop-blur-md'
          }`}
        >
          <div className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 lg:py-4">

            {/* Left Section */}
            <div className="flex items-center gap-4 xl:gap-6">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/ITS_logo_white.png"
                  alt="India Tyre Show"
                  width={130}
                  height={70}
                  className="object-contain w-[100px] xl:w-[130px] h-auto"
                />
              </Link>

              {/* Divider */}
              <div className="h-8 xl:h-10 w-px bg-white/30 hidden sm:block"></div>

              {/* Event Info */}
              <div className="hidden sm:flex flex-col text-sm xl:text-[20px] leading-tight">
                <span className="font-semibold">22–24 April 2026</span>
                <span className="text-white/70 text-xs xl:text-base">Crocus Expo, Pavilion 1</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 xl:gap-6">
              {/* Countdown */}


              {/* Buttons */}
              <div className="flex items-center gap-3 xl:gap-4">
                <Link
                  href="/exhibiting-enquiry/"
                  className="bg-[#F08400] px-5 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base font-bold uppercase tracking-wide shadow-md 
                  hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Exhibit
                </Link>

                <Link
                  href="/visitor-registration/"
                  className="bg-[#F08400] px-5 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base font-bold uppercase tracking-wide shadow-md 
                  hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div
          className={`hidden lg:block transition-all duration-300 ${
            isScrolled
              ? 'fixed top-0 left-0 w-full z-50 bg-[#1e1e1e] shadow-lg'
              : 'relative'
          }`}
        >
          <Navbar />
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden bg-black px-4 py-3 fixed top-0 left-0 w-full z-50 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/ITS_logo final.png"
                alt="India Tyre Show"
                width={120}
                height={35}
                className="object-contain w-[100px] sm:w-[120px] h-auto"
              />
            </Link>

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 hover:bg-white/10 rounded-lg transition"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Timer and Action Buttons */}
          <div className="flex items-center justify-between gap-3 mt-3">

            <Link
              href="/login/"
              className="bg-[#2A2A2A] text-white px-3 py-1.5 text-xs rounded border border-white/20 
              hover:bg-[#F08400] hover:text-black transition-all duration-300"
            >
              Login
            </Link>
          </div>

          <div className="flex gap-3 mt-3">
            <Link
              href="/exhibiting-enquiry/"
              className="flex-1 bg-[#F08400] text-white text-center px-3 py-2 text-sm font-bold uppercase tracking-wide rounded hover:bg-orange-600 transition"
            >
              Exhibit
            </Link>
            <Link
              href="/visitor-registration/"
              className="flex-1 bg-[#F08400] text-white text-center px-3 py-2 text-sm font-bold uppercase tracking-wide rounded hover:bg-orange-600 transition"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Spacer for fixed mobile header */}
        <div className="lg:hidden h-[130px]"></div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)} 
        timeLeft={{
          days: 0,
          hours: 0,
          minutes: 0
        }}
      />
    </>
  );
}