import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className={'relative  mx-auto h-96 w-full'}>
          <Image className={'object-contain'} src={urlFor(value).url()} alt={'Blog Post Image'} fill />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className={'ml-10 list-disc space-y-2 py-2'}>{children}</ul>,
    number: ({ children }: any) => (
      <ol className={'ml-10 list-decimal space-y-2 py-5 italic text-gray-300'}>{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => <div className={'mt-4 mb-1 text-gray-200'}>{children}</div>,
    h1: ({ children }: any) => <h1 className={'py-10 text-5xl font-bold'}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={'py-10 text-4xl font-bold'}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={'py-10 text-3xl font-bold'}>{children}</h3>,
    h4: ({ children }: any) => <h4 className={'py-10 text-2xl font-bold'}>{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote
        className={'my-5 border-l-4 border-l-[#2563eb] py-5 pl-5 text-center text-sm font-light italic text-gray-400'}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }: any) => <code className={'border-4 border-[#2563eb]'}>{children}</code>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined
      return (
        <Link href={value.href} rel={rel} className={'font-bold underline decoration-[#2563eb] hover:decoration-black'}>
          {children}
        </Link>
      )
    },
  },
}
