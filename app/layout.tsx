import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oracle Services (Pvt) Ltd - Premier Multi-Sector Service Provider in Sri Lanka",
  description: "Oracle Services provides comprehensive solutions through three specialized divisions: Security, Care, and Logistics. Our Security Division maintains over 1000 trained personnel offering security guards, cash management, event security, escort services, and VIP protection throughout Sri Lanka.",
  keywords: "security services, security guards, cash management, event security, VIP protection, Sri Lanka security, Oracle Security",
  icons: {
    icon: '/oracle.png',
    apple: '/oracle.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/oracle.png" type="image/png" />
        <link rel="apple-touch-icon" href="/oracle.png" />
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
