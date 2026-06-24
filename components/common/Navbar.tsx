'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const navItems = [
  {
    title: 'About',
    links: [
      { text: 'About India Tyre Show', href: '/about/' },
      { text: 'About ITE', href: '/about-ite/' },
      { text: 'Partners & Sponsors', href: '/partners-and-sponsors/' },
    ],
  },
  {
    title: 'Exhibit',
    links: [
      { text: 'Why Exhibit', href: '/why-exhibit/' },
      { text: 'Event Sectors', href: '/sectors/' },
      { text: 'Plan Your Travel', href: '/plan-your-travel/' },
      { text: 'Exhibitor Resource Center', href: '/exhibitor-resource-center/' },
      { text: 'Become an Exhibitor', href: '/exhibiting-enquiry/' },
      { text: 'Advertising Opportunities', href: '/advertising-details/' },
      { text: 'View Exhibitor List 2026', href: '/exhibition-directory/' },
    ],
  },
  {
    title: 'Attend',
    links: [
      { text: 'Why Visit', href: '/why-visit/' },
      { text: 'Event Sectors', href: '/sectors/' },
      { text: 'Conference Programme', href: '/conference-programme/' },
      { text: 'Partners and Sponsors', href: '/partners-and-sponsors/' },
    ],
  },
  {
    title: 'Insights',
    links: [
      { text: 'Articles and Latest News', href: '/articles/' },
      { text: 'Why India Report', href: '/insights/' },
      { text: 'Event Brochure', href: '/event-brochure/' },
      { text: 'Post-Show Report', href: '/post-show-report/' },
      { text: 'Media Gallery', href: '/media-gallery/' },
      { text: 'Conference Programme', href: '/conference-programme/' },
    ],
  },
  { title: 'Contact us', href: '/contact-us/', links: [] },
  { title: 'Conference', href: '/conference/', links: [] },
];

const innerPadding = 'px-[calc(1rem+1cm)] sm:px-[calc(1.5rem+1cm)] lg:px-[calc(2rem+1cm)] xl:px-[calc(3rem+1cm)]';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > lastScrollY && currentY > 50) {
        setScrollDirection('down');
      } else if (currentY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDirection, scrollY };
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollDirection, scrollY } = useScrollDirection();

  const isScrolled = scrollY > 80;
  const showTopBar = !isScrolled || scrollDirection === 'up';
  const showLogo = isScrolled && scrollDirection === 'down';

  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-04-22T09:00:00').getTime();
    const diff = targetDate - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <div className="fixed top-0 w-full max-w-[1600px] 2xl:max-w-[1800px]  left-0 right-0 z-50  bg-[#000000] ${innerPadding} text-white">

        {/* ══════════════════════════════════════
            TOP BAR — timer lives here now (top-right)
            hides on scroll down, reappears on scroll up
           ══════════════════════════════════════ */}
        <div
          
          style={{
            maxHeight: showTopBar ? '140px' : '0px',
            opacity: showTopBar ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.45s  cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s ease',
          }}
        >
          {/* ── Ticker strip (brown bar) with timer ── */}
          <div className="bg-[#432500] w-full 100vw ${innerPadding} ">
            <div className={`w-full mx-auto ${innerPadding} flex items-center justify-end py-1.5`}>
              <div className="flex items-center gap-4 text-sm font-medium text-white">
                <span>
                  <strong className="text-base">{String(timeLeft.days).padStart(2, '0')}</strong>{' '}
                  <span className="text-gray-300">Days</span>
                </span>
                <span>
                  <strong className="text-base">{String(timeLeft.hours).padStart(2, '0')}</strong>{' '}
                  <span className="text-gray-300">Hours</span>
                </span>
                <span>
                  <strong className="text-base">{String(timeLeft.minutes).padStart(2, '0')}</strong>{' '}
                  <span className="text-gray-300">Mins</span>
                </span>
              </div>
            </div>
          </div>

          {/* ── Logo + date + Exhibit/Register buttons ── */}
          <div className={`w-full mx-16 ${innerPadding}`}>
            <div className="flex items-center justify-between py-3">

              {/* Logo + Title + Date */}
              <div className="flex items-center gap-4">
                <Link href="/">
                  <img
                    src="/ITS_logo_white.png"
                    alt="India Tyre Show"
                    className="h-12 w-auto cursor-pointer"
                  />
                </Link>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold tracking-tight">India Tyre Show</h1>
                  <p className="text-xs text-gray-400">22–24 April 2026 &bull; Mumbai, India</p>
                </div>
              </div>

              {/* Exhibit + Register buttons */}
              <div className="hidden sm:flex gap-3">
                <Link
                  href="/exhibiting-enquiry/"
                  className="bg-[#ff8c00] text-white text-center px-5 py-2 text-sm font-bold uppercase tracking-wide hover:bg-[#cc7000] transition whitespace-nowrap"
                >
                  Exhibit
                </Link>
                <Link
                  href="/visitor-registration/"
                  className="bg-[#ff8c00] text-white text-center px-5 py-2 text-sm font-bold uppercase tracking-wide hover:bg-[#cc7000] transition whitespace-nowrap"
                >
                  Register
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            NAV ROW — always visible
            Logo icon slides in when scrolled past 80px
           ══════════════════════════════════════ */}
        <div className="border-t px-[1.5cm] border-white/10">
          <div className={`w-full mx-auto ${innerPadding}`}>
            <div className="flex items-center py-2 min-h-[48px]">

              {/* Logo icon — slides in on scroll down */}
              <div
                style={{
                  width: showLogo ? '44px' : '0px',
                  opacity: showLogo ? 1 : 0,
                  marginRight: showLogo ? '14px' : '0px',
                  flexShrink: 0,
                  overflow: 'hidden',
                  transition: 'width 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s ease, margin-right 0.45s ease',
                }}
              >
                <Link href="/">
                  <img
                    src="/ITS_logo_white.png"
                    alt="India Tyre Show"
                    style={{ height: '34px', width: 'auto', display: 'block', minWidth: '36px' }}
                  />
                </Link>
              </div>

              {/* Nav links */}
              <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1">
                {navItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => item.links && item.links.length > 0 && handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.links && item.links.length > 0 ? (
                      <>
                        <button className="flex items-center gap-1 text-sm xl:text-base hover:text-orange-500 transition-colors whitespace-nowrap py-2">
                          {item.title}
                          <ChevronDown
                            className={`h-3 w-3 transition-transform duration-200 ${
                              openDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openDropdown === item.title && (
                          <div
                            className="absolute left-0 top-full z-50 w-56 rounded-md bg-[#1e1e1e] shadow-lg border border-gray-700"
                            onMouseEnter={() => handleMouseEnter(item.title)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="py-2">
                              {item.links.map((link) => (
                                <Link
                                  key={link.text}
                                  href={link.href}
                                  className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white transition-colors"
                                >
                                  {link.text}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="text-sm xl:text-base hover:text-orange-500 transition-colors whitespace-nowrap block py-2"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Compact login — slides in when scrolled */}
              <div
                style={{
                  maxWidth: isScrolled ? '100px' : '0px',
                  opacity: showLogo ? 1 : 0,
                  overflow: 'hidden',
                  marginLeft: 'auto',
                  transition: 'max-width 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s ease',
                }}
              >
                <Link
                  href="/login/"
                  className="bg-[#ff8c00] font-extrabold uppercase tracking-tight text-white px-4 py-2 text-sm 
                    hover:bg-black hover:scale-105 transition-all duration-300 whitespace-nowrap inline-block"
                >
                  Login
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Spacer — slightly taller now to account for the ticker strip */}
      <div className="h-[155px] lg:h-[172px]" />
    </>
  );
}