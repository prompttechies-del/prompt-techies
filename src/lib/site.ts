export const SITE = {
  name: 'Prompt Techies',
  url: 'https://prompttechies.in',
  email: 'prompttechies@gmail.com',
  phone: '+91 8008087702',
  phoneHref: 'tel:+918008087702',
  // Update this if your real reply time differs; it is shown on /contact and /thank-you.
  responseTime: 'within 24 hours',
  address: {
    street: 'Flat No. 304, Plot No. 155 & 156, Sai Lakshmi Residency, IDPL Colony, Bachupally',
    district: 'Medchal-Malkajgiri District',
    city: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500090',
    country: 'IN',
  },
  social: {
    instagram: 'https://www.instagram.com/prompt_techies',
    linkedin: 'https://www.linkedin.com/in/prompt-techies-community-9a705a370',
    youtube: 'https://youtu.be/E6tT3WSOLdk',
  },
  joinUrl: 'https://forms.gle/L2rvjg4DvLUY6PR26',
} as const;

export const GOOGLE_FORM = {
  action:
    'https://docs.google.com/forms/d/e/1FAIpQLSc4RPfPEvGjolYCNAGJhYGxdC_ktLlA8pu3mqfFFXiYL7qSOQ/formResponse',
  fields: {
    name: 'entry.549492928',
    email: 'entry.1527356161',
    phone: 'entry.1976759774',
    address: 'entry.1546781732',
    reason: 'entry.362876342',
    comments: 'entry.847520408',
  },
  reasons: [
    'General Inquiry',
    'Technical Support',
    'Partnership/Collaboration',
    'Billing/Invoicing Question',
    'Feedback on Services',
  ],
} as const;
