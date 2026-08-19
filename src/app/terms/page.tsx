import { Metadata } from 'next';
import Footer from "@/components/Footer";
import { baseUrl, generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Terms of Service | Prompt Techies',
  description: 'Read the terms of service and conditions for using the Prompt Techies platform, events, and services.',
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
};

export default function TermsPage() {
  const webpageSchema = generateWebPageSchema(
    "Terms of Service | Prompt Techies",
    "Read the terms of service and conditions for using the Prompt Techies platform, events, and services.",
    "/terms"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Terms of Service", item: "/terms" }
  ]);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terms of <span className="text-[#004bff]">Service</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Page content coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
