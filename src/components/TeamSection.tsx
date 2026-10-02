import Image from 'next/image';
import { MEMBERS } from '@/data/team';

/** Always-visible team grid (the hover section above only reveals photos on hover/touch). */
export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="w-full bg-[#121212] border-b border-white/5 py-24 px-6">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-14 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#004bff] bg-[#004bff]/5 border border-[#004bff]/20 px-4 py-2 rounded-full">
            Meet the Team
          </span>
          <h2 id="team-heading" className="mt-6 text-4xl font-bold tracking-tight text-white">
            The People Behind Prompt Techies
          </h2>
        </div>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {MEMBERS.map((m) => (
            <li key={m.name} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={m.src}
                  alt={`${m.name}, ${m.position} at Prompt Techies`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base md:text-lg font-bold text-white">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#FFD700]">{m.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
