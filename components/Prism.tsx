/* eslint-disable */
'use client'
import { useCallback, useRef, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

import Highlight, { defaultProps } from 'prism-react-renderer'
import type { Language } from 'prism-react-renderer'

import theme from 'prism-react-renderer/themes/nightOwl'
import { ClipboardIcon } from '@heroicons/react/24/outline'

type PrismProps = {
  code: string
  language?: Language
  highlightedLines?: number[]
}

const augmentLineProps = (lineNum: number, highlightedLines: number[]) => {
  const isHighlighted = highlightedLines.includes(Number(lineNum + 1))
  return {
    className: isHighlighted ? '-mx-4 px-4 md:-mx-8 md:px-8' : undefined,
  }
}

export default function Prism(props: PrismProps) {
  const { code = ``, language, highlightedLines = [] } = props
  const [buttonLabel, setButtonLabel] = useState<`Copy` | `Copied`>(`Copy`)
  const copyButtonRef = useRef<HTMLButtonElement>(null)
  const [, setCopiedText] = useCopyToClipboard()

  const handleCopy = useCallback(() => {
    setCopiedText(code.trim())

    setButtonLabel(`Copied`)

    setTimeout(() => {
      setButtonLabel(`Copy`)
      if (copyButtonRef.current) {
        copyButtonRef.current.blur()
      }
    }, 3000)
  }, [code, setCopiedText])

  if (!code) {
    return null
  }

  return (
    <div className="relative">
      <button
        className="absolute top-1 -right-3 flex items-center gap-1 bg-blue-500 px-3 py-2 font-mono text-xs text-white transition-colors duration-500 ease-in-out hover:bg-blue-600 focus:bg-white focus:text-blue-500"
        onClick={handleCopy}
        ref={copyButtonRef}
      >
        <ClipboardIcon className="h-auto w-4" />
        {buttonLabel}
      </button>
      <Highlight {...defaultProps} code={code.trim()} language={language || 'markup'} theme={theme}>
        {({ className, style, tokens, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, lineI) => (
              <div key={lineI} {...augmentLineProps(lineI, highlightedLines)}>
                {line.map((token, tokenI) => (
                  <span key={tokenI} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
