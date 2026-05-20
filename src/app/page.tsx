import { Metadata } from 'next';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import UpdateSection from "@/components/UpdateSection";
import ImpactSection from "@/components/ImpactSection";
import CollegePartnersSection from "@/components/CollegePartnersSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Prompt Techies | Empowering Next-Gen Innovators',
  description: 'Prompt Techies provides tools, mentorship, and a global network to turn academic foundation into professional legacy. Join the national portal for future leaders.',
  keywords: ['Prompt Techies', 'Education', 'Startup', 'Innovation', 'Mentorship', 'Career Development'],
  openGraph: {
    title: 'Prompt Techies | Empowering Next-Gen Innovators',
    description: 'Transform your academic foundation into a professional legacy with Prompt Techies.',
    url: 'https://prompttechies.in',
    siteName: 'Prompt Techies',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
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
