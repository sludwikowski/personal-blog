import React from 'react'
import type { PortableTextTypeComponentProps } from '@portabletext/react'
import type { Language } from 'prism-react-renderer'
import { z } from 'zod'
import Prism from './Prism'

import { baseTypedObjectZ } from '@/types/block'

export const typedObjectCodeZ = baseTypedObjectZ.extend({
  _type: z.literal('code'),
  code: z.string().optional(),
  language: z.string().optional(),
  highlightedLines: z.array(z.number()).optional(),
})

export type TypedObjectCode = z.infer<typeof typedObjectCodeZ>

export default function TypeCode(props: PortableTextTypeComponentProps<TypedObjectCode>) {
  const value = React.useMemo(() => typedObjectCodeZ.parse(props.value), [props.value])
  const language = value?.language === 'groq' ? 'json' : value.language

  return value.code ? (
    <div className="not-prose">
      <Prism
        code={value.code}
        language={language as Language}
        highlightedLines={value?.highlightedLines ? value?.highlightedLines : []}
      />
    </div>
  ) : null
}
