import Footer from "@/components/Footer";
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import RelatedLinks from "@/components/RelatedLinks";
import { programsFaqs } from "@/data/faqs";
import CareerAccelerationSection from "@/components/CareerAccelerationSection";
import VentureBuildingSection from "@/components/VentureBuildingSection";

import {generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'AI Learning, Hackathons & Startup Incubation | Prompt Techies Programs',
  description: 'Accelerate your career with Prompt Techies. Explore our AI learning platform, global hackathons, software development internships, and startup incubation programs.',
  path: '/programs',
  keywords: ['Startup Incubation', 'Hackathons', 'AI Learning Platform', 'Software Development Internships', 'Resume Builder', 'Prompt Techies'],
});

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
    <main id="main" className="flex min-h-screen flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative">
        <Breadcrumbs items={[{ name: "Programs" }]} />
        <CareerAccelerationSection />
      </div>
      <VentureBuildingSection />
      <Faq items={programsFaqs} />
      <RelatedLinks links={[
        { title: 'Events & Workshops', desc: 'Join a bootcamp, hackathon, or summit.', href: '/events' },
        { title: 'Campus Chapters', desc: 'Bring our programs to your institution.', href: '/institutions' },
        { title: 'Contact Us', desc: 'Apply to the Startup Node or ask a question.', href: '/contact' },
      ]} />
      <Footer />
    </main>
  );
}
