import type { TemplatesCatalogLocaleStrings } from './en';

/**
 * French locale strings for Templates Catalog page
 */
export const fr: TemplatesCatalogLocaleStrings = {
  title: 'Modèles de Pages de Destination',
  subtitle:
    "Choisissez parmi notre collection de modèles conçus professionnellement. Cliquez sur n'importe quel modèle pour le prévisualiser dans un nouvel onglet.",
  searchPlaceholder: 'Rechercher des modèles...',
  searchAriaLabel: 'Rechercher des modèles',
  clearAriaLabel: 'Effacer la recherche',
  categories: {
    all: 'Tous les Modèles',
    saas: 'SaaS',
    portfolio: 'Portfolio',
    business: 'Affaires',
    ecommerce: 'E-commerce',
  },
  emptyState:
    "Aucun modèle trouvé. Essayez d'ajuster votre recherche ou vos filtres.",
  cta: {
    title: "Besoin d'un modèle personnalisé ?",
    description:
      'Nous pouvons créer une page de destination entièrement personnalisée adaptée aux besoins de votre entreprise.',
    button: 'Nous contacter',
  },
  preview: 'Aperçu',
  templates: {
    'saas-launch': {
      name: 'Lancement SaaS',
      description:
        'Page de destination SaaS moderne avec tableaux de prix et présentation des fonctionnalités',
      tags: ['Moderne', 'Prix', 'Fonctionnalités'],
    },
    'portfolio-creative': {
      name: 'Portfolio Créatif',
      description:
        'Présentez votre travail avec des galeries élégantes et des animations fluides',
      tags: ['Créatif', 'Galerie', 'Minimaliste'],
    },
    'business-pro': {
      name: 'Affaires Pro',
      description:
        "Site Web d'entreprise professionnel avec services et sections de contact",
      tags: ['Professionnel', 'Services', 'Contact'],
    },
  },
};
