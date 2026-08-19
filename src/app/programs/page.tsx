import { Metadata } from 'next';
import Footer from "@/components/Footer";
import CareerAccelerationSection from "@/components/CareerAccelerationSection";
import VentureBuildingSection from "@/components/VentureBuildingSection";

import { baseUrl, generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'AI Learning, Hackathons & Startup Incubation | Prompt Techies Programs',
  description: 'Accelerate your career with Prompt Techies. Explore our AI learning platform, global hackathons, software development internships, and startup incubation programs.',
  keywords: ['Startup Incubation', 'Hackathons', 'AI Learning Platform', 'Software Development Internships', 'Resume Builder', 'Prompt Techies'],
  alternates: {
    canonical: `${baseUrl}/programs`,
  },
};

export default function ProgramsPage() {
  const webpageSchema = generateWebPageSchema(
    "AI Learning, Hackathons & Startup Incubation | Prompt Techies Programs",
    "Accelerate your career with Prompt Techies. Explore our AI learning platform, global hackathons, software development internships, and startup incubation programs.",
    "/programs"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Programs", item: "/programs" }
  ]);

  return (
    <main className="flex min-h-screen flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareerAccelerationSection />
      <VentureBuildingSection />
      <Footer />
    </main>
  );
}
