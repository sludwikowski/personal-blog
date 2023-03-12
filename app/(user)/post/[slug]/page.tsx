/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from 'next-sanity'
import Image from 'next/image'

import Link from 'next/link'

import { PortableText } from '@portabletext/react'

import { client } from '@/lib/sanity.client'

import { Post } from '@/typings'

import urlFor from '@/lib/urlFor'

import { RichTextComponents } from '@/components/RichTextComponents'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

import TableOfContents from '@/components/TableOfContents'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 30
export async function generateStaticParams() {
  const query = groq`*[_type=='post'] 
  { slug }`

  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug: slug,
  }))
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
  }
  `
  const post: Post = await client.fetch(query, { slug })

  return (
    <>
      <div className={' absolute inset-0 mt-32 h-32 bg-blue-500 md:fixed md:right-auto md:mt-0 md:w-1/6'}>
        <div className={''}>
          <Image
            className={'absolute inset-0 block h-full object-cover md:min-h-screen '}
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            width={800}
            height={260}
          />
        </div>
      </div>
      <div className="lg:grid-cols-16 grid grid-cols-1 gap-12 px-4 pb-32 md:mt-0 md:grid-cols-12 md:gap-0 md:px-32">
        <div className="grid-col-1 grid gap-6 pt-48 md:col-span-8 md:col-start-4 md:py-24 lg:col-span-8 lg:col-start-3">
          <h1 className="text-4xl font-black leading-none tracking-tighter text-blue-500 md:text-6xl">{post.title}</h1>
          <p className="max-w-xl font-mono leading-relaxed md:text-lg md:leading-loose">{post.description}</p>
          <Link
            className="flex items-center gap-2 font-mono text-xs text-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-200 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            href={'https://github.com/sludwikowski'}
          >
            <PencilSquareIcon className="w-5" />
            Check my other projects
          </Link>
        </div>
        <div className="md:col-span-2 md:col-start-3 md:row-start-2 lg:col-span-3 lg:col-start-3">
          <TableOfContents blocks={post.body} />
        </div>
        <div className="md:col-span-6 md:col-start-6 md:row-start-2 lg:col-span-7 lg:col-start-6">
          <div className="mb-2">
            {new Date(post._createdAt).toLocaleDateString('pl-PL', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <div className="md:prose-lg lg:prose-xl prose-blue dark:prose-invert prose marker:text-blue-500 prose-strong:font-bold">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*// @ts-ignore*/}
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
