import type { CollectionConfig } from 'payload'

export const Service: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'disciplineNumber', 'accentColor'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL path segment — lowercase letters, numbers, and hyphens only. No spaces or capitals.',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return 'Slug is required'
        if (!/^[a-z0-9-]+$/.test(value)) {
          return 'Slug must be lowercase with hyphens only — e.g. "occupational-hygiene" not "Occupational Hygiene"'
        }
        return true
      },
    },
    {
      name: 'disciplineNumber',
      type: 'select',
      required: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: '01 — Environmental', value: '1' },
        { label: '02 — Occupational Hygiene', value: '2' },
        { label: '03 — Geotechnical', value: '3' },
      ],
    },
    {
      name: 'accentColor',
      type: 'select',
      required: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Red (Environmental)', value: 'red' },
        { label: 'Olive (Occupational Hygiene)', value: 'olive' },
        { label: 'Stone (Geotechnical)', value: 'stone' },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'subServices',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        description: 'Key statistics shown on the discipline detail page (e.g. "80+" / "EIA processes")',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { placeholder: '80+' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { placeholder: 'EIA processes' },
        },
      ],
    },
  ],
}
