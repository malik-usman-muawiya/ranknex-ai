'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-BM80MRMXD3';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Never load analytics on admin/CMS backend routes — those are internal
  // team pages, not public traffic, and would skew real visitor data.
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
