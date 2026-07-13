import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'discipline', 'year', 'featured'],
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
      },
    },
    {
      name: 'projectId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Format: PRJ-YYYY-XXX',
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'discipline',
      type: 'select',
      required: true,
      options: [
        { label: 'Environmental', value: 'environmental' },
        { label: 'Occupational Hygiene', value: 'hygiene' },
        { label: 'Geotechnical', value: 'geotechnical' },
      ],
    },
    {
      name: 'client',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'challenge',
      type: 'textarea',
      admin: { description: 'The problem or context the client faced.' },
    },
    {
      name: 'approach',
      type: 'textarea',
      admin: { description: "How Austerra approached the project." },
    },
    {
      name: 'outcome',
      type: 'textarea',
      admin: { description: 'The result and value delivered.' },
    },
    {
      name: 'highlights',
      type: 'array',
      admin: { description: 'Short stat callouts, e.g. "12 ha Site"' },
      fields: [{ name: 'highlight', type: 'text', required: true }],
    },
    {
      name: 'fullDescription',
      type: 'richText',
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
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
