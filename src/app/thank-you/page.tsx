import Link from 'next/link';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Thank You | Prompt Techies',
  description: 'Thanks for contacting Prompt Techies. Our team will get back to you shortly.',
  path: '/thank-you',
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <main id="main" className="relative flex min-h-screen flex-col w-full bg-[#0a0a0a] text-white">
      <Breadcrumbs items={[{ name: 'Thank You' }]} />
      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
        <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-[#00c8ff]/40 bg-[#00c8ff]/10 text-3xl text-[#00c8ff]">
          ✓
        </div>
        <h1 className="mt-8 text-4xl lg:text-6xl font-bold tracking-tight">
          Thank <span className="text-[#004bff]">you</span>!
        </h1>
        <p role="status" className="mt-6 max-w-xl text-lg text-gray-400">
          Your message has been sent. We respond {SITE.responseTime}. If it&apos;s urgent, call us on{' '}
          <a href={SITE.phoneHref} className="text-white underline underline-offset-4">{SITE.phone}</a>.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="rounded-full bg-[#004bff] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#003cb3] transition-colors">
            Back to Home
          </Link>
          <Link href="/events" className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
            See Upcoming Events
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
