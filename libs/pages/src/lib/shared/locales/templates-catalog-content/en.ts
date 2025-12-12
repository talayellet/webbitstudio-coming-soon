/**
 * English (US) locale strings for Templates Catalog page
 */
export const en = {
  title: 'Landing Page Templates',
  subtitle:
    'Choose from our collection of professionally designed templates. Click any template to preview it in a new tab.',
  searchPlaceholder: 'Search templates...',
  searchAriaLabel: 'Search templates',
  clearAriaLabel: 'Clear search',
  categories: {
    all: 'All Templates',
    saas: 'SaaS',
    portfolio: 'Portfolio',
    business: 'Business',
    ecommerce: 'E-commerce',
  },
  emptyState: 'No templates found. Try adjusting your search or filters.',
  cta: {
    title: 'Need a custom template?',
    description:
      'We can create a fully customized landing page tailored to your business needs.',
    button: 'Get in touch',
  },
  preview: 'Preview',
  templates: {
    'saas-launch': {
      name: 'SaaS Launch',
      description:
        'Modern SaaS landing page with pricing tables and feature showcases',
      tags: ['Modern', 'Pricing', 'Features'],
    },
    'portfolio-creative': {
      name: 'Creative Portfolio',
      description:
        'Showcase your work with elegant galleries and smooth animations',
      tags: ['Creative', 'Gallery', 'Minimal'],
    },
    'business-pro': {
      name: 'Business Pro',
      description:
        'Professional business website with services and contact sections',
      tags: ['Professional', 'Services', 'Contact'],
    },
  },
};

export type TemplatesCatalogLocaleStrings = typeof en;
