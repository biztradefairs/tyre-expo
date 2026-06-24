'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../common/MobileMenu';
import Navbar from '../common/Navbar';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Desktop — Navbar handles ALL scroll logic internally */}
      <div className="hidden lg:block fixed top-0 left-0 w-full z-100">
        <Navbar />
      </div>

      {/* ✅ Mobile Header — fixed, simple, no scroll logic needed */}
      <div className="lg:hidden bg-[#1e1e1e] px-4 py-3 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/ITS_logo_white.png"
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
            <Menu size={24} className="text-white" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 mt-3">
          <Link
            href="/login/"
            className="bg-[#2A2A2A] text-white px-3 py-1.5 text-xs border border-white/20
            hover:bg-[#F08400] hover:text-black transition-all duration-300"
          >
            Login
          </Link>
        </div>

        <div className="flex gap-3 mt-3">
          <Link
            href="/exhibiting-enquiry/"
            className="flex-1 bg-[#F08400] text-white text-center px-3 py-2 text-sm font-bold uppercase tracking-wide hover:bg-orange-600 transition"
          >
            Exhibit
          </Link>
          <Link
            href="/visitor-registration/"
            className="flex-1 bg-[#F08400] text-white text-center px-3 py-2 text-sm font-bold uppercase tracking-wide hover:bg-orange-600 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile spacer */}
      <div className="lg:hidden h-[130px]" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        timeLeft={{ days: 0, hours: 0, minutes: 0 }}
      />
    </>
  );
}