import { Metadata } from 'next';
import Footer from "@/components/Footer";
import { baseUrl, generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Hackathons & Challenges | Prompt Techies',
  description: 'Participate in national and global hackathons hosted by Prompt Techies. Build solutions, win prizes, and accelerate your tech career.',
  alternates: {
    canonical: `${baseUrl}/hackathons`,
  },
};

export default function HackathonsPage() {
  const webpageSchema = generateWebPageSchema(
    "Hackathons & Challenges | Prompt Techies",
    "Participate in national and global hackathons hosted by Prompt Techies. Build solutions, win prizes, and accelerate your tech career.",
    "/hackathons"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Hackathons", item: "/hackathons" }
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
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Tech <span className="text-[#004bff]">Hackathons</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">Page content coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
