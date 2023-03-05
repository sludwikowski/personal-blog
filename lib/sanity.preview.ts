'use client'
import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from './sanity.client'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly })
