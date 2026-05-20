import React from 'react';

export default function CollegePartnersSection() {
  const colleges = [
    { name: "MIT", logo: "https://cmrithyderabad.edu.in/wp-content/uploads/2021/09/cropped-CMR-IT-logo-1.webp" },
    { name: "Stanford", logo: "https://www.kitss.edu.in/assets/front_end/img/logo/logo1.png.pagespeed.ce.buqsBiyoff.png" },
    { name: "Harvard", logo: "https://ik.imagekit.io/dypkhqxip/Screenshot%202026-03-22%20at%2016.54.03.png" }
  ];

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-12 px-6">
        <h2 className="text-3xl lg:text-4xl font-normal text-[#1a3646] tracking-tight mb-4">
          Institutions with MOU
        </h2>
        <p className="text-base font-normal text-[#1a3646] opacity-60">
          Official partnerships established for collaborative excellence and student growth.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-16 lg:gap-32 items-center">
        {colleges.map((college, index) => (
          <div key={index} className="flex items-center justify-center transition-all duration-300 hover:scale-105">
            <img
              src={college.logo}
              alt={college.name}
              className="h-16 lg:h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
