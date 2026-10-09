import Link from 'next/link';

type RelatedLink = { title: string; desc: string; href: string };

export default function RelatedLinks({
  links,
  heading = 'Keep Exploring',
}: {
  links: RelatedLink[];
  heading?: string;
}) {
  return (
    <section aria-labelledby="related-heading" className="w-full bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 id="related-heading" className="text-[11px] font-bold uppercase tracking-widest text-[#004bff] mb-8">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col gap-2 rounded-[28px] border border-white/5 bg-[#121212] p-8 transition-all hover:border-[#004bff]/40 hover:-translate-y-1"
              >
                <span className="text-lg font-bold text-white">{link.title}</span>
                <span className="text-sm text-gray-400 leading-relaxed">{link.desc}</span>
                <span className="mt-auto pt-4 text-sm font-semibold text-[#00c8ff] transition-transform group-hover:translate-x-1">
                  Learn more &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
