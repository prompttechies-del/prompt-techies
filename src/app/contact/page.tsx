import { Metadata } from 'next';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Us | Prompt Techies HQ',
  description: 'Get in touch with the Prompt Techies national portal team. Reach out for collaborations, institutional nodes, or technical support.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#121212] border-b border-white/5">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#ffe07d]/35 text-[#ffe07d] bg-[#f5af19]/5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 inline-block shadow-[0_0_15px_rgba(245,175,25,0.08)]">
            Contact Us
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Connect with <span className="bg-gradient-to-r from-[#00c8ff] via-[#004bff] to-[#00c8ff] bg-clip-text text-transparent">Prompt Techies</span>.
          </h1>
          <p className="text-base lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Reach out to our national portal team for collaborations, institutional nodes, or support.
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
          </div>
          
          <div className="w-full h-[1100px] bg-[#121212] rounded-[32px] overflow-hidden flex justify-center border border-gray-800 shadow-2xl">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc4RPfPEvGjolYCNAGJhYGxdC_ktLlA8pu3mqfFFXiYL7qSOQ/viewform?embedded=true" 
              width="100%" 
              height="1096" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full filter invert-[0.9] hue-rotate-180"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
