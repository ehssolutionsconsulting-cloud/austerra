const BASE = process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://austerra.com.au'

export const ORG_ID = `${BASE}/#organization`
export const WEBSITE_ID = `${BASE}/#website`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: 'Austerra Group',
    legalName: 'Austerra Group Pty Ltd',
    alternateName: 'Southern Earth',
    url: BASE,
    foundingDate: '2019',
    taxID: '12 345 678 901',
    email: 'enquiries@austerra.com.au',
    telephone: '+61-7-1234-5678',
    description:
      'Australian specialist environmental, occupational hygiene and geotechnical engineering consulting firm delivering services across infrastructure, energy, mining, construction, and government sectors.',
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Brisbane Office',
        streetAddress: 'Level 12, 123 Eagle Street',
        addressLocality: 'Brisbane',
        addressRegion: 'QLD',
        postalCode: '4000',
        addressCountry: 'AU',
      },
      {
        '@type': 'PostalAddress',
        name: 'Perth Office',
        streetAddress: 'Level 3, 45 St Georges Terrace',
        addressLocality: 'Perth',
        addressRegion: 'WA',
        postalCode: '6000',
        addressCountry: 'AU',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61-7-1234-5678',
      contactType: 'customer service',
      email: 'enquiries@austerra.com.au',
      availableLanguage: 'en-AU',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    knowsAbout: [
      'Environmental Impact Assessment',
      'Contamination Investigation and Remediation',
      'Acid Sulfate Soils Assessment',
      'Flora and Fauna Surveys',
      'Occupational Hygiene',
      'Hazardous Materials Surveys',
      'Asbestos Management',
      'Workplace Noise and Vibration Assessment',
      'Geotechnical Engineering',
      'Foundation Design',
      'Slope Stability Analysis',
      'Site Characterisation',
    ],
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BASE,
    name: 'Austerra Group',
    description:
      'Australian environmental, occupational hygiene and geotechnical engineering consulting',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-AU',
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  slug: string
  subServices: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${BASE}/services/${opts.slug}`,
    provider: { '@id': ORG_ID },
    serviceType: opts.name,
    areaServed: { '@type': 'Country', name: 'Australia' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${opts.name} Services`,
      itemListElement: opts.subServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

export function articleSchema(opts: {
  title: string
  description: string
  slug: string
  publishedAt: string
  author: string
  category: string
}) {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${BASE}/insights/${opts.slug}#article`,
    headline: opts.title,
    description: opts.description,
    datePublished: opts.publishedAt,
    dateModified: opts.publishedAt,
    url: `${BASE}/insights/${opts.slug}`,
    publisher: { '@id': ORG_ID },
    about: { '@type': 'Thing', name: opts.category },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-AU',
  }

  if (opts.author) {
    base.author = {
      '@type': 'Person',
      name: opts.author,
      worksFor: { '@id': ORG_ID },
    }
  } else {
    base.author = { '@id': ORG_ID }
  }

  return base
}
