import type { TypedObject } from 'sanity'
import { z } from 'zod'

import { schemaForType } from './schemaForType'

// All blocks will validate against this initially
export const baseTypedObjectZ = z
  .object({
    _type: z.string(),
    _key: z.string().optional(),
  })
  .passthrough()

export const typedObjectZ = schemaForType<TypedObject>()(baseTypedObjectZ)

export const typedObjectBlockZ = baseTypedObjectZ.extend({
  style: z.string().optional(),
})

export type TypedObjectBlock = z.infer<typeof typedObjectBlockZ>
