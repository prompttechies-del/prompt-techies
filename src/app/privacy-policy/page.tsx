import { Metadata } from 'next';
import Footer from "@/components/Footer";
import { baseUrl, generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prompt Techies',
  description: 'Read the Prompt Techies Privacy Policy to understand how we collect, use, and protect your data.',
  alternates: {
    canonical: `${baseUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const webpageSchema = generateWebPageSchema(
    "Privacy Policy | Prompt Techies",
    "Read the Prompt Techies Privacy Policy to understand how we collect, use, and protect your data.",
    "/privacy-policy"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Privacy Policy", item: "/privacy-policy" }
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
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy <span className="text-[#004bff]">Policy</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Page content coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
