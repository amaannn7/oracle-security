import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import JsonLd from "./components/JsonLd";

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
  description: "Oracle Services (Pvt) Ltd is Sri Lanka's premier multi-sector service provider offering professional security services, caregiving, and logistics solutions. Over 1000 trained security guards, cash management, event security, escort services, and VIP protection across Sri Lanka.",
  keywords: [
    "Oracle Services", "Oracle Security", "Oracle Service", "oracle services sri lanka",
    "oracle security sri lanka", "oracle care", "oracle logistics",
    "security services sri lanka", "security guards sri lanka", "security company sri lanka",
    "cash management services", "event security sri lanka", "VIP protection sri lanka",
    "escort services sri lanka", "caregiving services sri lanka", "logistics sri lanka",
    "private security company", "security guard company", "Oracle Services Pvt Ltd",
    "oracleservices.lk", "professional security", "trained security personnel",
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
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
