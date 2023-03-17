import type { SanityImageCrop, SanityImageHotspot } from '@sanity/asset-utils'
import { z } from 'zod'

import { schemaForType } from './schemaForType'

export const sanityImageCropZ = schemaForType<SanityImageCrop>()(
  z.object({
    _type: z.literal('sanity.imageCrop'),
    left: z.number(),
    bottom: z.number(),
    right: z.number(),
    top: z.number(),
  })
)

export const sanityImageHotspotZ = schemaForType<SanityImageHotspot>()(
  z.object({
    _type: z.literal('sanity.imageHotspot'),
    width: z.number(),
    height: z.number(),
    x: z.number(),
    y: z.number(),
  })
)

export const sanityImageZ = z.object({
  _id: z.string(),
  _type: z.string(),
  altText: z.string().nullable(),
  description: z.string().nullable(),
  metadata: z
    .object({
      blurHash: z.string().nullable(),
    })
    .nullable(),
})
export const sanityImageObjectExtendedZ = z.object({
  asset: sanityImageZ,
  crop: sanityImageCropZ.nullable().transform((v) => v ?? undefined),
  hotspot: sanityImageHotspotZ.nullable().transform((v) => v ?? undefined),
})
