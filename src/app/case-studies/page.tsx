import LazyVideo from '@/components/LazyVideo';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import { caseStudies } from '@/data/caseStudies';
import { buildMetadata } from '@/lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'Case Studies | How Prompt Techies Helps Students Build',
  description:
    'See how Prompt Techies turns students into builders through campus hackathons, the Innovation Summit and the Startup Node program.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const webpageSchema = generateWebPageSchema(
    'Case Studies | Prompt Techies',
    'How Prompt Techies turns students into builders.',
    '/case-studies'
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '' },
    { name: 'Case Studies', item: '/case-studies' },
  ]);

  return (
    <main id="main" className="relative flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ name: 'Case Studies' }]} />

      <section className="px-6 pt-40 pb-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Case <span className="text-[#004bff]">Studies</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Real programs, real builders. Here is how Prompt Techies takes students from learning to launching.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.slug}
              id={cs.slug}
              className="grid grid-cols-1 gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-[#121212] p-6 md:p-10 lg:grid-cols-5"
            >
              {cs.video && (
                <div className={`relative aspect-video overflow-hidden rounded-2xl bg-black lg:col-span-2 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <LazyVideo
                    src={cs.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`${cs.title} highlights`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-5 lg:col-span-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00c8ff]">{cs.audience}</p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{cs.title}</h2>
                {cs.metrics && cs.metrics.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <li key={m} className="rounded-full border border-[#004bff]/40 bg-[#004bff]/10 px-4 py-1 text-xs font-semibold text-white">
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
                <dl className="flex flex-col gap-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-bold text-white">The challenge</dt>
                    <dd className="text-gray-400">{cs.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-white">Our approach</dt>
                    <dd className="text-gray-400">{cs.approach}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-white">The outcome</dt>
                    <dd className="text-gray-400">{cs.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Want results like these on your campus?</h2>
          <Link href="/contact" className="rounded-full bg-[#004bff] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#003cb3] transition-colors">
            Talk to Our Team
          </Link>
        </div>
      </section>

      <RelatedLinks
        links={[
          { title: 'Events & Workshops', desc: 'Join a bootcamp, hackathon, or summit.', href: '/events' },
          { title: 'Campus Chapters', desc: 'Bring our programs to your institution.', href: '/institutions' },
          { title: 'Innovation Programs', desc: 'From idea to startup, step by step.', href: '/programs' },
        ]}
      />
      <Footer />
    </main>
  );
}
