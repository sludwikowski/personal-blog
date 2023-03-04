import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'My_personal-Blog',
  title: 'My_personal-Blog',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
})
