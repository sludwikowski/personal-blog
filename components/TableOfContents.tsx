import type { Block } from '@/typings'
import { scrollableKey } from '@/lib/scrollableId'

import Label from './Label'

export default function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter((block) => ['h2', 'h3'].includes(block.style))

  if (!headings?.length) {
    return null
  }

  return (
    <>
      <ul className="sticky top-12 grid grid-cols-1 gap-y-4 font-mono text-xs lg:pr-12">
        <Label>Spis treści:</Label>
        {headings.map((heading) => (
          <li
            key={heading._key}
            className={heading.style === 'h3' ? `pl-3` : ``}
            style={{ textIndent: heading.style === 'h3' ? `-0.75rem` : `` }}
          >
            <a
              href={`#${scrollableKey(heading._key)}`}
              className="block text-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-200 dark:hover:text-white"
            >
              {heading.style === 'h3' ? `- ` : ``}
              {heading.children.map((child) => child.text).join('')}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
