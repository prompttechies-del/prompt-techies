import { SITE } from '@/lib/site';

export type FaqItem = { q: string; a: string };

export const generalFaqs: FaqItem[] = [
  {
    q: 'What is Prompt Techies?',
    a: 'Prompt Techies is a student-focused technology and innovation ecosystem based in Hyderabad. We run AI workshops, hackathons, bootcamps, mentorship and startup-building programs that help students move from learning to building real products.',
  },
  {
    q: 'Who can join Prompt Techies programs?',
    a: 'Our programs are designed for students, early-stage builders, developers and founders. You do not need to be from a specific college or branch. If you want to learn, build and collaborate, you can get started through our registration form.',
  },
  {
    q: 'How do I register or get started?',
    a: 'Use the Register Now or Get Started buttons on the site, or contact us directly. For events, follow our Instagram page, where announcements are posted first.',
  },
  {
    q: 'Can my college or institution partner with Prompt Techies?',
    a: 'Yes. We work with universities and institutions to bring hackathons, AI workshops, bootcamps and innovation programs to campus. Visit the Campus Chapters page or contact us and we will get in touch.',
  },
  {
    q: 'Can companies sponsor or partner on events and hackathons?',
    a: 'Yes. Companies can co-create hackathons, workshops and developer programs, or reach our student and developer community through campaigns. See the Enterprise AI Partnerships page or send us a message.',
  },
  {
    q: 'Is Prompt Techies a registered company?',
    a: 'Prompt Techies operates under TROVO FI PRIVATE LIMITED and is recognised under DPIIT (Startup India) and registered as an MSME. The recognition logos are shown in the website footer.',
  },
  {
    q: 'Where are you located?',
    a: `Our head office is in ${SITE.address.city}, ${SITE.address.region} (${SITE.address.postalCode}). The full address and a map are on the Contact page.`,
  },
  {
    q: 'How quickly will you reply to my enquiry?',
    a: `We aim to respond ${SITE.responseTime}. You can also call us on ${SITE.phone} or email ${SITE.email}.`,
  },
];

export const programsFaqs: FaqItem[] = [
  generalFaqs[0],
  {
    q: 'What does the startup roadmap cover?',
    a: 'The roadmap takes you through five stages: Discover (find a problem worth solving), Validate (prove the idea), Build (develop a working product), Launch (reach real users) and Scale (build the company).',
  },
  {
    q: 'Do I need a startup idea to join?',
    a: 'No. You can join to learn emerging technologies, take part in hackathons, or find a team. If you already have an idea, our mentors help you validate it and plan the next steps.',
  },
  generalFaqs[2],
  generalFaqs[7],
];

export const eventsFaqs: FaqItem[] = [
  {
    q: 'What kinds of events do you run?',
    a: 'Innovation summits, technical hackathons, AI and technology bootcamps, workshops and career-readiness programs.',
  },
  generalFaqs[2],
  {
    q: 'Can you host an event at our campus?',
    a: 'Yes. Use the Host an Event button or contact us with your institution, expected audience and preferred format, and our team will follow up.',
  },
  generalFaqs[4],
  generalFaqs[7],
];

export const institutionsFaqs: FaqItem[] = [
  generalFaqs[3],
  {
    q: 'What can a campus chapter include?',
    a: 'AI and emerging-technology programs, technical bootcamps, innovation hackathons, coding challenges, internship pathways and ideation or startup bootcamps.',
  },
  {
    q: 'How do we start a conversation?',
    a: 'Send us a message from the Contact page or through Instagram. Tell us about your institution and what you would like to build with your students.',
  },
  generalFaqs[7],
];

export const businessFaqs: FaqItem[] = [
  generalFaqs[4],
  {
    q: 'What partnership formats are available?',
    a: 'Sponsored AI hackathons, product workshops and bootcamps, developer evangelism and API adoption programs, university outreach, community branding campaigns, and hiring or internship programs.',
  },
  {
    q: 'Can we hire or intern students from your community?',
    a: 'Yes. We support project-based talent discovery, internship and hiring programs so companies can meet builders who have demonstrated their skills.',
  },
  generalFaqs[7],
];
