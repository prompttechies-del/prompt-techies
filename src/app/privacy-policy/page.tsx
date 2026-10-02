import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Prompt Techies',
  description:
    'How Prompt Techies collects, uses and protects your personal data, including contact form details, analytics cookies and your rights.',
  path: '/privacy-policy',
});

const UPDATED = '2 October 2026';

export default function PrivacyPolicyPage() {
  const webpageSchema = generateWebPageSchema('Privacy Policy | Prompt Techies', 'How Prompt Techies collects, uses and protects your data.', '/privacy-policy');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '' },
    { name: 'Privacy Policy', item: '/privacy-policy' },
  ]);

  return (
    <main id="main" className="relative flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ name: 'Privacy Policy' }]} />

      <article className="mx-auto w-full max-w-3xl px-6 pt-40 pb-24">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Privacy <span className="text-[#004bff]">Policy</span>
        </h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: {UPDATED}</p>

        <div className="mt-10 flex flex-col gap-8 text-gray-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-[#00c8ff] [&_a]:underline">
          <section>
            <h2>1. Who we are</h2>
            <p>
              This website is operated by Prompt Techies (TROVO FI PRIVATE LIMITED), {SITE.address.street}, {SITE.address.district}, {SITE.address.city}, {SITE.address.region} – {SITE.address.postalCode}, India. You can reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}.
            </p>
          </section>

          <section>
            <h2>2. Information we collect</h2>
            <ul>
              <li><strong>Contact form:</strong> your name, email address, phone number, city/address, reason for contacting and message.</li>
              <li><strong>Newsletter box:</strong> your email address, if you use the &ldquo;Stay Updated&rdquo; field in the footer.</li>
              <li><strong>Analytics:</strong> with your consent, anonymous usage data such as pages visited, device type and approximate location, collected through Google Analytics.</li>
              <li><strong>Preferences stored on your device:</strong> background-music settings (play, mute, volume, track) and your cookie choice, kept in your browser&apos;s local storage.</li>
            </ul>
          </section>

          <section>
            <h2>3. How we use your information</h2>
            <ul>
              <li>To reply to your enquiries and provide support.</li>
              <li>To tell you about events, programs and partnerships you asked about.</li>
              <li>To understand how the site is used and improve it.</li>
              <li>To meet legal and regulatory obligations.</li>
            </ul>
            <p className="mt-3">We do not sell your personal data.</p>
          </section>

          <section>
            <h2>4. Cookies and analytics</h2>
            <p>
              Analytics cookies are only enabled if you click &ldquo;Accept&rdquo; on the cookie notice. You can decline, and the site works the same. To change your choice, clear this site&apos;s data in your browser and the notice will appear again.
            </p>
          </section>

          <section>
            <h2>5. Third-party services</h2>
            <p>
              We use Google Forms to receive contact-form submissions, Google Analytics for analytics, Google Maps to show our location, Cloudflare to host the site, and YouTube, Instagram and LinkedIn for our social links. These providers process data under their own privacy policies.
            </p>
          </section>

          <section>
            <h2>6. Data retention and security</h2>
            <p>
              We keep enquiry details only as long as needed to respond and for reasonable record-keeping, and use access-controlled accounts to store them. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your rights</h2>
            <p>
              You may ask us to access, correct or delete the personal data we hold about you, or to withdraw consent, by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We will respond within a reasonable time and in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.
            </p>
          </section>

          <section>
            <h2>8. Children</h2>
            <p>
              Our programs are aimed at students. If you are under 18, please involve a parent or guardian before sharing personal details with us.
            </p>
          </section>

          <section>
            <h2>9. Changes to this policy</h2>
            <p>We may update this policy from time to time. The date at the top shows when it was last revised.</p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              Questions about privacy? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or use our <a href="/contact">contact page</a>.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
