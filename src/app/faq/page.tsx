import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import { generalFaqs } from '@/data/faqs';
import { buildMetadata } from '@/lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'FAQs | Prompt Techies Programs, Events & Partnerships',
  description:
    'Answers to common questions about Prompt Techies: who can join, how to register, campus and corporate partnerships, location and response time.',
  path: '/faq',
});

export default function FaqPage() {
  const webpageSchema = generateWebPageSchema('FAQs | Prompt Techies', 'Answers to common questions about Prompt Techies.', '/faq');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '' },
    { name: 'FAQs', item: '/faq' },
  ]);

  return (
    <main id="main" className="relative flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ name: 'FAQs' }]} />
      <section className="px-6 pt-40 pb-12 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Frequently Asked <span className="text-[#004bff]">Questions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Everything you need to know about joining, partnering and working with Prompt Techies.
        </p>
      </section>
      <Faq items={generalFaqs} title="Popular questions" />
      <RelatedLinks
        links={[
          { title: 'Contact Us', desc: 'Still have a question? Send us a message.', href: '/contact' },
          { title: 'Innovation Programs', desc: 'See how we take ideas from discovery to launch.', href: '/programs' },
          { title: 'Campus Chapters', desc: 'Bring Prompt Techies to your institution.', href: '/institutions' },
        ]}
      />
      <Footer />
    </main>
  );
}
