'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

const CLARITY_PROJECT_ID = 'xz9p96s9my';

export default function ClarityAnalytics() {
  const pathname = usePathname();

  // Never load analytics on admin/CMS backend routes — those are internal
  // team pages, not public traffic, and would skew real visitor data.
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `}
    </Script>
  );
}
