import React from 'react'

import { BlockItem } from '@/typings'
import { scrollableKey } from '@/lib/scrollableId'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createCanonicalWithId(hash: string) {
  if (typeof document === 'undefined') {
    return null
  }

  return `${window.location.href}#${hash}`
}

function BlockHeaderChildren({ children }: { children: React.ReactNode | string }) {
  return (
    <>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-end text-xl font-bold text-blue-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
      {children}
    </>
  )
}

export default function BlockHeader(props: BlockItem) {
  const { children, value } = props

  const id = scrollableKey(value._key)

  return React.createElement(
    value.style,
    {
      id,
      className: `pr-10 text-3xl font-bold text-blue-500 relative group hover:cursor-pointer`,
    },
    BlockHeaderChildren({ children })
  )
}
