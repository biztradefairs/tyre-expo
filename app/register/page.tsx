// app/register/page.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function RegisterRedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const t = searchParams?.get('t');
    const redirectParams = new URLSearchParams(searchParams?.toString() || '');
    redirectParams.delete('t');
    const queryString = redirectParams.toString();
    const suffix = queryString ? `?${queryString}` : '';

    // Redirect based on ?t= param, preserving all other query params
    if (t === 'brochure') {
      router.replace(`/event-brochure/${suffix}`);
    } else if (t === 'exhibit') {
      router.replace(`/exhibiting-enquiry/${suffix}`);
    } else if (t === 'visit') {
      router.replace(`/visitor-registration/${suffix}`);
    } else {
      router.replace(`/visitor-registration/${suffix}`);
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-sm text-gray-400">Redirecting...</p>
    </div>
  );
}