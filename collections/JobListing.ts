import type { CollectionConfig } from 'payload'

export const JobListing: CollectionConfig = {
  slug: 'job-listings',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'discipline', 'type', 'active', 'closingDate'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Uncheck to hide this listing from the Careers page',
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Full-time', value: 'Full-time' },
        { label: 'Part-time', value: 'Part-time' },
        { label: 'Contract', value: 'Contract' },
      ],
    },
    {
      name: 'discipline',
      type: 'select',
      required: true,
      options: [
        { label: 'Environmental', value: 'environmental' },
        { label: 'Occupational Hygiene', value: 'hygiene' },
        { label: 'Geotechnical', value: 'geotechnical' },
        { label: 'General / All Disciplines', value: 'general' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'closingDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
}
