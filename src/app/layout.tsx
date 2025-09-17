import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import PageTransition from '@/components/page-transition';
import CookieBanner from '@/components/cookie-banner';

export const metadata: Metadata = {
  title: 'Business Growth Mentor Programme | Business Growth Global',
  description: 'Ready to scale? Our business mentor programmes, built on the proven AEROPS framework, provide the strategy and leadership guidance you need. For entrepreneurs in the UK, Europe & USA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XPLCE6MS5G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XPLCE6MS5G');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Business Growth Global",
            "url": "https://www.businessgrowth.global/",
            "logo": "https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/BGG%20icon.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44 1630 411313",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.linkedin.com/company/74039492/",
              "https://www.facebook.com/BusinessGrowthGlobal/"
            ]
          }) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/BGG%20icon.jpg" sizes="any" />
      </head>
      <body className="font-body antialiased">
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
