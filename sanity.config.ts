import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './schemas'
import { myTheme } from './theme'
import { getDefaultDocumentNode } from './structure'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'roadToReact',
  title: 'roadToReact',
  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
})
