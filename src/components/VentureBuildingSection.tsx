"use client";

import React from "react";

export default function VentureBuildingSection() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white flex flex-col items-center">
      {/* 1. Header Section */}
      <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-t border-white/10">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#004bff]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00c8ff] mb-6 inline-block bg-[#00c8ff]/10 border border-[#00c8ff]/20 px-4 py-1.5 rounded-full">
            Venture-Building Platform
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Build Your Legacy <br />
            <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">
              With Prompt Techies.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-8">
            Turning student ideas into products, startups, and real-world impact.
          </p>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            Prompt Techies is a student-focused technology and innovation ecosystem that helps ambitious builders move from ideas to execution. We work at the earliest stage, where ideas are still raw, and provide the technology, mentorship, infrastructure, ecosystem access, and execution support needed to build real, market-ready solutions.
          </p>
        </div>
      </section>

      {/* 2. Why Does Prompt Techies Exist? */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 relative">
        <div className="absolute left-0 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-[#00c8ff]/50 to-transparent" />
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-5/12 relative lg:sticky lg:top-32 z-10 bg-[#0a0a0a]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none py-4 lg:py-0">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Why Does Prompt Techies Exist?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Across colleges and universities, thousands of promising ideas never move beyond classrooms, conversations, presentations, or pitch decks.
            </p>
            <p className="text-xl font-semibold text-white/90 mb-6">
              The problem is not a lack of creativity.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              The real gaps are execution, technical support, mentorship, infrastructure, industry exposure, and access to the right ecosystem.
            </p>
            <p className="text-lg font-bold text-[#00c8ff] mt-6">
              Prompt Techies exists to close these gaps.
            </p>
          </div>
          
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Reduce the friction of building and launching",
              "Provide real-world technology infrastructure",
              "Connect students with mentors and industry experts",
              "Enable faster idea validation and product development",
              "Create opportunities for testing with real users",
              "Build pathways from student projects to scalable startups"
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-[#004bff]/20 flex items-center justify-center text-[#00c8ff] font-bold mb-4">
                  0{idx + 1}
                </div>
                <p className="text-sm md:text-base text-white/80 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Do We Do? */}
      <section className="w-full bg-[#121212] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#00c8ff] font-bold tracking-widest uppercase text-[10px] mb-4">What Do We Do?</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From Idea to Impact.</h2>
            <p className="text-lg text-white/60 mt-6 max-w-2xl mx-auto">
              We help students, innovators, and early-stage founders turn ambitious ideas into working products through a structured, execution-first ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[32px] hover:border-[#00c8ff]/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">VALIDATION</h4>
              <h5 className="text-[#00c8ff] font-semibold mb-4">Build the Right Thing</h5>
              <p className="text-white/60 leading-relaxed">
                We help teams understand the problem, identify real users, validate assumptions, and develop a clear direction before investing heavily in development.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[32px] hover:border-[#00c8ff]/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">MVP DEVELOPMENT</h4>
              <h5 className="text-[#00c8ff] font-semibold mb-4">Turn Ideas Into Products</h5>
              <p className="text-white/60 leading-relaxed">
                From software platforms and AI products to hardware prototypes, our ecosystem supports teams in building functional and testable minimum viable products.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[32px] hover:border-[#00c8ff]/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">LIVE TESTING</h4>
              <h5 className="text-[#00c8ff] font-semibold mb-4">Build With Real Feedback</h5>
              <p className="text-white/60 leading-relaxed">
                Products need more than internal testing. We help teams access communities and institutional ecosystems where they can test, learn, collect feedback, and improve.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[32px] hover:border-[#00c8ff]/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">STARTUP ENABLEMENT</h4>
              <h5 className="text-[#00c8ff] font-semibold mb-4">Move From Project to Company</h5>
              <p className="text-white/60 leading-relaxed">
                Promising projects receive support for product strategy, operations, partnerships, startup formation, go-to-market planning, and early-stage growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Growing Ecosystem Stats */}
      <section className="w-full py-20 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Our Growing Ecosystem</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00c8ff]/50 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2">50+</span>
              <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">Active Projects</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00c8ff]/50 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2">12+</span>
              <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">Institutional Ecosystems</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00c8ff]/50 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2">100+</span>
              <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">Student Builders</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00c8ff]/50 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2">Multiple</span>
              <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">MVPs Deployed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00c8ff]/50 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-[#00c8ff] mb-2">Growing</span>
              <span className="text-xs text-white/70 uppercase tracking-widest font-semibold">Startup Pipeline</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What do builders get? */}
      <section className="w-full py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-[#00c8ff] font-bold tracking-widest uppercase text-[10px] mb-4">What do builders get?</h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">More Than Advice.</h2>
            <h2 className="text-2xl md:text-4xl text-white/80 mb-6">An Ecosystem Built For Execution.</h2>
            <p className="text-lg text-white/60 max-w-2xl">
              Prompt Techies does not stop at workshops, presentations, or motivational sessions. We actively help builders move forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#121212] border border-white/10 rounded-[32px] hover:shadow-[0_0_30px_rgba(0,200,255,0.1)] transition-all">
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Technology & Build Support</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> MVP development guidance</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Software and hardware development support</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> AI and emerging technology integration</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Scalable architecture planning</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Product development resources</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Hands-on engineering direction</li>
              </ul>
            </div>
            <div className="p-8 bg-[#121212] border border-white/10 rounded-[32px] hover:shadow-[0_0_30px_rgba(0,200,255,0.1)] transition-all">
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Mentorship & Strategy</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Access to founders, professionals, and domain experts</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Product and business strategy guidance</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Market validation support</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Growth and go-to-market direction</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Execution-focused mentoring</li>
              </ul>
            </div>
            <div className="p-8 bg-[#121212] border border-white/10 rounded-[32px] hover:shadow-[0_0_30px_rgba(0,200,255,0.1)] transition-all">
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Startup Enablement</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Startup formation guidance</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Legal and operational support</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Access to ecosystem partners</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Institutional connections</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Collaboration and partnership opportunities</li>
                <li className="flex items-start gap-3"><span className="text-[#00c8ff] mt-0.5">▹</span> Pathways toward incubation and funding readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Startup Roadmap */}
      <section className="w-full py-24 bg-[#0a0a0a] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Startup Roadmap</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A structured journey from identifying a problem to building something the market can actually use.
            </p>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            {[
              { num: "01", title: "DISCOVER", subtitle: "Find a Problem Worth Solving", points: ["Identify meaningful real-world problems", "Understand users and market needs", "Refine the idea and define the opportunity", "Build a clear execution roadmap"] },
              { num: "02", title: "VALIDATE", subtitle: "Prove the Idea", points: ["Test assumptions with potential users", "Conduct market and problem validation", "Build an initial prototype or MVP", "Measure early interest and feedback"] },
              { num: "03", title: "BUILD", subtitle: "Turn the Idea Into Reality", points: ["Develop a functional product", "Access technical and strategic support", "Test within communities and institutional ecosystems", "Improve through real-world feedback"] },
              { num: "04", title: "LAUNCH", subtitle: "Enter the Real World", points: ["Deploy the product", "Build an early user base", "Develop partnerships and distribution channels", "Create a go-to-market strategy"] },
              { num: "05", title: "SCALE", subtitle: "Build the Company", points: ["Strengthen product and operations", "Formalize the startup where appropriate", "Expand market reach", "Prepare for partnerships, incubation, and funding opportunities"] },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-[#121212] border-4 border-white/20 group-hover:border-[#00c8ff] group-hover:shadow-[0_0_15px_rgba(0,200,255,0.5)] transition-all duration-300" />
                <div className="text-[#00c8ff] font-black text-2xl mb-1">{step.num}</div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00c8ff] transition-colors">{step.title}</h3>
                <h4 className="text-lg text-white/60 font-medium mb-4">{step.subtitle}</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  {step.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#00c8ff] transition-colors" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Makes Prompt Techies Different? */}
      <section className="w-full py-24 bg-[#121212] border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
            What Makes Prompt Techies Different?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { left: "EXECUTION", right: "THEORY", desc: "Ideas become valuable when they are built, tested, and improved." },
              { left: "SPEED", right: "ENDLESS PLANNING", desc: "Build quickly. Learn early. Improve continuously." },
              { left: "REAL USERS", right: "ASSUMPTIONS", desc: "Products should be shaped by genuine problems and real-world feedback." },
              { left: "BUILDING", right: "ONLY PITCHING", desc: "A pitch deck can explain an idea. A working product can prove it." },
              { left: "ECOSYSTEM", right: "ISOLATION", desc: "Great builders move faster when they have access to technology, mentors, institutions, communities, and opportunities.", full: true },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 bg-[#0a0a0a] border border-white/10 rounded-[32px] group hover:border-[#00c8ff]/30 transition-all ${item.full ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 font-bold text-lg md:text-xl mb-4 uppercase tracking-widest">
                  <span className="text-[#00c8ff]">{item.left}</span>
                  <span className="text-white/40">&gt;</span>
                  <span className="text-white/40 group-hover:text-white/60 transition-colors">{item.right}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center p-8 md:p-12 bg-white/5 border border-white/10 rounded-[40px] max-w-4xl mx-auto backdrop-blur-md">
            <p className="text-2xl md:text-4xl font-light italic text-white/90">
              "We focus on building outcomes, not collecting ideas."
            </p>
          </div>
        </div>
      </section>

      {/* 8. Our Initiatives & Vision */}
      <section className="w-full py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-[#00c8ff] font-bold tracking-widest uppercase text-[10px] mb-4">Our Initiatives</h3>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">One Ecosystem.</h2>
          <h2 className="text-2xl md:text-4xl text-white/80 mb-8">Multiple Pathways to Build.</h2>
          
          <p className="text-lg text-white/60 mb-12 leading-relaxed">
            Prompt Techies brings together technology learning, project development, innovation challenges, AI initiatives, startup building, mentorship, institutional partnerships, and career opportunities within one connected ecosystem.
          </p>
          <p className="text-lg text-white/80 mb-6 font-medium">
            Our initiatives are designed to help students move through a complete journey:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[#00c8ff] font-black text-lg md:text-3xl tracking-widest uppercase mb-24">
            <span>LEARN</span> <span className="text-white/40">→</span> 
            <span>BUILD</span> <span className="text-white/40">→</span> 
            <span>TEST</span> <span className="text-white/40">→</span> 
            <span>LAUNCH</span> <span className="text-white/40">→</span> 
            <span>SCALE</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Building the Next Generation of Student Innovators and Founders.</h2>
          <div className="text-lg text-white/60 leading-relaxed space-y-6 text-left max-w-3xl mx-auto bg-white/5 p-8 md:p-12 rounded-[32px] border border-white/10">
            <p>
              Our vision is to create a distributed, institution-driven innovation ecosystem where students can access the tools, technology, mentorship, infrastructure, and opportunities required to build meaningful products and scalable companies.
            </p>
            <p>
              We envision campuses becoming active innovation environments where students do more than study technology.
            </p>
            <ul className="space-y-3 font-medium text-white/80 border-l-2 border-[#00c8ff] pl-6 py-2">
              <li>They build with it.</li>
              <li>They solve problems with it.</li>
              <li>They create opportunities with it.</li>
              <li><span className="text-[#00c8ff]">And some of them build the companies of tomorrow.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Final CTA: Ready to Build Your Legacy? */}
      <section className="w-full py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a] border-t border-white/5 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to Build Your Legacy?</h2>
          <p className="text-lg md:text-xl text-white/70 mb-4">
            Your idea does not need to stay inside a notebook, classroom, presentation, or group chat.
          </p>
          <p className="text-lg md:text-xl font-bold text-[#00c8ff] mb-12">
            Bring the idea. We’ll help you find the path to build it.
          </p>
          <a href="/contact" className="bg-[#004bff] hover:bg-[#00c8ff] hover:scale-105 transition-all duration-300 text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full shadow-[0_0_20px_rgba(0,75,255,0.4)]">
            Apply to the Startup Node
          </a>
        </div>
      </section>

    </div>
  );
}
