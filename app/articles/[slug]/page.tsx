// app/articles/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock data - In production, fetch this from your CMS/API
// This simulates the article data from the HTML
const getArticleData = (slug: string) => {
  // This mapping would come from your CMS in production
  const articles: Record<string, any> = {
    "the-share-of-standardized-parts-in-the-equipment-of-npo-akonit-today-averages-47": {
      id: 220,
      title:
        "The share of standardized parts in the equipment of NPO Akonit today averages 47%.",
      slug: "the-share-of-standardized-parts-in-the-equipment-of-npo-akonit-today-averages-47",
      excerpt: "",
      image:
        "https://cdn.itegroupnews.com/20250218260_61bf798bb7.webp",
      publishedDate: "2026-03-27T06:15:00.000Z",
      content: `
        <h2><strong>A year ago, it did not exceed 20%. More information will be available at the company's stand at the MiningWorld Russia 2026 exhibition.</strong></h2>
        <p><br><img src="https://cdn.itegroupnews.com/6_4ae41fb0f9.webp" alt="6.webp"></p>
        <p>&nbsp;</p>
        <p>For chemical industry enterprises (potash fertilizer production), when manufacturing conveyor systems, the percentage of standardized parts in the equipment today already reaches an average of over 70%.</p>
        <p>&nbsp;</p>
        <p>These are the results of the standardization project for 2025. Last February, at an event held by the Akonit Closed Club in Tatarstan, the results of the standardization project launch were presented, and guests were shown a working prototype of the conveyor, consisting entirely of standardized components. "Generation A2" is the company's name for this line of standardized equipment. In April, this model was on display at the MiningWorld Russia 2025 exhibition.</p>
        <p>&nbsp;</p>
        <p>Much has changed over the past year: the percentage of standardized parts in designed and manufactured conveyor equipment has increased, and a line of "Generation A3" conveyors for metallurgical plants has emerged, taking into account the specific needs of metallurgists.</p>
        <p>&nbsp;</p>
        <p>"We're seeing that customers are increasingly seeing the benefits of standardization: reduced equipment delivery times, improved reliability and quality through the use of proven parts and repeatability of components and technical solutions. The share of standardized parts in equipment orders is constantly increasing. This demonstrates that we've chosen the right path: focusing on import prevention and building our own technical capabilities in technologies," comments Dmitry Viktorov, Director of NPO Akonit, on the project's results.</p>
        <p>&nbsp;</p>
        <p><img src="https://cdn.itegroupnews.com/10_9c8b796685.webp" alt="10.webp" width="900" height="1200"></p>
        <p>&nbsp;</p>
        <h3><strong>Visit the company's stand at MiningWorld Russia 2026</strong></h3>
        <h3><br><strong>Get a free ticket now with promo code NEWS and attend Russia's premier mining event without unnecessary costs or queues.</strong></h3>
        <p><br><a href="https://miningworld.ru/ru/visit/visitor-registration/?utm_source=https://miningworld.ru/ru/media/news/&amp;utm_medium=Media&amp;utm_campaign=cross-promo&amp;promo=NEWS"><strong>GET A TICKET</strong></a></p>
      `,
    },
  };
  return articles[slug] || null;
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, replace with actual API call:
    // fetch(`/api/articles/${params.slug}`).then(res => res.json()).then(data => {...})
    const data = getArticleData(params.slug);
    setArticle(data);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="flex size-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-500 text-4xl">
          <div className="flex size-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-orange-300 text-2xl"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/articles"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="page-spacing-wrapper">
      <article className="container mx-auto px-4 space-y-5 py-40 max-w-4xl">
        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-element split-text-optimized text-black">
          {article.title}
        </h1>

        {/* Article Image */}
        <div className="hero-element">
          <Image
            alt={article.title}
            width={1000}
            height={600}
            className="size-full max-w-[1000px] object-cover rounded-lg"
            src={article.image}
          />
        </div>

        {/* Article Meta Info */}
        <div className="text-gray-500 text-sm">
          Published on {formatDate(article.publishedDate)}
        </div>

        {/* Article Content */}
        <div
          className="cms-rt mt-10 prose prose-lg max-w-none
            prose-headings:text-black prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-lg prose-img:w-full
            prose-strong:text-black
            prose-ul:list-disc prose-ul:pl-5
            prose-ol:list-decimal prose-ol:pl-5
            prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Back to Articles Link */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-black transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}