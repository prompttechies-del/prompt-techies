import type { FaqItem } from '@/data/faqs';

export default function Faq({
  items,
  title = 'Frequently Asked Questions',
}: {
  items: FaqItem[];
  title?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="w-full bg-[#0a0a0a] border-t border-white/5 py-20 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto w-full max-w-3xl">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10 text-center">
          {title}
        </h2>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-[#121212] px-6 open:border-[#004bff]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 min-h-14 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-[#00c8ff] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-gray-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
