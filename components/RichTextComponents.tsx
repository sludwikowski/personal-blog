/* eslint-disable */
import Image from 'next/image'
import Link from 'next/link'

import urlFor from '@/lib/urlFor'

import TypeCode from './PortableText/TypeCode'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className={'relative  mx-auto h-96 w-full'}>
          <Image className={'object-contain'} src={urlFor(value).url()} alt={'Blog Post Image'} fill />
        </div>
      )
    },
    code: TypeCode,
  },
  list: {
    bullet: ({ children }: any) => (
      <div className={'m-auto max-w-md'}>
        {' '}
        <ul className={'list-outside list-disc space-y-2 py-5 italic text-gray-300 marker:text-yellow-400'}>
          {children}
        </ul>
      </div>
    ),
    number: ({ children }: any) => (
      <div className={'m-auto max-w-md'}>
        <ol
          className={
            'list-outside list-decimal space-y-2 rounded-2xl py-5 italic text-gray-300 marker:font-bold marker:text-orange-700'
          }
        >
          {children}
        </ol>
      </div>
    ),
  },
  block: {
    normal: ({ children }: any) => <div className={'mt-4 mb-1 max-w-4xl text-gray-200'}>{children}</div>,
    h1: ({ children }: any) => <h1 className={'py-5 text-5xl font-bold tracking-widest'}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={'py-5 text-4xl font-bold'}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={'py-5 text-3xl font-bold'}>{children}</h3>,
    h4: ({ children }: any) => <h4 className={'py-5 text-2xl font-bold'}>{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote
        className={
          'my-5 border-l-2 border-b-2 border-l-[#2563eb] border-b-[#2563eb] py-5	 pl-5 text-center text-sm font-light italic tracking-widest text-gray-400'
        }
      >
        {children}
      </blockquote>
    ),
  },
  code: {},
  marks: {
    strong: ({ children }: any) => <strong className={'font-bold text-[#2563eb]'}>{children}</strong>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          className={'font-bold underline decoration-[#2563eb] hover:text-[#2563eb] hover:decoration-white'}
        >
          {children}
        </Link>
      )
    },
  },
}
