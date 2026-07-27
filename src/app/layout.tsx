import type { Metadata } from "next";
import { Geist, Geist_Mono, Syncopate, Instrument_Serif, Almarai, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["700"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const almarai = Almarai({
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

import { organizationSchema, websiteSchema, baseUrl } from "@/data/seoData";

export const metadata: Metadata = {
  title: {
    default: "Prompt Techies | AI Workshops, Hackathons, Software Development & Innovation Company",
    template: "%s | Prompt Techies",
  },
  description: "Prompt Techies empowers students, startups, and colleges through AI workshops, hackathons, product development, internships, and innovative technology solutions.",
  metadataBase: new URL(baseUrl),
  keywords: ["Prompt Techies", "AI Technology Company", "AI Workshops", "Software Development", "Hackathons", "SaaS Products", "Developer Platforms", "Enterprise Automation"],
  authors: [{ name: "Prompt Techies" }],
  openGraph: {
    title: "Prompt Techies | AI Workshops, Hackathons, Software Development & Innovation Company",
    description: "Prompt Techies empowers students, startups, and colleges through AI workshops, hackathons, product development, internships, and innovative technology solutions.",
    url: baseUrl,
    siteName: "Prompt Techies",
    images: [
      {
        url: `${baseUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Prompt Techies AI & Software Innovation Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Techies | AI Workshops, Hackathons, Software Development & Innovation Company",
    description: "Prompt Techies empowers students, startups, and colleges through AI workshops, hackathons, product development, internships, and innovative technology solutions.",
    images: [`${baseUrl}/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable} ${instrumentSerif.variable} ${almarai.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex flex-col" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
