import type { CollectionConfig } from 'payload'

export const TeamMember: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'initials',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 2,
      admin: {
        description: 'Exactly 2 characters, e.g. "AD"',
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 99,
      admin: {
        description: 'Lower numbers appear first',
        position: 'sidebar',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'qualifications',
      type: 'textarea',
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
