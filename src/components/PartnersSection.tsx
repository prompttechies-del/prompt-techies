'use client';

import React from 'react';

export default function PartnersSection() {
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" },
    { name: "Uber", logo: "/logo_uber.png" },
    { name: "Adobe", logo: "/logo_adobe.png" },
    { name: "Airbnb", logo: "/logo_airbnb.png" },
    { name: "IBM", logo: "/logo_ibm.png" },
    { name: "Oracle", logo: "/logo_oracle.png" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" },
    { name: "TCS", logo: "https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/3840px-Wipro_Primary_Logo_Color_RGB.svg.png" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-14 flex flex-col items-center overflow-hidden border-y border-white/5">
      <div className="w-full max-w-4xl text-center mb-8 px-6">
        <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] bg-gradient-to-r from-[#ffe07d] via-[#f5af19] to-[#e65c00] bg-clip-text text-transparent font-mono">
          Mentors from Leading Global Companies
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-scroll-left whitespace-nowrap gap-16 py-4 items-center min-w-max">
          {/* Double the list for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center px-4 transition-transform duration-300 hover:scale-110">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 w-24 md:w-32 object-contain block filter brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
