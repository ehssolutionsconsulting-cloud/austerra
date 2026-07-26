import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://austerra.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                      priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/about`,                           priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services`,                        priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/environmental`,          priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/occupational-hygiene`,   priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/geotechnical`,           priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/careers`,                         priority: 0.6, changeFrequency: 'weekly'  },
    { url: `${BASE}/contact`,                         priority: 0.7, changeFrequency: 'yearly'  },
  ]
}
