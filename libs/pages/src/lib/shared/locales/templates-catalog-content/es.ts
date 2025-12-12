import type { TemplatesCatalogLocaleStrings } from './en';

/**
 * Spanish locale strings for Templates Catalog page
 */
export const es: TemplatesCatalogLocaleStrings = {
  title: 'Plantillas de Páginas de Destino',
  subtitle:
    'Elige entre nuestra colección de plantillas diseñadas profesionalmente. Haz clic en cualquier plantilla para previsualizarla en una nueva pestaña.',
  searchPlaceholder: 'Buscar plantillas...',
  searchAriaLabel: 'Buscar plantillas',
  clearAriaLabel: 'Limpiar búsqueda',
  categories: {
    all: 'Todas las Plantillas',
    saas: 'SaaS',
    portfolio: 'Portafolio',
    business: 'Negocios',
    ecommerce: 'Comercio Electrónico',
  },
  emptyState:
    'No se encontraron plantillas. Intenta ajustar tu búsqueda o filtros.',
  cta: {
    title: '¿Necesitas una plantilla personalizada?',
    description:
      'Podemos crear una página de destino completamente personalizada adaptada a las necesidades de tu negocio.',
    button: 'Contáctanos',
  },
  preview: 'Vista previa',
  templates: {
    'saas-launch': {
      name: 'Lanzamiento SaaS',
      description:
        'Página de destino SaaS moderna con tablas de precios y exhibición de características',
      tags: ['Moderno', 'Precios', 'Características'],
    },
    'portfolio-creative': {
      name: 'Portafolio Creativo',
      description:
        'Muestra tu trabajo con galerías elegantes y animaciones suaves',
      tags: ['Creativo', 'Galería', 'Minimalista'],
    },
    'business-pro': {
      name: 'Negocios Pro',
      description:
        'Sitio web empresarial profesional con servicios y secciones de contacto',
      tags: ['Profesional', 'Servicios', 'Contacto'],
    },
  },
};
