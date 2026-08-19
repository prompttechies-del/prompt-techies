import { Metadata } from 'next';
import Footer from "@/components/Footer";
import { baseUrl, generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Careers | Join Prompt Techies',
  description: 'Join Prompt Techies and help us build the next generation of tech innovators. Explore open roles in AI, engineering, and marketing.',
  alternates: {
    canonical: `${baseUrl}/careers`,
  },
};

export default function CareersPage() {
  const webpageSchema = generateWebPageSchema(
    "Careers | Join Prompt Techies",
    "Join Prompt Techies and help us build the next generation of tech innovators. Explore open roles in AI, engineering, and marketing.",
    "/careers"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Careers", item: "/careers" }
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
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join <span className="text-[#004bff]">Our Team</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Page content coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
