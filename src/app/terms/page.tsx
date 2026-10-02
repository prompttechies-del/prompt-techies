import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'Terms of Service | Prompt Techies',
  description: 'The terms that apply when you use the Prompt Techies website, events, programs and services.',
  path: '/terms',
});

const UPDATED = '2 October 2026';

export default function TermsPage() {
  const webpageSchema = generateWebPageSchema('Terms of Service | Prompt Techies', 'The terms that apply to the Prompt Techies website and programs.', '/terms');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '' },
    { name: 'Terms of Service', item: '/terms' },
  ]);

  return (
    <main id="main" className="relative flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ name: 'Terms of Service' }]} />

      <article className="mx-auto w-full max-w-3xl px-6 pt-48 md:pt-40 pb-24">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Terms of <span className="text-[#004bff]">Service</span>
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: {UPDATED}</p>

        <div className="mt-10 flex flex-col gap-8 text-gray-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-[#00c8ff] [&_a]:underline">
          <section>
            <h2>1. Acceptance</h2>
            <p>By using prompttechies.in or taking part in Prompt Techies events and programs, you agree to these terms. If you do not agree, please do not use the site.</p>
          </section>
          <section>
            <h2>2. Our services</h2>
            <p>Prompt Techies provides information about, and registration for, AI workshops, hackathons, bootcamps, mentorship, campus programs and startup-building support. Program details, schedules and eligibility may change; the latest information is published on our website and social channels.</p>
          </section>
          <section>
            <h2>3. Participation</h2>
            <ul>
              <li>Provide accurate information when registering or contacting us.</li>
              <li>Respect other participants, mentors and organisers; harassment or misconduct may lead to removal from events.</li>
              <li>You are responsible for the safety of your own devices and accounts when attending online or in-person sessions.</li>
            </ul>
          </section>
          <section>
            <h2>4. Intellectual property</h2>
            <p>The Prompt Techies name, logo, text, images and videos on this site belong to Prompt Techies or its licensors and may not be copied or reused without written permission. Projects you build remain yours unless a specific event or partnership states otherwise in writing.</p>
          </section>
          <section>
            <h2>5. Third-party links</h2>
            <p>Our site links to third-party services such as Google Forms, Instagram and partner sites. We are not responsible for their content or policies.</p>
          </section>
          <section>
            <h2>6. Disclaimer and liability</h2>
            <p>The site and programs are provided &ldquo;as is&rdquo;. We do not guarantee specific outcomes such as jobs, internships or funding. To the extent permitted by law, Prompt Techies is not liable for indirect or consequential losses arising from use of the site or participation in programs.</p>
          </section>
          <section>
            <h2>7. Privacy</h2>
            <p>How we handle personal data is explained in our <a href="/privacy-policy">Privacy Policy</a>.</p>
          </section>
          <section>
            <h2>8. Governing law</h2>
            <p>These terms are governed by the laws of India, and the courts at {SITE.address.city}, {SITE.address.region} have jurisdiction.</p>
          </section>
          <section>
            <h2>9. Contact</h2>
            <p>Questions about these terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
