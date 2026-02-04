/**
 * Data exports for Tank Global Solutions
 * This file provides TypeScript-typed access to the JSON data files
 * Compatible with sitepins.com CMS editing
 */

// Import JSON data files
import siteData from './site.json';
import navigationData from './navigation.json';
import homeData from './pages/home.json';
import servicesData from './pages/services.json';
import contactData from './pages/contact.json';
import faqsData from './content/faqs.json';
import featuresData from './content/features.json';
import testimonialsData from './content/testimonials.json';
import tanksData from './products/tanks.json';

// Import legacy partnersData (contains complex SVGs)
// TODO: Consider migrating to image-based logos for CMS compatibility
import { partnersData } from '../src/data_files/constants';

// Re-export for easy access
export { 
  siteData,
  navigationData,
  partnersData,
  homeData,
  servicesData,
  contactData,
  faqsData,
  featuresData,
  testimonialsData,
  tanksData
};

// Legacy compatibility exports (matching old constants.ts structure)
export const SITE = {
  title: siteData.name,
  tagline: siteData.tagline,
  description: siteData.description,
  description_short: siteData.description,
  url: siteData.url,
  author: siteData.author,
};

export const SEO = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": siteData.url,
    url: siteData.url,
    name: siteData.name,
    description: siteData.description,
    isPartOf: {
      "@type": "WebSite",
      url: siteData.url,
      name: siteData.name,
      description: siteData.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: siteData.url,
  title: `${siteData.name}: ISO Tank Solutions`,
  description: siteData.description,
  image: "/src/images/social.png",
};

// Helper function to get localized content
export function getLocalizedContent<T extends { en: any; es: any }>(
  data: T,
  locale: 'en' | 'es' = 'en'
): T['en'] {
  return data[locale];
}

// Helper for FAQs - returns the full object with subTitle and faqs array
export function getFaqs(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(faqsData, locale);
}

// Helper for Features - returns array of features
export function getFeatures(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(featuresData, locale);
}

// Helper for Testimonials  
export function getTestimonials(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(testimonialsData, locale);
}

// Helper for Home page content
export function getHomeContent(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(homeData, locale);
}

// Helper for Services page content
export function getServicesContent(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(servicesData, locale);
}

// Helper for Contact page content
export function getContactContent(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(contactData, locale);
}

// Helper for Navigation
export function getNavigation(locale: 'en' | 'es' = 'en') {
  return getLocalizedContent(navigationData, locale);
}

// Products helpers
export function getFeaturedTanks() {
  return tanksData.filter(tank => tank.featured);
}

export function getTankById(id: string) {
  return tanksData.find(tank => tank.id === id);
}

export function getTanksByCategory(category: string) {
  return tanksData.filter(tank => tank.category === category);
}
