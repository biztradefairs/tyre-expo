// app/articles/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock Data (Replace with actual data fetching from CMS)
const articlesData = [
  {
    id: 220,
    title:
      "The share of standardized parts in the equipment of NPO Akonit today averages 47%.",
    slug: "the-share-of-standardized-parts-in-the-equipment-of-npo-akonit-today-averages-47",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/20250218260_61bf798bb7.webp",
    publishedDate: "2026-03-27T06:15:00.000Z",
  },
  {
    id: 217,
    title:
      "One month until MiningWorld Russia 2026 — get your ticket with promo code NEWS",
    slug: "one-month-until-mining-world-russia-2026-get-your-ticket-with-promo-code-news",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/mnng25_2126_ddf2e61fe5.webp",
    publishedDate: "2026-03-23T08:00:00.000Z",
  },
  {
    id: 218,
    title:
      "Complex Raw Materials Economics: Russia is Reviving Hydroxamate Production",
    slug: "complex-raw-materials-economics-russia-is-reviving-hydroxamate-production",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/photo_2026_03_13_10_14_58_6241b6097b.webp",
    publishedDate: "2026-03-19T07:15:00.000Z",
  },
  {
    id: 219,
    title:
      "The Russian Ministry of Industry and Trade supports the MiningWorld Russia 2026 exhibition.",
    slug: "the-russian-ministry-of-industry-and-trade-supports-the-mining-world-russia-2026-exhibition",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/hd_0v0a9460_874ebf2c28.webp",
    publishedDate: "2026-03-18T08:00:00.000Z",
  },
  {
    id: 214,
    title:
      "12 product groups at MiningWorld Russia 2026 – all the equipment for the mining industry at one exhibition",
    slug: "12-product-groups-at-mining-world-russia-2026-all-the-equipment-for-the-mining-industry-at-one-exhibition",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/mnng25_1077_1_84e0fb312f.webp",
    publishedDate: "2026-03-17T07:15:00.000Z",
  },
  {
    id: 215,
    title:
      'Large-scale equipment at the "Heavy Equipment Territory" – visit the unique exhibition',
    slug: "large-scale-equipment-at-the-heavy-equipment-territory-visit-the-unique-exhibition",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/mnng25_1273_1ebc43e900.webp",
    publishedDate: "2026-03-16T07:15:00.000Z",
  },
  {
    id: 216,
    title:
      'Invitation to participate in the study "Mining Industry of Russia: Investments in Digital Technologies 2026 and a Look into the Future"',
    slug: "invitation-to-participate-in-the-study-mining-industry-of-russia-investments-in-digital-technologies-2026-and-a-look-into-the-future",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/kept_logo_22052_9dfac2c206.webp",
    publishedDate: "2026-03-13T07:00:00.000Z",
  },
  {
    id: 203,
    title: "RIVS has developed specialized aeration units for flotation machines",
    slug: "rivs-has-developed-specialized-aeration-units-for-flotation-machines",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/Specz_aeraczionnye_uzly_1_9ffc14864d.webp",
    publishedDate: "2026-03-10T08:30:00.000Z",
  },
  {
    id: 204,
    title:
      'Representatives of mining and processing plants will speak at the conference "Tools for Improving the Efficiency of Mining Plants" at MiningWorld Russia 2026.',
    slug: "representatives-of-mining-and-processing-plants-will-speak-at-the-conference-tools-for-improving-the-efficiency-of-mining-plants-at-mining-world-russia-2026",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/MW_25_AMG_2718i_63acadda70.webp",
    publishedDate: "2026-03-06T03:30:00.000Z",
  },
  {
    id: 199,
    title: "Why you should attend MiningWorld Russia 2026",
    slug: "why-you-should-attend-mining-world-russia-2026",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/photo_1_main_1_f5b42c6a16.webp",
    publishedDate: "2026-02-27T08:45:00.000Z",
  },
  {
    id: 200,
    title:
      "Stable chemistry for a stable factory: 10 years of Flotent Chemicals Rus",
    slug: "stable-chemistry-for-a-stable-factory-10-years-of-flotent-chemicals-rus",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/mining_upd_1_image_f5d7d6fa89.webp",
    publishedDate: "2026-02-25T09:15:00.000Z",
  },
  {
    id: 201,
    title: "The list of participants for MiningWorld Russia 2026 has been published!",
    slug: "the-list-of-participants-for-mining-world-russia-2026-has-been-published",
    excerpt: "",
    image:
      "https://cdn.itegroupnews.com/5258413703168726476_9fb1c4d00c.webp",
    publishedDate: "2026-02-25T08:15:00.000Z",
  },
];

const ITEMS_PER_PAGE = 9;

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter articles based on search term
  const filteredArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page-spacing-wrapper">
      {/* Hero Section */}
      <article className="container mx-auto px-4 space-y-5 py-40 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold hero-element split-text-optimized text-black">
          Insights, Trends, and Industry Knowledge
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore a wealth of knowledge in our articles section, where we bring
          you in-depth analysis, the latest trends, and expert opinions from
          the heart of the mining industry.
        </p>
      </article>

      {/* Articles Grid Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container mx-auto px-4 py-16">
            {/* Search Bar */}
            <div className="mb-10 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Articles Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      alt={article.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={article.image}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(article.publishedDate)}
                    </p>
                    <h3 className="text-xl font-bold text-black line-clamp-3 group-hover:text-orange-500 transition-colors duration-300">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-gray-600 mt-2 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results Message */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">
                  No articles found matching your search.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? "bg-orange-500 text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}