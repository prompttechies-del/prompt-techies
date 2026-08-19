import { Metadata } from 'next';
import Footer from "@/components/Footer";
import { baseUrl, generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Tech Blog & Insights | Prompt Techies',
  description: 'Read the latest insights on Artificial Intelligence, software development, startups, and technology trends from the Prompt Techies team.',
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  const webpageSchema = generateWebPageSchema(
    "Tech Blog & Insights | Prompt Techies",
    "Read the latest insights on Artificial Intelligence, software development, startups, and technology trends from the Prompt Techies team.",
    "/blog"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Blog", item: "/blog" }
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
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our <span className="text-[#004bff]">Blog</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
