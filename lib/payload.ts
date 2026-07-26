import { cache } from 'react'
import { getPayload } from 'payload'
import type { Where } from 'payload'
import configPromise from '@payload-config'

// Single Payload instance per request — cache() memoizes across the render tree
const client = cache(async () => getPayload({ config: configPromise }))

// ─── Helpers ─────────────────────────────────────────────────────────────────

function lexicalToText(data: unknown): string {
  function extract(node: unknown): string {
    if (!node || typeof node !== 'object') return ''
    const n = node as { type?: string; text?: string; children?: unknown[] }
    if (n.type === 'text') return n.text ?? ''
    if (Array.isArray(n.children)) return n.children.map(extract).join('')
    return ''
  }
  const root = (data as { root?: { children?: unknown[] } } | null)?.root
  if (!root?.children) return ''
  return root.children.map(extract).filter(Boolean).join('\n\n').trim()
}

function estimateReadTime(body: unknown): string {
  function countWords(node: unknown): number {
    if (!node || typeof node !== 'object') return 0
    const n = node as { type?: string; text?: string; children?: unknown[] }
    if (n.type === 'text') return (n.text ?? '').split(/\s+/).filter(Boolean).length
    if (Array.isArray(n.children)) return n.children.reduce<number>((s, c) => s + countWords(c), 0)
    return 0
  }
  const root = (body as { root?: { children?: unknown[] } } | null)?.root
  if (!root?.children) return '1 min read'
  const words = root.children.reduce<number>((s, c) => s + countWords(c), 0)
  return `${Math.max(1, Math.round(words / 238))} min read`
}

function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) return []
  return (tags as { tag?: string }[]).map(t => t.tag ?? '').filter(Boolean)
}

// ─── Normalised types (also used by components via import type) ───────────────

export type CmsProject = {
  slug: string
  projectId: string
  client: string
  year: number
  location: string
  discipline: string
  featured: boolean
  title: string
  shortDescription: string
  tags: string[]
  image: string | null
  highlights: string[]
  challenge: string | null
  approach: string | null
  outcome: string | null
}

export type CmsService = {
  slug: string
  title: string
  disciplineNumber: string
  accentColor: string
  shortDescription: string
  fullDescription: unknown
  subServices: string[]
  tags: string[]
  featuredImage: string | null
  stats: { value: string; label: string }[]
}

export type CmsInsight = {
  slug: string
  publishedAt: string
  category: string
  title: string
  excerpt: string
  author: string
  readTime: string
  body: unknown
}

export type CmsTeamMember = {
  initials: string
  name: string
  role: string
  qualifications: string
  bio: string
}

export type CmsJobListing = {
  id: string
  title: string
  location: string
  type: string
  discipline: string
  closingDate: string
  active: boolean
  description: unknown
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function normalizeProject(doc: Record<string, unknown>): CmsProject {
  const img = doc.coverImage as Record<string, unknown> | null | undefined
  return {
    slug: String(doc.slug ?? ''),
    projectId: String(doc.projectId ?? ''),
    client: String(doc.client ?? ''),
    year: Number(doc.year ?? 0),
    location: String(doc.location ?? ''),
    discipline: String(doc.discipline ?? ''),
    featured: Boolean(doc.featured),
    title: String(doc.title ?? ''),
    shortDescription: String(doc.shortDescription ?? ''),
    tags: normalizeTags(doc.tags),
    image: img?.url ? String(img.url) : null,
    highlights: Array.isArray(doc.highlights)
      ? (doc.highlights as { highlight?: string }[])
          .map(h => String(h.highlight ?? ''))
          .filter(Boolean)
      : [],
    challenge: doc.challenge ? String(doc.challenge) : null,
    approach: doc.approach ? String(doc.approach) : null,
    outcome: doc.outcome ? String(doc.outcome) : null,
  }
}

export const getProjects = cache(async (opts?: {
  discipline?: string
  featured?: boolean
  limit?: number
}): Promise<CmsProject[]> => {
  const payload = await client()
  const where: Where = {}
  if (opts?.discipline) where.discipline = { equals: opts.discipline }
  if (opts?.featured !== undefined) where.featured = { equals: opts.featured }
  const result = await payload.find({
    collection: 'projects',
    where,
    depth: 1,
    limit: opts?.limit ?? 100,
    sort: '-year',
  })
  return result.docs.map(doc => normalizeProject(doc as unknown as Record<string, unknown>))
})

export const getProjectBySlug = cache(async (slug: string): Promise<CmsProject | null> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })
  const doc = result.docs[0]
  return doc ? normalizeProject(doc as unknown as Record<string, unknown>) : null
})

// ─── Services ─────────────────────────────────────────────────────────────────

function normalizeService(doc: Record<string, unknown>): CmsService {
  const img = doc.featuredImage as Record<string, unknown> | null | undefined
  return {
    slug: String(doc.slug ?? ''),
    title: String(doc.title ?? ''),
    disciplineNumber: String(doc.disciplineNumber ?? ''),
    accentColor: String(doc.accentColor ?? ''),
    shortDescription: String(doc.shortDescription ?? ''),
    fullDescription: doc.fullDescription ?? null,
    subServices: Array.isArray(doc.subServices)
      ? (doc.subServices as { title?: string }[])
          .map(s => String(s.title ?? ''))
          .filter(Boolean)
      : [],
    tags: normalizeTags(doc.tags),
    featuredImage: img?.url ? String(img.url) : null,
    stats: Array.isArray(doc.stats)
      ? (doc.stats as { value?: string; label?: string }[])
          .map(s => ({ value: String(s.value ?? ''), label: String(s.label ?? '') }))
          .filter(s => s.value)
      : [],
  }
}

export const getServices = cache(async (opts?: { limit?: number }): Promise<CmsService[]> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'services',
    depth: 1,
    limit: opts?.limit ?? 100,
    sort: 'disciplineNumber',
  })
  return result.docs.map(doc => normalizeService(doc as unknown as Record<string, unknown>))
})

export const getServiceBySlug = cache(async (slug: string): Promise<CmsService | null> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })
  const doc = result.docs[0]
  return doc ? normalizeService(doc as unknown as Record<string, unknown>) : null
})

// ─── Insights ─────────────────────────────────────────────────────────────────

function normalizeInsight(doc: Record<string, unknown>): CmsInsight {
  const author = doc.author as Record<string, unknown> | null | undefined
  return {
    slug: String(doc.slug ?? ''),
    publishedAt: String(doc.publishedAt ?? ''),
    category: String(doc.category ?? ''),
    title: String(doc.title ?? ''),
    excerpt: String(doc.excerpt ?? ''),
    author: author?.name ? String(author.name) : '',
    readTime: estimateReadTime(doc.body),
    body: doc.body ?? null,
  }
}

export const getInsights = cache(async (opts?: { limit?: number }): Promise<CmsInsight[]> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'insights',
    where: { status: { equals: 'published' } },
    depth: 1,
    limit: opts?.limit ?? 100,
    sort: '-publishedAt',
  })
  return result.docs.map(doc => normalizeInsight(doc as unknown as Record<string, unknown>))
})

export const getInsightBySlug = cache(async (slug: string): Promise<CmsInsight | null> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'insights',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    depth: 1,
    limit: 1,
  })
  const doc = result.docs[0]
  return doc ? normalizeInsight(doc as unknown as Record<string, unknown>) : null
})

// ─── Team Members ─────────────────────────────────────────────────────────────

export const getTeamMembers = cache(async (): Promise<CmsTeamMember[]> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'team-members',
    sort: 'order',
    depth: 0,
  })
  return result.docs.map(doc => {
    const d = doc as unknown as Record<string, unknown>
    return {
      initials: String(d.initials ?? ''),
      name: String(d.name ?? ''),
      role: String(d.role ?? ''),
      qualifications: String(d.qualifications ?? ''),
      bio: lexicalToText(d.bio),
    }
  })
})

// ─── Job Listings ─────────────────────────────────────────────────────────────

export const getJobListings = cache(async (): Promise<CmsJobListing[]> => {
  const payload = await client()
  const result = await payload.find({
    collection: 'job-listings',
    where: { active: { equals: true } },
    sort: 'closingDate',
    depth: 0,
  })
  return result.docs.map(doc => {
    const d = doc as unknown as Record<string, unknown>
    return {
      id: String(d.id ?? ''),
      title: String(d.title ?? ''),
      location: String(d.location ?? ''),
      type: String(d.type ?? ''),
      discipline: String(d.discipline ?? ''),
      closingDate: String(d.closingDate ?? ''),
      active: Boolean(d.active),
      description: d.description ?? null,
    }
  })
})
