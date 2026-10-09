import Footer from "@/components/Footer";
import { buildMetadata } from '@/lib/seo';
import {generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'Services | Prompt Techies',
  description: 'Explore the full range of services offered by Prompt Techies, from AI development to corporate innovation strategies.',
  path: '/services',
  noindex: true,
});

export default function ServicesPage() {
  const webpageSchema = generateWebPageSchema(
    "Services | Prompt Techies",
    "Explore the full range of services offered by Prompt Techies, from AI development to corporate innovation strategies.",
    "/services"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Services", item: "/services" }
  ]);

  return (
    <main id="main" className="flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our <span className="text-[#004bff]">Services</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Page content coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
