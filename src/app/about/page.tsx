import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AboutHeroVideo from '@/components/AboutHeroVideo';
import StoryHoverText from '@/components/StoryHoverText';
import Footer from "@/components/Footer";
import { allPeopleSchemas } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'About Prompt Techies | Our Mission, Vision & DPIIT Recognition',
  description: 'Discover the mission of Prompt Techies. We are a DPIIT-recognized startup dedicated to bridging the gap between academia and industry through AI and innovation.',
  keywords: ['Prompt Techies Founder', 'Saahil Zameer Shaik', 'DPIIT-recognized Startup', 'Student Innovation Ecosystem', 'Technology Community'],
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allPeopleSchemas) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5 min-h-[60vh] flex items-center">
        <AboutHeroVideo />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)] opacity-0 animate-fade-in-up">
            Our Foundation
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up animation-delay-100">
            Our Mission & <span className="text-[#004bff] italic">Prompt Techies</span>.
          </h1>
          <div className="text-base lg:text-xl text-gray-400 max-w-3xl leading-relaxed space-y-4 opacity-0 animate-fade-in-up animation-delay-200">
            <p>
              Prompt Techies is a student-focused technology and innovation ecosystem built to transform ambitious learners into skilled builders, innovators, and future founders.
            </p>
            <p>
              We bridge the gap between academic learning and real-world opportunities by connecting students with practical skills, industry mentorship, live projects, hackathons, internships, startup exposure, and collaborative technology communities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Hover Section */}
      <section className="bg-[#0a0a0a] border-b border-white/5">
        <StoryHoverText />
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 flex justify-center bg-[#121212] border-b border-white/5">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] mb-4">Our Story</div>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-6">How It All Started</h2>
              <div className="text-lg text-gray-400 leading-relaxed space-y-4">
                <p>
                  Prompt Techies was born out of a simple realization: the traditional education system often leaves students unprepared for the fast-paced world of technology and innovation.
                </p>
                <p>
                  We saw countless ambitious learners with brilliant ideas, but without the guidance, community, or practical experience to bring those ideas to life. We decided to build the exact ecosystem we wished we had when we started.
                </p>
                <p>
                  What started as a small community of tech enthusiasts quickly evolved into a DPIIT-recognized startup, dedicated to bridging the gap between academia and industry. Today, we empower students to move beyond textbooks and build products that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl relative border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004bff]/20 to-transparent z-10 mix-blend-overlay"></div>
                <Image 
                  src="/hero-new-1.jpg" 
                  alt="Prompt Techies Story" 
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] mb-[-1rem]">Prompt Techies Innovation Hub</div>
              <h2 className="text-4xl font-bold text-white tracking-tight decoration-[#004bff] decoration-4 underline underline-offset-8">Our Vision for Student Innovation</h2>
              <div className="text-lg text-gray-400 leading-relaxed font-normal space-y-4">
                <p>
                  To build an accessible and high-impact innovation ecosystem where every student has the opportunity to learn, build, collaborate, and create something meaningful.
                </p>
                <p>
                  We envision a future where students are not limited by their degree, college, location, or academic background. Prompt Techies empowers students with access to emerging technologies, industry knowledge, mentorship, practical experience, and a powerful network of fellow builders.
                </p>
                <p className="font-bold text-white">
                  Our goal is simple: Build Future Innovators, Not Just Graduates.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-white tracking-tight decoration-[#004bff] decoration-4 underline underline-offset-8">The Mission: Turning Potential into Impact</h2>
              <div className="text-lg text-gray-400 leading-relaxed font-normal space-y-4">
                <p className="text-white font-medium">
                  Our mission is to turn academic potential into real-world impact.
                </p>
                <p>
                  Through AI and emerging technology programs, hands-on workshops, innovation challenges, hackathons, project development, mentorship, internships, and startup support, Prompt Techies helps students move from learning concepts to building solutions.
                </p>
                <p>
                  We are creating an ecosystem where students can:
                </p>
                <p className="font-semibold text-[#004bff]">
                  Learn → Upskill → Build → Compete → Connect → Achieve → Innovate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#004bff] bg-[#004bff]/5 border border-[#004bff]/20 px-4 py-2 rounded-full">Our Values</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-6">The Pillars of Prompt Techies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "LEARN BY BUILDING", desc: "We believe the best learning happens when ideas leave the notebook and become real projects. Students gain practical experience by building solutions, experimenting with technology, and solving meaningful problems." },
              { title: "ACCESS TO OPPORTUNITY", desc: "Talent exists everywhere, but opportunity does not. We work to connect students with mentorship, projects, workshops, hackathons, internships, industry exposure, and startup opportunities." },
              { title: "STUDENT INNOVATION", desc: "We encourage students to think beyond assignments and examinations. Prompt Techies provides an environment where ideas can evolve into prototypes, products, research projects, and startups." },
              { title: "COMMUNITY-DRIVEN GROWTH", desc: "Innovation becomes stronger when builders work together. We are building a connected network of students, developers, mentors, creators, researchers, and founders who learn and grow together." },
              { title: "INDUSTRY-READY SKILLS", desc: "We focus on practical, future-facing skills across AI, emerging technologies, product development, software engineering, electronics, research, and entrepreneurship." },
              { title: "BUILD SOMETHING THAT MATTERS", desc: "Our philosophy goes beyond earning certificates. We encourage every student to create meaningful work, build a strong portfolio, gain real experience, and turn their skills into opportunities." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-[#121212] border border-white/5 rounded-[40px] shadow-2xl hover:border-[#004bff]/30 transition-all group">
                <div className="w-12 h-12 bg-[#004bff]/10 rounded-2xl flex items-center justify-center mb-6 text-[#004bff] font-bold text-xl group-hover:bg-[#004bff] group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 flex justify-center bg-[#121212] border-t border-white/5">
        <div className="w-full max-w-[800px] text-center flex flex-col items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#004bff]">PROMPT TECHIES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Don’t Just Graduate.<br/>
            <span className="text-[#004bff]">Build Something That Matters.</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl">
            Turn ideas into projects, projects into experience, and experience into opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
