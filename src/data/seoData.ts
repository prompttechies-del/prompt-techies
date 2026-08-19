export const baseUrl = 'https://prompttechies.in';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prompt Techies",
  "legalName": "TROVO FI PRIVATE LIMITED",
  "url": baseUrl,
  "logo": `${baseUrl}/hero.png`,
  "image": `${baseUrl}/hero.png`,
  "description": "Prompt Techies is an AI-first technology company focused on building intelligent software, AI-powered products, automation solutions, developer platforms, and innovation-driven digital experiences.",
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
  "description": "Learn Generative AI, Machine Learning, and Prompt Engineering through practical developer workshops.",
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
  "description": "Saahil founded Prompt Techies with the vision of building cutting-edge AI products and developer tools. He leads the company's long-term strategy, product vision, enterprise partnerships, and corporate growth."
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
  "description": "Mohammad Suhana works closely with the CEO to shape the company's strategic direction and expand its global market presence."
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
  "description": "Amarnadh leads the technology vision of Prompt Techies, overseeing product architecture, cloud engineering, and AI initiatives."
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
  "description": "Meghana manages the day-to-day operations of Prompt Techies, ensuring seamless execution across software products, client services, and enterprise partnerships."
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
  "description": "Prabhas drives the global marketing and brand strategy of Prompt Techies, leading product growth and digital campaigns."
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
  "description": "Ananya leads Prompt Techies' brand identity and business development initiatives, securing key enterprise and partner relationships."
};

export const allPeopleSchemas = [
  saahilSchema,
  suhanaSchema,
  amarnadhSchema,
  meghanaSchema,
  prabhasSchema,
  ananyaSchema
];

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": `${baseUrl}${breadcrumb.item}`
  }))
});

export const generateWebPageSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": `${baseUrl}${url}`,
  "publisher": {
    "@type": "Organization",
    "name": "Prompt Techies"
  }
});

export const generateEventSchema = (name: string, description: string, startDate: string, endDate: string, locationName: string, url: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": name,
  "description": description,
  "startDate": startDate,
  "endDate": endDate,
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": locationName,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }
  },
  "image": [image],
  "organizer": {
    "@type": "Organization",
    "name": "Prompt Techies",
    "url": baseUrl
  },
  "url": `${baseUrl}${url}`
});

export const generateArticleSchema = (headline: string, description: string, image: string, datePublished: string, authorName: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": [image],
  "datePublished": datePublished,
  "author": {
    "@type": "Person",
    "name": authorName
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prompt Techies",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/hero.png`
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${baseUrl}${url}`
  }
});

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Prompt Techies Innovation Platform",
  "operatingSystem": "Web",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

