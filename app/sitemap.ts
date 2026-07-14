import type { MetadataRoute } from 'next'
import { getProjects, getInsights } from '@/lib/payload'

const BASE = process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://austerra.com.au'

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: BASE,                                      priority: 1.0, changeFrequency: 'monthly' },
  { url: `${BASE}/about`,                           priority: 0.8, changeFrequency: 'monthly' },
  { url: `${BASE}/services`,                        priority: 0.9, changeFrequency: 'monthly' },
  { url: `${BASE}/services/environmental`,          priority: 0.9, changeFrequency: 'monthly' },
  { url: `${BASE}/services/occupational-hygiene`,   priority: 0.9, changeFrequency: 'monthly' },
  { url: `${BASE}/services/geotechnical`,           priority: 0.9, changeFrequency: 'monthly' },
  { url: `${BASE}/projects`,                        priority: 0.7, changeFrequency: 'weekly'  },
  { url: `${BASE}/insights`,                        priority: 0.7, changeFrequency: 'weekly'  },
  { url: `${BASE}/careers`,                         priority: 0.6, changeFrequency: 'weekly'  },
  { url: `${BASE}/contact`,                         priority: 0.7, changeFrequency: 'yearly'  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, insights] = await Promise.all([getProjects(), getInsights()])

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  const insightRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${BASE}/insights/${i.slug}`,
    lastModified: new Date(i.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...STATIC_ROUTES, ...projectRoutes, ...insightRoutes]
}
