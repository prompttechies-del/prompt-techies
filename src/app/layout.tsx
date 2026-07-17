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
    default: "Prompt Techies | Student Technology & Innovation Ecosystem",
    template: "%s | Prompt Techies",
  },
  description: "Prompt Techies is a student-focused technology and innovation ecosystem that helps students learn AI, build real-world projects, participate in hackathons, and launch startups.",
  metadataBase: new URL(baseUrl),
  keywords: ["Prompt Techies", "Student Innovation", "Technology Education", "Startup Incubator", "AI Education", "Hackathons", "Tech Community"],
  authors: [{ name: "Prompt Techies" }],
  openGraph: {
    title: "Prompt Techies | Student Technology & Innovation Ecosystem",
    description: "Empowering students through AI education, real-world projects, internships, and startup incubation.",
    url: baseUrl,
    siteName: "Prompt Techies",
    images: [
      {
        url: `${baseUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Prompt Techies Innovation Ecosystem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Techies | Student Technology & Innovation Ecosystem",
    description: "Empowering students through AI education, real-world projects, internships, and startup incubation.",
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
