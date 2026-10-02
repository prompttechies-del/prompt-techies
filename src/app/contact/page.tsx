import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import Footer from "@/components/Footer";
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';
import { generalFaqs } from '@/data/faqs';

import {generateWebPageSchema, generateBreadcrumbSchema } from '@/data/seoData';

export const metadata = buildMetadata({
  title: 'Contact Us | Prompt Techies HQ',
  description: 'Get in touch with the Prompt Techies national portal team. Reach out for collaborations, institutional nodes, or technical support.',
  path: '/contact',
});

export default function ContactPage() {
  const webpageSchema = generateWebPageSchema(
    "Contact Prompt Techies",
    "Get in touch with the Prompt Techies national portal team. Reach out for collaborations, institutional nodes, or technical support.",
    "/contact"
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "" },
    { name: "Contact", item: "/contact" }
  ]);

  return (
    <main id="main" className="relative flex-1 bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative pt-44 md:pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5">
        <Breadcrumbs items={[{ name: 'Contact' }]} />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)]">
            Contact Us
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Connect with <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">Prompt Techies</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Reach out to our national portal team for collaborations, institutional nodes, or support.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00c8ff]/30 bg-[#00c8ff]/5 px-4 py-2 text-sm text-[#00c8ff]">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#00c8ff] animate-pulse" />
            We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Address and Map Form Section */}
      <section className="py-24 px-6 flex justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#004bff]">Email</h3>
              <p className="text-xl font-medium text-gray-200">prompttechies@gmail.com</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#004bff]">Phone</h3>
              <p className="text-xl font-medium text-gray-200">+91 8008087702</p>
            </div>
            <div className="flex flex-col gap-3 border-t border-gray-800 pt-8">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#004bff]">📍 Head Office</h3>
              <p className="text-lg font-medium text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Prompt Techies</span><br />
                Flat No. 304, Plot No. 155 & 156,<br />
                Sai Lakshmi Residency,<br />
                IDPL Colony, Beside Reddy’s Factory,<br />
                Bachupally, Medchal-Malkajgiri District,<br />
                Hyderabad, Telangana – 500090.
              </p>
            </div>
          <div className="flex flex-col gap-4 border-t border-gray-800 pt-8">
              <div className="w-full h-72 rounded-3xl overflow-hidden border border-gray-800">
                <iframe
                  title="Prompt Techies head office on Google Maps"
                  src="https://www.google.com/maps?q=Sai+Lakshmi+Residency+IDPL+Colony+Bachupally+Hyderabad+500090&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Sai+Lakshmi+Residency+IDPL+Colony+Bachupally+Hyderabad+500090"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#00c8ff] hover:text-white transition-colors w-fit"
              >
                Get directions &rarr;
              </a>
            </div>
          </div>
          
          <div className="w-full self-start bg-[#121212] rounded-[32px] overflow-hidden border border-gray-800 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <Faq items={generalFaqs.slice(1, 4).concat(generalFaqs[7])} />
      <Footer />
    </main>
  );
}
