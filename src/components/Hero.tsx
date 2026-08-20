import Image from 'next/image';
import LightTunnel from './LightTunnel';

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-28 pb-10 flex flex-col items-center bg-[#121212] overflow-hidden">

      {/* LightTunnel Background */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <LightTunnel
          cableColor="#0034ff"
          pulseColor="#001eff"
          tunnelColor="#3300ff"
          tunnelOpacity={0}
          speed={0.1}
          flowDirection="outward"
          pulseSpeed={2}
          pulseLength={0.28}
          pulseBlend={1}
          pulseWidth={1}
          cableCount={20}
          thickness={0.35}
          rimWidth={0.15}
          waviness={0.3}
          sway={0.5}
          size={1.0}
          centerX={0.0}
          centerY={0.0}
          glow={1.0}
          fadeNear={0.5}
          fadeFar={2}
          brightness={1.0}
          colorVariance={true}
          grain={true}
          grainIntensity={0.05}
          opacity={1.0}
          mouseInteraction={true}
          mouseStrength={0.1}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 px-6 text-center max-w-5xl text-white mb-12">
        <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.1em] mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)] opacity-0 animate-fade-in-up">
          Welcome to Prompt Techies
        </div>
        <h1 className="flex flex-col items-center justify-center text-3xl md:text-5xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight text-white opacity-0 animate-fade-in-up animation-delay-100">
          <span>Built for developers</span>
          <span className="relative inline-block mt-2 md:mt-0 font-bold md:whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">
              Who Want More Than Just a Degree
            </span>
            <span className="absolute left-0 bottom-[-4px] md:bottom-[-6px] w-full h-[4px] md:h-[6px] bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] rounded-full"></span>
          </span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-normal text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 opacity-0 animate-fade-in-up animation-delay-200">
          Prompt Techies engineers intelligent technology and scalable AI-powered solutions that transform ambitious ideas into enterprise-ready digital products.
        </p>
      </div>

      {/* Hero Image Card - No Frame */}
      <div className="relative w-full max-w-[1600px] px-4 md:px-8 z-20 mb-[-120px] md:mb-[-180px] lg:mb-[-220px]">
        <div className="relative aspect-[16/10] md:aspect-[21/9] lg:aspect-[24/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl mx-auto transform transition-transform duration-700 hover:scale-[1.01]">
          <Image
            src="/hero-new-1.jpg"
            alt="Prompt Techies - AI Technology Company"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Spacer to handle the negative margin overlap properly */}
      <div className="h-20 md:h-32 lg:h-48" />
    </section>
  );
}
