import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import JsonLd from "./components/JsonLd";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oracleservices.lk'),
  title: {
    default: "Oracle Services (Pvt) Ltd - Premier Security, Care & Logistics in Sri Lanka",
    template: "%s | Oracle Services (Pvt) Ltd",
  },
  description: "Oracle Services (Pvt) Ltd - Leading security company in Sri Lanka. Professional security services with 1000+ trained security guards. We provide security solutions, cash management, event security, VIP protection, escort services, caregiving, and logistics services across Sri Lanka. Available 24/7 in Colombo, Nugegoda and nationwide.",
  keywords: [
    // Primary brand terms
    "Oracle Services", "Oracle Security", "Oracle Service", "oracle services sri lanka",
    "oracle security sri lanka", "oracle care", "oracle logistics", "Oracle Services Pvt Ltd",
    // Core security terms
    "security", "security services", "security sri lanka", "security services sri lanka",
    "security company", "security company sri lanka", "security guards", "security guards sri lanka",
    "security guard company", "security guard services", "security services colombo",
    // Service-specific
    "cash management services", "cash management sri lanka", "event security sri lanka",
    "VIP protection sri lanka", "escort services sri lanka", "armed security", "unarmed security",
    "corporate security", "industrial security", "residential security", "24/7 security",
    // Location-based
    "security colombo", "security nugegoda", "security services nugegoda",
    "private security company", "professional security", "trained security personnel",
    // Supporting services
    "caregiving services sri lanka", "logistics sri lanka", "oracleservices.lk",
    // Variations and misspellings
    "secuirty services", "security servises", "seurity services sri lanka",
  ],
  icons: {
    icon: [
      { url: '/logo new.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo new.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo new.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo new.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oracleservices.lk',
    siteName: 'Oracle Services (Pvt) Ltd',
    title: 'Oracle Services (Pvt) Ltd - Premier Security, Care & Logistics in Sri Lanka',
    description: 'Sri Lanka\'s leading multi-sector service provider. Professional security guards, cash management, event security, caregiving, and logistics solutions.',
    images: [
      {
        url: '/logo new.jpg',
        width: 512,
        height: 512,
        alt: 'Oracle Services (Pvt) Ltd Logo',
      },
      {
        url: '/oracle.png',
        width: 1200,
        height: 630,
        alt: 'Oracle Services (Pvt) Ltd - Security, Care & Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle Services (Pvt) Ltd - Security, Care & Logistics',
    description: 'Sri Lanka\'s leading multi-sector service provider. Professional security, caregiving, and logistics solutions.',
    images: ['/oracle.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://oracleservices.lk',
  },
  verification: {},
  category: 'Security Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <link rel="icon" href="/logo new.png" sizes="any" />
        <link rel="icon" href="/logo new.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo new.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo new.png" sizes="180x180" />
        <meta name="theme-color" content="#1e3a5f" />
        <link rel="preload" href="/main-security.jpeg" as="image" />
        <link rel="preload" href="/caregiving-3.jpg" as="image" />
        <link rel="preload" href="/logistics.jpg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
