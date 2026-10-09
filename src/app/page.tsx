import { buildMetadata } from '@/lib/seo';
import Faq from '@/components/Faq';
import { generalFaqs } from '@/data/faqs';
import Hero from "@/components/Hero";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import UpdateSection from "@/components/UpdateSection";
import ImpactSection from "@/components/ImpactSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import {localBusinessSchema, saahilSchema, generateWebPageSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'Prompt Techies | AI Workshops, Hackathons, Software Development & Innovation Company',
  description: 'Prompt Techies empowers students, startups, and colleges through AI workshops, hackathons, product development, internships, and innovative technology solutions.',
  path: '',
  keywords: ['Prompt Techies', 'AI Workshops', 'Hackathons', 'Software Development', 'Startup Incubation', 'Student Innovation', 'AI Education', 'DPIIT recognized'],
});

export default function Home() {
  const webpageSchema = generateWebPageSchema(
    "Prompt Techies Homepage",
    "Prompt Techies empowers students, startups, and colleges through AI workshops, hackathons, product development, internships, and innovative technology solutions.",
    ""
  );

  return (
    <main id="main" className="flex min-h-screen flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saahilSchema) }}
      />
      <Hero />
      <CoverflowCarousel />
      <AboutSection />
      <PartnersSection />
      <UpdateSection />
      <ImpactSection />
      <QuoteSection />
      <TestimonialsSection />
      <Faq items={generalFaqs} />
      <CTASection />
      <Footer />
    </main>
  );
}
