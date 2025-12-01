import type { Package, FAQ } from './types';

export const packages: Package[] = [
  {
    name: 'Landing Page Package',
    tagline: 'Perfect for freelancers and small businesses.',
    description:
      'A custom-designed landing page focused on clarity and conversions, fully responsive and fast.',
    features: [
      'Custom-designed landing page',
      'Mobile responsive layout',
      'Basic SEO setup',
      'Fast delivery (2–4 days)',
      'Optional changes billed per request',
    ],
    startingPrice: '$249',
    typicalRange: '$249–$399',
    highlight: 'Best for quick online presence',
  },
  {
    name: 'Pro Business Website',
    tagline: 'For growing businesses that need more pages.',
    description:
      'A multi-page business website with hosting and deployment handled for you.',
    features: [
      'Up to 5 pages (Home, About, Services, Contact, Custom)',
      'Hosting & deployment setup',
      'Secure custom domain connection',
      'Basic SEO & performance optimization',
      'Monthly hosting + domain subscription',
    ],
    startingPrice: '$499',
    typicalRange: '$499–$899',
    highlight: 'Most popular for small businesses',
  },
  {
    name: 'Premium Website + Admin Panel (CMS)',
    tagline: 'Edit your website content anytime.',
    description:
      'Everything in Pro, plus a custom admin panel so you can manage your own content.',
    features: [
      'All Pro Business Website features',
      'Custom content management (CMS)',
      'Self-service text & image editing',
      'Unlimited content updates (you edit)',
      'Ongoing support available',
    ],
    startingPrice: '$899',
    typicalRange: '$899–$1,599',
    highlight: 'Ideal for long-term content management',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How fast can I get my website?',
    answer:
      'Most landing pages take around 2–4 days. Pro and Premium packages typically take 5–7 days, depending on scope and feedback rounds.',
  },
  {
    question: 'Do you offer changes after delivery?',
    answer:
      'Yes. For Landing & Pro packages, content updates can be requested anytime and are billed per update. Premium includes a self-managed admin panel, so you can edit your content whenever you like.',
  },
  {
    question: 'Do you support multiple languages?',
    answer:
      'Yes. Multi-language websites are available upon request. We can discuss your target markets and suggest a structure that works best.',
  },
  {
    question: 'Do I own my website?',
    answer:
      "Yes. You always own your website. We'll also help you set up and manage your domain so it stays in your control.",
  },
  {
    question: 'How does regional pricing work?',
    answer:
      'We work with businesses in Israel, India, Europe, the US & Canada. Final quotes are adjusted based on region and business size to keep pricing fair and accessible.',
  },
];
