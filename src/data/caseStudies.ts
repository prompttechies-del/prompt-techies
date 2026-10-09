export type CaseStudy = {
  slug: string;
  title: string;
  audience: string;
  video?: string;
  challenge: string;
  approach: string;
  outcome: string;
  /** Add real, verified numbers here (e.g. "320 participants") and they will be displayed as badges. */
  metrics?: string[];
};

/**
 * Drafted from what is already published on prompttechies.in. Add verified metrics via `metrics`
 * (participants, projects shipped, hires, etc.) before promoting this page.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'campus-hackathons',
    title: 'Campus Hackathons with Industry Hiring Partners',
    audience: 'Universities & engineering colleges',
    video: '/dance.mp4',
    challenge:
      'Students often learn tools in class but rarely get to build under real constraints, or to be seen by people who hire.',
    approach:
      'We run challenge-driven hackathons where students form teams, solve real problems, build prototypes and present them, with hiring partners involved in the event.',
    outcome:
      'Participants leave with a working prototype, team experience and direct exposure to industry, which strengthens their portfolios for internships and jobs.',
  },
  {
    slug: 'innovation-summit-2026',
    title: 'Prompt Techies Innovation Summit 2026',
    audience: 'Students, founders & industry experts',
    video: '/events.mp4',
    challenge:
      'Ambitious students lack easy access to founders, mentors and peers across colleges in one place.',
    approach:
      'Our flagship summit in Hyderabad brings builders, founders and experts together for talks, workshops and hands-on building.',
    outcome:
      'A cross-college network of builders and mentors, and a pipeline of students ready to join hackathons, bootcamps and startup programs.',
  },
  {
    slug: 'startup-node',
    title: 'Idea to MVP with the Startup Node',
    audience: 'Student founders & early-stage builders',
    video: '/product.mp4',
    challenge:
      'Thousands of promising ideas never leave the classroom because teams lack technical support, mentorship and real users to test with.',
    approach:
      'We guide teams through Discover, Validate, Build, Launch and Scale, with MVP guidance, mentor access and live testing inside campus ecosystems.',
    outcome:
      'Teams move from a notebook idea to a testable product and understand the path toward incubation and funding readiness.',
  },
];
