import { Metadata } from 'next';
import Hero from "@/components/Hero";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import UpdateSection from "@/components/UpdateSection";
import ImpactSection from "@/components/ImpactSection";
import CollegePartnersSection from "@/components/CollegePartnersSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { localBusinessSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Prompt Techies | Premier Student AI & Startup Incubation Hub',
  description: 'Join Prompt Techies, a DPIIT-recognized startup empowering students with AI education, hackathons, internships, and startup incubation to build real-world products.',
  keywords: ['Prompt Techies', 'AI Startup India', 'Student Startup', 'Startup Incubation', 'AI Learning Platform', 'Hackathons', 'Internships', 'Career Acceleration', 'DPIIT recognized'],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <CoverflowCarousel />
      <AboutSection />
      <PartnersSection />
      <UpdateSection />
      <ImpactSection />
      <QuoteSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
