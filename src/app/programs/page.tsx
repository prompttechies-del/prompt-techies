import { Metadata } from 'next';
import Footer from "@/components/Footer";
import CareerAccelerationSection from "@/components/CareerAccelerationSection";
import VentureBuildingSection from "@/components/VentureBuildingSection";

export const metadata: Metadata = {
  title: 'AI Learning, Hackathons & Startup Incubation | Prompt Techies Programs',
  description: 'Accelerate your career with Prompt Techies. Explore our AI learning platform, global hackathons, software development internships, and startup incubation programs.',
  keywords: ['Startup Incubation', 'Hackathons', 'AI Learning Platform', 'Software Development Internships', 'Resume Builder', 'Prompt Techies'],
};

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <CareerAccelerationSection />
      <VentureBuildingSection />
      <Footer />
    </main>
  );
}
