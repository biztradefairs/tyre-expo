// app/page.tsx
'use client';

import { useState, useEffect } from 'react';

import BackToTop from '@/components/layout/BackToTop';
import LoadingSpinner from '@/components/ui/loadingSpinner';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CountriesSection from '@/components/home/CountriesSection';
import OutcomesSection from '@/components/home/OutcomesSection';
import WhyExhibitSection from '@/components/home/WhyExhibitSection';
import SectorsSection from '@/components/home/SectorsSection';
import BrochureSection from '@/components/home/BrochureSection';
import ArticlesSection from '@/components/home/ArticlesSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import PartnersSection from '@/components/home/PartnersSection';
import { getLatestArticles } from '@/app/articles/data'; // Import from your data.ts


// Sample data - replace with actual data from API
const countriesData = [
  { name: 'India', flag: 'https://flags.restcountries.com/v5/w320/in.png' },
  { name: 'Germany', flag: 'https://flags.restcountries.com/v5/w320/de.png' },
  { name: 'China', flag: 'https://flags.restcountries.com/v5/w320/cn.png' },
  { name: 'Japan', flag: 'https://flags.restcountries.com/v5/w320/jp.png' },
  { name: 'USA', flag: 'https://flags.restcountries.com/v5/w320/us.png' },
  { name: 'South Korea', flag: 'https://flags.restcountries.com/v5/w320/kr.png' },
  { name: 'Thailand', flag: 'https://flags.restcountries.com/v5/w320/th.png' },
  { name: 'Vietnam', flag: 'https://flags.restcountries.com/v5/w320/vn.png' },
];



const outcomesData = [
  {
    title: '70%',
    content: 'of exhibitors engaged with and sold to existing customers, reinforcing long-term business relationships.',
    image: 'https://cdn.itegroupnews.com/M_Wr_106471c763.png',
  },
  {
    title: '62%',
    content: 'of exhibitors strengthened brand visibility and market positioning among key industry players',
    image: 'https://cdn.itegroupnews.com/2_edefccdfd0.png',
  },
  {
    title: '61%',
    content: 'of exhibitors acquired new leads and expanded their client base, unlocking fresh opportunities in the global market.',
    image: 'https://cdn.itegroupnews.com/3_5ab1f32ff9.png',
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  
  // ✅ Use your existing data.ts - get the 3 latest articles
  const articlesData = getLatestArticles(3);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* <Header /> */}
      <main className="intro-animation">
        <HeroSection />
        <AboutSection />
        <CountriesSection countries={countriesData} />
        <OutcomesSection outcomes={outcomesData} />
        <WhyExhibitSection />
        <SectorsSection />
        <BrochureSection />
        <ArticlesSection articles={articlesData} />
        <NewsletterSection />
        <PartnersSection />
      </main>
      {/* <Footer /> */}
      <BackToTop />
    </>
  );
}