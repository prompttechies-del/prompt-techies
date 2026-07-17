export const baseUrl = 'https://www.prompttechies.in';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prompt Techies",
  "legalName": "TROVO FI PRIVATE LIMITED",
  "url": baseUrl,
  "logo": `${baseUrl}/hero.png`,
  "image": `${baseUrl}/hero.png`,
  "description": "Prompt Techies is a student-focused technology and innovation ecosystem that helps students learn AI, build real-world projects, participate in hackathons, gain internships, receive mentorship, and launch startups.",
  "foundingLocation": "India",
  "award": ["DPIIT Recognized Startup", "MSME Registered Company"],
  "sameAs": [
    "https://www.linkedin.com/company/prompt-techies/",
    "https://twitter.com/prompttechies",
    "https://github.com/prompttechies-del"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@prompttechies.in",
    "availableLanguage": ["English"]
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Saahil Zameer Shaik",
      "jobTitle": "Founder & CEO"
    },
    {
      "@type": "Person",
      "name": "Mohammad Suhana",
      "jobTitle": "Co-Founder"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Prompt Techies",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prompt Techies",
  "legalName": "TROVO FI PRIVATE LIMITED",
  "image": `${baseUrl}/hero.png`,
  "url": baseUrl,
  "telephone": "",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "",
    "addressCountry": "IN"
  }
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Advanced AI & Generative AI Training",
  "description": "Learn Generative AI, Machine Learning, and Prompt Engineering through practical workshops.",
  "provider": {
    "@type": "Organization",
    "name": "Prompt Techies",
    "sameAs": baseUrl
  }
};

export const saahilSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saahil Zameer Shaik",
  "jobTitle": "Founder & Chief Executive Officer (CEO)",
  "worksFor": {
    "@type": "Organization",
    "name": "Prompt Techies"
  },
  "url": `${baseUrl}/about#saahil-zameer`,
  "image": `${baseUrl}/saahil.jpg`,
  "description": "Saahil founded Prompt Techies with the vision of transforming ambitious students into skilled innovators and future founders. He leads the organization's long term strategy, partnerships, product vision, and ecosystem growth."
};

export const suhanaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohammad Suhana",
  "jobTitle": "Co-Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Prompt Techies"
  },
  "url": `${baseUrl}/about#mohammad-suhana`,
  "image": `${baseUrl}/suhana.jpg`,
  "description": "Mohammad Suhana works closely with the CEO to shape the organization's strategic direction and expand its impact."
};

export const amarnadhSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amarnadh Reddy Nanubala",
  "jobTitle": "Chief Technology Officer (CTO)",
  "worksFor": {
    "@type": "Organization",
    "name": "Prompt Techies"
  },
  "url": `${baseUrl}/about#amarnadh-reddy`,
  "image": `${baseUrl}/amarnadh.jpg`,
  "description": "Amarnadh leads the technology vision of Prompt Techies, overseeing product architecture, software development, and AI initiatives."
};

export const meghanaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Meghana Thipanni",
  "jobTitle": "Chief Operating Officer (COO)",
  "worksFor": {
    "@type": "Organization",
    "name": "Prompt Techies"
  },
  "url": `${baseUrl}/about#meghana-thipanni`,
  "image": `${baseUrl}/meghana.jpg`,
  "description": "Meghana manages the day to day operations of Prompt Techies, ensuring seamless execution across programs, events, and partnerships."
};

export const prabhasSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prabhas Banavath",
  "jobTitle": "Chief Marketing Officer (CMO)",
  "worksFor": {
    "@type": "Organization",
    "name": "Prompt Techies"
  },
  "url": `${baseUrl}/about#prabhas-banavath`,
  "image": `${baseUrl}/prabhas.jpg`,
  "description": "Prabhas drives the marketing and communication strategy of Prompt Techies, leading brand campaigns and digital marketing."
};

export const ananyaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nomula Ananya Reddy",
  "jobTitle": "Chief Brand & Business Officer (CBBO)",
  "worksFor": {
    "@type": "Organization",
    "name": "Prompt Techies"
  },
  "url": `${baseUrl}/about#ananya-reddy`,
  "image": `${baseUrl}/ananya.jpg`,
  "description": "Ananya leads Prompt Techies' brand identity and business growth initiatives, developing strategic partnerships."
};

export const allPeopleSchemas = [
  saahilSchema,
  suhanaSchema,
  amarnadhSchema,
  meghanaSchema,
  prabhasSchema,
  ananyaSchema
];
