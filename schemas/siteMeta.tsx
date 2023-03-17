import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteMeta',
  title: 'Site meta',
  type: 'document',
  fields: [
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      type: 'blockContent',
    }),
  ],
})
